import { useEffect } from 'react';

type Callback = (...args: unknown[]) => void;

/**
 * Listen alt:V client event and unregister it on unmount
 * @param {string} eventName The event name
 * @param {Callback} callback The event callback
 * @example
 * const myCallback = useCallback((arg1: string, arg2: number) => {
 *     console.log(arg1);
 * }, [])
 *
 * useEventListener('myEventName', myCallback);
 * @deprecated Use useAltOnEvent instead
 */
export function useEventListener(eventName: string, callback: Callback) {
	return useAltOnEvent(eventName, callback);
}

/**
 * Listen alt:V client event and unregister it on unmount
 * @param {string} eventName The event name
 * @param {Callback} callback The event callback
 * @example
 * const myCallback = useCallback((arg1: string, arg2: number) => {
 *     console.log(arg1);
 * }, [])
 *
 * useAltOnEvent('myEventName', myCallback);
 */
export function useAltOnEvent(eventName: string, callback: Callback) {
	useEffect(() => {
		if ('alt' in window) {
			alt.on(eventName, callback);
		}

		return () => {
			if('alt' in window) {
				alt.off(eventName, callback);
			}
		};
	}, [callback]);
}