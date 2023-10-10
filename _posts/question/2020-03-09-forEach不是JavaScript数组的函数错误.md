---
layout: question
title:  forEach不是JavaScript数组的函数错误
date:   2020-03-09T15:42:40.000Z
description: 我试图做一个简单的循环：const parent = this.el.parentElementconsole.log(parent.childre...
img: 
author: Green斯丁
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图做一个简单的循环：</font></font></p>

<pre><code>const parent = this.el.parentElement<font></font>
console.log(parent.children)<font></font>
parent.children.forEach(child =&gt; {<font></font>
  console.log(child)<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但我收到以下错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">VM384：53未捕获的TypeError：parent.children.forEach不是一个函数</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使</font></font><code>parent.children</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">日志：</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/5292/images/thumbnails/1583768433588.png" data-src="https://www.samyoc.com//uploads/users/5292/images/1583768433588.png" rel="noreferrer"><img src="https://i.stack.imgur.com/cjUUW.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能是什么问题呢？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：这是一个</font></font><a href="https://jsfiddle.net/swb12kqn/1/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSFiddle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第374篇《forEach不是JavaScript数组的函数错误》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
