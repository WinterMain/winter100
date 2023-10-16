---
layout: question
title:  在CSS Flexbox中，为什么没有“ justify-items”和“ justify-self”属性？
date:   2020-03-17T07:28:22.000Z
description: 考虑伸缩容器的主轴和横轴：                                                             ...
img: 
author: Stafan神无前端
category: question
answer: 0
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑伸缩容器的主轴和横轴：</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/15367/images/thumbnails/1584429975245.png" data-src="https://www.samyoc.com//uploads/users/15367/images/1584429975245.png" rel="noreferrer"><img src="https://i.stack.imgur.com/9Oxw7.png" alt="在此处输入图片说明"></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<sub><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料来源：</font></font><a href="https://www.w3.org/TR/css-flexbox-1/#box-model" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3C</font></font></a></sub></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要沿主轴对齐弹性项目，有一个属性：</font></font></p>

<ul>
<li><a href="https://www.w3.org/TR/css-flexbox-1/#justify-content-property" rel="noreferrer"><code>justify-content</code></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要沿交叉轴对齐弹性项目，需要三个属性：</font></font></p>

<ul>
<li><a href="https://www.w3.org/TR/css-flexbox-1/#align-content-property" rel="noreferrer"><code>align-content</code></a></li>
<li><a href="https://www.w3.org/TR/css-flexbox-1/#align-items-property" rel="noreferrer"><code>align-items</code></a></li>
<li><a href="https://www.w3.org/TR/css-flexbox-1/#align-items-property" rel="noreferrer"><code>align-self</code></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上图中，主轴是水平的，而横轴是垂直的。</font><font style="vertical-align: inherit;">这些是flex容器的默认方向。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这些方向可以轻松地与</font></font><a href="https://www.w3.org/TR/css-flexbox-1/#propdef-flex-direction" rel="noreferrer"><code>flex-direction</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">酒店</font><font style="vertical-align: inherit;">互换</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>/* main axis is horizontal, cross axis is vertical */<font></font>
flex-direction: row;<font></font>
flex-direction: row-reverse;<font></font>
<font></font>
/* main axis is vertical, cross axis is horizontal */    <font></font>
flex-direction: column;<font></font>
flex-direction: column-reverse;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（交叉轴始终垂直于主轴。）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在描述轴的工作方式时，我的观点是，这两个方向似乎都没有什么特别之处。</font><font style="vertical-align: inherit;">主轴，横轴在重要性上都相同，并且</font></font><code>flex-direction</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以轻松地来回切换。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么，为什么十字轴具有两个附加的对齐属性？</font></font></em></p>

<p><em>Why are <code>align-content</code> and <code>align-items</code> consolidated into one property for the main axis?</em></p>

<p><em>Why does the main axis not get a <code>justify-self</code> property?</em></p>

<hr>

<p>Scenarios where these properties would be useful:</p>

<ul>
<li><p>placing a flex item in the corner of the flex container<br>
<code>#box3 { align-self: flex-end; justify-self: flex-end; }</code></p></li>
<li><p>making a group of flex items align-right (<code>justify-content: flex-end</code>) but have the first item align left (<code>justify-self: flex-start</code>)</p>

<p><em>Consider a header section with a group of nav items and a logo. With <code>justify-self</code> the logo could be aligned left while the nav items stay far right, and the whole thing adjusts smoothly ("flexes") to different screen sizes.</em></p></li>
<li><p>in a row of three flex items, affix the middle item to the center of the container  (<code>justify-content: center</code>) and align the adjacent items to the container edges (<code>justify-self: flex-start</code> and <code>justify-self: flex-end</code>). </p>

<p><em>Note that values <code>space-around</code> and <code>space-between</code> on
<code>justify-content</code> property  will not keep the middle item centered about the container if the adjacent items have different widths.</em></p></li>
</ul>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-css lang-css prettyprint-override"><code>#container {<font></font>
  display: flex;<font></font>
  justify-content: space-between;<font></font>
  background-color: lightyellow;<font></font>
}<font></font>
.box {<font></font>
  height: 50px;<font></font>
  width: 75px;<font></font>
  background-color: springgreen;<font></font>
}<font></font>
.box1 {<font></font>
  width: 100px;<font></font>
}<font></font>
.box3 {<font></font>
  width: 200px;<font></font>
}<font></font>
#center {<font></font>
  text-align: center;<font></font>
  margin-bottom: 5px;<font></font>
}<font></font>
#center &gt; span {<font></font>
  background-color: aqua;<font></font>
  padding: 2px;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div id="center"&gt;<font></font>
  &lt;span&gt;TRUE CENTER&lt;/span&gt;<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;div id="container"&gt;<font></font>
  &lt;div class="box box1"&gt;&lt;/div&gt;<font></font>
  &lt;div class="box box2"&gt;&lt;/div&gt;<font></font>
  &lt;div class="box box3"&gt;&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;p&gt;note that the middlebox will only be truly centered if adjacent boxes are equal width&lt;/p&gt;</code></pre>
</div>
</div>
<p></p>

<p><a href="https://jsfiddle.net/7an37m20/12/" rel="noreferrer">jsFiddle version</a></p>

<hr>

<p>As of this writing, there is no mention of <code>justify-self</code> or <code>justify-items</code> in the <a href="https://www.w3.org/TR/css-flexbox-1/" rel="noreferrer">flexbox spec</a>.</p>

<p>However, in the <a href="http://www.w3.org/TR/css-align-3/" rel="noreferrer">CSS Box Alignment Module</a>, which is the W3C's unfinished proposal to establish a common set of alignment properties for use across all box models, there is this:</p>

<p><a href="https://www.samyoc.com//uploads/users/15367/images/thumbnails/1584429975256.png" data-src="https://www.samyoc.com//uploads/users/15367/images/1584429975256.png" rel="noreferrer"><img src="https://i.stack.imgur.com/uu2tP.png" alt="在此处输入图片说明"></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<sub>Source: <a href="https://www.w3.org/TR/css3-align/#overview" rel="noreferrer">W3C</a></sub></p>

<p>You'll notice that <code>justify-self</code> and <code>justify-items</code> are being considered... <em>but not for flexbox</em>.</p>

<hr>

<p>I'll end by reiterating the main question:</p>

<blockquote>
  <p>Why are there no "justify-items" and "justify-self" properties?</p>
</blockquote></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1891篇《在CSS Flexbox中，为什么没有“ justify-items”和“ justify-self”属性？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
