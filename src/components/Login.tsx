import React from 'react';
import { connect } from 'react-redux';
import { ReduxStoreState } from '../reducers';
import { checkAuthentication, Auth } from '../actions';
import { FormContainer, LoginForm } from './styles/forms';
import { Button } from '../components/styles/base';

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

    if (username === parsedData.username && password === parsedData.password) {
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
      <FormContainer>
        {this.state.error && (
          <p className='col-md-12 text-danger mt-4'>{this.state.error}</p>
        )}
        <LoginForm onSubmit={this.onFormSubmit}>
          <label htmlFor='user'>Username</label>
          <input type='text' className='username_login' id='usernameinput' />
          <label htmlFor='pass'>Password</label>
          <input
            type='password'
            className='password_login'
            id='passwordinput'
          />
          <Button className='btn_login' type='submit'>
            Log In
          </Button>
        </LoginForm>
      </FormContainer>
    );
  }
}

const mapStateToProps = (state: ReduxStoreState) => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

export default connect(mapStateToProps, { checkAuthentication })(Login);
