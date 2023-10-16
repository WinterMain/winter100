---
layout: question
title:  如何在next.js getInitialProps中调用Prismic API？
date:   2020-03-23T14:08:27.000Z
description: 如何从next.js应用程序调用Prismic（CMS） API ？在next.js中，我之前有过：import React from 'react'...
img: 
author: 卡卡西
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何</font><font style="vertical-align: inherit;">从</font><a href="https://github.com/zeit/next.js/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">next.js应用程序</font></a><font style="vertical-align: inherit;">调用</font></font><a href="https://prismic.io/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Prismic（CMS）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> API </font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">在next.js中，我之前有过：</font></font><a href="https://github.com/zeit/next.js/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<pre><code>import React from 'react'<font></font>
import Link from 'next/link'<font></font>
import 'isomorphic-fetch'<font></font>
<font></font>
export default class Index extends React.Component {<font></font>
  static async getInitialProps () {<font></font>
    const res = await fetch('https://myAPI_URL')<font></font>
    const json = await res.json()<font></font>
    return { cars: json.results }<font></font>
  }<font></font>
<font></font>
  render () {<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        &lt;p&gt;I can see the data {this.props.cars} &lt;/p&gt;<font></font>
      &lt;/div&gt;<font></font>
    )<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我想使用Prismic开发套件作为依赖项，如</font></font><a href="https://prismic.io/docs/javascript/getting-started/integrating-with-an-existing-javascript-project" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们的文档中所述。</font></font></a> </p>

<pre><code>npm install prismic-javascript prismic-dom --save
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及调用Prismic的代码：</font></font></p>

<pre><code>const Prismic = require('prismic-javascript');<font></font>
<font></font>
const apiEndpoint = "https://your-repository-name.prismic.io/api/v2";<font></font>
const apiToken = "this_is_a_fake_token_M1NrQUFDWUE0RYvQnvv70";<font></font>
<font></font>
Prismic.getApi(apiEndpoint, {accessToken: apiToken}).then(function(api) {<font></font>
  return api.query(""); // An empty query will return all the documents<font></font>
}).then(function(response) {<font></font>
  console.log("Documents: ", response.results);<font></font>
}, function(err) {<font></font>
  console.log("Something went wrong: ", err);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如何在getInitialProps内部使nexts.js与Prismic API配合使用？</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>import React from 'react'<font></font>
import Link from 'next/link'<font></font>
import 'isomorphic-fetch'<font></font>
<font></font>
export default class Index extends React.Component {<font></font>
  static async getInitialProps () {<font></font>
    // fetch Prismic API and return the results<font></font>
  }<font></font>
<font></font>
  render () {<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        &lt;p&gt;Showing data fetched from API here&lt;/p&gt;<font></font>
      &lt;/div&gt;<font></font>
    )<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3130篇《如何在next.js getInitialProps中调用Prismic API？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
