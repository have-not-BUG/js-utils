/**
 * 判断obj是否为自身属性
 * @param obj
 * @param key
 * @returns {boolean}
 */
function isObjHasOwnProperty(obj, key) {
    const type= Object.prototype.toString.call(obj);
    if( type !=='[object Function]' && type !=='[object Object]'){
        throw new Error('参数obj必须为Object类型')
    }
    return Object.prototype.hasOwnProperty.call(obj, key)
}
export default isObjHasOwnProperty

