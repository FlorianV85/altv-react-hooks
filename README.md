# altv-react-hooks

Simple hooks for working with React on alt:V Multiplayer.

## Installation

Use the package manager of your choice and add ``altv-react-hooks``. Or manually copy the code from the repository.

## Hooks

### useEventListener

Listen to an alt:V client event sent to webview.

The event is registered on mount, or when the callback is changed, and unregistered on unmounting.

```ts
const myCallback = useCallback((myArg) => {
		console.log(myArg);
}, []);

useEventListener('myEvent', myCallback);
```

### useEmitEvent

Emits event to alt:V client.

The event is emitted during mouting or when the event name changes.

```ts
useEmitEvent('myEvent', 'my arg 1', 2, true);
```

## Licence

This repository is under the MIT license.

## Contributions

All contributions are welcome! Feel free to open issues and PRs.