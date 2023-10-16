---
layout: question
title:  将Vuex与Nuxt和Vue-Native-Websocket一起使用
date:   2020-03-27T12:19:32.000Z
description: 我正在尝试用来自websocket的数据填充我的vuex存储。我正在使用Nuxt。为了处理websocket，我使用了vue-native-websock...
img: 
author: 村村番长
category: question
answer: 0
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试用来自websocket的数据填充我的vuex存储。</font><font style="vertical-align: inherit;">我正在使用Nuxt。</font><font style="vertical-align: inherit;">为了处理websocket，我使用了vue-native-websocket包。</font><font style="vertical-align: inherit;">与websocket的连接成功，但无法提交到存储，它在每个套接字事件上触发错误</font></font><code>Uncaught TypeError: this.store[n] is not a function</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据Nuxt和vue-native-websocket文档，我使用它们的方式如下：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插件native-websocket.js：</font></font></p>

<pre><code>import Vue from 'vue'<font></font>
import VueNativeSock from 'vue-native-websocket'<font></font>
import store from '~/store'<font></font>
<font></font>
Vue.use(VueNativeSock, 'wss://dev.example.com/websocket/ws/connect', { store: store })<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nuxt.config.js</font></font></p>

<pre><code>  plugins: [<font></font>
   {src: '~plugins/native-websocket.js', ssr: false}<font></font>
],<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建立连接后，我得出一个结论，即程序包已正确连接，所以这与存储有关，我无法弄清问题所在</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UPD：经过一些解决方法后，我发现native-websocket.js中的日志存储返回 </font></font></p>

<pre><code>store() {<font></font>
  return new __WEBPACK_IMPORTED_MODULE_1_vuex__["default"].Store({<font></font>
   state: {...my store<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并提交给它，因此返回</font></font><code>__WEBPACK_IMPORTED_MODULE_2__store__.default.commit is not a function</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
webpack，正如我所见</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3820篇《将Vuex与Nuxt和Vue-Native-Websocket一起使用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
