---
layout: question
title:  Koa Router：如何获取查询字符串参数？
date:   2020-03-30T09:14:40.000Z
description: 我正在使用koa-router。如何获取请求的查询字符串参数？这是我设法写的最好的：import koaRouter from 'koa-ro...
img: 
author: 番长樱梅
category: question
answer: 2
tags: JavaScript KoaJS
topic: KoaJS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用koa-router。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何获取请求的查询字符串参数？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我设法写的最好的：</font></font></p>

<pre><code>import koaRouter from 'koa-router';<font></font>
<font></font>
const router = koaRouter({ prefix: '/courses' });<font></font>
<font></font>
router.get('/', async (ctx) =&gt; {<font></font>
        console.log(ctx.qs["lecturer"]);<font></font>
    });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但</font></font><code>qs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未定义</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何帮助将不胜感激！</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>ctx.query</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或长期</font><font style="vertical-align: inherit;">使用</font></font><code>ctx.request.query</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><code>app.use( (ctx) =&gt; console.log(ctx.query) )</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据文档，应该有一个</font></font><code>ctx.request.query</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示为对象的查询字符串项。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
