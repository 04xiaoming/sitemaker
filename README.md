# sitemaker

您好

gulp 自动化发布工具

gulpfile.js

如果不需要对.html代码压缩 请替换


//对html进行压缩
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
gulp.task('html',function(){
    var options = {
        collapseWhitespace:true,
        collapseBooleanAttributes:true,
        removeComments:true,
        removeEmptyAttributes:true,
        removeScriptTypeAttributes:true,
        removeStyleLinkTypeAttributes:true,
        minifyJS:true,
        minifyCSS:true
    };
    gulp.src('src/*.html')
        .pipe(htmlmin(options))
        .pipe(rev())//压缩的时候添加版本号
        .pipe(gulp.dest('dist/'));
});


//不对html进行压缩 仅加版本号并拷贝到dist目录
var gulp = require('gulp');
gulp.task('html',function(){
    gulp.src('src/*.html')
        .pipe(rev())//压缩的时候添加版本号
        .pipe(gulp.dest('dist/'));
});