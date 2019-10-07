import {combineReducers} from 'redux'
import todoReducer from '../todo/todoReducer'
import loginReducer from '../login/loginReducer'
const rootReducer = combineReducers({
    todo: todoReducer,
    login: loginReducer
})

export default rootReducer