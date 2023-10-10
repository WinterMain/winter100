---
layout: question
title:  Firefox和Vue.js未定义event.path
date:   2020-03-11T12:17:34.000Z
description: 首先，我使用Vue.js和Node.js我的Firefox有问题。我使用event.path\[n\].idFirefox时遇到错误  even...
img: 
author: 阿飞古一A
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，我使用Vue.js和Node.js</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的Firefox有问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font></font><code>event.path[n].id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox时遇到错误</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">event.path未定义</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是它在其他浏览器中也可以正常工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你知道为什么吗</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第797篇《Firefox和Vue.js未定义event.path》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长千羽</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用composePath（）并为IE使用polyfill：</font><a href="https://gist.github.com/rockinghelvetica/00b9f7b5c97a16d3de75ba99192ff05c" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> ://gist.github.com/rockinghelvetica/00b9f7b5c97a16d3de75ba99192ff05c
</font></font><a href="https://gist.github.com/rockinghelvetica/00b9f7b5c97a16d3de75ba99192ff05c" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包括以上文件或粘贴代码：</font></font></p>

<pre><code>// Event.composedPath<font></font>
(function(e, d, w) {<font></font>
  if(!e.composedPath) {<font></font>
    e.composedPath = function() {<font></font>
      if (this.path) {<font></font>
        return this.path;<font></font>
      } <font></font>
    var target = this.target;<font></font>
<font></font>
    this.path = [];<font></font>
    while (target.parentNode !== null) {<font></font>
      this.path.push(target);<font></font>
      target = target.parentNode;<font></font>
    }<font></font>
    this.path.push(d, w);<font></font>
    return this.path;<font></font>
    }<font></font>
  }<font></font>
})(Event.prototype, document, window);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后使用：</font></font></p>

<pre><code>var path = event.path || (event.composedPath &amp;&amp; event.composedPath());
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
