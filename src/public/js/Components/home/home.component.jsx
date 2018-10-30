import React from 'react';
import './home.less';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="homePage">
                <div className="row-container">
                    <div className="col1-container">
                        test
                    </div>
                    <div className="col2-container">
                    test
                    </div>
                    <div className="col3-container">
                        <button type="button">Log in</button>
                        <button type="button">Log out</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeComponent;