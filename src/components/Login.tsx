import React from 'react';
import { connect } from 'react-redux';
import { ReduxStoreState } from '../reducers';
import { checkAuthentication, Auth } from '../actions';

export interface LoginProps {
    isAuthenticated: Auth;
    checkAuthentication: typeof checkAuthentication;
}

interface LoginState {
    username: string;
    password: string;
    error: null | string;
}

export class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = { username: 'Admin', password: '54321', error: null };
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

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

    onFormSubmit(e: any) {
        e.preventDefault();
        const [username, password] = e.target.elements;
        this.checkCredentials(username.value, password.value);
    }

    render() {
        return (
            <div>
                {this.state.error && (
                    <p className='col-md-12 text-danger mt-4'>
                        {this.state.error}
                    </p>
                )}
                <form onSubmit={this.onFormSubmit}>
                    <div className='form-group'>
                        <label htmlFor='user'>Username</label>
                        <input
                            type='text'
                            className='form-control'
                            id='usernameinput'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pass'>Password</label>
                        <input
                            type='password'
                            className='form-control'
                            id='passwordinput'
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            value='Log In'
                            type='submit'
                            className='btn btn-primary'
                        />
                    </div>
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
