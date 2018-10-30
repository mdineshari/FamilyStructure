import React from 'react';
import HeaderComponent from './header/header.component.jsx'
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                Hello!!!!
            </div>
        )
    }
}

export default App;