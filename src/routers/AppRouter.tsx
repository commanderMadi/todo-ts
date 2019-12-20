import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { App } from '../components/App';
import Header from '../components/Header';
import Tasks from '../components/Tasks';
import { Profile } from '../components/Profile';
import Login from '../components/Login';
import { ReduxStoreState } from '../reducers';
import { Auth } from '../actions';
import { connect } from 'react-redux';
import PrivateRoute from '../routers/PrivateRoute';
import PublicRoute from './PublicRoute';

interface AppRouterProps {
    isAuthenticated: Auth;
}

export const AppRouter = (props: AppRouterProps) => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path='/' exact component={App} />
                    <PrivateRoute path='/tasks' component={Tasks} />
                    <PrivateRoute path='/profile' component={Profile} />
                    <PublicRoute path='/login' component={Login} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

const mapStateToProps = (state: ReduxStoreState) => {
    return {
        isAuthenticated: state.isAuthenticated
    };
};

export default connect(mapStateToProps)(AppRouter);
