---
layout: question
title:  推送到Vuex存储阵列在VueJS中不起作用
date:   2020-03-16T06:03:48.000Z
description: 我正在使用Vuex来显示“ store.js”中的用户列表。该js文件具有这样的数组。var store = new Vuex.Store({  s...
img: 
author: 逆天TomHarry
category: question
answer: 0
tags: Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Vuex来显示“ store.js”中的用户列表。</font><font style="vertical-align: inherit;">该js文件具有这样的数组。</font></font></p>

<pre><code>var store = new Vuex.Store({<font></font>
  state: {<font></font>
    customers: [<font></font>
      { id: '1', name: 'user 1',},<font></font>
    ]<font></font>
  }<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想向同一数组插入一组新值 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{id：“ 1”，名称：“ user 1”，}</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以上值是从URL（资源资源）获得的。</font><font style="vertical-align: inherit;">下面是将获得的数据推送到数组的代码。</font><font style="vertical-align: inherit;">但是，数据未插入</font></font></p>

<pre><code>mounted: function() {<font></font>
      this.$http.get('http://localhost/facebook-login/api/get_customers.php')<font></font>
      .then(response =&gt; {<font></font>
        return response.data;<font></font>
      })<font></font>
      .then(data =&gt; {<font></font>
        store.state.customers.push(data) // not working!!<font></font>
        console.log(data) // prints { id: '2', name: 'User 2',}<font></font>
        store.state.customers.push({ id: '2', name: 'User 2',})<font></font>
      });<font></font>
    }<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1731篇《推送到Vuex存储阵列在VueJS中不起作用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
