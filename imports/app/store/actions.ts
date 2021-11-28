import { ActionContext } from 'vuex';

import { State } from './state';

/**
 * 切换test
 *
 * @export toggleTest
 *
 * @param {ActionContext<State, State>} { commit }
 */
export function toggleTest({ commit }: ActionContext<State, State>): void {
    commit('toggleTest');
}
