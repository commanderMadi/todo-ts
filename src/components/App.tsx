import React from 'react';
import { Link } from 'react-router-dom';
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to the app!</h1>
                <Link to='/tasks'>Go to the Tasks page</Link>
            </div>
        );
    }
}

export { App };
