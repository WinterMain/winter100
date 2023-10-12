---
layout: question
title:  Vue路由器错误：TypeError：无法读取未定义的“匹配”属性
date:   2020-03-13T07:36:48.000Z
description: 我正在尝试编写我的第一个Vuejs应用程序。我正在使用vue-cli和simple-webpack样板。当我将vue-router链接添加到我的应用程...
img: 
author: 番长前端
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试编写我的第一个Vuejs应用程序。</font><font style="vertical-align: inherit;">我正在使用</font></font><code>vue-cli</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://github.com/vuejs-templates/webpack-simple" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">simple-webpack样板</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我将</font></font><code>vue-router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到我的应用程序组件时，在控制台中出现此错误</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">呈现函数中的错误：“ TypeError：无法读取未定义的'匹配'属性”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的代码：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序</font></font></strong></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;div&gt;<font></font>
    &lt;h2&gt;Links&lt;/h2&gt;<font></font>
    &lt;ul&gt;<font></font>
      &lt;router-link to='/'&gt;Home&lt;/router-link&gt;<font></font>
      &lt;router-link to='/query'&gt;Query&lt;/router-link&gt;<font></font>
<font></font>
      &lt;router-view&gt;&lt;/router-view&gt;<font></font>
    &lt;/ul&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
    export default {}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">main.js</font></font></strong></p>

<pre><code>import Vue from 'vue'<font></font>
import VueRouter from 'vue-router'<font></font>
<font></font>
Vue.use(VueRouter)<font></font>
import routes from './routes.js'<font></font>
import App from './App.vue'<font></font>
<font></font>
const app = new Vue({<font></font>
  el: '#app',<font></font>
  routes,<font></font>
  render: h =&gt; h(App)<font></font>
})<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">routes.js</font></font></strong></p>

<pre><code>import VueRouter from 'vue-router';<font></font>
let routes=[<font></font>
  {<font></font>
    path: '/',<font></font>
    component: require('./Components/Home.vue')<font></font>
  },<font></font>
  {<font></font>
    path: '/query',<font></font>
    component: require('./Components/Query.vue')<font></font>
  }<font></font>
];<font></font>
<font></font>
export default new VueRouter({routes});<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1396篇《Vue路由器错误：TypeError：无法读取未定义的“匹配”属性》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐理查德</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vue和vue路由器并匹配错误和解决方案</font></font></h1>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">匹配错误</font></font></h2>

<p><img src="https://user-images.githubusercontent.com/7291672/58620365-7c933300-82f9-11e9-96da-db7ed221f0a7.png" alt="图片"></p>

<p><img src="https://user-images.githubusercontent.com/7291672/58620429-a3516980-82f9-11e9-9fa4-2398a493248b.png" alt="图片"></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解</font></font></h2>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">名称必须是 </font></font><code>router</code></p>
</blockquote>

<p><a href="https://stackoverflow.com/a/44618867/5934465"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/44618867/5934465</font></font></a></p>

<p><img src="https://user-images.githubusercontent.com/7291672/58620307-58cfed00-82f9-11e9-8109-2100561dfef8.png" alt="图片"></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好</font></font></p>
</blockquote>

<p><img src="https://user-images.githubusercontent.com/7291672/58620481-c11ece80-82f9-11e9-8369-203dc959ea10.png" alt="图片"></p>

<p><img src="https://user-images.githubusercontent.com/7291672/58620503-ce3bbd80-82f9-11e9-86fd-1f493b30c1f2.png" alt="图片"></p>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导入默认模块错误</font></font></h2>

<blockquote>
  <p><code>import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认模块不需要</font></font><code>{}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！</font></font></p>
</blockquote>

<p><img src="https://img2018.cnblogs.com/blog/740516/201905/740516-20190530164442778-433081486.png" alt=""></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
