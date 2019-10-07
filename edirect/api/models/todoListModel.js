const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const TaskSchema =  new mongoose.Schema({
    description: {type: String, require: true},
    active: {type: Boolean, require: true, default: true},
    state: {type: Boolean, require: true, default: true}

})

const TodoListSchema = new mongoose.Schema({
    user: {type: ObjectId, require: true},
    nameList:{type: String, require: true},
    active: {type: Boolean, require: true, default:true},
    state: {type: Boolean, require: true, default: true},
    list: [TaskSchema],
    created_at: {type: Date, default: Date.now},
    update_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('todoList', TodoListSchema)

