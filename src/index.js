
const express = require("express");

const app = express();
const {Port} = require("./config/port.js");
const logger = (req,res,next)=>{
    console.log("this is a logger middleware");
    next();
    
}

const secondMiddleware = (req,res,next)=>{
    console.log("this is a second middleware");
    next();
}

app.get("/", logger, secondMiddleware, (req, res) => {
    res.send("from the get api Hello World!");
})

app.listen(Port, () => {    
    console.log(`Server is running on http://localhost:${Port}`);
});
