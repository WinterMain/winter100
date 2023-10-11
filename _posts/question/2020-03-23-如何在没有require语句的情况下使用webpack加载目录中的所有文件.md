---
layout: question
title:  如何在没有require语句的情况下使用webpack加载目录中的所有文件
date:   2020-03-23T02:48:57.000Z
description: 我的应用程序中有大量的javascript文件分成4个子目录。一声不I，我抓起了所有的并将它们编译成一个文件。这些文件没有module.exports函数...
img: 
author: 飞云蛋蛋
category: question
answer: 1
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的应用程序中有大量的javascript文件分成4个子目录。</font><font style="vertical-align: inherit;">一声不I，我抓起了所有的并将它们编译成一个文件。</font><font style="vertical-align: inherit;">这些文件没有module.exports函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想使用webpack并将其分为4部分。</font><font style="vertical-align: inherit;">我不想手动输入所有文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想创建一个插件，该插件在编译时会遍历目录树，然后获取所有.js文件名和路径，然后要求子目录中的所有文件并将其添加到输出中。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望将每个目录中的所有文件编译成一个模块，然后可以从我的入口点文件中将其要求，或者包含在</font></font><a href="http://webpack.github.io/docs/plugins.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://webpack.github.io/docs/plugins.html</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提及</font><font style="vertical-align: inherit;">的资产</font><font style="vertical-align: inherit;">中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加新文件时，我只想将其放置在正确的目录中，然后知道将包含该文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法使用webpack或有人编写的插件来做到这一点？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2687篇《如何在没有require语句的情况下使用webpack加载目录中的所有文件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenTom</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的应用程序文件中，我最后放了要求 </font></font></p>

<pre><code>require.context(<font></font>
  "./common", // context folder<font></font>
  true, // include subdirectories<font></font>
  /.*/ // RegExp<font></font>
)("./" + expr + "")<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由这篇文章提供：</font><a href="https://github.com/webpack/webpack/issues/118"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/webpack/webpack/issues/118"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/webpack/webpack/issues/118</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在正在添加我的所有文件。</font><font style="vertical-align: inherit;">我有一个用于html和css的加载器，它似乎工作得很好。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
