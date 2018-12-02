import React from 'react';
import { useRestate, useAction, useDispatch } from 'use-restate';

export default function Component() {
    const dispatch = useDispatch();
    const { count } = useRestate((state: { count: number }) => {
        return { count: state.count };
    });

    const incrementAction = { type: 'INCREMENT' };
    const derementAction = { type: 'DECREMENT' };
    const increment = useAction(incrementAction);

    return (
        <div>
            <p>{count}</p>
            <a onClick={increment}>Increment</a>
            <a onClick={() => dispatch(derementAction)}>Decrement</a>
        </div>
    );
}
