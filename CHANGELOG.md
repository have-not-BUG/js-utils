# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.4.1](https://github.com/have-not-BUG/js-utils/compare/v2.4.0...v2.4.1) (2022-08-25)


### Bug Fixes

* 1、完善toFixed、formatcurrency方法及单元测试 ([6f6f5ae](https://github.com/have-not-BUG/js-utils/commit/6f6f5ae27bb99bede4a877c542a36d31f872d5f6))

## [2.4.0](https://github.com/have-not-BUG/js-utils/compare/v2.3.1...v2.4.0) (2022-08-24)


### Features

* 1、支持方法直接实时运行 2、新增getRemovedQueryStringInUrl单元测试 3、修改formatCurrency ([bd1319c](https://github.com/have-not-BUG/js-utils/commit/bd1319ce92d283012962e7dd7fdf9505ea10b102))

### [2.3.1](https://github.com/have-not-BUG/js-utils/compare/v2.3.0...v2.3.1) (2022-08-22)

## [2.3.0](https://github.com/have-not-BUG/js-utils/compare/v2.2.0...v2.3.0) (2022-08-22)


### Features

* 完善toFixed方法及单元测试 ([7251760](https://github.com/have-not-BUG/js-utils/commit/7251760b064e1c97d5781ef73e192d8144d0cb3b))
* 完善浮点数函数及单元测试 ([49befb7](https://github.com/have-not-BUG/js-utils/commit/49befb7e3e3b9a95d383323c9ebf4b4d31d61543))


### Bug Fixes

* 修复sonar提示 ([507de6a](https://github.com/have-not-BUG/js-utils/commit/507de6aeb921c435b3064fe5f2530b61483673ab))
* 修复工作流错误问题 ([67a9771](https://github.com/have-not-BUG/js-utils/commit/67a97710d268f0f4e880ea8fe9cb61ae340ff923))
* 解决文档页面在控制台无法直接调试问题 ([cbc7285](https://github.com/have-not-BUG/js-utils/commit/cbc7285466befcd5cba8dc292bfc311cea80e3e0))

## [2.2.0](https://github.com/have-not-BUG/js-utils/compare/v2.1.0...v2.2.0) (2022-08-11)


### Features

* 完善时间戳及日期相互转换函数及单元测试 ([432ee86](https://github.com/have-not-BUG/js-utils/commit/432ee863769c5f1d5a4f479635295d57a14a9598))


### Bug Fixes

* 1、修复时区问题导致日期函数单测失败问题 2、移除docs本地生成程序 ([ff10f85](https://github.com/have-not-BUG/js-utils/commit/ff10f852a08ade4c9e43117406ef6b36015572db))
* 修复时间戳位数描述错误及格式化 ([e6ae486](https://github.com/have-not-BUG/js-utils/commit/e6ae486e5ee7a50911c637cd0b1d3ca0a4d1f595))

## [2.1.0](https://github.com/have-not-BUG/js-utils/compare/v2.0.0...v2.1.0) (2022-08-10)


### Features

* 1、提交代码前运行覆盖率测试 2、新增时间戳与日期相互转换的函数及单元测试 ([2dc03ed](https://github.com/have-not-BUG/js-utils/commit/2dc03ed9a15cf82e27b71858c3e4fa5726342a24))
* 1、重写数组对比方法及测试用例 2、支持测试失败后继续执行测试用例 ([e4a636d](https://github.com/have-not-BUG/js-utils/commit/e4a636da8807866bd4682a061a683bc3185577cf))
* 移除覆盖率测试文件 ([101fb28](https://github.com/have-not-BUG/js-utils/commit/101fb28facee2356ba2e1e2baf89a123a14cf6d0))


### Bug Fixes

* 深拷贝新增Element相关测试用例 ([b3ff9b4](https://github.com/have-not-BUG/js-utils/commit/b3ff9b4036433e84f281748e76030ae3f58693f9))

## [2.0.0](https://github.com/have-not-BUG/js-utils/compare/v1.5.0...v2.0.0) (2022-08-09)


### ⚠ BREAKING CHANGES

* npm支持未压缩版本

### Features

* 1、node12可支持gulp3.9.1 2、变更测试文件自动运行测试 3、完成deeepClone单元测试 ([69e97a4](https://github.com/have-not-BUG/js-utils/commit/69e97a48a77cd2a7ee6859e5261a60d094c260a5))
* 1、注释自动运行单元测试代码 2、完善运行环境说明 ([cd79af4](https://github.com/have-not-BUG/js-utils/commit/cd79af45c1028354651e848a938467bf86141b76))
* 单元测试优化 ([d76ad34](https://github.com/have-not-BUG/js-utils/commit/d76ad342e76d0781183ecaa440243d4689283ae8))
* 完善数组相等及深拷贝方法及相应的单元测试 ([ef2411b](https://github.com/have-not-BUG/js-utils/commit/ef2411b6725493add27fcc5bda4fbbcb0350b121))


### Bug Fixes

* 移除误粘贴文件夹 ([ebc5fa5](https://github.com/have-not-BUG/js-utils/commit/ebc5fa554d86cca027b40a1c3f9da7c64cbe8f90))


* Merge pull request #35 from have-not-BUG/feat-支持sourcemap ([5b98d47](https://github.com/have-not-BUG/js-utils/commit/5b98d47da42320f89dc0ec22b3618ed40d7b8982)), closes [#35](https://github.com/have-not-BUG/js-utils/issues/35)

## [1.5.0](https://github.com/have-not-BUG/js-utils/compare/v1.4.3...v1.5.0) (2021-10-14)


### Features

* 未压缩版也开启sourcemap ([f928b71](https://github.com/have-not-BUG/js-utils/commit/f928b7149ff190989796b88adde6cc4f69c679f6))

### [1.4.3](https://github.com/have-not-BUG/js-utils/compare/v1.4.2...v1.4.3) (2021-10-14)

### [1.4.2](https://github.com/have-not-BUG/js-utils/compare/v1.4.1...v1.4.2) (2021-10-14)

### [1.4.1](https://github.com/have-not-BUG/js-utils/compare/v1.4.0...v1.4.1) (2021-10-08)

## [1.4.0](https://github.com/have-not-BUG/js-utils/compare/v1.3.0...v1.4.0) (2021-10-08)


### Features

* 1、减少压缩体积 2、新增测试的页面 ([6391b40](https://github.com/have-not-BUG/js-utils/commit/6391b4078064ac17ee2237d4f5d2b1ba5ec9df35))

## [1.3.0](https://github.com/have-not-BUG/js-utils/compare/v1.2.0...v1.3.0) (2021-10-08)


### Features

* 新增sourcemap及部分函数传参可选 ([9da1806](https://github.com/have-not-BUG/js-utils/commit/9da18062ae4f43d869247808eaf52a4954db5d80))

## [1.2.0](https://github.com/have-not-BUG/js-utils/compare/v1.1.0...v1.2.0) (2021-10-08)


### Features

* 打包-新增移除网址中某个查询字符串及其对应的值功能 ([a318137](https://github.com/have-not-BUG/js-utils/commit/a31813795aaa77226cbdbc7b76e10cdea23f82c8))
* 新增移除网址中某个查询字符串及其对应的值功能 ([f4278e6](https://github.com/have-not-BUG/js-utils/commit/f4278e653ab51837ff0cb03293432b54dc51917b))

## [1.1.0](https://github.com/have-not-BUG/js-utils/compare/v1.0.5...v1.1.0) (2021-09-26)


### Features

* 新增判断是否为微信内置浏览器 ([d784ca5](https://github.com/have-not-BUG/js-utils/commit/d784ca528c4ff0c90e7039b1b48b5d8d96c3ce86))

## [1.0.5](https://github.com/have-not-BUG/js-utils/compare/v1.0.4...v1.0.5) (2021-08-17)



## [1.0.4](https://github.com/have-not-BUG/js-utils/compare/v1.0.3...v1.0.4) (2021-08-06)


### Features

* main由cmd切换回umd ([35a170a](https://github.com/have-not-BUG/js-utils/commit/35a170a9a93f645c1b6a931d0e76da5b53445cf6))



## [1.0.3](https://github.com/have-not-BUG/js-utils/compare/v1.0.2...v1.0.3) (2021-08-06)



## [1.0.2](https://github.com/have-not-BUG/js-utils/compare/v1.0.1...v1.0.2) (2021-08-06)



## [1.0.1](https://github.com/have-not-BUG/js-utils/compare/v0.0.9...v1.0.1) (2021-08-06)


### Features

* 使用umd打包方式 ([147ee1c](https://github.com/have-not-BUG/js-utils/commit/147ee1c7823c44c15bdf5523f8208b07b26e59ff))



## [0.0.9](https://github.com/have-not-BUG/js-utils/compare/v0.0.8...v0.0.9) (2021-08-04)


### Bug Fixes

* 修复目录问题及完善拷贝信息 ([325069a](https://github.com/have-not-BUG/js-utils/commit/325069a66b6ae32c2207bd440957932ca4785424))


### Features

* 新增节流防抖 ([ef09000](https://github.com/have-not-BUG/js-utils/commit/ef090008def4809ac047c9e7017c41a33292c89f))
* 新增部分公共函数 ([f90530d](https://github.com/have-not-BUG/js-utils/commit/f90530dfc674e353d0b9ff4397505332e7eab7c0))



## [0.0.8](https://github.com/have-not-BUG/js-utils/compare/v0.0.7...v0.0.8) (2021-07-21)



## [0.0.7](https://github.com/have-not-BUG/js-utils/compare/v0.0.6...v0.0.7) (2021-07-21)


### Features

* 增加深拷贝、浮点数及获取查询字符串字段功能 ([6393de2](https://github.com/have-not-BUG/js-utils/commit/6393de2f34ff09da25a502d7f26926d4fdecbd74))
* 增加深拷贝、浮点数及获取查询字符串字段功能 ([9a8d16f](https://github.com/have-not-BUG/js-utils/commit/9a8d16fd4528c92036fdc8c90dde60eddffb2bfb))



## [0.0.6](https://github.com/have-not-BUG/js-utils/compare/v0.0.5...v0.0.6) (2021-07-20)



## [0.0.5](https://github.com/have-not-BUG/js-utils/compare/v0.0.4...v0.0.5) (2021-07-20)


### Features

* 1、移除部分函数及更新jsdoc文档 2、依赖包移动至devDependencies ([ea81a97](https://github.com/have-not-BUG/js-utils/commit/ea81a9780ff0a74c7f341e0a0b197e79f85c6fbe))



## [0.0.4](https://github.com/have-not-BUG/js-utils/compare/v0.0.3...v0.0.4) (2021-07-20)


### Features

* 对调用者支持tree-shaking ([5c2723c](https://github.com/have-not-BUG/js-utils/commit/5c2723cd7ba79a5545ac863d8038e77229136707))



## [0.0.3](https://github.com/have-not-BUG/js-utils/compare/v0.0.2...v0.0.3) (2021-07-19)



## [0.0.2](https://github.com/have-not-BUG/js-utils/compare/423f8f1939b05038ccdc5c1bcd7fd0beca8a1571...v0.0.2) (2021-07-19)


### Features

* 完善说明及为npm发包做准备 ([85562d7](https://github.com/have-not-BUG/js-utils/commit/85562d788f4e32cbf5121763d9c75af7c62e7983))
* 完成雏形 ([423f8f1](https://github.com/have-not-BUG/js-utils/commit/423f8f1939b05038ccdc5c1bcd7fd0beca8a1571))
* 支持rollup打包功能 ([c057159](https://github.com/have-not-BUG/js-utils/commit/c057159475faafbe0899c8ae84498ab2d09d5e73))



