import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { ReduxStoreState } from '../reducers';
import { Auth } from '../actions';

interface PrivateRouteProps {
    isAuthenticated: Auth;
    exact?: boolean;
    path: string;
    component: React.ComponentType<any>;
}

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}: PrivateRouteProps) => (
    <Route
        {...rest}
        component={(props: any) =>
            isAuthenticated.auth ? (
                <div>
                    <Component {...props} />
                </div>
            ) : (
                <div>
                    <Redirect to='/login' />
                </div>
            )
        }
    />
);
const mapStateToProps = (state: ReduxStoreState) => ({
    isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);
