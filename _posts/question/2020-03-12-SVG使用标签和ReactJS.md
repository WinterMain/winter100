---
layout: question
title:  SVG使用标签和ReactJS
date:   2020-03-12T04:44:29.000Z
description: 因此，通常包括我大多数需要简单样式的SVG图标，我这样做：<svg>    <use xlink href="/svg/svg-sprite#my-...
img: 
author: 猿神奇梅
category: question
answer: 1
tags: SVG React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，通常包括我大多数需要简单样式的SVG图标，我这样做：</font></font></p>

<pre><code>&lt;svg&gt;<font></font>
    &lt;use xlink:href="/svg/svg-sprite#my-icon" /&gt;<font></font>
&lt;/svg&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我一直在玩ReactJS作为它的后期评估在我的新的前端开发堆栈可能的成分，但是我注意到，在其支持的标记/属性列表，无论是</font></font><code>use</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>xlink:href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以使用svg精灵并以这种方式在ReactJS中加载它们？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第953篇《SVG使用标签和ReactJS》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果遇到</font></font><code>xlink:href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以通过删除冒号并打包添加的文本来获得ReactJS中的等效内容：</font></font><code>xlinkHref</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您最终可能会在SVG中使用其他名称空间标签，例如</font></font><code>xml:space</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，等等。相同的规则适用于它们（即</font></font><code>xml:space</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变为</font></font><code>xmlSpace</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
