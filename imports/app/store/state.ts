import { EJSON } from 'meteor/ejson';

export interface Settings {
    /**
     * 音效
     *
     * @type {boolean}
     * @memberof State
     */
    sound: boolean;
    /**
     * 通知
     *
     * @type {boolean}
     * @memberof State
     */
    notification: boolean;
    /**
     * 语音
     *
     * @type {boolean}
     * @memberof State
     */
    voice: boolean;
    /**
     * 效果音
     *
     * @type {boolean}
     * @memberof State
     */
    effect: boolean;
    /**
     * 表情符号(不含动画)
     *
     * @type {boolean}
     * @memberof State
     */
    emoji: boolean;
}

/**
 * state属性
 *
 * @export State
 *
 * @interface State
 */
export interface State {
    /**
     * 测试属性
     *
     * @type {boolean}
     * @memberof State
     */
    test: boolean;

    /**
     * 音效
     *
     * @type {boolean}
     * @memberof State
     */
    sound: boolean;
    /**
     * 通知
     *
     * @type {boolean}
     * @memberof State
     */
    notification: boolean;
    /**
     * 语音
     *
     * @type {boolean}
     * @memberof State
     */
    voice: boolean;
    /**
     * 效果音
     *
     * @type {boolean}
     * @memberof State
     */
    effect: boolean;
    /**
     * 表情符号(不含动画)
     *
     * @type {boolean}
     * @memberof State
     */
    emoji: boolean;
}

// 初始化牌局设置
if (!localStorage.getItem('InssaPoker.settings')) {
    localStorage.setItem(
        'InssaPoker.settings',
        EJSON.stringify({
            sound: true,
            notification: true,
            voice: true,
            effect: true,
            emoji: true,
        })
    );
}
// @ts-ignore
const settings: Settings = EJSON.parse(localStorage.getItem('InssaPoker.settings') as string);
if (settings.sound === undefined) {
    settings.sound = true;
}
if (settings.notification === undefined) {
    settings.notification = true;
}
if (settings.voice === undefined) {
    settings.voice = true;
}
if (settings.effect === undefined) {
    settings.effect = true;
}
if (settings.emoji === undefined) {
    settings.emoji = true;
}

const state: State = {
    test: true,
    sound: settings.sound,
    notification: settings.notification,
    voice: settings.voice,
    effect: settings.effect,
    emoji: settings.emoji,
};

export default state;
