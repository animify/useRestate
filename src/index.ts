import React, { useState, useContext, useEffect, useRef, useCallback } from 'react';
import { Dispatch, Store, Action } from 'redux';
import shallowEqual from './shallowEqual';

export const RestateContext: React.Context<Store<any> | null> = React.createContext(null);
export const RestateProvider = RestateContext.Provider;

const useStore = () => {
    const store = useContext(RestateContext);

    if (!store) {
        throw new Error(
            'use-restate requires you to initiate your redux-like store - e.g <RestateProvider value={store} />',
        );
    }

    return store;
};

export function useRestate<TState, TSelector>(selectFrom: (state: TState) => TSelector): TSelector {
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

    return restate;
}

export function useDispatch<TAction extends Action>(): Dispatch<TAction> {
    const store = useStore();

    return store.dispatch;
}

export function useAction<TAction extends Action>(action: TAction): () => TAction {
    const dispatch = useDispatch();
    const memoizedDispatch = useCallback(() => dispatch(action), [action]);

    return memoizedDispatch;
}
