---
layout: question
title:  Foundation 6不生成任何样式
date:   2020-03-24T03:04:46.000Z
description: 我已经建立了一个新项目来使用Gulp和Sass测试Foundation 6，但它似乎根本没有编译。还有一个与此主题相关的帖子，但是我个人认为公认的答案不是...
img: 
author: 小小Stafan宝儿
category: question
answer: 0
tags: sass CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经建立了一个新项目来使用Gulp和Sass测试Foundation 6，但它似乎根本没有编译。</font><font style="vertical-align: inherit;">还有一个与此主题相关的帖子，但是我个人认为公认的答案不是正确的解决方案-因为它包含所有组件，并且实际上与Zurb建议的相反（请参阅此问题：</font></font><a href="https://github.com/zurb/foundation-sites/issues/7537"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://github.com/zurb/foundation-sites/issues/7537"><font style="vertical-align: inherit;">//github.com / zurb / foundation-sites / issues / 7537</font></a><font style="vertical-align: inherit;">）。</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反正</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我从bower安装了Foundation 6.1.1，并</font></font><code>gulp-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以</font></font><code>gulpfile.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下方式</font><font style="vertical-align: inherit;">将路径添加到我的</font><font style="vertical-align: inherit;">函数中</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>// Compile Our Sass<font></font>
gulp.task('sass', function() {<font></font>
    return gulp.src('scss/theme.scss')<font></font>
        .pipe(sass({ includePaths : ['bower_components/foundation-sites/scss'], outputStyle: 'expanded'}).on('error', sass.logError))<font></font>
        .pipe(gulp.dest('css/'))<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><code>theme.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的如下：</font></font></p>

<pre><code>//vendor file<font></font>
@import '../bower_components/foundation-sites/scss/settings/settings';<font></font>
@import '../bower_components/foundation-sites/scss/foundation';<font></font>
<font></font>
body{<font></font>
  background: red;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编译我的scss时，没有任何错误，但是的输出</font></font><code>theme.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下所示：</font></font></p>

<pre><code>/**<font></font>
 * Foundation for Sites by ZURB<font></font>
 * Version 6.1.1<font></font>
 * foundation.zurb.com<font></font>
 * Licensed under MIT Open Source<font></font>
 */<font></font>
body {<font></font>
  background: red;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，由于已输出注释，因此似乎正在命中该文件，但未在中编译任何Sass导入</font></font><code>foundation.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3274篇《Foundation 6不生成任何样式》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
