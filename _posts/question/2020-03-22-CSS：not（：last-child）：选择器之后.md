---
layout: question
title:  CSS：not（：last-child）：选择器之后
date:   2020-03-22T11:52:24.000Z
description: 我有一个元素列表，其样式如下：ul {    list-style-type  none;    text-align  center;}...
img: 
author: 阿飞Pro
category: question
answer: 7
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个元素列表，其样式如下：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>ul {<font></font>
    list-style-type: none;<font></font>
    text-align: center;<font></font>
}<font></font>
<font></font>
li {<font></font>
    display: inline;<font></font>
}<font></font>
<font></font>
li:not(:last-child):after {<font></font>
    content:' |';<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;ul&gt;<font></font>
    &lt;li&gt;One&lt;/li&gt;<font></font>
    &lt;li&gt;Two&lt;/li&gt;<font></font>
    &lt;li&gt;Three&lt;/li&gt;<font></font>
    &lt;li&gt;Four&lt;/li&gt;<font></font>
    &lt;li&gt;Five&lt;/li&gt;<font></font>
&lt;/ul&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出</font></font><code>One | Two | Three | Four | Five |</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><code>One | Two | Three | Four | Five</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何人都知道如何CSS选择除最后一个元素以外的所有元素？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在</font><a href="http://www.w3.org/TR/css3-selectors/#negation" rel="noreferrer"><font style="vertical-align: inherit;">此处</font></a><font style="vertical-align: inherit;">查看</font></font><code>:not()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择器</font><font style="vertical-align: inherit;">的定义</font></font><a href="http://www.w3.org/TR/css3-selectors/#negation" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom凯</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于我来说，您的示例无法在IE中运行，您必须</font><font style="vertical-align: inherit;">在文档中</font><font style="vertical-align: inherit;">指定</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Doctype标头</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，才能在IE中以标准方式呈现页面以使用内容CSS属性：</font></font></p>

<pre><code>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt;<font></font>
&lt;head&gt;<font></font>
&lt;link href="style.css" rel="stylesheet" type="text/css"&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;html&gt;<font></font>
<font></font>
&lt;ul&gt;<font></font>
    &lt;li&gt;One&lt;/li&gt;<font></font>
    &lt;li&gt;Two&lt;/li&gt;<font></font>
    &lt;li&gt;Three&lt;/li&gt;<font></font>
    &lt;li&gt;Four&lt;/li&gt;<font></font>
    &lt;li&gt;Five&lt;/li&gt;<font></font>
&lt;/ul&gt;<font></font>
<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二种方法是使用CSS 3选择器</font></font></strong></p>

<pre><code>li:not(:last-of-type):after<font></font>
{<font></font>
    content:           " |";<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是您仍然需要指定Doctype</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第三种方法是将JQuery与以下脚本结合使用：</font></font></strong></p>

<pre><code>&lt;script type="text/javascript" src="jquery-1.4.1.js"&gt;&lt;/script&gt;<font></font>
&lt;link href="style2.css" rel="stylesheet" type="text/css"&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;html&gt;<font></font>
<font></font>
&lt;ul&gt;<font></font>
    &lt;li&gt;One&lt;/li&gt;<font></font>
    &lt;li&gt;Two&lt;/li&gt;<font></font>
    &lt;li&gt;Three&lt;/li&gt;<font></font>
    &lt;li&gt;Four&lt;/li&gt;<font></font>
    &lt;li&gt;Five&lt;/li&gt;<font></font>
&lt;/ul&gt;<font></font>
<font></font>
&lt;script type="text/javascript"&gt;<font></font>
  $(document).ready(function () {<font></font>
      $("li:not(:last)").append(" | ");<font></font>
    });<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第三种方法的优点是您不必指定doctype，而jQuery将负责兼容性。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚阿飞</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以尝试一下，我知道不是您要找的答案，但是概念是相同的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您在哪里为所有子项设置样式，然后从最后一个子项中删除样式。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码段</font></font></strong></p>

<pre><code>li<font></font>
  margin-right: 10px<font></font>
<font></font>
  &amp;:last-child<font></font>
    margin-right: 0<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">图片</font></font></strong></p>

<p><a href="https://i.stack.imgur.com/WmWgT.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/WmWgT.png" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说很好</font></font></p>

<pre><code>&amp;:not(:last-child){<font></font>
            text-transform: uppercase;<font></font>
        }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用CSS的示例</font></font></p>

<pre><code>  ul li:not(:last-child){<font></font>
        border-right: 1px solid rgba(153, 151, 151, 0.75);<font></font>
    }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不是选择器有问题，则可以设置所有选择器并覆盖最后一个选择器</font></font></p>

<pre><code>li:after<font></font>
{<font></font>
  content: ' |';<font></font>
}<font></font>
li:last-child:after<font></font>
{<font></font>
  content: '';<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者如果您可以使用之前，则不需要最后一个孩子</font></font></p>

<pre><code>li+li:before<font></font>
{<font></font>
  content: '| ';<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan西门凯</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您撰写的示例对我来说在Chrome 11中非常适用。</font><font style="vertical-align: inherit;">也许您的浏览器不支持</font></font><code>:not()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择器？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能需要使用JavaScript或类似工具才能完成此跨浏览器。</font><font style="vertical-align: inherit;">jQuery </font><font style="vertical-align: inherit;">在其选择器API中</font><font style="vertical-align: inherit;">实现</font></font><a href="http://api.jquery.com/not-selector/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：not（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.22</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一切似乎都是正确的。</font><font style="vertical-align: inherit;">您可能要使用以下css选择器代替您使用的选择器。</font></font></p>

<pre><code>ul &gt; li:not(:last-child):after
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
