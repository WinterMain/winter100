---
layout: question
title:  如何在vue-router中访问异步存储数据以在beforeEnter挂钩中使用？
date:   2020-03-13T09:09:37.000Z
description: 如何访问beforeStore中通过store操作异步获取的存储数据？import store from './vuex/store';store...
img: 
author: 猴子神无
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何访问beforeStore中通过store操作异步获取的存储数据？</font></font></p>

<pre><code>import store from './vuex/store';<font></font>
<font></font>
store.dispatch('initApp'); // in here, async data will be fetched and assigned to the store's state<font></font>
<font></font>
// following is an excerpt of the routes object:<font></font>
{<font></font>
  path: '/example',<font></font>
  component: Example,<font></font>
  beforeEnter: (to, from, next) =&gt;<font></font>
  {<font></font>
    if (store.state.asyncData) {<font></font>
      // the above state is not available here, since it<font></font>
      // it is resolved asynchronously in the store action<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对于首次加载页面或重新加载页面后尤为重要，因为当正在读取初始数据并且路由器需要等待该数据以允许用户访问或不访问该页面时。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路由器是否有可能“等待”要提取的数据？</font><font style="vertical-align: inherit;">或者结合异步vuex存储数据处理导航卫士的最佳方法是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（哦，并且预先填充“ asyncData”不是解决方案，因为beforeEnter挂钩需要根据数据库中的实际数据（而非默认数据）做出决定）</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1464篇《如何在vue-router中访问异步存储数据以在beforeEnter挂钩中使用？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
