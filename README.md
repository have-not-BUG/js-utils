# js-utils

# 一、简介
结合 [imondo/js-utils](https://github.com/imondo/js-utils) 和 [nhn/tui.jsdoc-template](https://github.com/nhn/tui.jsdoc-template)
实现的js工具库（常用函数）文档管理工具。采用的是jsdoc+docdash主题。

# 二、功能
1、支持jsdoc注释自动生成文档

2、支持热更新(hot update) /实时更新(live update)

# 三、使用方法
1、使用`gulp serve`或者`npm run dev` 指令启动服务 （会在项目根目录生成hotupdate目录）

2、使用`npm run build:doc` 打包项目文档（会在项目根目录生成docs目录）

3、使用`npm run build:npm` 打包项目npm文件（会在项目根目录生成npm目录）

# 四、待完成
1、支持在页面上直接调试代码
2、发布npm包
3、支持https://img.shields.io/

