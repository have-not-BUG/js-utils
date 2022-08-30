import sequenceParam from '@/global/sequenceParam'

describe('sequenceParam 方法测试', () => {

  test('有&的情况', () => {
    expect(sequenceParam({"a":"sdds","token":"t","users":"787","user":"8989"})).toEqual('a=sdds&token=t&users=787&user=8989')
    expect(sequenceParam({"a":"sdds","token":"t","users":"787","user":"8989"})).toEqual('a=sdds&token=t&users=787&user=8989')
    expect(sequenceParam({"a":"sdds","token":"t","user":"787"})).toEqual('a=sdds&token=t&user=787')
    expect(sequenceParam({"name":"lll","ad":"sdds","token":"t","user":"787"})).toEqual('name=lll&ad=sdds&token=t&user=787')
    expect(sequenceParam({"name":"lll","token":"t","user":"787","a":"sdds"})).toEqual('name=lll&token=t&user=787&a=sdds')
    expect(sequenceParam({"au":"sdds","token":"t","user":"787"})).toEqual('au=sdds&token=t&user=787')
    expect(sequenceParam({"a":"sdds","token":"taa","user":"787"})).toEqual('a=sdds&token=taa&user=787')
    expect(sequenceParam({"a":"b","token":"11","user":"787"})).toEqual('a=b&token=11&user=787')
    expect(sequenceParam({"a":"sdds","token":"t","user":"787"})).toEqual('a=sdds&token=t&user=787')

  })

  test('无& 有#的情况', () => {
    expect(sequenceParam({"name":"12121"})).toEqual('name=12121')
    expect(sequenceParam({"name":"name"})).toEqual('name=name')

  })

  test('无& 无#的情况', () => {
    expect(sequenceParam({"a":"sdds"})).toEqual('a=sdds')
    expect(sequenceParam({})).toEqual('')
  })


})
