# sitemaker

您好

gulp 自动化发布工具

gulpfile.js

如果不需要对.html代码压缩 请替换


##//对html进行压缩 
``` python
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
```
-------------------
### //不对html进行压缩 仅加版本号并拷贝到dist目录
``` python
var gulp = require('gulp');
gulp.task('html',function(){
    gulp.src('src/*.html')
        .pipe(rev())//压缩的时候添加版本号
        .pipe(gulp.dest('dist/'));
});
```


### //图片压缩
``` python
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');//png图片压缩
gulp.task('images', function () {
    return gulp.src('src/images/**/*.?(png|jpg|gif|JPG|GIF|PNG)')
        .pipe(changed('dist/images/')) // 忽略不变的文件
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist/images/'));

});
```
1