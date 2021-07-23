/**
 * @description 数字千分位分隔法
 * @param {Number} value 需要分隔数字
 * @returns {String} 返回千分位，分隔的字符串 如果传入的是字符串，直接返回该字符串
 * @example
 * thousandthPlace(123456.12)
 * "123,456.12"
 */

function thousandthPlace(value) {
    if (typeof (value) === 'number') {
        value = value.toString()
        if (value.indexOf('.') > 0) {
            const num = value.substring(0, value.indexOf('.'))
            return num.replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') + value.substring(value.indexOf('.'), value.length)
        } else {
            return value.replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
        }
    } else {
        return value
    }
}

export default thousandthPlace;
