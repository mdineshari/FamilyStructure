import React from 'react';
import LogoImage from './logo.png';

class LogoComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="logo">
                <img src={LogoImage} />
            </div>
        )
    }
}

export default LogoComponent;