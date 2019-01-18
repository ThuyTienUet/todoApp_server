'use strict';
var Sequelize = require('sequelize');
var configDb = require('config').get('db');

var sequelize = new Sequelize(configDb.db_name, configDb.user, configDb.password, configDb.options);
var Op = Sequelize.Op;
var db = {};

db.Todo = require('./schemas/todo.js').define(sequelize, Sequelize);

sequelize.sync().then(()=>{
    console.log('\n============================ SYNC DATABASE SUCCESS ====================\n');
}).catch(err=>{
    console.log('\n============================ SYNC DATABASE ERROR ======================\n', err);
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Op = Op;

module.exports = db;
