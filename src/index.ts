import React, { useState, useContext, useEffect, useRef, useCallback } from 'react';
import { Dispatch, Store, AnyAction, Action } from 'redux';
import shallowEqual from './shallowEqual';

const RestateContext: React.Context<Store<any> | null> = React.createContext(null);

const useStore = () => {
    const store = useContext(RestateContext);

    if (!store) {
        throw new Error(
            'use-restate requires you to initiate your redux-like store - e.g <RestateProvider value={store} />',
        );
    }

    return store;
};

export const RestateProvider = RestateContext.Provider;

export function useRestate<T, U>(selectFrom: (state: T) => U): [U, Dispatch] {
    const store = useStore();

    const [restate, setRestate] = useState(() => selectFrom(store.getState()));
    const previousRestate = useRef();

    useEffect(() => {
        previousRestate.current = restate;
    });

    const canUpdate = () => {
        const nextState = store.getState();
        const nextRestate = selectFrom(nextState);

        if (shallowEqual(previousRestate.current, nextRestate)) {
            return;
        }

        setRestate(nextRestate);
    };

    useEffect(
        () => {
            canUpdate();

            return store.subscribe(canUpdate);
        },
        [store, selectFrom],
    );

    return [restate, store.dispatch];
}

export function useAction<TAction extends Action>(action: TAction) {
    const store = useStore();
    const memoizedDispatch = useCallback(() => store.dispatch(action), [action]);

    return memoizedDispatch;
}
