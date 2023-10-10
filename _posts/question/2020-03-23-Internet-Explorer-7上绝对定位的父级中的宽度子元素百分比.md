---
layout: question
title:  Internet Explorer 7上绝对定位的父级中的宽度子元素百分比
date:   2020-03-23T08:09:31.000Z
description: 我的绝对职位div包含几个孩子，其中一个是相对职位div。当我percentage-based width在孩子上使用时div，它会0 width在IE7...
img: 
author: GO神奇
category: question
answer: 6
tags: html CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的绝对职位</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含几个孩子，其中一个是相对职位</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当我</font></font><code>percentage-based width</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在孩子上</font><font style="vertical-align: inherit;">使用时</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它会</font></font><code>0 width</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在IE7上</font><font style="vertical-align: inherit;">崩溃</font><font style="vertical-align: inherit;">，而在Firefox或Safari上则不会。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我使用</font></font><code>pixel width</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它可以工作。</font><font style="vertical-align: inherit;">如果父母位置相对，则孩子的百分比宽度有效。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在这里想念什么吗？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了</font></font><code>pixel-based width</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在孩子</font><font style="vertical-align: inherit;">身上，还有其他简单的解决方法</font><font style="vertical-align: inherit;">吗？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS规范中是否有涵盖此方面的内容？</font></font></li>
</ol></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">父级</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要以</font></font><code>width</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像素或百分比为单位</font><font style="vertical-align: inherit;">定义</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在Internet Explorer 7中，父级</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要</font></font><code>width</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为子级百分比</font><font style="vertical-align: inherit;">定义一个</font><font style="vertical-align: inherit;">值</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">才能正常工作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐小小猪猪</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要具有限定的宽度：</font></font></p>

<pre><code>&lt;div id="parent" style="width:230px;"&gt;<font></font>
    &lt;div id="child1"&gt;&lt;/div&gt;<font></font>
    &lt;div id="child2"&gt;&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一些示例代码。</font><font style="vertical-align: inherit;">我认为这就是您想要的。</font><font style="vertical-align: inherit;">在Firefox 3（mac）和IE7中，以下显示完全相同。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>#absdiv {<font></font>
  position: absolute; <font></font>
  left: 100px; <font></font>
  top: 100px; <font></font>
  width: 80%; <font></font>
  height: 60%; <font></font>
  background: #999;<font></font>
}<font></font>
<font></font>
#pctchild {<font></font>
  width: 60%; <font></font>
  height: 40%; <font></font>
  background: #CCC;<font></font>
}<font></font>
<font></font>
#reldiv {<font></font>
  position: relative;<font></font>
  left: 20px;<font></font>
  top: 20px;<font></font>
  height: 25px;<font></font>
  width: 40%;<font></font>
  background: red;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div id="absdiv"&gt;<font></font>
    &lt;div id="reldiv"&gt;&lt;/div&gt;<font></font>
    &lt;div id="pctchild"&gt;&lt;/div&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE 8之前的版本在其框模型方面具有时间方面的特征，最明显的问题是基于百分比的宽度产生了问题。</font><font style="vertical-align: inherit;">在您的情况下，此处的绝对位置</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认没有宽度。</font><font style="vertical-align: inherit;">其宽度将根据其内容的像素宽度进行计算，并将在呈现内容后进行计算。</font><font style="vertical-align: inherit;">因此，在IE遇到并渲染相对定位的点时，</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其父级的宽度为0，因此为什么它本身会崩溃为0。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想对此进行更深入的讨论以及许多可行的示例，请</font></font><a href="http://www.positioniseverything.net/explorer/percentages.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处进行阅读</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞飞云</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么绝对定位的父项中的百分比宽度子项在IE7中不起作用？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它是Internet Explorer</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在这里想念什么吗？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就是说，要提高您的同事/客户对IE糟糕的认识。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了基于像素的孩子宽度之外，还有其他简单的解决方法吗？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>em</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单位，因为它们在创建液体布局时更有用，因为您可以将它们用于填充和边距以及字体大小。</font><font style="vertical-align: inherit;">因此，如果调整其大小，则空白区域将与文本成比例地增长和缩小（这确实是您所需要的）。</font><font style="vertical-align: inherit;">我认为百分比不能比ems更好地控制；</font><font style="vertical-align: inherit;">您可以使用百分之百的ems（0.01 em）进行指定，浏览器将根据需要进行解释。  </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS规范中是否有涵盖此方面的内容？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有，据我记得</font></font><code>em</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，CSS和1.0仅用于字体大小。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这与</font></font><code>hasLayout</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在旧版浏览器中实现</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">的方式有关</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否在IE8中尝试过代码以查看是否也可以在其中工作？</font><font style="vertical-align: inherit;">IE8有一个调试器（</font></font><kbd>F12</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），也可以在IE7模式下运行。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
