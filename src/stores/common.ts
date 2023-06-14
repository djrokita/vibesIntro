import { writable } from 'svelte/store';
import type { CommonStore, TemplatePage } from '../types';

const commonStoreValue: CommonStore = {
    pages: [],
    activePage: null
}

function initCommonStore() {
    const { set, subscribe, update } = writable(commonStoreValue);

    function setActivePage(alias: string) {
        return update((storedValues: CommonStore) => ({ ...storedValues, activePage: alias }));
    }

    function loadPages(pages: Array<TemplatePage>) {
        const homePage = pages[0].alias
        return set({ pages, activePage: homePage })
    }

    return { subscribe, setActivePage, loadPages };
}

export const commonStore = initCommonStore();

