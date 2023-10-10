---
layout: question
title:  在jQuery中，如何通过其name属性选择元素？
date:   2020-03-24T01:39:43.000Z
description: 我的网页中有3个单选按钮，如下所示：<label for="theme-grey">  <input type="radio" id="them...
img: 
author: Itachi
category: question
answer: 0
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的网页中有3个单选按钮，如下所示：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;label for="theme-grey"&gt;<font></font>
  &lt;input type="radio" id="theme-grey" name="theme" value="grey" /&gt;Grey&lt;/label&gt;<font></font>
&lt;label for="theme-pink"&gt;<font></font>
  &lt;input type="radio" id="theme-pink" name="theme" value="pink" /&gt;Pink&lt;/label&gt;<font></font>
&lt;label for="theme-green"&gt;<font></font>
  &lt;input type="radio" id="theme-green" name="theme" value="green" /&gt;Green&lt;/label&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在jQuery中，我想在单击这三个按钮中的任何一个时获取所选单选按钮的值。</font><font style="vertical-align: inherit;">在jQuery中，我们有id（＃）和class（。）选择器，但是如果我想按名称查找单选按钮，该怎么办呢？</font></font></p>

<pre><code>$("&lt;radiobutton name attribute&gt;").click(function(){});
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请告诉我如何解决这个问题。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3162篇《在jQuery中，如何通过其name属性选择元素？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
