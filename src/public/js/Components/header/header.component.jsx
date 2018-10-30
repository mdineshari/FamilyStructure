import React from 'react';
import MenuComponent from './menu.jsx';
import LogoComponent from './logo.jsx';
import './header.less';

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <LogoComponent />
                <MenuComponent />
            </div>
        )
    }
}

export default HeaderComponent;