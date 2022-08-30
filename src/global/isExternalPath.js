/**
 * @param {string} path
 * @returns {Boolean}
 */
 function isExternalPath(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}

export default isExternalPath
