const express = require("express");

// initialisation
const app = express();

// app will now use json format for data transfer
app.use(express.json());

const port = 8081;

const todoList = ["Need to learn", "Need to code"];

// http://localhost:8081/todos

app.get("/todos", (req, res) => {
    res.status(200).send(todoList);
});

app.post("/todos", (req, res) => {
    let newTodoItem = req.body.item;
    todoList.push(newTodoItem);
    res.status(201).send({
        message: "The to do got added successfully"
    });
});

app.delete("/todos", (req, res) => {
    const itemsToDelete = req.body.item;

    todoList.find((element, index) => {
        if (element === itemsToDelete) {
            todoList.splice(index, 1);
        }
    });
    res.status(202).send({
        message: `Deleted item ${req.body.item}`
    });
});

app.all("/todos", (req, res) => {
    res.status(501).send();
});

app.all("*", (req, res) => {
    res.status(404).send();
});

app.listen(port, () => {
    console.log(`NodeJs Server started on ${port}`);
});

