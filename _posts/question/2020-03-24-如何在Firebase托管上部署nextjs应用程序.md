---
layout: question
title:  如何在Firebase托管上部署next.js应用程序？
date:   2020-03-24T06:35:54.000Z
description: 我正在尝试在Firebase托管上部署next.js应用程序。但是我不知道将哪些文件推送到服务器。当我运行npm run build并将构建文件夹推送到f...
img: 
author: Davaid猪猪
category: question
answer: 2
tags: React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在Firebase托管上部署next.js应用程序。</font><font style="vertical-align: inherit;">但是我不知道将哪些文件推送到服务器。</font><font style="vertical-align: inherit;">当我运行</font></font><code>npm run build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将构建文件夹推送到firebase时。</font><font style="vertical-align: inherit;">但是给出的错误是找不到index.html文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是构建文件夹输出的图像。</font><font style="vertical-align: inherit;">我刚刚创建了一个用于测试目的的简单组件。</font></font></p>

<p><a href="https://i.stack.imgur.com/CSUBY.png" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成命令的输出</font></font></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3386篇《如何在Firebase托管上部署next.js应用程序？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无小卤蛋樱</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上面，</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要添加npm脚本来进行构建和导出。</font></font></p>

<pre><code>  "scripts": {<font></font>
    "dev": "next",<font></font>
    "build": "next build",<font></font>
    "start": "next start",<font></font>
    "export": "next export"<font></font>
  },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后您可以运行</font></font></p>

<pre><code>npm run build &amp;&amp; npm run export
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下一个版本将构建您的项目以进行运输和导出，并将文件准备好托管在静态托管服务器（例如firebase托管）上。</font></font></p>

<pre><code>npm run export
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将创建一个</font></font><code>out/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录，并将所有文件放在</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">目录中以供上传。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意： </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的应用需要在运行时生成动态页面，则不能将其部署为静态应用。</font></font></p>
</blockquote>

<p><a href="https://nextjs.org/learn/excel/static-html-export" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读更多</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看</font></font><a href="https://github.com/zeit/next.js/tree/canary/examples/with-firebase-hosting" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">先出。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是next.js在其github存储库中提供的官方示例。</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例背后的想法</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目标是使用Firebase托管重写规则将Next.js应用程序托管在Firebase Cloud Functions上，以便从我们的Firebase托管URL提供我们的应用程序。</font><font style="vertical-align: inherit;">每个单独的页面包都在对Cloud Function的新调用中提供，Cloud Function执行初始服务器渲染。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这基于</font><font style="vertical-align: inherit;">此处描述的</font></font><a href="https://github.com/geovanisouza92/serverless-firebase" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/geovanisouza92/serverless-firebase</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://github.com/jthegedus/firebase-functions-next-example" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/jthegedus/firebase-functions-next-example</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上的工作</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS：我知道将链接发布为答案不是最好的方法，但是我的代表力量不足以将此作为评论。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
