import deepClone from '@/global/deepClone'

describe('deepClone 方法测试', () => {
  // 简单数据类型拷贝 保证相等
  // 复杂数据类型拷贝（数组及对象） 保证相等
  // 超复杂数据类型拷贝（数组及对象多层组合） 保证相等

  // 简单数据类型拷贝修改后 保证不相等
  // 复杂数据类型拷贝修改后（数组及对象） 保证不相等
  // 超复杂数据类型拷贝修改后（数组及对象多层组合） 保证不相等


  test('简单数据类型拷贝后保证相等', () => {
    const originData = 1
    const copyedData  = deepClone(originData)
    expect(copyedData === originData).toBe(true)
  })
  test('复杂数据类型拷贝后保证相等1', () => {
    const originData = [1, 2, {"names":['h','i'],'info':{'age1':21,'age2':22}}]
    const copyedData  = deepClone(originData)
    expect(copyedData.toString() === originData.toString()).toBe(true)
  })

})
