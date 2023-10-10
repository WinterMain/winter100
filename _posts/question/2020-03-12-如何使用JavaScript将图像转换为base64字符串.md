---
layout: question
title:  如何使用JavaScript将图像转换为base64字符串
date:   2020-03-12T12:35:23.000Z
description: 我需要将图像转换为base64字符串，以便可以将图像发送到服务器。是否有任何js文件用于此...？其他如何转换...
img: 
author: 阳光伽罗
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要将图像转换为base64字符串，以便可以将图像发送到服务器。</font><font style="vertical-align: inherit;">是否有任何js文件用于此...？</font><font style="vertical-align: inherit;">其他如何转换</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1326篇《如何使用JavaScript将图像转换为base64字符串》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">江山如画</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，如果您使用的是dojo，它为我们提供了直接编码或解码为base64的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使用dojox.encoding.base64编码字节数组：</font></font></p>

<pre><code>var str = dojox.encoding.base64.encode(myByteArray);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要解码base64编码的字符串：</font></font></p>

<pre><code>var bytes = dojox.encoding.base64.decode(str);
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖前端逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知，可以通过FileReader（）或将其存储在canvas元素中将图像转换为base64字符串，然后使用toDataURL（）来获取图像。我遇到了类似的问题，您可以参考此问题。</font></font></p>

<p><a href="https://stackoverflow.com/questions/26212792/convert-an-image-to-canvas-that-is-already-loaded/26554277#26554277"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将图像转换为已加载的画布</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小猿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="http://www.w3.org/TR/FileAPI/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FileAPI</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但几乎不受支持。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用HTML5 </font></font><code>&lt;canvas&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个画布，将图像加载到其中，然后用于</font></font><a href="https://developer.mozilla.org/en/DOM/HTMLCanvasElement"><code>toDataURL()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取base64表示形式（实际上，它是一个</font></font><code>data:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">URL，但其中包含base64编码的图像）。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
