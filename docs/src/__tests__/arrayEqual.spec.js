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
