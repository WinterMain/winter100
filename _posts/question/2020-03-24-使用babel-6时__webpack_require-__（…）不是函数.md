---
layout: question
title:  使用babel 6时__webpack_require __（…）不是函数
date:   2020-03-24T10:25:38.000Z
description: 一切似乎都构建良好：具有以下配置的http //d.pr/i/1aZxR。但是，当我运行代码时，会出现以下错误（通过webpack-dev-serv...
img: 
author: 斯丁
category: question
answer: 2
tags: webpack Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一切似乎都构建良好：</font><font style="vertical-align: inherit;">
具有以下配置的</font></font><a href="http://d.pr/i/1aZxR"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://d.pr/i/1aZxR</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当我运行代码时，会出现以下错误（通过webpack-dev-server）：</font></font></p>

<pre><code>Uncaught TypeError: __webpack_require__(...) is not a function(anonymous function) @ login.js:4__webpack_require__ @ bootstrap 38790ff45722f55eb700?6a08:50(anonymous function) @ bootstrap.js:2363__webpack_require__ @ bootstrap 38790ff45722f55eb700?6a08:50(anonymous function) @ app.38790ff45722f55eb700.js:29__webpack_require__ @ bootstrap 38790ff45722f55eb700?6a08:50webpackJsonpCallback @ bootstrap 38790ff45722f55eb700?6a08:21(anonymous function) @ app.38790ff45722f55eb700.js:1<font></font>
angular.js:68 Uncaught Error: [$injector:modulerr] Failed to instantiate module app due to:<font></font>
Error: [$injector:nomod] Module 'app' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.<font></font>
http://errors.angularjs.org/1.4.7/$injector/nomod?p0=app<font></font>
    at http://localhost:3000/vendor.js:193:13<font></font>
    at http://localhost:3000/vendor.js:2111:18<font></font>
    at ensure (http://localhost:3000/vendor.js:2035:39)<font></font>
    at module (http://localhost:3000/vendor.js:2109:15)<font></font>
    at http://localhost:3000/vendor.js:4515:23<font></font>
    at forEach (http://localhost:3000/vendor.js:461:21)<font></font>
    at loadModules (http://localhost:3000/vendor.js:4499:6)<font></font>
    at createInjector (http://localhost:3000/vendor.js:4424:12)<font></font>
    at doBootstrap (http://localhost:3000/vendor.js:1782:21)<font></font>
    at bootstrap (http://localhost:3000/vendor.js:1803:13)<font></font>
http://errors.angularjs.org/1.4.7/$injector/modulerr?p0=app&amp;p1=Error%3A%20%…%20at%20bootstrap%20(http%3A%2F%2Flocalhost%3A3000%2Fvendor.js%3A1803%3A13)(anonymous function) @ angular.js:68(anonymous function) @ angular.js:4413forEach @ angular.js:336loadModules @ angular.js:4374createInjector @ angular.js:4299doBootstrap @ angular.js:1657bootstrap @ angular.js:1678angularInit @ angular.js:1572(anonymous function) @ angular.js:28899fire @ jquery.js:3099self.fireWith @ jquery.js:3211jQuery.extend.ready @ jquery.js:3417completed @ jquery.js:3433<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为babel正在</font></font><code>__webpack_require__</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">某种程度上进行</font><font style="vertical-align: inherit;">干扰，</font><font style="vertical-align: inherit;">但是我不确定。</font><font style="vertical-align: inherit;">我确实尝试过使用不同的转换/插件，但找不到解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.babelrc：</font></font></p>

<pre><code>{<font></font>
  "plugins":[<font></font>
    "transform-runtime",<font></font>
    "transform-node-env-inline"<font></font>
  ],<font></font>
  "presets":[<font></font>
    "stage-0",<font></font>
    "es2015"<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的webpack.config.js：</font></font></p>

<pre><code>var Clean = require('clean-webpack-plugin');<font></font>
var CompressionPlugin = require("compression-webpack-plugin");<font></font>
var ExtractTextPlugin = require("extract-text-webpack-plugin");<font></font>
var HtmlWebpackPlugin = require('html-webpack-plugin');<font></font>
var fs = require('fs');<font></font>
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');<font></font>
var path = require('path');<font></font>
var StatsPlugin = require('stats-webpack-plugin');<font></font>
var webpack = require('webpack');<font></font>
<font></font>
//CONSTANTS<font></font>
<font></font>
var NODE_ENV = process.env.NODE_ENV;<font></font>
var IS_DEV = NODE_ENV === 'development';<font></font>
var babelFile = fs.readFileSync('./.babelrc', 'utf8');<font></font>
var BABELRC = JSON.parse(babelFile);<font></font>
var cleanFonts = function(){<font></font>
  return new Clean(['dist/tmp/*.{ttf,eot,svg,woff}']);<font></font>
}<font></font>
var cleanImages = function(){<font></font>
  return new Clean(['dist/tmp/*.{png,jpg}']);<font></font>
}<font></font>
var cleanJs = function(){<font></font>
  return new Clean(['dist/*.{js,map}']);<font></font>
}<font></font>
var plugins = [<font></font>
  new webpack.NoErrorsPlugin(),<font></font>
  cleanJs(),<font></font>
  // new StatsPlugin('stats.json', {chunkModules: true}),<font></font>
  new webpack.ProvidePlugin({$: "jquery",jQuery: "jquery","window.jQuery": "jquery" }),<font></font>
  new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),<font></font>
  new HtmlWebpackPlugin({<font></font>
    template: 'client/app/vendors/assets/index-tmpl.html',<font></font>
    filename: 'index.html'<font></font>
  }),<font></font>
  new webpack.optimize.CommonsChunkPlugin({<font></font>
    name: 'vendor',<font></font>
    filename: 'vendor.js',<font></font>
    chunks:['customer','personalOrganization','app']<font></font>
  })<font></font>
  // new ngAnnotatePlugin({add: true})<font></font>
  // new ExtractTextPlugin("style.[hash].css", {<font></font>
  //    disable: false,<font></font>
  //    allChunks: true<font></font>
  // }),<font></font>
<font></font>
  //new webpack.optimize.CommonsChunkPlugin({minChunks: 2, children: true, async: true}),<font></font>
  // new CompressionPlugin({asset: "{file}.gz", algorithm: "gzip", regExp: /\.js$|\.html$/, threshold: 10240, minRatio: 0.8 })<font></font>
];<font></font>
var dev_plugins = [<font></font>
]<font></font>
var prod_plugins = [<font></font>
  cleanFonts(),<font></font>
  cleanImages(),<font></font>
  new webpack.optimize.UglifyJsPlugin({<font></font>
    minimize: true,<font></font>
    sourceMap: false,<font></font>
    compress: { warnings: false },<font></font>
    mangle: false<font></font>
  }),<font></font>
  new webpack.optimize.DedupePlugin(),<font></font>
  new webpack.optimize.AggressiveMergingPlugin()<font></font>
];<font></font>
if(NODE_ENV !== 'development'){<font></font>
  plugins = plugins.concat(prod_plugins);<font></font>
}<font></font>
else{<font></font>
  plugins = plugins.concat(dev_plugins);<font></font>
}<font></font>
babelLoaderOpts = {<font></font>
  cacheDirectory: true<font></font>
};<font></font>
Object.assign(babelLoaderOpts, BABELRC);<font></font>
module.exports = {<font></font>
  cache: IS_DEV,<font></font>
  // watch: IS_DEV,<font></font>
  devtool: 'source-map',<font></font>
  entry: {<font></font>
    "app": "./client/app/app.js",<font></font>
    "devserver": 'webpack-dev-server/client?http://localhost:3000'<font></font>
  },<font></font>
  output: {<font></font>
      path: __dirname + "/dist",<font></font>
      filename: '[name].[hash].js'<font></font>
  },<font></font>
  module: {<font></font>
        noParse: [<font></font>
          /moment.js/<font></font>
        ],<font></font>
        loaders: [<font></font>
            { test: require.resolve("jquery"), loader: "expose?$!expose?jQuery" },<font></font>
            {<font></font>
              test: /\.js$/,<font></font>
              exclude: /(node_modules|bower_components|vendors)/,<font></font>
              loader: 'babel',<font></font>
              query: babelLoaderOpts<font></font>
            },<font></font>
            { test: /\.html$/, loader: 'raw' },<font></font>
            { test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded"+"&amp;includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib")},<font></font>
            { test: /\.css$/,  loader: 'style!css' },<font></font>
            { test: /\.(png|jpeg|jpg|gif)$/, loader: 'url-loader?limit=30000&amp;name=tmp/[name].[ext]&amp;no_emit_env=development'},<font></font>
            { test: /\.woff(\?\S*)?$/,  loader : 'url?prefix=font/&amp;limit=10000&amp;mimetype=application/font-woff&amp;name=tmp/[name].[ext]&amp;no_emit_env=development'},<font></font>
            { test: /\.woff2/, loader: 'url?prefix=font/&amp;limit=100000&amp;mimetype=application/font-woff2&amp;name=tmp/[name].[ext]&amp;no_emit_env=development' },<font></font>
            { test: /\.ttf/,   loader : 'file?prefix=font/&amp;name=tmp/[name].[ext]&amp;no_emit_env=development'},<font></font>
            { test: /\.eot/,   loader : 'file?prefix=font/&amp;name=tmp/[name].[ext]&amp;no_emit_env=development'},<font></font>
            { test: /\.svg/,loader : 'file?prefix=font/&amp;name=tmp/[name].[ext]&amp;no_emit_env=development'},<font></font>
            //{ test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?modules&amp;importLoaders=2&amp;sourceMap!sass?outputStyle=expanded&amp;sourceMap=true&amp;sourceMapContents=true&amp;&amp;includePaths[]='+ path.resolve(__dirname, './node_modules/compass-mixins/lib')) },<font></font>
            //{ test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }<font></font>
      ]<font></font>
  },<font></font>
  devServer: {<font></font>
    contentBase: './client/app'<font></font>
  },<font></font>
  resolve: {<font></font>
      modulesDirectories: ['vendors','node_modules', 'bower_components'],<font></font>
      extensions: ['', '.js', '.json']<font></font>
  },<font></font>
  plugins: plugins<font></font>
};<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3649篇《使用babel 6时__webpack_require __（…）不是函数》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过在webpack.config中添加缺少的加载器解决了类似的问题。</font><font style="vertical-align: inherit;">不知道为什么这可以解决问题，但是您可能还想看看是否缺少装载程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（请清楚地说-我最初发现问题是在我将库降级到早期版本时出现的加载器问题。Webpack错误消息说缺少json加载器，因此我在配置中添加了以下内容，并且然后就可以回到最新版本：</font></font></p>

<pre><code>module:{<font></font>
loaders : [<font></font>
  {<font></font>
      test: /\.json$/,<font></font>
      loader: "json-loader"<font></font>
    }<font></font>
]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村古一</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为从需求到导入的建议解决方案是不正确的。</font><font style="vertical-align: inherit;">导入需要在文件的顶部进行，因此，您无法使生产版本忽略devtools。</font><font style="vertical-align: inherit;">您需要一个有条件的需求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为</font></font><a href="https://github.com/59naga/babel-plugin-add-module-exports" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">babel-plugin-add-module-exports</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决了这个问题。</font><font style="vertical-align: inherit;">看看这个</font></font><a href="https://github.com/davezuko/react-redux-starter-kit" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-redux-starter-kit</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看看它在项目中的用法。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
