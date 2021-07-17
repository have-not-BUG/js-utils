import json from 'rollup-plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'
import glob from 'glob';
// import { uglify } from "rollup-plugin-uglify";
import { terser } from 'rollup-plugin-terser';


import { babel } from '@rollup/plugin-babel';

// import serve from 'rollup-plugin-serve'
// import livereload from 'rollup-plugin-livereload'

export default {
    // input: 'src/index.js',
    input: glob.sync('src/**/*.js'),
    output: [
        {
            format: 'es',
            dir:'npm/es',
            name:'zonst_utils',
            // format: 'amd',
            // dir:'amd',
            // file: 'out.js',
            // inlineDynamicImports: true

        },
        {
            // format: 'es',
            // dir:'es',
            name:'zonst_utils',
            format: 'amd',
            dir:'npm/amd',
            // file: 'out.js',
            // inlineDynamicImports: true

        },
        {
            // format: 'es',
            // dir:'es',
            name:'zonst_utils',
            format: 'cjs',
            dir:'npm/cjs',
            // file: 'out.js',
            // inlineDynamicImports: true

        },
        // {
        //     // format: 'es',
        //     // dir:'es',
        //     name:'zonst_utils',
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
        terser(),
    // uglify()
    ],
    external:["@babel/runtime","core-js"]
};
