import React from 'react';
import { useRestate, useAction } from '../src';

export default function Component() {
    const [restate, dispatch] = useRestate((state: { count: number }) => {
        return { count: state.count };
    });

    const incrementAction = { type: 'INCREMENT' };
    const increment = useAction(incrementAction);

    return (
        <div>
            <p>{restate.count}</p>
            <a onClick={increment}>Increment count</a>
            <a onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement count</a>
        </div>
    );
}
