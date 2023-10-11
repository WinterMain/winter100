---
layout: question
title:  如何在nuxt的asyncData函数中访问vue存储
date:   2020-03-20T05:11:12.000Z
description: 在一个组件中，我想使用asyncData函数访问商店，如下所示：asyncData({ app, params }) {var url = \`htt...
img: 
author: 猿前端
category: question
answer: 1
tags: vuejs2 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在一个组件中，我想使用asyncData函数访问商店，如下所示：</font></font></p>

<pre><code>asyncData({ app, params }) {<font></font>
var url = `https://myapi/news/${app.$store.state.market}/detail/${params.id}`;<font></font>
return app.$axios.get(url).then(response =&gt; {<font></font>
  return { actu: response.data };<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">}</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但我收到“无法读取未定义的属性'状态'”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里还有另一个要接收商店状态的信息吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2462篇《如何在nuxt的asyncData函数中访问vue存储》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiHarry</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要从上下文中获取存储。</font></font><a href="https://nuxtjs.org/api/context/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考</font></font></a></p>

<pre><code>asyncData({ app, params, store }) {<font></font>
   var url = `https://myapi/news/${store.state.market}/detail/${params.id}`;<font></font>
   return app.$axios.get(url).then(response =&gt; {<font></font>
      return { actu: response.data };<font></font>
});<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
