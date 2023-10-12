---
layout: question
title:  如何使用jQuery替换div的innerHTML？
date:   2020-03-16T01:53:27.000Z
description: 我如何实现以下目标：document.all.regTitle.innerHTML = 'Hello World';使用jQuery regTi...
img: 
author: 番长十三
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何实现以下目标：</font></font></p>

<pre><code>document.all.regTitle.innerHTML = 'Hello World';
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用jQuery </font></font><code>regTitle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的div ID </font><font style="vertical-align: inherit;">在哪里</font><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1644篇《如何使用jQuery替换div的innerHTML？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p>jQuery has few functions which work with text, if you use <code>text()</code> one, it will do the job for you:</p>

<pre><code>$("#regTitle").text("Hello World");
</code></pre>

<p>Also, you can use <code>html()</code> instead, if you have any <strong>html tag</strong>...</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Pro</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p>you can use either html or text function in jquery to achieve it</p>

<pre><code>$("#regTitle").html("hello world");
</code></pre>

<p>OR</p>

<pre><code>$("#regTitle").text("hello world");
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LSam</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><pre><code>$("#regTitle").html("Hello World");
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
