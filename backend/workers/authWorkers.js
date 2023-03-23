import bcrypt from "bcrypt"
import sql from "./sql.js"
import jwt from "jsonwebtoken"

const authSQL = {
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

    async signUp(username, email, password){
        try{
            const emailCheck = this.emailCheck(email)
            if (!emailCheck) return this.messages.invalidRequest
            
            const emailExistCheck = await this.emailExistCheck(email)
            if (emailExistCheck[0]) return this.messages.emailAlreadyInUse

            const hashPassword = await bcrypt.hash(password, 7)
            const query = "INSERT INTO users (username, email, token, password) VALUES(?, ?, ?, ?)"

            const token = jwt.sign({
                email: email,
                username: username,
            }, "SOME_SALT_FOR_HORSE")

            const data = [username, email, token, hashPassword]

            await sql.query(query, data).then(result => {return result})

            return this.messages.success
        }
        catch(err){return err}
    },

    async signIn(email, password){
        try{
            const query = "SELECT * FROM users WHERE email = ?"
            const data = [email]

            const result = await sql.query(query, data).then(result => {return result})

            const passwordCheck = await bcrypt.compare(password, result[0][0].password)
            
            if (passwordCheck) return result[0][0]
            else return this.messages.invalidPassword
        }
        catch(err){return err}
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

export default authSQL;