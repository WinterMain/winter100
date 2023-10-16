---
layout: question
title:  无法摆脱标头X-Powered-By：Express
date:   2020-03-24T07:19:00.000Z
description: 我正在使用express在nodejs上运行服务器。我似乎无法摆脱标题：X-Powered-By Express我想知道是否有任何方法可以摆脱此...
img: 
author: Stafan路易
category: question
answer: 3
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用express在nodejs上运行服务器。</font><font style="vertical-align: inherit;">我似乎无法摆脱标题：</font></font></p>

<pre><code>X-Powered-By:Express
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道是否有任何方法可以摆脱此标头，还是我必须忍受它？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3432篇《无法摆脱标头X-Powered-By：Express》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读代码</font></font><a href="https://github.com/visionmedia/express/blob/master/lib/http.js#L72" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/visionmedia/express/blob/master/lib/http.js#L72</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使我认为您将不得不使用它，因为它似乎不是有条件的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有nginx / apache前端，您仍然可以删除标头（对于Apache和modsheaders，标头-对于nginx，更多）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德小小</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许这对于经验丰富的Express用户可能是显而易见的，但这仅对我有用：</font></font></p>

<pre><code>app.configure(function() {<font></font>
    app.use(function (req, res, next) {<font></font>
        res.removeHeader("X-Powered-By");<font></font>
        next();<font></font>
    });<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是为了r带rjack的答案，您还可以（可选）只需将X-powered-by标头更改（设置）为更酷/更自定义的内容，例如：</font></font></p>

<pre><code>app.use(function (req, res, next) {<font></font>
  res.header("X-powered-by", "Blood, sweat, and tears")<font></font>
  next()<font></font>
})<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
