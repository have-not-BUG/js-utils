/**
 * @description 判断数组是否相等
 * @param {Array} arr1 数组1
 * @param {Array} arr2 数组2
 * @return {Boolean}
 * @example
 * arrayEqual([1,2,3],[1,3,2])
 * true
 * arrayEqual([1, { a: 1 }],[1, { a: 1 }])
 * true
 */
function arrayEqual(arr1, arr2) {
    return  arr1.sort().toString() === arr2.sort().toString();

}

export default arrayEqual
