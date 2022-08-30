import paramToObj from '@/global/paramToObj'

describe('paramToObj 方法测试', () => {

  test('有&的情况', () => {
    expect(paramToObj('http://127.0.0.1:8080/?a=sdds&token=t&users=787&user=8989')).toEqual({"a":"sdds","token":"t","users":"787","user":"8989"})
    expect(paramToObj('http://127.0.0.1:8080/?a=sdds&token=t&users=787&user=8989#end')).toEqual({"a":"sdds","token":"t","users":"787","user":"8989"})
    expect(paramToObj('http://127.0.0.1:8080/?a=sdds&token=t&user=787')).toEqual({"a":"sdds","token":"t","user":"787"})
    expect(paramToObj('http://127.0.0.1:8080/?name=lll&ad=sdds&token=t&user=787')).toEqual({"name":"lll","ad":"sdds","token":"t","user":"787"})
    expect(paramToObj('http://127.0.0.1:8080/?name=lll&token=t&user=787&a=sdds')).toEqual({"name":"lll","token":"t","user":"787","a":"sdds"})
    expect(paramToObj('http://127.0.0.1:8080/?au=sdds&token=t&user=787#/gamelist')).toEqual({"au":"sdds","token":"t","user":"787"})
    expect(paramToObj('http://127.0.0.1:8080/?a=sdds&token=taa&user=787#/gamelist')).toEqual({"a":"sdds","token":"taa","user":"787"})
    expect(paramToObj('http://127.0.0.1:8080/#/gamelist?a=b&token=11&user=787')).toEqual({"a":"b","token":"11","user":"787"})
    expect(paramToObj('http://127.0.0.1:8080/?a=sdds&token=t&user=787#/gamelist')).toEqual({"a":"sdds","token":"t","user":"787"})

  })

  test('无& 有#的情况', () => {
    expect(paramToObj('http://127.0.0.1:8080/?name=12121#/gamelist')).toEqual({"name":"12121"})
    expect(paramToObj('http://127.0.0.1:8080/#/gamelist?name=name')).toEqual({"name":"name"})

  })

  test('无& 无#的情况', () => {
    expect(paramToObj('http://127.0.0.1:8080/?a=sdds')).toEqual({"a":"sdds"})
    expect(paramToObj('http://127.0.0.1:8080/')).toEqual({})
  })


})
