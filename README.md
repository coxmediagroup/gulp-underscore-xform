## Introduction

This was forked from gulp-underscore-tpl.  Credit is due to longjiarun for putting together the original plugin.
I wrote this in order to have a way to output HTML templates transpiled to plain HTML files as part of a gulp task.

## Install

```
npm install gulp-underscore-xform --save
```

## Options

options see [underscore template](http://underscorejs.org/#template).

## How to use

```
var template = require('gulp-underscore-xform')
gulp.task('xform', function() {
    return gulp.src('html/*.html')
        .pipe(template(/*options*/, {name: 'Sweeny'}))
        .pipe(gulp.dest('dist/html'))
});
```

## Input

html/xform.html

```
<h1><%= name%></h1>
```

## Output
dist/html/xform.html

```
<h1>Sweeny</h1>
```

## LICENSE
MIT [http://www.opensource.org/licenses/mit-license.php]