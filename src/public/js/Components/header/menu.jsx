import React from 'react';
import {Link} from 'react-router-dom'

class MenuComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="topnav">
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MenuComponent;