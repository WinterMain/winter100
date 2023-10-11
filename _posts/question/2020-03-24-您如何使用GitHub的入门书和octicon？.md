---
layout: question
title:  您如何使用GitHub的入门书和octicon？
date:   2020-03-24T09:21:22.000Z
description: 我正在尝试使用GitHub的入门和octicons。在使用npm完两者安装之后，我开始通过将build.css文件包含在html文档中来使用GitHub定...
img: 
author: 小宇宙
category: question
answer: 3
tags: html CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用GitHub的</font></font><a href="https://github.com/primer/primer" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">入门</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://github.com/primer/octicons" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">octicons</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在使用</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完两者安装</font><font style="vertical-align: inherit;">之后</font><font style="vertical-align: inherit;">，我开始通过将</font></font><code>build.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件包含在html文档中</font><font style="vertical-align: inherit;">来使用GitHub定义的css类</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我如何将项目指向所有</font></font><code>octicons</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给我</font><font style="vertical-align: inherit;">的svg图标</font><font style="vertical-align: inherit;">？</font></font></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html lang="en"&gt;<font></font>
<font></font>
&lt;head&gt;<font></font>
    &lt;meta charset="UTF-8"&gt;<font></font>
    &lt;title&gt;Hello Primer&lt;/title&gt;<font></font>
    &lt;link rel="stylesheet" href="node_modules/primer-css/build/build.css"&gt;<font></font>
&lt;/head&gt;<font></font>
<font></font>
&lt;body&gt;<font></font>
    &lt;form&gt;<font></font>
        &lt;div class="input-group"&gt;<font></font>
            &lt;input class="form-control" type="text" placeholder="Username"&gt;<font></font>
            &lt;span class="input-group-button"&gt;<font></font>
      &lt;button class="btn"&gt;<font></font>
        &lt;span class="octicon octicon-clippy"&gt;&lt;/span&gt;<font></font>
            &lt;/button&gt;<font></font>
            &lt;/span&gt;<font></font>
        &lt;/div&gt;<font></font>
    &lt;/form&gt;<font></font>
&lt;/body&gt;<font></font>
<font></font>
&lt;/html&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3548篇《您如何使用GitHub的入门书和octicon？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么我们不只是使用CDN链接，还是从那里下载？</font></font></p>

<pre><code>&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Primer/3.0.1/css/primer.css"&gt;<font></font>
&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/octicons/3.5.0/octicons.min.css"&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村Eva</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="http://bower.io" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bower</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装Octicons。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bower.json：</font></font></p>

<pre><code>{<font></font>
    "name": "my-app",<font></font>
    ...<font></font>
    "dependencies": {   <font></font>
        "octicons": "4.3.0",<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后链接到存放凉亭库的任何地方：</font></font></p>

<pre><code>&lt;link href="/libs/octicons/build/font/octicons.css" rel="stylesheet"&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[编辑]</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案很简单：包括</font></font><code>node_modules/octicons/build/font/octicons.css</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此方法有效，没有svg图标。</font><font style="vertical-align: inherit;">如果要使用svg图标，则可能应使用</font></font><code>&lt;img&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">添加图像</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，使用字体会使此操作变得容易得多。</font></font></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html lang="en"&gt;<font></font>
<font></font>
&lt;head&gt;<font></font>
    &lt;meta charset="UTF-8"&gt;<font></font>
    &lt;title&gt;Hello Primer&lt;/title&gt;<font></font>
    &lt;link rel="stylesheet" href="node_modules/primer-css/build/build.css"&gt;<font></font>
    &lt;link rel="stylesheet" href="node_modules/octicons/build/font/octicons.css"&gt;<font></font>
&lt;/head&gt;<font></font>
<font></font>
&lt;body&gt;<font></font>
    &lt;form&gt;<font></font>
        &lt;div class="input-group"&gt;<font></font>
            &lt;input class="form-control" type="text" placeholder="Username"&gt;<font></font>
            &lt;span class="input-group-button"&gt;<font></font>
                &lt;button class="btn"&gt;<font></font>
                    &lt;span class="octicon octicon-clippy"&gt;&lt;/span&gt;<font></font>
                &lt;/button&gt;<font></font>
            &lt;/span&gt;<font></font>
        &lt;/div&gt;<font></font>
    &lt;/form&gt;<font></font>
&lt;/body&gt;<font></font>
<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您确实有需要，可以使用以下版本</font></font><code>svg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html lang="en"&gt;<font></font>
<font></font>
&lt;head&gt;<font></font>
    &lt;meta charset="UTF-8"&gt;<font></font>
    &lt;title&gt;Hello Primer&lt;/title&gt;<font></font>
    &lt;link rel="stylesheet" href="node_modules/primer-css/build/build.css"&gt;<font></font>
    &lt;link rel="stylesheet" href="node_modules/octicons/build/octicons.css"&gt;<font></font>
&lt;/head&gt;<font></font>
<font></font>
&lt;body&gt;<font></font>
    &lt;form&gt;<font></font>
        &lt;div class="input-group"&gt;<font></font>
            &lt;input class="form-control" type="text" placeholder="Username"&gt;<font></font>
            &lt;span class="input-group-button"&gt;<font></font>
                &lt;button class="btn"&gt;<font></font>
                    &lt;span class="octicon octicon-clippy"&gt;&lt;/span&gt;<font></font>
                    &lt;img src="node_modules/octicons/lib/svg/clippy.svg"&gt;&lt;/img&gt;<font></font>
                &lt;/button&gt;<font></font>
            &lt;/span&gt;<font></font>
        &lt;/div&gt;<font></font>
    &lt;/form&gt;<font></font>
&lt;/body&gt;<font></font>
<font></font>
&lt;/html&gt;<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
