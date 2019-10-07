import axios from 'axios'


export function login(values) {
    return dispatch => {
        axios.post(`http://127.0.0.1:8080/api/login`, values)
        .then(resquest => dispatch({
            type: 'LOGIN',
            payload: resquest.data
        })
    ) 
    }
}

export function signup(values) {
    return dispatch => {
        axios.post(`http://127.0.0.1:8080/api/signup`, {
            name: "Daniela",
            email: "olasa@gmail.com",
            password: "123qweASD@",
            confirmPassword: "123qweASD@"
        })
        .then(resquest => dispatch( {
            type: 'LOGOUT'
        })
    ) 
    }
}


export function logout(){
    return {
        type: 'LOGOUT'
    }
}



