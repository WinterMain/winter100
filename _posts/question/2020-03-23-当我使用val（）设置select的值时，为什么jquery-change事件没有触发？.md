---
layout: question
title:  当我使用val（）设置select的值时，为什么jquery change事件没有触发？
date:   2020-03-23T06:11:42.000Z
description: change()当值由设置时，事件处理程序中的逻辑未运行val()，但当用户使用鼠标选择值时，该逻辑确实运行。为什么是这样？<select id="s...
img: 
author: 村村Pro
category: question
answer: 1
tags: jQuery HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>change()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当值由设置时</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">事件处理程序中</font><font style="vertical-align: inherit;">的逻辑</font><font style="vertical-align: inherit;">未运行</font></font><code>val()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但当用户使用鼠标选择值时，</font><font style="vertical-align: inherit;">该逻辑</font><font style="vertical-align: inherit;">确实运行。</font><font style="vertical-align: inherit;">为什么是这样？</font></font></p>

<pre><code>&lt;select id="single"&gt;<font></font>
    &lt;option&gt;Single&lt;/option&gt;<font></font>
    &lt;option&gt;Single2&lt;/option&gt;<font></font>
&lt;/select&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
    $(function() {<font></font>
        $(":input#single").change(function() {<font></font>
           /* Logic here does not execute when val() is used */<font></font>
        });<font></font>
    });<font></font>
<font></font>
    $("#single").val("Single2");<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2808篇《当我使用val（）设置select的值时，为什么jquery change事件没有触发？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所读的API。</font><font style="vertical-align: inherit;">仅当用户单击选项时才触发该事件。</font></font></p>

<p><a href="http://api.jquery.com/change/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://api.jquery.com/change/</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于选择框，复选框和单选按钮，当用户使用鼠标进行选择时会立即触发该事件，但是对于其他元素类型，该事件将推迟到该元素失去焦点之前。</font></font></p>
</blockquote></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
