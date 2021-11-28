/**
 * 等页面更新渲染完毕
 *
 * @export forceNextTick
 * @param {Function} [callback] - 回调函数
 * @return {*}  {(Promise<void>)}
 */
// @ts-ignore
export default function forceNextTick(callback?: Function): Promise<void> {
    if (callback) {
        doubleRequestAnimationFrame(callback);
    } else {
        return new Promise((resolve: Function) => {
            doubleRequestAnimationFrame(resolve);
        });
    }
}

function doubleRequestAnimationFrame(callback: Function) {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            callback();
        });
    });
}
