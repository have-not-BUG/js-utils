/**
 * 移除url中某个查询字符串及其对应的值（支持hash及history模式）
 * @param  {string} [queryKey=token] 某一个查询字符串
 * @param  {string} [url=window.location.href] 网址
 * @return {string}
 * @example getRemovedQueryStringInUrl('token','http://127.0.0.1:8082/?token=aaa')
 */
function getRemovedQueryStringInUrl(queryKey,url) {
    //  'http://127.0.0.1:8080/?a=sdds&token=t&user=787#/gamelist'
    //  'http://127.0.0.1:8080/?a=sdds&token=taa&user=787#/gamelist'
    //  'http://127.0.0.1:8080/#/gamelist?a=b&token=11&user=787'
    // 'http://127.0.0.1:8080/?a=sdds&token=t&user=787'

    //  'http://127.0.0.1:8080/?a=sdds&token=t&user=787#/gamelist'
    //  'http://127.0.0.1:8080/?a=sdds&token=t&user=787'
    //  'http://127.0.0.1:8080/?a=sdds'
   if(!queryKey){
       queryKey='token'
   }
    if(!url){
        url=window.location.href;
    }
   const removedQueryKeyUrlArray=url.split(`${queryKey}=`);
    //  'http://127.0.0.1:8080/? sdds&token=t&user=787#/gamelist'
    //  'http://127.0.0.1:8080/?a=sdds& t&user=787#/gamelist'
    //  'http://127.0.0.1:8080/#/gamelist?a=b& 11&user=787'
    // 'http://127.0.0.1:8080/? sdds&token=t&user=787'

    //  'http://127.0.0.1:8080/?a=sdds&token=t& 787#/gamelist'
    //  'http://127.0.0.1:8080/?a=sdds&token=t& 787'
    //  'http://127.0.0.1:8080/? sdds'
    if(!removedQueryKeyUrlArray[1]){
        return url
    }
    console.log('url',url)
    console.log('queryKey',queryKey)
    if(removedQueryKeyUrlArray[1].indexOf('&') !==-1){
        // 1、第二段 有&的情况
        const removedAndAndQueryKey=removedQueryKeyUrlArray[1].replace(/^\S+?&/,'')

        // console.log('andFrondString',removedAndAndQueryKey)
        console.log('r',`${removedQueryKeyUrlArray[0]}${removedAndAndQueryKey}`)
        return `${removedQueryKeyUrlArray[0]}${removedAndAndQueryKey}`

    }else {
        // 2、第二段 无&的情况
        const frontPartRemoved=removedQueryKeyUrlArray[0].slice(0,removedQueryKeyUrlArray[0].length-1)
        if(removedQueryKeyUrlArray[1].indexOf('#') !==-1){
            // 2.1第二段 有#的情况
            const endHashPart=removedQueryKeyUrlArray[1].split('#')[1];
            console.log('r',`${frontPartRemoved}#${endHashPart}`)
            return `${frontPartRemoved}#${endHashPart}`
        }else {
            // 2.2第二段 无#的情况
            console.log('frontPartRemoved',frontPartRemoved)
            return frontPartRemoved
        }


    }



}

// 测试用例
// getRemovedQueryStringInUrl('a','http://127.0.0.1:8080/?a=sdds&token=t&user=787#/gamelist')
// getRemovedQueryStringInUrl('token','http://127.0.0.1:8080/?a=sdds&token=taa&user=787#/gamelist')
// getRemovedQueryStringInUrl('token','http://127.0.0.1:8080/#/gamelist?a=b&token=11&user=787')
// getRemovedQueryStringInUrl('a','http://127.0.0.1:8080/?a=sdds&token=t&user=787')
//
// getRemovedQueryStringInUrl('user','http://127.0.0.1:8080/?a=sdds&token=t&user=787#/gamelist')
// getRemovedQueryStringInUrl('user','http://127.0.0.1:8080/?a=sdds&token=t&user=787')
// getRemovedQueryStringInUrl('a','http://127.0.0.1:8080/?a=sdds')


export default getRemovedQueryStringInUrl
