---
layout: question
title:  Babel 7-ReferenceError：未定义regeneratorRuntime
date:   2020-04-03T02:48:49.000Z
description: 我有一个应用程序，它是节点后端和React前端。当我尝试构建/运行节点应用程序时出现以下错误。节点： v10.13.0错误：  dist...
img: 
author: 飞云
category: question
answer: 4
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个应用程序，它是节点后端和React前端。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我尝试构建/运行节点应用程序时出现以下错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点： </font></font><code>v10.13.0</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：</font></font></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dist / index.js：314 regeneratorRuntime.mark（function _callee（productId）{^</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ReferenceError：未定义regeneratorRuntime</font></font></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.babelrc</font></font></strong></p>

<pre><code>{<font></font>
    "presets": [    [<font></font>
        "@babel/preset-env", {<font></font>
          "targets": {<font></font>
            "node": "current"<font></font>
          },<font></font>
        }<font></font>
      ], "@babel/preset-react"],<font></font>
    "plugins": [<font></font>
        "@babel/plugin-proposal-class-properties"<font></font>
    ]<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.js</font></font></strong></p>

<pre><code>{<font></font>
        mode: "development",<font></font>
        entry: "./src/index.js",<font></font>
        target: "node",<font></font>
        externals: [nodeExternals()], // in order to ignore all modules in node_modules folder<font></font>
        stats: {<font></font>
            colors: true<font></font>
        },<font></font>
        devtool: "source-map",<font></font>
<font></font>
        output: {<font></font>
            path: path.resolve(__dirname, "dist"),<font></font>
            filename: "index.js",<font></font>
            sourceMapFilename: "index.js.map"<font></font>
        },<font></font>
        module: {<font></font>
            rules: [<font></font>
                {<font></font>
                    enforce: "pre",<font></font>
                    test: /\.js$/,<font></font>
                    exclude: /node_modules/,<font></font>
                    loader: "eslint-loader",<font></font>
                },<font></font>
                {<font></font>
                    test: /\.m?js$/,<font></font>
                    exclude: /(node_modules|bower_components)/,<font></font>
                    use: {<font></font>
                        loader: "babel-loader",<font></font>
                        options: {<font></font>
                            presets: ["@babel/preset-env"]<font></font>
                        }<font></font>
                    }<font></font>
                }<font></font>
            ],<font></font>
        },<font></font>
        node: {<font></font>
            __dirname: false,<font></font>
            __filename: false,<font></font>
        },<font></font>
<font></font>
        "plugins": [<font></font>
            new CleanWebpackPlugin(),<font></font>
            new WebpackShellPlugin({<font></font>
                onBuildStart: [],<font></font>
                onBuildEnd: ["nodemon dist/index.js"]<font></font>
            }),<font></font>
<font></font>
        ]<font></font>
<font></font>
    },<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></strong></p>

<pre><code> "dependencies": {<font></font>
    "connect": "^3.6.6",<font></font>
    "cors": "^2.8.5",<font></font>
    "dotenv": "^6.1.0",<font></font>
    "express": "^4.16.4",<font></font>
    "hellojs": "^1.17.1",<font></font>
    "i18n-iso-countries": "^3.7.8",<font></font>
    "morgan": "^1.9.1",<font></font>
    "react": "^16.6.3",<font></font>
    "react-dom": "^16.6.3",<font></font>
    "request": "^2.88.0",<font></font>
    "request-promise-native": "^1.0.5",<font></font>
    "serve-static": "^1.13.2",<font></font>
    "vhost": "^3.0.2"<font></font>
  },<font></font>
  "devDependencies": {<font></font>
    "@babel/cli": "^7.1.5",<font></font>
    "@babel/core": "^7.1.6",<font></font>
    "@babel/plugin-proposal-class-properties": "^7.1.0",<font></font>
    "@babel/preset-env": "^7.1.6",<font></font>
    "@babel/preset-react": "^7.0.0",<font></font>
    "babel-eslint": "^10.0.1",<font></font>
    "babel-loader": "^8.0.4",<font></font>
    "clean-webpack-plugin": "^1.0.0",<font></font>
    "copy-webpack-plugin": "^4.6.0",<font></font>
    "css-loader": "^1.0.1",<font></font>
    "eslint": "^5.9.0",<font></font>
    "eslint-config-google": "^0.10.0",<font></font>
    "eslint-loader": "^2.1.1",<font></font>
    "eslint-plugin-react": "^7.11.1",<font></font>
    "extract-loader": "^3.0.0",<font></font>
    "file-loader": "^2.0.0",<font></font>
    "node-sass": "^4.10.0",<font></font>
    "sass-loader": "^7.1.0",<font></font>
    "style-loader": "^0.23.1",<font></font>
    "webpack": "^4.26.0",<font></font>
    "webpack-cli": "^3.1.2",<font></font>
    "webpack-node-externals": "^1.7.2",<font></font>
    "webpack-shell-plugin": "^0.5.0"<font></font>
  }<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3919篇《Babel 7-ReferenceError：未定义regeneratorRuntime》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里已经有一个</font></font><a href="https://stackoverflow.com/a/53736090/2832282"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很好的答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（最初发布在Babel6问题上），我将翻译为Yarn。</font><font style="vertical-align: inherit;">基本上，您需要babel运行时（不作为dev依赖项）和插件transform-runtime</font></font></p>

<pre><code>yarn add @babel/runtime <font></font>
yarn add -D @babel/plugin-transform-runtime<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且，在.babelrc中，添加：</font></font></p>

<pre><code>{<font></font>
    "presets": ["@babel/preset-env"],<font></font>
    "plugins": [<font></font>
        ["@babel/transform-runtime"]<font></font>
    ]<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞泡芙</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的</font></font><code>react</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目中</font><font style="vertical-align: inherit;">出现这个错误，</font></font><code>webpack 4</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这阻止了整个项目的渲染。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我解决的方法：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装</font></font><code>plugin-transform-runtime</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>npm install @babel/plugin-transform-runtime -D
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font><code>plugin-transform-runtime</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>.babelrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">的插件列表中</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>{<font></font>
  "presets": [<font></font>
    "@babel/preset-env",<font></font>
    "@babel/preset-react"<font></font>
  ],<font></font>
  "plugins": [<font></font>
    ["@babel/transform-runtime"]  // &lt;= Add it here<font></font>
  ]  <font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将需要具有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">regeneratorRuntime</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装这两个软件包   </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-babel-plugin-transform-regenerator</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">babel-polyfill</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过添加以下Babel配置 </font></font><code>.babelrc</code></p>

<pre><code>{<font></font>
  "plugins": ["transform-regenerator"]<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React.js用户</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在使用react时（特别是在尝试使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Async / Wait时</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">遇到此问题</font><font style="vertical-align: inherit;">，那么</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Valentino Gagliardi</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://www.valentinog.com/blog/await-react/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他的博客</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上提供了</font><font style="vertical-align: inherit;">有关如何解决此问题</font><font style="vertical-align: inherit;">的详细方法</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
