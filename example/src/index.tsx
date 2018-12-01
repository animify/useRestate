import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RestateProvider } from '../../';
const Actions = {
    TOGGLE_MENU: 'TOGGLE_MENU',
};

const Reducer = (state = {}, action: any) => {
    switch (action.type) {
        case Actions.TOGGLE_MENU:
            break;
        default:
            return state;
    }
    return state;
};

const store = createStore(Reducer);

ReactDOM.render(
    <RestateProvider value={store}>
        <App />
    </RestateProvider>,
    document.getElementById('root'),
);

serviceWorker.register();
