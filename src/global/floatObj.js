/**
 * 浮点数的加减乘除，解决浮点数问题(如果运算数值比较大如123456.789*123456.789，建议使用decimal.js库)
 * @return {{divide: (function(*=, *=, *=): *|null|string), plus: (function(*=, *=, *=): *|null|string), times: (function(*=, *=, *=): *|null|string), minus: (function(*=, *=, *=): *|null|string)}}
 @example console.log(floatObj().plus(0.1,0.2))  // 0.3
 @example console.log(floatObj().times(19.9,100))  // 1990
 */
function floatObj() {
// //     // 参考 https://zhuanlan.zhihu.com/p/33333351
//     var plus = function(num1, num2) {
//         num1 = Number(num1);
//         num2 = Number(num2);
//         var dec1, dec2, times1;
//         try { dec1 = countDecimals(num1)+1; } catch (e) { dec1 = 0; }
//         try { dec2 = countDecimals(num2)+1; } catch (e) { dec2 = 0; }
//         times1 = Math.pow(10, Math.max(dec1, dec2));
//         var result = (times(num1, times1) + times(num2, times1)) / times1;
//         return getCorrectResult("add", num1, num2, result);
//         // return result;
//     };
//
//     var minus = function(num1, num2) {
//         num1 = Number(num1);
//         num2 = Number(num2);
//         var dec1, dec2, times1;
//         try { dec1 = countDecimals(num1)+1; } catch (e) { dec1 = 0; }
//         try { dec2 = countDecimals(num2)+1; } catch (e) { dec2 = 0; }
//         times1 = Math.pow(10, Math.max(dec1, dec2));
//         var result = Number((times(num1, times1) - times(num2, times1)) / times1);
//         return getCorrectResult("sub", num1, num2, result);
//         // return result;
//     };
//
//     var divide = function(num1, num2) {
//         num1 = Number(num1);
//         num2 = Number(num2);
//         var t1 = 0, t2 = 0, dec1, dec2;
//         try { t1 = countDecimals(num1); } catch (e) { }
//         try { t2 = countDecimals(num2); } catch (e) { }
//         dec1 = convertToInt(num1);
//         dec2 = convertToInt(num2);
//         var result = times((dec1 / dec2), Math.pow(10, t2 - t1));
//         return getCorrectResult("div", num1, num2, result);
//         // return result;
//     };
//
//     var times = function(num1, num2) {
//         num1 = Number(num1);
//         num2 = Number(num2);
//         var times1 = 0, s1 = num1.toString(), s2 = num2.toString();
//         try { times1 += countDecimals(s1); } catch (e) { }
//         try { times1 += countDecimals(s2); } catch (e) { }
//         var result = convertToInt(s1) * convertToInt(s2) / Math.pow(10, times1);
//         return getCorrectResult("mul", num1, num2, result);
//         // return result;
//     };
// // 计算小数位的长度
//     var countDecimals = function(num) {
//         var len = 0;
//         try {
//             num = Number(num);
//             var str = num.toString().toUpperCase();
//             if (str.split('E').length === 2) { // scientific notation
//                 var isDecimal = false;
//                 if (str.split('.').length === 2) {
//                     str = str.split('.')[1];
//                     if (parseInt(str.split('E')[0]) !== 0) {
//                         isDecimal = true;
//                     }
//                 }
//                 let x = str.split('E');
//                 if (isDecimal) {
//                     len = x[0].length;
//                 }
//                 len -= parseInt(x[1]);
//             } else if (str.split('.').length === 2) { // decimal
//                 if (parseInt(str.split('.')[1]) !== 0) {
//                     len = str.split('.')[1].length;
//                 }
//             }
//         } catch(e) {
//             throw e;
//         } finally {
//             if (isNaN(len) || len < 0) {
//                 len = 0;
//             }
//             return len;
//         }
//     };
// // 将小数转成整数
//     var convertToInt = function(num) {
//         num = Number(num);
//         var newNum = num;
//         var times1 = countDecimals(num);
//         var temp_num = num.toString().toUpperCase();
//         if (temp_num.split('E').length === 2) {
//             newNum = Math.round(num * Math.pow(10, times1));
//         } else {
//             newNum = Number(temp_num.replace(".", ""));
//         }
//         return newNum;
//     };
// // 确认我们的计算结果无误，以防万一
//     var getCorrectResult = function(type, num1, num2, result) {
//         var temp_result = 0;
//         switch (type) {
//             case "add":
//                 temp_result = num1 + num2;
//                 break;
//             case "sub":
//                 temp_result = num1 - num2;
//                 break;
//             case "div":
//                 temp_result = num1 / num2;
//                 break;
//             case "mul":
//                 temp_result = num1 * num2;
//                 break;
//         }
//         if (Math.abs(result - temp_result) > 1) {
//             return temp_result;
//         }
//         return result;
//     };


// // 参考 https://github.com/nefe/number-precision
    /**
     * 精确乘法
     */
    function times() {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        if (nums.length > 2) {
            return iteratorOperation(nums, times);
        }
        var num1 = nums[0], num2 = nums[1];
        var num1Changed = float2Fixed(num1);
        var num2Changed = float2Fixed(num2);
        var baseNum = digitLength(num1) + digitLength(num2);
        var leftValue = num1Changed * num2Changed;
        checkBoundary(leftValue);
        return leftValue / Math.pow(10, baseNum);
    }
    /**
     * 精确加法
     */
    function plus() {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        if (nums.length > 2) {
            return iteratorOperation(nums, plus);
        }
        var num1 = nums[0], num2 = nums[1];
        // 取最大的小数位
        var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
        // 把小数都转为整数然后再计算
        return (times(num1, baseNum) + times(num2, baseNum)) / baseNum;
    }
    /**
     * 精确减法
     */
    function minus() {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        if (nums.length > 2) {
            return iteratorOperation(nums, minus);
        }
        var num1 = nums[0], num2 = nums[1];
        var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
        return (times(num1, baseNum) - times(num2, baseNum)) / baseNum;
    }
    /**
     * 精确除法
     */
    function divide() {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        if (nums.length > 2) {
            return iteratorOperation(nums, divide);
        }
        var num1 = nums[0], num2 = nums[1];
        var num1Changed = float2Fixed(num1);
        var num2Changed = float2Fixed(num2);
        checkBoundary(num1Changed);
        checkBoundary(num2Changed);
        // fix: 类似 10 ** -4 为 0.00009999999999999999，strip 修正
        return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
    }
    /**
     * 四舍五入
     */
    function round(num, ratio) {
        var base = Math.pow(10, ratio);
        var result = divide(Math.round(Math.abs(times(num, base))), base);
        if (num < 0 && result !== 0) {
            result = times(result, -1);
        }
        return result;
    }
    /**
     * 迭代操作
     */
    function iteratorOperation(arr, operation) {
        var num1 = arr[0], num2 = arr[1], others = arr.slice(2);
        var res = operation(num1, num2);
        others.forEach(function (num) {
            res = operation(res, num);
        });
        return res;
    }
    var _boundaryCheckingState = true;
    function checkBoundary(num) {
        if (_boundaryCheckingState) {
            if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
                console.warn(num + " is beyond boundary when transfer to integer, the results may not be accurate");
            }
        }
    }
    /**
     * 把错误的数据转正
     * strip(0.09999999999999998)=0.1
     */
    function strip(num, precision) {
        if (precision === void 0) { precision = 15; }
        return +parseFloat(Number(num).toPrecision(precision));
    }

    function digitLength(num) {
        // Get digit length of e
        var eSplit = num.toString().split(/[eE]/);
        var len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0);
        return len > 0 ? len : 0;
    }

    function float2Fixed(num) {
        if (num.toString().indexOf('e') === -1) {
            return Number(num.toString().replace('.', ''));
        }
        var dLen = digitLength(num);
        return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
    }

    // exports
    return {
        plus,
        minus,
        times,
        divide,
        round
    }
}
export default floatObj
