import React from 'react';

class RegisterFormComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form id="register-form" action="api/register/process" method="post" role="form" style={{display: "none"}}>
                <div className="form-group">
                    <input type="text" name="rusername" id="rusername" tabIndex="1" className="form-control" placeholder="Username" defaultValue="" />
                </div>
                <div className="form-group">
                    <input type="email" name="email" id="email" tabIndex="1" className="form-control" placeholder="Email Address" defaultValue="" />
                </div>
                <div className="form-group">
                    <input type="password" name="rpassword" id="rpassword" tabIndex="2" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group">
                    <input type="password" name="confirm-password" id="confirm-password" tabIndex="2" className="form-control" placeholder="Confirm Password" />
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <input type="submit" name="register-submit" id="register-submit" tabIndex="4" className="form-control btn btn-register" defaultValue="Register Now" />
                        </div>
                    </div>
                </div>
            </form>

        )
    }
}

export default RegisterFormComponent;