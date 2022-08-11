/**
 * 时间戳和日期相互转换
 * @param {number|string}  time 时间戳或日期（日期示例:2022-08-10或者2022/08/10 16:37:51）
 * @param {boolean} isDisplayDate  是否仅展示年月日 默认true
 * @returns {string|number}
 * @example
 * dateAndTimestampConversion(1660120671762) // '2022-08-10'
 * dateAndTimestampConversion(1660120671762,false) // '2022-08-10 16:37:51'
 * dateAndTimestampConversion('2022-08-10 16:37:51') // 1660120671000
 * dateAndTimestampConversion('2022/08/10 16:37:51') // 1660120671000
 */
 function dateAndTimestampConversion(time, isDisplayDate = true) {
     const timeType= Object.prototype.toString.call(time)
    if(timeType !=='[object Number]' && timeType !=='[object String]'){
        throw new Error("参数应为数字或字符串类型")
    }
    const isTimeTypeIsNum= timeType ==='[object Number]';
    if(isTimeTypeIsNum && String(time).length !==10 && String(time).length !==13){
        throw new Error("时间戳位数应为11位数或8位数")
    }
    if(!isTimeTypeIsNum && time.length !==10 && time.length !==19){
        throw new Error("日期位数应为10位数或19位数")
    }
    if (String(time).includes('-') || String(time).includes('/')) {
        const timeTransition=time.replace(/[-]/g,'/')
        return new Date(timeTransition).getTime()
    } else {
        const now = new Date(String(time).length ===10 ? Number(time) * 1000 : Number(time))
        const year = now.getFullYear()
        const month = (now.getMonth() + 1).toString().padStart(2, '0')
        const date = now.getDate().toString().padStart(2, '0')
        const hours = now.getHours().toString().padStart(2, '0')
        const minutes = now.getMinutes().toString().padStart(2, '0')
        const second = now.getSeconds().toString().padStart(2, '0')
        if (isDisplayDate) {
            return `${year}-${month}-${date}`
        } else {
            return `${year}-${month}-${date} ${hours}:${minutes}:${second}`
        }
    }
}
export default dateAndTimestampConversion
