/**
 * Create app
 *
 * @exports CreateApp
 *
 * @param {Function} [mounted=() => {}]
 */
import { createApp } from 'vue';

import router from './routes';
import store from './store';

import App from '../ui/App/index.vue';
import AppButton from '../ui/components/AppButton/index.vue';

export default function CreateApp(mounted: Function = () => {}) {
    const app = createApp(App);
    app.use(store);
    app.use(router);

    app.component('app-button', AppButton);

    router.isReady().then(() => {
        app.mount('#app').$nextTick(() => {
            mounted();
        });
    });

    return app;
}
