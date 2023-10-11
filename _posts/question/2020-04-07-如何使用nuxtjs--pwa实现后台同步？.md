---
layout: question
title:  如何使用nuxtjs / pwa实现后台同步？
date:   2020-04-07T03:55:08.000Z
description: 我正在尝试通过在Nuxtjs中使用workbox background-sync \`nuxt/pwa-module。这是nuxt.config.js文...
img: 
author: 凯西里
category: question
answer: 0
tags: vuejs2 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试通过在Nuxtjs中使用workbox background-sync </font></font><code>@nuxt/pwa-module</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是nuxt.config.js文件中的我的工作箱属性：</font></font></p>

<pre><code>workbox: {<font></font>
<font></font>
    importScripts : [<font></font>
        'sw-background-sync.js'<font></font>
    ],<font></font>
<font></font>
    runtimeCaching: [<font></font>
        {<font></font>
            urlPattern: 'https:\/\/example.com\/api\/Survey\/getSurvey.*',<font></font>
            handler: 'networkFirst',<font></font>
            method: 'GET'<font></font>
        }<font></font>
    ]<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sw-background-sync.js文件的内容（位于静态目录中）：</font></font></p>

<pre><code>console.log("backsync called")<font></font>
workbox.routing.registerRoute(<font></font>
    'https:\/\/example.com\/api\/Survey\/post.*',<font></font>
    new workbox.strategies.NetworkOnly({<font></font>
        plugins: [<font></font>
            new workbox.backgroundSync.Plugin('myQueueName', {<font></font>
                maxRetentionTime: 24 * 60<font></font>
            })<font></font>
        ]<font></font>
    }),<font></font>
    'POST'<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">runtimeCaching工作正常。</font><font style="vertical-align: inherit;">但是当我取消注释importScripts并刷新页面时，在控制台中出现此错误：</font></font></p>

<pre><code>backsync called<font></font>
workbox-sw.js:1 Uncaught Error: Config must be set before accessing workbox.* modules<font></font>
    at Proxy.setConfig (workbox-sw.js:1)<font></font>
    at sw.js:8<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用nuxtjs实现pwa后台同步的任何示例将不胜感激。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常感谢你。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4140篇《如何使用nuxtjs / pwa实现后台同步？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
