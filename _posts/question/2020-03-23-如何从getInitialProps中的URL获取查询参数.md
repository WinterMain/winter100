---
layout: question
title:  如何从getInitialProps中的URL获取查询参数？
date:   2020-03-23T06:38:47.000Z
description: 我有一个干净的网址，其中包含一些这样的查询参数。  http：// localhost：3000 / post /：id我正在尝试像这样在客户...
img: 
author: 理查德飞云
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个干净的网址，其中包含一些这样的查询参数。</font></font></p>

<blockquote>
  <p><a href="http://localhost:3000/post/:id" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：// localhost：3000 / post /：id</font></font></a></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试像这样在客户端捕获查询参数“ id”。</font></font></p>

<pre><code>static async getInitialProps({req, query: { id }}) {<font></font>
    return {<font></font>
        postId: id<font></font>
    }<font></font>
}<font></font>
<font></font>
render() {<font></font>
  const props = { <font></font>
       data: {<font></font>
          'id': this.props.postId        // this query param is undefined<font></font>
       }<font></font>
  }<font></font>
  return (<font></font>
     &lt;Custom {...props}&gt;A component&lt;/Custom&gt;<font></font>
  )<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的快速端点看起来像这样。</font></font></p>

<pre><code>app.post(<font></font>
    '/post/:id',<font></font>
    (req, res, next) =&gt; {<font></font>
        let data = req.body;<font></font>
        console.log(data);<font></font>
        res.send('Ok');<font></font>
    }<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我的服务器端控制台输出最终像这样。</font></font></p>

<pre><code>{ id: 'undefined' }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经阅读了文档和github问题，但似乎无法理解为什么会这样。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2853篇《如何从getInitialProps中的URL获取查询参数？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
