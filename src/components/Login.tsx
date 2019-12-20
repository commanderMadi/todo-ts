import React from 'react';
import { connect } from 'react-redux';
import { ReduxStoreState } from '../reducers';
import { checkAuthentication, Auth } from '../actions';

interface LoginProps {
    isAuthenticated: Auth;
    checkAuthentication: typeof checkAuthentication;
}

export class Login extends React.Component<LoginProps> {
    state = { username: 'Admin', password: '54321', error: null };

    componentDidMount() {
        const loginData = JSON.stringify(this.state);
        localStorage.setItem('credentials', loginData);
    }

    checkCredentials(username: string, password: string) {
        const data: any = localStorage.getItem('credentials');
        const parsedData = JSON.parse(data);

        if (
            username === parsedData.username &&
            password === parsedData.password
        ) {
            this.props.checkAuthentication(this.props.isAuthenticated);
        } else {
            this.setState(() => {
                return {
                    error: 'Wrong username or password.'
                };
            });
        }
    }

    onFormSubmit = (e: any) => {
        e.preventDefault();
        const [username, password] = e.target.elements;
        this.checkCredentials(username.value, password.value);
    };

    render() {
        console.log(this.props.isAuthenticated);
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type='text' />
                    <input type='password' />
                    <input type='submit' />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state: ReduxStoreState) => {
    return {
        isAuthenticated: state.isAuthenticated
    };
};

export default connect(mapStateToProps, { checkAuthentication })(Login);
