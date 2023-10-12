---
layout: question
title:  将命令行参数传递给webpack.config.js
date:   2020-03-24T11:18:10.000Z
description: 我有一个简单的webpack.config.js module.exports = {  entry  "./app.js",  output  ...
img: 
author: 斯丁前端
category: question
answer: 2
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个简单的webpack.config.js </font></font></p>

<pre><code>module.exports = {<font></font>
  entry: "./app.js",<font></font>
  output: {<font></font>
    filename: "bundle.js"<font></font>
  },<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想通过值</font></font><code>entry</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>output</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过命令行参数。</font><font style="vertical-align: inherit;">那有可能吗，我该怎么做？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3728篇《将命令行参数传递给webpack.config.js》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://www.npmjs.com/package/argv" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">argv</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包并设置变量。</font><font style="vertical-align: inherit;">您必须先这样做</font></font><code>module.export</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以导出env函数，该函数可以返回conf对象。</font><font style="vertical-align: inherit;">因此，您可以使用如下所示的webpack配置：</font></font></p>

<pre><code>module.exports = env =&gt; {<font></font>
    return {<font></font>
        entry: env === "production" ? "./app.js": "app-dev.js",<font></font>
        output: {<font></font>
          filename: "bundle.js"<font></font>
        },<font></font>
    }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后从命令行（或package.json）调用webpack，如下所示：</font></font></p>

<pre><code>webpack --env=production
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
