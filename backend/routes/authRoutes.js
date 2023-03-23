import express from "express"
import authWorkers from "../workers/authWorkers.js"

const router = express.Router()

// Регистрация
router.post("/signUp", async (req, res) => {
    try{
        const {username, email, password} = await req.body
        const result = await authWorkers.signUp(username, email, password)
        if(result.success){
            res.redirect(307, "./signIn")
        }
        else{
            return result
        }
    }

    catch(err){
        console.log(err)
        res.json({
            success: false,
            status: 500
        })
    }
})

// Авторизация
router.post("/signIn", async(req, res) => {
    try{
        const {email, password} = req.body

        const result = await authWorkers.signIn(email, password)
        
        if (result){
            res.cookie('UserID', result.id, { maxAge: 1000 * 3600 * 24 * 30, sameSite: false });
            res.cookie('token', result.token, { maxAge: 1000 * 3600 * 24 * 30, sameSite: false });
            res.json({success: true, message: "You're successfully logged in!"})
        } 
        
        else {
            res.json({success: false, message: "Error"})
        }
    }

    catch(err){
        console.log(err)
        res.json({
            success: false,
            status: "Something gone wrong..."
        })
    }
})

export default router;