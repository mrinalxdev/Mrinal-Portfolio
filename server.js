require("dotenv").config()
const multer = require("multer")
const express = require("express")
const app = express()
const mongoose = require("mongoose") 

const upload = multer({ dest: "uploads" })

mongoose.connect(process.env.DATABASE_URL)

app.set("view engine", "ejs")


app.get("/", (req, res) => {
    res.render("index")
})

app.post("/upload",upload.single("file"), (req, res) => {
    res.send("hi")
})

app.listen(process.env.PORT)