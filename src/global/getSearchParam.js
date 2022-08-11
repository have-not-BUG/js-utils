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
    var reg = new RegExp("(^|&)".concat(name, "=([^&]*)(&|$)"), 'i');
    if(url){
        var index=url.indexOf('?');
        url= index !==-1 ? url.substring(index):''
    }
    var r = url ? url.substr(1).match(reg) : window.location.search.substr(1).match(reg);
    if (r !== null) {
        return decodeURIComponent(r[2]);
    }

    return '';
}


export default getSearchParam
