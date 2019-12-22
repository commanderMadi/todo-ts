import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { ReduxStoreState } from '../reducers';
import { Auth } from '../actions';

interface PublicRouteProps {
    isAuthenticated: Auth;
    exact?: boolean;
    path: string;
    component: React.ComponentType<any>;
}

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}: PublicRouteProps) => (
    <Route
        {...rest}
        component={(props: PublicRouteProps) => {
            return isAuthenticated.auth ? (
                <Redirect to='/profile' />
            ) : (
                <div>
                    <Component {...props} />
                </div>
            );
        }}
    />
);
const mapStateToProps = (state: ReduxStoreState) => ({
    isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps)(PublicRoute);
