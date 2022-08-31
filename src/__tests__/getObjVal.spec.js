import getObjVal from '@/global/getObjVal'

describe('getObjVal 方法测试', () => {
  test('{}的情况', () => {
    expect(getObjVal({name:"zzz"},'name')).toBe("zzz")
    expect(getObjVal({ 'a': { 'b': { 'c': 3 } } },'a.b.c')).toBe(3)
    expect(getObjVal({ 'a': { 'b': { 'c': 3 } } },'a.b.c.d')).toBe(undefined)
    expect(getObjVal({ 'a': { 'b': { 'c': 3 } } },'a.b.c.d.e')).toBe(undefined)
    expect(getObjVal({ 'a': { 'b': { 'c': 3 } } },'a.a.c.d.e')).toBe(undefined)
  })
})
