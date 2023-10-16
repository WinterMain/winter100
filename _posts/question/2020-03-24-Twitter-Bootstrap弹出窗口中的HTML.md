---
layout: question
title:  Twitter Bootstrap弹出窗口中的HTML
date:   2020-03-24T09:58:36.000Z
description: 我正在尝试在自举弹出窗口中显示HTML，但不知为何它不起作用。我在这里找到了一些答案，但这对我不起作用。如果我做错了事，请告诉我。<script> ...
img: 
author: 十三西门
category: question
answer: 4
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在自举弹出窗口中显示HTML，但不知为何它不起作用。</font><font style="vertical-align: inherit;">我在这里找到了一些答案，但这对我不起作用。</font><font style="vertical-align: inherit;">如果我做错了事，请告诉我。</font></font></p>

<pre><code>&lt;script&gt;<font></font>
  $(function(){<font></font>
    $('[rel=popover]').popover({ <font></font>
      html : true, <font></font>
      content: function() {<font></font>
        return $('#popover_content_wrapper').html();<font></font>
      }<font></font>
    });<font></font>
  });<font></font>
&lt;/script&gt;<font></font>
<font></font>
&lt;li href="#" id="example" rel="popover" data-content="" data-original-title="A Title"&gt; <font></font>
    popover<font></font>
&lt;/li&gt;<font></font>
<font></font>
&lt;div id="popover_content_wrapper" style="display: none"&gt;<font></font>
    &lt;div&gt;This is your div content&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3607篇《Twitter Bootstrap弹出窗口中的HTML》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端老丝</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其添加到popper.js文件的底部：</font></font></p>

<pre><code>Popper.Defaults.modifiers.computeStyle.gpuAcceleration = !(window.devicePixelRatio &lt; 1.5 &amp;&amp; /Win/.test(navigator.platform));
</code></pre>

<p>Source: <a href="https://github.com/twbs/bootstrap/issues/23590" rel="nofollow noreferrer">https://github.com/twbs/bootstrap/issues/23590</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙米亚樱</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需要放入</font></font><code>data-html="true"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接弹出框。</font><font style="vertical-align: inherit;">会工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY前端阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以可重用的方式指定弹出窗口内容的另一种方法是创建一个新的data属性</font></font><code>data-popover-content</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如下所示：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;!-- Popover #1 --&gt;<font></font>
&lt;a class="btn btn-primary" data-placement="top" data-popover-content="#a1" data-toggle="popover" data-trigger="focus" href="#" tabindex="0"&gt;Popover Example&lt;/a&gt;<font></font>
<font></font>
&lt;!-- Content for Popover #1 --&gt;<font></font>
&lt;div class="hidden" id="a1"&gt;<font></font>
  &lt;div class="popover-heading"&gt;<font></font>
    This is the heading for #1<font></font>
  &lt;/div&gt;<font></font>
<font></font>
  &lt;div class="popover-body"&gt;<font></font>
    This is the body for #1<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JS：</font></font></p>

<pre><code>$(function(){<font></font>
    $("[data-toggle=popover]").popover({<font></font>
        html : true,<font></font>
        content: function() {<font></font>
          var content = $(this).attr("data-popover-content");<font></font>
          return $(content).children(".popover-body").html();<font></font>
        },<font></font>
        title: function() {<font></font>
          var title = $(this).attr("data-popover-content");<font></font>
          return $(title).children(".popover-heading").html();<font></font>
        }<font></font>
    });<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您有很多HTML放置在弹出窗口中时，这将很有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个小提琴示例：</font><a href="http://jsfiddle.net/z824fn6b/"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/z824fn6b/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/z824fn6b/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用attribute </font></font><code>data-html="true"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;a href="#" id="example"  rel="popover" <font></font>
    data-content="&lt;div&gt;This &lt;b&gt;is&lt;/b&gt; your div content&lt;/div&gt;" <font></font>
    data-html="true" data-original-title="A Title"&gt;popover&lt;/a&gt;<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
