import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { App } from '../components/App';
import Header from '../components/Header';
import Tasks from '../components/Tasks';
import { Profile } from '../components/Profile';
import Login from '../components/Login';
import PrivateRoute from '../routers/PrivateRoute';
import PublicRoute from './PublicRoute';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className='container'>
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
