import json from 'rollup-plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'
import glob from 'glob';
// import { uglify } from "rollup-plugin-uglify";
import { terser } from 'rollup-plugin-terser';


import { babel } from '@rollup/plugin-babel';

import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

const isDev = process.env.NODE_ENV === 'development';
console.log('当前模式', process.env.NODE_ENV)

export default {
    // input: 'src/index.js',
    input: glob.sync('src/**/*.js'),
    output: [
        {
            format: 'es',
            dir:'npm/es',
            name:'js_utils_lc',
            // format: 'amd',
            // dir:'amd',
            // file: 'out.js',
            // inlineDynamicImports: true

        },
        {
            // format: 'es',
            // dir:'es',
            name:'js_utils_lc',
            format: 'amd',
            dir:'npm/amd',
            // file: 'out.js',
            // inlineDynamicImports: true

        },
        {
            // format: 'es',
            // dir:'es',
            name:'js_utils_lc',
            format: 'cjs',
            dir:'npm/cjs',
            // file: 'out.js',
            // inlineDynamicImports: true

        },
        // {
        //     // format: 'es',
        //     // dir:'es',
        //     name:'js_utils_lc',
        //     format: 'umd',
        //     dir:'npm/umd',
        //     // file: 'out.js',
        //     // inlineDynamicImports: true
        //
        // }
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
        !isDev && terser(),
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
    external:["@babel/runtime","core-js"]
};
