// // import foo from './generateUUID.js';
// import { version } from '../package.json';
// import answer from 'the-answer';
// // var _ = require('lodash');
//
// import "core-js";
// import "regenerator-runtime/runtime";
const arr=[1,2,3,4];
const res= arr.includes((item) => item> 2);
var promise = Promise.resolve();
console.log('res',res,promise)

// // var array = [1];
// // var other = _.concat(array, 2, [3], [[4]]);
//
// // console.log(other);
//
//
// export default function () {
//     let a='bf';
//     a=arr;
//     console.log('兼容性',a)
//     console.log('version:'+version);
//     console.log('the answer is ' + answer);
//
// }
//
// // export default () => {
// //     console.log(`the answer is ${answer}`);
// // }



/**
 * @description 获取当前日期
 * @param {String} seperator 连接字符 默认 -
 * @returns {String} 当前日期
 * @example
 * getNowDate() => "2020-05-18"
 */
function getNowDate(seperator = "-") {
    const showDate = new Date();
    const year = showDate.getFullYear();
    let month = showDate.getMonth() + 1;
    var strDate = showDate.getDate();
    if (month >= 1 && month <= 9) {
        month = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate;
    }
    const currentdate = year + seperator + month + seperator + strDate;
    return currentdate;
}
export default getNowDate;


// console.log('hi world')
