---
layout: question
title:  如何在没有Now的情况下在本地构建NextJS项目
date:   2020-03-24T03:15:34.000Z
description: 我需要在本地构建我的React NextJS项目以将其托管在Appache服务器上，当我运行命令时run build它不会生成构建文件夹。关于它的IR...
img: 
author: 乐米亚
category: question
answer: 2
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要</font><font style="vertical-align: inherit;">在本地</font><font style="vertical-align: inherit;">构建</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的React NextJS项目</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以将其托管</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Appache服务器上</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，当我运行命令时</font></font><code>run build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不会生成构建文件夹。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于它的IR＆D，每个人都推荐，</font></font><code>ZEIT – Next.js build with Now</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是它在云上构建项目，但是我需要为本地appache服务器构建。</font><font style="vertical-align: inherit;">所以请帮帮我。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的package.json：</font></font></p>

<pre><code>......<font></font>
"scripts": {<font></font>
"dev": "node server.js",<font></font>
"build": "next build",<font></font>
"start": "next start"<font></font>
},<font></font>
......<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3295篇《如何在没有Now的情况下在本地构建NextJS项目》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过如此多的努力，我找到了问题的答案，我必须在package.json中的脚本下添加以下行：</font></font></p>

<pre><code>"scripts": {<font></font>
    ......<font></font>
    "export": "npm run build &amp;&amp; next export"<font></font>
    .....<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，我的情况</font></font><code>npm run build &amp;&amp; next export</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是完成NextJS项目所需的完整命令。</font><font style="vertical-align: inherit;">因此，将其添加到package.json后，您只需要在terminal：中运行 
 </font></font><code>npm export</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
 ，它将为nextjs项目生成完整的构建。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您有一个</font></font><code>build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">的package.json脚本</font></font><code>next build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><code>next build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">命令将构建用于开发的应用程序，但不会创建生产捆绑包。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了在本地计算机上创建生产捆绑包，您需要指定您处于生产环境中</font></font><code>NODE_ENV=production</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（此操作在现在和其他部署服务器中自动完成）。</font><font style="vertical-align: inherit;">基本上，您的package.json最终将：</font></font></p>

<pre><code>"scripts": {<font></font>
"dev": "node server.js",<font></font>
"build": "next build",<font></font>
"start": "next start",<font></font>
"prod:build": "NODE_ENV=production npm run build"<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果愿意，</font><font style="vertical-align: inherit;">可以</font><font style="vertical-align: inherit;">直接</font><font style="vertical-align: inherit;">替换</font></font><code>npm run build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>next build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
