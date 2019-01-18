let mongoose = require('mongoose');

module.exports = mongoose.model('todo', {
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
});


// module.exports.define = function(sequelize, DataTypes) {
//     return sequelize.define('todo', {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true,
//             allowNull: false
//         },
//         text: {
//             type: DataTypes.STRING(100),
//             allowNull: false
//         },
//         completed: {
//             type: DataTypes.BOOLEAN,
//             allowNull: false,
//             defaultValue: false
//         }
//     });
// }; 
