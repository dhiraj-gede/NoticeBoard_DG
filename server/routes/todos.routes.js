const router = require('express').Router();

const {getAllToDos,createNewTodo,deleteToDo} = require('../controllers/todos.controller');

router.get('/', getAllToDos);
router.post('/new', createNewTodo);
router.delete('/:id', deleteToDo);

module.exports = router;  