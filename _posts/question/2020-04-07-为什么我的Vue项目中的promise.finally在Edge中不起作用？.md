---
layout: question
title:  为什么我的Vue项目中的promise.finally在Edge中不起作用？
date:   2020-04-07T03:17:44.000Z
description: 让我的polyfill在Edge中工作时遇到了很大的麻烦。我尝试了各种失败的尝试来遵循文档。这似乎是有希望的。最后特别是那是行不通的。这是在vuex模块中...
img: 
author: 斯丁番长
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我的polyfill在Edge中工作时遇到了很大的麻烦。</font><font style="vertical-align: inherit;">我尝试了各种失败的尝试来遵循文档。</font><font style="vertical-align: inherit;">这似乎是有希望的。最后特别是那是行不通的。</font><font style="vertical-align: inherit;">这是在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vuex模块中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发生的，</font><font style="vertical-align: inherit;">因此我尝试将vuex添加到vue.config中的transpileDependencies，但是没有运气。</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/26802/images/thumbnails/1586229337015.png" data-src="https://www.samyoc.com//uploads/users/26802/images/1586229337015.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/jFEKA.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的babel.config.js：</font></font></p>

<pre><code>module.exports = {<font></font>
  presets: [['@vue/cli-plugin-babel/preset', {<font></font>
    useBuiltIns: 'entry',<font></font>
  }]],<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的main.js中，最顶部有以下两个导入：</font></font></p>

<pre><code>import 'core-js/stable';<font></font>
import 'regenerator-runtime/runtime';<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的vue.config.js</font></font></p>

<pre><code>// eslint-disable-next-line import/no-extraneous-dependencies<font></font>
const webpack = require('webpack');<font></font>
<font></font>
const isProd = process.env.NODE_ENV === 'production';<font></font>
<font></font>
module.exports = {<font></font>
  configureWebpack: {<font></font>
    // Set up all the aliases we use in our app.<font></font>
    plugins: [<font></font>
      new webpack.optimize.LimitChunkCountPlugin({<font></font>
        maxChunks: 6,<font></font>
      }),<font></font>
    ],<font></font>
  },<font></font>
  css: {<font></font>
    // Enable CSS source maps.<font></font>
    sourceMap: !isProd,<font></font>
  },<font></font>
  transpileDependencies: ['vuex'],<font></font>
};<font></font>
</code></pre>

<p>Note as mentioned above I have tried both with and without the transpileDepedencies. It says here <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app" rel="nofollow noreferrer">vue/babel-preset-app</a> that <code>es7.promise.finally</code> is included as a default polyfill</p>

<p>Versions:</p>

<ul>
<li>Microsoft Edge: 44.18</li>
<li>Microsoft EdgeHTML 18.18362</li>
<li>@vue/cli-plugin-babel": "^4.1.2"</li>
<li>"core-js": "^3.6.4"</li>
<li>"regenerator-runtime": "^0.13.3"</li>
</ul>

<p><strong>Update 13/02</strong></p>

<p>So I tried to type Promise.prototype on my site in edge and it does appear it is polyfilled: <a href="https://www.samyoc.com//uploads/users/26802/images/thumbnails/1586229337036.png" data-src="https://www.samyoc.com//uploads/users/26802/images/1586229337036.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/03P2m.png" alt="这里"></a></p>

<p>So currently I'm investigating if some part of my chain (axios/vue axios) does not return a promise. Since it is working in chrome I'm suspecting that a part of the chain is not being polyfilled correctly?</p>

<p>This is my entire chain:</p>

<pre><code>/* VUEX MODULE ACTION */  <font></font>
[a.ALL_CUSTOMERS](context) {<font></font>
    context.commit(m.SET_CUSTOMER_LOADING, true);<font></font>
    CustomerService.getAll()<font></font>
      .then(({ data }) =&gt; {<font></font>
        context.commit(m.SET_CUSTOMERS, data);<font></font>
      })<font></font>
      .finally(() =&gt; context.commit(m.SET_CUSTOMER_LOADING, false));<font></font>
  },<font></font>
<font></font>
/* CUSTOMER SERVICE */<font></font>
import ApiService from '@/common/api.service';<font></font>
const CustomerService = {<font></font>
  getAll() {<font></font>
    const resource = 'customers/';<font></font>
    return ApiService.get(resource);<font></font>
  },<font></font>
...<font></font>
}<font></font>
<font></font>
/* API SERVICE */<font></font>
import Vue from 'vue';<font></font>
import axios from 'axios';<font></font>
import VueAxios from 'vue-axios';<font></font>
<font></font>
const ApiService = {<font></font>
  init() {<font></font>
    Vue.use(VueAxios, axios);<font></font>
    let baseUrl = process.env.VUE_APP_APIURL;<font></font>
    Vue.axios.defaults.baseURL = baseUrl;<font></font>
  },<font></font>
<font></font>
  setHeader() {<font></font>
    Vue.axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;<font></font>
  },<font></font>
<font></font>
  get(resource) {<font></font>
    this.setHeader();<font></font>
    return Vue.axios.get(`${resource}`);<font></font>
  },<font></font>
  ...<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
