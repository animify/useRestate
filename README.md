# useRestate ⚡️

 A React Hook that subscribes your state selector to the store and memoizes your action dispatchers.

```js
import { useActions, useRestate } from 'use-restate';

function Count() {
    const { count } = useRestate(state => ({
        count: state.count
    }));
    const { increment, decrement } = useActions({
        increment: { type: 'INCREMENT' },
        decrement: { type: 'DECREMENT' },
    });

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}
```

## Install

```bash
# Yarn
yarn add use-restate

# NPM
npm install use-restate
```

## Features

- Feather light
- Avoid needless re-renders
- A familiar API
- Works with any Redux-like store
- Memoize single or multiple action dispatch functions
- Quick access to store dispatch
- Full Typescript support
- Works without `react-redux`


## Prerequisites

⚠️ React hooks require `react` & `react-dom` at version 16.7.0-alpha.0 or higher.

## Usage

The `use-restate` package requires you to provide your Redux-like store to `RestateProvider`.

### Setting up the store

Before using the hook, your store should be passed to `RestateProvider`. You also have access to `RestateContext` should you need it to inject middleware.

```js
import React from 'react';
import { createStore } from 'redux';
import { RestateProvider, RestateContext } from 'use-restate';

...

export default function App() {
    return (
        <RestateProvider value={store}>
            ...
        </RestateProvider>
    );
}
```

## API

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

### `useActions(actionsMap)`

Wraps a map of actions in a dispatcher and memoizes each one with `useCallback`. Returns the same map with each key containing its paired action dispatcher.

```js
import React from 'react';
import { useActions } from 'use-restate';

export default function Component() {
    const { increment, decrement } = useActions({
        increment: { type: 'INCREMENT' },
        decrement: { type: 'DECREMENT' },
    });

    return (
        <div>
            <a onClick={increment}>Increment count</a>
            <a onClick={decrement}>Decrement count</a>
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

## Issues & suggestions

If you find any runtime issues or have any suggestions on how to improve the package please do open an ![issue](https://github.com/animify/useRestate/issues)!

## License

![MIT License](LICENSE)
