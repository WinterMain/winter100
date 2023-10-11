---
layout: question
title:  Vue单元测试错误：vuex在此浏览器中需要Promise polyfill
date:   2020-03-19T03:53:28.000Z
description: 我使用创建了一个项目vue-cli，vuex并vue-router在其中添加了项目。我正在尝试为此设置单元测试，但出现以下错误。没有Vuex，它曾经可以工...
img: 
author: 理查德Itachi
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用创建了一个项目</font></font><code>vue-cli</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>vuex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>vue-router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在其中</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">了项目</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我正在尝试为此设置单元测试，但出现以下错误。</font><font style="vertical-align: inherit;">没有Vuex，它曾经可以工作。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PhantomJS 2.1.1（Mac OS X 0.0.0）错误</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：[vuex] vuex在此浏览器中需要Promise polyfill。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在webpack：///~~vuex/dist/vuex.js：145：0 &lt;-index.js：9871</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是相关的软件包版本：</font></font></p>

<pre><code>"babel-core": "^6.0.0",<font></font>
"babel-eslint": "^7.0.0",<font></font>
"babel-loader": "^6.0.0",<font></font>
"vue": "^2.1.0",<font></font>
"vue-router": "^2.0.3",<font></font>
"vuex": "^2.0.0",<font></font>
"vuex-router-sync": "^3.0.0"<font></font>
"karma": "^1.3.0",<font></font>
"karma-coverage": "^1.1.1",<font></font>
"karma-mocha": "^1.2.0",<font></font>
"karma-phantomjs-launcher": "^1.0.0",<font></font>
"karma-sinon-chai": "^1.2.0",<font></font>
"karma-sourcemap-loader": "^0.3.7",<font></font>
"karma-spec-reporter": "0.0.26",<font></font>
"karma-webpack": "^1.7.0",<font></font>
"webpack": "^1.13.2",<font></font>
"webpack-dev-middleware": "^1.8.3",<font></font>
"webpack-hot-middleware": "^2.12.2",<font></font>
"webpack-merge": "^0.14.1"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是karma.conf.js：</font></font></p>

<pre><code>// This is a karma config file. For more details see<font></font>
//   http://karma-runner.github.io/0.13/config/configuration-file.html<font></font>
// we are also using it with karma-webpack<font></font>
//   https://github.com/webpack/karma-webpack<font></font>
<font></font>
var path = require('path')<font></font>
var merge = require('webpack-merge')<font></font>
var baseConfig = require('../../build/webpack.base.conf')<font></font>
var utils = require('../../build/utils')<font></font>
var webpack = require('webpack')<font></font>
var projectRoot = path.resolve(__dirname, '../../')<font></font>
<font></font>
var webpackConfig = merge(baseConfig, {<font></font>
  // use inline sourcemap for karma-sourcemap-loader<font></font>
  module: {<font></font>
    loaders: utils.styleLoaders()<font></font>
  },<font></font>
  devtool: '#inline-source-map',<font></font>
  vue: {<font></font>
    loaders: {<font></font>
      js: 'isparta'<font></font>
    }<font></font>
  },<font></font>
  plugins: [<font></font>
    new webpack.DefinePlugin({<font></font>
      'process.env': require('../../config/test.env')<font></font>
    })<font></font>
  ]<font></font>
})<font></font>
<font></font>
// no need for app entry during tests<font></font>
delete webpackConfig.entry<font></font>
<font></font>
// make sure isparta loader is applied before eslint<font></font>
webpackConfig.module.preLoaders = webpackConfig.module.preLoaders || []<font></font>
webpackConfig.module.preLoaders.unshift({<font></font>
  test: /\.js$/,<font></font>
  loader: 'isparta',<font></font>
  include: path.resolve(projectRoot, 'src'),<font></font>
  exclude: /test\/unit|node_modules/<font></font>
})<font></font>
<font></font>
// only apply babel for test files when using isparta<font></font>
webpackConfig.module.loaders.some(function (loader, i) {<font></font>
  if (loader.loader === 'babel') {<font></font>
    loader.include = path.resolve(projectRoot, 'test/unit')<font></font>
    return true<font></font>
  }<font></font>
})<font></font>
<font></font>
module.exports = function (config) {<font></font>
  config.set({<font></font>
    // to run in additional browsers:<font></font>
    // 1. install corresponding karma launcher<font></font>
    //    http://karma-runner.github.io/0.13/config/browsers.html<font></font>
    // 2. add it to the `browsers` array below.<font></font>
    browsers: ['Chrome'],<font></font>
    frameworks: ['mocha', 'sinon-chai'],<font></font>
    reporters: ['spec', 'coverage'],<font></font>
    files: ['./index.js'],<font></font>
    preprocessors: {<font></font>
      './index.js': ['webpack', 'sourcemap']<font></font>
    },<font></font>
    webpack: webpackConfig,<font></font>
    webpackMiddleware: {<font></font>
      noInfo: true<font></font>
    },<font></font>
    coverageReporter: {<font></font>
      dir: './coverage',<font></font>
      reporters: [<font></font>
        { type: 'lcov', subdir: '.' },<font></font>
        { type: 'text-summary' }<font></font>
      ]<font></font>
    }<font></font>
  })<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2337篇《Vue单元测试错误：vuex在此浏览器中需要Promise polyfill》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
