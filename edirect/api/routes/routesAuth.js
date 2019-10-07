const router = require('express').Router()
const middleware = require('../middleware/middleware')
const todoList = require('../controllers/todoListController')

//router.use(middleware.auth)
router.post('/todoListByUser', todoList.getTodoList)
router.post('/todoList', todoList.createTodoList)
router.put('/todoList', todoList.updateTodoList)
router.put('/todoListD', todoList.deleteTodoList)
router.put('/todoListUpT', todoList.updateTask)


module.exports = router