import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import thunk from 'redux-thunk';
import { reducers } from './reducers/';
import { saveState, loadState } from './localStorage';

const persistedState = loadState();

const store = createStore(
    reducers,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.querySelector('#root')
);
