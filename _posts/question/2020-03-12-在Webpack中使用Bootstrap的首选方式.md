---
layout: question
title:  在Webpack中使用Bootstrap的首选方式
date:   2020-03-12T07:26:26.000Z
description: 大家问候我一直在使用Bootstrap for Webpack，但是我正要拔头发。我从字面上看了很多博客文章，他们要么使用了7个月过时的“ boots...
img: 
author: 米亚Eva
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大家问候</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在使用Bootstrap for Webpack，但是我正要拔头发。</font><font style="vertical-align: inherit;">我从字面上看了很多博客文章，他们要么使用了7个月过时的“ bootstrap-webpack”插件（令人惊讶的是，它不能立即使用），要么..它们通过导入'node_modules / * /包含了Bootstrap文件。 bootstrap / css / bootstrap.css”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，必须有一种更清洁，更有效的方法来解决此问题吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我当前的</font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件：</font></font></p>

<pre><code>var webpack = require('webpack');<font></font>
var ExtractTextPlugin = require('extract-text-webpack-plugin');<font></font>
var autoprefixer = require('autoprefixer');<font></font>
var path = require('path');<font></font>
<font></font>
module.exports = {<font></font>
    entry: {<font></font>
        app: path.resolve(__dirname, 'src/js/main.js')<font></font>
    },<font></font>
    module: {<font></font>
        loaders: [{<font></font>
            test: /\.js[x]?$/,<font></font>
            loaders: ['babel-loader?presets[]=es2015&amp;presets[]=react'],<font></font>
            exclude: /(node_modules|bower_components)/<font></font>
        }, {<font></font>
            test: /\.css$/,<font></font>
            loaders: ['style', 'css']<font></font>
        }, {<font></font>
            test: /\.scss$/,<font></font>
            loaders: ['style', 'css', 'postcss', 'sass']<font></font>
        }, {<font></font>
            test: /\.sass$/,<font></font>
            loader: 'style!css!sass?sourceMap'<font></font>
        },{<font></font>
            test: /\.less$/,<font></font>
            loaders: ['style', 'css', 'less']<font></font>
        }, {<font></font>
            test: /\.woff$/,<font></font>
            loader: "url-loader?limit=10000&amp;mimetype=application/font-woff&amp;name=[path][name].[ext]"<font></font>
        }, {<font></font>
            test: /\.woff2$/,<font></font>
            loader: "url-loader?limit=10000&amp;mimetype=application/font-woff2&amp;name=[path][name].[ext]"<font></font>
        }, {<font></font>
            test: /\.(eot|ttf|svg|gif|png)$/,<font></font>
            loader: "file-loader"<font></font>
        }]<font></font>
    },<font></font>
    output: {<font></font>
        path: path.resolve(__dirname, 'dist'),<font></font>
        filename: '/js/bundle.js',<font></font>
        sourceMapFilename: '/js/bundle.map',<font></font>
        publicPath: '/'<font></font>
    },<font></font>
    plugins: [<font></font>
        new ExtractTextPlugin('style.css')<font></font>
    ],<font></font>
    postcss: [<font></font>
        autoprefixer({<font></font>
            browsers: ['last 2 versions']<font></font>
        })<font></font>
    ],<font></font>
    resolve: {<font></font>
        extensions: ['', '.js', '.sass'],<font></font>
        modulesDirectories: ['src', 'node_modules']<font></font>
    },<font></font>
    devServer: {<font></font>
        inline: true,<font></font>
        contentBase: './dist'<font></font>
    }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以去</font></font><code>require('bootstrap')</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（通过某种方式使jQuery正常工作），但是..我很好奇你们所有人的想法和行为。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提前致谢 ：）</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">6的不行</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我强烈建议使用</font></font><a href="https://github.com/shakacode/bootstrap-loader" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bootstrap-loader</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您</font></font><code>.bootstraprc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在根文件夹中</font><font style="vertical-align: inherit;">添加了一个配置文件</font><font style="vertical-align: inherit;">，可以在其中排除不需要的引导元素，并告诉您</font></font><code>variables.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>bootstrap.overrides.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">哪里</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">定义您的SCSS变量，进行覆盖，添加Webpack条目并继续生活。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
