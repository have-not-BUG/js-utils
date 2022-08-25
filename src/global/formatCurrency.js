/**
 * @description 数值货币型转换并加千分符
 * @param {String|Number} value  金额
 * @param {String} currency 货币符号 默认空
 * @param {String} decimals  保留位数 默认2位
 * @return {String} 货币型的字符
 *
 * @example
 * formatCurrency(12333.514, '$', 2) => $12,333.51
 */
function formatCurrency(value, currency = '', decimals = 2) {
  value = parseFloat(value);
  if (!isFinite(value) || (!value && value !== 0)) return '';
  const digitsRE = /(\d{3})(?=\d)/g;
  const stringified =toFixed(value,decimals);
  const _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
  const i = _int.length % 3;
  const head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
  const _float = decimals ? stringified.slice(-1 - decimals) : '';
  const sign = value < 0 ? '-' : '';
  return (
    sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float
  );
}

function toFixed(number, precision=2) {
  //原有的toFixed会有问题，如 0.105.toFixed(2) = 0.1 // 不是 0.11
  // toPrecision 方法不太好实现，比如 0.105.toPrecision(2) //0.1   0.105.toPrecision(3) // 0.105
  // Math.round 应注意负数问题 如 Math.round(-10.5) // -10 但是 Math.round(10.5) // 11
  const isNegativeNumber= number <0 ;
  const originNumberStrHasNotSign=String(Math.abs(number));
  const fixedNumberStrNotSign=String(Math.round(+originNumberStrHasNotSign + 'e' + precision) / Math.pow(10, precision));
  const realIntegerPart = fixedNumberStrNotSign.split('.')[0];
  const realIntegerPartLength = realIntegerPart? realIntegerPart.length :0;
  const realPrecisionPart = fixedNumberStrNotSign.split('.')[1] ? fixedNumberStrNotSign.split('.')[1] :'';
  const realPrecisionLength = realPrecisionPart ? realPrecisionPart.length : 0;

  // 1 无小数时
  if(!realPrecisionPart){
    // 1.1 精度故意传0时
    if(precision ===0){
      return isNegativeNumber ?  `-${realIntegerPart}`: `${realIntegerPart}`
    }
    // 1.2 精度不为0时
    return  isNegativeNumber ? `-${realIntegerPart}.`.padEnd(realIntegerPartLength+precision+2,'0') : `${realIntegerPart}.`.padEnd(realIntegerPartLength+precision+1,'0')
  }
  // 2 有小数时
  // 2.1 不需要补充0
  if(realPrecisionLength === precision){
    return isNegativeNumber ? `-${fixedNumberStrNotSign}`:fixedNumberStrNotSign
  }else {
    // 2.2 需要补充0
    return isNegativeNumber ? `-${realIntegerPart}.${realPrecisionPart.padEnd(precision,'0')}` : `${realIntegerPart}.${realPrecisionPart.padEnd(precision,'0')}`
  }
}


console.log('formatCurrency(12356.1005,\'$\',2)',formatCurrency(12356.1005,'$',2))
export default formatCurrency;
