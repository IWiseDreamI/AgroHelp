import HTTP from "http"
import cors from "cors";
import express from "express"
import config from "./config.js"
import { Server } from 'socket.io';
import router from "./router/routes.js"
import authRouter from "./router/authRoutes.js"

const frontend = "http://localhost:3000"

const app = express()

const http = HTTP.Server(app)

const socketIO = new Server(http, {
    cors: {
        origin: frontend
    }
})

const PORT = config.PORT || 5000

const corsConfig = {
    origin: [frontend],
    credentials: true,
};

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', [frontend]);
    next();
});

app.use(cors(corsConfig));
app.options(frontend, cors(corsConfig))

app.use(express.json())

app.use("/auth", authRouter)
app.use("/", router)



socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`)
    
    socket.on('message', (data) => {
        socketIO.emit('messageResponse', data);
    });
    
    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });

});

const start = async() => {
    try{
        http.listen(PORT, () => {
            console.log(`Server started at ${PORT} port`)
        })
    }
    catch(error){
        console.log(error)
    }
}

start();
