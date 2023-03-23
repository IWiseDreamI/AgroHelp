import express from "express"
import userWorkers from "../workers/userWorkers.js"

const router = express.Router()

// Добавить пост
router.post("/addPost", async (req, res) => {
    try{
        const {userID, ...data} = await req.body
        const result = await userWorkers.addPost(username, data)
    }

    catch(err){
        console.log(err)
        res.json({
            success: false,
            status: 500
        })
    }
})

router.post("/addForum", async (req, res) => {
    try{
        const {userID, text} = await req.body
        await userWorkers.addForum(userID, text)
        res.json({success: true})
    }

    catch(err){
        console.log(err)
        res.json({
            success: false,
            status: 500
        })
    }
})

router.post("/addMessage", async (req, res) => {
    try{
        const {userID, forumID, text} = await req.body
        await userWorkers.addMessage(userID, forumID, text)
        res.json({success: true})
    }

    catch(err){
        console.log(err)
        res.json({
            success: false,
            status: 500
        })
    }
})

router.post("/addArticle", async (req, res) => {
    try{
        const { image } = req.files;
        const {userID, header, content, category} = req.body
        image.mv('./images/' + image.name);
        await userWorkers.addArticle(userID, header, content, category, image.name)
        res.json({success: true})
    }

    catch(err){
        console.log(err)
        res.json({
            success: false,
            status: 500
        })
    }
})

router.post("/getNews", async (req, res) => {
    try{
        const result = await userWorkers.getNews()

        res.json(result)
    }

    catch(err){
        console.log(err)
        res.json({
            success: false,
            status: 500
        })
    }
})

router.post("/getMessages", async (req, res) => {
    try{
        const result = await userWorkers.getMessages(req.body.forumID)

        res.json(result)
    }

    catch(err){
        console.log(err)
        res.json({
            success: false,
            status: 500
        })
    }
})

router.post("/getUser", async (req, res) => {
    try{
        const result = await userWorkers.getUser(req.body.userID)

        res.json(result)
    }

    catch(err){
        console.log(err)
        res.json({
            success: false,
            status: 500
        })
    }
})

router.post("/getForums", async (req, res) => {
    try{
        const result = await userWorkers.getForums()

        res.json(result)
    }

    catch(err){
        console.log(err)
        res.json({
            success: false,
            status: 500
        })
    }
})

router.post("/getArticles", async (req, res) => {
    try{
        const result = await userWorkers.getArticles()

        res.json(result)
    }

    catch(err){
        console.log(err)
        res.json({
            success: false,
            status: 500
        })
    }
})

router.post("/getPosts", async (req, res) => {
    try{
        const result = await userWorkers.getPosts()

        res.json(result)
    }

    catch(err){
        console.log(err)
        res.json({
            success: false,
            status: 500
        })
    }
})

export default router;