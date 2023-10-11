---
layout: question
title:  节点/反应应用返回“ SyntaxError：意外的令牌导入”错误
date:   2020-03-24T07:54:45.000Z
description: 我是一个刚接触Node and React的新开发人员，所以在这个问题上scratch之以鼻。我今天在Google上搜索了5个多小时，并且用尽了此处和Gi...
img: 
author: Tom凯
category: question
answer: 1
tags: node.js React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是一个刚接触Node and React的新开发人员，所以在这个问题上scratch之以鼻。</font><font style="vertical-align: inherit;">我今天在Google上搜索了5个多小时，并且用尽了此处和GitHub上提出的每个解决方案，但无法解决我的问题，因此转而问一个新问题。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Heroku部署Node / React应用程序，但仍然看到以下错误消息： </font></font></p>

<pre><code>9:22:22 PM web.1 |  /Users/Captain_Kirk/Desktop/StarterApp/index.js:1<font></font>
9:22:22 PM web.1 |  (function (exports, require, module, __filename, __dirname) { import React, { Component } from 'react';<font></font>
9:22:22 PM web.1 |                                                                ^^^^^^<font></font>
9:22:22 PM web.1 |  SyntaxError: Unexpected token import<font></font>
9:22:22 PM web.1 |      at new Script (vm.js:51:7)<font></font>
9:22:22 PM web.1 |      at createScript (vm.js:136:10)<font></font>
9:22:22 PM web.1 |      at Object.runInThisContext (vm.js:197:10)<font></font>
9:22:22 PM web.1 |      at Module._compile (module.js:613:28)<font></font>
9:22:22 PM web.1 |      at Object.Module._extensions..js (module.js:660:10)<font></font>
9:22:22 PM web.1 |      at Module.load (module.js:561:32)<font></font>
9:22:22 PM web.1 |      at tryModuleLoad (module.js:501:12)<font></font>
9:22:22 PM web.1 |      at Function.Module._load (module.js:493:3)<font></font>
9:22:22 PM web.1 |      at Function.Module.runMain (module.js:690:10)<font></font>
9:22:22 PM web.1 |      at startup (bootstrap_node.js:194:16)<font></font>
9:22:22 PM web.1 Exited with exit code 1<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的package.json文件： </font></font></p>

<pre><code>{<font></font>
  "name": "StarterApp",<font></font>
  "version": "1.0.0",<font></font>
  "description": "test app",<font></font>
  "engines": {<font></font>
    "node": "9.8.0"<font></font>
  },<font></font>
  "main": "index.js",<font></font>
  "scripts": {<font></font>
    "start": "node index.js",<font></font>
    "dev": "node server.js"<font></font>
  },<font></font>
  "author": "",<font></font>
  "license": "ISC",<font></font>
  "dependencies": {<font></font>
    "fs-extra": "^5.0.0",<font></font>
    "ganache-cli": "^6.1.0",<font></font>
    "mocha": "^5.0.5",<font></font>
    "next": "^4.1.4",<font></font>
    "next-routes": "^1.4.1",<font></font>
    "npm": "^6.1.0",<font></font>
    "react": "^16.3.1",<font></font>
    "react-dom": "^16.3.1",<font></font>
    "semantic-ui-css": "^2.3.1",<font></font>
    "semantic-ui-react": "^0.79.1",<font></font>
    "solc": "^0.4.21",<font></font>
    "truffle-hdwallet-provider": "0.0.3",<font></font>
    "web3": "^1.0.0-beta.26",<font></font>
    "webpack-cli": "^2.0.13"<font></font>
  },<font></font>
  "devDependencies": {<font></font>
    "babel-cli": "^6.26.0",<font></font>
    "babel-preset-env": "^1.7.0",<font></font>
    "webpack": "^3.12.0"<font></font>
  },<font></font>
  "directories": {<font></font>
    "test": "test"<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我运行“ npm install”时，我看到以下警告： </font></font></p>

<pre><code>npm WARN deprecated babel-preset-es2015@6.24.1: 🙌  Thanks for using Babel: we recommend using babel-preset-env now: please read babeljs.io/env to update! 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">^我似乎已经有正确的预设，所以不确定为什么会显示此警告。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他npm警告： </font></font></p>

<pre><code>npm WARN deprecated nomnom@1.8.1: Package no longer supported. Contact support@npmjs.com for more info.<font></font>
npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.<font></font>
npm WARN webpack-cli@2.0.13 requires a peer of webpack@^4.0.0 but none is installed. You must install peer dependencies yourself.<font></font>
npm WARN kickstart@1.0.0 No repository field.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在这里做错了什么？  </font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3480篇《节点/反应应用返回“ SyntaxError：意外的令牌导入”错误》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点不允许使用快速关键字</font></font><strong><code>import</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而不是它使用</font></font><strong><code>require</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为替代的</font></font><code>import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望它对您有用。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
