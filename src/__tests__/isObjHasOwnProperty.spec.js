import isObjHasOwnProperty from '@/global/isObjHasOwnProperty'

describe('isObjHasOwnProperty 方法测试', () => {

  test('非Object的情况', () => {
    expect(()=> isObjHasOwnProperty([],'join')).toThrow('参数obj必须为Object类型')
  })

  test('{}的情况', () => {
    expect(isObjHasOwnProperty({name:"zzz"},'name')).toBe(true)
    expect(isObjHasOwnProperty({},'assign')).toBe(false)
    expect(isObjHasOwnProperty({name:"zzz"},'__proto__')).toBe(false)
    expect(isObjHasOwnProperty({name:"zzz"},'constructor')).toBe(false)
    expect(isObjHasOwnProperty({name:"zzz"},'prototype')).toBe(false)
  })
  test('Object的情况', () => {
    expect(isObjHasOwnProperty(Object,'assign')).toBe(true)
    expect(isObjHasOwnProperty(Object,'prototype')).toBe(true)
    expect(isObjHasOwnProperty(Object.prototype,'constructor')).toBe(true)
    expect(isObjHasOwnProperty(Object.prototype.constructor,'prototype')).toBe(true)

    expect(isObjHasOwnProperty(Object,'constructor')).toBe(false)
    expect(isObjHasOwnProperty(Object,'__proto__')).toBe(false)
  })
})
