---
layout: question
title:  什么是nextTick或在VueJs中做什么
date:   2020-03-10T06:05:09.000Z
description: 我阅读了文档，但我听不懂。我知道哪些数据可以计算，监视，执行方法，但是nextTick()在vuejs中有什么用？...
img: 
author: 乐逆天
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我阅读了文档，但我听不懂。</font><font style="vertical-align: inherit;">我知道哪些数据可以计算，监视，执行方法，但是</font></font><code>nextTick()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在vuejs中有</font><font style="vertical-align: inherit;">什么</font><font style="vertical-align: inherit;">用？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了使Pranshat的有关使用nextTick和setTimeout的，更加明确的区别答案，我已付出他的小提琴：
 </font></font><a href="https://jsfiddle.net/wtoalabi/g7kL9Lu1/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a></p>

<pre><code>mounted() {    <font></font>
  this.one = "One";<font></font>
<font></font>
  setTimeout(() =&gt; {<font></font>
    this.two = "Two"<font></font>
  }, 0);<font></font>
<font></font>
  //this.$nextTick(()=&gt;{<font></font>
  //this.two = "Two"<font></font>
  //})}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在小提琴中看到，使用setTimeOut时，一旦装入组件，然后适应更改，初始数据将非常短暂地闪烁。</font><font style="vertical-align: inherit;">而使用nextTick时，数据被劫持，更改，然后呈现给浏览器。</font><font style="vertical-align: inherit;">因此，浏览器甚至在不了解旧数据的情况下也显示了更新的数据。</font><font style="vertical-align: inherit;">希望能一举解决两个概念。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
