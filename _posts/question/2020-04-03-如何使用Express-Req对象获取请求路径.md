---
layout: question
title:  如何使用Express Req对象获取请求路径
date:   2020-04-03T02:43:31.000Z
description: 我正在使用express + node.js，并且我有一个req对象，浏览器中的请求是/ account，但是当我登录req.path时，我得到的是'/'...
img: 
author: 阿飞番长
category: question
answer: 3
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用express + node.js，并且我有一个req对象，浏览器中的请求是/ account，但是当我登录req.path时，我得到的是'/'---不是'/ account'。</font></font></p>

<pre><code>  //auth required or redirect<font></font>
  app.use('/account', function(req, res, next) {<font></font>
    console.log(req.path);<font></font>
    if ( !req.session.user ) {<font></font>
      res.redirect('/login?ref='+req.path);<font></font>
    } else {<font></font>
      next();<font></font>
    }<font></font>
  });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">req.path是/何时应该是/ account？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3903篇《如何使用Express Req对象获取请求路径》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自己玩了一些游戏之后，应该使用：</font></font></p>

<p><code>console.log(req.originalUrl)</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它应该是：</font></font></p>

<p><code>req.url</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快递3.1.x</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些情况下，您应该使用：</font></font></p>

<pre><code>req.path
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这为您提供了路径，而不是完整的请求URL。</font><font style="vertical-align: inherit;">例如，如果您只对用户请求的页面感兴趣，而不对URL的所有参数感兴趣：</font></font></p>

<pre><code>/myurl.htm?allkinds&amp;ofparameters=true
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">req.path将为您提供：</font></font></p>

<pre><code>/myurl.html
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
