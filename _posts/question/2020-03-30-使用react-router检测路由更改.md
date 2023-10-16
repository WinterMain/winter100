---
layout: question
title:  使用react-router检测路由更改
date:   2020-03-30T09:40:21.000Z
description: 我必须根据浏览历史实现一些业务逻辑。我想做的是这样的：reactRouter.onUrlChange(url => {   this.histo...
img: 
author: 宝儿
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我必须根据浏览历史实现一些业务逻辑。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想做的是这样的：</font></font></p>

<pre><code>reactRouter.onUrlChange(url =&gt; {<font></font>
   this.history.push(url);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">URL更新后，有什么方法可以接收来自react-router的回调吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3850篇《使用react-router检测路由更改》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
