const Todos = require('../models/todos.model');

const createNewTodo = async (req, res) => {
    const dataFromUser = req.body;
    await Todos.create(dataFromUser);
    res.sendStatus(200);
}

const getAllToDos = async (req, res) => {
    try {
        const allToDos = await Todos.find({});
        res.json(allToDos);
        res.end();
    }
    catch (err) { console.log(err) }
}

const deleteToDo = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Todos.findOneAndDelete({_id: id});
        const allToDos = await Todos.find({});
        res.json(allToDos);
        res.end();
    }
    catch (err) { console.log(err) }
}

module.exports = {getAllToDos, createNewTodo, deleteToDo};