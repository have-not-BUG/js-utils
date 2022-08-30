import isExternalPath from '@/global/isExternalPath'

describe('isExternalPath 方法测试', () => {
  test('http/https/mailto/tel方法确认 ', () => {
    expect(isExternalPath('http')).toBe(false)
    expect(isExternalPath('https')).toBe(false)
    expect(isExternalPath('mailto')).toBe(false)
    expect(isExternalPath('tel')).toBe(false)
    expect(isExternalPath('http:')).toBe(true)
    expect(isExternalPath('https:')).toBe(true)
    expect(isExternalPath('http://xxx.a.com')).toBe(true)
    expect(isExternalPath('https://xxx.a.com')).toBe(true)
    expect(isExternalPath('mailto:xx@qq.com')).toBe(true)
    expect(isExternalPath('tel:070771213')).toBe(true)
  })

})
