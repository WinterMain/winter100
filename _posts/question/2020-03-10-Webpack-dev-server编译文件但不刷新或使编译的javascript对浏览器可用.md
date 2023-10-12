---
layout: question
title:  Webpack-dev-server编译文件，但不刷新或使编译的javascript对浏览器可用
date:   2020-03-10T06:11:53.000Z
description: 我正在尝试使用webpack-dev-server来编译文件并启动dev Web服务器。 在我package.json中，脚本属性设置为："scr...
img: 
author: 宝儿小哥小卤蛋
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用webpack-dev-server来编译文件并启动dev Web服务器。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中，脚本属性设置为：</font></font></p>

<pre><code>"scripts": {<font></font>
  "dev": "webpack-dev-server --hot --inline",<font></font>
 }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此</font></font><code>--hot</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>--inline</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该启用Web服务器和热重载（据我所知）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的</font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中，设置入口，输出和devServer设置，并添加加载程序以查找</font></font><code>.vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中的</font><font style="vertical-align: inherit;">更改</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>module.exports = {<font></font>
    entry: './src/index.js',<font></font>
    output: {<font></font>
        path: __dirname + '/public',<font></font>
        publicPath: '/public',<font></font>
        filename: 'bundle.js'<font></font>
    },<font></font>
    devtool: 'source-map',<font></font>
    devServer:{<font></font>
        contentBase: __dirname + '/public'<font></font>
    },<font></font>
    module:{<font></font>
        loaders:[<font></font>
            { test: /\.vue$/, loader: 'vue'}<font></font>
        ]<font></font>
    }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，使用此设置，我运行</font></font><code>npm run dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">webpack-dev-server启动，模块加载程序测试成功（即，当我保存任何.vue文件时，它将导致webpack重新编译），但是：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器永不刷新</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存储在内存中的已编译javascript永远不会对浏览器可用</font></font></li>
</ul>

<p>On that second bullet, I can see this because in the browser window the vue placeholders are never replaced and if I open up the javascript console the Vue instance is never created or made available globally. </p>

<p><a href="https://www.samyoc.com//uploads/users/4630/images/thumbnails/1583820713749.gif" data-src="https://www.samyoc.com//uploads/users/4630/images/1583820713749.gif" rel="noreferrer"><img src="https://i.stack.imgur.com/ByBH5.gif" alt="发行的Gif"></a></p>

<p>What am I missing?</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第497篇《Webpack-dev-server编译文件，但不刷新或使编译的javascript对浏览器可用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙Green</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的项目树尚不清楚，但是问题可能出在contentBase设置中。</font><font style="vertical-align: inherit;">尝试设置contentBase：__dirname</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西门小小</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将在这里把我自己关于Webpack的特殊故事加到</font></font><code>--watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">痛苦的墙上。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我之前在跑步 </font></font></p>

<pre><code>webpack --watch
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了构建一个Typescript项目。</font><font style="vertical-align: inherit;">编译的</font></font><code>.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件将更新，但浏览器看到的捆绑包不会更新。</font><font style="vertical-align: inherit;">所以我基本上和OP处于同一位置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题归结为</font></font><code>watchOptions.ignored</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数。</font><font style="vertical-align: inherit;">构建配置的原始作者已设置</font></font><code>ignored</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为过滤器功能，结果证明该参数不是有效值。</font><font style="vertical-align: inherit;">用适当的替换过滤器功能</font></font><code>RegExp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使</font></font><code>--watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构建再次为我工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan飞云Sam</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的情况是我对Webpack功能进行了非常深入的试验，但完全忘记了我一直将注入设置为虚假，就像这样……</font></font></p>

<pre><code> new HTMLWebpackPlugin({<font></font>
        inject: false,<font></font>
        ...<font></font>
 }),<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开那是我的票。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端神无</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确的解决方案</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">告诉</font></font><code>dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">观看</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由所服务的文件</font></font><a href="https://webpack.js.org/configuration/dev-server/#devserverwatchcontentbase" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">devServer.watchContentBase</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项。  </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下禁用。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启用后，文件更改将触发</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">整个页面重新加载</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>module.exports = {<font></font>
  //...<font></font>
  devServer: {<font></font>
    // ...<font></font>
    watchContentBase: true<font></font>
  }<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞乐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ExtractTextPlugin</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能会发生这种情况</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在开发模式下停用ExtractTextPlugin。</font><font style="vertical-align: inherit;">仅将其用于生产构建。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙十三</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，我发现除了所有这些要点之外，我们还必须将index.html和输出bundle.js放在同一文件夹中，并将contentBase设置为该文件夹（根目录或子文件夹） 。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
