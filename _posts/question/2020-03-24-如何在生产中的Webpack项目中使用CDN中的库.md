---
layout: question
title:  如何在生产中的Webpack项目中使用CDN中的库
date:   2020-03-24T10:19:49.000Z
description: 我想react.min.js在生产中使用CDN（例如https //unpkg.com/react\`15.3.1/dist/react.min.js）...
img: 
author: 老丝
category: question
answer: 0
tags: webpack Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想</font></font><code>react.min.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在生产中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">CDN（例如</font></font><a href="https://unpkg.com/react@15.3.1/dist/react.min.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://unpkg.com/react@15.3.1/dist/react.min.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使Webpack将我的</font></font><code>import React from 'react'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句转换为</font></font><code>const React = window.React</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是构建</font></font><code>node_modules/react</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为包</font><font style="vertical-align: inherit;">的最佳方法是什么</font><font style="vertical-align: inherit;">？                 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直这样做</font></font><code>resolve.alias</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;head&gt;<font></font>
  &lt;script type="text/javascript" src="https://unpkg.com/react@15.3.1/dist/react.min.js"&gt;&lt;/script&gt;<font></font>
  &lt;script type="text/javascript" src="/assets/bundle.js"&gt;&lt;/script&gt;<font></font>
&lt;/head&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>webpack.prod.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>alias: {<font></font>
  react$: './getWindowReact',<font></font>
},<font></font>
</code></pre>

<p><code>getWindowReact.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>module.exports = window.React;
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：在旧问题中，我没有意识到将React构建到Webpack捆绑包中</font></font><code>NODE_ENV=production</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会消除</font></font><code>propTypes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查。</font><font style="vertical-align: inherit;">答案之一集中于此。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3641篇《如何在生产中的Webpack项目中使用CDN中的库》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
