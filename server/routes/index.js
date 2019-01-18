let express = require('express');
let router = express.Router();

let ctrlTodo = require('../controller/todo');


router.get('/todo/list', (req, res) => {
    ctrlTodo.getListTodo(req, res);
})
router.post('/todo/new', (req, res) => { 
    ctrlTodo.createTodo(req, res);
})
router.delete('/todo/delete', (req, res) => {
    ctrlTodo.deleteTodo(req, res);
})
router.put('/todo/update', (req, res) => {
    ctrlTodo.updateTodo(req, res);
}) 

module.exports = router;