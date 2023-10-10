---
layout: question
title:  ngrok尝试连接到React开发服务器时无效的主机头
date:   2020-03-11T04:16:37.000Z
description: 我正在尝试在移动设备上测试我的React应用程序。我正在使用ngrok使本地服务器可用于其他设备，并且可以与其他各种应用程序一起使用。但是，当我尝试将ng...
img: 
author: 村村神无猴子
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在移动设备上测试我的React应用程序。</font><font style="vertical-align: inherit;">我正在使用ngrok使本地服务器可用于其他设备，并且可以与其他各种应用程序一起使用。</font><font style="vertical-align: inherit;">但是，当我尝试将ngrok连接到React开发服务器时，出现错误：</font></font></p>

<pre><code>Invalid Host Header 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我相信默认情况下，React会阻止来自另一个来源的所有请求。</font><font style="vertical-align: inherit;">有什么想法吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第652篇《ngrok尝试连接到React开发服务器时无效的主机头》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋宝儿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到类似的问题，发现有两种解决方案，它们可以直接在浏览器中查看应用程序</font></font></p>

<pre><code>ngrok http 8080 -host-header="localhost:8080"<font></font>
ngrok http --host-header=rewrite 8080<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然用您正在运行的任何端口替换8080</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我在嵌入式页面中使用此解决方案时，此解决方案仍会引发错误，该错误会从react应用程序中获取bundle.js。</font><font style="vertical-align: inherit;">我认为，因为它将标头重写为localhost，所以在嵌入时，它正在寻找的localhost是该应用程序不再在其上运行</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
