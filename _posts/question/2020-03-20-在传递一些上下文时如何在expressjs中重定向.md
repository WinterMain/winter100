---
layout: question
title:  在传递一些上下文时如何在expressjs中重定向？
date:   2020-03-20T05:47:11.000Z
description: 我正在使用express在node.js中制作一个Web应用程序。这是我所拥有的简化：var express = require('express')...
img: 
author: 理查德西门Near
category: question
answer: 2
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用express在node.js中制作一个Web应用程序。</font><font style="vertical-align: inherit;">这是我所拥有的简化：</font></font></p>

<pre><code>var express = require('express');<font></font>
var jade = require('jade');<font></font>
var http = require("http");<font></font>
<font></font>
<font></font>
var app = express();<font></font>
var server = http.createServer(app);<font></font>
<font></font>
app.get('/', function(req, res) {<font></font>
    // Prepare the context<font></font>
    res.render('home.jade', context);<font></font>
});<font></font>
<font></font>
app.post('/category', function(req, res) {<font></font>
    // Process the data received in req.body<font></font>
    res.redirect('/');<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题如下：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我发现发送的数据</font></font><code>/category</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无效，我想向</font></font><code>/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面</font><font style="vertical-align: inherit;">传递一些其他上下文</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我该怎么办？</font><font style="vertical-align: inherit;">重定向似乎不允许任何额外的参数。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2492篇《在传递一些上下文时如何在expressjs中重定向？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我建议不使用任何其他依赖项的建议，仅使用node和express，使用app.locals，这是一个示例：</font></font></p>

<pre><code>    app.get("/", function(req, res) {<font></font>
        var context = req.app.locals.specialContext;<font></font>
        req.app.locals.specialContext = null;<font></font>
        res.render("home.jade", context); <font></font>
        // or if you are using ejs<font></font>
        res.render("home", {context: context}); <font></font>
    });<font></font>
<font></font>
    function middleware(req, res, next) {<font></font>
        req.app.locals.specialContext = * your context goes here *<font></font>
        res.redirect("/");<font></font>
    }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无小胖</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我必须找到另一个解决方案，因为提供的解决方案实际上都无法满足我的要求，原因如下：</font></font></p>

<ul>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查询字符串</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：您可能不希望使用查询字符串，因为URL可以由您的用户共享，有时查询参数对其他用户没有意义。</font><font style="vertical-align: inherit;">例如，诸如之类的错误</font></font><code>?error=sessionExpired</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绝对不要偶然显示给其他用户。</font></font></p></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">req.session</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：您可能不想使用它，</font></font><code>req.session</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为您需要使用</font></font><a href="https://github.com/expressjs/session" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Express-Session</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依赖关系，包括建立一个会话存储（例如MongoDB），您可能根本不需要它，或者您已经在使用自定义会话存储解决方案。</font></font></p></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">next（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：您可能不想使用，</font></font><code>next()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者</font></font><code>next("router")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为这实际上只是在原始URL下呈现新页面，所以它实际上并不是重定向到新URL，更像是转发/重写，这可能是不可接受的。</font></font></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，这是我的第四个解决方案，没有任何前述问题。</font><font style="vertical-align: inherit;">基本上，它涉及使用临时Cookie，您必须首先为其安装</font></font><a href="https://github.com/expressjs/cookie-parser" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cookie-parser</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">显然，这意味着它仅在启用Cookie且数据量有限的情况下才能使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实施示例：</font></font></p>

<pre><code>var cookieParser = require("cookie-parser");<font></font>
<font></font>
app.use(cookieParser());<font></font>
<font></font>
app.get("/", function(req, res) {<font></font>
    var context = req.cookies["context"];<font></font>
    res.clearCookie("context", { httpOnly: true });<font></font>
    res.render("home.jade", context); // Here context is just a string, you will have to provide a valid context for your template engine<font></font>
});<font></font>
<font></font>
app.post("/category", function(req, res) {<font></font>
    res.cookie("context", "myContext", { httpOnly: true });<font></font>
    res.redirect("/");<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
