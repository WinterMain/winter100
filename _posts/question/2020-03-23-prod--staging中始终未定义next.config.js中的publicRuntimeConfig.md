---
layout: question
title:  prod / staging中始终未定义next.config.js中的publicRuntimeConfig
date:   2020-03-23T14:07:49.000Z
description: 我正在部署一个节点项目，该项目使用next.js进行openshift设置环境变量MY_ENV。我已将publicRuntimeConfig配置添加到ne...
img: 
author: Stafan
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在部署一个节点项目，该项目使用next.js进行openshift设置环境变量MY_ENV。</font><font style="vertical-align: inherit;">我已将</font></font><code>publicRuntimeConfig</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">配置</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到next.config.js以访问它的客户端。</font><font style="vertical-align: inherit;">它工作在我的地方，但是当它的集装箱化和部署</font></font><code>publicRuntimeConfig</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我来自next.config.js的配置</font></font></p>

<pre><code>module.exports = {<font></font>
  publicRuntimeConfig: { // Will be available on both server and client<font></font>
      isProd: process.env.MY_ENV ? process.env.MY_ENV.includes('prod'): false,<font></font>
      isStaging: process.env.MY_ENV ? process.env.MY_ENV.includes('staging') : false<font></font>
    },<font></font>
  webpack: (config, { dev }) =&gt; {<font></font>
    const eslintRule = {<font></font>
      test: /\.js$/,<font></font>
      enforce: 'pre',<font></font>
      exclude: /node_modules/,<font></font>
      loader: 'eslint-loader',<font></font>
      options: {<font></font>
        emitWarning: dev,<font></font>
      },<font></font>
    };<font></font>
    const cssRule = {<font></font>
      test: /\.css$/,<font></font>
      use: {<font></font>
        loader: 'css-loader',<font></font>
        options: {<font></font>
          sourceMap: false,<font></font>
          minimize: true,<font></font>
        },<font></font>
      },<font></font>
    };<font></font>
<font></font>
    config.node = {<font></font>
      fs: 'empty'<font></font>
    };<font></font>
<font></font>
    config.module.rules.push(eslintRule);<font></font>
    config.module.rules.push(cssRule);<font></font>
    return config;<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是我试图在页面上获取publicRuntimeConfig的方式。</font></font></p>

<pre><code>import getConfig from 'next/config';<font></font>
const { publicRuntimeConfig } = getConfig();<font></font>
<font></font>
console.log(publicRuntimeConfig.isProd); //publicRuntimeConfig is undefined here. <font></font>
<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何帮助表示赞赏。</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新/修复</font></font></strong></p>
</blockquote>

<p><code>publicRuntimeConfig</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 在更高环境中未定义，因为它不是要部署的软件包的一部分。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
