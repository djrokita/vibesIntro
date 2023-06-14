import './app.css';
import App from './App.svelte';
import { loadConfig } from './services/configLoader';
import { initRouter } from './services/router';
import { commonStore } from './stores/common'

import type { Template } from './types'


loadConfig('sample').then(({ pages }: Template) => {
  commonStore.loadPages(pages);
  initRouter(pages);
}).catch(err => console.log('err', err));

const app = new App({
  target: document.getElementById('app'),
})

export default app
