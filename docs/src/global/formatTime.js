
/**
 * @description 与当前时间的间隔显示
 * @param {number} time 时间 new Date()
 * @param {string} option 需要输出的日期格式
 * @returns {string}
 * @example
 * formatTime(new Date())
 * "刚刚"
 * formatTime(new Date() - 60 * 2 * 1000)
 * "2分钟前"
 * formatTime(new Date() - 60 * 60 * 2 * 1000)
 * "2小时前"
 * formatTime(new Date() - 60 * 60 * 24 * 1 * 1000)
 * "1天前"
 * formatTime(new Date('2021-07-20 15:01') , '{y}-{m}-{d} {h}:{i}')
 * "2021-07-20 15:01"
 * formatTime(new Date('2021-07-20 15:01') , '{y}/{m}/{d} {h}-{i}')
 * "2021/07/20 15-01"
 */
function formatTime(time, option) {
    if (('' + time).length === 10) {
        time = parseInt(time) * 1000
    } else {
        time = +time
    }
    const d = new Date(time)
    const now = Date.now()

    const diff = (now - d) / 1000

    if (diff < 30) {
        return '刚刚'
    } else if (diff < 3600) {
        // less 1 hour
        return Math.ceil(diff / 60) + '分钟前'
    } else if (diff < 3600 * 24) {
        return Math.ceil(diff / 3600) + '小时前'
    } else if (diff < 3600 * 24 * 2) {
        return '1天前'
    }
    if (option) {
        return parseTime(time, option)
    } else {
        return (
            d.getMonth() +
            1 +
            '月' +
            d.getDate() +
            '日' +
            d.getHours() +
            '时' +
            d.getMinutes() +
            '分'
        )
    }
}

function parseTime(time, cFormat) {
    if (arguments.length === 0 || !time) {
        return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if ((typeof time === 'string')) {
            if ((/^[0-9]+$/.test(time))) {
                // support "1548221490638"
                time = parseInt(time)
            } else {
                // support safari
                // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
                time = time.replace(new RegExp(/-/gm), '/')
            }
        }

        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000
        }
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
        const value = formatObj[key]
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
        return value.toString().padStart(2, '0')
    })
    return time_str
}

export default formatTime;
