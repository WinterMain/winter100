---
layout: question
title:  Node.js + Express.js应用程序的错误处理原理？
date:   2020-03-24T02:59:59.000Z
description: 与其他框架相比，Node.js + Express.js应用程序中的错误报告/处理似乎有所不同。我理解它的工作原理是否正确？A） 通过接收错误作为回调...
img: 
author: 小小
category: question
answer: 1
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与其他框架相比</font><font style="vertical-align: inherit;">，Node.js + </font></font><a href="https://en.wikipedia.org/wiki/Express.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Express.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序中的</font><font style="vertical-align: inherit;">错误报告/处理似乎有所不同</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我理解它的工作原理是否正确？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">A）</font></font></strong> <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过接收错误作为回调函数的参数来</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检测</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>doSomethingAndRunCallback(function(err) { <font></font>
    if(err) { … }<font></font>
});<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">B）</font></font></strong> <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过调用next（err）</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">报告</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> MIDDLEWARE中的​​错误。</font><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>handleRequest(req, res, next) {<font></font>
    // An error occurs…<font></font>
    next(err);<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">C）</font></font></strong> <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过抛出错误来</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">报告</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路由中的错误。</font><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>app.get('/home', function(req, res) {<font></font>
    // An error occurs<font></font>
    throw err;<font></font>
});<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">d）</font></font></strong> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手柄</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过配置通过app.error自己的错误处理的错误（）或使用通用连接错误处理程序。</font><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>app.error(function(err, req, res, next) {<font></font>
    console.error(err);<font></font>
    res.send('Fail Whale, yo.');<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这四个原则是否是Node.js + Express.js应用程序中所有错误处理/报告的基础？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3264篇《Node.js + Express.js应用程序的错误处理原理？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L阳光</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Joyent的人们</font><font style="vertical-align: inherit;">对此</font><font style="vertical-align: inherit;">发表</font></font><a href="https://www.joyent.com/node-js/production/design/errors" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了非常有见地的最佳实践文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">任何Node.js开发人员都必须阅读的文章。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
