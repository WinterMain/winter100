---
layout: question
title:  NextJS：Main和Nextscript
date:   2020-03-23T14:09:09.000Z
description: 对NextJS的服务器端渲染功能进行一些探讨。它看起来非常好，易于使用。我已经浏览了_document.js可以覆盖默认文件的文件。我在示例中找到以下代码...
img: 
author: 猴子村村
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对NextJS的服务器端渲染功能进行一些探讨。</font><font style="vertical-align: inherit;">它看起来非常好，易于使用。</font><font style="vertical-align: inherit;">我已经浏览了</font></font><code>_document.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以覆盖默认文件的文件。</font><font style="vertical-align: inherit;">我在示例中找到以下代码：</font></font></p>

<pre><code>import Document, { Head, Main, NextScript } from 'next/document'<font></font>
<font></font>
export default class MyDocument extends Document {<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;html&gt;<font></font>
        &lt;Head&gt;<font></font>
          &lt;link rel="stylesheet" href="/_next/static/style.css" /&gt;<font></font>
        &lt;/Head&gt;<font></font>
        &lt;body&gt;<font></font>
          &lt;Main /&gt;<font></font>
          &lt;NextScript /&gt;<font></font>
        &lt;/body&gt;<font></font>
      &lt;/html&gt;<font></font>
    )<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在我知道我们正在覆盖当前</font></font><code>HTML</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模板。</font><font style="vertical-align: inherit;">但我是一个有点困惑有关的功能</font></font><code>Main</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>Nextscript</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否</font></font><code>Main</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是一个网页？</font><font style="vertical-align: inherit;">什么是</font></font><code>Nextscript</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（哪个脚本）？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3132篇《NextJS：Main和Nextscript》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
