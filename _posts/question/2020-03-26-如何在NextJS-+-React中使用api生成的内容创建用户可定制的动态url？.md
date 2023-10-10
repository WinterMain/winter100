---
layout: question
title:  如何在NextJS + React中使用api生成的内容创建用户可定制的动态url？
date:   2020-03-26T08:03:26.000Z
description: 我需要有关React的Nextjs中可自定义动态网址的帮助。我创建了一个Nextjs + React应用，该应用利用自定义server.js来处理路由和“...
img: 
author: AEva伽罗
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要有关React的Nextjs中可自定义动态网址的帮助。</font><font style="vertical-align: inherit;">我创建了一个Nextjs + React应用，该应用利用自定义server.js来处理路由和“静态”动态url。</font><font style="vertical-align: inherit;">现在，我需要迁移此现有设置，以能够使用用户选择的从-let的say-CMS中定义的所有子句，并且仍然呈现正确的页面（内容将从api中检索）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想我需要做的是：让我们有一个用户定义的url：  </font></font><code>www.host.com/some-blog-group/post-of-the-day</code></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们通过处理所有路由</font></font><code>pages/index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>server.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ol>

<pre><code>server.get('*', (req, res) =&gt; handle(req, res));
</code></pre>

<ol start="2">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在中</font></font><code>page/index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我需要将请求发送回后端，即。</font></font><code>http://backend.com/get-page/some-blog-group/post-of-the-day</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后端将返回一个响应，该响应基本上由要为页面呈现的组件列表以及页面的类型和其他不可缺少的数据组成（以帮助格式化和检索组件的内容/布局）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，每个组件将根据需要渲染point.3给定的渲染数据。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多田！</font><font style="vertical-align: inherit;">页面呈现没有问题。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种思路是正确的吗？</font><font style="vertical-align: inherit;">现有应用程序已经有几十个页面（按照Next.js的建议通过文件夹“静态”设置，并根据需要在server.js中重新路由以进行动态路由）。</font><font style="vertical-align: inherit;">有没有更好的方法来迁移此设置？</font><font style="vertical-align: inherit;">或者也许我一开始不需要Nextjs？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">利用自定义server.js处理路由</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我假设是一台快递服务器，为什么不使用</font></font><a href="https://nextjs.org/docs/routing/introduction" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nextjs路由</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">呢？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以创建具有以下内容的pages / test / index.js：</font></font></p>

<pre><code>import React from "react";<font></font>
import Link from "next/link";<font></font>
<font></font>
class Test extends React.Component {<font></font>
  static async getInitialProps({ query }) {<font></font>
    return { query };<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        &lt;Link href="/"&gt;<font></font>
          &lt;a&gt;home&lt;/a&gt;<font></font>
        &lt;/Link&gt;<font></font>
        &lt;pre&gt;<font></font>
          {JSON.stringify(this.props.query, undefined, 2)}<font></font>
        &lt;/pre&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
export default Test;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后创建具有以下内容的pages / test / [... all] .js：</font></font></p>

<pre><code>import Test from "./index";<font></font>
export default Test;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该能够打开localhost / test / 1/2/3并获得以下查询：</font></font></p>

<pre><code>{<font></font>
  "all": [<font></font>
    "1",<font></font>
    "2",<font></font>
    "3"<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">索引现在可以根据查询应用要呈现的任何逻辑。</font><font style="vertical-align: inherit;">如果您需要基于查询发出请求，则可以使用</font></font><a href="https://nextjs.org/docs/api-reference/data-fetching/getInitialProps" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">getInitialProps</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来获取该请求。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
