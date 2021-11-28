/**
 * vuex config
 */
import { createStore, Store } from 'vuex';

import state, { State } from './state';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

const store: Store<State> = createStore({
    state,
    getters,
    mutations,
    actions,
});

export default store;
