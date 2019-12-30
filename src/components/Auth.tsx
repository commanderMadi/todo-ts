import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Auth } from '../actions';
import { ReduxStoreState } from '../reducers';

interface AuthenticateProps {
  isAuthenticated: Auth;
}

export const requireAuth = (CurrentComponent: React.ComponentType<any>) => {
  class Authenticate extends React.Component<AuthenticateProps> {
    render() {
      const { isAuthenticated } = this.props;
      const { auth } = isAuthenticated;
      return !auth ? (
        <Redirect to='/login' />
      ) : (
        <CurrentComponent {...this.props} />
      );
    }
  }

  const mapStateToProps = (state: ReduxStoreState) => ({
    isAuthenticated: state.isAuthenticated
  });
  return connect(mapStateToProps)(Authenticate);
};

export const publicRoute = (CurrentComponent: React.ComponentType<any>) => {
  class PublicRoute extends React.Component<AuthenticateProps> {
    render() {
      const { isAuthenticated } = this.props;
      const { auth } = isAuthenticated;
      return !auth ? (
        <CurrentComponent {...this.props} />
      ) : (
        <Redirect to='/profile' />
      );
    }
  }

  const mapStateToProps = (state: ReduxStoreState) => ({
    isAuthenticated: state.isAuthenticated
  });
  return connect(mapStateToProps)(PublicRoute);
};
