---
layout: question
title:  不与sass bootstrap集成一起显示的glyphicons
date:   2020-03-27T12:08:54.000Z
description: 我使用本教程将引导程序集成到我的项目中：https //laravel-news.com/2015/10/setup-bootstrap-sass-w...
img: 
author: 小宇宙
category: question
answer: 5
tags: twitter-bootstrap CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用本教程将引导程序集成到我的项目中：</font></font></p>

<p><a href="https://laravel-news.com/2015/10/setup-bootstrap-sass-with-laravel-elixir/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://laravel-news.com/2015/10/setup-bootstrap-sass-with-laravel-elixir/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这会将app.css文件放置在css文件夹中。</font><font style="vertical-align: inherit;">但是，如果我尝试使用字形图标，它们不会显示。</font><font style="vertical-align: inherit;">所以我试图像这样修改elixir文件：</font></font></p>

<pre><code>    elixir(function(mix) {<font></font>
<font></font>
    mix.sass('app.scss')<font></font>
        .browserify('app.js')<font></font>
        .copy('node_modules/bootstrap-sass/assets/fonts', 'public/css/fonts')   <font></font>
<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字体文件夹被复制到public / css / fonts下，但是没有图标出现。</font><font style="vertical-align: inherit;">我在这里想念什么？</font><font style="vertical-align: inherit;">有什么线索吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的app.css中，路径似乎正确，例如：</font></font></p>

<pre><code>src: url("fonts/bootstrap/glyphicons-halflings-regular.eot");
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3798篇《不与sass bootstrap集成一起显示的glyphicons》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.27</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新了答案，我现在以更好的方式实现了这一点，类似于最佳答案。</font><font style="vertical-align: inherit;">在app.scss中：</font></font></p>

<pre><code>/* BOOTSTRAP */<font></font>
@import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap";<font></font>
<font></font>
/* FONT-AWESOME */<font></font>
$fa-font-path: "../../fonts";<font></font>
@import "node_modules/font-awesome/scss/font-awesome";<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.03.27</span>
          </div>
          <div class="discuss-comment"><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看浏览器的开发人员工具，观察路径。 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的网站上，它是public / fonts / glyphicons-halflings-regular.ttf，我将这些字体手动下载到那里。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且有效！</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.27</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在刀片模板中使用elixir（）帮助器，则应将字体文件放入/ public / build。</font><font style="vertical-align: inherit;">结果是/ public / build / fonts，“ fonts”文件夹包含所有字体文件。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Mandy</span>
            <span class="discuss-time">2020.03.27</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Laravel 5.4时，我遇到了同样的问题。事实证明，我还没有跑步</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>npm run dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一旦运行了这两个命令，就将字体（和glyphicons）正确地复制到/ public目录中。</font><font style="vertical-align: inherit;">无需编辑任何Sass或构建文件。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.27</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Laravel 5.4中，只需安装npm依赖项并根据需要在生产或开发中运行npm。</font></font></p>

<pre><code>npm install<font></font>
npm run production<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Laravel将完成其余的工作。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
