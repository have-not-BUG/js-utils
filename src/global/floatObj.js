/**
 * 浮点数的加减乘除，解决浮点数问题
 * @return {{chu: (function(*=, *=, *=): *|null|string), jia: (function(*=, *=, *=): *|null|string), cheng: (function(*=, *=, *=): *|null|string), jian: (function(*=, *=, *=): *|null|string)}}
 @example console.log(floatObj().jia(0.1,0.2))  // 0.3
 */
function floatObj() {
    function isInteger(obj) {
        return Math.floor(obj) === obj
    }

    function toInteger(floatNum) {
        const ret = { times: 1, num: 0 }
        if (isInteger(floatNum)) {
            ret.num = floatNum
            return ret
        }
        const strfi = `${floatNum}`
        const dotPos = strfi.indexOf('.')
        const len = strfi.substr(dotPos + 1).length
        // eslint-disable-next-line
        const times = Math.pow(10, len)
        const intNum = Number(floatNum.toString().replace('.', ''))
        ret.times = times
        ret.num = intNum
        return ret
    }

    function operation(a, b, digits, op) {
        const o1 = toInteger(a)
        const o2 = toInteger(b)
        const n1 = o1.num
        const n2 = o2.num
        const t1 = o1.times
        const t2 = o2.times
        const max = t1 > t2 ? t1 : t2
        let result = null
        switch (op) {
            case 'jia':
                if (t1 === t2) { // 两个小数位数相同
                    result = n1 + n2
                } else if (t1 > t2) { // o1 小数位 大于 o2
                    result = n1 + (n2 * (t1 / t2))
                } else { // o1 小数位 小于 o2
                    result = (n1 * (t2 / t1)) + n2
                }
                return result / max
            case 'jian':
                if (t1 === t2) {
                    result = n1 - n2
                } else if (t1 > t2) {
                    result = n1 - (n2 * (t1 / t2))
                } else {
                    result = (n1 * (t2 / t1)) - n2
                }
                return result / max
            case 'cheng':
                result = (n1 * n2) / (t1 * t2)
                return result
            case 'chu':
                result = (n1 / n2) * (t2 / t1)
                return result
            default:
                return 'floatObj函数运行错误'
        }
    }

    function jia(a, b, digits) {
        return operation(a, b, digits, 'jia')
    }

    function jian(a, b, digits) {
        return operation(a, b, digits, 'jian')
    }

    function cheng(a, b, digits) {
        return operation(a, b, digits, 'cheng')
    }

    function chu(a, b, digits) {
        return operation(a, b, digits, 'chu')
    }

    // exports
    return {
        jia,
        jian,
        cheng,
        chu,
    }
}
export default floatObj
