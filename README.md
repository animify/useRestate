# ⚡️ useRestate

 A React Hook that subscribes your state selector to the store and memoizes your action dispatchers.

```js
import { useAction, useRestate } from 'use-restate';

function Count() {
    const increment = useAction({ type: 'INCREMENT' });
    const { count } = useRestate(state => {
        return { count: state.count };
    });

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
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
- An API that you're used to
- Works with any Redux-like store
- Memoize single/multiple action dispatch functions
- Quick access to store dispatch
- Full Typescript support


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
