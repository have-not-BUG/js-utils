/**
 * @description url 获取查询参数
 * @param {String} url
 * @returns {Object} ? 后的参数对象
 * @example
 * paramToObj("https://test.com?a=1&b=2") => { a: '1', b: '2' }
 * paramToObj('http://127.0.0.1:8080/?a=sdds&token=taa&user=787#/gamelist') => {"a":"sdds","token":"taa","user":"787"}
 */
function paramToObj(url) {
  const searchAndHash = url.split('?')[1];
  if (!searchAndHash) {
    return {};
  }
  const search=searchAndHash.split('#')[0];
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace(/\+/g, ' ') +
    '"}'
  );
}

export default paramToObj;
