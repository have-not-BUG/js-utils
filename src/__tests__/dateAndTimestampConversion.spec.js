import dateAndTimestampConversion from '@/global/dateAndTimestampConversion'

const nowDate= new Date();
const timezoneOffset=nowDate.getTimezoneOffset()*60*1000 ? 0 : 28800000; // 中国东八区 -480 分钟 也就是 -28800000毫秒

describe('dateAndTimestampConversion 方法测试', () => {
  test('传时间戳展示年月日', () => {
    expect(dateAndTimestampConversion(1660120671762+timezoneOffset)).toBe('2022-08-10')
  })
  test('传10位时间戳展示年月日', () => {
    expect(dateAndTimestampConversion(1660120671)).toBe('2022-08-10')
  })
  test('传时间戳展示年月日时分秒', () => {
    expect(dateAndTimestampConversion(1660120671762+timezoneOffset,false)).toBe('2022-08-10 16:37:51')
  })

  test('传年月日时分秒展示时间戳(-连接方式)', () => {
    expect(dateAndTimestampConversion('2022-08-10 16:37:51')).toBe(1660120671000+timezoneOffset)
  })
  test('传年月日时分秒展示时间戳(/连接方式)', () => {
    expect(dateAndTimestampConversion('2022/08/10 16:37:51')).toBe(1660120671000+timezoneOffset)
  })
  test('传年月日展示时间戳(-连接方式)', () => {
    expect(dateAndTimestampConversion('2022-08-10')).toBe(1660060800000+timezoneOffset)
  })
  test('传年月日展示时间戳(/连接方式)', () => {
    expect(dateAndTimestampConversion('2022/08/10')).toBe(1660060800000+timezoneOffset)
  })
  test('日期字符串长度应为10或19位数', () => {
    expect(() => dateAndTimestampConversion('2022/8/10')).toThrow('日期位数应为10位数或19位数')
  })
  test('日期字符串长度应为10或19位数', () => {
    expect(() => dateAndTimestampConversion('2022/08/100')).toThrow('日期位数应为10位数或19位数')
  })
  test('时间戳位数应为10位数或13位数', () => {
    expect(() => dateAndTimestampConversion(16600608000000)).toThrow('时间戳位数应为10位数或13位数')
  })
  test('时间戳位数应为10位数或13位数', () => {
    expect(() => dateAndTimestampConversion(166006080)).toThrow('时间戳位数应为10位数或13位数')
  })
  test('参数应为数字或字符串类型', () => {
    expect(() => dateAndTimestampConversion(new Date())).toThrow('参数应为数字或字符串类型')
  })







})
