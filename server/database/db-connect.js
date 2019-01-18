let mongoose = require('mongoose');

mongoose.connection.on("open", function () {
    console.log("Connected to mongo server");
});

mongoose.connection.on("error", function (err) {
    console.log("Could not connect to mongo server!");
    return console.log(err);
});

mongoURI = 'mongodb://localhost:27017/todo_app';

mongoose.connect(mongoURI);

module.exports = mongoose;

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/todo_app";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });
// module.exports = MongoClient;
// var Sequelize = require('sequelize');
// var configDb = require('config').get('db');

// var sequelize = new Sequelize(configDb.db_name, configDb.user, configDb.password, configDb.options);
// var Op = Sequelize.Op;
// var db = {};

// db.Todo = require('./schemas/todo.js').define(sequelize, Sequelize);

// sequelize.sync().then(()=>{
//     console.log('\n============================ SYNC DATABASE SUCCESS ====================\n');
// }).catch(err=>{
//     console.log('\n============================ SYNC DATABASE ERROR ======================\n', err);
// })

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// db.Op = Op;

// module.exports = db;
