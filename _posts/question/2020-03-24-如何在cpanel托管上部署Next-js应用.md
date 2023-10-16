---
layout: question
title:  如何在cpanel托管上部署Next js应用
date:   2020-03-24T02:09:06.000Z
description: 我正在尝试在cPanel上部署下一个js应用程序。我已经安装了node和npm。如何在此设置上部署下一个js应用程序？尝试在cpanel终端上构建应用...
img: 
author: DavaidTony宝儿
category: question
answer: 3
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在cPanel上部署下一个js应用程序。</font><font style="vertical-align: inherit;">我已经安装了node和npm。</font><font style="vertical-align: inherit;">如何在此设置上部署下一个js应用程序？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试在cpanel终端上构建应用程序时出现以下错误：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未处理的拒绝TypeError：child.send不是函数</font></font></strong></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3214篇《如何在cpanel托管上部署Next js应用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该运行</font></font><code>next exprot</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">静态的html和js文件，</font></font><code>out</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后将其作为可以运行的普通html网站直接添加到Cpanel </font></font><code>npm run export</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>yarn export</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过添加</font></font></p>

<pre><code>"scripts": {<font></font>
    "dev": "next",<font></font>
    "build": "next build",<font></font>
    "start": "next start",<font></font>
    "export": "next export"<font></font>
  },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些在package.json中</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Davaid</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将需要root特权。</font><font style="vertical-align: inherit;">如果您拥有它们，则可以通过SSH远程访问服务器并在其中运行npm命令。</font><font style="vertical-align: inherit;">然后它应该工作。</font><font style="vertical-align: inherit;">即，从控制台：</font></font></p>

<pre><code>ssh user@serverip<font></font>
cd /path/to/appdirectory<font></font>
npm run start<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一些选项可以在CPanel中部署NextJS应用程序：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需在CPanel中部署无服务器应用程序（无需NodeJS）。</font><font style="vertical-align: inherit;">NextJS提供了类似于</font></font><code>next export</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成优化的前端文件</font><font style="vertical-align: inherit;">的语法</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新版本的CPanel已经为您的nodejs应用程序提供了入口点：
 </font></font><a href="https://i.stack.imgur.com/sADgj.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/sADgj.png" alt="CPanel中NodeJS应用的入口点"></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在该字段上指定服务器文件。</font></font></li>
</ol></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
