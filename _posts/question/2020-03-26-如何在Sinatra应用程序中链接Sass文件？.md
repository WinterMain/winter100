---
layout: question
title:  如何在Sinatra应用程序中链接Sass文件？
date:   2020-03-26T08:55:54.000Z
description: 我正在尝试将Sass文件链接到Sinatra应用程序。我有一个public/sass/styles.scss文件，正在尝试将其链接到我的views/lay...
img: 
author: 神奇Sam
category: question
answer: 2
tags: 红宝石 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试将Sass文件链接到Sinatra应用程序。</font><font style="vertical-align: inherit;">我有一个</font></font><code>public/sass/styles.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，正在尝试将其链接到我的</font></font><code>views/layout.haml</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中。</font><font style="vertical-align: inherit;">我能够使用下面的链接我的链接经常css文件</font></font><code>layout.haml</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><code>%link(rel="stylesheet" href="styles.css")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，当我尝试链接到我的时</font></font><code>sass/styles.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它不起作用。</font><font style="vertical-align: inherit;">有人可以告诉我如何在Sinatra应用程序中链接Sass css文件吗？</font><font style="vertical-align: inherit;">谢谢！</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3795篇《如何在Sinatra应用程序中链接Sass文件？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanEva</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不需要使用单独的gem来编译.scss文件，Sass具有内置功能。</font></font></p>

<p><code>sass --watch style.scss:style.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会将Sass设置为在更改时自动将style.scss编译为style.css。</font><font style="vertical-align: inherit;">在</font></font><a href="http://sass-lang.com/tutorial.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sass网站上</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，无论何时更改style.scss，Sass都会自动使用更改来更新style.css。</font><font style="vertical-align: inherit;">稍后，当您有多个Sass文件时，您还可以查看整个目录</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不链接scss，像sass这样的scss不是应该由浏览器解释的文件，您需要一个编译器来处理该文件并将其转换为css。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要使用罗盘gem来自动从scs生成css，然后按之前引用的方式链接css</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里有一个用于sinatra的指南针配置示例：</font></font></p>

<blockquote>
  <p><a href="https://github.com/chriseppstein/compass/wiki/Sinatra-Integration"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/chriseppstein/compass/wiki/Sinatra-Integration</font></font></a></p>
</blockquote></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
