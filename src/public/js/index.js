import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch  } from 'react-router-dom'
import App from './Components/App.jsx';
import Notfound from './Components/NotFound/notFound.jsx';

ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
    , document.getElementById('root'));