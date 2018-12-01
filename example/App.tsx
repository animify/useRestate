import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Comp from './Comp';
import { RestateProvider } from '../src';

const Actions = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
};

const Reducer = (state: { count: number }, action: any) => {
    switch (action.type) {
        case Actions.INCREMENT:
            return {
                count: state.count + 1,
            };
        case Actions.DECREMENT:
            return {
                count: state.count - 1,
            };
        default:
            return state;
    }
};

const store = createStore(Reducer, { count: 3 });

export default function App() {
    return (
        <RestateProvider value={store}>
            <Comp />
        </RestateProvider>
    );
}
