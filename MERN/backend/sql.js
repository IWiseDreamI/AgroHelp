import bcrypt from "bcrypt"
import mysql from "mysql2/promise"
import config from "./config.js"

const sql = mysql.createPool(config.db)

sql.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
})

const SQL = {

    messages: {
        success: {
            success: true
        },
        invalidRequest: {
            success: false,
            status: "Invalid request"
        },
        invalidPassword: {
            success: false,
            status: "Invalid password"
        },
        emailAlreadyInUse: {
            success: false,
            status: "Email already in use"
        },
        usernameAlreadyInUse: {
            success: false,
            status: "Username already in use"
        },
        notFound: {
            success: false,
            status: "User not found"
        },
        error: {
            sucess: false,
            status: "Something gone wrong"
        }
    },

    async addUser(username, email, password){
        try{
            const emailCheck = this.emailCheck(email)
            if (!emailCheck) return this.messages.invalidRequest
            
            const emailExistCheck = await this.emailExistCheck(email)
            if (emailExistCheck[0]) return this.messages.emailAlreadyInUse
            
            const usernameExistCheck = await this.usernameExistCheck(username)
            if (usernameExistCheck[0]) return this.messages.usernameAlreadyInUse
            
            const hashPassword = await bcrypt.hash(password, 7)
            const query = "INSERT INTO users (username, email, password) VALUES(?, ?, ?)"
            const data = [username, email, hashPassword]
            await sql.query(query, data).then(result =>{return result})
            return this.messages.success
        }
        catch(err){return err}
    },

    async logIn(username, password){
        try{
            const usernameExistCheck = await this.usernameExistCheck(username)
            if (!usernameExistCheck[0]) return this.messages.notFound
            
            const query = "SELECT * FROM users WHERE username = ?"
            const data = [username]

            const result = await sql.query(query, data).then(result => {return result})
            
            const passwordCheck = await bcrypt.compare(password, result[0][0].password)
            
            if (passwordCheck) return result[0][0]
            else return this.messages.invalidPassword
        }
        catch(err){return err}
    },

    async getAllUsers(){
        try{
            const query = "SELECT * FROM users"
            const result = await sql.query(query).then(result => {return result})
            return result[0]
        }
        catch(err){return err}
    },

    async addToken(userID, token){
        const query = "UPDATE users SET token = ? WHERE id = ?"
        const data = [token, userID]

        const result = await sql.query(query, data).then(result => {return result})

        if(result[0].warningStatus == 0) return this.messages.success
        else return this.messages.error
    },

    async usernameExistCheck(username){
        const query = "SELECT * FROM users WHERE username = ?"
        const data = [username]
        const result = await sql.query(query, data).then(result =>{return result})
        return result[0]
    },

    async emailExistCheck(email){
        const query = "SELECT * FROM users WHERE email = ?"
        const data = [email]
        const result = await sql.query(query, data).then(result =>{return result})
        return result[0]
    },

    async emailCheck(email){
        const regex = "/^\S+@\S+\.\S+$/"
        const emailCheck = email.match(regex)
        return emailCheck
    }
} 

export default SQL;