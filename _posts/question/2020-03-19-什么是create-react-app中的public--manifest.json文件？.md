---
layout: question
title:  什么是create-react-app中的public / manifest.json文件？
date:   2020-03-19T02:01:27.000Z
description: 我知道manifest.json用于chrome扩展，但这是其他内容。它是文件代码：{  "short_name"  "React App",  ...
img: 
author: Tony阿飞
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道manifest.json用于chrome扩展，但这是其他内容。</font><font style="vertical-align: inherit;">它是文件代码：</font></font></p>

<pre><code>{<font></font>
  "short_name": "React App",<font></font>
  "name": "Create React App Sample",<font></font>
  "icons": [<font></font>
    {<font></font>
      "src": "favicon.ico",<font></font>
      "sizes": "192x192",<font></font>
      "type": "image/png"<font></font>
    }<font></font>
  ],<font></font>
  "start_url": "./index.html",<font></font>
  "display": "standalone",<font></font>
  "theme_color": "#000000",<font></font>
  "background_color": "#ffffff"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我更改某些值时，页面会更新，但没有任何变化。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2236篇《什么是create-react-app中的public / manifest.json文件？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙十三</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web App清单</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它描述您的应用程序，并且如果在主屏幕上添加了快捷方式，则该</font><a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" rel="noreferrer"><font style="vertical-align: inherit;">清单</font></a><font style="vertical-align: inherit;">将被移动电话使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从MDN（上面链接）：</font></font></p>

<blockquote>
  <p>The web app manifest provides information about an application (such as name, author, icon, and description) in a JSON text file. The purpose of the manifest is to install web applications to the homescreen of a device, providing users with quicker access and a richer experience.</p>
</blockquote></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
