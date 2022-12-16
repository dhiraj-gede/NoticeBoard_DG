const mongoose = require('mongoose')

todoSchema = new mongoose.Schema({
    todo: { type: String, required: true, unique: true }
},{timestamps: true})

const todosModel = mongoose.model('Todos',todoSchema);

module.exports = todosModel;