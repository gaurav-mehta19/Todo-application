const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Todos')

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        lowercase:true,
        maxLength:50,
    },
    description:{
        type:String,
        required:true,
        lowercase:true,
        maxLength:100,
    },
    completed:Boolean
})

const Todo = mongoose.model('todos',todoSchema)

module.exports={
    Todo
}