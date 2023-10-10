---
layout: question
title:  如何使Glyphicons更大？（更改大小？）
date:   2020-03-24T10:51:10.000Z
description: 我想将球形glyphicon增大，使其覆盖页面的很大一部分（这是矢量图像）。它不在按钮或其他任何东西中；只是一个人而已。有没有办法做到这一点？<div...
img: 
author: 梅
category: question
answer: 7
tags: HTML CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想将球形glyphicon增大，使其覆盖页面的很大一部分（这是矢量图像）。</font><font style="vertical-align: inherit;">它不在按钮或其他任何东西中；</font><font style="vertical-align: inherit;">只是一个人而已。</font><font style="vertical-align: inherit;">有没有办法做到这一点？</font></font></p>

<pre><code>&lt;div class = "jumbotron"&gt;<font></font>
    &lt;span class="glyphicon glyphicon-globe"&gt;&lt;/span&gt;<font></font>
&lt;/div&gt;  <font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3685篇《如何使Glyphicons更大？（更改大小？）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOGil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我为此使用了引导程序头类（“ h1”，“ h2”等）。</font><font style="vertical-align: inherit;">这样，您无需使用实际标签即可获得所有样式上的好处。</font><font style="vertical-align: inherit;">这是一个例子：</font></font></p>

<p><code>&lt;div class="h3"&gt;&lt;span class="glyphicon glyphicon-tags" aria-hidden="true"&gt;&lt;/span&gt;&lt;/div&gt;</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom凯</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Fontawesome为此提供了完美的解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我实现了相同的。</font><font style="vertical-align: inherit;">只是在您的主要.css文件上添加此</font></font></p>

<pre><code>.gi-2x{font-size: 2em;}<font></font>
.gi-3x{font-size: 3em;}<font></font>
.gi-4x{font-size: 4em;}<font></font>
.gi-5x{font-size: 5em;}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的示例中，您只需要这样做。</font></font></p>

<pre><code>&lt;div class = "jumbotron"&gt;<font></font>
    &lt;span class="glyphicon glyphicon-globe gi-5x"&gt;&lt;/span&gt;<font></font>
&lt;/div&gt;  <font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于前..添加类： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">btn-lg-大</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">btn-sm-小 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">btn-xs-很小</font></font></p>

<pre><code>&lt;button type=button class="btn btn-default btn-lg"&gt;<font></font>
&lt;span class="glyphicon glyphicon-star" aria-hidden=true&gt;&lt;/span&gt; Star<font></font>
&lt;/button&gt; <font></font>
<font></font>
&lt;button type=button class="btn btn-default"&gt;<font></font>
&lt;span class="glyphicon glyphicon-star" aria-hidden=true&gt;&lt;/span&gt;Star<font></font>
&lt;/button&gt;<font></font>
<font></font>
 &lt;button type=button class="btn btn-default btn-sm"&gt;<font></font>
&lt;span class="glyphicon glyphicon-star" aria-hidden=true&gt;&lt;/span&gt; Star<font></font>
&lt;/button&gt; <font></font>
<font></font>
&lt;button type=button class="btn btn-default btn-xs"&gt;<font></font>
&lt;span class="glyphicon glyphicon-star" aria-hidden=true&gt;&lt;/span&gt; Star<font></font>
&lt;/button&gt; <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考链接Bootstrap：</font></font><a href="http://getbootstrap.com/components/#labels" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Glyphicons Bootstrap</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，基本上您也可以使用内联样式：   </font></font></p>

<pre><code>&lt;span style="font-size: 15px" class="glyphicon glyphicon-cog"&gt;&lt;/span&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试使用标题，不需要额外的CSS</font></font></p>

<pre><code>&lt;h1 class="glyphicon glyphicon-plus"&gt;&lt;/h1&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在使用引导程序和超赞的字体，那么这很容易，无需编写任何新代码，只需添加fa-Nx，只要您想要的大小即可，</font></font><a href="https://jsfiddle.net/rKMEZ/293/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参见演示</font></font></a></p>

<pre><code>&lt;span class="glyphicon glyphicon-globe"&gt;&lt;/span&gt;<font></font>
&lt;span class="glyphicon glyphicon-globe fa-lg"&gt;&lt;/span&gt;<font></font>
&lt;span class="glyphicon glyphicon-globe fa-2x"&gt;&lt;/span&gt;<font></font>
&lt;span class="glyphicon glyphicon-globe fa-3x"&gt;&lt;/span&gt;<font></font>
&lt;span class="glyphicon glyphicon-globe fa-4x"&gt;&lt;/span&gt;<font></font>
&lt;span class="glyphicon glyphicon-globe fa-5x"&gt;&lt;/span&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">增加的字体大小</font></font><code>glyphicon</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以增加所有图标的大小。</font></font></p>

<pre><code>.glyphicon {<font></font>
    font-size: 50px;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要仅定位一个图标， </font></font></p>

<pre><code>.glyphicon.glyphicon-globe {<font></font>
    font-size: 75px;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
