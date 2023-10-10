---
layout: question
title:  nodejs http.get响应中的主体在哪里？
date:   2020-03-24T01:49:37.000Z
description: 我正在http //nodejs.org/docs/v0.4.0/api/http.html#http.request上阅读文档，但是由于某些原因，我似乎...
img: 
author: Gil伽罗小宇宙
category: question
answer: 1
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在</font></font><a href="http://nodejs.org/docs/v0.4.0/api/http.html#http.request" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://nodejs.org/docs/v0.4.0/api/http.html#http.request上</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读文档</font><font style="vertical-align: inherit;">，但是由于某些原因，我似乎无法真正找到body / data属性在返回的完成响应对象上。  </font></font></p>

<pre><code>&gt; var res = http.get({host:'www.somesite.com', path:'/'})<font></font>
<font></font>
&gt; res.finished<font></font>
true<font></font>
<font></font>
&gt; res._hasBody<font></font>
true<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成（http.get为您完成），因此它应该具有某种内容。</font><font style="vertical-align: inherit;">但是没有主体，没有数据，我无法读取。</font><font style="vertical-align: inherit;">身体藏在哪里？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三卡卡西Gil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您无法从返回值中获取响应的正文</font></font><code>http.get()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="https://nodejs.org/docs/latest-v8.x/api/http.html#http_http_get_options_callback" rel="nofollow noreferrer"><code>http.get()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不返回响应对象。</font><font style="vertical-align: inherit;">它返回请求对象（</font></font><a href="https://nodejs.org/docs/latest-v8.x/api/http.html#http_class_http_clientrequest" rel="nofollow noreferrer"><code>http.clientRequest</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">因此，没有任何方法可以从的返回值获取响应的主体</font></font><code>http.get()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这是一个老问题，但是阅读</font></font><a href="https://nodejs.org/docs/v0.4.0/api/http.html#http.request" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接到的文档后</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，即使您发布了它，情况也是如此。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
