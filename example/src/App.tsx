import React from 'react';
import { useRestate } from '../..';

export default function Component() {
    const [restate, dispatch] = useRestate((state: any) => {
        return { count: state.count };
    });

    return (
        <div>
            <p>Hey</p>
        </div>
    );
}
