---
layout: question
title:  没完没了之后的gulp concat
date:   2020-04-03T06:50:54.000Z
description: 我想将sass输出并连接到另一个CSS常规文件中。例：animate.cssapp.scssreturn gulp.src('app.scs...
img: 
author: 蛋蛋猿
category: question
answer: 1
tags: 萨斯 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想将sass输出并连接到另一个CSS常规文件中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>animate.css<font></font>
app.scss<font></font>
<font></font>
return gulp.src('app.scss')<font></font>
    .pipe(sass({<font></font>
        errLogToConsole: true<font></font>
    }))<font></font>
    .pipe(concat(['animate.css', OUTPUT_OF_THE_SASS_ABOVE]))<font></font>
    .pipe(gulp.dest(paths.public+'css/'))<font></font>
    .pipe(rename({ extname: '.min.css' }))<font></font>
    .pipe(gulp.dest('css/'))<font></font>
    .on('end', done);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么想法怎么做？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">*******想法</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许可以从sass生成一个css文件到一个临时位置，然后将其与css文件合并，然后将它们删除。</font><font style="vertical-align: inherit;">有任何想法如何在单个任务中做到这一点？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4033篇《没完没了之后的gulp concat》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么不将animate.css作为部分文件包含在主Sass文件中？</font></font></p>

<pre><code>@import "animate";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后将animate.css重命名为_animate.css</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以更好地控制CSS的编译方式/位置。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
