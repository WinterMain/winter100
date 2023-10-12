---
layout: question
title:  为什么不将CORS标头添加到OPTIONS路由中，使浏览器无法访问我的API？
date:   2020-03-30T09:29:26.000Z
description: 我正在尝试在使用Express.js Web框架的Node.js应用程序中支持CORS。我已经阅读了有关如何处理此问题的Google小组讨论，并阅读了一些...
img: 
author: 古一Eva
category: question
answer: 6
tags: node.js ExpressJS
topic: ExpressJS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在使用Express.js Web框架的Node.js应用程序中支持CORS。</font><font style="vertical-align: inherit;">我已经阅读</font></font><a href="http://groups.google.com/group/express-js/browse_thread/thread/71db58df2c74d06a" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关如何处理此</font><a href="http://groups.google.com/group/express-js/browse_thread/thread/71db58df2c74d06a" rel="noreferrer"><font style="vertical-align: inherit;">问题的Google小组讨论</font></a><font style="vertical-align: inherit;">，并阅读了一些有关CORS工作原理的文章。</font><font style="vertical-align: inherit;">首先，我做到了（代码以CoffeeScript语法编写）：</font></font></p>

<pre><code>app.options "*", (req, res) -&gt;<font></font>
  res.header 'Access-Control-Allow-Origin', '*'<font></font>
  res.header 'Access-Control-Allow-Credentials', true<font></font>
  # try: 'POST, GET, PUT, DELETE, OPTIONS'<font></font>
  res.header 'Access-Control-Allow-Methods', 'GET, OPTIONS'<font></font>
  # try: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'<font></font>
  res.header 'Access-Control-Allow-Headers', 'Content-Type'<font></font>
  # ...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它似乎不起作用。</font><font style="vertical-align: inherit;">看来我的浏览器（Chrome）没有发送初始的OPTIONS请求。</font><font style="vertical-align: inherit;">当我刚刚更新资源块时，我需要向以下站点提交跨域GET请求：</font></font></p>

<pre><code>app.get "/somethingelse", (req, res) -&gt;<font></font>
  # ...<font></font>
  res.header 'Access-Control-Allow-Origin', '*'<font></font>
  res.header 'Access-Control-Allow-Credentials', true<font></font>
  res.header 'Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS'<font></font>
  res.header 'Access-Control-Allow-Headers', 'Content-Type'<font></font>
  # ...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可以工作（在Chrome中）。</font><font style="vertical-align: inherit;">这也适用于Safari。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我读过...</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在实现CORS的浏览器中，每个跨域的GET或POST请求之前都有一个OPTIONS请求，该请求检查GET或POST是否正常。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我的主要问题是，在我看来，这种情况怎么似乎没有发生？</font><font style="vertical-align: inherit;">为什么没有调用我的app.options块？</font><font style="vertical-align: inherit;">为什么需要在主app.get块中设置标题？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3849篇《为什么不将CORS标头添加到OPTIONS路由中，使浏览器无法访问我的API？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我是@OP，我会更改我的编程范例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设由于要向localhost或类似请求而使这些CORS被阻止。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最终，如果您要部署到像</font></font><code>Google Cloud Platform</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">or </font></font><code>Heroku</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">or这样的生产视蛋白</font><font style="vertical-align: inherit;">，则无需担心诸如允许原产地之类的CORS或生产中的任何东西。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，在测试服务器时，只需使用它即可，</font></font><code>postman</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且在部署服务器然后在客户端上工作之后，不会阻止CORS。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用Express中间件，阻止您的域和方法。</font></font></p>

<pre><code>app.use(function(req, res, next) {<font></font>
  res.header("Access-Control-Allow-Origin", process.env.DOMAIN); // update to match the domain you will make the request from<font></font>
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");<font></font>
  res.header(<font></font>
    "Access-Control-Allow-Headers",<font></font>
    "Origin, X-Requested-With, Content-Type, Accept"<font></font>
  );<font></font>
  next();<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Express Middleware非常适合我。</font><font style="vertical-align: inherit;">如果您已经在使用Express，则只需添加以下中间件规则。</font><font style="vertical-align: inherit;">它应该开始工作。</font></font></p>

<pre><code>app.all("/api/*", function(req, res, next) {<font></font>
  res.header("Access-Control-Allow-Origin", "*");<font></font>
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");<font></font>
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");<font></font>
  return next();<font></font>
});<font></font>
<font></font>
app.all("/api/*", function(req, res, next) {<font></font>
  if (req.method.toLowerCase() !== "options") {<font></font>
    return next();<font></font>
  }<font></font>
  return res.send(204);<font></font>
});<font></font>
</code></pre>

<p><a href="https://williambert.online/2013/06/allow-cors-with-localhost-in-chrome/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我</font></font><code>index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我补充说：</font></font></p>

<pre><code>app.use((req, res, next) =&gt; {<font></font>
   res.header("Access-Control-Allow-Origin", "*");<font></font>
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");<font></font>
   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");<font></font>
   next();<font></font>
}) <font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做这样的事情：</font></font></p>

<pre><code>app.use(function(req, res, next) {<font></font>
    res.header("Access-Control-Allow-Origin", "*");<font></font>
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");<font></font>
    next();<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要回答您的主要问题，如果POST或GET中包含任何非简单的内容或标头，则CORS规范仅要求OPTIONS调用位于POST或GET之前。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要CORS飞行前请求（OPTIONS调用）的内容类型是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除以下</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内容</font><em><font style="vertical-align: inherit;">之外的</font></em><font style="vertical-align: inherit;">任何内容类型</font><font style="vertical-align: inherit;">：</font></font></p>

<ol>
<li><code>application/x-www-form-urlencoded</code></li>
<li><code>multipart/form-data</code></li>
<li><code>text/plain</code></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除上面列出的内容类型外，其他任何内容类型都会触发飞行前请求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至于标头，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除以下内容外</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，任何请求标头</font><em><font style="vertical-align: inherit;">都</font></em><font style="vertical-align: inherit;">将触发飞行前请求：</font></font></p>

<ol>
<li><code>Accept</code></li>
<li><code>Accept-Language</code></li>
<li><code>Content-Language</code></li>
<li><code>Content-Type</code></li>
<li><code>DPR</code></li>
<li><code>Save-Data</code></li>
<li><code>Viewport-Width</code></li>
<li><code>Width</code></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他任何请求标头都将触发飞行前请求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您可以添加一个自定义标头，例如：</font></font><code>x-Trigger: CORS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它应该触发飞行前请求并点击OPTIONS块。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅《</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Preflighted_requests" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN Web API参考-CORS预检请求》</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
