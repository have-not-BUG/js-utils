import formatCurrency from '@/global/formatCurrency'

describe('formatCurrency 方法测试', () => {



  test('测试保留两位小数', () => {
    expect(formatCurrency(12356.12454,'$',2)).toBe('$12,356.12')
    // todo 待修复四舍五入
    // expect(formatCurrency(12356.105,'$',2)).toBe('$12,356.11')
  })


})
