const express = require('express')
const Todo = require('../models/todo')
const router = new express.Router()

//Create TODO'S
router.post('/todos', async (req, res) => {
    console.log("cheguei")
    const todo = new Todo(req.body)
    console.log(todo)
    try {
        await todo.save();
        res.status(201).send(todo);
    } catch (error) {
        res.status(400).send(error)
    }
})

//GET ALL TODO'S
router.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find({})
        res.send(todos);
    } catch (error) {
        res.status(500).send()
    }
})

module.exports = router;