---
layout: question
title:  使用Webpack将jQuery公开到真实的Window对象
date:   2020-03-23T02:45:22.000Z
description: 我不会将jQuery对象公开给浏览器中开发人员控制台内部可访问的全局窗口对象。现在在我的webpack配置中，有以下几行：plugins  \[   ...
img: 
author: L十三
category: question
answer: 4
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不会将jQuery对象公开给浏览器中开发人员控制台内部可访问的全局窗口对象。</font><font style="vertical-align: inherit;">现在在我的webpack配置中，有以下几行：</font></font></p>

<pre><code>plugins: [<font></font>
                new webpack.ProvidePlugin({<font></font>
                    $: 'jquery',<font></font>
                    jQuery: 'jquery'<font></font>
                })<font></font>
            ]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些行将jQuery定义添加到我的webpack模块中的每个文件中。</font><font style="vertical-align: inherit;">但是，当我构建项目并尝试在开发者控制台中访问jQuery时，如下所示：</font></font></p>

<pre><code>window.$;<font></font>
window.jQuery;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它说这些属性是不确定的...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法来解决这个问题？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2677篇《使用Webpack将jQuery公开到真实的Window对象》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack v2的更新</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照Matt Derrick的说明</font><font style="vertical-align: inherit;">安装</font></font><a href="https://www.npmjs.com/package/expose-loader" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">暴露加载程序</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>npm install expose-loader --save-dev
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在您的中插入以下代码段</font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>module.exports = {<font></font>
    entry: {<font></font>
        // ...<font></font>
    },<font></font>
    output: {<font></font>
        // ...<font></font>
    },<font></font>
    module: {<font></font>
        loaders: [<font></font>
                { test: require.resolve("jquery"), loader: "expose-loader?$!expose-loader?jQuery" }<font></font>
        ]<font></font>
    }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（来自</font></font><a href="https://www.npmjs.com/package/expose-loader#readme" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">暴露加载程序文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这一直对我有用。</font><font style="vertical-align: inherit;">包括用于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack 3</font></font></strong> <code>window.$ = window.jQuery = require("jquery");</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天蛋蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来该</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象已在所有模块中公开。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么不只是导入/要求</font></font><code>JQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并放入：</font></font></p>

<pre><code>window.$ = window.JQuery = JQuery;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要确保在要求/导入需求</font></font><code>window.JQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块中或正在使用该模块的</font><font style="vertical-align: inherit;">任何模块之前/发生这种情况</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Pro</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言       </font></font></p>

<pre><code>{ test: require.resolve("jquery"), loader: "expose?$!expose?jQuery" } 
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
