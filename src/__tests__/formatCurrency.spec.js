import formatCurrency from '@/global/formatCurrency'

describe('formatCurrency 方法测试', () => {



  test('测试保留两位小数-正数', () => {
    expect(formatCurrency(12356.12454,'$',2)).toBe('$12,356.12')
    expect(formatCurrency(12356.105,'$',2)).toBe('$12,356.11')
    expect(formatCurrency(12356.1095,'$',2)).toBe('$12,356.11')
    expect(formatCurrency(12356.1005,'$',2)).toBe('$12,356.10')
  })
  // test('测试保留两位小数-负数', () => {
  //   expect(formatCurrency(-12356.12454,'$',2)).toBe('-$12,356.12')
  //   expect(formatCurrency(-12356.105,'$',2)).toBe('-$12,356.11')
  //   expect(formatCurrency(-12356.1095,'$',2)).toBe('-$12,356.11')
  //   expect(formatCurrency(-12356.1005,'$',2)).toBe('-$12,356.10')
  // })


})
