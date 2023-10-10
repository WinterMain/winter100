---
layout: question
title:  Gulp TypeError：path.join的参数必须为字符串
date:   2020-03-19T03:32:09.000Z
description: 我对gulp-ruby-sass有疑问。当我尝试运行监视任务并更改一些.sass文件时，发生错误：TypeError  Arguments to pa...
img: 
author: 飞云阿飞
category: question
answer: 0
tags: Sass CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对gulp-ruby-sass有疑问。</font><font style="vertical-align: inherit;">当我尝试运行</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">监视</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任务并更改一些.sass文件时，发生错误：</font></font></p>

<pre><code>TypeError: Arguments to path.join must be strings 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的gulpfile.js</font></font></p>

<pre><code>var gulp = require('gulp');<font></font>
var jade = require('gulp-jade');<font></font>
var sass = require('gulp-ruby-sass');<font></font>
var watch = require('gulp-watch');<font></font>
<font></font>
gulp.task('sass', function() {<font></font>
    return gulp.src('sass/*.sass')<font></font>
        .pipe(sass())<font></font>
                .pipe(gulp.dest('./css'));<font></font>
<font></font>
});<font></font>
gulp.task('watch', function() {<font></font>
    gulp.watch('./sass/*.sass', ['sass']);<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用了gulp-slash，但是没有用。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
