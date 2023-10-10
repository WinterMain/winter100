---
layout: question
title:  ！important在CSS中是什么意思？
date:   2020-03-19T04:18:11.000Z
description: \!importantCSS是什么意思？CSS 2中可用吗？CSS 3？在哪里支持？所有现代浏览器？...
img: 
author: 猿Mandy
category: question
answer: 4
tags: 的CSS CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>!important</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS是</font><font style="vertical-align: inherit;">什么</font><font style="vertical-align: inherit;">意思？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS 2中可用吗？</font><font style="vertical-align: inherit;">CSS 3？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在哪里支持？</font><font style="vertical-align: inherit;">所有现代浏览器？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Eva斯丁</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><code>!important</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是CSS1的一部分。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持它的浏览器：IE5.5 +，Firefox 1 +，Safari 3 +，Chrome 1+。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着，类似于：</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果周围没有其他重要的事情，请使用我！</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能说更好。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云路易</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按原点排序后，它会影响CSS级联中的排序。</font><font style="vertical-align: inherit;">它与其他答案中所述的特异性无关。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是从低到高的优先级：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器样式</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户样式表声明（无！重要）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作者样式表声明（无！重要）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要的作者样式表</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要的用户样式表</font></font></li>
</ol>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此</font><strong><font style="vertical-align: inherit;">之后</font></strong><font style="vertical-align: inherit;">，规则仍然存在，但仍然存在特殊性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考文献： </font></font></p>

<ul>
<li><a href="http://www.w3.org/TR/CSS2/cascade.html#cascade" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.w3.org/TR/CSS2/cascade.html#cascade</font></font></a></li>
<li><a href="https://russmaxdesign.github.io/maxdesign-slides/02-css/207-css-cascade.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://russmaxdesign.github.io/maxdesign-slides/02-css/207-css-cascade.html</font></font></a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan达蒙L</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它更改了CSS级联的优先级替换规则。</font><font style="vertical-align: inherit;">请参阅</font></font><a href="http://www.w3.org/TR/CSS2/cascade.html#important-rules" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS2规范</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi老丝</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！important规则是使CSS级联的一种方法，但也要始终应用您认为最关键的规则。</font><font style="vertical-align: inherit;">具有！important属性的规则将始终应用，无论该规则在CSS文档中的位置如何。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果您具有以下条件：</font></font></p>

<pre><code>.class {<font></font>
   color:red !important;<font></font>
}<font></font>
.outerClass .class {<font></font>
   color:blue;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有重要意义的规则将是适用的规则（不包括</font></font><a href="http://www.stuffandnonsense.co.uk/archives/images/specificitywars-05v2.jpg" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">特异性</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我相信</font></font><code>!important</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS1中已经出现了它，因此每个浏览器都支持它（部分实现的IE4至IE6，完整的IE7 +）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，您也不想经常使用它，因为如果您与其他人一起工作，则可以覆盖其他属性。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
