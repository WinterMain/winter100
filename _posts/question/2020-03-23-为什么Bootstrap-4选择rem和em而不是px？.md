---
layout: question
title:  为什么Bootstrap 4选择rem和em而不是px？
date:   2020-03-23T02:40:59.000Z
description: 我想知道为什么选择Boostraprem而em不是选择px新版本的Boostrap 4。我们可以在这里看到一些变量示例：    $font-s...
img: 
author: 卡卡西Green
category: question
answer: 3
tags: html CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道为什么</font><font style="vertical-align: inherit;">选择</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Boostrap</font></font></em><font style="vertical-align: inherit;"></font><code>rem</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而</font></font><code>em</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是</font><font style="vertical-align: inherit;">选择</font></font><code>px</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新版本的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Boostrap 4</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以在这里看到</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些变量示例：</font></font></p>

<pre><code>    $font-size-h1: 2.5rem !default;<font></font>
    $font-size-h2: 2rem !default;<font></font>
    $font-size-h3: 1.75rem !default;<font></font>
    $mark-padding: .2em !default;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">em</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">rem</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于以下</font><font style="vertical-align: inherit;">用途</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>  margin: 0;<font></font>
  padding: 0;<font></font>
  bottom: 0px;<font></font>
  width: 100%;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是很好奇我无法在网上找到有关此内容的信息，所以我想问这个原因。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2670篇《为什么Bootstrap 4选择rem和em而不是px？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值得一提的是，Bootstrap 4保留断点</font></font><code>px</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不</font><font style="vertical-align: inherit;">保留断点</font></font><code>em</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">从</font></font><a href="https://getbootstrap.com/docs/4.0/layout/grid/#grid-options" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap使用ems或rems定义大多数大小，而pxs用于网格断点和容器宽度。</font><font style="vertical-align: inherit;">这是因为视口宽度以像素为单位，并且不会随字体大小而变化。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门达蒙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不久前我改用rems而不是px，我可以告诉你这是最好的选择。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rems具有100％的可扩展性，我的尺寸全部基于笔记本电脑及以下产品的外观，然后在1600px或更高的媒体查询条件下，调整html字体大小和中提琴！，整个网站将按比例“放大” 100％。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我现在也开始整合大众汽车，以增加需要像英雄部分中所显示的那样大的部分填充和字体，将其与calc结合使用，例如calc（3rem + 2vw），您便拥有了一个可扩展性非常强的网站，只需很少的媒体查询。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用rems时，您需要将html字体大小重置为16px。</font></font></p>

<pre><code>html {<font></font>
    font-size: 62.5%;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，1rem = 10px</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，调整大小都非常容易转换。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">30px现在是3rem，25px现在是2.5rem，15px现在是1.5rem，依此类推。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在更大的屏幕上，将html更改为font-size：70％，一切都会按比例放大。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保对媒体查询使用px，例如：@media only screen和（最小宽度：1680px）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是“最大宽度”可以是px或rems，仅取决于设计。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我现在将wraps设置为90vw，这可以防止任何东西触摸屏幕边缘，并且可以100％缩放。</font></font></p>

<pre><code>.wrap {<font></font>
    margin-left: auto;<font></font>
    margin-right: auto;<font></font>
    width: 90vw;<font></font>
    max-width: 145rem; /* or use px depending on the design */<font></font>
}<font></font>
</code></pre>

<p>You can use % too, but with WP Gutenberg out and their full width sections using vw I can get everything to line up to a perfect grid.</p>

<p>Hope this helps. </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">REM在几乎任何明确设置大小的地方都非常有用。 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用rem，所有字体大小都相对于根元素（又称为html标记）。</font><font style="vertical-align: inherit;">这样做的原因是为了简化设备的放大或缩小。</font><font style="vertical-align: inherit;">您可以从技术上将html标记更改为较小或较大的大小，以均等缩放所有字体大小，这是一个非常好的功能。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">... [要了解的主要内容是，所有内容都是动态的，并且相对于根HTML标记而言。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，将html css font-size更改为其他数字...并观察整个网格如何调整和缩放。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料来源：</font></font><a href="https://scotch.io/bar-talk/whats-new-in-bootstrap-4#toc-new-unit-rems-for-typography" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Scotch.io</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
