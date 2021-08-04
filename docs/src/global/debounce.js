/**
 *@description 防抖
 * @param {function} callback 回调函数
 * @param {Number} time 延迟时间
 * @returns {function(*=): void} 返回函数
 * @example
 * window.addEventListener('keyup',debounce(function(e){console.log(e);},500))
 */

function debounce(callback, time){
    //定时器变量
    let timeId = null;
    //返回一个函数
    return function(e){
        //判断
        if(timeId !== null){
            //清空定时器
            clearTimeout(timeId);
        }
        //启动定时器
        timeId = setTimeout(() => {
            //执行回调
            callback.call(this, e);
            //重置定时器变量
            timeId = null;
        }, time);
    }
}
export default debounce
