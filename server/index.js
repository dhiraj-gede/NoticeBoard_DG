const express = require('express')
const todoRoutes = require('./routes/todos.routes')
const mongoose = require('mongoose')

const DB_URI = "mongodb://127.0.0.1:27017/TODOs"
mongoose
    .connect(DB_URI)
    .then(() => console.log('connection established at ' + DB_URI))
    .catch((err) => console.log('connection error-->', err));


     
const app = express();
app.use(express.json());

app.use('/todos', todoRoutes);


app.listen(8082, () => {
    console.log("listening to port https://localhost:8082");
});