import { EJSON } from 'meteor/ejson';
import { State } from './state';

/**
 * 切换test
 *
 * @export toggleTest
 *
 * @param {State} state
 */
export function toggleTest(state: State): void {
    state.test = !state.test;
}

/**
 * 切换Settings
 *
 * @export toggleSettings
 *
 * @param {State} state
 */
export function toggleSettings(
    state: State,
    type: 'sound' | 'notification' | 'voice' | 'effect' | 'emoji'
): void {
    state[type] = !state[type];
    localStorage.setItem(
        'InssaPoker.settings',
        EJSON.stringify({
            sound: state.sound,
            notification: state.notification,
            voice: state.voice,
            effect: state.effect,
            emoji: state.emoji,
        })
    );
}
