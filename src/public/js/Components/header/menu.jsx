import React from 'react';
import {NavLink} from 'react-router-dom'

class MenuComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="topnav">
                <ul>
                    <li>
                        <NavLink actvieclassname="active" exact to="/">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink actvieclassname="active" to="/test">Test</NavLink>
                    </li>
                    <li>
                        <NavLink actvieclassname="active" to="/test1">Test 1</NavLink>
                    </li>
                    <li>
                        <NavLink actvieclassname="active" to="/test2">Test 2</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MenuComponent;