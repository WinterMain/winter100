---
layout: question
title:  通过npm安装Twitter Bootstrap的目的？
date:   2020-03-23T02:28:09.000Z
description: 问题1：通过npm安装Twitter Bootstrap的目的到底是什么？我认为npm是用于服务器端模块的。自己提供引导文件比使用CDN更快吗？问...
img: 
author: Stafan
category: question
answer: 1
tags: Node.js的 Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题1：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过npm安装Twitter Bootstrap的目的到底是什么？</font><font style="vertical-align: inherit;">我认为npm是用于服务器端模块的。</font><font style="vertical-align: inherit;">自己提供引导文件比使用CDN更快吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题2：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我要npm安装Bootstrap，我将如何指向bootstrap.js和bootstrap.css文件？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2649篇《通过npm安装Twitter Bootstrap的目的？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案1：</font></font></strong></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过npm（或bower）下载引导程序可以使您获得一些延迟时间。</font><font style="vertical-align: inherit;">除了获取远程资源外，您还可以获取本地资源，这要快得多，除非您使用CDN（请查看下面的答案）</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ npm”原本是用于获取Node Module的，但是随着Java语言的发展（以及browserify的出现），它有了长足的发展。</font><font style="vertical-align: inherit;">实际上，您甚至可以在npm上下载AngularJS，这不是服务器端框架。</font><font style="vertical-align: inherit;">Browserify允许您在客户端上使用AMD / RequireJS / CommonJS，因此可以在客户端上使用节点模块。</font></font></p></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案2：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您npm安装bootstrap（如果您不使用特定的grunt或gulp文件移动到dist文件夹），那么如果我没有记错的话，您的bootstrap将位于“ ./node_modules/bootstrap/bootstrap.min.css”中。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
