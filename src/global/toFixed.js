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

// console.log(toFixed(0.0000069,5))
// console.log(toFixed(12,5))
export default toFixed;
