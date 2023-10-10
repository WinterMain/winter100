---
layout: question
title:  将webpack worker-loader与nuxt.js结合使用
date:   2020-03-20T06:22:38.000Z
description: 我正在尝试在nuxt.js框架内使用Web Worker，但一直收到参考错误。ReferenceError  Worker is not defined。...
img: 
author: Tony凯
category: question
answer: 0
tags: webpack Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在</font></font><a href="https://nuxtjs.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nuxt.js框架</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内使用Web Worker，</font><font style="vertical-align: inherit;">但一直收到参考错误。</font></font><code>ReferenceError: Worker is not defined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经</font><font style="vertical-align: inherit;">通过npm </font><font style="vertical-align: inherit;">安装了</font></font><a href="https://github.com/webpack-contrib/worker-loader" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">worker-loader 1.1.1</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并向我添加了以下规则</font></font><code>nuxt.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint-override"><code>module.exports = {<font></font>
  build: {<font></font>
    extend (config, { isDev, isClient }) {<font></font>
      if (isDev &amp;&amp; isClient) {<font></font>
        config.module.rules.push({<font></font>
          enforce: 'pre',<font></font>
          test: /\.(js|vue)$/,<font></font>
          loader: 'eslint-loader',<font></font>
          exclude: /(node_modules)/<font></font>
        })<font></font>
      }<font></font>
      // Web Worker support<font></font>
      config.module.rules.push({<font></font>
        test: /\.worker\.js$/,<font></font>
        use: { loader: 'worker-loader' },<font></font>
        exclude: /(node_modules)/<font></font>
      })<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我通过</font></font><code>nuxt build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它</font><font style="vertical-align: inherit;">创建一个构建，</font><font style="vertical-align: inherit;">则好像已创建了Web worker文件。</font></font></p>

<pre><code>Asset                           Size                      <font></font>
2a202b9d805e69831a05.worker.js  632 bytes          [emitted]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将其导入vuex模块中，如下所示：</font></font></p>

<pre class="lang-js prettyprint-override"><code>import Worker from '~/assets/js/shared/Loader.worker.js'<font></font>
<font></font>
console.log(Worker)<font></font>
const worker = new Worker // &lt;- this line fails!<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在控制台中，我得到了一个看起来像创建工作者的函数的函数：</font></font></p>

<pre class="lang-js prettyprint-override"><code>ƒ () {<font></font>
  return new Worker(__webpack_require__.p + "345c16d02e75e9312f73.worker.js");<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在工作人员内部，我只有一些伪代码来查看它是否确实有效：</font></font></p>

<pre class="lang-js prettyprint-override"><code>const msg = 'world!'<font></font>
<font></font>
self.addEventListener('message', event =&gt; {<font></font>
  console.log(event.data)<font></font>
  self.postMessage({ hello: msg })<font></font>
})<font></font>
<font></font>
self.postMessage({ hello: 'from web worker' })<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2545篇《将webpack worker-loader与nuxt.js结合使用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
