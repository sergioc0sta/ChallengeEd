require('../models/todoListModel')
const mongoose = require('mongoose'),
    TaskTodo = mongoose.model('todoList');


// GET
const getTodoList = (req, res) => {
    const query = {active: true, user: req.body.user}
    TaskTodo.find(query, (err, result)=>{
        if(err){
            res.send({erro: 'Impossivel realizar operações'})
        }
        res.send(result)
    }).sort({"update_at":-1})
}

// create 
const createTodoList = (req, res) => {
    const todoList =  new TaskTodo(req.body)
    todoList.save((err, result)=>{
        if(err)
            res.send({erro: err})
        res.send(result)
    })
}

//update
const updateTodoList = (req, res) => {
    const {project, newtask} = req.body
    project.list.push({
        active: true,
        state: true,
        description: newtask
      })
    TaskTodo.findOneAndUpdate({_id: project._id}, {...project, update_at: new Date()}, {new:true}, (err, result)=>{
        if(err)
            res.json({erro: err})
        res.json(result)
    })
}



const updateTask = (req, res)=> {
    const {idProject, list, idTaskUpdate, state, active} = req.body
    const objIndex = list.findIndex((obj => obj._id == idTaskUpdate))
    list[objIndex].state = state
    list[objIndex].active = active
    TaskTodo.findOneAndUpdate({_id: idProject}, {list: list, update_at: new Date()}, {new:true},(err, result)=>{
        if(err){
            res.send({erro: 'Impossivel realizar operações'})
        }
        res.json(result)
    })
}

//delete
const deleteTodoList = (req, res) => {
    TaskTodo.findOneAndUpdate({_id: req.body._id}, {...req.body, update_at: new Date(), active: false}, {new:true}, (err, result)=>{
        if(err)
            res.json({erro: err})
        res.json(result)
    })
}

module.exports = {
    getTodoList,
    createTodoList,
    updateTodoList,
    deleteTodoList,
    updateTask
}