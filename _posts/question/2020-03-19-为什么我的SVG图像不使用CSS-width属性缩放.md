---
layout: question
title:  为什么我的SVG图像不使用CSS“ width”属性缩放？
date:   2020-03-19T03:32:39.000Z
description: 我正在建立一个投资组合网站。HTML代码<div id = "hero">   <div id = "social">      <img...
img: 
author: 小宇宙猪猪乐
category: question
answer: 0
tags: HTML CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在建立一个投资组合网站。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML代码</font></font></h1>



<pre class="lang-html prettyprint-override"><code>&lt;div id = "hero"&gt;<font></font>
   &lt;div id = "social"&gt;<font></font>
      &lt;img src = "facebook.svg"&gt;<font></font>
      &lt;img src = "linkedin.svg"&gt;<font></font>
      &lt;img src = "instagram.svg"&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS代码（使用SASS）</font></font></h1>



<pre class="lang-css prettyprint-override"><code>#hero {<font></font>
    display: flex;<font></font>
    flex-direction: column;<font></font>
    justify-content: center;<font></font>
    align-items: center;<font></font>
    height: 300px;<font></font>
<font></font>
    #social {<font></font>
        width: 50%;<font></font>
        display: flex;<font></font>
        justify-content: space-between;<font></font>
        flex-wrap: wrap;<font></font>
<font></font>
        img {<font></font>
            width: 2em;<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是我无法使用CSS </font></font><code>width</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">来调整SVG的大小</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这是我在不同情况下获得的信息：</font></font></p>

<p><code>img { width: 2em; }</code></p>

<p><a href="https://www.samyoc.com//uploads/users/22849/images/thumbnails/1584588632296.png" data-src="https://www.samyoc.com//uploads/users/22849/images/1584588632296.png" rel="noreferrer"><img src="https://i.stack.imgur.com/7fIsb.png" alt="在此处输入图片说明"></a></p>

<p><code>img { width: 3em; }</code></p>

<p><a href="https://www.samyoc.com//uploads/users/22849/images/thumbnails/1584588632298.png" data-src="https://www.samyoc.com//uploads/users/22849/images/1584588632298.png" rel="noreferrer"><img src="https://i.stack.imgur.com/7iw0h.png" alt="在此处输入图片说明"></a></p>

<p><code>img { width: em; }</code></p>

<p><a href="https://www.samyoc.com//uploads/users/22849/images/thumbnails/1584588632300.png" data-src="https://www.samyoc.com//uploads/users/22849/images/1584588632300.png" rel="noreferrer"><img src="https://i.stack.imgur.com/Pbceu.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意图标如何向</font></font><code>hero</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">div </font><font style="vertical-align: inherit;">的中间折叠</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相反，如果我使用CSS </font></font><code>height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性：</font></font></p>

<p><code>img { height: 2em; }</code></p>

<p><a href="https://www.samyoc.com//uploads/users/22849/images/thumbnails/1584588632302.png" data-src="https://www.samyoc.com//uploads/users/22849/images/1584588632302.png" rel="noreferrer"><img src="https://i.stack.imgur.com/n10yp.png" alt="在此处输入图片说明"></a></p>

<p><code>img { height: 3em; }</code></p>

<p><a href="https://www.samyoc.com//uploads/users/22849/images/thumbnails/1584588632303.png" data-src="https://www.samyoc.com//uploads/users/22849/images/1584588632303.png" rel="noreferrer"><img src="https://i.stack.imgur.com/B25nT.png" alt="在此处输入图片说明"></a></p>

<p><code>img { height: 4em; }</code></p>

<p><a href="https://www.samyoc.com//uploads/users/22849/images/thumbnails/1584588632305.png" data-src="https://www.samyoc.com//uploads/users/22849/images/1584588632305.png" rel="noreferrer"><img src="https://i.stack.imgur.com/xcH8V.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要这种行为，但是我不确定这是正确的方法。</font><font style="vertical-align: inherit;">为什么会这样？</font><font style="vertical-align: inherit;">您是否知道调整SVG图像大小的更好方法（尤其是使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">flexbox模型</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2299篇《为什么我的SVG图像不使用CSS“ width”属性缩放？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
