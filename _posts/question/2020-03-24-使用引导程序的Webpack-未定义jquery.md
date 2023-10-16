---
layout: question
title:  使用引导程序的Webpack-未定义jquery
date:   2020-03-24T03:08:23.000Z
description: import $ from 'jquery';require("./node_modules/bootstrap/dist/css/bootstrap....
img: 
author: GO
category: question
answer: 4
tags: jQuery Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><pre><code>import $ from 'jquery';<font></font>
require("./node_modules/bootstrap/dist/css/bootstrap.min.css")<font></font>
require("./node_modules/bootstrap/js/dropdown.js")<font></font>
import React from 'react';<font></font>
import ReactDOM from 'react-dom';<font></font>
var _ = require('lodash');<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参考以上我的设置。</font><font style="vertical-align: inherit;">由于某些原因我出现了错误，提示“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Uncaught ReferenceError：未</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从dropdown.js </font><strong><font style="vertical-align: inherit;">定义jQuery（）</font></strong></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还在webpack.config.js中包含了以下几行</font></font></p>

<pre><code>   plugins: [<font></font>
    new webpack.NoErrorsPlugin({<font></font>
        $: "jquery",<font></font>
        jQuery: "jquery"<font></font>
    })<font></font>
]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，没有运气-仍然有jQuery undefined错误。</font><font style="vertical-align: inherit;">任何想法 ？</font><font style="vertical-align: inherit;">有人可以帮忙解决这个问题吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常感谢</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3281篇《使用引导程序的Webpack-未定义jquery》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这会工作 </font></font></p>

<pre><code>plugins: [ <font></font>
     new webpack.ProvidePlugin({<font></font>
           $: "jquery", <font></font>
           jQuery: "jquery"<font></font>
     })<font></font>
] <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它为我工作，希望能有所帮助 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font><strong><font style="vertical-align: inherit;">Bootstrap 4.0</font></strong><font style="vertical-align: inherit;">和</font><strong><font style="vertical-align: inherit;">Webpack 3的</font></strong><font style="vertical-align: inherit;">各个Dropdown导入</font><font style="vertical-align: inherit;">安装并使用</font></font><a href="https://github.com/webpack-contrib/exports-loader" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">exports-loader</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<pre><code>// webpack.config.js<font></font>
module.exports = {<font></font>
    ...<font></font>
    plugins: [<font></font>
        new webpack.ProvidePlugin({<font></font>
           Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",<font></font>
       })<font></font>
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插件或个人导入： </font></font><code>require("./node_modules/bootstrap/js/dist/dropdown")</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完整导入Bootstrap：</font></font><code>require("./node_modules/bootstrap")</code></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考文献</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于</font><a href="https://getbootstrap.com/docs/4.0/getting-started/webpack/#importing-javascript" rel="nofollow noreferrer"><font style="vertical-align: inherit;">使用webpack</font></a><font style="vertical-align: inherit;">导入</font><a href="https://getbootstrap.com/docs/4.0/getting-started/webpack/#importing-javascript" rel="nofollow noreferrer"><font style="vertical-align: inherit;">各个Bootstrap插件</font></a><font style="vertical-align: inherit;">的Bootstrap 4.0注释</font></font><a href="https://getbootstrap.com/docs/4.0/getting-started/webpack/#importing-javascript" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></li>
<li><a href="https://stackoverflow.com/a/39283602/2692915"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">许绍的答案</font></font></a></li>
<li><a href="https://bhavyanshu.me/using-bootstrap-4-webpack-3-and-yarn-for-wordpress-theme-assets/01/21/2018" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bhavyanshu Parasher的博客</font></font></a></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了使此代码起作用，您必须</font><font style="vertical-align: inherit;">在更改后</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新启动节点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>// webpack.config.js<font></font>
module.exports = {<font></font>
    ...<font></font>
    plugins: [<font></font>
        new webpack.ProvidePlugin({<font></font>
           $: "jquery",<font></font>
           jQuery: "jquery"<font></font>
       })<font></font>
    ]<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva凯</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请使用webpack ProviderPlugin，使用全局不是一个好主意。</font></font></p>

<pre><code>// webpack.config.js<font></font>
module.exports = {<font></font>
    ...<font></font>
    plugins: [<font></font>
        new webpack.ProvidePlugin({<font></font>
           $: "jquery",<font></font>
           jQuery: "jquery"<font></font>
       })<font></font>
    ]<font></font>
};<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
