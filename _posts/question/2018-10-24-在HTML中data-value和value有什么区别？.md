---
layout: question
title:  在HTML中data-value和value有什么区别？
date:   2018-10-24T09:29:12.000Z
description: <form><input type="text" name="myname" data-value="dhoni" value="sachin"></for...
img: 
author: 杨天栾
category: question
answer: 1
tags: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><pre>
<code>&lt;form&gt;
&lt;input type=&quot;text&quot; name=&quot;myname&quot; data-value=&quot;dhoni&quot; value=&quot;sachin&quot;&gt;
&lt;/form&gt;</code></pre>

<p><code>在HTML中data-value和value有什么区别？</code></p>

<p>&nbsp;</p>
</div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第79篇《在HTML中data-value和value有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">杨天栾</span>
            <span class="discuss-time">2018.10.24</span>
          </div>
          <div class="discuss-comment">They are both attributes, but the value attribute (together with name attribute) can be natively accessed by most server-side languages. Whereas data-value can only be natively accessed by the client-side.

Data attribute can also have different suffix, you could name it; data-name, data-email, data-content, and etc. You could say it's "customizable".</div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
