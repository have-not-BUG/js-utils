# js-utils-lc

# 一、简介
![https://www.npmjs.com/package/js-utils-lc](https://img.shields.io/npm/v/js-utils-lc)
![https://github.com/have-not-BUG/js-utils](https://img.shields.io/github/languages/code-size/have-not-BUG/js-utils)
![https://github.com/have-not-BUG/js-utils](https://img.shields.io/github/issues-raw/have-not-BUG/js-utils)
![https://www.npmjs.com/package/js-utils-lc](https://img.shields.io/npm/dt/js-utils-lc)
![https://github.com/have-not-BUG/js-utils](https://img.shields.io/github/license/have-not-BUG/js-utils)
![https://github.com/have-not-BUG/js-utils](https://img.shields.io/badge/maintained%20with-rollup-cc00ff.svg)





结合 [imondo/js-utils](https://github.com/imondo/js-utils) 、 [nhn/tui.jsdoc-template](https://github.com/nhn/tui.jsdoc-template) 及 [null_639_5368/js-utils](https://gitee.com/null_639_5368/js-utils)
实现的js工具库（常用函数）文档管理工具。采用的是jsdoc+docdash主题。

# 二、功能
1、支持jsdoc注释自动生成文档（生成的文档可以很方便的查看源码）

2、jsdoc注释修改支持热更新(hot update) /实时更新(live update)文档

3、支持实时测试/查看各个函数的运行效果

4、支持在该项目直接发布npm包(使用rollup打包)


# 三、使用方法
1、使用`gulp serve`或者`npm run dev` 指令启动文档服务 （会在项目根目录生成hotupdate目录）

2、使用`npm run build:doc` 打包项目文档（会在项目根目录生成docs目录）

3、使用`npm run build:npmprod` 打包项目npm文件（会在项目根目录生成npm目录，npm/amd 为amd规范，npm/cjs 为CommonJs规范，npm/es 为ES Moudle规范）

4、使用`npm run build:npmdev` 打包项目未压缩的npm文件（会在项目根目录生成npm目录）

5、使用`npm run test:use` 通过nodemon调用未压缩的npm文件 `npm/cjs/index.js` ，可以编辑`npm/cjs/index.js`文件 实时测试/查看各个函数的运行效果

# 四、待完成
~~1、支持实时测试/查看各个函数的运行效果~~

~~2、发布npm包~~

~~3、支持https://img.shields.io/~~

4、补充常用函数

