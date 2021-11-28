/**
 * Demo Page
 *
 * @exports Demo
 */

import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Demo',
    setup(_props, _ctx) {
        // data/inject/tracker
        const router = useRouter();

        // provide

        // watch

        // subscription

        // call methods

        // public methods

        // private methods

        // events
        function onGoHome() {
            router.push({ name: 'Home' });
        }

        // hooks

        return {
            // data

            // public methods

            // private methods

            // events
            onGoHome,
        };
    },
});
