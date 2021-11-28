/**
 * Home Page
 *
 * @exports Home
 */

import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Home',
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
        function onGoDemo() {
            router.push({ name: 'Demo' });
        }

        // hooks

        return {
            // data

            // public methods

            // private methods

            // events
            onGoDemo,
        };
    },
});
