/**
 * @description 数值货币型转换并加千分符
 * @param {String|Number} value  金额
 * @param {String} currency 货币符号 默认空
 * @param {String} decimals  保留位数 默认2位
 * @return {String} 货币型的字符
 *
 * @example
 * formatCurrency(12333.514, '$', 2) => $12,333.51
 */
function formatCurrency(value, currency = '', decimals = 2) {
  value = parseFloat(value);
  if (!isFinite(value) || (!value && value !== 0)) return '';
  const digitsRE = /(\d{3})(?=\d)/g;
  const stringified = String(Math.round(+Math.abs(value) + 'e' + decimals) / Math.pow(10, decimals));
  const _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
  const i = _int.length % 3;
  const head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
  const _float = decimals ? stringified.slice(-1 - decimals) : '';
  const sign = value < 0 ? '-' : '';
  return (
    sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float
  );
}
export default formatCurrency;
