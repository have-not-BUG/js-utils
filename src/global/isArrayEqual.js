/**
 * @description 判断数组是否相等
 * @param {Array} arr1 数组1
 * @param {Array} arr2 数组2
 * @return {Boolean}
 * @example
 * isArrayEqual([1,2,3],[1,3,2])
 * true
 * isArrayEqual([1, { a: 1 }],[1, { a: 1 }])
 * true
 */
function isArrayEqual(arr1, arr2) {
    const canStringifyTypeArr=['[object Object]','[object Undefined]','[object Null]','[object Date]'];
    const canToStringTypeArr=['[object RegExp]','[object Array]','[object Function]'];
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        throw new Error("参数不为数组，无法比较")
    }
    if(arr1.length !== arr2.length){
        return false
    }
    let arr1Sort=arr1.sort();
    let arr2Sort=arr2.sort();
    for (let i = 0; i < arr1Sort.length;i++){
        if(canStringifyTypeArr.includes(Object.prototype.toString.call(arr1Sort[i]))){
            if(JSON.stringify(arr1Sort[i]) !== JSON.stringify(arr2Sort[i])){
                return false
            }
        }else if(canToStringTypeArr.includes(Object.prototype.toString.call(arr1Sort[i]))){
            if(Array.isArray(arr1Sort[i])){
               return isArrayEqual(arr1Sort[i],arr2Sort[i])
            }else {
                if(arr1Sort[i].toString() !== arr2Sort[i].toString()){
                    return false
                }
            }
        }else{
           if(arr1Sort[i] !==arr2Sort[i]){
               return false
           }
        }
    }
    return true
}

export default isArrayEqual
