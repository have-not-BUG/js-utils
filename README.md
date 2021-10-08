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
// 推荐---有sourcemap
<script src="https://cdn.jsdelivr.net/npm/js-utils-lc/npm/umd/index.js"></script>
<script>
console.log('jsUtilsLc.getNowDate',jsUtilsLc.getNowDate())
console.log('jsUtilsLc.removeArrRepeat',jsUtilsLc.removeArrRepeat([1,2,3,3,4,9,8,8]))
</script>

```

```
// 不推荐--无sourcemap
<script src="https://cdn.jsdelivr.net/npm/js-utils-lc"></script>
<script>
console.log('jsUtilsLc.getNowDate',jsUtilsLc.getNowDate())
console.log('jsUtilsLc.removeArrRepeat',jsUtilsLc.removeArrRepeat([1,2,3,3,4,9,8,8]))
</script>

```
示例：[浏览器script调用示例](https://have-not-bug.github.io/js-utils/test.html)

# 三、该项目的功能
1、支持jsdoc注释自动生成文档（生成的文档可以很方便的查看源码）

2、jsdoc注释修改支持热更新(hot update) /实时更新(live update)文档

3、支持实时测试/查看各个函数的运行效果(在谷歌浏览器控制台chrome devTools及node均可以)

4、支持在该项目直接发布npm包(使用rollup打包)，且该npm里的代码会自动将ES6+语法转换为ES5语法

5、该npm包支持Tree Shaking摇树优化


# 四、如何维护该项目

### （一） 一定用到的方法
1、使用`gulp serve`或者`npm run dev` 指令启动文档服务 （支持热更新，会在项目根目录生成hotupdate目录）

2、在`src/global`目录下新建 `方法名.js`的js文件，并在该js文件里面完成函数的编写及jsdoc注释并`export`出你的函数。

3、在`src/index.js`文件中将上一步js文件编写的函数`export`一遍

4、直接编辑`src/global/方法名.js`，可以在Chrome devTools 实时查看运行效果
如下图我编辑`src/global/getNowDate.js`
![image.png](https://upload-images.jianshu.io/upload_images/2166980-525d749643559406.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
在文档控制台可以实时看到效果：

![image.png](https://upload-images.jianshu.io/upload_images/2166980-b4bd762365aa6ef6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

5、使用`npm run build` 打包项目文档（会在项目根目录生成docs目录）及 已压缩的npm文件（会在项目根目录生成npm目录，npm/amd 为amd规范，npm/cjs 为CommonJs规范，npm/es 为ES Moudle规范，npm/umd 为umd规范）



### （二） 可能用到的方法
1、使用`npm run build:doc` 打包项目文档（会在项目根目录生成docs目录）

2、使用`npm run build:npmprod` 打包已压缩的npm文件 （会在项目根目录生成npm目录，npm/amd 为amd规范，npm/cjs 为CommonJs规范，npm/es 为ES Moudle规范）

3、使用`npm run build:npmdev` 打包项目未压缩的npm文件（会在项目根目录生成npm目录）




6、不推荐----使用`npm run test:use` 通过`nodemon`调用未压缩的npm文件 `npm/cjs/index.js` ，可以编辑`npm/cjs/index.js`文件 实时测试/调试各个函数的运行效果






# 五、待完成
~~1、支持方便地在浏览器控制台实时测试/调试各个函数的运行效果~~

~~2、发布npm包~~

~~3、支持https://img.shields.io/~~

4、补充常用函数

~~5、补充docs主页网址及截图~~

6、添加单元测试

# 六、参考资料
1、[imondo/js-utils](https://github.com/imondo/js-utils) 
 
2、[nhn/tui.jsdoc-template](https://github.com/nhn/tui.jsdoc-template) 
 
3、[null_639_5368/js-utils](https://gitee.com/null_639_5368/js-utils)



