# useRestate

 A React hook that subscribes your state selector to the store.
 
## Install

```bash
# Yarn
yarn add use-restate

# NPM
npm install use-restate
```

## Usage

> React hooks require react & react-dom at version 16.7.0-alpha.0 or higher.

`use-restate` requires you to provide your Redux-like store to `RestateProvider`.

### Setting up the store

Before using the hook, your store should be passed to `RestateProvider`.

```js
import React from 'react';
import { createStore } from 'redux';
import { RestateProvider, RestateContext } from 'use-restate';

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
            ...
        </RestateProvider>
    );
}
```

### `useRestate(mapState)`

Automatically subscribe your mapState selectors to the store so that each of them update on every change.

```js
import React from 'react';
import { useRestate } from 'use-restate';

export default function Component() {
    const { count } = useRestate(state => {
        return { count: state.count };
    });

    return (
        <div>
            <p>{count}</p>
        </div>
    );
}
```

### `useAction(action)`

Wraps the action in a dispatcher and memoizes it so that it can be used freely in a React component. Internally uses `useCallback()` to memoize the dispatch function.

```js
import React from 'react';
import { useAction } from 'use-restate';

export default function Component() {
    const incrementAction = { type: 'INCREMENT' };
    const increment = useAction(incrementAction);

    return (
        <div>
            <a onClick={increment}>Increment count</a>
        </div>
    );
}
```

### `useDispatch()`

Returns the `dispatch` method based on the store.

```js
import React from 'react';
import { useDispatch } from 'use-restate';

export default function Component() {
    const dispatch = useDispatch();

    return (
        <div>
            <a onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement count</a>
        </div>
    );
}
```

## License

![MIT License](LICENSE)
