---
layout: question
title:  在Koa中使用Express中间件
date:   2020-03-30T09:20:49.000Z
description: 我有实现一个中间件的现有代码。如何在Koa应用程序中使用此中间件？当我尝试调用app.use(expressMiddleware)以在我的Koa应用程...
img: 
author: 老丝宝儿
category: question
answer: 2
tags: node.js KoaJS
topic: KoaJS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有实现一个中间件的现有代码。</font><font style="vertical-align: inherit;">如何在Koa应用程序中使用此中间件？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我尝试调用</font></font><code>app.use(expressMiddleware)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以在我的Koa应用程序中使用中间件时，Koa抱怨需要生成器函数：</font></font></p>

<pre><code>AssertionError: app.use() requires a generator function
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我想这里需要某种适配器或技巧...想法？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3848篇《在Koa中使用Express中间件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经在npm上为koa2创建了koa2-connect。</font></font><a href="https://github.com/cyrilluce/koa2-connect" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/cyrilluce/koa2-connect</font></font></a></p>

<pre><code>npm i koa2-connect -S<font></font>
// usage same as koa-connect<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于koa-connect的作者尚未发布下一版本（npm i koa-connect @ next无法正常工作），并且与webpack-dev-middleware和webpack-hot-middleware不兼容。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">koa与快速中间件不兼容。</font><font style="vertical-align: inherit;">（</font><font style="vertical-align: inherit;">有关详细说明，</font><font style="vertical-align: inherit;">请参见此</font></font><a href="http://www.jongleberry.com/why-you-should-and-shouldnt-use-koa.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">博客文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，尤其是“更好地编写中间件”部分）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以为koa重写中间件。</font><font style="vertical-align: inherit;">koa Wiki具有</font><font style="vertical-align: inherit;">编写中间件</font><font style="vertical-align: inherit;">的特殊</font></font><a href="https://github.com/koajs/koa/blob/master/docs/guide.md" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指南</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在快速中间件中将收到</font><font style="vertical-align: inherit;">的</font></font><code>req</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>res</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，在koa中间件中不直接可用。</font><font style="vertical-align: inherit;">但是您可以</font><font style="vertical-align: inherit;">通过</font><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">访问koa </font></font><a href="http://koajs.com/#request" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请求</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和koa </font></font><a href="http://koajs.com/#response" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">响应</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">。</font></font><code>this.request</code><font style="vertical-align: inherit;"></font><code>this.response</code><font style="vertical-align: inherit;"></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
