---
layout: question
title:  在Nuxt.js应用程序中初始化Firebase的位置
date:   2020-03-23T06:45:16.000Z
description: 我正在使用Nuxt.js和编写网络应用Firebase。我需要在哪个文件中初始化Firebase？换句话说，该代码段放在哪里？var config =...
img: 
author: 猴子
category: question
answer: 0
tags: 火力 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用</font></font><code>Nuxt.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">编写网络应用</font></font><code>Firebase</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我需要在哪个文件中初始化</font></font><code>Firebase</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">换句话说，该代码段放在哪里？</font></font></p>

<pre><code>var config = {<font></font>
    apiKey: "xxxxxxxxxx",<font></font>
    authDomain: "xxxxxxxxx.firebaseapp.com",<font></font>
    databaseURL: "https://xxxxxxxx.firebaseio.com",<font></font>
    projectId: "xxxxxxxxx",<font></font>
    storageBucket: "xxxxxxxxxxx.appspot.com",<font></font>
    messagingSenderId: "xxxxxxxxxx"<font></font>
};<font></font>
firebase.initializeApp(config);<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2868篇《在Nuxt.js应用程序中初始化Firebase的位置》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
