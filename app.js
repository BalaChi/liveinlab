const express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/public", function (req, res) {
    res.send("<h1>Hello World!</h1>")})

app.listen(process.env.PORT || 9000, () => console.log("server is running"));