import express from "express"
import jwt from "jsonwebtoken"
import sql from "../sql.js"

const router = express.Router()

router.post("/signUp", async (req, res) => {
    console.log(req.body)
    try{
        const {username, email, password} = req.body
        const result = await sql.addUser(username, email, password)
        res.json(result)
    }

    catch(err){
        console.log(err)
        res.json({
            success: false,
            status: "Something gone wrong..."
        })
    }
})


// Авторизация
router.post("/signIn", async(req, res) => {
    try{
        const {username, password} = req.body
        const result = await sql.logIn(username, password)
        
        const token = jwt.sign({
            userID: result.id,
            username: result.username,
        }, "SOME_SALT_FOR_HORSE")
        
        const tokenRes = await sql.addToken(result.id, token)        

        if (tokenRes.success){
            res.cookie('userid', result.id, { maxAge: 1000 * 3600 * 24 * 30, httpOnly: true, sameSite: false });
            res.json({success: true, id: result.id, username: result.username, role: result.role, token: token})
        }
        else res.json({success: false})

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