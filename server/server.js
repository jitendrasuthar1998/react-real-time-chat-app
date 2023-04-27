const express = require('express');
const {Server} = require('socket.io');
const http = require('http');
const cors = require('cors'); 
const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin:"http://localhost:3000",
        methods:["GET", "POST"]
    }
})

app.get('/', (req, res)=> {
    res.send("Chat app is about to start.");
})