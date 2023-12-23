import { useEffect } from 'react';

/**!
 * Emit to alt:V client event
 * @param {string} eventName The event name
 * @param {any[]} args Arguments
 * @example
 * useEmitEvent('myEventName', 'my arg 1', 52, true);
 * @deprecated Use useAltEmitEvent instead.
 */
export function useEmitEvent(eventName: string, ...args: any[]) {
	return useAltEmitEvent(eventName, ...args);
}

/**!
 * Emit to alt:V client event
 * @param {string} eventName The event name
 * @param {any[]} args Arguments
 * @example
 * useAltEmitEvent('myEventName', 'my arg 1', 52, true);
 */
export function useAltEmitEvent(eventName: string, ...args: any[]) {
	useEffect(() => {
		if ('alt' in window) {
			alt.emit(eventName, ...args);
		}
	}, [eventName]);
}