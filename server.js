const express = require("express");
const { v4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let users = [
    {
        id: v4(),
        name: "Joe",
        type: "Instructor",
        password: "123_cats",
    },
    {
        id: v4(),
        name: "John",
        type: "student",
        password: "password1!",
    },
    {
        id: v4(),
        name: "Justus",
        type: "TA",
        password: "chocolate",
    },
    {
        id: v4(),
        name: "Bob",
        type: "TA",
        password: "cookies",
    },
    {
        id: v4(),
        name: "Vian",
        type: "TA",
        password: "icecrem",
    },
];

app.get("/", (req, res) => {
    res.status(200).json(users);
});
app.post("/", (req, res) => {
    console.log(req.body);
    req.body.id = v4();
    users.push(req.body);
    res.status(200).json(users);
});
app.put("/", (req, res) => {
    console.log(req.body);
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === req.body.id) {
            users[i] = req.body;
            return res.status(200).json(users[i]);
        }
    }
    return res.status(400).json({ msg: "User does not exist" });
});
app.delete("/:id", (req, res) => {
    console.log(req.params.id);
    users = users.filter((user) => {
        if (user.id === req.params.id) {
            return false;
        } else {
            return true;
        }
    });
    res.status(200).json(users);
});

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});
