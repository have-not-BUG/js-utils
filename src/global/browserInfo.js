/**
 * @description 获取到浏览器信息
 * @returns {String} 浏览器信息
 * @example
 * browserInfo()
 * "chrome 91.0.4472.164"
 */

function browserInfo() {
    let browse = ''
    const browserInfo = getBrowserInfo()
    if (browserInfo[1] && browserInfo[2]) {
        browse = getBrowserInfo()[1] + ' ' + getBrowserInfo()[2]
    } else {
        browse = '未获取到浏览器信息'
    }
    switch (browse) {
        case 'msie 6.0':
            browse = 'IE 6'
            break
        case 'msie 7.0':
            browse = 'IE 7'
            break
        case 'trident 4.0':
            browse = 'IE 8'
            break
        case 'trident 5.0':
            browse = 'IE 9'
            break
        case 'trident 6.0':
            browse = 'IE 10'
            break
        case 'trident 7.0':
            browse = 'IE 11'
            break
    }
    localStorage.setItem('browse', browse)
    return browse
}

function getBrowserInfo() {
    const agent = navigator.userAgent.toLowerCase()
    const arr = []
    const system = agent.split(' ')[1].split(' ')[0].split('(')[1]
    arr.push(system)
    const REGSTR_EDGE = /edge\/[\d.]+/gi
    const REGSTR_IE = /trident\/[\d.]+/gi
    const OLD_IE = /msie\s[\d.]+/gi
    const REGSTR_FF = /firefox\/[\d.]+/gi
    const REGSTR_CHROME = /chrome\/[\d.]+/gi
    const REGSTR_SAF = /safari\/[\d.]+/gi
    const REGSTR_OPERA = /opr\/[\d.]+/gi
    // IE
    if (agent.indexOf('trident') > 0) {
        arr.push(agent.match(REGSTR_IE)[0].split('/')[0])
        arr.push(agent.match(REGSTR_IE)[0].split('/')[1])
        return arr
    }
    // OLD_IE
    if (agent.indexOf('msie') > 0) {
        arr.push(agent.match(OLD_IE)[0].split(' ')[0])
        arr.push(agent.match(OLD_IE)[0].split(' ')[1])
        return arr
    }
    // Edge
    if (agent.indexOf('edge') > 0) {
        arr.push(agent.match(REGSTR_EDGE)[0].split('/')[0])
        arr.push(agent.match(REGSTR_EDGE)[0].split('/')[1])
        return arr
    }
    // firefox
    if (agent.indexOf('firefox') > 0) {
        arr.push(agent.match(REGSTR_FF)[0].split('/')[0])
        arr.push(agent.match(REGSTR_FF)[0].split('/')[1])
        return arr
    }
    // Opera
    if (agent.indexOf('opr') > 0) {
        arr.push(agent.match(REGSTR_OPERA)[0].split('/')[0])
        arr.push(agent.match(REGSTR_OPERA)[0].split('/')[1])
        return arr
    }
    // Safari
    if (agent.indexOf('safari') > 0 && agent.indexOf('chrome') < 0) {
        arr.push(agent.match(REGSTR_SAF)[0].split('/')[0])
        arr.push(agent.match(REGSTR_SAF)[0].split('/')[1])
        return arr
    }
    // Chrome
    if (agent.indexOf('chrome') > 0) {
        arr.push(agent.match(REGSTR_CHROME)[0].split('/')[0])
        arr.push(agent.match(REGSTR_CHROME)[0].split('/')[1])
        return arr
    } else {
        arr.push('未获取到浏览器信息')
        return arr
    }
}

export default browserInfo;
