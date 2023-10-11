---
layout: question
title:  babel-loader jsx SyntaxError：意外令牌\[重复\]
date:   2020-03-10T02:36:26.000Z
description:                                                                          ...
img: 
author: 西门Harry
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/33440405/babel-file-is-copied-without-being-transformed" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Babel文件被复制而不进行转换</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （10个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2016-11-18 21：30：58Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是React + Webpack的初学者。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Hello World Web应用程序中发现了一个奇怪的错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在webpack中使用babel-loader来帮助我将jsx转换为js，但是babel似乎无法理解jsx语法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的依赖项：</font></font></p>

<pre><code>"devDependencies": {<font></font>
  "babel-core": "^6.0.14",<font></font>
  "babel-loader": "^6.0.0",<font></font>
  "webpack": "^1.12.2",<font></font>
  "webpack-dev-server": "^1.12.1"<font></font>
},<font></font>
"dependencies": {<font></font>
  "react": "^0.14.1"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的 </font></font><code>webpack.config.js</code></p>

<pre><code>var path = require('path');<font></font>
module.exports = {<font></font>
  entry: ['webpack/hot/dev-server',path.resolve(__dirname, 'app/main.js')],<font></font>
  output: {<font></font>
    path: path.resolve(__dirname, 'build'),<font></font>
    filename: 'bundle.js'<font></font>
  },<font></font>
  module: {<font></font>
      loaders: [<font></font>
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}<font></font>
      ]<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的 </font></font><code>app/main.js</code></p>

<pre><code>var React = require("react");<font></font>
React.render(&lt;h1&gt;hello world&lt;/h1&gt;,document.getElementById("app"));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是错误消息</font></font></p>

<pre><code>ERROR in ./app/main.js<font></font>
Module build failed: SyntaxError: ~/**/app/main.js: Unexpected token (2:13)<font></font>
  1 | var React = require("react");<font></font>
&gt; 2 | React.render(&lt;h1&gt;hello world&lt;/h1&gt;,document.getElementById("app"));<font></font>
    |              ^<font></font>
at Parser.pp.raise (~/**/node_modules/babylon/lib/parser/location.js:24:13)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢你们</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第435篇《babel-loader jsx SyntaxError：意外令牌\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅卡卡西Eva</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些仍然可能会遇到问题的人，添加jsx来为我修复</font></font></p>

<pre><code>test: /\.jsx?$/,
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanTomTom</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，解决方案是</font></font><code>.babelrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下内容</font><font style="vertical-align: inherit;">创建文件</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>{<font></font>
  "presets": ["react", "es2015", "stage-1"]<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanHarry</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从babel 5迁移到babel 6时，我遇到了类似的问题。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是在运行babel将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">src</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编译</font><font style="vertical-align: inherit;">到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">lib</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹</font></font><code>babel src --out-dir lib</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将分享Babel 6的设置：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保您已</font><font style="vertical-align: inherit;">安装</font><font style="vertical-align: inherit;">以下babel 6 </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">devDependencies</font></font></strong><font style="vertical-align: inherit;"></font></p>

<pre><code>"babel-core": "^6.7.6",<font></font>
"babel-loader": "^6.2.4",<font></font>
"babel-preset-es2015": "^6.6.0",<font></font>
"babel-preset-react": "^6.5.0",<font></font>
"babel-preset-stage-0": "^6.5.0"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.babelrc</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到项目中：</font></font></p>

<pre><code>{<font></font>
  "presets": ["es2015", "stage-0", "react"]<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
