import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReduxStoreState } from '../reducers';
import { Auth, checkAuthentication } from '../actions';
import { connect } from 'react-redux';

interface HeaderProps {
  isAuthenticated: Auth;
  checkAuthentication: typeof checkAuthentication;
}

export const Header = (props: HeaderProps) => {
  const onLogoutclick = () => {
    props.checkAuthentication(props.isAuthenticated);
  };
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/tasks'>Tasks</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
      {!props.isAuthenticated.auth && <NavLink to='/login'>Login</NavLink>}
      {props.isAuthenticated.auth && (
        <button onClick={onLogoutclick}>Logout</button>
      )}
    </nav>
  );
};

const mapStateToProps = (state: ReduxStoreState) => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

export default connect(mapStateToProps, { checkAuthentication })(Header);
