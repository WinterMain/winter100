---
layout: question
title:  将next.js与环境变量一起使用时，为什么我的API密钥可见？
date:   2020-04-07T03:51:25.000Z
description: 我遵循next.js文档，并在now服务器上添加了自定义api密钥。问题是，当我运行now dev并转到“源”选项卡时，可以在此处看到我的api密钥。...
img: 
author: 宝儿
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遵循next.js文档，并在now服务器上添加了自定义api密钥。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是，当我运行</font></font><code>now dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并转到“源”选项卡时，可以在此处看到我的api密钥。</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/24025/images/thumbnails/1586231357934.jpg" data-src="https://www.samyoc.com//uploads/users/24025/images/1586231357934.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/kZvo9.jpg" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">api密钥保存在</font></font><code>.env.build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中，这是我的代码：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">index.js</font></font></strong></p>

<pre><code>import { useState, useEffect } from 'react';<font></font>
const axios = require('axios');<font></font>
<font></font>
import Nav from '../src/components/Nav';<font></font>
import Head from '../src/components/Head';<font></font>
import Movies from '../src/components/movies';<font></font>
<font></font>
const key = process.env.API_KEY;<font></font>
<font></font>
const index = () =&gt; {<font></font>
  const [currentMovies, setCurrentMovies] = useState([]);<font></font>
<font></font>
  const getTopMovies = async url =&gt; {<font></font>
    const fetchData = await axios.get(url).then(response =&gt; {<font></font>
      const [...data] = response.data.results;<font></font>
      setCurrentMovies({ data: data });<font></font>
    });<font></font>
  };<font></font>
<font></font>
  useEffect(() =&gt; {<font></font>
    getTopMovies(<font></font>
      `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-12-12&amp;primary_release_date.lte=2020-02-22&amp;api_key=${key}`<font></font>
    );<font></font>
  }, []);<font></font>
<font></font>
  if (currentMovies.data === undefined) {<font></font>
    console.log('Loading...');<font></font>
  } else {<font></font>
    console.log(currentMovies.data);<font></font>
  }<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">next.config.js</font></font></strong></p>

<pre><code>module.exports = {<font></font>
  env: {<font></font>
    API_KEY: process.env.API_KEY<font></font>
  }<font></font>
};<font></font>
<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">now.config.json</font></font></strong></p>

<pre><code>{<font></font>
  "build": {<font></font>
    "env": {<font></font>
      "API_KEY": "@api-key-moviedb"<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4126篇《将next.js与环境变量一起使用时，为什么我的API密钥可见？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
