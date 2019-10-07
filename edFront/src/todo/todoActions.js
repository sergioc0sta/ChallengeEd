import axios from 'axios'

export const changeDescription = () => {
    return {
        type: 'DESCRIPTION_CHANGE'
    }
}

export const getLisProfession=()=>{
    return dispatch => {
        axios.post(`http://127.0.0.1:8080/apiauth/todoListByUser`, {user: "5d98c89486d59f7daf7bc9ed"})
        .then(resquest => dispatch({
            type: 'TODO_FETCHED',
            payload: resquest.data
        })
    ) 
    }
}

export const createNewProject= (value)=>{
    return dispatch => {
        axios.post(`http://127.0.0.1:8080/apiauth/todoList`, {user: "5d98c89486d59f7daf7bc9ed", nameList: value})
        .then(()=>dispatch(getLisProfession())) 
    }
}

export const deleteProject = (value) => {
    return dispatch => {
        axios.put(`http://127.0.0.1:8080/apiauth/todoListD`, {_id: value})
        .then(()=>dispatch(getLisProfession()))
    }
}


export const addTask = (project, newtask) => {
    return dispatch => {
        axios.put(`http://127.0.0.1:8080/apiauth/todoList`, {project, newtask})
        .then(()=>dispatch(getLisProfession()))
    }
}


export const updateStateTaskProject = (idProject, list, idTaskUpdate, state, active) =>{

    return dispatch => {
        axios.put(`http://127.0.0.1:8080/apiauth/todoListUpT`, {idProject, list,idTaskUpdate, state, active})
        .then(()=>dispatch(getLisProfession()))
    }
    
}