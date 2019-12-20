import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import thunk from 'redux-thunk';
import { reducers } from './reducers/';

/** Presisting Redux State in localstorage **/

const loadState = () => {
    try {
        const state = localStorage.getItem('state');
        if (state === null) {
            return undefined;
        }
        return JSON.parse(state);
    } catch (err) {
        return undefined;
    }
};

const saveState = (state: {}) => {
    try {
        const data = JSON.stringify(state);
        localStorage.setItem('state', data);
    } catch (err) {}
};

const persistedState = loadState();

const store = createStore(
    reducers,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
    console.log(`subscription => `, store.getState());
    saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.querySelector('#root')
);
