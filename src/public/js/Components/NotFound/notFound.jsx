import React from 'react';
import HeaderComponent from '../header/header.component.jsx'

class Notfound extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <h1> Sorry!!!<br/> Error 404: Page Not Found</h1>
            </div>
        )
    }
}

export default Notfound;