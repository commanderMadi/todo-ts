import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { App } from '../components/App';
import Header from '../components/Header';
import Tasks from '../components/Tasks';
import { Profile } from '../components/Profile';
import Login from '../components/Login';
import { requireAuth, publicRoute } from '../components/Auth';
import { GlobalStyle } from '../components/styles/global';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className='container'>
        <Header />
        <Switch>
          <Route path='/' exact component={App} />
          <Route path='/tasks' component={requireAuth(Tasks)} />
          <Route path='/profile' component={requireAuth(Profile)} />
          <Route path='/login' component={publicRoute(Login)} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
