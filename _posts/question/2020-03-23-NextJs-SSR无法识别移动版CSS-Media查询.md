---
layout: question
title:  NextJs SSR无法识别移动版CSS Media查询
date:   2020-03-23T03:57:39.000Z
description: 我刚刚将Nextjs SSR集成到我的React项目中。在此之前，我对移动响应的CSS媒体查询运行良好。现在，当我使用Chrome浏览器的工具在移动屏幕尺...
img: 
author: 西里神奇
category: question
answer: 1
tags: CSS React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚将Nextjs SSR集成到我的React项目中。</font><font style="vertical-align: inherit;">在此之前，我对移动响应的CSS媒体查询运行良好。</font><font style="vertical-align: inherit;">现在，当我使用Chrome浏览器的工具在移动屏幕尺寸甚至我自己的设备上查看我的应用程序时，我得到的视图就像在桌面上一样。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎服务器正在渲染整个页面并采用桌面大小，并且在到达客户端时未重新渲染。</font><font style="vertical-align: inherit;">如果是这样，我如何告诉用户该用户是移动用户并使用这些CSS查询？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的媒体查询，似乎无效。</font><font style="vertical-align: inherit;">我没有在JS中使用CSS，也许应该吧？</font><font style="vertical-align: inherit;">我为每个组件使用常规的CSS文件。</font></font></p>

<pre><code>.Footer {<font></font>
    width: var(--webMaxContentWidth);<font></font>
    height: 200px;<font></font>
    background: #368efb;<font></font>
    display: flex;<font></font>
    flex-direction: column;<font></font>
    justify-content: center;<font></font>
}<font></font>
@media (max-width: 768px) {<font></font>
    .Footer {<font></font>
        width: 100%;<font></font>
        height: 400px;<font></font>
        margin: 0 20px;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何帮助表示赞赏！ </font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2778篇《NextJs SSR无法识别移动版CSS Media查询》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小猿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前，React会自动在</font></font><code>&lt;head&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的SPA中</font><font style="vertical-align: inherit;">插入以下内容</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">移至时</font></font><code>SSR</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，职责转移到开发人员来自己添加此位。</font><font style="vertical-align: inherit;">如果没有它，在</font></font><code>@media</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查询断点</font><font style="vertical-align: inherit;">时您将有一些非常意外的行为</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当您解决您的问题后发现，这已经解决了</font></font><a href="https://github.com/zeit/next.js/issues/5122" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
