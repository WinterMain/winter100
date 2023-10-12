---
layout: question
title:  Next.js-express动态路由导致页面重新加载
date:   2020-03-23T06:41:27.000Z
description: 我有一个使用快速自定义浏览器的下一个js创建的博客应用程序。当我单击链接以路由到“ / blog / article-1”时，它会在到达该页面时刷新该页面...
img: 
author: 小小Stafan宝儿
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个使用快速自定义浏览器的下一个js创建的博客应用程序。</font><font style="vertical-align: inherit;">当我单击链接以路由到“ / blog / article-1”时，它会在到达该页面时刷新该页面。</font><font style="vertical-align: inherit;">我如何避免这种情况？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">server.js文件</font></font></strong></p>

<pre><code>const express = require('express');<font></font>
const next = require('next');<font></font>
const port = 80;<font></font>
const dev = process.env.NODE_ENV !== 'production';<font></font>
const app = next({ dev });<font></font>
const handle = app.getRequestHandler();<font></font>
const compression = require('compression');<font></font>
<font></font>
app.prepare()<font></font>
  .then(() =&gt; {<font></font>
    const server = express();<font></font>
    server.use(compression());<font></font>
    server.get('/blog', (req, res) =&gt; app.render(req, res, '/blog', req.query));<font></font>
    server.get('/blog/:postslug', (req, res) =&gt; {<font></font>
      const params = { postslug: req.params.postslug }<font></font>
      return app.render(req, res, '/blog/post', params)<font></font>
    });<font></font>
<font></font>
    server.get('*', (req, res) =&gt; handle(req, res));<font></font>
<font></font>
    server.listen(port, (err) =&gt; {<font></font>
      if (err) throw err;<font></font>
      console.log(`&gt; Ready on http://localhost:${port}`);<font></font>
    });<font></font>
});<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接到文章的文件</font></font></strong></p>

<pre><code>import React, { Fragment } from 'react';<font></font>
import Link from 'next/link';<font></font>
<font></font>
export default (props) =&gt; {<font></font>
<font></font>
  return (<font></font>
    &lt;Fragment&gt;<font></font>
      &lt;Link href={`/blog/${dynamicPostSlug}`}&gt;<font></font>
        &lt;a&gt;<font></font>
          Go to article<font></font>
        &lt;/a&gt;<font></font>
      &lt;/Link&gt;<font></font>
    &lt;/Fragment&gt;<font></font>
  );<font></font>
};<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">帖子出现的文件</font></font></strong></p>

<pre><code>import React, { Component, Fragment } from 'react';<font></font>
import { withRouter } from 'next/router';<font></font>
import 'isomorphic-unfetch';<font></font>
<font></font>
class post extends Component {<font></font>
<font></font>
  static async getInitialProps({ req }) {<font></font>
    try {<font></font>
      const res = await fetch(`http://localhost/api/posts/${req.params.postslug}`, {<font></font>
        method: 'GET', // *GET, POST, PUT, DELETE, etc.<font></font>
        mode: 'cors', // no-cors, cors, *same-origin<font></font>
      });<font></font>
      const json = await res.json();<font></font>
      return { data: json.data };<font></font>
    } catch (err) {<font></font>
      console.log('err');<font></font>
    }<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    const { data } = this.props;<font></font>
    return (<font></font>
      &lt;Fragment&gt;<font></font>
        &lt;PostContentComesHere data={data}/&gt;<font></font>
      &lt;/Fragment&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
export default withRouter(post);<font></font>
</code></pre>

<p><a href="https://github.com/zeit/next.js/blob/canary/examples/with-url-object-routing/server.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经检查了next.js文档，它具有使用节点http模块的实现。</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过复制文档示例中的某些部分在express上实现了此代码。</font><font style="vertical-align: inherit;">但是，当我使用转到文章页面时，似乎仍然会导致页面重新加载。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2861篇《Next.js-express动态路由导致页面重新加载》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
