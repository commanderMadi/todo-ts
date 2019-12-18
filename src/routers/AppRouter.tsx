import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { App } from '../components/App';
import Tasks from '../components/Tasks';
import { Profile } from '../components/Profile';
import { Login } from '../components/Login';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/' exact component={App} />
                    <Route path='/tasks' component={Tasks} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/login' exact component={Login} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};
