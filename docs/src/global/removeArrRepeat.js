/**
 * 数组去重
 * @param arr {Array} 需要去重的数组
 * @returns {Array} 去重后的数组
 * @example removeArrRepeat([1,2,2,3]) =>[1,2,3]
 */
export default function removeArrRepeat(arr) {
    return Array.from(new Set(arr));
}

// console.log('removeArrRepeat',removeArrRepeat([1,2,3,3,4]))
