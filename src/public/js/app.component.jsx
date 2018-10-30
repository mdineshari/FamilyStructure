import React from 'react';
import HeaderComponent from './Components/header/header.component.jsx';
import './app.less';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                {this.props.children}
            </div>
        )
    }
}

export default App;