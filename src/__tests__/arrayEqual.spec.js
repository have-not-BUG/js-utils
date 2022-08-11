import arrayEqual from '@/global/arrayEqual'

describe('arrayEqual 方法测试', () => {
  test('基本类型数组内容相同应该相等', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [1, 2, 3]
    expect(arrayEqual(arr1, arr2)).toBe(true)

    const arr3 = ['a', 'b', 'c']
    const arr4 = ['a', 'b', 'c']
    expect(arrayEqual(arr3, arr4)).toBe(true)

    const arr5 = [1, 'a', undefined, null]
    const arr6 = [1, 'a', undefined, null]
    expect(arrayEqual(arr5, arr6)).toBe(true)
  })
  test('数组内容里不相同应该不相等', () => {
    const arr1 = [1, 'a', undefined, null, {name:1}]
    const arr2 = [1, 'a', undefined, null,{name:2}]
    expect(arrayEqual(arr1, arr2)).toBe(false)
  })

  test('含有非函数引用类型内容应该相等', () => {
    const arr1 = [1, { a: 1 }]
    const arr2 = [1, { a: 1 }]
    expect(arrayEqual(arr1, arr2)).toBe(true)
  })
  test('含有非函数引用类型内容不应该相等', () => {
    const arr1 = [1, { a: 1 }]
    const arr2 = [1, { a: 2 }]
    expect(arrayEqual(arr1, arr2)).toBe(false)
  })

  test('同指向引用内容应该相等', () => {
    const raw = [1, { a: 1 }, 'b']
    const arr1 = raw
    const arr2 = raw
    expect(arrayEqual(arr1, arr2)).toBe(true)

    const arr3 = [1, raw]
    const arr4 = [1, raw]
    expect(arrayEqual(arr3, arr4)).toBe(true)
  })

  test('空数组应该相等', () => {
    const arr1 = []
    const arr2 = []
    expect(arrayEqual(arr1, arr2)).toBe(true)
  })
  test('数组里只有null应该相等', () => {
    const arr1 = [null]
    const arr2 = [null]
    expect(arrayEqual(arr1, arr2)).toBe(true)
  })
  test('数组里只有undefined应该相等', () => {
    const arr1 = [undefined]
    const arr2 = [undefined]
    expect(arrayEqual(arr1, arr2)).toBe(true)
  })
  test('数组里只有空数组应该相等', () => {
    const arr1 = [[]]
    const arr2 = [[]]
    expect(arrayEqual(arr1, arr2)).toBe(true)
  })
  test('数组里只有空数组和null不应该相等', () => {
    const arr1 = [[]]
    const arr2 = [[null]]
    expect(arrayEqual(arr1, arr2)).toBe(false)
  })
  test('数组里有空数组和null不应该相等', () => {
    const arr1 = ['']
    const arr2 = [null]
    expect(arrayEqual(arr1, arr2)).toBe(false)
  })
  test('数组内简单数据打乱应该相等', () => {
    const arr1 = [1,2,3]
    const arr2 = [3,2,1]
    expect(arrayEqual(arr1, arr2)).toBe(true)
  })
  test('数组内复杂数据打乱应该相等', () => {
    const arr1 = [/'aa'/,1,2,3,{name:'前'},['后'],null,undefined,'',new Date(1660115867202)]
    const arr2 = [["后"],{'name':"前"},'',undefined,null,3,2,1,new Date(1660115867202),/'aa'/]
    expect(arrayEqual(arr1, arr2)).toBe(true)
  })
  test('数组内复杂数据打乱且相似但不同不应该相等', () => {
    const arr1 = [/'aa'/,1,2,3,{name:'前'},['后'],null,undefined,'',new Date(1660115867202)]
    const arr2 = [["后"],{'name':"前"},'',undefined,null,3,2,1,new Date(1660014867200),/'aa'/]
    expect(arrayEqual(arr1, arr2)).toBe(false)
  })
  test('数组内复杂数据长度不同不应该相等', () => {
    const arr1 = [1,2,3,{name:'前'},['后'],null]
    const arr2 = [1,2,3,{name:'前'},['后']]
    expect(arrayEqual(arr1, arr2)).toBe(false)
  })

  test('函数对象不同不应该相等', () => {
    const arr1 = [function(a){return a+1 }]
    const arr2 = [function(a){return a+2 }]
    expect(arrayEqual(arr1, arr2)).toBe(false)
  })

  test('函数对象相同应该相等', () => {
    const arr1 = [function(a){return a+1 }]
    const arr2 = [function(a){return a+1 }]
    expect(arrayEqual(arr1, arr2)).toBe(true)
  })

  test('传参不是数组，应该报错', () => {
    const arr1 = '';
    const arr2 = null;
    expect(() => arrayEqual(arr1, arr2)).toThrow('参数不为数组，无法比较');
  })
})
