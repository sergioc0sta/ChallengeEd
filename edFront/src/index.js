import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import App from './main/App';
import Reducer from './main/reducer'

const store = applyMiddleware(promise, thunk)(createStore)(Reducer)

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

