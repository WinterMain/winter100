---
layout: question
title:  TypeError：CleanwebpackPlugin不是构造函数
date:   2020-03-11T12:20:11.000Z
description: 我正在尝试通过webpack-server-dev预览Vue Web应用程序。我正在遵循本指南  https //medium.com/the-web-...
img: 
author: SamStafan十三
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试通过webpack-server-dev预览Vue Web应用程序。我正在遵循本指南 
 </font></font><a href="https://medium.com/the-web-tub/creating-your-first-vue-js-pwa-project-22f7c552fb34" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://medium.com/the-web-tub/creating-your-first-vue-js-pwa-project -22f7c552fb34</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该指南说明该插件用于删除dist目录中的旧文件和未使用的文件。</font><font style="vertical-align: inherit;">我已经尝试更换</font></font><code>const CleanWebpackPlugin = require('clean-webpack-plugin')</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><code>const { CleanWebpackPlugin } = require('clean-webpack-plugin')</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中一些帖子建议。</font><font style="vertical-align: inherit;">我也尝试过查看</font></font><a href="https://github.com/johnagan/clean-webpack-plugin" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/johnagan/clean-webpack-plugin</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上的文档，</font><font style="vertical-align: inherit;">但是没有成功，因为我对此很陌生。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我尝试出现</font></font><code>npm run dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此错误</font></font></p>

<pre><code>    new CleanWebpackPlugin(['dist']),<font></font>
    ^<font></font>
<font></font>
TypeError: CleanWebpackPlugin is not a constructor<font></font>
    at module.exports (C:\Users\Eson\Desktop\pwa-vue-app-1\webpack.config.js:56:5)<font></font>
    at handleFunction (C:\Users\Eson\Desktop\pwa-vue-app-1\node_modules\webpack-cli\bin\utils\prepareOptions.js:21:13)<font></font>
    at prepareOptions (C:\Users\Eson\Desktop\pwa-vue-app-1\node_modules\webpack-cli\bin\utils\prepareOptions.js:9:5)<font></font>
    at requireConfig (C:\Users\Eson\Desktop\pwa-vue-app-1\node_modules\webpack-cli\bin\utils\convert-argv.js:119:14)<font></font>
    at C:\Users\Eson\Desktop\pwa-vue-app-1\node_modules\webpack-cli\bin\utils\convert-argv.js:125:17<font></font>
    at Array.forEach (&lt;anonymous&gt;)<font></font>
    at module.exports (C:\Users\Eson\Desktop\pwa-vue-app-1\node_modules\webpack-cli\bin\utils\convert-argv.js:123:15)<font></font>
    at Object.&lt;anonymous&gt; (C:\Users\Eson\Desktop\pwa-vue-app-1\node_modules\webpack-dev-server\bin\webpack-dev-server.js:79:40)<font></font>
    at Module._compile (internal/modules/cjs/loader.js:776:30)<font></font>
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:787:10)<font></font>
    at Module.load (internal/modules/cjs/loader.js:653:32)<font></font>
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)<font></font>
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)<font></font>
    at Function.Module.runMain (internal/modules/cjs/loader.js:829:12)<font></font>
    at startup (internal/bootstrap/node.js:283:19)<font></font>
    at bootstrapNodeJSCore (internal/bootstrap/node.js:622:3)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是webpack.config.js文件</font></font></p>

<pre><code>const path = require('path')<font></font>
<font></font>
const { VueLoaderPlugin } = require('vue-loader')<font></font>
const HtmlWebpackPlugin = require('html-webpack-plugin')<font></font>
const CopyWebpackPlugin = require('copy-webpack-plugin')<font></font>
const CleanWebpackPlugin = require('clean-webpack-plugin')<font></font>
<font></font>
module.exports = (env, argv) =&gt; ({<font></font>
  mode: argv &amp;&amp; argv.mode || 'development',<font></font>
  devtool: (argv &amp;&amp; argv.mode || 'development') === 'production' ? 'source-map' : 'eval',<font></font>
<font></font>
  entry: './src/app.js',<font></font>
<font></font>
  output: {<font></font>
    path: path.resolve(__dirname, 'dist'),<font></font>
    filename: '[name].js'<font></font>
  },<font></font>
<font></font>
  node: false,<font></font>
<font></font>
  module: {<font></font>
    rules: [<font></font>
      {<font></font>
        test: /\.vue$/,<font></font>
        loader: 'vue-loader'<font></font>
      },<font></font>
      {<font></font>
        test: /\.js$/,<font></font>
        loader: 'babel-loader'<font></font>
      },<font></font>
      {<font></font>
        test: /\.css$/,<font></font>
        use: [<font></font>
          'vue-style-loader',<font></font>
          'css-loader'<font></font>
        ],<font></font>
        exclude: /\.module\.css$/<font></font>
      }<font></font>
    ]<font></font>
  },<font></font>
<font></font>
  resolve: {<font></font>
    extensions: [<font></font>
      '.js',<font></font>
      '.vue',<font></font>
      '.json'<font></font>
    ],<font></font>
    alias: {<font></font>
      'vue$': 'vue/dist/vue.esm.js',<font></font>
      '@': path.resolve(__dirname, 'src')<font></font>
    }<font></font>
  },<font></font>
<font></font>
  plugins: [<font></font>
    new CleanWebpackPlugin(['dist']),<font></font>
    new VueLoaderPlugin(),<font></font>
    new HtmlWebpackPlugin({<font></font>
      template: path.resolve(__dirname, 'static', 'index.html'),<font></font>
      inject: true<font></font>
    }),<font></font>
    new CopyWebpackPlugin([{<font></font>
      from: path.resolve(__dirname, 'static'),<font></font>
      to: path.resolve(__dirname, 'dist'),<font></font>
      toType: 'dir'<font></font>
    }])<font></font>
  ],<font></font>
<font></font>
  optimization: {<font></font>
    splitChunks: {<font></font>
      chunks: 'all',<font></font>
      minSize: 30000,<font></font>
      maxSize: 0,<font></font>
      cacheGroups: {<font></font>
        vendors: {<font></font>
          test: /[\\/]node_modules[\\/]/,<font></font>
          priority: -10<font></font>
        },<font></font>
        default: {<font></font>
          minChunks: 2,<font></font>
          priority: -20,<font></font>
          reuseExistingChunk: true<font></font>
        }<font></font>
      }<font></font>
    },<font></font>
    runtimeChunk: {<font></font>
      name: entrypoint =&gt; `runtime~${entrypoint.name}`<font></font>
    },<font></font>
    mangleWasmImports: true,<font></font>
    removeAvailableModules: true,<font></font>
    removeEmptyChunks: true,<font></font>
    mergeDuplicateChunks: true<font></font>
  },<font></font>
<font></font>
  devServer: {<font></font>
    compress: true,<font></font>
    host: 'localhost',<font></font>
    https: true,<font></font>
    open: true,<font></font>
    overlay: true,<font></font>
    port: 9000<font></font>
  }<font></font>
});<font></font>
<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我在使用正确的导入时遇到的错误，如文档中所述：</font></font></p>

<pre><code>      throw new Error(`clean-webpack-plugin only accepts an options object. See:<font></font>
      ^<font></font>
<font></font>
Error: clean-webpack-plugin only accepts an options object. See:<font></font>
            https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional<font></font>
    at new CleanWebpackPlugin (C:\Users\Eson\Desktop\pwa-vue-app-1\node_modules\clean-webpack-plugin\dist\clean-webpack-plugin.js:27:13)<font></font>
    at module.exports (C:\Users\Eson\Desktop\pwa-vue-app-1\webpack.config.js:56:5)<font></font>
    at handleFunction (C:\Users\Eson\Desktop\pwa-vue-app-1\node_modules\webpack-cli\bin\utils\prepareOptions.js:21:13)<font></font>
    at prepareOptions (C:\Users\Eson\Desktop\pwa-vue-app-1\node_modules\webpack-cli\bin\utils\prepareOptions.js:9:5)<font></font>
    at requireConfig (C:\Users\Eson\Desktop\pwa-vue-app-1\node_modules\webpack-cli\bin\utils\convert-argv.js:119:14)<font></font>
    at C:\Users\Eson\Desktop\pwa-vue-app-1\node_modules\webpack-cli\bin\utils\convert-argv.js:125:17<font></font>
    at Array.forEach (&lt;anonymous&gt;)<font></font>
    at module.exports (C:\Users\Eson\Desktop\pwa-vue-app-1\node_modules\webpack-cli\bin\utils\convert-argv.js:123:15)<font></font>
    at Object.&lt;anonymous&gt; (C:\Users\Eson\Desktop\pwa-vue-app-1\node_modules\webpack-dev-server\bin\webpack-dev-server.js:79:40)<font></font>
    at Module._compile (internal/modules/cjs/loader.js:776:30)<font></font>
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:787:10)<font></font>
    at Module.load (internal/modules/cjs/loader.js:653:32)<font></font>
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)<font></font>
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)<font></font>
    at Function.Module.runMain (internal/modules/cjs/loader.js:829:12)<font></font>
    at startup (internal/bootstrap/node.js:283:19) <font></font>
</code></pre>

<p>if i delete line 56 in webpack.config.js i can run the web application without problems, but i want to understand the source of this issue</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第801篇《TypeError：CleanwebpackPlugin不是构造函数》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi泡芙Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对webpack不太熟悉，目前正在学习</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管下面的内容可以帮助我解决问题</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是卸载clean-webpack-plugin，然后在作为开发依赖项安装之前重新安装为依赖项</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载并像这样安装后：npm install --save clean-webpack-plugin</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并通过添加</font></font></p>

<pre><code>const { CleanWebpackPlugin } = require("clean-webpack-plugin");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决了我的问题！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望能帮助到你</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
