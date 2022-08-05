const { resolve } = require('path')
const fse = require('fs-extra')

// const originFilesAndDir=`${process.cwd()}/tpm`;
// const docsFilesAndDir=`${process.cwd()}/copyed`;
//
// fse.copy(originFilesAndDir, docsFilesAndDir)
//     .then(() => console.log(`从${originFilesAndDir}复制至${docsFilesAndDir}成功！`))
//     .catch(err => console.error(`从${originFilesAndDir}复制至${docsFilesAndDir}失败！，原因为${err}`))
const originFilesAndDir=`${process.cwd()}/template/configFiles`;
const docsFilesAndDir=`${resolve('../copyed')}`
fse.copy(originFilesAndDir,originFilesAndDir )
    .then(() => console.log(`从${originFilesAndDir}复制至${docsFilesAndDir}成功！`))
    .catch(err => console.error(`从${originFilesAndDir}复制至${docsFilesAndDir}失败！，原因为${err}`))
