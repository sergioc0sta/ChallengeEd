const userKey = 'users'
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false
    
}
export default (state = INITIAL_STATE, action) => { 
    switch (action.type) {
        case 'LOGOUT': 
            localStorage.removeItem(userKey)
            return { ...state, validToken: false, user: null } 
            
        case 'LOGIN':
                localStorage.setItem(userKey, JSON.stringify({
                    email:action.payload.email, 
                    name:action.payload.name, 
                    token:action.payload.token,
                    id:action.payload.id
                })) 
                return { ...state, user: action.payload, validToken: true}
        default:
            return state
    } 
}
