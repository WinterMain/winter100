---
layout: question
title:  Babel和ES6发生意外的“未捕获的TypeError：XXX不是构造函数”错误
date:   2020-03-24T11:18:56.000Z
description: 我正在尝试Webpack，并正在尝试本教程中的说明，提供或自定义一些内容。确实，这是简单的代码，但是我对此错误感到很困惑，觉得这是我错过的东西。我...
img: 
author: 凯西里
category: question
answer: 3
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试Webpack，并正在尝试</font></font><a href="https://blog.madewithlove.be/post/webpack-your-bags/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本教程中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的说明</font><font style="vertical-align: inherit;">，提供或自定义一些内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实，这是简单的代码，但是我对此错误感到很困惑，觉得这是我错过的东西。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我定义了两个ES6类，每个类对应于一个Handlebars模板，并且我的应用程序的入口点应该用它们的内容替换索引文件中的占位符HTML：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">入口点：</font></font></strong></p>

<pre><code>import './bloj.less'<font></font>
<font></font>
// If we have a link, render the Button component on it<font></font>
if (document.querySelectorAll('a').length) {<font></font>
    require.ensure([], () =&gt; {<font></font>
        const Button = require('./Components/Button.js');<font></font>
        const button = new Button('9gag.com');<font></font>
<font></font>
        button.render('a');<font></font>
    }, 'button');<font></font>
}<font></font>
<font></font>
// If we have a title, render the Header component on it<font></font>
if (document.querySelectorAll('h1').length) {<font></font>
    require.ensure([], () =&gt; {<font></font>
        const Header = require('./Components/Header.js');<font></font>
<font></font>
        new Header().render('h1');<font></font>
    }, 'header');<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指数：</font></font></strong></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
    &lt;h1&gt;My title&lt;/h1&gt;<font></font>
    &lt;a&gt;Click me&lt;/a&gt;<font></font>
<font></font>
    &lt;script src="build/bloj.js"&gt;&lt;/script&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按键：</font></font></strong></p>

<pre><code>import $ from 'jquery';<font></font>
import './Button.less';<font></font>
<font></font>
export default class Button {<font></font>
<font></font>
    constructor(link) {<font></font>
        this.link = link;<font></font>
    }<font></font>
<font></font>
    onClick(event) {<font></font>
        event.preventDefault();<font></font>
        alert(this.link);<font></font>
    }<font></font>
<font></font>
    render(node) {<font></font>
        const text = $(node).text();<font></font>
        var compiled = require('./Button.hbs');<font></font>
<font></font>
        // Render our button<font></font>
        $(node).html(<font></font>
            compiled({"text": text, "link": this.link})<font></font>
        );<font></font>
<font></font>
        // Attach our listeners<font></font>
        $('.button').click(this.onClick.bind(this));<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标头：</font></font></strong></p>

<pre><code>import $ from 'jquery';<font></font>
import './Header.less';<font></font>
<font></font>
export default class Header {<font></font>
    render(node) {<font></font>
        const text = $(node).text();<font></font>
        var compiled = require('./Header.hbs');<font></font>
<font></font>
        // Render the header<font></font>
        $(node).html(<font></font>
            compiled({"text": text})<font></font>
        );<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遗憾的是，它不起作用，并且在显示页面时出现以下两个错误：</font></font></p>

<pre><code>Uncaught TypeError: Header is not a constructor<font></font>
Uncaught TypeError: Button is not a constructor<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可能会缺少什么？</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的webpack配置：</font></font></p>

<pre><code>var path = require('path');<font></font>
var webpack = require('webpack');<font></font>
var CleanPlugin = require('clean-webpack-plugin');<font></font>
var ExtractPlugin = require('extract-text-webpack-plugin');<font></font>
<font></font>
var production = process.env.NODE_ENV === 'production';<font></font>
var appName = 'bloj';<font></font>
var entryPoint = './src/bloj.js';<font></font>
var outputDir =  './build/';<font></font>
var publicDir = './build/';<font></font>
<font></font>
// ************************************************************************** //<font></font>
<font></font>
var plugins = [<font></font>
    //new ExtractPlugin(appName + '.css', {allChunks: true}),<font></font>
    new CleanPlugin(outputDir),<font></font>
    new webpack.optimize.CommonsChunkPlugin({<font></font>
        name:      'main',<font></font>
        children:  true,<font></font>
        minChunks: 2<font></font>
    })<font></font>
];<font></font>
<font></font>
if (production) {<font></font>
    plugins = plugins.concat([<font></font>
        new webpack.optimize.DedupePlugin(),<font></font>
        new webpack.optimize.OccurenceOrderPlugin(),<font></font>
        new webpack.optimize.MinChunkSizePlugin({<font></font>
            minChunkSize: 51200 // 50ko<font></font>
        }),<font></font>
        new webpack.optimize.UglifyJsPlugin({<font></font>
            mangle:   true,<font></font>
            compress: {<font></font>
                warnings: false // Suppress uglification warnings<font></font>
            }<font></font>
        }),<font></font>
        new webpack.DefinePlugin({<font></font>
            __SERVER__:      false,<font></font>
            __DEVELOPMENT__: false,<font></font>
            __DEVTOOLS__:    false,<font></font>
            'process.env':   {<font></font>
                BABEL_ENV: JSON.stringify(process.env.NODE_ENV)<font></font>
            }<font></font>
        })<font></font>
    ]);<font></font>
}<font></font>
<font></font>
module.exports = {<font></font>
    entry:  entryPoint,<font></font>
    output: {<font></font>
        path:     outputDir,<font></font>
        filename: appName + '.js',<font></font>
        chunkFilename: '[name].js',<font></font>
        publicPath: publicDir<font></font>
    },<font></font>
    debug:   !production,<font></font>
    devtool: production ? false : 'eval',<font></font>
    module: {<font></font>
        loaders: [<font></font>
            {<font></font>
                test: /\.js/,<font></font>
                loader: "babel",<font></font>
                include: path.resolve(__dirname, 'src'),<font></font>
                query: {<font></font>
                    presets: ['es2015']<font></font>
                }<font></font>
            },<font></font>
            {<font></font>
                test: /\.less/,<font></font>
                //loader: ExtractPlugin.extract('style', 'css!less')<font></font>
                loader: "style!css!less"<font></font>
            },<font></font>
            {<font></font>
                test:   /\.html/,<font></font>
                loader: 'html'<font></font>
            },<font></font>
            {<font></font>
                test: /\.hbs/,<font></font>
                loader: "handlebars-template-loader"<font></font>
            }<font></font>
        ]<font></font>
    },<font></font>
    plugins: plugins,<font></font>
    node: {<font></font>
        fs: "empty" // Avoids Handlebars error messages<font></font>
    }<font></font>
};<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3729篇《Babel和ES6发生意外的“未捕获的TypeError：XXX不是构造函数”错误》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以通过添加</font></font><a href="https://www.npmjs.com/package/babel-plugin-add-module-exports" rel="nofollow noreferrer"><code>babel-plugin-add-module-exports</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>.babelrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">来解决此问题</font></font></p>

<p><code>npm install babel-plugin-add-module-exports --save-dev</code></p>

<pre><code>{<font></font>
  "presets": ["@babel/env"],<font></font>
  "plugins": ["add-module-exports"]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这增加了 </font></font></p>

<pre><code>module.exports = exports.default;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用babel编译类时，请移至最后一行。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>export var __useDefault = true;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在导出类后就</font><font style="vertical-align: inherit;">放</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>export default class Header {<font></font>
...<font></font>
} <font></font>
export var __useDefault = true;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这个特定问题中这不是问题，但是由于某些原因，babel不在同一文件中提升类。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果您</font></font><code>Token</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在文件顶部</font><font style="vertical-align: inherit;">声明您的类</font><font style="vertical-align: inherit;">，然后再编写</font></font><code>new Token()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在构造函数调用之后声明了类，则将出现</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">xxx不是构造函数</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
