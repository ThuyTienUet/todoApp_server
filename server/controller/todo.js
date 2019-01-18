let Todo = require('../database/schemas/todo');

module.exports.getListTodo = (req, res) => {
    console.log('list todo');
    
    Todo
        .find(function (err, todos) {
            if (err) {
                res.send({ code: 401, content: "SOMETHING WENT WRONG: " + err })
            } else if (todos) {
                res.send({ code: 200, content: "SUCCESSFULLY", listTodo: todos })
            } else {
                res.send({ code: 404, content: "NOT FOUND" });
            }
        })
}

module.exports.createTodo = (req, res) => {
    console.log('create Todo');
    
    Todo
        .create({
            text: req.body.text
        }, function (err, todo) {
            if (err) {
                res.send({ code: 401, content: "SOMETHING WENT WRONG: " + err })
            } else {
                res.send({ code: 200, content: "SUCCESSFULLY", todo: todo })
            } 
        })
}

module.exports.updateTodo = (req, res) =>{
    console.log('update Todo');
    Todo
        .findById(req.body.id)
        .exec(function (err, todo) {
            if (err) {
                res.send({ code: 401, content: "SOMETHING WENT WRONG: " + err })
            } else {
                todo.completed = !todo.completed;
                todo.save(function (err, todoNew) {
                    if (err) {
                        res.send({ code: 401, content: "SOMETHING WENT WRONG: " + err })
                    } else {
                        res.send({ code: 200, content: "SUCCESSFULLY", todo: todoNew })
                    } 
                })
            }
        })
}

module.exports.deleteTodo = (req, res) => {
    console.log('delete Todo');
    Todo
        .findByIdAndRemove(req.body.id)
        .exec(function (err, todo) {
            if (err) {
                res.send({ code: 401, content: "SOMETHING WENT WRONG: " + err })
            } else {
                res.send({ code: 200, content: "SUCCESSFULLY"})
            } 
        })
}
// var models = require('../database/db-connect');
// var Todo = models.Todo;

// module.exports.getListTodo = (req, res) => {
//     Todo.findAll({

//     }).then(list => {
//         if (list) {
//             res.send({ code: 200, content: "SUCCESSFULLY", listTodo: list })
//         } else {
//             res.send({ code: 404, content: "NOT FOUND" });
//         }
//     }).catch(err => {
//         res.send({ code: 401, content: "SOMETHING WENT WRONG: " + err })
//     })
// }

// module.exports.createTodo = (req, res) => {
//     Todo.create({
//         text: req.body.text,
//     }).then((todo) => {
//         res.send({ code: 200, content: "SUCCESSFULLY", todo: { id: todo.dataValues.id, content: todo.dataValues.text, completed: todo.dataValues.completed} })
//     })
// }

// module.exports.deleteTodo = (req, res) => {
//     Todo.destroy({
//         where: {
//             id: req.body.id
//         }
//     }).then((result) => {
//         if (result == 1) {
//             res.send({ code: 200, content: "SUCCESSFULLY" })
//         } else {
//             res.send({ code: 404, content: "NOT FOUND" })
//         }
//     }).catch((err) => {
//         res.send({ code: 401, content: "SOMETHING WENT WRONG: " + err })
//     })
// }

// module.exports.updateTodo = (req, res) => {
//     Todo.findOne({
//         where: {
//             id: req.body.id
//         }
//     }).then(todo => {
//         if (todo) {
//             Todo.update(
//                 {completed: !todo.completed},
//                 {where: {
//                     id: req.body.id
//                 }}
//             ).then(todo => {
//                 if(todo){
//                     res.send({ code: 200, content: "SUCCESSFULLY", todo: todo})
//                 } else {
//                     res.send({code: 404, content: "NOT FOUND"})
//                 }
//             }).catch((err) => {
//                 res.send({ code: 401, content: "SOMETHING WENT WRONG: " + err })
//             })
//         } else {
//             res.send({code: 404, content: "NOT FOUND"})
//         }
//     }).catch((err) => {
//         res.send({ code: 401, content: "SOMETHING WENT WRONG: " + err })
//     })
// }
