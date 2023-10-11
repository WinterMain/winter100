---
layout: question
title:  如何使用JavaScript控制Sass变量
date:   2020-03-23T13:50:37.000Z
description: 我有一个正在生成CSS文件的Sass文件。我在sass文件中使用了许多变量作为背景色，字体大小，现在我想通过JavaScript控制所有变量。例如，在...
img: 
author: 蛋蛋猿
category: question
answer: 5
tags: JavaScript CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个正在生成CSS文件的Sass文件。</font><font style="vertical-align: inherit;">我在sass文件中使用了许多变量作为背景色，字体大小，现在我想通过JavaScript控制所有变量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，在style.sass中，</font></font></p>

<pre><code>$bg : #000;<font></font>
$font-size: 12px;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何从JavaScript更改这些值？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3099篇《如何使用JavaScript控制Sass变量》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil小哥番长</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript在客户端（在Web浏览器中）运行，而Sass在服务器端生成，因此您必须找到某种方法来弥合这种差距。</font><font style="vertical-align: inherit;">一种方法是设置一些AJAX样式的侦听，以将JavaScript事件发送到您的服务器，然后让服务器编辑并重新编译style.sass文件。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenTom西里</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您要执行引导程序（例如，编辑字段以下载主题）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">准备好要编辑的文件</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将这些变量存储为字符串，并用于</font></font><code>.replace()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">搜索和替换变量</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出此字符串并将其编译为文件，或将其压缩以进行下载。 </font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我个人会用php做到这一点。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil西门</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你不能 </font><font style="vertical-align: inherit;">SASS是CSS预处理程序，这意味着</font><font style="vertical-align: inherit;">当您</font><font style="vertical-align: inherit;">将</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> SASS特定信息编译为CSS时</font><font style="vertical-align: inherit;">，这些</font><font style="vertical-align: inherit;">信息都会消失。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用JSON在Sass和JavaScript之间共享数据。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见相关问题</font></font><a href="https://stackoverflow.com/a/26507880/4127132"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/26507880/4127132</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的CSS</font></font></strong></p>

<pre><code>:root {<font></font>
  subTitleLeftMargin: 1.5vw;<font></font>
}<font></font>
<font></font>
.element {<font></font>
  margin-left: var(--subTitleLeftMargin);<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JS或TS</font></font></strong></p>

<pre><code>document.documentElement.style.setProperty("--subTitleLeftMargin", "6vw");
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
