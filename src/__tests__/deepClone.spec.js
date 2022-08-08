import deepClone from '@/global/deepClone'

describe('deepClone 方法测试', () => {
  // 简单数据类型拷贝 保证相等
  // 复杂数据类型拷贝（数组及对象） 保证相等

  // 简单数据类型拷贝修改后 保证不相等
  // 复杂数据类型拷贝修改后（数组及对象） 保证不相等


  test('简单数据类型拷贝后保证相等', () => {
    const originData = 1
    const copyedData  = deepClone(originData)
    expect(copyedData).toBe(1)
    expect(originData).toBe(1)
  })
  test('复杂数据类型拷贝后保证相等（数组）', () => {
    const originData = [1, 2, {"names":['h','i'],'info':{'age1':21,'age2':22}},['city',{name:'git'}]]
    const copyedData  = deepClone(originData)
    expect(originData).toEqual([1, 2, {"names":['h','i'],'info':{'age1':21,'age2':22}},['city',{name:'git'}]])
    expect(copyedData).toEqual([1, 2, {"names":['h','i'],'info':{'age1':21,'age2':22}},['city',{name:'git'}]])
    expect(copyedData.toString() === originData.toString()).toBe(true)

  })

  test('复杂数据类型拷贝后保证相等（对象）', () => {
    const originData = {"names":['h','i',{name:'199'}],'info':{'age1':21,'age2':22,arr:['a',{name:'dd'},[1,2,3]]}}
    const copyedData  = deepClone(originData)
    expect(originData).toEqual({"names":['h','i',{name:'199'}],'info':{'age1':21,'age2':22,arr:['a',{name:'dd'},[1,2,3]]}})
    expect(copyedData).toEqual({"names":['h','i',{name:'199'}],'info':{'age1':21,'age2':22,arr:['a',{name:'dd'},[1,2,3]]}})
    expect(JSON.stringify(copyedData) === JSON.stringify(originData)).toBe(true)

  })

  test('简单数据类型拷贝后修改保证不相等', () => {
    let originData = 1;
    let copyedData  = deepClone(originData);
        originData=2;
    expect(originData).toBe(2)
    expect(copyedData).toBe(1)
    expect(copyedData !== originData).toBe(true)

  })
  test('复杂数据类型拷贝后修改保证不相等（数组）', () => {
    const originData = [1, 2, {"names":['h','i'],'info':{'age1':21,'age2':22}},['city',{name:'git'}]]
    let copyedData  = deepClone(originData)
     copyedData[0]=99;
    expect(copyedData.toString() !== originData.toString()).toBe(true)
    expect(originData).toEqual([1, 2, {"names":['h','i'],'info':{'age1':21,'age2':22}},['city',{name:'git'}]])
    expect(copyedData).toEqual([99, 2, {"names":['h','i'],'info':{'age1':21,'age2':22}},['city',{name:'git'}]])

  })

  test('复杂数据类型拷贝后修改保证不相等（对象）', () => {
    const originData = {"names":['h','i',{name:'199'}],'info':{'age1':21,'age2':22,arr:['a',{name:'dd'},[1,2,3]]}};
    let copyedData  = deepClone(originData);
    copyedData['names']='name发生变化了';
    expect(JSON.stringify(copyedData) !== JSON.stringify(originData)).toBe(true)
    expect(originData).toEqual({"names":['h','i',{name:'199'}],'info':{'age1':21,'age2':22,arr:['a',{name:'dd'},[1,2,3]]}})
    expect(copyedData).toEqual({"names":'name发生变化了','info':{'age1':21,'age2':22,arr:['a',{name:'dd'},[1,2,3]]}})
  })

})
