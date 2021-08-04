const { resolve } = require('path')
const fse = require('fs-extra')
exports.handlers = {
    parseComplete: function(sourcefilesDocletsObj) {
        // console.log('======sourcefilesDocletsObj=============')
        // console.log('执行node命令的文件夹目录 : ' , `${process.cwd()}/src`)
        // console.log('执行node命令的文件夹目录 : ' , `${process.cwd()}/hotupdate`)
        // console.log('执行node命令的文件夹目录 : ' , `${process.cwd()}/docs`)
        // console.log('exec', exec)
        const originFilesAndDir=`${process.cwd()}/src`;
        const hotupdateFilesAndDir=`${process.cwd()}/hotupdate/src`;
        const docsFilesAndDir=`${process.cwd()}/docs/src`;
        fse.copy(originFilesAndDir, hotupdateFilesAndDir)
            .then(() => console.log('success!'))
            .catch(err => console.error(err))

        fse.copy(originFilesAndDir, docsFilesAndDir)
            .then(() => console.log('success!'))
            .catch(err => console.error(err))
    }
};
