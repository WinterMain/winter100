---
layout: question
title:  Webpack Express无法解析模块“ fs”，请求依赖关系为表达式
date:   2020-04-07T03:43:19.000Z
description: 当我在项目中包含Express时，尝试使用webpack进行编译时总是会遇到这些错误。webpack.config.dev.jsvar path ...
img: 
author: 樱小胖Mandy
category: question
answer: 2
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我在项目中包含Express时，尝试使用webpack进行编译时总是会遇到这些错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.dev.js</font></font></p>

<pre><code>var path = require("path")<font></font>
<font></font>
module.exports = {<font></font>
  entry: {<font></font>
    "server": "./server/server.ts"<font></font>
  },<font></font>
  output: {<font></font>
    path: path.resolve(__dirname, "dist"),<font></font>
    filename: "bundle.js",<font></font>
    publicPath: "/public/"<font></font>
  },<font></font>
  module: {<font></font>
    loaders: [<font></font>
      {<font></font>
        test: /\.ts(x?)$/,<font></font>
        exclude: /node_modules/,<font></font>
        loader: "ts-loader"<font></font>
      }, {<font></font>
        test: /\.js(x?)$/,<font></font>
        exclude: /node_modules/,<font></font>
        loader: "babel-loader"<font></font>
      }, {<font></font>
        test: /\.json$/,<font></font>
        loader: "json-loader"<font></font>
      }, {<font></font>
        test: /\.scss$/,<font></font>
        exclude: /node_modules/,<font></font>
        loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]<font></font>
      }, {<font></font>
        test: /\.css$/,<font></font>
        loader: ["style-loader", "css-loader", "postcss-loader"]<font></font>
      }, {<font></font>
        test: /\.(jpe?g|gif|png|svg)$/i,<font></font>
        loader: 'url-loader?limit=10000'<font></font>
      }<font></font>
    ]<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试过了：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装“ fs”，但不起作用</font></font></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读某处以更改节点fs属性。</font><font style="vertical-align: inherit;">它消除了错误警告，但我认为这不是一个很好的永久解决方案。</font></font></p>

<pre><code>module.exports = {<font></font>
  node: {<font></font>
    fs: "empty"<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时间：2496ms资产大小块块名称bundle.js 761 kB 0 [已发射]服务器bundle.js.map 956 kB 0 [已发射]服务器+ 119个隐藏模块</font></font></p>

<p>WARNING in ./~/express/lib/view.js
Critical dependencies:
78:29-56 the request of a dependency is an expression
 @ ./~/express/lib/view.js 78:29-56
ERROR in ./~/express/lib/view.js</p>

<p>Module not found: Error: Cannot resolve module 'fs' in /Users/clementoh/Desktop/boilerplate2/node_modules/express/lib
 @ ./~/express/lib/view.js 18:9-22
ERROR in ./~/send/index.js</p>

<p>Module not found: Error: Cannot resolve module 'fs' in /Users/clementoh/Desktop/boilerplate2/node_modules/send
     @ ./~/send/index.js 24:9-22
    ERROR in ./~/etag/index.js</p>

<p>Module not found: Error: Cannot resolve module 'fs' in /Users/clementoh/Desktop/boilerplate2/node_modules/etag
 @ ./~/etag/index.js 22:12-25
ERROR in ./~/destroy/index.js</p>

<p>Module not found: Error: Cannot resolve module 'fs' in /Users/clementoh/Desktop/boilerplate2/node_modules/destroy
 @ ./~/destroy/index.js 14:17-30
ERROR in ./~/mime/mime.js</p>

<p>Module not found: Error: Cannot resolve module 'fs' in /Users/clementoh/Desktop/boilerplate2/node_modules/mime
 @ ./~/mime/mime.js 2:9-22</p></li>
</ol></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4102篇《Webpack Express无法解析模块“ fs”，请求依赖关系为表达式》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过将</font></font><code>"target": "node",</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作品添加到中来</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">作品</font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是发布答案，因为不是每个人都阅读有关SO的评论。</font><font style="vertical-align: inherit;">@ Aurora0001钉了它。</font><font style="vertical-align: inherit;">Webpack的配置需要进行以下设置：</font></font></p>

<pre><code>"target": "node"
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
