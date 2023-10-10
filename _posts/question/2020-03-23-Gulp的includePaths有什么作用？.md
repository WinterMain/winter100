---
layout: question
title:  Gulp的includePaths有什么作用？
date:   2020-03-23T07:42:16.000Z
description: 我试图在我的项目中开始使用Bourbon和Neat Sass库。我想用Gulp编译Sass。这是一个简单的styles任务设置，我在其中一个教程中找到了：...
img: 
author: 乐
category: question
answer: 1
tags: 萨斯 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图在我的项目中开始使用Bourbon和Neat Sass库。</font><font style="vertical-align: inherit;">我想用Gulp编译Sass。</font><font style="vertical-align: inherit;">这是一个简单的</font></font><code>styles</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任务设置，我在其中一个教程中找到了：</font></font></p>

<pre><code>var gulp = require('gulp'),<font></font>
    sass = require('gulp-sass'),<font></font>
    neat = require('node-neat').includePaths;<font></font>
<font></font>
var paths = {<font></font>
    scss: './assets/styles/*.scss'<font></font>
};<font></font>
<font></font>
gulp.task('styles', function () {<font></font>
    return gulp.src(paths.scss)<font></font>
        .pipe(sass({<font></font>
            includePaths: ['styles'].concat(neat)<font></font>
        }))<font></font>
        .pipe(gulp.dest('./dist/styles'));<font></font>
});<font></font>
<font></font>
gulp.task('default', function () {<font></font>
    gulp.start('styles');<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在主</font></font><code>.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中放置导入：</font></font></p>

<pre><code>@import "bourbon";<font></font>
@import "base/base";<font></font>
@import "neat";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此任务正确执行。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">令我困惑的是究竟是什么</font></font><code>includePaths</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">根据上面的示例，有人可以向我解释什么</font></font><code>includePath</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是角色？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">includePaths</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型：数组默认值：[]</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">libsass可以查看以尝试解析您的@import声明的路径数组。</font><font style="vertical-align: inherit;">使用数据时，建议您使用它。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在sass中，您可以在多个文件夹中整理sass文件，但希望main.sass能够在编译时将其导入，因此您可以指定</font></font><code>includePaths</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以便sass知道在哪里可以找到</font></font><code>@import sass file</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，在这里使用</font></font><code>node-neat</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果您想从中导入一些样式，默认情况下，sass不知道在哪里寻找，因此您需要告诉sass在哪里找到要导入的文件</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
