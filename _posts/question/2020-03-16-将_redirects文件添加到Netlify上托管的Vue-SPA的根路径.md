---
layout: question
title:  将_redirects文件添加到Netlify上托管的Vue SPA的根路径
date:   2020-03-16T02:09:59.000Z
description: 我正在使用Vue CLI开发单页应用程序，并且希望历史记录pushstate能够正常工作，以便获得干净的URL。我必须遵循以下步骤：https   /...
img: 
author: GO西门
category: question
answer: 2
tags: Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Vue CLI开发单页应用程序，并且希望历史记录pushstate能够正常工作，以便获得干净的URL。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我必须遵循以下步骤：</font></font><a href="https://www.netlify.com/docs/redirects/#history-pushstate-and-single-page-apps" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://www.netlify.com/docs/redirects/#history-pushstate-and-single-page-apps" rel="noreferrer"><font style="vertical-align: inherit;">//www.netlify.com/docs/redirects/#history-pushstate-and-single-page-apps</font></a><font style="vertical-align: inherit;">并使用以下命令将</font></font><code>_redirects</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到我的站点文件夹的根目录：</font></font></p>

<pre><code>/*    /index.html   200
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是我不知道如何将此</font></font><code>_redirects</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到dist文件夹的根目录中。</font><font style="vertical-align: inherit;">我尝试将其添加到静态文件夹中，但最终以子文件夹而非根目录出现。</font><font style="vertical-align: inherit;">我如何包含此文件，以便在Netlify上部署后可以使用历史记录模式？</font></font></p>

<pre><code>// config/index.js<font></font>
build: {<font></font>
  // Paths<font></font>
  assetsRoot: path.resolve(__dirname, '../dist'),<font></font>
  assetsSubDirectory: 'static',<font></font>
  assetsPublicPath: '/',<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1671篇《将_redirects文件添加到Netlify上托管的Vue SPA的根路径》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Tom小哥</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需将_redirects文件添加到vue应用程序中的/ public目录中</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyDavaidLEY</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经尝试了Rutger Willems的代码段，但没有最后一行，它可以正常工作。</font><font style="vertical-align: inherit;">归功于Hamish Moffatt。</font></font></p>

<pre><code>[[redirects]]<font></font>
  from = "/*"<font></font>
  to = "/index.html"<font></font>
  status = 200<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
