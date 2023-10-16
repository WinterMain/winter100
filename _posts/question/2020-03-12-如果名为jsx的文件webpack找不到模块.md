---
layout: question
title:  如果名为jsx的文件，webpack找不到模块
date:   2020-03-12T08:30:18.000Z
description: 当我这样写webpack.config.js时 module.exports = {  entry  './index.jsx',  output...
img: 
author: JimHarry
category: question
answer: 3
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我这样写webpack.config.js时 </font></font></p>

<pre><code>module.exports = {<font></font>
  entry: './index.jsx',<font></font>
  output: {<font></font>
    filename: 'bundle.js'<font></font>
  },<font></font>
  module: {<font></font>
    loaders: [{<font></font>
      test: /\.jsx?$/,<font></font>
      exclude: /node_modules/,<font></font>
      loader: 'babel',<font></font>
      query: {<font></font>
        presets: ['es2015', 'react']<font></font>
      }<font></font>
    }]<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>index.jsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我导入一个</font></font><code>react</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块</font></font><code>App</code></p>

<pre><code>import React from 'react';<font></font>
import { render } from 'react-dom';<font></font>
<font></font>
import App from './containers/App';<font></font>
<font></font>
let rootElement = document.getElementById('box')<font></font>
render(<font></font>
  &lt;App /&gt;,<font></font>
  rootElement<font></font>
)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现是否在中命名了模块app </font></font><code>App.jsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后webpack会在</font></font><code>index.jsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中找不到模块</font></font><code>App</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是如果我在中命名了模块app </font></font><code>App.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将找到该模块并且运行良好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以，我对此感到困惑。</font><font style="vertical-align: inherit;">在我的中</font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我写</font></font><code>test: /\.jsx?$/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了检查文件，但是为什么</font></font><code>*.jsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找不到</font><font style="vertical-align: inherit;">命名的文件</font><font style="vertical-align: inherit;">？</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/12509/images/thumbnails/1584001817613.png" data-src="https://www.samyoc.com//uploads/users/12509/images/1584001817613.png"><img src="https://i.stack.imgur.com/cRtyD.png" alt="在此处输入图片说明"></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1135篇《如果名为jsx的文件，webpack找不到模块》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony猿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了提高可读性和复制粘贴编码。</font><font style="vertical-align: inherit;">这是</font></font><a href="https://stackoverflow.com/users/1657639/mr-rogers"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">罗杰斯先生</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此主题中发表</font><font style="vertical-align: inherit;">的webpack 4答案</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>module: {<font></font>
  rules: [<font></font>
    {<font></font>
      test: /\.(js|jsx)$/,<font></font>
      exclude: /node_modules/,<font></font>
      resolve: {<font></font>
        extensions: [".js", ".jsx"]<font></font>
      },<font></font>
      use: {<font></font>
        loader: "babel-loader"<font></font>
      }<font></font>
    },<font></font>
  ]<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">验证bundle.js是否已正确生成（检查任务运行器日志）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于组件渲染功能中html中的语法错误，我得到了“如果文件名为jsx则找不到模块”。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿前端猿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如@max的答案评论中提到的那样，对于Webpack 4，我发现我需要将其放入模块下列出的规则之一，如下所示：</font></font></p>

<pre><code>{<font></font>
  module: {<font></font>
    rules: [ <font></font>
      {<font></font>
        test: /\.jsx?$/, <font></font>
        resolve: {<font></font>
          extensions: [".js", ".jsx"]<font></font>
        },<font></font>
        include: ...<font></font>
      }<font></font>
    ]<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
