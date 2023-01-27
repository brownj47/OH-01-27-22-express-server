const express = require("express")
const { v4 } = require('uuid')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const users = [
    {
        id: v4(),
        name: "Joe",
        type: "Instructor",
        password:"123_cats"
    },
    {
        id: v4(),
        name: "John",
        type: "student",
        password:"password1!"
    },
    {
        id: v4(),
        name: "Justus",
        type: "TA",
        password:"chocolate"
    },
    {
        id: v4(),
        name: "Bob",
        type: "TA",
        password:"cookies"
    },
    {
        id: v4(),
        name: "Vian",
        type: "TA",
        password:"icecrem"
    },
]

app.get("/", (req, res)=>{
    res.status(200).json(users)
})

app.listen(PORT, ()=>{
    console.log(`listening at http://localhost:${PORT}`)
})