---
layout: question
title:  如何在vue-router中注册全局组件
date:   2020-03-13T09:11:51.000Z
description: 我在vue-cli中使用Vue.js。我选择了webpack设置。尽管找不到全局注册组件的方法，但我连接了main.js文件以进行路由。  main....
img: 
author: 村村达蒙LEY
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在vue-cli中使用Vue.js。</font><font style="vertical-align: inherit;">我选择了webpack设置。</font><font style="vertical-align: inherit;">尽管找不到全局注册组件的方法，但我连接了main.js文件以进行路由。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">main.js</font></font></p>

<pre><code>import Vue from 'vue'<font></font>
import VueRouter from 'vue-router'<font></font>
import App from './App'<font></font>
import Companies from './components/pages/Companies'<font></font>
import Income from './components/pages/Income'<font></font>
import Login from './components/pages/Login'<font></font>
<font></font>
Vue.use(VueRouter)<font></font>
<font></font>
let router = new VueRouter()<font></font>
<font></font>
router.map({<font></font>
  '/companies': {<font></font>
    component: Companies<font></font>
  },<font></font>
  '/income': {<font></font>
    component: Income<font></font>
  },<font></font>
  'login': {<font></font>
    component: Login<font></font>
  }<font></font>
})<font></font>
<font></font>
router.start(App, 'body')<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序</font></font></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;div&gt;<font></font>
    &lt;router-view&gt;&lt;/router-view&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
&lt;script&gt;<font></font>
import {Auth} from './lib/api'<font></font>
import Loader from './components/Loader'<font></font>
<font></font>
export default {<font></font>
  components: {<font></font>
    Loader<font></font>
  },<font></font>
  ready () {<font></font>
    Auth.isLoggedIn().then(<font></font>
      (response) =&gt; {<font></font>
        if (response.data === false) {<font></font>
          this.$router.go('/login')<font></font>
        } else {<font></font>
          this.$router.go('/companies')<font></font>
        }<font></font>
      },<font></font>
      (response) =&gt; {<font></font>
        this.$router.go('/login')<font></font>
      }<font></font>
    )<font></font>
  }<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些视图中使用Loader组件时，收到以下警告。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[Vue警告]：未知的自定义元素：-您是否正确注册了组件？</font><font style="vertical-align: inherit;">对于递归组件，请确保提供“名称”选项。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在组件中提供了名称，但没有任何区别。</font><font style="vertical-align: inherit;">我在登录视图中使用了loader-component。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我发现我应该在要使用的组件中定义该组件，或者在全局范围内定义它。</font><font style="vertical-align: inherit;">但是，我无法找到如何通过路由全局定义它。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1471篇《如何在vue-router中注册全局组件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
