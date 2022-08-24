var path = require('path');
var gulp = require('gulp');
var del = require('del');
var connect = require('gulp-connect');
var jsdoc = require('gulp-jsdoc3');
var {run} = require('runjs');
var minimist = require('minimist');
var reloadJestOrUtilsType= minimist(process.argv)['t'];
// console.log('process.env.PORT',process.env.PORT)
/* Demo paths */
var SRC_DIR_PATH = path.join(__dirname, 'src');
var SRC_DIR_TEMPLATE_PATH = __dirname;
// 会在该目录下生成热更新文件
var SRC_DIR_DESTINATION_PATH = 'hotupdate';

var srcFilePaths = ['src/**/*.js'].map(function (filePath) {
    return path.join(SRC_DIR_PATH, filePath);
});
srcFilePaths.push('README.md');

gulp.task('src:default', ['del'], function(done) {
    var config = {
        opts: {destination: path.join(SRC_DIR_DESTINATION_PATH, '-docstrap')}
    };

    gulp.src(srcFilePaths, {read: false})
        .pipe(jsdoc(config, done));
});

/**
 * Generate src document
 */
gulp.task('src', ['del'], function(done) {
    /* Demo config */
    var domeConfigPath = path.join(__dirname,'jsdoc.json');
    console.log('domeConfigPath======',domeConfigPath)
    var config = require(domeConfigPath);
    delete require.cache[require.resolve(domeConfigPath)]; // remove cache

    // config.opts.template = SRC_DIR_TEMPLATE_PATH;
    config.opts.destination = SRC_DIR_DESTINATION_PATH;

    gulp.src(srcFilePaths, {read: false})
        .pipe(jsdoc(config, done));
});

/**
 * Watch file paths
 * @type {string[]}
 */
var watchPaths = [
    'src/**/*.js',
    'jsdoc.json',
    'plugins/**/*.tmpl',
    'plugins/**/*.js',
];

/**
 * Reload server
 */
gulp.task('reload', ['src'], function() {
    return gulp.src(watchPaths)
        .pipe(connect.reload())
});

/**
 * Regenerate src document when a file changes
 */
gulp.task('watch', ['src'] ,function() {
    var watcher = gulp.watch(watchPaths, ['src', 'reload']);

    watcher.on('change', function (event) {
        // 文件变化了==== { type: 'changed',
        //   path: 'D:\\1测试demo\\js-utils\\src\\__tests__\\deepClone.spec.js' }
        console.log('文件变化了====',event)
        var changedFilePath=event.path;
        var changedTestFileNameWithSprit=changedFilePath.split('__tests__')[1];
        var changedUtilsFileNameWithSprit=changedFilePath.split('global')[1];
        var changedTestFileName=changedTestFileNameWithSprit ? changedTestFileNameWithSprit.replace(/\//,'').replace(/\\/,'') :'';
        var changedUtilsFileName=changedUtilsFileNameWithSprit ? changedUtilsFileNameWithSprit.replace(/\//,'').replace(/\\/,'') :'';
        console.log('File: ' + changedFilePath + ' was ' + event.type + ', running tasks...');
        // File: D:\1测试demo\js-utils\src\__tests__\deepClone.spec.js was changed, running tasks...
        console.log('changedUtilsFileName',changedUtilsFileName)

        if(reloadJestOrUtilsType ==='reloadJest' && event.type ==='changed' && changedTestFileName){
            run('npm run jest:watch ' +changedTestFileName)

        }
        if(reloadJestOrUtilsType === 'reloadUtils' && event.type ==='changed' && changedUtilsFileName){
            run(`nodemon -r esm src/global/${changedUtilsFileName}`)

        }
    });
});

/**
 * Run web server
 */
gulp.task('connect', ['src'], function() {
    connect.server({
        root: SRC_DIR_DESTINATION_PATH,
        livereload: true,
        port:reloadJestOrUtilsType ==='reloadJest' ? 8888:reloadJestOrUtilsType ==='reloadUtils' ? 8887 :8886
    });
});

/**
 * @command gulp serve
 * Connect-server with watch
 */
gulp.task('serve', ['connect', 'watch']);


/**
 * @command gulp del
 * Delete all src-doc files
 */
gulp.task('del', function() {
    return del([SRC_DIR_DESTINATION_PATH]);
});
