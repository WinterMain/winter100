---
layout: question
title:  使用jQuery向<select>添加选项？
date:   2020-03-11T03:59:44.000Z
description: option使用jQuery向下拉菜单添加的最简单方法是什么？这样行吗？$("#mySelect").append('<option value=...
img: 
author: 阿飞十三
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>option</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用jQuery向下拉菜单</font><font style="vertical-align: inherit;">添加的最简单方法是</font><font style="vertical-align: inherit;">什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样行吗？</font></font></p>

<pre><code>$("#mySelect").append('&lt;option value=1&gt;My option&lt;/option&gt;');
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅A飞云</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>U can try below code to append to option </p>

<pre><code>  &lt;select id="mySelect"&gt;&lt;/select&gt;<font></font>
<font></font>
    &lt;script&gt;<font></font>
          $("#mySelect").append($("&lt;option&gt;&lt;/option&gt;").val("1").html("My enter code hereoption"));<font></font>
    &lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan村村达蒙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>$(function () {<font></font>
     var option = $("&lt;option&gt;&lt;/option&gt;");<font></font>
     option.text("Display text");<font></font>
     option.val("1");<font></font>
     $("#Select1").append(option);<font></font>
});<font></font>
</code></pre>

<p>If you getting data from some object, then just forward that object to function...</p>

<pre><code>$(function (product) {<font></font>
     var option = $("&lt;option&gt;&lt;/option&gt;");<font></font>
     option.text(product.Name);<font></font>
     option.val(product.Id);<font></font>
     $("#Select1").append(option);<font></font>
});<font></font>
</code></pre>

<p>Name and Id are names of object properties...so you can call them whatever you like...And ofcourse if you have Array...you want to build custom function with for loop...and then just call that function in document ready...Cheers</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim米亚西里</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Not mentioned in any answer but useful is the case where you want that option to be also selected, you can add:</p>

<pre><code>var o = new Option("option text", "value");<font></font>
o.selected=true;<font></font>
$("#mySelect").append(o);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">谷若汐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那很好。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果添加多个选项元素，我建议执行一次附加操作，而不是在每个元素上执行附加操作。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
