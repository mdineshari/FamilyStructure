import React from 'react';
import './home.less';
import LoginFormComponent from './login.jsx';
import RegisterFormComponent from './register.jsx';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container homePage">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-login">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <a href="#" className="active" id="login-form-link">Login</a>
                                    </div>
                                    <div className="col-xs-6">
								        <a href="#" id="register-form-link">Register</a>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <LoginFormComponent />
                                        <RegisterFormComponent />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeComponent;