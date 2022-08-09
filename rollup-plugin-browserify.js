var browserify = require('browserify');
const fs = require('fs')


export default function cjsToBrowserify () {
    return {
        name: 'cjs-to-browserify', // this name will show up in warnings and errors
        // resolveId ( source ) {
        //     if (source === 'virtual-module') {
        //         return source; // this signals that rollup should not ask other plugins or check the file system to find this id
        //     }
        //     return null; // other ids should be handled as usually
        // },
        writeBundle (writeBundleObj) {
            console.log('===========================编译完成了writeBundleObj============================')
            console.log('`${__dirname}/${writeBundleObj.dir}/index.js`',`${__dirname}/${writeBundleObj.dir}/index.js`)
            if(writeBundleObj.format === 'cjs'){
                browserify({ entries: [`${__dirname}/${writeBundleObj.dir}/index.js`] }).bundle(function (err,buf) {
                    // console.log('======err,buf======',err,buf)
                    fs.writeFileSync(`${__dirname}/npm/index.js`,buf)


                })

            }

        }
    };
}
