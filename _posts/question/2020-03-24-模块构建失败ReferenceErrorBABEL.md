---
layout: question
title:  模块构建失败：ReferenceError：\[BABEL\]
date:   2020-03-24T09:28:17.000Z
description: 我有这个配置package.json{  "name"  "app02",  "version"  "1.0.0",  "descripti...
img: 
author: 伽罗理查德
category: question
answer: 1
tags: reactjs Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有这个配置</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></strong></p>

<pre><code>{<font></font>
  "name": "app02",<font></font>
  "version": "1.0.0",<font></font>
  "description": "",<font></font>
  "main": "webpack.config.js",<font></font>
  "dependencies": {<font></font>
    "react": "^0.14.3"<font></font>
  },<font></font>
  "devDependencies": {<font></font>
    "babel-core": "^6.2.1",<font></font>
    "babel-loader": "^6.2.0",<font></font>
    "babel-preset-es2015": "^6.1.18"<font></font>
  },<font></font>
  "scripts": {<font></font>
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"<font></font>
  },<font></font>
  "author": "",<font></font>
  "license": "ISC",<font></font>
  "private": true<font></font>
}<font></font>
</code></pre>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.js</font></font></em></strong></p>

<pre><code>module.exports = {<font></font>
  entry: "./src/main.js",<font></font>
  output: {<font></font>
    path: __dirname + "/public",<font></font>
    filename: "bundle.js"<font></font>
  },<font></font>
  module: {<font></font>
    loaders: [<font></font>
      {<font></font>
        test: /\.jsx?$/,<font></font>
        exclude: /(node_modules|bower_components)/,<font></font>
        loader: 'babel',<font></font>
        query: {<font></font>
          presets: ['react', 'es2015']<font></font>
        }<font></font>
      }<font></font>
    ]<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">src / main.js</font></font></em></strong></p>

<pre><code>import React from 'react';<font></font>
import Greenting from './components/greeting';<font></font>
<font></font>
<font></font>
<font></font>
React.render(<font></font>
  &lt;Greeting name="World" /&gt;,<font></font>
  document.getElementById('content')<font></font>
);<font></font>
</code></pre>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">src / components / greeting.js</font></font></em></strong></p>

<pre><code>import React from 'react';<font></font>
<font></font>
export default React.createClass({<font></font>
  render: function(){<font></font>
    return (<font></font>
      &lt;div className="greeting"&gt;<font></font>
        Hello, {this.props.name}!<font></font>
      &lt;/div&gt;<font></font>
    )<font></font>
  }<font></font>
})<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在终端中</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">命令</font><font style="vertical-align: inherit;">时的问题</font></font></strong></p>

<pre><code>    ⇒  webpack<font></font>
    Hash: 396f0bfb9d565b6f60f0<font></font>
    Version: webpack 1.12.6<font></font>
    Time: 722ms<font></font>
        + 1 hidden modules<font></font>
<font></font>
    ERROR in ./src/main.js<font></font>
    Module build failed: ReferenceError: [BABEL] ~/app02/src/main.js: Unknown option: ~/app02/node_modules/react/react.js.Children<font></font>
        at Logger.error (~/app02/node_modules/babel-core/lib/transformation/file/logger.js:41:11)<font></font>
        at OptionManager.mergeOptions (~/app02/node_modules/babel-core/lib/transformation/file/options/option-manager.js:262:18)<font></font>
        at OptionManager.mergePresets (~/app02/node_modules/babel-core/lib/transformation/file/options/option-manager.js:325:16)<font></font>
        at OptionManager.mergeOptions (~/app02/node_modules/babel-core/lib/transformation/file/options/option-manager.js:287:12)<font></font>
        at OptionManager.init (~/app02/node_modules/babel-core/lib/transformation/file/options/option-manager.js:416:10)<font></font>
        at File.initOptions (~/app02/node_modules/babel-core/lib/transformation/file/index.js:190:75)<font></font>
        at new File (~/app02/node_modules/babel-core/lib/transformation/file/index.js:121:22)<font></font>
        at Pipeline.transform (~/app02/node_modules/babel-core/lib/transformation/pipeline.js:42:16)<font></font>
        at transpile (~/app02/node_modules/babel-loader/index.js:14:22)<font></font>
        at Object.module.exports (~/app02/node_modules/babel-loader/index.js:87:14)<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3558篇《模块构建失败：ReferenceError：\[BABEL\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Babel为React提供了一个单独的预设，请参阅</font></font><a href="http://babeljs.io/docs/plugins/preset-react/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://babeljs.io/docs/plugins/preset-react/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要安装此程序，请运行以下命令（这会将其添加到您的节点模块和package.json中的devDependencies）</font></font></p>

<pre><code>npm install --save-dev babel-preset-react
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
