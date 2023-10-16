---
layout: question
title:  Twitter Bootstrap 3的IE8问题
date:   2020-03-30T10:26:12.000Z
description: 我正在使用新的Twitter Bootstrap创建一个网站。该网站看起来不错，并且可以在除IE8之外的所有必需浏览器中使用。在IE8中，它似乎在显示...
img: 
author: 蛋蛋
category: question
answer: 20
tags: html CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用新的Twitter Bootstrap创建一个网站。</font><font style="vertical-align: inherit;">该网站看起来不错，并且可以在除IE8之外的所有必需浏览器中使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在IE8中，它似乎在显示移动版本的元素，但延伸到了我的桌面的全屏。</font><font style="vertical-align: inherit;">我认为我遇到的问题是Twitter引导程序首先是移动设备。</font><font style="vertical-align: inherit;">因此出于某些原因，IE8会选择此选项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还注意到，</font></font><code>container</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该类似乎并未按预期引入max-width CSS属性。</font><font style="vertical-align: inherit;">谁能看到我做错了什么？</font></font></p>

<pre><code>&lt;!-- Favicon --&gt;<font></font>
&lt;link rel="shortcut icon" href="/favicon.ico"&gt;<font></font>
&lt;link rel="apple-touch-icon" href="/apple-touch-icon.png"&gt;<font></font>
<font></font>
&lt;!-- Bootstrap --&gt;<font></font>
&lt;link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/css/bootstrap.css" rel="stylesheet"&gt;<font></font>
&lt;link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.min.css" rel="stylesheet"&gt;<font></font>
&lt;script src="/SiteFiles/js/modernizr.js"&gt;&lt;/script&gt;<font></font>
<font></font>
&lt;!-- CSS --&gt;<font></font>
&lt;link href="/SiteFiles/css/main.css" rel="stylesheet"&gt;<font></font>
</code></pre>

<p>
</p>

<pre><code>&lt;header&gt;<font></font>
    &lt;div class="topArea clearfix"&gt;<font></font>
        &lt;div class="container"&gt;<font></font>
            &lt;div class="topLinks"&gt;<font></font>
                &lt;div class="btn-group"&gt;<font></font>
                    &lt;span class="flag" data-toggle="dropdown"&gt;&amp;nbsp;&lt;/span&gt;<font></font>
                    &lt;ul class="dropdown-menu"&gt;<font></font>
                        &lt;li&gt;&lt;a href="#"&gt;Country 1&lt;/a&gt;&lt;/li&gt;<font></font>
                        &lt;li&gt;&lt;a href="#"&gt;Country 2&lt;/a&gt;&lt;/li&gt;<font></font>
                        &lt;li&gt;&lt;a href="#"&gt;Country 3&lt;/a&gt;&lt;/li&gt;<font></font>
                        &lt;li class="divider"&gt;&lt;/li&gt;<font></font>
                        &lt;li&gt;&lt;a href="#"&gt;Country 4&lt;/a&gt;&lt;/li&gt;<font></font>
                        &lt;li&gt;&lt;a href="#"&gt;Country 5&lt;/a&gt;&lt;/li&gt;<font></font>
                        &lt;li&gt;&lt;a href="#"&gt;Country 6&lt;/a&gt;&lt;/li&gt;<font></font>
                    &lt;/ul&gt;<font></font>
                &lt;/div&gt;<font></font>
                &lt;div class="visible-sm btn-group"&gt;<font></font>
                    &lt;div class="plus" data-toggle="dropdown"&gt;&lt;i class="icon-plus icon-2x"&gt;&amp;nbsp;&lt;/i&gt;&lt;/div&gt;<font></font>
                    &lt;ul class="dropdown-menu"&gt;<font></font>
                        &lt;li&gt;&lt;a href="#"&gt;Parts &amp; Service&lt;/a&gt;&lt;/li&gt;<font></font>
                        &lt;li&gt;&lt;a href="#"&gt;Store Locator&lt;/a&gt;&lt;/li&gt;<font></font>
                        &lt;li&gt;&lt;a href="#"&gt;Find a Service Centre&lt;/a&gt;&lt;/li&gt;<font></font>
                        &lt;li&gt;&lt;a href="#"&gt;Parts List&lt;/a&gt;&lt;/li&gt;<font></font>
                        &lt;li&gt;&lt;a href="#"&gt;Tool Vibration&lt;/a&gt;&lt;/li&gt;<font></font>
                        &lt;li&gt;&lt;a href="#"&gt;Resource Centre&lt;/a&gt;&lt;/li&gt;<font></font>
                        &lt;li&gt;&lt;a href="#"&gt;Media Centre&lt;/a&gt;&lt;/li&gt;<font></font>
                        &lt;li&gt;&lt;a href="#"&gt;Register your Tools&lt;/a&gt;&lt;/li&gt;<font></font>
                        &lt;li&gt;&lt;a href="#"&gt;About Us&lt;/a&gt;&lt;/li&gt;<font></font>
                        &lt;li&gt;&lt;a href="#"&gt;<font></font>
                            &lt;button type="button" class="btn btn-default"&gt;Where to Buy&lt;/button&gt;&lt;/a&gt;&lt;/li&gt;<font></font>
                    &lt;/ul&gt;<font></font>
                &lt;/div&gt;<font></font>
                &lt;div class="topNav"&gt;<font></font>
                    &lt;ul class="hidden-sm"&gt;<font></font>
                        &lt;li&gt;<font></font>
                            &lt;div class="btn-group"&gt;<font></font>
                                &lt;a href="#" data-toggle="dropdown"&gt;Parts &amp; Service&lt;/a&gt;<font></font>
                                &lt;ul class="dropdown-menu"&gt;<font></font>
                                    &lt;li&gt;&lt;a href="#"&gt;Store Locator&lt;/a&gt;&lt;/li&gt;<font></font>
                                    &lt;li&gt;&lt;a href="#"&gt;Find a Service Centre&lt;/a&gt;&lt;/li&gt;<font></font>
                                    &lt;li&gt;&lt;a href="#"&gt;Parts List&lt;/a&gt;&lt;/li&gt;<font></font>
                                    &lt;li&gt;&lt;a href="#"&gt;Tool Vibration&lt;/a&gt;&lt;/li&gt;<font></font>
                                &lt;/ul&gt;<font></font>
                            &lt;/div&gt;<font></font>
                        &lt;/li&gt;<font></font>
                        &lt;li&gt;&lt;a href="#"&gt;Resource Centre&lt;/a&gt;&lt;/li&gt;<font></font>
                        &lt;li&gt;&lt;a href="#"&gt;Media Centre&lt;/a&gt;&lt;/li&gt;<font></font>
                        &lt;li&gt;&lt;a href="#"&gt;Register your Tools&lt;/a&gt;&lt;/li&gt;<font></font>
                        &lt;li&gt;&lt;a href="#"&gt;About Us&lt;/a&gt;&lt;/li&gt;<font></font>
                        &lt;li&gt;&lt;a href="#"&gt;<font></font>
                            &lt;button type="button" class="btn btn-default"&gt;Where to Buy&lt;/button&gt;&lt;/a&gt;&lt;/li&gt;<font></font>
                    &lt;/ul&gt;<font></font>
                &lt;/div&gt;<font></font>
                &lt;div class="searchArea"&gt;<font></font>
                    &lt;input type="text" /&gt;<font></font>
                    &lt;a href="#" class="goBtn"&gt;GO&lt;/a&gt;<font></font>
                &lt;/div&gt;<font></font>
            &lt;/div&gt;<font></font>
        &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div class="mainNavArea"&gt;<font></font>
        &lt;div class="container rel"&gt;<font></font>
<font></font>
            &lt;div class="logo"&gt;<font></font>
                &lt;img src="/SiteFiles/img/logo.png" title="Milwaukee - Nothing but heavy duty" alt="Milwaukee - Nothing but heavy duty" /&gt;<font></font>
            &lt;/div&gt;<font></font>
            &lt;div class="navi"&gt;<font></font>
                &lt;div class="navbar"&gt;<font></font>
                    &lt;div class="container"&gt;<font></font>
<font></font>
                        &lt;!-- .navbar-toggle is used as the toggle for collapsed navbar content --&gt;<font></font>
                        &lt;button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse"&gt;<font></font>
                            &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
                            &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
                            &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
                        &lt;/button&gt;<font></font>
<font></font>
                        &lt;!-- Place everything within .navbar-collapse to hide it until above 768px --&gt;<font></font>
                        &lt;div class="nav-collapse collapse navbar-responsive-collapse"&gt;<font></font>
                            &lt;ul class="nav nav-justified"&gt;<font></font>
                                &lt;li&gt;&lt;span class="dropArrow"&gt;&amp;nbsp;&lt;/span&gt;&lt;span class="topNavPosition"&gt;Power Tools&lt;/span&gt;<font></font>
<font></font>
                                    &lt;div class="navDrop"&gt;<font></font>
                                        &lt;div class="navDropInner"&gt;<font></font>
                                            &lt;div class="row"&gt;<font></font>
                                                &lt;div class="hidden-sm col-sm-4 col-lg-4"&gt;<font></font>
                                                    &lt;img src="/SiteFiles/img/drill.jpg" alt="" /&gt;<font></font>
                                                &lt;/div&gt;<font></font>
                                                &lt;div class="col-12 col-sm-8 col-lg-8"&gt;<font></font>
                                                    &lt;h2&gt;Power Tools&lt;/h2&gt;<font></font>
                                                    &lt;div class="row"&gt;<font></font>
                                                        &lt;div class="col-6 col-sm-6 col-lg-6"&gt;<font></font>
                                                            &lt;a href="#"&gt;Cutters&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Levels&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Pliers&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Saws&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Screwdrivers&lt;/a&gt;<font></font>
                                                        &lt;/div&gt;<font></font>
                                                        &lt;div class="col-6 col-sm-6 col-lg-6"&gt;<font></font>
                                                            &lt;a href="#"&gt;Snips&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Utility Knives&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Combo Knives&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Hand Tool Accessories&lt;/a&gt;<font></font>
                                                        &lt;/div&gt;<font></font>
                                                    &lt;/div&gt;<font></font>
                                                &lt;/div&gt;<font></font>
                                            &lt;/div&gt;<font></font>
                                        &lt;/div&gt;<font></font>
                                        &lt;a href="#" class="closeNav"&gt;X&lt;/a&gt;<font></font>
                                    &lt;/div&gt;<font></font>
                                &lt;/li&gt;<font></font>
                                &lt;li&gt;&lt;span class="dropArrow"&gt;&amp;nbsp;&lt;/span&gt;&lt;span class="topNavPosition"&gt;Hand Tools&lt;/span&gt;<font></font>
<font></font>
                                    &lt;div class="navDrop"&gt;<font></font>
                                        &lt;div class="navDropInner"&gt;<font></font>
                                            &lt;div class="row"&gt;<font></font>
                                                &lt;div class="hidden-sm col-sm-4 col-lg-4"&gt;<font></font>
                                                    &lt;img src="/SiteFiles/img/drill.jpg" alt="" /&gt;<font></font>
                                                &lt;/div&gt;<font></font>
                                                &lt;div class="col-12 col-sm-8 col-lg-8"&gt;<font></font>
                                                    &lt;h2&gt;Hand Tools&lt;/h2&gt;<font></font>
                                                    &lt;div class="row"&gt;<font></font>
                                                        &lt;div class="col-6 col-sm-6 col-lg-6"&gt;<font></font>
                                                            &lt;a href="#"&gt;Cutters&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Levels&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Pliers&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Saws&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Screwdrivers&lt;/a&gt;<font></font>
                                                        &lt;/div&gt;<font></font>
                                                        &lt;div class="col-6 col-sm-6 col-lg-6"&gt;<font></font>
                                                            &lt;a href="#"&gt;Snips&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Utility Knives&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Combo Knives&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Hand Tool Accessories&lt;/a&gt;<font></font>
                                                        &lt;/div&gt;<font></font>
                                                    &lt;/div&gt;<font></font>
                                                &lt;/div&gt;<font></font>
                                            &lt;/div&gt;<font></font>
                                        &lt;/div&gt;<font></font>
                                        &lt;a href="#" class="closeNav"&gt;X&lt;/a&gt;<font></font>
                                    &lt;/div&gt;<font></font>
                                &lt;/li&gt;<font></font>
                                &lt;li&gt;&lt;span class="dropArrow"&gt;&amp;nbsp;&lt;/span&gt;&lt;span class="topNavPosition"&gt;Test &amp; Measurement&lt;/span&gt;<font></font>
<font></font>
                                    &lt;div class="navDrop"&gt;<font></font>
                                        &lt;div class="navDropInner"&gt;<font></font>
                                            &lt;div class="row"&gt;<font></font>
                                                &lt;div class="hidden-sm col-sm-4 col-lg-4"&gt;<font></font>
                                                    &lt;img src="/SiteFiles/img/drill.jpg" alt="" /&gt;<font></font>
                                                &lt;/div&gt;<font></font>
                                                &lt;div class="col-12 col-sm-8 col-lg-8"&gt;<font></font>
                                                    &lt;h2&gt;Test &amp; Measurement&lt;/h2&gt;<font></font>
                                                    &lt;div class="row"&gt;<font></font>
                                                        &lt;div class="col-6 col-sm-6 col-lg-6"&gt;<font></font>
                                                            &lt;a href="#"&gt;Cutters&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Levels&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Pliers&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Saws&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Screwdrivers&lt;/a&gt;<font></font>
                                                        &lt;/div&gt;<font></font>
                                                        &lt;div class="col-6 col-sm-6 col-lg-6"&gt;<font></font>
                                                            &lt;a href="#"&gt;Snips&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Utility Knives&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Combo Knives&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Hand Tool Accessories&lt;/a&gt;<font></font>
                                                        &lt;/div&gt;<font></font>
                                                    &lt;/div&gt;<font></font>
                                                &lt;/div&gt;<font></font>
                                            &lt;/div&gt;<font></font>
                                        &lt;/div&gt;<font></font>
                                        &lt;a href="#" class="closeNav"&gt;X&lt;/a&gt;<font></font>
                                    &lt;/div&gt;<font></font>
                                &lt;/li&gt;<font></font>
                                &lt;li&gt;&lt;span class="dropArrow"&gt;&amp;nbsp;&lt;/span&gt;&lt;span class="topNavPosition"&gt;Accessories&lt;/span&gt;<font></font>
<font></font>
                                    &lt;div class="navDrop"&gt;<font></font>
                                        &lt;div class="navDropInner"&gt;<font></font>
                                            &lt;div class="row"&gt;<font></font>
                                                &lt;div class="hidden-sm col-sm-4 col-lg-4"&gt;<font></font>
                                                    &lt;img src="/SiteFiles/img/drill.jpg" alt="" /&gt;<font></font>
                                                &lt;/div&gt;<font></font>
                                                &lt;div class="col-12 col-sm-8 col-lg-8"&gt;<font></font>
                                                    &lt;h2&gt;Accessories&lt;/h2&gt;<font></font>
                                                    &lt;div class="row"&gt;<font></font>
                                                        &lt;div class="col-6 col-sm-6 col-lg-6"&gt;<font></font>
                                                            &lt;a href="#"&gt;Cutters&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Levels&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Pliers&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Saws&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Screwdrivers&lt;/a&gt;<font></font>
                                                        &lt;/div&gt;<font></font>
                                                        &lt;div class="col-6 col-sm-6 col-lg-6"&gt;<font></font>
                                                            &lt;a href="#"&gt;Snips&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Utility Knives&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Combo Knives&lt;/a&gt;<font></font>
                                                            &lt;a href="#"&gt;Hand Tool Accessories&lt;/a&gt;<font></font>
                                                        &lt;/div&gt;<font></font>
                                                    &lt;/div&gt;<font></font>
                                                &lt;/div&gt;<font></font>
                                            &lt;/div&gt;<font></font>
                                        &lt;/div&gt;<font></font>
                                        &lt;a href="#" class="closeNav"&gt;X&lt;/a&gt;<font></font>
                                    &lt;/div&gt;<font></font>
                                &lt;/li&gt;<font></font>
                            &lt;/ul&gt;<font></font>
                        &lt;/div&gt;<font></font>
                        &lt;!-- /.nav-collapse --&gt;<font></font>
                    &lt;/div&gt;<font></font>
                    &lt;!-- /.container --&gt;<font></font>
                &lt;/div&gt;<font></font>
                &lt;!-- /.navbar --&gt;<font></font>
            &lt;/div&gt;<font></font>
<font></font>
        &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/header&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3868篇《Twitter Bootstrap 3的IE8问题》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，尝试了第一个答案，但是缺少了一些东西。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Webpack，您的CSS将作为一个样式标签加载，而response.js不支持该样式标签，它需要一个文件，因此请确保引导程序已作为一个CSS文件加载</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我个人使用过 </font></font><code>extract-text-webpack-plugin</code> </p>

<pre><code>const webpack = require("webpack")<font></font>
const ExtractTextPlugin = require("extract-text-webpack-plugin")<font></font>
const path = require("path")<font></font>
<font></font>
module.exports = {<font></font>
    context: __dirname+"/src",<font></font>
    entry: "./index.js",<font></font>
    output: {<font></font>
        filename: "./dist/bundle.js",<font></font>
        path: __dirname<font></font>
    },<font></font>
    plugins: [<font></font>
        ...,<font></font>
        new ExtractTextPlugin("./dist/bootstrap.css", {<font></font>
            allChunks: true<font></font>
        })<font></font>
    ],<font></font>
    module: {<font></font>
        loaders: [<font></font>
            ...,<font></font>
            // your css loader excluding bootstrap<font></font>
            {<font></font>
                test: /\.css$/,<font></font>
                loader: "style!css",<font></font>
                exclude: [<font></font>
                    path.resolve(__dirname, "node_modules/bootstrap/dist/css/bootstrap.css")<font></font>
                ]<font></font>
            },<font></font>
<font></font>
            {<font></font>
                // loads bootstrap as a file, change path accordingly if needs be, path needs to be absolute<font></font>
                include: [<font></font>
                    path.resolve(__dirname, "node_modules/bootstrap/dist/css/bootstrap.css")<font></font>
                ],<font></font>
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?minimize")<font></font>
            }<font></font>
        ]<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对你有帮助</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><h2><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保分别链接引导源</font></font></em></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用</font></font><code>LESS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>SASS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不想贪图样式。</font><font style="vertical-align: inherit;">在我的项目中</font></font><code>bootstrap.min.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我的主要样式</font><font style="vertical-align: inherit;">包含</font><font style="vertical-align: inherit;">在文件的顶部，因此所有样式都应该只有一个请求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，boostrap类无法正常工作。</font><font style="vertical-align: inherit;">当单独添加时，将按预期工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此解决方案 </font></font></p>

<pre><code>&lt;!--[if lt IE 9]&gt;<font></font>
&lt;script src="js/css3-mediaqueries.js"&gt;&lt;/script&gt;<font></font>
&lt;link rel="stylesheet" type="text/css" href="css/bootstrap-ie7.css" /&gt;<font></font>
&lt;![endif]--&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此字符串</font></font><code>&lt;script src="js/css3-mediaqueries.js"&gt;&lt;/script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启用媒体查询。</font><font style="vertical-align: inherit;">此字符串</font></font><code>&lt;link rel="stylesheet" type="text/css" href="css/bootstrap-ie7.css" /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启用引导字体。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Bootstrap 3.3.5上测试</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接下载   </font></font><a href="https://github.com/livingston/css3-mediaqueries-js" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">mediaqieries.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">链接下载   </font></font><a href="https://github.com/coliff/bootstrap-ie7" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bootstrap-ie7.css</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已解决以下步骤。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（1）为drupal 7安装了Respond.js模块。（2）在库中而不是module文件夹中设置了drupal 7的lessphp模块。</font><font style="vertical-align: inherit;">（3）（3.1）</font></font><code>&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（3.2）</font></font></p>

<pre><code>&lt;!--[if lt IE 9]&gt;<font></font>
  &lt;script src="js/html5shiv.js"&gt;&lt;/script&gt;<font></font>
&lt;![endif]--&gt;  <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从主题设置使用CDN引导程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要了解更多信息，请查看我的Drupal设计和开发网站博客</font></font><a href="http://www.devangsolanki.com" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">www.devangsolanki.com</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的头部标签是这样的：</font></font></p>

<pre><code>&lt;head&gt;<font></font>
    &lt;meta charset="utf-8"&gt;<font></font>
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;<font></font>
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;<font></font>
    &lt;!-- Bootstrap core CSS --&gt;<font></font>
    &lt;link href="css/modern-business.css" rel="stylesheet"&gt;<font></font>
    &lt;link href="font-awesome/css/font-awesome.min.css" rel="stylesheet"&gt;<font></font>
    &lt;link href="css/bootstrap.css" rel="stylesheet" media="screen"&gt;<font></font>
    &lt;script src="js/jquery.js"&gt;&lt;/script&gt;<font></font>
    &lt;script src="js/bootstrap.min.js"&gt;&lt;/script&gt;<font></font>
    &lt;script src="js/modern-business.js"&gt;&lt;/script&gt;<font></font>
     &lt;!--[if lt IE 9]&gt;<font></font>
      &lt;script src="js/html5shiv.js"&gt;&lt;/script&gt;<font></font>
      &lt;script src="js/respond.js"&gt;&lt;/script&gt;<font></font>
    &lt;![endif]--&gt;  <font></font>
&lt;/head&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要在本地尝试...通过本地主机尝试，或创建质量检查服务器并设置内容并尝试。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们需要bootstrap 3的response.js，如果仅将其放入js并将其附加到标头中的html，它将无法在本地计算机上工作。</font><font style="vertical-align: inherit;">它将说访问被拒绝。</font><font style="vertical-align: inherit;">它仅通过服务器工作，因为IE具有安全限制。</font><font style="vertical-align: inherit;">：P</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是抬起头来。</font><font style="vertical-align: inherit;">我有同样的问题，以上都不适合我。</font><font style="vertical-align: inherit;">最终，我发现</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">response.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法解析通过</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@import</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用的CSS </font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我已经将整个</font></font><code>bootstrap.min.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进口通过</font></font><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的</font></font><code>main.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，请确保您没有任何包含通过</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@import</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用的媒体查询的CSS </font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从bootstrapv2迁移到v3时，我遇到了完全相同的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果（像我一样）通过用col-sm-X替换旧的spanX进行迁移，则还需要添加col-X类。</font><font style="vertical-align: inherit;">col-X是任何@media块之外的样式，因此它们无需媒体查询支持即可工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要固定容器的宽度，您可以在@media块之外自行设置。</font><font style="vertical-align: inherit;">就像是：</font></font></p>

<pre><code>.container {<font></font>
  max-width: @container-tablet;<font></font>
}<font></font>
@import "twitter-bootstrap/less/bootstrap";<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在IE 10.0中遇到了同样的问题。</font><font style="vertical-align: inherit;">我知道这并不是OP中的问题，但也许对其他人有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我在文档的开头有一个空行：</font></font></p>

<pre><code>[blank line]<font></font>
&lt;!DOCTYPE html&gt;<font></font>
&lt;html lang="es"&gt;<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果空白行位于DOCTYPE和标签之间，则还会显示问题：</font></font></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
[blank line]<font></font>
&lt;html lang="es"&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一旦我删除了空白行，并且没有神奇的X-UA-Compatible元，IE 10就开始正确渲染该网站。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是PHP和Smarty，请谨慎对待Smarty注释，因为它们会添加那些有问题的空白行：-)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村Mandy</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要添加- </font></font><code>&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Bootstrap 3-在我的本地IE上运行它。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我把它直播在IE中不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是Bootstrap在他们的模板中没有包含那行代码，我不确定为什么，但这可能是因为它与W3C不兼容。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已解决此问题。</font><font style="vertical-align: inherit;">实际上，IE7和8不正确支持@media，如果您检查css中的“ col-md- *”类，则宽度为992px。</font><font style="vertical-align: inherit;">只需创建一个新的CSS文件IE，例如：IE.css并添加条件注释。</font><font style="vertical-align: inherit;">然后，只需使用那里的任何媒体查询直接复制设计所需的类，就可以完成。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如前所述，存在两个不同的问题：1）IE8不支持媒体查询2）与跨域CSS文件结合使用的response.js必须如前所述。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想使用BootstrapCDN，请使用以下示例：</font></font></p>

<pre><code>&lt;link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css"&gt;<font></font>
&lt;!--[if lt IE 9]&gt;<font></font>
    &lt;link href="//netdna.bootstrapcdn.com/respond-proxy.html" id="respond-proxy" rel="respond-proxy" /&gt;<font></font>
    &lt;link href="img/ie/respond.proxy.gif" id="respond-redirect" rel="respond-redirect" /&gt;<font></font>
    &lt;script src="js/ie/html5shiv.js"&gt;&lt;/script&gt;<font></font>
    &lt;script src="js/ie/respond.min.js"&gt;&lt;/script&gt;<font></font>
    &lt;script src="js/ie/respond.proxy.js"&gt;&lt;/script&gt;<font></font>
&lt;![endif]--&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还要确保在本地目录中复制response.proxy.gif，response.min.js和response.proxy.js</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProGreen</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">验证后：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOCTYPE</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">X-UA兼容的元标记</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含html5shiv.js和response.js（并下载最新版本）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地的response.js</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从Web服务器而非File：//托管网站</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不使用@import</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">col-lg，col-md和col-sm仍然无法正常工作。</font><font style="vertical-align: inherit;">最后，我将对Bootstrap的引用移到了对html5shiv.js和response.js的引用之前，所有这些都起作用了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个片段：</font></font></p>

<pre><code>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;<font></font>
&lt;html xmlns="http://www.w3.org/1999/xhtml" lang="en"&gt;<font></font>
&lt;head&gt;<font></font>
    &lt;meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /&gt;<font></font>
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge" /&gt;<font></font>
    &lt;meta name="viewport" content="width=device-width, initial-scale=1" /&gt;<font></font>
<font></font>
    &lt;title&gt;Bootstrap Test for IE8&lt;/title&gt;<font></font>
<font></font>
    &lt;!-- Moved these two lines up --&gt; <font></font>
    &lt;link href="includes/css/bootstrap.css" type="text/css" rel="stylesheet" /&gt;<font></font>
    &lt;script src="includes/js/bootstrap.js"&gt;&lt;/script&gt;<font></font>
<font></font>
    &lt;!--[if lt IE 9]&gt;<font></font>
      &lt;script src="includes/js/html5shiv.js"&gt;&lt;/script&gt;<font></font>
      &lt;script src="includes/js/respond.min.js"&gt;&lt;/script&gt;<font></font>
    &lt;![endif]--&gt;    <font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
    &lt;div class="container"&gt;<font></font>
        &lt;div class="row"&gt;<font></font>
            &lt;div class="col-md-4" style="background-color:red;"&gt;col-md-4&lt;/div&gt;<font></font>
            &lt;div class="col-md-8" style="background-color:green;"&gt;col-md-8&lt;/div&gt;<font></font>
        &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从解释中可以看出，IE8是您的标准版本，并且</font></font><code>content="IE=edge"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将以最高模式呈现页面。</font><font style="vertical-align: inherit;">为了使其兼容，请将其更改为</font></font><code>content="IE=8"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE8模式支持许多已建立的标准，包括W3C级联样式表2.1规范和W3C选择器API。</font><font style="vertical-align: inherit;">它还为W3C级联样式表3级规范（工作草案）和其他新兴标准提供了有限的支持。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边缘模式告诉Internet Explorer以可用的最高模式显示内容。</font><font style="vertical-align: inherit;">使用Internet Explorer 9，这等效于IE9模式。</font><font style="vertical-align: inherit;">如果将来的Internet Explorer版本支持更高的兼容性模式，则设置为边缘模式的页面将以该版本支持的最高模式显示。</font><font style="vertical-align: inherit;">使用Internet Explorer 9查看时，这些页面仍将以IE9模式显示。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考</font></font><a href="https://stackoverflow.com/questions/6771258/whats-the-difference-if-meta-http-equiv-x-ua-compatible-content-ie-edge-e"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&lt;meta http-equiv =“ X-UA-Compatible” content =“ IE = edge”&gt;是做什么的？</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要忘了将CSS链接放在中，</font></font><code>&lt;head&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为</font></font><code>respond.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需那些</font><font style="vertical-align: inherit;">链接即可</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从Bootstrap 2过渡到3时，我也遇到了同样的问题。我已经获得了response.js和html5shiv.js并将我的meta设置为edge。</font><font style="vertical-align: inherit;">我错过了导航栏元素类型从2更改为3的情况。</font><font style="vertical-align: inherit;">在Bootstrap 2中，它是导航。</font><font style="vertical-align: inherit;">在Bootstrap 3中，它现在是标题。</font><font style="vertical-align: inherit;">因此，要完全解决问题，我必须</font></font></p>

<pre><code>&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在加载CSS之后，请输入以下内容：</font></font></p>

<pre><code>&lt;!--[if lt IE 9]&gt;  <font></font>
    &lt;script src="~/Content/compatibility/html5shiv.js"&gt;&lt;/script&gt;<font></font>
    &lt;script src="~/Content/compatibility/respond.min.js"&gt;&lt;/script&gt;<font></font>
&lt;![endif]--&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后改变 </font></font></p>

<pre><code>&lt;nav class="navbar" role="navigation"&gt;<font></font>
&lt;/nav&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至</font></font></p>

<pre><code>&lt;header class="navbar" role="navigation"&gt;<font></font>
&lt;/header&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哦，好吧，我还加了</font></font></p>

<pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅仅是因为这就是Bootstrap网站本身所拥有的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以防万一。</font><font style="vertical-align: inherit;">加载css文件后，请确保加载IE特定的js文件。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您从CDN（bootstrapcdn.com）获得了CSS，response.js仅适用于本地文件。</font><font style="vertical-align: inherit;">因此，请使用bootstrap.css的本地副本在IE8上尝试您的网站。</font><font style="vertical-align: inherit;">或阅读：   </font></font><a href="https://github.com/scottjehl/Respond#cdnx-domain-setup" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CDN / X域设置</font></font></a></p>

<p><strike><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另请参见：</font><a href="https://github.com/scottjehl/Respond/pull/206" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/scottjehl/Respond/pull/206" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/scottjehl/Respond/pull/206</font></font></a></strike></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请阅读：</font><a href="http://getbootstrap.com/getting-started/#support" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://getbootstrap.com/getting-started/#support" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//getbootstrap.com/getting-started/#support</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，Internet Explorer 8需要使用response.js来启用媒体查询支持。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另请参阅：</font><a href="https://github.com/scottjehl/Respond" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/scottjehl/Respond" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/scottjehl/Respond</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，基本模板的头部包含以下几行：</font></font></p>

<pre><code>&lt;!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries --&gt;<font></font>
&lt;!--[if lt IE 9]&gt;<font></font>
  &lt;script src="../../assets/js/html5shiv.js"&gt;&lt;/script&gt;<font></font>
  &lt;script src="../../assets/js/respond.min.js"&gt;&lt;/script&gt;<font></font>
&lt;![endif]--&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Mandy</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">放在</font></font><code>respond.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面底部但在关闭</font></font><code>body</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">之前</font><font style="vertical-align: inherit;">，这是的链接，</font></font><code>respond.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在您的本地主机中运行此代码。</font></font></p>

<p><a href="https://github.com/scottjehl/Respond" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/scottjehl/回复</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom凯</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，引导程序最小化的CSS导致了问题。</font><font style="vertical-align: inherit;">为了使Bootstrap 3.0.2在IE8中响应（使用F12开发人员工具模拟），我必须：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1-设置X-UA兼容标志。</font></font></p>

<pre><code>&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2-使用非最小的bootstrap.css，而不是bootstrap.min.css</font></font></p>

<pre><code>&lt;link href="/css/bootstrap.css" rel="stylesheet" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3-添加react.js（和html5shiv.js）</font></font></p>

<pre><code>&lt;!--[if lt IE 9]&gt;<font></font>
  &lt;script src="/js/html5shiv.min.js"&gt;&lt;/script&gt;<font></font>
  &lt;script src="/js/respond.min.js"&gt;&lt;/script&gt;<font></font>
&lt;![endif]--&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还必须设置以下META标签：</font></font></p>

<pre><code>&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt; 
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
