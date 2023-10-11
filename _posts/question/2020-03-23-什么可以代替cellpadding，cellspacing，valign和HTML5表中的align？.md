---
layout: question
title:  什么可以代替cellpadding，cellspacing，valign和HTML5表中的align？
date:   2020-03-23T04:10:12.000Z
description: 在Visual Studio中，我看到以下警告：    验证（HTML 5）：属性“ cellpadding”不是元素“ table”的有效属性。...
img: 
author: 村村
category: question
answer: 1
tags: HTML CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Visual Studio中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我看到以下警告：</font></font></p>

<blockquote>
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">验证（HTML 5）：属性“ cellpadding”不是元素“ table”的有效属性。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">验证（HTML 5）：属性“ cellspacing”不是元素“ table”的有效属性。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">验证（HTML 5）：属性“ valign”不是元素“ td”的有效属性。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">验证（HTML 5）：属性“ align”不是元素“ td”的有效属性。</font></font></li>
  </ul>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果它们不是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5中的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有效属性</font><font style="vertical-align: inherit;">，那么用CSS替换它们是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2794篇《什么可以代替cellpadding，cellspacing，valign和HTML5表中的align？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这应该可以解决您的问题：</font></font></p>

<pre><code>td {<font></font>
    /* &lt;http://www.w3.org/wiki/CSS/Properties/text-align&gt;<font></font>
     * left, right, center, justify, inherit<font></font>
     */<font></font>
    text-align: center;<font></font>
    /* &lt;http://www.w3.org/wiki/CSS/Properties/vertical-align&gt;<font></font>
     * baseline, sub, super, top, text-top, middle,<font></font>
     * bottom, text-bottom, length, or a value in percentage<font></font>
     */<font></font>
    vertical-align: top;<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
