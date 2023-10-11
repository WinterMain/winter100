---
layout: question
title:  Express中使用的“ next”参数是什么？
date:   2020-03-19T03:08:22.000Z
description: 假设您有一个简单的代码块，如下所示：app.get('/', function(req, res){    res.send('Hello Worl...
img: 
author: 神无番长
category: question
answer: 4
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您有一个简单的代码块，如下所示：</font></font></p>

<pre><code>app.get('/', function(req, res){<font></font>
    res.send('Hello World');<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此函数有两个参数</font></font><code>req</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>res</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，分别代表请求和响应对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，其他函数的第三个参数称为</font></font><code>next</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如，让我们看下面的代码：</font></font></p>

<pre><code>app.get('/users/:id?', function(req, res, next){ // Why do we need next?<font></font>
    var id = req.params.id;<font></font>
    if (id) {<font></font>
        // do something<font></font>
    } else {<font></font>
        next(); // What is this doing?<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不明白它的意义</font></font><code>next()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font><font style="vertical-align: inherit;">什么，</font><font style="vertical-align: inherit;">为什么要使用它。</font><font style="vertical-align: inherit;">在该示例中，如果id不存在，那么</font></font><code>next</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上在做什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2284篇《Express中使用的“ next”参数是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilStafan</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用此函数将调用应用程序中的下一个中间件函数。</font><font style="vertical-align: inherit;">next（）函数不是Node.js或Express API的一部分，而是传递给中间件函数的第三个参数。</font><font style="vertical-align: inherit;">next（）函数可以命名为任何名称，但按照惯例，它始终命名为“ next”。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Sam神无</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Next用于将控制权传递给下一个中间件功能。</font><font style="vertical-align: inherit;">否则，请求将被挂起或打开。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁村村</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行该</font></font><code>next</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能会通知服务器您已完成此中间件步骤，并且可以执行链中的下一步。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐阿飞Itachi</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也有问题理解的next（），但</font></font><a href="http://qnimate.com/express-js-middleware-tutorial/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">帮助</font></font></p>

<pre><code>var app = require("express")();<font></font>
<font></font>
app.get("/", function(httpRequest, httpResponse, next){<font></font>
    httpResponse.write("Hello");<font></font>
    next(); //remove this and see what happens <font></font>
});<font></font>
<font></font>
app.get("/", function(httpRequest, httpResponse, next){<font></font>
    httpResponse.write(" World !!!");<font></font>
    httpResponse.end();<font></font>
});<font></font>
<font></font>
app.listen(8080);<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
