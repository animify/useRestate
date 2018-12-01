// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

// Add hooks to the react typings
declare module 'react' {
    export function useCallback<T>(callback: T, dependencies: any[]): T;
    export function useContext<T>(context: React.Context<T>): T;
    export function useEffect(didUpdate: () => (() => void) | void, dependencies?: any[]): void;
    export function useRef<T>(initialValue?: T): { current: T };
    export function useState<T>(
        initialState: T | (() => T),
    ): [T, (newState: T | (() => T)) => void];
}

export {};
