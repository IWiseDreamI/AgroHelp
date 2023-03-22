import express from "express"
import sql from "../sql.js"

const router = express.Router()

router.post("/getAllUsers", async (req, res) => {
    try{
        const result = await sql.getAllUsers()
        const users = result.map((user) => {
            return {
                userID: user.id,
                username: user.username,
                role: user.role
            }
        })
        res.json(users)
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