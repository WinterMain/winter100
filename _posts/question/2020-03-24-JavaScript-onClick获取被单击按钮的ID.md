---
layout: question
title:  JavaScript-onClick获取被单击按钮的ID
date:   2020-03-24T09:56:40.000Z
description: 如何找到被点击的按钮的ID？<button id="1" onClick="reply_click()"></button><button id="...
img: 
author: 老丝
category: question
answer: 3
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何找到被点击的按钮的ID？</font></font></p>

<pre><code>&lt;button id="1" onClick="reply_click()"&gt;&lt;/button&gt;<font></font>
&lt;button id="2" onClick="reply_click()"&gt;&lt;/button&gt;<font></font>
&lt;button id="3" onClick="reply_click()"&gt;&lt;/button&gt;<font></font>
<font></font>
function reply_click()<font></font>
{<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3602篇《JavaScript-onClick获取被单击按钮的ID》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProEva</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用纯JAVASCRIPT：我知道已经很晚了，但可能对将来的人们有帮助：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML部分：</font></font></p>

<pre><code>&lt;button id="1" onClick="reply_click()"&gt;&lt;/button&gt;<font></font>
&lt;button id="2" onClick="reply_click()"&gt;&lt;/button&gt;<font></font>
&lt;button id="3" onClick="reply_click()"&gt;&lt;/button&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Javascipt控制器中：</font></font></p>

<pre><code>function reply_click()<font></font>
{<font></font>
    alert(event.srcElement.id);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，我们在调用javascript函数时不必绑定Element的“ id”。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将记录已单击元素的ID：addFields。</font></font></p>

<pre><code>&lt;button id="addFields" onclick="addFields()"&gt;+&lt;/button&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
<font></font>
function addFields(){ <font></font>
    console.log(event.toElement.id)<font></font>
}<font></font>
<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要发送ID作为功能参数。</font><font style="vertical-align: inherit;">像这样做：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;button id="1" onClick="reply_click(this.id)"&gt;B1&lt;/button&gt;<font></font>
&lt;button id="2" onClick="reply_click(this.id)"&gt;B2&lt;/button&gt;<font></font>
&lt;button id="3" onClick="reply_click(this.id)"&gt;B3&lt;/button&gt;<font></font>
    <font></font>
&lt;script type="text/javascript"&gt;<font></font>
  function reply_click(clicked_id)<font></font>
  {<font></font>
      alert(clicked_id);<font></font>
  }<font></font>
&lt;/script&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将发送ID </font></font><code>this.id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为</font></font><code>clicked_id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在您的函数中使用。</font></font><a href="http://jsfiddle.net/R77EB/" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里查看实际操作。</font></font></strong></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
