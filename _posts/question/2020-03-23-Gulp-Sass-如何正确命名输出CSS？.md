---
layout: question
title:  Gulp Sass-如何正确命名输出CSS？
date:   2020-03-23T06:32:46.000Z
description: 我在这里阅读有关sass的教程，然后尝试了其他方法，但无法在本教程中得到答案。存在问题。我的gulpfile.js中有此代码gulp.task('co...
img: 
author: 伽罗
category: question
answer: 0
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在</font></font><a href="https://scotch.io/tutorials/getting-started-with-sass" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读有关sass的教程，</font><font style="vertical-align: inherit;">然后尝试了其他方法，但无法在本教程中得到答案。</font><font style="vertical-align: inherit;">存在问题。</font><font style="vertical-align: inherit;">我的gulpfile.js中有此代码</font></font></p>

<pre><code>gulp.task('compileNavbar', function() {<font></font>
    gulp.src('assets/css/sass/**/*.navbar.scss')<font></font>
        .pipe(sass('navbar.css'))<font></font>
        .pipe(gulp.dest('assets/css/'));;<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，我只有assets / css / sass / guest.navbar.scss，此代码可正确定位scss文件，并将输出css文件放在正确的目录中，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> css名为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">guest.navbar.css</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但我没有期望。</font><font style="vertical-align: inherit;">我希望将其命名为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">navbar.css，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但如何</font><font style="vertical-align: inherit;">命名</font><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2841篇《Gulp Sass-如何正确命名输出CSS？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
