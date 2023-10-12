---
layout: question
title:  在ajax回调结束时使用.bind（this）的目的？
date:   2020-03-19T06:34:34.000Z
description: 在reactjs教程中，.bind(this)在ajax回调的末尾有什么用途？没有它，代码是否可以正常工作？        data  JSON.st...
img: 
author: 飞云飞云
category: question
answer: 1
tags: 阿贾克斯 React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在reactjs教程中，</font></font><code>.bind(this)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ajax回调的末尾</font><font style="vertical-align: inherit;">有什么用途</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">没有它，代码是否可以正常工作？</font></font></p>

<pre><code>        data: JSON.stringify({text: text}),<font></font>
        success: function (data) {<font></font>
            this.setState({data: data});<font></font>
        }.bind(this),<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2398篇《在ajax回调结束时使用.bind（this）的目的？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilTony泡芙</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>.bind(this)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让ajax回调结束</font><font style="vertical-align: inherit;">的目的</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与您的react类相关。</font><font style="vertical-align: inherit;">换句话说，您可以添加：</font></font></p>

<pre><code>var self = this;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ajax之外，它的工作原理相同。</font><font style="vertical-align: inherit;">您的代码等于：</font></font></p>

<pre><code>var self = this;<font></font>
$.ajax({<font></font>
    .<font></font>
    .<font></font>
    data: JSON.stringify({text: text}),<font></font>
    success: function (data) {<font></font>
        self.setState({data: data});<font></font>
    },<font></font>
    .<font></font>
    .<font></font>
});<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
