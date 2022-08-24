import toFixed from '@/global/toFixed'

describe('toFixed 方法测试', () => {

  test('四舍五入', () => {
    expect(toFixed(0.105,2)).toBe('0.11')
    expect(toFixed(0.3358,2)).toBe('0.34')
    expect(toFixed('0.3358',2)).toBe('0.34')
    expect(toFixed(1.005,2)).toBe('1.01')
    expect(toFixed(1.005)).toBe('1.01')
    expect(toFixed(1.0005,3)).toBe('1.001')
    expect(toFixed(1.15643,3)).toBe('1.156')
    expect(toFixed(102151515.15443,3)).toBe('102151515.154')

  })


})
