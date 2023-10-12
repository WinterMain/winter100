---
layout: question
title:  我们可以制作不带.vue扩展组件和webpack的vue.js应用程序吗？
date:   2020-03-14T10:22:36.000Z
description: 注意：我们可以在不使用任何编译器的情况下编写vue.js大型应用程序的代码吗（例如当前我看到所有示例现在都使用webpack来使vue.js代码与浏览器兼...
img: 
author: Tom老丝Pro
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：我们可以在不使用任何编译器的情况下编写vue.js大型应用程序的代码吗（例如当前我看到所有示例现在都使用webpack来使vue.js代码与浏览器兼容）。</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在</font><font style="vertical-align: inherit;">不使用</font><font style="vertical-align: inherit;">扩展名的</font></font><code>vue.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">情况</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下</font><font style="vertical-align: inherit;">制作</font><font style="vertical-align: inherit;">应用程序</font></font><code>.vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">可能吗？</font><font style="vertical-align: inherit;">如果可能，您是否可以提供链接或给出示例，说明在这种情况下如何使用路由。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我们在</font></font><code>.vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展中制作组件时</font></font><code>.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以像在angular 1中那样</font><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">扩展中</font><font style="vertical-align: inherit;">制作组件</font><font style="vertical-align: inherit;">并使用应用程序，在那里我们可以制作整个应用程序而无需任何反编译器来转换代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以做到仅在html，css，js文件中，而没有webpack之类的东西。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我做了什么 。
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">index.js</font></font></strong></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html&gt;<font></font>
  &lt;head&gt;<font></font>
    &lt;meta charset="utf-8"&gt;<font></font>
    &lt;meta name="viewport" content="width=device-width,initial-scale=1.0"&gt;<font></font>
    &lt;title&gt;vueapp01&lt;/title&gt;<font></font>
  &lt;/head&gt;<font></font>
  &lt;body&gt;<font></font>
    &lt;div id="app"&gt;&lt;/div&gt;<font></font>
    &lt;!-- built files will be auto injected --&gt;<font></font>
  &lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">main.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   该文件在webpack加载时间中添加</font></font></p>

<pre><code>// The Vue build version to load with the `import` command<font></font>
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.<font></font>
import Vue from 'vue'<font></font>
import App from './App'<font></font>
import router from './router'<font></font>
<font></font>
Vue.config.productionTip = false<font></font>
<font></font>
/* eslint-disable no-new */<font></font>
new Vue({<font></font>
  el: '#app',<font></font>
  router,<font></font>
  components: { App },<font></font>
  template: '&lt;App/&gt;'<font></font>
})<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序</font></font></strong></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;div id="app"&gt;<font></font>
    &lt;img src="./assets/logo.png"&gt;<font></font>
    &lt;a href="#/hello"&gt;Hello route&lt;/a&gt;<font></font>
    &lt;a href="#/"&gt;Helloworld route&lt;/a&gt;<font></font>
    {{route}}<font></font>
    &lt;router-view/&gt;<font></font>
     &lt;!-- &lt;hello&gt;&lt;/hello&gt; --&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
<font></font>
export default {<font></font>
  name: 'App',<font></font>
  data () {<font></font>
    return {<font></font>
      route : "This is main page"<font></font>
    }<font></font>
  }<font></font>
<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路由器</font></font></strong></p>

<pre><code>import Vue from 'vue'<font></font>
import Router from 'vue-router'<font></font>
import HelloWorld from '@/components/HelloWorld'<font></font>
import Hello from '../components/Hello'<font></font>
<font></font>
Vue.use(Router)<font></font>
<font></font>
export default new Router({<font></font>
  routes: [<font></font>
    {<font></font>
      path: '/',<font></font>
      name: 'HelloWorld',<font></font>
      component: HelloWorld<font></font>
    },<font></font>
    {<font></font>
      path: '/hello',<font></font>
      name: 'Hello',<font></font>
      component: Hello<font></font>
    }<font></font>
  ]<font></font>
})<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我做了这样的事情。</font><font style="vertical-align: inherit;">我们可以仅使用html，css，js文件而不使用webpack来编译代码吗？</font><font style="vertical-align: inherit;">就像我们在角度1中所做的一样。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1612篇《我们可以制作不带.vue扩展组件和webpack的vue.js应用程序吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也已经开始学习vue.js，而且我对webpack和其他内容并不熟悉，我还想继续分离和使用.vue文件，因为它可以简化管理和代码编写工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到了这个库：</font><a href="https://github.com/FranckFreiburger/http-vue-loader" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://github.com/FranckFreiburger/http-vue-loader" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/FranckFreiburger/http-vue-loader</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及使用它的示例项目：</font><a href="https://github.com/kafkaca/vue-without-webpack" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://github.com/kafkaca/vue-without-webpack" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/kafkaca/vue-without-webpack</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用它，它似乎工作正常。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
