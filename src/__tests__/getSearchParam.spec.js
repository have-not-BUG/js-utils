import getSearchParam from '@/global/getSearchParam'

describe('getSearchParam 方法测试', () => {

  test('有&的情况', () => {
    expect(getSearchParam('user','http://127.0.0.1:8080/?a=sdds&token=t&users=787&user=8989')).toBe('8989')
    expect(getSearchParam('a','http://127.0.0.1:8080/?a=sdds&token=t&user=787')).toBe('sdds')
    expect(getSearchParam('ad','http://127.0.0.1:8080/?name=lll&ad=sdds&token=t&user=787')).toBe('sdds')
    expect(getSearchParam('a','http://127.0.0.1:8080/?name=lll&token=t&user=787&a=sdds')).toBe('sdds')
    expect(getSearchParam('au','http://127.0.0.1:8080/?au=sdds&token=t&user=787#/gamelist')).toBe('sdds')
    expect(getSearchParam('token','http://127.0.0.1:8080/?a=sdds&token=taa&user=787#/gamelist')).toBe('taa')
    expect(getSearchParam('token','http://127.0.0.1:8080/#/gamelist?a=b&token=11&user=787')).toBe('11')
    expect(getSearchParam('user','http://127.0.0.1:8080/?a=sdds&token=t&user=787#/gamelist')).toBe('787')
    expect(getSearchParam('user','http://127.0.0.1:8080/?a=sdds&token=t&users=787&user=8989#end')).toBe('8989')


  })

  test('无& 有#的情况', () => {
    expect(getSearchParam('name','http://127.0.0.1:8080/?name=12121#/gamelist')).toBe('12121')
    expect(getSearchParam('name','http://127.0.0.1:8080/#/gamelist?name=name')).toBe('name')

  })

  test('无& 无#的情况', () => {
    expect(getSearchParam('a','http://127.0.0.1:8080/?a=sdds')).toBe('sdds')
    expect(getSearchParam('a','http://127.0.0.1:8080/')).toBe('')
  })


})
