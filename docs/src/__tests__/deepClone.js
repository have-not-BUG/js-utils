import arrayEqual from '@/global/deepClone'

describe('deepClone 方法测试', () => {
  // 简单数据类型拷贝 保证相等
  // 复杂数据类型拷贝（数组及对象） 保证相等
  // 超复杂数据类型拷贝（数组及对象多层组合） 保证相等

  // 简单数据类型拷贝修改后 保证不相等
  // 复杂数据类型拷贝修改后（数组及对象） 保证不相等
  // 超复杂数据类型拷贝修改后（数组及对象多层组合） 保证不相等


  test('简单数据类型拷贝后保证相等', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [1, 2, 3]
    expect(arrayEqual(arr1, arr2)).toBe(true)
  })

  test('含有非函数引用类型内容应该相等', () => {
    const arr1 = [1, { a: 1 }]
    const arr2 = [1, { a: 1 }]
    expect(arrayEqual(arr1, arr2)).toBe(true)
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
  test('数组内数据打乱应该相等', () => {
    const arr1 = [1,2,3]
    const arr2 = [3,2,1]
    expect(arrayEqual(arr1, arr2)).toBe(true)
  })
})
