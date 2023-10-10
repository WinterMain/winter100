---
layout: question
title:  如何使Bootstrap列都具有相同的高度？
date:   2020-03-15T11:00:37.000Z
description: 我正在使用Bootstrap。如何使三根柱子的高度相同？这是问题的屏幕截图。我希望蓝色和红色列与黄色列的高度相同。这是代码： <lin...
img: 
author: 番长猴子
category: question
answer: 0
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Bootstrap。</font><font style="vertical-align: inherit;">如何使三根柱子的高度相同？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是问题的屏幕截图。</font><font style="vertical-align: inherit;">我希望蓝色和红色列与黄色列的高度相同。</font></font></p>

<p><img src="https://www.samyoc.com//uploads/users/8372/images/thumbnails/1584269910529.png" data-src="https://www.samyoc.com//uploads/users/8372/images/1584269910529.png" alt="三个引导程序列，中间列比其他两列长"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是代码： </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/&gt;<font></font>
&lt;div class="container-fluid"&gt;<font></font>
&lt;div class="row"&gt;<font></font>
    &lt;div class="col-xs-4 panel" style="background-color: red"&gt;<font></font>
        some content<font></font>
    &lt;/div&gt;<font></font>
    &lt;div class="col-xs-4 panel" style="background-color: yellow"&gt;<font></font>
        catz<font></font>
        &lt;img width="100" height="100" src="https://lorempixel.com/100/100/cats/"&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div class="col-xs-4 panel" style="background-color: blue"&gt;<font></font>
        some more content<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
