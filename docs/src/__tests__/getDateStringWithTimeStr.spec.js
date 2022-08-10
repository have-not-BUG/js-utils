import dateAndTimestampConversion from '@/global/dateAndTimestampConversion'

describe('dateAndTimestampConversion 方法测试', () => {
  test('传时间戳展示年月日', () => {
    expect(dateAndTimestampConversion(1660120671762)).toBe('2022-08-10')
  })
  test('传时间戳展示年月日时分秒', () => {
    expect(dateAndTimestampConversion(1660120671762,false)).toBe('2022-08-10 16:37:51')
  })

  test('传年月日时分秒展示时间戳(-连接方式)', () => {
    expect(dateAndTimestampConversion('2022-08-10 16:37:51')).toBe(1660120671000)
  })
  test('传年月日时分秒展示时间戳(/连接方式)', () => {
    expect(dateAndTimestampConversion('2022/08/10 16:37:51')).toBe(1660120671000)
  })
  test('传年月日展示时间戳(-连接方式)', () => {
    expect(dateAndTimestampConversion('2022-08-10')).toBe(1660060800000)
  })
  test('传年月日展示时间戳(/连接方式)', () => {
    expect(dateAndTimestampConversion('2022/08/10')).toBe(1660060800000)
  })







})
