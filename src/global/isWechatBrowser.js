/**
 * 判断当前浏览器是否为微信内置浏览器
 * @return {boolean}
 * @example  isWechatBrowser() // false
 */
function isWechatBrowser() {
    var ua = navigator.userAgent.toLowerCase();
    var micromessenger = new RegExp('micromessenger');
    return micromessenger.test(ua);
}
export default isWechatBrowser
