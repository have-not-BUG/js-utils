// 页面资源加载完后进行tips提示
window.onload = function() {
    // window.licaiMessageBox的用法详见 https://cdn.jsdelivr.net/gh/have-not-BUG/cdn/reportself.js里的注释
    if(window.licaiMessageBox && window.licaiMessageBox.tips){
        window.licaiMessageBox.tips({
            message:'所有资源加载完毕,可以操作了。',
            time:1000, // 毫秒,
            isHide:false // 是否隐藏 默认否 可不填
        })
    }

}
