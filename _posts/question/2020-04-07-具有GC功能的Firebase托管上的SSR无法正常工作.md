---
layout: question
title:  具有GC功能的Firebase托管上的SSR无法正常工作
date:   2020-04-07T03:54:31.000Z
description: 好的，这是我的文件夹结构所以这是功能索引文件：const functions = require('firebase-functions')...
img: 
author: 阿飞
category: question
answer: 0
tags: 火力 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，这是我的文件夹结构</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/24015/images/thumbnails/1586231544069.png" data-src="https://www.samyoc.com//uploads/users/24015/images/1586231544069.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/OGRPG.png" alt=""></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以这是功能索引文件：</font></font></p>

<pre><code>const functions = require('firebase-functions')<font></font>
const express = require('express')<font></font>
const { Nuxt } = require('nuxt')<font></font>
<font></font>
const app = express()<font></font>
<font></font>
const config = {<font></font>
  dev: false,<font></font>
  buildDir: 'nuxt',<font></font>
  build: {<font></font>
    publicPath: '/'<font></font>
  }<font></font>
}<font></font>
const nuxt = new Nuxt(config)<font></font>
<font></font>
function handleRequest (req, res) {<font></font>
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')<font></font>
  nuxt.renderRoute('/').then(result =&gt; {<font></font>
    res.send(result.html)<font></font>
  }).catch(e =&gt; {<font></font>
    res.send(e)<font></font>
  })<font></font>
}<font></font>
<font></font>
app.get('*', handleRequest)<font></font>
exports.nuxtApp = functions.https.onRequest(app)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是访问Url时，我得到的只是</font></font><code>"{"code":"MODULE_NOT_FOUND"}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
（部署后）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在中所做的</font></font><code>nuxt.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是告诉它使构建目录进入functions文件夹中的nuxt文件夹</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">firebase.json</font></font></p>

<pre><code>{<font></font>
  "hosting": {<font></font>
    "public": "public",<font></font>
    "ignore": [<font></font>
      "firebase.json",<font></font>
      "**/.*",<font></font>
      "**/node_modules/**"<font></font>
    ],<font></font>
    "rewrites": [<font></font>
      {<font></font>
        "source": "**",<font></font>
        "function": "nuxtApp"<font></font>
      }<font></font>
    ]<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当使用Firebase Serve在本地进行测试时，它可以工作，但是它仅呈现基本URL，</font></font><code>/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而没有其他任何内容，而且我没有诸如scss文件或应用清单的静态资产。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4137篇《具有GC功能的Firebase托管上的SSR无法正常工作》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
