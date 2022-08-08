function judgeType(obj) {
    // tostring会返回对应不同的标签的构造函数
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object',
    };
    // const Element=Element?Element:function Element () {

    // }
    if(!Element){
        Element=function Element () {

        }
    }
    if (obj instanceof Element) {
        return 'element';
    }
    return map[toString.call(obj)];
}

/**
 * 深拷贝数据
 * @param data  {{}|*} 待拷贝的数据
 * @return {{}|*} 拷贝后的新数据
 * @example const originData=[{name:'lc',age:18},[1,2,3]]
 const clonedData=deepClone(originData)
 clonedData[0].age=28
 clonedData[1]=[9,9,6]
 console.log("clonedData",clonedData)
 console.log('originData',originData)
 //  clonedData [ { name: 'lc', age: 28 }, [ 9, 9, 6 ] ]
 //  originData [ { name: 'lc', age: 18 }, [ 1, 2, 3 ] ]
 */

function deepClone(data) {
    const type = judgeType(data);
    let obj;
    if (type === 'array') {
        obj = [];
    } else if (type === 'object') {
        obj = {};
    } else {
        // 不再具有下一层次
        return data;
    }
    if (type === 'array') {
        // eslint-disable-next-line
        for (let i = 0, len = data.length; i < len; i++) {
            obj.push(deepClone(data[i]));
        }
    } else if (type === 'object') {
        // 对原型上的方法也拷贝了....
        // eslint-disable-next-line
        for (const key in data) {
            obj[key] = deepClone(data[key]);
        }
    }
    return obj;
}



export default deepClone
