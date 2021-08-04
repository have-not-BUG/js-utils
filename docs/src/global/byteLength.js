/**
 * @description 获取字节长度
 * @param {string} str 输入字符串
 * @returns {number} output 输出字节长度
 * @example
 * byteLength('123')
 * 3
 * byteLength('好')
 * 3
 * byteLength('a')
 * 1
 */
export function byteLength(str) {
    // returns the byte length of an utf8 string
    let s = str.length
    for (var i = str.length - 1; i >= 0; i--) {
        const code = str.charCodeAt(i)
        if (code > 0x7f && code <= 0x7ff) s++
        else if (code > 0x7ff && code <= 0xffff) s += 2
        if (code >= 0xDC00 && code <= 0xDFFF) i--
    }
    return s
}
