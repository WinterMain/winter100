---
layout: question
title:  如何将Webpack与Express一起使用？
date:   2020-03-23T13:59:46.000Z
description: 当我尝试将Webpack与简单的Express服务器一起使用时，我总是会收到大量错误：  express.js'use strict';var e...
img: 
author: 小卤蛋
category: question
answer: 1
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我尝试将Webpack与简单的Express服务器一起使用时，我总是会收到大量错误： 
 </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">express.js</font></font></strong></p>

<pre><code>'use strict';<font></font>
var express = require('express');<font></font>
var path = require('path');<font></font>
var url = require('url');<font></font>
<font></font>
<font></font>
// -------- my proxy----------------------<font></font>
var app = express();<font></font>
app.set('views', path.join(__dirname, 'views'));<font></font>
app.set('view engine', 'ejs');<font></font>
app.set('port', process.env.PORT || 8080);<font></font>
app.use(function logErrors(err, req, res, next) {<font></font>
        console.error(err.stack);<font></font>
        next(err);<font></font>
    }<font></font>
);<font></font>
<font></font>
app.listen(app.get('port'), function() {<font></font>
    console.info('Express server started at http://localhost:' + app.get('port'));<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我得到所有这些错误：</font></font></p>

<pre><code>Version: webpack 1.10.0<font></font>
Time: 1200ms<font></font>
  Asset    Size  Chunks             Chunk Names<font></font>
outfile  559 kB       0  [emitted]  main<font></font>
chunk    {0} outfile (main) 498 kB [rendered]<font></font>
    [0] ../app/server/express2.js 553 bytes {0} [built]<font></font>
     + 125 hidden modules<font></font>
<font></font>
WARNING in ../~/express/lib/view.js<font></font>
Critical dependencies:<font></font>
78:29-56 the request of a dependency is an expression<font></font>
 @ ../~/express/lib/view.js 78:29-56<font></font>
<font></font>
ERROR in ../~/express/lib/request.js<font></font>
Module not found: Error: Cannot resolve module 'net' in /Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/express/lib<font></font>
 @ ../~/express/lib/request.js 18:11-25<font></font>
<font></font>
ERROR in ../~/express/lib/view.js<font></font>
Module not found: Error: Cannot resolve module 'fs' in /Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/express/lib<font></font>
 @ ../~/express/lib/view.js 18:9-22<font></font>
<font></font>
ERROR in ../~/express/~/send/index.js<font></font>
Module not found: Error: Cannot resolve module 'fs' in /Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/express/node_modules/send<font></font>
 @ ../~/express/~/send/index.js 25:9-22<font></font>
<font></font>
ERROR in ../~/express/~/etag/index.js<font></font>
Module not found: Error: Cannot resolve module 'fs' in /Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/express/node_modules/etag<font></font>
 @ ../~/express/~/etag/index.js 22:12-25<font></font>
<font></font>
ERROR in ../~/express/~/send/~/destroy/index.js<font></font>
Module not found: Error: Cannot resolve module 'fs' in /Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/express/node_modules/send/node_modules/destroy<font></font>
 @ ../~/express/~/send/~/destroy/index.js 1:17-30<font></font>
<font></font>
ERROR in ../~/express/~/send/~/mime/mime.js<font></font>
Module not found: Error: Cannot resolve module 'fs' in /Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/express/node_modules/send/node_modules/mime<font></font>
 @ ../~/express/~/send/~/mime/mime.js 2:9-22<font></font>
<font></font>
ERROR in ../~/express/~/send/~/statuses/codes.json<font></font>
Module parse failed: /Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/express/node_modules/send/node_modules/statuses/codes.json Line 2: Unexpected token :<font></font>
You may need an appropriate loader to handle this file type.<font></font>
| {<font></font>
|   "100": "Continue",<font></font>
|   "101": "Switching Protocols",<font></font>
|   "102": "Processing",<font></font>
 @ ../~/express/~/send/~/statuses/index.js 2:12-35<font></font>
<font></font>
ERROR in ../~/express/~/send/~/mime/types.json<font></font>
Module parse failed: /Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/express/node_modules/send/node_modules/mime/types.json Line 1: Unexpected token :<font></font>
You may need an appropriate loader to handle this file type.<font></font>
<font></font>
|<font></font>
 @ ../~/express/~/send/~/mime/mime.js 87:12-35<font></font>
<font></font>
ERROR in ../~/express/~/accepts/~/mime-types/~/mime-db/db.json<font></font>
Module parse failed: /Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/express/node_modules/accepts/node_modules/mime-types/node_modules/mime-db/db.json Line 2: Unexpected token :<font></font>
You may need an appropriate loader to handle this file type.<font></font>
| {<font></font>
|   "application/1d-interleaved-parityfec": {<font></font>
|     "source": "iana"<font></font>
|   },<font></font>
 @ ../~/express/~/accepts/~/mime-types/~/mime-db/index.js 11:17-37<font></font>
<font></font>
ERROR in ../~/express/~/type-is/~/mime-types/~/mime-db/db.json<font></font>
Module parse failed: /Users/Dynopia/Development/DS_Stalker_Frontend/node_modules/express/node_modules/type-is/node_modules/mime-types/node_modules/mime-db/db.json Line 2: Unexpected token :<font></font>
You may need an appropriate loader to handle this file type.<font></font>
| {<font></font>
|   "application/1d-interleaved-parityfec": {<font></font>
|     "source": "iana"<font></font>
|   },<font></font>
 @ ../~/express/~/type-is/~/mime-types/~/mime-db/index.js 11:17-37<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的配置文件：</font></font></p>

<pre><code>var webpack = require('webpack');<font></font>
<font></font>
<font></font>
module.exports = {<font></font>
    // Makes sure errors in console map to the correct file<font></font>
    // and line number<font></font>
    devtool: 'eval',<font></font>
    entry: [<font></font>
        './bin/www.js'<font></font>
    ],<font></font>
    output: {<font></font>
        path: './bin/out',<font></font>
        filename: 'server.js'<font></font>
    },<font></font>
<font></font>
    extensions: [<font></font>
        '',<font></font>
        '.jsx', '.js'<font></font>
    ],<font></font>
<font></font>
    module: {<font></font>
<font></font>
        loaders: [<font></font>
            // Compile es6 to js.<font></font>
            {<font></font>
                test: /app\/.*\.js?$/,<font></font>
                loaders: [<font></font>
                    'react-hot',<font></font>
                    'babel-loader'<font></font>
                ]<font></font>
            }<font></font>
        ]<font></font>
    },<font></font>
<font></font>
    devtool: 'source-map'<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我该怎么办，我还需要在服务器端使用webpack。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我像这样运行express.js文件：
</font></font><code>./node_modules/webpack/bin/webpack.js ../app/server/express.js outfile --display-chunks -c --progress -d</code></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3115篇《如何将Webpack与Express一起使用？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我采用了一种简单的方法，该方法在中小型项目中可能会有用。</font><font style="vertical-align: inherit;">我这样做是为了使webpack可以充当ecma脚本和scss的捆绑器，尽管在这种方式下，我不使用热重装。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器配置是express generator提供的默认配置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.js</font></font></p>

<pre><code>const path = require("path");<font></font>
<font></font>
module.exports = {<font></font>
  entry: "./resources/index.js",<font></font>
  output: {<font></font>
    path: path.join(__dirname, "/public/dist"),<font></font>
    publicPath: "/public/dist",<font></font>
    filename: "main.js"<font></font>
  },<font></font>
  mode: "development",<font></font>
  module: {<font></font>
    rules: [<font></font>
      {<font></font>
        test: /\.js$/,<font></font>
        exclude: /node_modules/,<font></font>
        use: {<font></font>
          loader: "babel-loader"<font></font>
        }<font></font>
      },<font></font>
      {<font></font>
        test: /\.scss$/,<font></font>
        use: ["style-loader", "css-loader", "sass-loader"]<font></font>
      }<font></font>
    ]<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json是devDependencies</font></font></p>

<pre><code>"devDependencies": {<font></font>
    "@babel/core": "^7.6.4",<font></font>
    "@babel/preset-env": "^7.6.3",<font></font>
    "babel-loader": "^8.0.6",<font></font>
    "css-loader": "^3.2.0",<font></font>
    "mini-css-extract-plugin": "^0.8.0",<font></font>
    "node-sass": "^4.13.0",<font></font>
    "sass-loader": "^8.0.0",<font></font>
    "style-loader": "^1.0.0",<font></font>
    "webpack": "^4.41.2",<font></font>
    "webpack-cli": "^3.3.9"<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json是脚本</font></font></p>

<pre><code>"scripts": {<font></font>
    "start": "node ./bin/www",<font></font>
    "dev": "nodemon",<font></font>
    "build": "webpack",<font></font>
    "watch": "webpack --watch"<font></font>
  },<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
