---
layout: question
title:  使用JavaScript（jQuery或Vanilla）选中/取消选中复选框？
date:   2020-03-12T08:52:27.000Z
description: 如何使用JavaScript，jQuery或Vanilla选中/取消选中复选框？...
img: 
author: 泡芙小宇宙十三
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用JavaScript，jQuery或Vanilla选中/取消选中复选框？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1161篇《使用JavaScript（jQuery或Vanilla）选中/取消选中复选框？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>function setCheckboxValue(checkbox,value) {<font></font>
    if (checkbox.checked!=value)<font></font>
        checkbox.click();<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony达蒙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">去检查：</font></font></p>

<pre><code>document.getElementById("id-of-checkbox").checked = true;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取消选中：</font></font></p>

<pre><code>document.getElementById("id-of-checkbox").checked = false;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪Stafan小卤蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript：</font></font></p>

<pre><code>// Check<font></font>
document.getElementById("checkbox").checked = true;<font></font>
<font></font>
// Uncheck<font></font>
document.getElementById("checkbox").checked = false;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery（1.6+）：</font></font></p>

<pre><code>// Check<font></font>
$("#checkbox").prop("checked", true);<font></font>
<font></font>
// Uncheck<font></font>
$("#checkbox").prop("checked", false);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery（1.5-）：</font></font></p>

<pre><code>// Check<font></font>
$("#checkbox").attr("checked", true);<font></font>
<font></font>
// Uncheck<font></font>
$("#checkbox").attr("checked", false);<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
