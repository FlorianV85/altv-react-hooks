import { useEffect } from 'react';

/**!
 * Emit to alt:V client event
 * @param {string} eventName The event name
 * @param {any[]} args Arguments
 * @example
 * useEmitEvent('myEventName', 'my arg 1', 52, true);
 */
export function useEmitEvent(eventName: string, ...args: any[]) {
	useEffect(() => {
		if ('alt' in window) {
			alt.emit(eventName, ...args);
		}
	}, [eventName]);
}