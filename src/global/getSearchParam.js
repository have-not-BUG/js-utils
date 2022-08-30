/**
 * 获取查询字符串中某个字段的值
 * @param name {string} 查询字符串中的某个字段
 * @param [url=window.location.href] {string} 网址(不填，则为当前网址)
 * @return {string}
 * @example
 * console.log(getSearchParam('id','https://h5.qq.com/matchrank/index.html?name=你好&id=20180727'))
 console.log(getSearchParam('name','https://h5.qq.com/matchrank/index.html?name=你好&id=20180727'))
 * // 20180727
 * // 你好

 */
function getSearchParam(name, url) {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
    const searchAndHashPart= url ? url.split('?')[1] : window.location.search.replace(/\?/g,'');
    const searchPart=searchAndHashPart ? searchAndHashPart.split('#')[0] :''
    const r = searchPart ? searchPart.match(reg) : null;
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return '';
}


export default getSearchParam
