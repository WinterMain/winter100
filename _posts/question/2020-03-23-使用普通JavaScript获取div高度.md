---
layout: question
title:  使用普通JavaScript获取div高度
date:   2020-03-23T06:58:16.000Z
description: 关于如何在不使用jQuery的情况下获得div高度的任何想法？我正在搜索Stack Overflow这个问题，似乎每个答案都指向jQuery的.hei...
img: 
author: Near泡芙
category: question
answer: 1
tags: JavaScript CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于如何在不使用jQuery的情况下获得div高度的任何想法？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在搜索Stack Overflow这个问题，似乎每个答案都指向jQuery的</font></font><code>.height()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试了类似的方法</font></font><code>myDiv.style.height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是即使我的div具有</font><font style="vertical-align: inherit;">CSS </font></font><code>width</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在CSS中</font><font style="vertical-align: inherit;">进行了</font><font style="vertical-align: inherit;">设置，</font><font style="vertical-align: inherit;">它也没有返回任何内容</font><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2885篇《使用普通JavaScript获取div高度》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个选择是使用getBoundingClientRect函数。</font><font style="vertical-align: inherit;">请注意，如果元素的显示为“ none”，则getBoundingClientRect将返回一个空矩形。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>var elem = document.getElementById("myDiv");<font></font>
if(elem) {<font></font>
   var rect = elem.getBoundingClientRect();<font></font>
   console.log(rect.height);  <font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
