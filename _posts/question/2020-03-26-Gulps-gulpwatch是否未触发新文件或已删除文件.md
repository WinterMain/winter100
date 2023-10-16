---
layout: question
title:  Gulps gulp.watch是否未触发新文件或已删除文件？
date:   2020-03-26T08:46:07.000Z
description: 当在全局匹配中编辑文件时，以下Gulpjs任务可以正常工作：// watch task.gulp.task('watch', \['build'\], ...
img: 
author: 斯丁前端
category: question
answer: 1
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当在全局匹配中编辑文件时，以下Gulpjs任务可以正常工作：</font></font></p>

<pre><code>// watch task.<font></font>
gulp.task('watch', ['build'], function () {<font></font>
    gulp.watch(src + '/js/**/*.js', ['scripts']);<font></font>
    gulp.watch(src + '/img//**/*.{jpg,jpeg,png,gif}', ['copy:images']);<font></font>
    gulp.watch(src + '/less/*.less', ['styles']);<font></font>
    gulp.watch(src + '/templates/**/*.{swig,json}', ['html']);<font></font>
});<font></font>
<font></font>
// build task.<font></font>
gulp.task('build', ['clean'], function() {<font></font>
    return gulp.start('copy', 'scripts', 'less', 'htmlmin');<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，对于新文件或已删除文件，它不起作用（不会触发）。</font><font style="vertical-align: inherit;">有什么我想念的吗？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：即使使用grunt-watch插件，它似乎也不起作用：</font></font></p>

<pre><code>gulp.task('scripts', function() {<font></font>
    return streamqueue(<font></font>
        { objectMode: true },<font></font>
        gulp.src([<font></font>
            vendor + '/jquery/dist/jquery.min.js',<font></font>
            vendor + '/bootstrap/dist/js/bootstrap.min.js'<font></font>
        ]),<font></font>
        gulp.src([<font></font>
            src + '/js/**/*.js'<font></font>
        ]).pipe(plugins.uglify())<font></font>
    )<font></font>
    .pipe(plugins.concat(pkg.name + '.min.js'))<font></font>
    .pipe(gulp.dest(dest + '/js/'));<font></font>
});<font></font>
<font></font>
gulp.task('watch', ['build'], function () {<font></font>
    plugins.watch({glob: src + '/js/**/*.js'}, function () {<font></font>
        gulp.start('scripts');<font></font>
    });<font></font>
});<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：解决了，就是</font></font><a href="https://github.com/floatdrop/gulp-watch/issues/1" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">以</font></font><code>./</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（的值为</font></font><code>src</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">开头的电子邮件</font><font style="vertical-align: inherit;">似乎无法在ATM上正常工作。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3781篇《Gulps gulp.watch是否未触发新文件或已删除文件？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin小宇宙</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要注意的重要一点是，看起来gulp.watch仅报告Windows上已更改和删除的文件，但默认情况下在OSX上监听新文件和已删除的文件：</font></font></p>

<p><a href="https://github.com/gulpjs/gulp/issues/675" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/gulpjs/gulp/issues/675</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
