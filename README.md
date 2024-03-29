# js-utils-lc

# 一、简介
![https://www.npmjs.com/package/js-utils-lc](https://img.shields.io/npm/v/js-utils-lc)
![https://www.npmjs.com/package/js-utils-lc](https://img.shields.io/npm/dt/js-utils-lc)
![https://github.com/have-not-BUG/js-utils](https://img.shields.io/github/languages/code-size/have-not-BUG/js-utils)
![https://github.com/have-not-BUG/js-utils](https://img.shields.io/github/issues-raw/have-not-BUG/js-utils)
![https://github.com/have-not-BUG/js-utils](https://img.shields.io/github/license/have-not-BUG/js-utils)
![https://github.com/have-not-BUG/js-utils](https://img.shields.io/badge/maintained%20with-rollup-cc00ff.svg)





该npm内置了的一些常用的JavaScript函数工具库。




# 二、使用方法

### 1、查看文档

1.1 初看
 
js工具库（常用函数）的文档地址为：https://have-not-bug.github.io/js-utils
(文档采用的是jsdoc+docdash主题。)
看是否有适合自己的方法
![文档界面](https://publicimage-1251317493.file.myqcloud.com/reportBug/202107191818355815.png)

1.2 细看

打开文档页面的开发者控制台如Chrome devTools，输入`jsUtilsLc.你想测试的方法（如jsUtilsLc.browserInfo()）` 可以选择你想要查看/测试的方法

![image.png](https://upload-images.jianshu.io/upload_images/2166980-35f72466526c3e99.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


由于文档使用了ES Module引入js，因此在控制台输入`jsUtilsLc.你想测试的方法`查看效果的功能只支持如下浏览器：
![image.png](https://upload-images.jianshu.io/upload_images/2166980-c1554642963d5195.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


###  2、安装npm包

`npm i js-utils-lc`

### 3、引入并使用

3.1 ES Module

```javascript
// 按需引入
import {removeArrRepeat,getNowDate} from 'js-utils-lc'
console.log('getNowDate',getNowDate())
console.log('removeArrRepeat',removeArrRepeat([1,2,3,3,4,9,8,8]))

// 引入所有
import * as  jsUtilsLc from 'js-utils-lc'
console.log('jsUtilsLc.getNowDate',jsUtilsLc.getNowDate())
console.log('jsUtilsLc.removeArrRepeat',jsUtilsLc.removeArrRepeat([1,2,3,3,4,9,8,8]))


```

3.2 CommonJS


```javascript
// 按需引入
const  { removeArrRepeat , getNowDate } = require('js-utils-lc');
console.log('getNowDate',getNowDate())
console.log('removeArrRepeat',removeArrRepeat([1,2,3,3,4,9,8,8]))

// 引入所有
const  jsUtilsLc= require('js-utils-lc');
console.log('jsUtilsLc.getNowDate',jsUtilsLc.getNowDate())
console.log('jsUtilsLc.removeArrRepeat',jsUtilsLc.removeArrRepeat([1,2,3,3,4,9,8,8]))


```


3.3 浏览器script
```
// 推荐---压缩后且有sourcemap
<script src="https://cdn.jsdelivr.net/npm/js-utils-lc/npm/min/umd/index.js"></script>
<script>
console.log('jsUtilsLc.getNowDate',jsUtilsLc.getNowDate())
console.log('jsUtilsLc.removeArrRepeat',jsUtilsLc.removeArrRepeat([1,2,3,3,4,9,8,8]))
</script>

```

```
// 不推荐--未压缩
<script src="https://cdn.jsdelivr.net/npm/js-utils-lc/npm/umd/index.js"></script>
<script>
console.log('jsUtilsLc.getNowDate',jsUtilsLc.getNowDate())
console.log('jsUtilsLc.removeArrRepeat',jsUtilsLc.removeArrRepeat([1,2,3,3,4,9,8,8]))
</script>

```
实际使用示例：

1、[多页面类型项目浏览器script调用示例](https://codesandbox.io/s/jolly-easley-2gde8?file=/index.html)

2、[单页面类型项目调用示例](https://codesandbox.io/s/silly-star-glq9d?file=/src/main.js)

# 三、该项目的功能
1、支持jsdoc注释自动生成文档（生成的文档可以很方便的查看源码）

2、jsdoc注释修改支持热更新(hot update) /实时更新(live update)文档

3、支持实时测试/查看各个函数的运行效果(在谷歌浏览器控制台chrome devTools及node均可以)

4、支持在该项目直接发布npm包(使用rollup打包)，且该npm里的代码会自动将ES6+语法转换为ES5语法

5、该npm包支持Tree Shaking摇树优化


# 四、如何维护该项目

### （零） 环境要求
1、因本项目采用的单元测试为 jest v28.1.3，其要求Node12.21.0及以上版本，否则Node v11会报`globalThis is not defined`错误，Node v12.1 会报 modernFakeTimers.js:181里的 `fakeTimersConfig.timerLimit || 100_000`错误，因此如果要运行本项目的单元测试时需要Node 12.21.0版本及以上；
2、由于本项目中gulp版本为3.9.1，其与Node 12不兼容，如果在Node 12直接运行 `npm run dev` 会报`primordials is not defined` 错误，因此本项目使用了`npm-force-resolutions` npm包进行解决；如果发现出现该错误，删除`node_modules`文件夹，重新安装所有npm包即可解决；



### （一） 一定用到的方法

1、使用`gulp serve`或者`npm run dev` 指令启动服务 （支持热更新，会在项目根目录生成hotupdate目录，如果方法变动文档也会自动更新，此时如果在`src/global/你正在编辑的方法.js`运行你的方法并console，可以在浏览器控制台看console运行结果）


2、不推荐----使用`npm run dev:nodemon` 除了文档服务自动支持热更外，还支持nodemon方式的自动热更新，即自动运行`nodemon -r esm src/global/你正在编辑的方法.js`，此时直接在`src/global/你正在编辑的方法.js`里运行`你正在编辑的方法.js`里面的方法并console相关数据可以在命令行查看console运行结果
![示例](https://publicimage-1251317493.file.myqcloud.com/reportBug/202208231731458610.jpg)


3、使用`npm run dev:jest`支持单元测试热更新(在`src/__test__`目录下新建单元测试文件，并编写单元测试，指令可实时运行单测结果)


4、在`src/global`目录下新建 `方法名.js`的js文件，并在该js文件里面完成函数的编写及jsdoc注释并`export`出你的函数。

5、在`src/index.js`文件中将上一步js文件编写的函数`export`一遍

6、直接编辑`src/global/方法名.js`，可以在Chrome devTools 实时查看运行效果

如下图我编辑`src/global/getNowDate.js`
![image.png](https://upload-images.jianshu.io/upload_images/2166980-525d749643559406.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
在文档控制台可以实时看到效果：

![image.png](https://upload-images.jianshu.io/upload_images/2166980-b4bd762365aa6ef6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

7、使用`npm run build` 打包项目文档（会在项目根目录生成docs目录）及 已压缩的npm文件（会在项目根目录生成npm目录，npm/amd 为amd规范，npm/cjs 为CommonJs规范，npm/es 为ES Moudle规范，npm/umd 为umd规范）



### （二） 可能用到的方法
1、使用`npm run build:doc` 打包项目文档（会在项目根目录生成docs目录）

2、使用`npm run build:npmprod` 打包已压缩的npm文件 （会在项目根目录生成npm目录，npm/amd 为amd规范，npm/cjs 为CommonJs规范，npm/es 为ES Moudle规范）

3、使用`npm run build:npmdev` 打包项目未压缩的npm文件（会在项目根目录生成npm目录）

4、不推荐----使用`npm run test:use` 通过`nodemon`调用未压缩的npm文件 `npm/cjs/index.js` ，可以编辑`npm/cjs/index.js`文件 实时测试/调试各个函数的运行效果

### （三） 单元测试
1、使用`npm run jest` 跑整个单元测试

2、使用`npm run jest 方法名` 跑某个方法的单元测试，如`npm run deepClone`

3、使用`npm run jest:coverage` 跑覆盖率测试

### （四） 补充说明

1、代码合并至master分支后，会自动运行sonar质量检测、jest单元测试和覆盖率测试及自动打包和构建使用文档至 https://have-not-bug.github.io/js-utils/

# 五、待完成
~~1、支持方便地在浏览器控制台实时测试/调试各个函数的运行效果~~

~~2、发布npm包~~

~~3、支持https://img.shields.io/~~

4、补充常用函数

~~5、补充docs主页网址及截图~~

6、添加更多的单元测试

# 六、参考资料
1、[imondo/js-utils](https://github.com/imondo/js-utils) 
 
2、[nhn/tui.jsdoc-template](https://github.com/nhn/tui.jsdoc-template) 
 
3、[null_639_5368/js-utils](https://gitee.com/null_639_5368/js-utils)



