---
layout: post
title:  Webpack 将JavaScript代码内联在HTML页面
date:   2018-07-19T12:03:51.000Z
description: 这次要介绍一个插件html-webpack-inline-source-plugin，它其实是html-webpack-plugin的一个扩展。而我们需要Web...
img: https://www.samyoc.com/uploads/users/1/images/thumbnails/1532001814011.jpg
author: Winter
category: blog
answer: 0
tags: 前端
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><blockquote>
<p>这次要介绍一个插件html-webpack-inline-source-plugin，它其实是html-webpack-plugin的一个扩展。而我们需要Webpack 将JavaScript代码内联在HTML页面时就需要使用到它了。</p>
</blockquote>

<p>1.首先，安装插件，我们同时也需要intstall&nbsp; html-webpack-plugin</p>

<pre>
<code>npm install --save-dev html-webpack-plugin html-webpack-inline-source-plugin</code></pre>

<p>2.使用方法</p>

<p>在你的webpack config文件中引入</p>

<pre>
<code>var HtmlWebpackInlineSourcePlugin = require(&#39;html-webpack-inline-source-plugin&#39;);</code></pre>

<p>然后将其添加至你的plugins数组中，例如：</p>

<pre>
<code>
plugins: [  
    new HtmlWebpackPlugin(),
    new HtmlWebpackInlineSourcePlugin()
]</code></pre>

<p>但是仅仅是这样添加，那是不够的，这时候需要同时设置<code>HtmlWebpackPlugin，我们需要设置HtmlWebpackPlugin的属性，</code>增加一个&nbsp;<code>inlineSource</code>&nbsp;选项来匹配 css 和 js ，最终才会将资源内联到 html 中。</p>

<pre>
<code>
plugins: [  
    new HtmlWebpackPlugin({
        inlineSource: &#39;.(js&amp;|css)$&#39; // 内联所有 javascript、css。
    }),  
    new HtmlWebpackInlineSourcePlugin()
]</code></pre>

<p>下面贴一个完整的示例：</p>

<pre>
<code>
var webpack = require(&#39;webpack&#39;);
var path = require(&#39;path&#39;);
var HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);
var HtmlWebpackInlineSourcePlugin = require(&#39;html-webpack-inline-source-plugin&#39;);
var UglifyJSPlugin = require(&#39;uglifyjs-webpack-plugin&#39;)

var serverConfig = {
    mode: &quot;development&quot;,
    plugins: [new webpack.DefinePlugin({
            &quot;global.GENTLY&quot;: false,
        }),
        new HtmlWebpackPlugin({
            inject: true,
            minify: {
                //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false, //删除空白符与换行符
                removeAttributeQuotes: true//压缩 去掉引号
            },
            template: &quot;./template/index.html&quot;,
            filename: &quot;SamYoc_Trade.html&quot;,
            minify: true,
            inlineSource: &#39;.(js|css)&#39;
        }),
        new HtmlWebpackInlineSourcePlugin(),
        new UglifyJSPlugin({
            parallelization: true,
        })
    ],
    entry: {
        server: &quot;./app.js&quot;
    },
    target: &#39;node&#39;,
    node: {
        __filename: true,
        __dirname: true
    },
    output: {
        path: path.resolve(__dirname, &#39;../dist&#39;),
        filename: &#39;[name].js&#39;,
        chunkFilename: &#39;[name].chunk.js&#39;
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: &#39;babel-loader&#39;
        }, {
            test: /.(svg|png|jpg|jpeg|otf|gif)$/,
            exclude: /node_modules/,
            use: &#39;url?limit=10&#39;
        }]
    },
    // externals: getExternals(),
    resolve: {
        extensions: [&#39;.js&#39;, &#39;.jsx&#39;, &#39;.less&#39;, &#39;.css&#39;, &#39;.json&#39;]
    }
};

module.exports = serverConfig;
</code></pre>
</div>
    {% endraw %}
  </div>
  <p class="winter_mark">第74篇《Webpack 将JavaScript代码内联在HTML页面》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
