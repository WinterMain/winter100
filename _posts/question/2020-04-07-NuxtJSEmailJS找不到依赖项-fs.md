---
layout: question
title:  NuxtJS：EmailJS找不到依赖项“ fs”
date:   2020-04-07T03:53:41.000Z
description: Goal️目标emailjs在NuxtJS应用程序中使用发送电子邮件。👾问题最初，fs尽管已安装，仍无法找到。This depend...
img: 
author: Tom凯
category: question
answer: 1
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Goal️目标</font></font></h1>

<p><font style="vertical-align: inherit;"></font><a href="https://github.com/eleith/emailjs" rel="nofollow noreferrer"><code>emailjs</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://nuxtjs.org/" rel="nofollow noreferrer"><code>NuxtJS</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序中</font><font style="vertical-align: inherit;">使用发送电子邮件</font><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">👾问题</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最初，</font></font><code>fs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管已安装，仍无法找到。</font></font></p>

<pre><code>This dependency was not found: fs in ./node_modules/emailjs/smtp/message.js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="https://stackoverflow.com/questions/40959835/webpack-express-cannot-resolve-module-fs-request-dependency-is-expression#40998972"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个类似的问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，应该通过增加</font></font><code>target: 'node'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来</font><font style="vertical-align: inherit;">解决这个问题</font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我已经</font></font><code>nuxt.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照</font></font><a href="https://nuxtjs.org/faq/extend-webpack" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上述</font></font><code>Nuxt.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方式</font></font></a> <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将上述配置注入</font><a href="https://nuxtjs.org/faq/extend-webpack" rel="nofollow noreferrer"><font style="vertical-align: inherit;">了</font></a></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但</font><em><font style="vertical-align: inherit;">我认为）</font></em><font style="vertical-align: inherit;">，但这会产生以下错误：</font></font></p>

<pre><code>WebpackOptionsValidationError: Invalid configuration object.<font></font>
Webpack has been initialised using a configuration object that<font></font>
does not match the API schema.<font></font>
  - configuration.module.rules[10] has an unknown property 'target'.<font></font>
    These properties are valid: object { enforce?, exclude?, include?,<font></font>
    issuer?, loader?, loaders?, oneOf?, options?, parser?, query?,<font></font>
    resource?, resourceQuery?, compiler?, rules?, test?, use? }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是否意味着当前不可能？</font><font style="vertical-align: inherit;">😱</font></font></p>

<hr>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">⌨️代码</font></font></h1>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nuxt.config.js</font></font></strong></p>

<pre><code>build: {<font></font>
  /*<font></font>
  ** Run ESLint on save<font></font>
  */<font></font>
  extend (config, { isDev, isClient }) {<font></font>
    config.module.rules.push({target: 'node'}) // &lt;-- Added this<font></font>
<font></font>
    if (isDev &amp;&amp; isClient) {<font></font>
      config.module.rules.push({<font></font>
        enforce: 'pre',<font></font>
        test: /\.(js|vue)$/,<font></font>
        loader: 'eslint-loader',<font></font>
        exclude: /(node_modules)/<font></font>
      })<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">投资价值</font></font></strong></p>

<pre><code>export default {<font></font>
  asyncData ( context ) {<font></font>
    let email = require('../node_modules/emailjs/email');<font></font>
<font></font>
    console.log('process.server', process.server); // Evalutes to true<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><strong>package.json</strong></p>

<pre><code>"dependencies": {<font></font>
  "emailjs": "^2.2.0",<font></font>
  "fs": "^0.0.1-security",<font></font>
  "net": "^1.0.2",<font></font>
  "nuxt": "^1.0.0",<font></font>
  "tls": "^0.0.1"<font></font>
},<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4132篇《NuxtJS：EmailJS找不到依赖项“ fs”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nuxt代码分为客户端部分和服务器部分。</font><font style="vertical-align: inherit;">您尝试</font></font><code>emailjs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在组件中</font><font style="vertical-align: inherit;">使用该库</font><font style="vertical-align: inherit;">，这是客户端部分。</font><font style="vertical-align: inherit;">它无法访问</font></font><code>fs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库（在Web中）。</font><font style="vertical-align: inherit;">您需要在服务器部分（例如在</font></font><code>express</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为您的页面提供服务</font><font style="vertical-align: inherit;">的服务器中）上编写它</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
