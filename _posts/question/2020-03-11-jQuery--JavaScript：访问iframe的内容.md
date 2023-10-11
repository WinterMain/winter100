---
layout: question
title:  jQuery / JavaScript：访问iframe的内容
date:   2020-03-11T02:29:55.000Z
description: 我想使用jQuery在iframe中操纵HTML。我认为我可以通过将jQuery函数的上下文设置为iframe的文档来做到这一点，例如：$(fun...
img: 
author: 三分糖就好
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想使用jQuery在iframe中操纵HTML。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为我可以通过将jQuery函数的上下文设置为iframe的文档来做到这一点，例如：</font></font></p>

<pre><code>$(function(){ //document ready<font></font>
    $('some selector', frames['nameOfMyIframe'].document).doStuff()<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这似乎不起作用。</font><font style="vertical-align: inherit;">一点检查就可以看出，</font><font style="vertical-align: inherit;">除非等待iframe加载，否则</font><font style="vertical-align: inherit;">其中的变量</font></font><code>frames['nameOfMyIframe']</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，在iframe加载时，变量不可访问（我收到</font></font><code>permission denied</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-type错误）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人知道解决方法吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第546篇《jQuery / JavaScript：访问iframe的内容》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋L西里</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为您在做的事情要遵循</font></font><a href="http://en.wikipedia.org/wiki/Same_origin_policy" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相同的原产地政策</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这应该是您收到</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">权限拒绝类型</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误的原因。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用</font></font></p>

<pre><code>iframe.contentWindow.document
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font></p>

<pre><code>iframe.contentDocument
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY小卤蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>&lt;iframe&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自相同的域，则可以很容易地访问元素</font></font></p>

<pre><code>$("#iFrame").contents().find("#someDiv").removeClass("hidden");
</code></pre>

<p><a href="http://simple.procoding.net/2008/03/21/how-to-access-iframe-in-jquery/" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考</font></font></strong></a> </p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
