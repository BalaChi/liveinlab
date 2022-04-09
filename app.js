

//app.get('/',function(req,res){
//    res.send("running hello babe!")
//})

//app.listen(9000,function(req,res) {
 //   console.log("hello")
//})


const express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/", function (req, res) {
    res.send("<h1>Hello World!</h1>")})

app.listen(process.env.PORT || 3000, () => console.log("server is running"));