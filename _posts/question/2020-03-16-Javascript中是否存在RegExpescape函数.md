---
layout: question
title:  Javascript中是否存在RegExp.escape函数？
date:   2020-03-16T03:58:32.000Z
description: 我只想从任何可能的字符串中创建一个正则表达式。var usersString = "Hello?\!\*\`~World()\[\]";var express...
img: 
author: JimLEYHarry
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只想从任何可能的字符串中创建一个正则表达式。</font></font></p>

<pre><code>var usersString = "Hello?!*`~World()[]";<font></font>
var expression = new RegExp(RegExp.escape(usersString))<font></font>
var matches = "Hello".match(expression);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有内置的方法吗？</font><font style="vertical-align: inherit;">如果没有，人们会使用什么？</font><font style="vertical-align: inherit;">红宝石有</font></font><a href="http://ruby-doc.org/core/classes/Regexp.html#M001195" rel="noreferrer"><code>RegExp.escape</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我觉得我不需要自己写东西，那里肯定有一些标准。</font><font style="vertical-align: inherit;">谢谢！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1701篇《Javascript中是否存在RegExp.escape函数？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Gil</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个ES7提案RegExp.escape在</font></font><a href="https://github.com/benjamingr/RexExp.escape/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/benjamingr/RexExp.escape/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，与可用填充工具</font></font><a href="https://github.com/ljharb/regexp.escape"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/ljharb/regexp.escape</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐达蒙</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在jQueryUI的自动完成小部件（1.9.1版）中，它们使用略有不同的正则表达式（第6753行），这是将正则表达式与@bobince方法结合使用。</font></font></p>

<pre><code>RegExp.escape = function( value ) {<font></font>
     return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&amp;");<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
