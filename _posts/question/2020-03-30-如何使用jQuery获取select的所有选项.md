---
layout: question
title:  如何使用jQuery获取select的所有选项？
date:   2020-03-30T09:13:43.000Z
description: 如何通过传递ID来通过jQuery获得select的所有选项？我只是想获得他们的价值观，而不是文字。...
img: 
author: 卡卡西Near
category: question
answer: 2
tags: JavaScript KoaJS
topic: KoaJS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何通过传递ID来通过jQuery获得select的所有选项？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是想获得他们的价值观，而不是文字。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3832篇《如何使用jQuery获取select的所有选项？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞前端</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些答案使用</font></font><code>each</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是</font></font><code>map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">恕我直言</font><font style="vertical-align: inherit;">，这</font><font style="vertical-align: inherit;">是更好的选择：</font></font></p>

<pre><code>$("select#example option").map(function() {return $(this).val();}).get();
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery </font><font style="vertical-align: inherit;">中至少有两个</font><font style="vertical-align: inherit;">函数。</font><font style="vertical-align: inherit;">Thomas Petersen的答案使用“ Utilities / jQuery.map”；</font><font style="vertical-align: inherit;">此答案使用“遍历/映射”（因此使用了更简洁的代码）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这取决于您将要使用的值。</font><font style="vertical-align: inherit;">假设您要从函数返回值，</font></font><code>map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则可能是更好的选择。</font><font style="vertical-align: inherit;">但是，如果您要直接使用这些值，则可能需要</font></font><code>each</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用：</font></font></p>

<pre><code>$("#id option").each(function()<font></font>
{<font></font>
    // Add $(this).val() to your list<font></font>
});<font></font>
</code></pre>

<p><a href="https://api.jquery.com/each/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.each（）| </font><font style="vertical-align: inherit;">jQuery API文档</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
