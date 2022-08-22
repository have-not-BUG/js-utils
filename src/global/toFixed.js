/**
 * @description 对数字保留小数点后几位
 * @param {String|Number} number 需要保留小数点的数值
 * @param {Number} precision 保留小数点后几位 默认 2 位
 * @returns {String} 保留后的数值字符串
 * @example
 * toFixed(0.3358) => "0.34"
 * toFixed('0.3358') => "0.34"
 */

function toFixed(number, precision=2) {
  return String(Math.round(+number + 'e' + precision) / Math.pow(10, precision));
}

export default toFixed;
