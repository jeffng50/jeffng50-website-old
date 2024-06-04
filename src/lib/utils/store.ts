import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createIsDark() {
	const localStorageKeyName = 'isdark';
	const value =
		browser &&
		(localStorage.getItem(localStorageKeyName)
			? JSON.parse(localStorage.getItem(localStorageKeyName)!)
			: false);
	const { subscribe, update } = writable<boolean>(value);

	return {
		subscribe,
		toggle: () =>
			update((n) => {
				if (browser) {
					localStorage.setItem(localStorageKeyName, JSON.stringify(!n));
				}
				return !n;
			})
	};
}

export const isDark = createIsDark();
