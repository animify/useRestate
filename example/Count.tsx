import React from 'react';
import { useRestate, useActions, useDispatch } from '../src';

export default function Component() {
    const dispatch = useDispatch();
    const { count } = useRestate((state: { count: number }) => {
        return { count: state.count };
    });

    const { increment, decrement } = useActions({
        increment: { type: 'INCREMENT' },
        decrement: { type: 'DECREMENT' },
    });

    return (
        <div>
            <p>{count}</p>
            <a onClick={increment}>Increment count</a>
            <a onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement count</a>
            <a onClick={decrement}>Decrement other</a>
        </div>
    );
}
