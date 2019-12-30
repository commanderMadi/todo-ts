import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReduxStoreState } from '../reducers';
import { Auth, checkAuthentication } from '../actions';
import { connect } from 'react-redux';
import { NavBar, NavList } from '../components/styles/header';

export interface HeaderProps {
  isAuthenticated: Auth;
  checkAuthentication: typeof checkAuthentication;
}

export class Header extends React.Component<HeaderProps> {
  onLogoutclick = () => {
    this.props.checkAuthentication(this.props.isAuthenticated);
  };

  render() {
    return (
      <NavBar className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/'>
          Tasks App
        </Link>
        <NavList id='nav-mobile' className='navbar-nav'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/tasks'>
              Tasks
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/profile'>
              Profile
            </NavLink>
          </li>

          {!this.props.isAuthenticated.auth && (
            <li className='nav-item'>
              <NavLink className='nav-link text-success' to='/login'>
                Login
              </NavLink>
            </li>
          )}
          {this.props.isAuthenticated.auth && (
            <li className='nav-item'>
              <NavLink
                onClick={this.onLogoutclick}
                className='nav-link text-success'
                to='/profile'
              >
                Logout
              </NavLink>
            </li>
          )}
        </NavList>
      </NavBar>
    );
  }
}

const mapStateToProps = (state: ReduxStoreState) => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

export default connect(mapStateToProps, { checkAuthentication })(Header);
