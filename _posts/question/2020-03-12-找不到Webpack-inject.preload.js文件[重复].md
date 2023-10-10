---
layout: question
title:  找不到Webpack inject.preload.js文件\[重复\]
date:   2020-03-12T02:26:02.000Z
description:                                                                          ...
img: 
author: 神奇Davaid
category: question
answer: 1
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
                            <a href="/questions/50849510/inject-preload-js-failing-to-load-a-file-in-chrome-from-my-dev-environment" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">inject.preload.js无法从我的开发环境中加载chrome文件</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （5个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2018-06-14 21：32：22Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Webpack中使用Vue / Typscript。</font><font style="vertical-align: inherit;">而且每次我打开页面时都会</font></font><code>inject.preload.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出现类似错误，</font></font><code>GET blob:http://URL/1fbc0606-8477-416b-a45f-50b4d824f2bb 0 ()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且我不知道它来自哪里或为什么注入了某些东西。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Google Chrome Incognito模式和Firefox上进行了测试，没有引发任何错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何找出发生此错误的原因？</font></font></p>

<p><a href="https://i.stack.imgur.com/WdOWY.png" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制台输出</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></strong></p>

<pre><code>    {<font></font>
      ...<font></font>
<font></font>
      "dependencies": {<font></font>
        "axios": "^0.18.0",<font></font>
        "email-validator": "^1.1.1",<font></font>
        "generate-password": "^1.3.0",<font></font>
        "grunt": "^1.0.1",<font></font>
        "jquery": "^3.2.1",<font></font>
        "lodash": "^4.17.5",<font></font>
        "moment": "^2.22.1",<font></font>
        "moment-timezone": "^0.5.17",<font></font>
        "promise-polyfill": "^7.1.2",<font></font>
        "vue-axios": "^2.0.2",<font></font>
        "vue-class-component": "^6.2.0",<font></font>
        "vue-cloneya": "^1.0.5",<font></font>
        "vue-property-decorator": "^6.0.0",<font></font>
        "vue-spinner": "^1.0.3",<font></font>
        "vuex": "^3.0.1",<font></font>
        "vuex-class": "^0.3.0",<font></font>
        "invert-color": "^1.2.3",<font></font>
        "vuejs-datepicker": ""<font></font>
      },<font></font>
      "devDependencies": {<font></font>
        "@types/node": "^9.4.7",<font></font>
        "css-loader": "^0.28.10",<font></font>
        "eslint": "^4.19.1",<font></font>
        "eslint-loader": "^2.0.0",<font></font>
        "eslint-plugin-html": "^4.0.3",<font></font>
        "eslint-plugin-typescript": "^0.11.0",<font></font>
        "grunt-contrib-less": "^1.4.1",<font></font>
        "grunt-git-describe": "^2.4.2",<font></font>
        "grunt-open": "^0.2.3",<font></font>
        "grunt-shell": "^2.1.0",<font></font>
        "html-loader": "^0.5.5",<font></font>
        "i": "^0.3.6",<font></font>
        "ts-loader": "^2.3.7",<font></font>
        "typescript": "2.7.2",<font></font>
        "typescript-eslint-parser": "^14.0.0",<font></font>
        "typings": "^2.1.1",<font></font>
        "uglifyjs-webpack-plugin": "^1.2.4",<font></font>
        "vue": "^2.5.16",<font></font>
        "vue-loader": "^14.2.1",<font></font>
        "vue-template-compiler": "^2.5.15",<font></font>
        "webpack": "^3.11.0",<font></font>
        "webpackbar": "^2.6.1"<font></font>
      }<font></font>
<font></font>
      ...<font></font>
   }<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.js</font></font></strong></p>

<pre><code>/* eslint-disable no-undef */<font></font>
const path = require('path');<font></font>
const webpack = require('webpack');<font></font>
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');<font></font>
<font></font>
module.exports = {<font></font>
    entry: './templates/src/app.ts',<font></font>
    output: {<font></font>
        path: path.resolve(__dirname, './dist'),<font></font>
        publicPath: '/dist/',<font></font>
        filename: 'bundle.js'<font></font>
    },<font></font>
    module: {<font></font>
        rules: [<font></font>
            {<font></font>
                enforce: 'pre',<font></font>
                test: /\.(js|ts|vue)$/,<font></font>
                include: [<font></font>
                    path.resolve(__dirname, 'templates/src')<font></font>
                ],<font></font>
                loader: 'eslint-loader'<font></font>
            },<font></font>
            {<font></font>
                test: /\.vue$/,<font></font>
                loader: 'vue-loader',<font></font>
                options: {<font></font>
                    loaders: {<font></font>
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map<font></font>
                        // the "scss" and "sass" values for the lang attribute to the right configs here.<font></font>
                        // other preprocessors should work out of the box, no loader config like this necessary.<font></font>
                        'scss': 'vue-style-loader!css-loader!sass-loader',<font></font>
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',<font></font>
                    }<font></font>
                    // other vue-loader options go here<font></font>
                }<font></font>
            },<font></font>
            {<font></font>
                test: /\.tsx?$/,<font></font>
                loader: 'ts-loader',<font></font>
                exclude: /node_modules/,<font></font>
                options: {<font></font>
                    appendTsSuffixTo: [/\.vue$/]<font></font>
                }<font></font>
            },<font></font>
            {<font></font>
                test: /\.(png|jpg|gif|svg)$/,<font></font>
                loader: 'file-loader',<font></font>
                options: {<font></font>
                    name: '[name].[ext]?[hash]'<font></font>
                }<font></font>
            },<font></font>
            {<font></font>
                test: /\.html$/,<font></font>
                loader: 'html-loader'<font></font>
            },<font></font>
            {<font></font>
                test: /\.css$/,<font></font>
                use: [ 'vue-style-loader', 'css-loader' ]<font></font>
            }<font></font>
        ]<font></font>
    },<font></font>
    resolve: {<font></font>
        extensions: ['.ts', '.js', '.vue', '.json', '.html'],<font></font>
        alias: {<font></font>
            'vue$': 'vue/dist/vue.esm.js'<font></font>
        }<font></font>
    },<font></font>
    devServer: {<font></font>
        historyApiFallback: true,<font></font>
        noInfo: true<font></font>
    },<font></font>
    performance: {<font></font>
        hints: false<font></font>
    },<font></font>
    devtool: '#eval-source-map'<font></font>
};<font></font>
<font></font>
if (process.env.NODE_ENV === 'production') {<font></font>
    module.exports.devtool = '#source-map';<font></font>
    // http://vue-loader.vuejs.org/en/workflow/production.html<font></font>
    module.exports.plugins = (module.exports.plugins || []).concat([<font></font>
        new webpack.DefinePlugin({<font></font>
            'process.env': {<font></font>
                NODE_ENV: '"production"'<font></font>
            }<font></font>
        }),<font></font>
        new UglifyJSPlugin({<font></font>
            sourceMap: true<font></font>
        }),<font></font>
        new webpack.LoaderOptionsPlugin({<font></font>
            minimize: true<font></font>
        })<font></font>
    ]);<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于AdBlock扩展名而发生错误。</font><font style="vertical-align: inherit;">要验证，您可以</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁用chrome：// extensions / url中的扩展名。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
