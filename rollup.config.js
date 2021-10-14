import json from 'rollup-plugin-json';
// import rollup from 'rollup';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'
// import glob from 'glob';
// import { uglify } from "rollup-plugin-uglify";
import {terser} from 'rollup-plugin-terser';


import {babel} from '@rollup/plugin-babel';
// import cjsToBrowserify from './rollup-plugin-browserify';

// const watchOptions = {};
// const watcher = rollup.watch(watchOptions);

// const rollupEventsObj = {
//     "START":
//         ' 监听器正在启动（重启）',
//     "BUNDLE_START":
//         ' 构建单个文件束',
//     "BUNDLE_END":
//         ' 完成文件束构建',
//     "END":
//         '完成所有文件束构建',
//     "ERROR":
//         ' 构建时遇到错误',
//     "FATAL":
//         '遇到无可修复的错误',
//
//
// }

// watcher.on('event', event => {
//     if (rollupEventsObj[event.code]) {
//         console.log('rollupEventsObj[event.code]',rollupEventsObj[event.code])
//         // event.code 会是下面其中一个：
//
//
//     }
//
// });





// import serve from 'rollup-plugin-serve'
// import livereload from 'rollup-plugin-livereload'

const isDev = process.env.NODE_ENV === 'development';
console.log('当前模式', process.env.NODE_ENV)

export default {
    input: 'src/index.js',
    // input: glob.sync('src/**/*.js'),
    output: [
        {
            format: 'es',
            dir: isDev?'npm/es':"npm/min/es",
            name: 'jsUtilsLc',
            sourcemap:!isDev,
            // format: 'amd',
            // dir:'amd',
            // file: 'out.js',
            // file: isDev ? 'index.js': 'index.min.js',
            // inlineDynamicImports: true

        },
        {
            // format: 'es',
            // dir:'es',
            name: 'jsUtilsLc',
            format: 'amd',
            dir: isDev?'npm/amd':"npm/min/amd",
             sourcemap:!isDev,
            // file: isDev?'index.js':'index.min.js',
            // file: 'out.js',
            // inlineDynamicImports: true

        },
        {
            // format: 'es',
            // dir:'es',
            name: 'jsUtilsLc',
            format: 'cjs',
            dir: isDev?'npm/cjs':"npm/min/cjs",
             sourcemap:!isDev,
            // file: isDev?'index.js':'index.min.js',
            // file: 'out.js',
            // inlineDynamicImports: true

        },
        {
            name:'jsUtilsLc',
            format: 'umd',
            dir: isDev?'npm/umd':"npm/min/umd",
             sourcemap:!isDev,
            // file: isDev?'index.js':'index.min.js',
            // file: 'out.js',
            // inlineDynamicImports: true

        }
    ],
    plugins: [
        json(),
        nodeResolve(),
        commonjs({
            include: 'node_modules/**',
        }),
        babel({
            babelHelpers: 'runtime',
            exclude: 'node_modules/**'
        }),
        // cjsToBrowserify(),
        !isDev && terser({
            // sourceMap:{
            //
            // },
            safari10:true,
            // compress:{
            //
            // },
            keep_fnames:false,// 76.5kb => 66.8kb
            keep_classnames: false, // 76.5kb => 66.8kb
            // enclose: true,
        }),
        // // uglify()
        // //
        //     // 开发环境通过浏览器进行调试
        //     isDev && serve({
        //         // Multiple folders to serve from
        //         contentBase: ['npm'],
        //     }),
        //     // 热重载配合serve一起使用
        //     isDev && livereload('npm'),
    ],
    external: ["@babel/runtime", "core-js"]
};
