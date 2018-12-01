import React, { useState, useContext, useEffect, useRef } from 'react';
import { Action, Dispatch, Store } from 'redux';

const RestateContext: React.Context<Store<any> | null> = React.createContext(null);

export const RestateProvider = RestateContext.Provider;

export function useRestate<T, U>(selector: any) {
    const store = useContext(RestateContext);
    const restate: T = null;
    console.log(store, selector);

    return [restate, store.dispatch];
}
