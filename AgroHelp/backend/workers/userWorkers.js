import sql from "./sql.js"

const userSQL = {
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

    async addPost(userID, data){
        try{
            const query = "INSERT INTO posts (user_id, content, image) VALUES(?, ?, ?)"
            const {content, image} = data
            
            data = [userID, content, image]

            await sql.query(query, data).then(result => {return result})

            return this.messages.success
        }
        catch(err){return err}
    },
    
    async addForum(userID, text){
        try{
            const query = "INSERT INTO forums(user_id, text) VALUES(?, ?)"

            await sql.query(query, [userID, text]).then(result => {return result})

            return this.messages.success
        }
        catch(err){return err}
    },

    async addMessage(userID, forumID, text){
        try{
            const query = "INSERT INTO messages(user_id, forum_id, text) VALUES(?, ?, ?)"

            await sql.query(query, [userID, forumID, text]).then(result => {return result})

            return this.messages.success
        }
        catch(err){return err}
    },

    async addArticle(userID, header, content, category, image){
        try{
            const query = "INSERT INTO lectorium(user_id, header, content, category, image) VALUES(?, ?, ?, ?, ?)"

            await sql.query(query, [userID, header, content, category, image]).then(result => {return result})

            return this.messages.success
        }
        catch(err){return err}
    },

    async getUser(userID){
        try{
            const query = "SELECT * FROM users WHERE id = ?"
            const result = await sql.query(query, [userID]).then(result => {return result[0]})

            return result
        }
        catch(err){return err}
    },

    async getMessages(forumID){
        try{
            const query = "SELECT * FROM messages WHERE forum_id = ?"
            const result = await sql.query(query, [forumID]).then(result => {return result[0]})

            return result
        }
        catch(err){return err}
    },

    async getArticles(){
        try{
            const query = "SELECT * FROM lectorium"
            const result = await sql.query(query).then(result => {return result[0]})

            return result
        }
        catch(err){return err}
    },

    async getNews(){
        try{
            const query = "SELECT * FROM news"
            const result = await sql.query(query).then(result => {return result[0]})

            return result
        }
        catch(err){return err}
    },

    async getForums(){
        try{
            const query = "SELECT * FROM forums"
            const result = await sql.query(query).then(result => {return result[0]})

            return result
        }
        catch(err){return err}
    },
    
    async getPosts(){
        try{
            const query = "SELECT * FROM posts"
            const result = await sql.query(query).then(result => {return result[0]})

            return result
        }
        catch(err){return err}
    },
} 

export default userSQL;