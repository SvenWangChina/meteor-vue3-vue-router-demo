/**
 * 初始化客户端
 */
import { Meteor } from 'meteor/meteor';

import CreateApp from '../../app';
import forceNextTick from './forceNextTick';
import launchScreenHold, { LaunchScreenHandle } from './launchScreenHold';

const handle: LaunchScreenHandle = launchScreenHold();

Meteor.startup(() => {
    // eslint-disable-next-line max-params
    onerror = function (message, source, lineno, colno, err) {
        alert(`message:${message}; source:${source}; lineno:${lineno}; colno:${colno}`);
        if (err) {
            alert(`error:${err.name};${err.message};${err.stack}`);
        }
    };

    // init app
    CreateApp(() => {
        forceNextTick(() => {
            handle.release();
        });
    });

    Meteor.setTimeout((): void => {
        handle.release();
    }, 6 * 1000);

    if (Meteor.isCordova) {
        WebAppLocalServer.onNewVersionReady((): void => {
            WebAppLocalServer.switchToPendingVersion(
                (): void => {
                    location.replace(location.origin);
                },
                (err: string): void => {
                    alert(err);
                }
            );
        });
    }
});
