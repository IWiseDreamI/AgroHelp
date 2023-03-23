import cors from "cors";
import express from "express"
import config from "./config.js"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

import authRouter from "./routes/authRoutes.js"
import userRouter from "./routes/userRoutes.js"

const app = express()
 
const frontend = "http://localhost:3000"
const PORT = config.PORT || 5000 

const corsConfig = {
    origin: [frontend],
    credentials: true,
};

app.use(cors(corsConfig));  
app.use(express.json())
app.use(cookieParser())

app.use(express.static('public')); 
app.use('/images', express.static('images'));
app.use(fileUpload())

// Authorization 

app.use("/auth", authRouter)
app.use("/user", userRouter)

const start = async() => {
    try{
        app.listen(PORT, () => {
            console.log(`Server started at ${PORT} port`)
        })
    }
    catch(error){
        console.log(error)
    }
}

start();
