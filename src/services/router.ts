import { createRouter } from "routerjs";
import { commonStore } from './../stores/common'

import type { TemplatePage } from './../types'

export function initRouter(pages: Array<TemplatePage>) {
    const router = createRouter()

    pages.forEach(page => {
        const url = `/${page.alias}`;
        router.get(url, () => commonStore.setActivePage(page.alias));
    })
}