---
layout: question
title:  vue v2，vue-router和cordova
date:   2020-03-12T06:06:44.000Z
description: 编辑因此，我发现这与路由器处于历史记录模式有关，如果我'mode'  'history',从router.js中删除，一切将再次正常！如果其他人有同样...
img: 
author: LGil泡芙
category: question
answer: 1
tags: 科尔多瓦 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我发现这与路由器处于历史记录模式有关，如果我</font></font><code>'mode': 'history',</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从router.js中</font><font style="vertical-align: inherit;">删除</font><font style="vertical-align: inherit;">，一切将再次正常！</font><font style="vertical-align: inherit;">如果其他人有同样的问题，或者有人可以提供解释，请离开这里。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原版的</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我无法将vue v2与vue-router和cordova一起使用（即</font></font><code>cordova/www</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从index.html文件</font><font style="vertical-align: inherit;">构建</font><font style="vertical-align: inherit;">并让cordova工作）。</font><font style="vertical-align: inherit;">我曾经能够使用vue和vue-router v1。</font><font style="vertical-align: inherit;">我也可以使用vue v2，但无需使用vue-router。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要明确的是，该应用程序</font></font><code>npm run dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅在不</font><font style="vertical-align: inherit;">使用build时才可以使用</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我觉得这与路由器正在寻找</font></font><code>/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但看到</font><font style="vertical-align: inherit;">的路径有关</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font></font></p>

<p><a href="https://github.com/adam-hanna/vue-router-cordova" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是您可以重现问题的存储库。</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是一些相关代码：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">main.js</font></font></strong></p>

<pre><code>import Vue from 'vue'<font></font>
import App from './App.vue'<font></font>
import router from './router/router.js'<font></font>
<font></font>
/* eslint-disable no-new */<font></font>
new Vue({<font></font>
  el: '#app',<font></font>
  router,<font></font>
  // replace the content of &lt;div id="app"&gt;&lt;/div&gt; with App<font></font>
  render: h =&gt; h(App)<font></font>
})<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序</font></font></strong></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;div id="app"&gt;<font></font>
    &lt;img src="./assets/logo.png"&gt;<font></font>
    &lt;router-view&gt;&lt;/router-view&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
import Hello from './components/Hello'<font></font>
<font></font>
export default {<font></font>
  name: 'app',<font></font>
  components: {<font></font>
    Hello<font></font>
  }<font></font>
}<font></font>
&lt;/script&gt;<font></font>
<font></font>
&lt;style&gt;<font></font>
#app {<font></font>
  font-family: 'Avenir', Helvetica, Arial, sans-serif;<font></font>
  -webkit-font-smoothing: antialiased;<font></font>
  -moz-osx-font-smoothing: grayscale;<font></font>
  text-align: center;<font></font>
  color: #2c3e50;<font></font>
  margin-top: 60px;<font></font>
}<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/router/router.js</font></font></strong></p>

<pre><code>import Vue from 'vue'<font></font>
import Router from 'vue-router'<font></font>
<font></font>
Vue.use(Router)<font></font>
<font></font>
import Hello from '../components/Hello'<font></font>
<font></font>
export default new Router({<font></font>
  'mode': 'history',<font></font>
  scrollBehavior: () =&gt; ({ y: 0 }),<font></font>
  'routes': [<font></font>
    {<font></font>
      'path': '/',<font></font>
      'component': Hello<font></font>
    }<font></font>
  ]<font></font>
})<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">config / index.js</font></font></strong></p>

<pre><code>// see http://vuejs-templates.github.io/webpack for documentation.<font></font>
var path = require('path')<font></font>
<font></font>
module.exports = {<font></font>
  build: {<font></font>
    env: require('./prod.env'),<font></font>
    index: path.resolve(__dirname, '../../cordova/www/index.html'),<font></font>
    assetsRoot: path.resolve(__dirname, '../../cordova/www'),<font></font>
    assetsSubDirectory: 'static',<font></font>
    assetsPublicPath: '',<font></font>
    productionSourceMap: true,<font></font>
    // Gzip off by default as many popular static hosts such as<font></font>
    // Surge or Netlify already gzip all static assets for you.<font></font>
    // Before setting to `true`, make sure to:<font></font>
    // npm install --save-dev compression-webpack-plugin<font></font>
    productionGzip: false,<font></font>
    productionGzipExtensions: ['js', 'css']<font></font>
  },<font></font>
  dev: {<font></font>
    env: require('./dev.env'),<font></font>
    port: 8080,<font></font>
    assetsSubDirectory: 'static',<font></font>
    assetsPublicPath: '/',<font></font>
    proxyTable: {},<font></font>
    // CSS Sourcemaps off by default because relative paths are "buggy"<font></font>
    // with this option, according to the CSS-Loader README<font></font>
    // (https://github.com/webpack/css-loader#sourcemaps)<font></font>
    // In our experience, they generally work as expected,<font></font>
    // just be aware of this issue when enabling this option.<font></font>
    cssSourceMap: false<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid番长十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能是从磁盘（“ file：//”）加载文件，而从“ file：//”加载文件时，浏览器历史记录API pushstate不起作用。</font><font style="vertical-align: inherit;">当您从路由器中删除“模式：历史记录”时，它可以工作，因为它默认使用散列。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
