---
layout: question
title:  Webpack-dev-server不会生成源映射
date:   2020-03-24T03:13:06.000Z
description: 我使用babel-loader，但无法弄清楚如何生成或在何处找到已编译文件的源映射。我试过eval-source-map，inline-source-ma...
img: 
author: 番长樱梅
category: question
answer: 5
tags: webpack Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font></font><a href="https://github.com/babel/babel-loader"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">babel-loader</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但无法弄清楚如何生成或在何处找到已编译文件的源映射。</font><font style="vertical-align: inherit;">我试过</font></font><code>eval-source-map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>inline-source-map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>source-map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.js</font></font></strong></p>

<pre><code>const BowerWebpackPlugin = require("bower-webpack-plugin");<font></font>
<font></font>
module.exports = {<font></font>
    entry: './src/script/index.jsx',<font></font>
    output: {<font></font>
        filename: 'bundle.js',<font></font>
        sourceMapFilename: "bundle.js.map",<font></font>
        publicPath: 'http://localhost:8090/assets'<font></font>
    },<font></font>
    debug: true,<font></font>
    devtool: 'inline-source-map',<font></font>
    module: {<font></font>
        loaders: [<font></font>
            {   <font></font>
                test: /\.js[x]?$/, <font></font>
                loaders: ['react-hot', 'jsx', 'babel'],<font></font>
                exclude: /node_modules/ <font></font>
              },<font></font>
              {<font></font>
                test: /\.scss$/,<font></font>
                loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]<font></font>
              },<font></font>
              {<font></font>
                test: /\.less$/,<font></font>
                loaders: [ 'style', 'css?sourceMap', 'less?sourceMap' ]<font></font>
              },<font></font>
              {<font></font>
                test: /\.css$/,<font></font>
                loaders: [ 'style', 'css']<font></font>
              },<font></font>
              { test: /\.woff$/,   loader: "url-loader?limit=10000&amp;mimetype=application/font-woff" },<font></font>
              { test: /\.woff2$/,   loader: "url-loader?limit=10000&amp;mimetype=application/font-woff2" },<font></font>
              { test: /\.(eot|ttf|svg|gif|png)$/,    loader: "file-loader" }<font></font>
        ]<font></font>
    },<font></font>
    plugins: [<font></font>
        new BowerWebpackPlugin()<font></font>
    ],<font></font>
    externals: {<font></font>
        //don't bundle the 'react' npm package with our bundle.js<font></font>
        //but get it from a global 'React' variable<font></font>
        'react': 'React'<font></font>
    },<font></font>
    resolve: {<font></font>
        extensions: ['', '.js', '.jsx']<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></strong></p>

<pre><code>    {<font></font>
    "name": "Won",<font></font>
    "version": "0.0.1",<font></font>
    "description": "Internal evidence application",<font></font>
    "main": "index.jsx",<font></font>
    "scripts": {<font></font>
        "start": "npm run serve | npm run dev",<font></font>
        "serve": "./node_modules/.bin/http-server -p 8080",<font></font>
        "dev": "webpack-dev-server -d --progress --colors --port 8090"<font></font>
    },<font></font>
    "author": "And",<font></font>
    "license": "ISC",<font></font>
    "devDependencies": {<font></font>
        "babel-core": "^5.8.23",<font></font>
        "babel-loader": "^5.3.2",<font></font>
        "bootstrap": "^3.3.5",<font></font>
        "bootstrap-select": "^1.7.3",<font></font>
        "bootstrap-table": "^1.8.1",<font></font>
        "bower-webpack-plugin": "^0.1.8",<font></font>
        "colresizable": "^1.5.2",<font></font>
        "css-loader": "^0.16.0",<font></font>
        "events": "^1.0.2",<font></font>
        "extract-text-webpack-plugin": "^0.8.2",<font></font>
        "file-loader": "^0.8.4",<font></font>
        "flux": "^2.1.1",<font></font>
        "http-server": "^0.8.0",<font></font>
        "jquery": "^2.1.4",<font></font>
        "jquery-ui": "^1.10.5",<font></font>
        "json-markup": "^0.1.6",<font></font>
        "jsx-loader": "^0.13.2",<font></font>
        "less": "^2.5.1",<font></font>
        "less-loader": "^2.2.0",<font></font>
        "lodash": "^3.10.1",<font></font>
        "node-sass": "^3.2.0",<font></font>
        "object-assign": "^4.0.1",<font></font>
        "path": "^0.11.14",<font></font>
        "react": "^0.13.3",<font></font>
        "react-hot-loader": "^1.2.9",<font></font>
        "sass-loader": "^2.0.1",<font></font>
        "style-loader": "^0.12.3",<font></font>
        "svg-sprite-loader": "0.0.2",<font></font>
        "url-loader": "^0.5.6",<font></font>
        "webpack": "^1.12.0",<font></font>
        "webpack-dev-server": "^1.10.1"<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：// </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">毕竟，这</font></font><a href="http://pastebin.com/MH7WHGKG"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和此</font></font><a href="http://pastebin.com/HwJCS4R3"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我</font><a href="http://pastebin.com/MH7WHGKG"><font style="vertical-align: inherit;">有用</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑2：//</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在我使用</font></font><a href="http://andrejgajdos.com/setting-up-webpack-for-es6-react-sass-and-bootstrap/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个webpack配置</font></font></a> </p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3288篇《Webpack-dev-server不会生成源映射》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用 </font></font><code>webpack-dev-server -d</code></strong></p>

<ul>
<li><code>-d</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的简写</font></font><code>--debug --devtool source-map --output-pathinfo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><p><code>output-pathinfo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在生成的捆绑软件中添加注释，以说明哪些模块/文件包含在什么位置。</font><font style="vertical-align: inherit;">因此，在生成的代码中，将注释添加到以下代码行：</font></font><code>require(/* ./test */23)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这表示</font></font><code>23</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指向</font></font><code>test</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块。</font><font style="vertical-align: inherit;">当您查看Webpack生成的代码时，这最有帮助，而逐步调试器时则没有太大帮助。</font><font style="vertical-align: inherit;">我</font></font><a href="https://webpack.github.io/docs/configuration.html#output-pathinfo"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从相关的文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">得到了这个示例</font><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这全部有效，因为</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接受与相同的所有标志</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></li>
<li><a href="https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">详细信息，</font><a href="https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli"><font style="vertical-align: inherit;">请参阅文档中的此部分</font></a><font style="vertical-align: inherit;">。</font></font></li>
</ul>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提示与陷阱</font></font></h2>

<ul>
<li><code>--content-base</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-默认情况下，开发服务器将在运行命令的目录中提供文件。如果构建文件位于中</font></font><code>build/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则需要指定，</font></font><code>--content-base build/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以便开发服务器将在</font></font><code>build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录中</font><font style="vertical-align: inherit;">提供文件</font></font></li>
<li><code>--inline</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -只要您保存文件并进行一些更改，就会自动重新加载！</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin小卤蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请在您的webpack.config.js文件中添加以下内容`</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">devtool：“＃inline-source-map”，</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以从webpack的站点上找到有关它的清晰信息，网址为</font></font><a href="https://webpack.github.io/docs/configuration.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://webpack.github.io/docs/configuration.html</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，请从webpack网站上找到Sourcemap部分的随附屏幕截图。</font></font></p>

<p><img src="https://i.stack.imgur.com/rJo6d.png" alt="在此处输入图片说明"></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云泡芙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font><code>{devtool:"source-map"}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到您的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.js</font></font></strong></p>

<p><font style="vertical-align: inherit;"><a href="https://webpack.js.org/configuration/devtool/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">在这里</font></a><font style="vertical-align: inherit;">查看更多</font></font><a href="https://webpack.js.org/configuration/devtool/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我所做的就是改变：</font></font></p>

<pre><code>// package.json<font></font>
{<font></font>
    ...<font></font>
    **from** "dev:serve": "webpack-dev-server",<font></font>
    **to** "dev:serve": "webpack-dev-server -d",<font></font>
    ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相当于： </font></font><code>$ webpack-dev-server -d</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我可以</font></font><code>Ctrl + p</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Chrome </font><font style="vertical-align: inherit;">中使用它</font><font style="vertical-align: inherit;">，并且</font><font style="vertical-align: inherit;">可以</font><font style="vertical-align: inherit;">看到我的ES6语法来设置断点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">信息</font></font></p>

<pre><code>$ webpack-dev-server --version<font></font>
webpack-dev-server 2.9.7<font></font>
webpack 3.10.0<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用 </font></font><code>webpack -d</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>d</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志代表开发快捷方式，它启用了所有开发人员工具，例如源映射。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
