import React from 'react';
import Menu from '../template/menu'
import Router from './routes'
import {HashRouter} from 'react-router-dom'
import '../template/index.css'

function App() {
  return (
    <HashRouter>
        <div className="container">
            <Menu />
            <Router />
        </div>
    </HashRouter>
  );
}

export default App;
