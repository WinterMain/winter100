---
layout: question
title:  当它们需要来自第三方API的数据时，如何从next.js导出静态HTML页面？
date:   2020-03-24T09:32:46.000Z
description: I’m using next.js to build static HTML webpages.One of my webpages needs da...
img: 
author: Harry小卤蛋
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>I’m using next.js to <a href="https://nextjs.org/learn/excel/static-html-export" rel="nofollow noreferrer">build static HTML webpages</a>.</p>

<p>One of my webpages needs data from a third-party API, which I’d like to fetch at build time and bake into the resulting HTML.</p>

<p>I don’t want this call to ever happen on the client, because:</p>

<ul>
<li>CORS prevents the request from succeeding anyway </li>
<li>I would have to expose an API key on the client (no thank you)</li>
</ul>

<p>I thought <code>getInitialProps</code> was the answer, because the fetched data is indeed baked in during the build/export process, but when I navigate away from the page and return from it, <code>getInitialProps</code> gets triggered on the client, breaking everything.</p>

<p>My current code in getInitialProps is something like:</p>

<pre><code>static async getInitialProps(){<font></font>
    // Get Behance posts<font></font>
    const behanceEndpoint = `https://www.behance.net/v2/users/${process.env.BEHANCE_USERNAME}/projects?api_key=${process.env.BEHANCE_API_KEY}`<font></font>
    const behanceRes = await fetch(behanceEndpoint)<font></font>
    let behancePosts = await behanceRes.json()<font></font>
    // Return only the required number of posts<font></font>
    return {<font></font>
        behancePosts: behancePosts<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关如何处理此问题的任何建议或最佳做法？</font><font style="vertical-align: inherit;">我知道</font></font><a href="https://www.gatsbyjs.org" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Gatsby.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是开箱即用的。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3570篇《当它们需要来自第三方API的数据时，如何从next.js导出静态HTML页面？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿阿飞Sam</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种可能是，如果您只想在服务器上执行一次以检查req参数是否在getInitialProps中：（</font></font><a href="https://github.com/zeit/next.js/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）
 </font></font><code>req</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-HTTP请求对象（仅服务器）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种肮脏的方法： </font></font></p>

<pre><code>  static async getInitialProps({ req }){<font></font>
if (req) {<font></font>
  // only executed on server<font></font>
  // Get Behance posts<font></font>
  const behanceEndpoint = `https://www.behance.net/v2/users/${process.env.BEHANCE_USERNAME}/projects?api_key=${process.env.BEHANCE_API_KEY}`<font></font>
  const behanceRes = await fetch(behanceEndpoint)<font></font>
  let behancePosts = await behanceRes.json()<font></font>
  // Return only the required number of posts<font></font>
  return {<font></font>
      behancePosts: behancePosts<font></font>
  }<font></font>
} else {<font></font>
  // client context<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这会有所帮助。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
