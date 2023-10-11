---
layout: question
title:  如何在Express中获取完整的URL？
date:   2020-03-17T08:39:23.000Z
description: 假设我的示例网址是  http //example.com/one/two我说我有以下路线app.get('/one/two', func...
img: 
author: SamGil
category: question
answer: 4
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我的示例网址是</font></font></p>

<blockquote>
  <p><a href="http://example.com/one/two" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://example.com/one/two</font></font></a></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我说我有以下路线</font></font></p>

<pre><code>app.get('/one/two', function (req, res) {<font></font>
    var url = req.url;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值</font></font><code>url</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将是</font></font><code>/one/two</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何</font><font style="vertical-align: inherit;">在Express中</font><font style="vertical-align: inherit;">获取</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完整的URL</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">例如，在上述情况下，我想收到</font></font><code>http://example.com/one/two</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1910篇《如何在Express中获取完整的URL？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Eva</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我实际上发现，通过使用下面的代码，您可以获取您的网址。</font><font style="vertical-align: inherit;">然后将其切成薄片，然后决定下一步。</font></font></p>

<pre><code>app.use(function(req, res, next) {<font></font>
console.log(req.originalUrl);<font></font>
res.send(req.originalUrl);<font></font>
  });<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天TomHarry</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要使用构建它</font></font><code>req.headers.host + req.url</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当然，如果您在其他端口托管，那么您就可以了；-)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan泡芙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><pre><code>var full_address = req.protocol + "://" + req.headers.host + req.originalUrl;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>var full_address = req.protocol + "://" + req.headers.host + req.baseUrl;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德路易</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用这个，</font></font></p>

<pre><code>var url = req.headers.host + '/' + req.url;
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
