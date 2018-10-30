import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom'
import history from './history'
import RouterComponent from './router'

ReactDOM.render(
    <Router history={history}>
        <RouterComponent />
    </Router>
    , document.getElementById('root'));