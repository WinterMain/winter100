---
layout: question
title:  我收到“针对（未知URL）：0未知错误的Http故障响应”，而不是Angular中的实际错误消息
date:   2020-06-02T01:51:12.000Z
description: 我正在使用Angular 4 HttpClient将请求发送到外部服务。这是一个非常标准的设置：this.httpClient.get(url).su...
img: 
author: GO
category: question
answer: 0
tags: 角度的 TypeScript
topic: TypeScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Angular 4 </font></font><code>HttpClient</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将请求发送到外部服务。</font><font style="vertical-align: inherit;">这是一个非常标准的设置：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">this</span><span class="pun">.</span><span class="pln">httpClient</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="pln">url</span><span class="pun">).</span><span class="pln">subscribe</span><span class="pun">(</span><span class="pln">response </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
  </span><span class="com">//do something with response</span><font></font><span class="pln">
</span><span class="pun">},</span><span class="pln"> err </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">err</span><span class="pun">.</span><span class="pln">message</span><span class="pun">);</span><font></font><span class="pln">
</span><span class="pun">},</span><span class="pln"> </span><span class="pun">()</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">'completed'</span><span class="pun">);</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是，当请求失败时，我会</font></font><code>Http failure response for (unknown url): 0 Unknown Error</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在控制台中</font><font style="vertical-align: inherit;">看到一条通用 
 </font><font style="vertical-align: inherit;">消息。</font><font style="vertical-align: inherit;">同时，当我检查Chrome中失败的请求时，我可以看到响应状态为422，并且在“预览”选项卡中，我看到了描述失败原因的实际消息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何访问我在chrome开发工具中看到的实际响应消息？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是展示问题的屏幕截图：
</font></font><a href="https://www.samyoc.com//uploads/users/24177/images/thumbnails/1591062545563.png" data-src="https://www.samyoc.com//uploads/users/24177/images/1591062545563.png" rel="noreferrer"><img src="https://i.stack.imgur.com/UUp2f.png" alt="在此处输入图片说明"></a></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4245篇《我收到“针对（未知URL）：0未知错误的Http故障响应”，而不是Angular中的实际错误消息》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
