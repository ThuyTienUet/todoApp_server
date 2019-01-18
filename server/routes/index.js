let express = require('express');
let router = express.Router();

let ctrlTodo = require('../controller/todo');

router.get('/todo/list', (req, res) => {
    console.log('list');
    
    ctrlTodo.getListTodo(req, res);
})
router.post('/todo/new', (req, res) => { 
    console.log('add');
    
    ctrlTodo.createTodo(req, res);
})
router.delete('/todo/delete', (req, res) => {
    console.log('delete');
    
    ctrlTodo.deleteTodo(req, res);
})
router.put('/todo/update', (req, res) => {
    console.log('edit');
    
    ctrlTodo.updateTodo(req, res);
}) 

module.exports = router;