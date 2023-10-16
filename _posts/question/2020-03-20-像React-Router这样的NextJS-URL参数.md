---
layout: question
title:  像React-Router这样的NextJS URL参数
date:   2020-03-20T06:16:21.000Z
description: 我是NextJS的新手，第一印象看起来非常好。但是在给了机会之后，我遇到了一些问题，例如带有自定义参数的URL路由，例如react-router。目前...
img: 
author: 斯丁达蒙
category: question
answer: 3
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是</font></font><a href="https://github.com/zeit/next.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NextJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的新手</font><font style="vertical-align: inherit;">，第一印象看起来非常好。</font><font style="vertical-align: inherit;">但是在给了机会之后，我遇到了一些问题，例如带有自定义参数的URL路由，例如</font></font><a href="https://reacttraining.com/react-router" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-router</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，我们可以使用NextJS做些什么</font></font></h3>

<pre><code>https://url.com/users?id:123
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们需要什么才能获得更好的URL模式</font></font></h3>

<pre><code>https://url.com/users/123
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在react-router中在这里有一个完美的例子</font></font><a href="https://reacttraining.com/react-router/web/example/url-params" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://reacttraining.com/react-router/web/example/url-params</font></font></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2535篇《像React-Router这样的NextJS URL参数》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProGil</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>next/link</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>as</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能：</font></font></p>

<pre><code>&lt;Link prefetch as={`/product/${slug}`} href={`/product?slug=${slug}`}&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器上的链接将显示为</font></font><code>/product/slug</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内部映射到的链接</font></font><code>/product?slug=slug</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要具有</font><font style="vertical-align: inherit;">用于服务器端映射</font><font style="vertical-align: inherit;">的</font></font><a href="https://github.com/zeit/next.js/tree/canary/examples/custom-server-express" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自定义服务器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>server.get("/product/:slug", (req, res) =&gt; {<font></font>
  return app.render(req, res, "/product", { slug: req.params.slug })<font></font>
})<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我曾经遇到过同样的问题，但是我发现了这个包，
 </font></font><a href="https://github.com/fridays/next-routes" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/fridays/next-routes</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它的工作原理几乎与react-router相同，我已经尝试过了，并且对我有用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本示例将帮助您定义参数化的命名路由。</font><font style="vertical-align: inherit;">它使用嵌套/路由，并让您定义自定义的首选路由。</font><font style="vertical-align: inherit;">希望对您有帮助。</font></font></p>

<p><a href="https://github.com/zeit/next.js/tree/master/examples/with-next-routes" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/zeit/next.js/tree/master/examples/with-next-routes</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
