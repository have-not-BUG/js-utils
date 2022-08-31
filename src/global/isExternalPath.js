/** 判断路径是否为http、mailto或tel
 * @param {string} path 路径值
 * @returns {Boolean}
 */
 function isExternalPath(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}

export default isExternalPath
