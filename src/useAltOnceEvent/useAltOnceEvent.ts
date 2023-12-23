import { useEffect } from 'react';

type Callback = (...args: unknown[]) => void;

/**
 * Listen alt:V client event once
 * @param {string} eventName The event name
 * @param {Callback} callback The event callback
 * @example
 * const myCallback = useCallback((arg1: string, arg2: number) => {
 *     console.log(arg1);
 * }, [])
 *
 * useAltOnceEvent('myEventName', myCallback);
 */
export function useAltOnceEvent(eventName: string, callback: Callback) {
    useEffect(() => {
        if ('alt' in window) {
            alt.once(eventName, callback);
        }
    }, [callback]);
}
