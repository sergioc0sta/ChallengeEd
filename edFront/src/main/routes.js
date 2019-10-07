import React from 'react'
import {  Switch, Route, Redirect } from "react-router-dom";


import Todo from '../todo/todo'
import About from '../about/about'
import Login from '../login/login'

export default props => (
    <Switch>
        <Route path='/about'> <About /></Route>
        <Route path='/todos'> <Todo/> </Route>
        <Route path='/login'> <Login/> </Route>
        <Redirect to="/about" />

    </Switch>
)