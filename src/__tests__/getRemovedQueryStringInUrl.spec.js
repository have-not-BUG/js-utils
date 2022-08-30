import getRemovedQueryStringInUrl from '@/global/getRemovedQueryStringInUrl'

describe('getRemovedQueryStringInUrl 方法测试', () => {

  test('有&的情况', () => {
    expect(getRemovedQueryStringInUrl('user','http://127.0.0.1:8080/?a=sdds&token=t&users=787&user=8989')).toBe('http://127.0.0.1:8080/?a=sdds&token=t&users=787')
    expect(getRemovedQueryStringInUrl('user','http://127.0.0.1:8080/?a=sdds&token=t&users=787&user=8989#end')).toBe('http://127.0.0.1:8080/?a=sdds&token=t&users=787#end')
    expect(getRemovedQueryStringInUrl('a','http://127.0.0.1:8080/?a=sdds&token=t&user=787')).toBe('http://127.0.0.1:8080/?token=t&user=787')
    expect(getRemovedQueryStringInUrl('ad','http://127.0.0.1:8080/?name=lll&ad=sdds&token=t&user=787')).toBe('http://127.0.0.1:8080/?name=lll&token=t&user=787')
    expect(getRemovedQueryStringInUrl('a','http://127.0.0.1:8080/?name=lll&token=t&user=787&a=sdds')).toBe('http://127.0.0.1:8080/?name=lll&token=t&user=787')
    expect(getRemovedQueryStringInUrl('au','http://127.0.0.1:8080/?au=sdds&token=t&user=787#/gamelist')).toBe('http://127.0.0.1:8080/?token=t&user=787#/gamelist')
    expect(getRemovedQueryStringInUrl('token','http://127.0.0.1:8080/?a=sdds&token=taa&user=787#/gamelist')).toBe('http://127.0.0.1:8080/?a=sdds&user=787#/gamelist')
    expect(getRemovedQueryStringInUrl('token','http://127.0.0.1:8080/#/gamelist?a=b&token=11&user=787')).toBe('http://127.0.0.1:8080/#/gamelist?a=b&user=787')
    expect(getRemovedQueryStringInUrl('user','http://127.0.0.1:8080/?a=sdds&token=t&user=787#/gamelist')).toBe('http://127.0.0.1:8080/?a=sdds&token=t#/gamelist')

  })

  test('无& 有#的情况', () => {
    expect(getRemovedQueryStringInUrl('name','http://127.0.0.1:8080/?name=12121#/gamelist')).toBe('http://127.0.0.1:8080/#/gamelist')
    expect(getRemovedQueryStringInUrl('name','http://127.0.0.1:8080/#/gamelist?name=name')).toBe('http://127.0.0.1:8080/#/gamelist')

  })

  test('无& 无#的情况', () => {
    expect(getRemovedQueryStringInUrl('a','http://127.0.0.1:8080/?a=sdds')).toBe('http://127.0.0.1:8080/')
    expect(getRemovedQueryStringInUrl('a','http://127.0.0.1:8080/')).toBe('http://127.0.0.1:8080/')
  })


})
