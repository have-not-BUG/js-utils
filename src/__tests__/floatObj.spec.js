import floatObj from '@/global/floatObj'

describe('floatObj 方法测试', () => {
  test('相加', () => {
    expect(floatObj().plus(0.1,0.2)).toBe(0.3)
    expect(floatObj().plus(0.7,0.1)).toBe(0.8)
    expect(floatObj().plus(0.2,0.4)).toBe(0.6)
    expect(floatObj().plus(0.1,100)).toBe(100.1)
    expect(floatObj().plus(10000,100)).toBe(10100)
    expect(floatObj().plus(-1234567890123456.00,0)).toBe(-1234567890123456.00)
    expect(floatObj().plus(8.05463959,9.90925221)).toBe(17.9638918)
    expect(floatObj().plus(2.018,0.001)).toBe(2.019)
  })

  test('相减', () => {
    expect(floatObj().minus(1,0.9)).toBe(0.1)
    expect(floatObj().minus(1.5,1.2)).toBe(0.3)
    expect(floatObj().minus(0.3,0.2)).toBe(0.1)
    expect(floatObj().minus(0.988,0.001)).toBe(0.987)
    expect(floatObj().minus(108,7)).toBe(101)
    expect(floatObj().minus(0.7,0.1)).toBe(0.6)
  })
  test('相乘', () => {
    expect(floatObj().times(19.9,100)).toBe(1990)
    expect(floatObj().times(35.41,100)).toBe(3541)
    expect(floatObj().times(7,0.8)).toBe(5.6)
    expect(floatObj().times(3,0.8)).toBe(2.4)
    expect(floatObj().times(11,11)).toBe(121)
    expect(floatObj().times(0.6,0.5)).toBe(0.3)
    expect(floatObj().times(1.2,1.22)).toBe(1.464)
    expect(floatObj().times(1.11,10)).toBe(11.1)
    expect(floatObj().times(0.7,100)).toBe(70)
    // todo 缺陷 需要bigNumber解决
    // expect(floatObj().times(123456.789,123456.789)).toBe(15241578750.190521)
    // expect(floatObj().times(9.700000042,1000000000)).toBe(9700000042)
    // expect(floatObj().times(9999999999999.46,100)).toBe(999999999999946)


  })

  test('相除', () => {
    expect(floatObj().divide(2.2,100)).toBe(0.022)
    expect(floatObj().divide(16.8, 10)).toBe(1.68)
    expect(floatObj().divide(0.13,100)).toBe(0.0013)
    expect(floatObj().divide(64,8)).toBe(8)
    expect(floatObj().divide(0.3,0.1)).toBe(3)
    expect(floatObj().divide(0.69,10)).toBe(0.069)
    expect(floatObj().divide(53.3,1000)).toBe(0.0533)
    expect(floatObj().divide(53.3,3)).toBe(17.766666666666666)
    expect(floatObj().divide(33.3333, 100)).toBe(0.333333)
    expect(floatObj().divide(83.42894732749, 100)).toBe(0.8342894732749)
    expect(floatObj().divide(1, 3)).toBe(0.3333333333333333)
  })
  test('四舍五入', () => {
    expect(floatObj().round(1.005,2)).toBe(1.01)
    expect(floatObj().round(0.105,2)).toBe(0.11)
  })


})
