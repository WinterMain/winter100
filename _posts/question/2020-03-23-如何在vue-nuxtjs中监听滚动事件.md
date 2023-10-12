---
layout: question
title:  如何在vue nuxtjs中监听滚动事件？
date:   2020-03-23T06:43:56.000Z
description: 我正在寻找解决方案，并想出了这段代码methods  {  handleScroll () {    console.log(window.scr...
img: 
author: 樱西门
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在寻找解决方案，并想出了这段代码</font></font></p>

<pre><code>methods: {<font></font>
  handleScroll () {<font></font>
    console.log(window.scrollY)<font></font>
  }<font></font>
},<font></font>
created () {<font></font>
  window.addEventListener('scroll', this.handleScroll);<font></font>
},<font></font>
destroyed () {<font></font>
  window.removeEventListener('scroll', this.handleScroll);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，这对我不起作用。</font><font style="vertical-align: inherit;">我也尝试将窗口更改为document.body。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误消息是 </font></font><code>Window is not defined</code></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2865篇《如何在vue nuxtjs中监听滚动事件？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">皮卡丘</span>
            <span class="discuss-time">2021.08.05</span>
          </div>
          <div class="discuss-comment"><p>if (process.browser) {</p><p>&nbsp; &nbsp; &nbsp; &nbsp;console.log(window)</p><p>&nbsp; &nbsp; &nbsp; &nbsp;console.log(window.scrollY)</p><p>&nbsp; &nbsp; &nbsp;}</p><p>我加了这个就能获取到window了</p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
