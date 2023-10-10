---
layout: question
title:  使用webpack输出ES模块
date:   2020-03-24T07:42:19.000Z
description: 通过汇总，我可以通过简单地将format选项设置为来输出ES模块'es'。如何使用webpack做同样的事情？如果现在不可能，webpack是否有计划添加...
img: 
author: 猴子
category: question
answer: 0
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过汇总，我可以通过简单地将</font></font><code>format</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项</font><font style="vertical-align: inherit;">设置为来输出ES模块</font></font><code>'es'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如何使用webpack做同样的事情？</font><font style="vertical-align: inherit;">如果现在不可能，webpack是否有计划添加它？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在</font></font><a href="https://webpack.js.org/configuration/output/#output-librarytarget"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档中</font></font><code>output.libraryTarget</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到的唯一</font><font style="vertical-align: inherit;">提及ES模块的东西是：</font></font></p>

<blockquote>
  <p><code>libraryTarget: "commonjs-module"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-使用定义的</font></font><code>module.exports</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">公开它</font><font style="vertical-align: inherit;">（</font></font><code>output.library</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被忽略）</font></font><code>__esModule</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在互操作模式下作为ES2015模块线程化）</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这对我来说还不清楚。</font><font style="vertical-align: inherit;">是否</font></font><code>libraryTarget: "commonjs2"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><code>__esModule</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义</font><font style="vertical-align: inherit;">的唯一区别</font><font style="vertical-align: inherit;">相同</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">什么是“互操作模式”？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
