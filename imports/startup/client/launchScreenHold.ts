/**
 * 控制加载页面的显示和隐藏
 *
 * @exports launchScreenHold, { LaunchScreenHandle }
 * @requires Meteor
 */
import { Meteor } from 'meteor/meteor';

export interface LaunchScreenHandle {
    release: Function;
}

// hold调用次数
let holdCount = 0;
// 是否已隐藏
let alreadyHidden = false;
/**
 * 控制加载页面的显示和隐藏
 *
 * @return {LaunchScreenHandle}
 */
export default function launchScreenHold(): LaunchScreenHandle {
    if (!Meteor.isCordova) {
        return { release: (): void => {} };
    }

    if (alreadyHidden) {
        throw new Meteor.Error(403, "Can't show launch screen once it's hidden.");
    }

    holdCount++;

    let released = false;
    const release = (): void => {
        if (!Meteor.isCordova) {
            return;
        }

        if (!released) {
            released = true;
            holdCount--;
            if (!holdCount && navigator?.splashscreen) {
                alreadyHidden = true;
                navigator.splashscreen.hide();
            }
        }
    };

    return { release };
}
