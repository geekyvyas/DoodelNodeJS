const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res) =>{
    req.json()
})

app.listen(port, () =>{
    console.log("Server dtarted " + post + ".");
});