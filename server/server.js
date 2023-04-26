const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.send("Chat app is about to start.");
})