---
layout: question
title:  使用nuxt和\` nuxtjs / pwa的网站不缓存谷歌字体
date:   2020-03-23T07:57:42.000Z
description: 我使用创建了我的应用npx create-nuxt-app，然后添加了npm install \`nuxtjs/pwa --save。我在index.htm...
img: 
author: 樱
category: question
answer: 0
tags: 服务工作者 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用创建了我的应用</font></font><code>npx create-nuxt-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后添加了</font></font><code>npm install @nuxtjs/pwa --save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我在index.html中加入了Google字体，其中包括：</font></font></p>

<pre><code>&lt;link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" rel="stylesheet" data-n-head="true"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过在devtools /应用程序标签中点击“离线”复选框，然后重新加载，我在Chrome中以离线模式测试了我的应用程序。</font><font style="vertical-align: inherit;">除字体外，所有内容均被缓存。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我添加：</font></font></p>

<pre><code>workbox: {<font></font>
    runtimeCaching: [<font></font>
        {<font></font>
            urlPattern: 'https://fonts.googleapis.com/.*',<font></font>
            handler: 'cacheFirst',<font></font>
            method: 'GET'<font></font>
        },<font></font>
    ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>nuxt.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，但我无法缓存字体。</font><font style="vertical-align: inherit;">我在urlPattern上尝试了多种变体。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nuxt正在为我生成一个服务工作者，它看起来像这样：</font></font></p>

<pre><code>importScripts('/_nuxt/workbox.3de3418b.js')<font></font>
<font></font>
const workboxSW = new self.WorkboxSW({<font></font>
  "cacheId": "my-app",<font></font>
  "clientsClaim": true,<font></font>
  "directoryIndex": "/"<font></font>
})<font></font>
<font></font>
workboxSW.precache([<font></font>
  {<font></font>
    "url": "/_nuxt/app.bb74329360a7ee70c2af.js",<font></font>
    "revision": "8477c51cbf9d3188f34f1d61ec1ae6bc"<font></font>
  },<font></font>
  {<font></font>
    "url": "/_nuxt/layouts/default.ce9446c7c3fffa50cfd2.js",<font></font>
    "revision": "504d33b2d46614e60d919e01ec59bbc8"<font></font>
  },<font></font>
  {<font></font>
    "url": "/_nuxt/manifest.912c22076a54259e047d.js",<font></font>
    "revision": "a51a74b56987961c8d34afdcf4efa85c"<font></font>
  },<font></font>
  {<font></font>
    "url": "/_nuxt/pages/index.6bfd6741c6dfd79fd94d.js",<font></font>
    "revision": "1a80379a5d35d5d4084d4c2b85e1ee10"<font></font>
  },<font></font>
  {<font></font>
    "url": "/_nuxt/vendor.f681eb653617896fcd64.js",<font></font>
    "revision": "59c58901fd5142fdaac57cbee8c1aeb4"<font></font>
  }<font></font>
])<font></font>
<font></font>
<font></font>
workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')<font></font>
<font></font>
workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')<font></font>
<font></font>
workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workboxSW.strategies.cacheFirst({}), 'GET')<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么字体没有被缓存？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑＃1：感谢Jeff Posnick，我了解发生了什么。</font><font style="vertical-align: inherit;">我还没有找到正确的语法来传递</font></font><code>nuxt.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，但是作为一个实验，我</font></font><code>sw.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直接修改</font><font style="vertical-align: inherit;">了</font><font style="vertical-align: inherit;">文件并添加了以下两行：</font></font></p>

<pre><code>workboxSW.router.registerRoute(new RegExp('https://fonts.googleapis.com/.*'),<font></font>
    workboxSW.strategies.cacheFirst({cacheableResponse: {statuses: [0, 200]}}), <font></font>
    'GET')<font></font>
<font></font>
workboxSW.router.registerRoute(new RegExp('https://fonts.gstatic.com/.*'),<font></font>
    workboxSW.strategies.cacheFirst({cacheableResponse: {statuses: [0, 200]}}),<font></font>
    'GET')<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可行！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2967篇《使用nuxt和\` nuxtjs / pwa的网站不缓存谷歌字体》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
