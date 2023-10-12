---
layout: question
title:  用express.js的静态文件
date:   2020-03-23T06:28:39.000Z
description: 我想将服务index.html和/media子目录作为静态文件提供。索引文件应同时在/index.html和/URL处提供。我有web_serve...
img: 
author: 十三LEY
category: question
answer: 1
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想将服务</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>/media</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">子目录作为静态文件提供。</font><font style="vertical-align: inherit;">索引文件应同时在</font></font><code>/index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">URL处提供。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有</font></font></p>

<pre><code>web_server.use("/media", express.static(__dirname + '/media'));<font></font>
web_server.use("/", express.static(__dirname));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是第二行显然可以处理整个</font></font><code>__dirname</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，包括其中的所有文件（不只是</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">and </font></font><code>media</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），我不希望这样。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也试过</font></font></p>

<pre><code>web_server.use("/", express.static(__dirname + '/index.html'));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是访问基本URL </font></font><code>/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会导致对</font></font><code>web_server/index.html/index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（双重</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件）</font><font style="vertical-align: inherit;">的请求</font><font style="vertical-align: inherit;">，这当然会失败。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有任何想法吗？</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顺便说一下，我在Express中找不到关于此主题的文档（</font></font><code>static()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+它的参数）...令人沮丧。</font><font style="vertical-align: inherit;">也欢迎使用doc链接。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2829篇《用express.js的静态文件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><code>express.static()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">期望第一个参数是</font><font style="vertical-align: inherit;">目录</font><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路径</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而不是文件名。</font><font style="vertical-align: inherit;">我建议创建另一个子目录来包含您的目录</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使用它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Express </font></font><a href="https://expressjs.com/en/starter/static-files.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://expressjs.com/en/resources/middleware/serve-static.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更详细的</font></font><code>serve-static</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供静态文件</font><font style="vertical-align: inherit;">，包括</font></font><a href="https://expressjs.com/en/resources/middleware/serve-static.html#index" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认的提供行为</font></font><code>index.html</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，此模块将发送“ index.html”文件以响应目录请求。</font><font style="vertical-align: inherit;">要禁用此设置false或提供新的索引，请按首选顺序传递字符串或数组。</font></font></p>
</blockquote></div>
        </div></div>
    {% endraw %}
  </div>
<div>
