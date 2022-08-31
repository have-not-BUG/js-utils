import thousandthPlace from '@/global/thousandthPlace'

describe('thousandthPlace 方法测试', () => {



  test('测试千分符-正数', () => {
    expect(thousandthPlace(12356.12454)).toBe('12,356.12454')
    expect(thousandthPlace(12356.105)).toBe('12,356.105')
    expect(thousandthPlace(12356.1095)).toBe('12,356.1095')
    expect(thousandthPlace(12356.1005)).toBe('12,356.1005')
    expect(thousandthPlace(12356.10050)).toBe('12,356.1005')
  })
  test('测试千分符-负数', () => {
    expect(thousandthPlace(-12356.12454)).toBe('-12,356.12454')
    expect(thousandthPlace(-12356.1050)).toBe('-12,356.105')
    expect(thousandthPlace(-12356.1095)).toBe('-12,356.1095')
    expect(thousandthPlace(-12356.1005)).toBe('-12,356.1005')
  })


})
