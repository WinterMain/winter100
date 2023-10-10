---
layout: question
title:  JavaScript将焦点设置为HTML表单元素
date:   2020-03-24T02:39:22.000Z
description: 我有一个带有文本框的Web表单。默认情况下，如何将焦点设置到文本框？像这样：<body onload='setFocusToTextBox()'>...
img: 
author: Jim小卤蛋
category: question
answer: 7
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个带有文本框的Web表单。</font><font style="vertical-align: inherit;">默认情况下，如何将焦点设置到文本框？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre><code>&lt;body onload='setFocusToTextBox()'&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以有人可以帮我吗？</font><font style="vertical-align: inherit;">我不知道如何使用JavaScript将焦点设置到文本框。</font></font></p>

<pre><code>&lt;script&gt;<font></font>
function setFocusToTextBox(){<font></font>
//What to do here<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3246篇《JavaScript将焦点设置为HTML表单元素》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">window.onload最初是将焦点放在onblur是在单击文本区域之外时将焦点放置，或避免文本区域模糊</font></font></p>

<pre><code>    &lt;textarea id="focus"&gt;&lt;/textarea&gt;<font></font>
    &lt;script&gt;<font></font>
     var mytexarea=document.getElementById("focus");<font></font>
    window.onload=function()<font></font>
    {<font></font>
<font></font>
    mytexarea.focus();<font></font>
<font></font>
    }<font></font>
<font></font>
mytextarea.onblur=function(){<font></font>
<font></font>
mytextarea.focus();<font></font>
<font></font>
}<font></font>
    &lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿猪猪</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做这个。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的元素是这样的。</font></font></p>

<pre><code>&lt;input type="text" id="mytext"/&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的脚本是</font></font></p>

<pre><code>&lt;script&gt;<font></font>
function setFocusToTextBox(){<font></font>
    document.getElementById("mytext").focus();<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于纯Javascript，请尝试以下操作：</font></font></p>

<pre><code>window.onload = function() {<font></font>
  document.getElementById("TextBoxName").focus();<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我以前只是用这个：</font></font></p>

<pre><code>&lt;html&gt;<font></font>
  &lt;head&gt;<font></font>
    &lt;script type="text/javascript"&gt;<font></font>
      function focusFieldOne() {<font></font>
        document.FormName.FieldName.focus();<font></font>
      }<font></font>
    &lt;/script&gt;<font></font>
  &lt;/head&gt;<font></font>
<font></font>
  &lt;body onLoad="focusFieldOne();"&gt;<font></font>
    &lt;form name="FormName"&gt;<font></font>
      Field &lt;input type="text" name="FieldName"&gt;<font></font>
    &lt;/form&gt;<font></font>
  &lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也就是说，您可以只在HTML 5中使用autofocus属性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意：我想更新这个旧线程，以显示所询问的示例以及那些仍在阅读本文的人的新的，更容易的更新。</font><font style="vertical-align: inherit;">;）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，当我们关注文本框时，还应该滚动到视图中</font></font></p>

<pre><code>function setFocusToTextBox(){<font></font>
    var textbox = document.getElementById("yourtextbox");<font></font>
    textbox.focus();<font></font>
    textbox.scrollIntoView();<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查是否有帮助。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于它的价值，您可以</font></font><code>autofocus</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML5兼容的浏览器上</font><font style="vertical-align: inherit;">使用该</font><font style="vertical-align: inherit;">属性。</font><font style="vertical-align: inherit;">从版本10开始甚至可以在IE上使用。</font></font></p>

<pre><code>&lt;input name="myinput" value="whatever" autofocus /&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的代码是：</font></font></p>

<pre><code>&lt;input type="text" id="mytext"/&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用的是JQuery，则也可以使用此方法：</font></font></p>

<pre><code>&lt;script&gt;<font></font>
function setFocusToTextBox(){<font></font>
    $("#mytext").focus();<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请记住，您必须先绘制输入 </font></font><code>$(document).ready()</code></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
