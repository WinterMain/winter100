---
layout: question
title:  如何使用grunt-sass编译多个scss文件
date:   2020-03-23T03:46:55.000Z
description: 我正在尝试将多个.scss文件编译为一个CSS文件。这实际上有效，但只能获取第一个文件...sass  {                      ...
img: 
author: 泡芙
category: question
answer: 2
tags: sass CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试将多个.scss文件编译为一个CSS文件。</font><font style="vertical-align: inherit;">这实际上有效，但只能获取第一个文件...</font></font></p>

<pre><code>sass: {                                 // Task<font></font>
   dist: {     <font></font>
     files: {<font></font>
       'css/test.css':'sass/*.scss'<font></font>
     }<font></font>
<font></font>
   }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们没有安装ruby，所以grunt-contrib-sass不是一个选择。</font><font style="vertical-align: inherit;">我在Stylus中做同样的事情...</font></font></p>

<pre><code>stylus: {<font></font>
  compile : {<font></font>
    files : {<font></font>
      'css/g.css' : 'stylus/*.styl'<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2750篇《如何使用grunt-sass编译多个scss文件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil飞云</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想使用concat，则可以在目录中指定所有文件。</font><font style="vertical-align: inherit;">检出此示例：</font><a href="https://github.com/gruntjs/grunt-contrib-sass#compile-files-in-a-directory" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://github.com/gruntjs/grunt-contrib-sass#compile-files-in-a-directory" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/gruntjs/grunt-contrib-sass#compile-files-in-a-directory</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝神无</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这很简单。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您具有2个scss文件的结构：</font></font></p>

<pre><code>   scss/<font></font>
       core/file.scss<font></font>
       templates/file2.scss<font></font>
       main.scss<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以你需要做的是：创建一个名为：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">main.scss</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在根文件夹SCSS和导入所有SCSS文件：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：main.scss将具有：</font></font></strong></p>

<pre><code>@import "core/file.scss"<font></font>
@import "templates/file2.scss"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在使用grunt-contrib-sass并仅调用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">main.scss</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成:)</font></font></p>

<pre><code>//Sass ===============================<font></font>
            var sass;<font></font>
            config.sass = sass = {};<font></font>
<font></font>
                //production<font></font>
                    sass.dist = {<font></font>
                        options: { style: "compressed"}<font></font>
                        , files: {<font></font>
                            "public/stylesheets/myapp.production.css" : "sass/main.scss"<font></font>
                        }<font></font>
                    };<font></font>
<font></font>
                //development env.<font></font>
                    sass.dev = {<font></font>
                    options: { style: "expanded", lineNumber: true}<font></font>
                    , files: {<font></font>
                        "public/stylesheets/myapp.development.css" : "sass/main.scss"<font></font>
                    }<font></font>
                };<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
