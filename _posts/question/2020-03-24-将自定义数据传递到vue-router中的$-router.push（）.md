---
layout: question
title:  将自定义数据传递到vue-router中的$ router.push（）
date:   2020-03-24T02:11:42.000Z
description: 有没有办法将其他数据传递给$router.push()未在路由路径中注册为参数或查询的数据。这将使我在下一页上认识到它已通过编程导航访问，因为无法通过UR...
img: 
author: GO路易西门
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法将其他数据传递给</font></font><code>$router.push()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未在路由路径中注册为参数或查询的数据。</font><font style="vertical-align: inherit;">这将使我在下一页上认识到它已通过编程导航访问，因为无法通过URL传递它。</font><font style="vertical-align: inherit;">就像是：</font></font></p>

<pre><code>this.$router.push({<font></font>
   path: '/next-page', <font></font>
   params: {...}, <font></font>
   query: {...}, <font></font>
   moreData: {foo: 1}<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在</font></font><code>/next-page</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>this.$route.moreData.foo // 1
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，我正在使用</font></font><code>$store</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来处理</font></font><code>moreData</code></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3220篇《将自定义数据传递到vue-router中的$ router.push（）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
