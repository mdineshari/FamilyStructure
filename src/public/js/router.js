import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import App from './app.component.jsx';
import Notfound from './Components/NotFound/notFound.jsx';
import HomeComponent from './Components/home/home.component.jsx';

class RouterComponent extends React.Component {
    render() {
        return (
            <App>
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route component={Notfound} />
                </Switch>
            </App>
        )
    }
}
export default RouterComponent;