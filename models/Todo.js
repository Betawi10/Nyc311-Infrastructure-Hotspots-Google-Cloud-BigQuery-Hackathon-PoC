const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//definisi skema collection todo untuk mongoose
const todoSchema = new Schema({
    kegiatan:{
        type: String,
    },
    status:{
        type: Boolean,
    },
});

const Todo = mongoose.model('Todo', todoSchema, "todos");

module.exports = Todo;