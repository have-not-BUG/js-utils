/**
 *@description 节流
 * @param {function} callback 回调函数
 * @param {Number} wait 等候时间
 * @returns {function(*=): void} 返回函数
 * @example
 * window.addEventListener('resize',throttle(function(e){console.log(e);},500))
 */

function throttle(callback, wait){
    //定义开始时间
    let start = 0;
    //返回结果是一个函数
    return function(e){
        //获取当前的时间戳
        let now = Date.now();
        //判断
        if(now - start >= wait){
            //若满足条件, 则执行回调函数
            callback.call(this, e);
            //修改开始时间
            start = now;
        }
    }
}

export default throttle
