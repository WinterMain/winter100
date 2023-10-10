---
layout: question
title:  在Twitter Bootstrap中更改导航栏颜色
date:   2020-03-16T07:45:07.000Z
description: 我将如何修改CSS以更改Twitter Bootstrap中导航栏的颜色？...
img: 
author: A飞云
category: question
answer: 12
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将如何修改CSS以更改Twitter Bootstrap中导航栏的颜色？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1820篇《在Twitter Bootstrap中更改导航栏颜色》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO西门LEY</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需向HTML导航栏添加一个ID，例如：</font></font></h1>

<pre><code>&lt;nav id="navbar-yellow" class="navbar navbar-default navbar-fixed-top" role="navigation"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此ID，您可以设置导航栏颜色的样式，还可以设置链接和下拉菜单的样式</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于不同类型导航栏的示例</font></font></h1>

<p><a href="http://www.bootply.com/pckUqtKEMD" rel="nofollow noreferrer"><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">黑色</font></font></b></a></p>

<p><a href="http://www.bootply.com/OkuzvC86sy" rel="nofollow noreferrer"><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">黄色</font></font></b></a></p>

<p><a href="http://www.bootply.com/smQu15m8DP" rel="nofollow noreferrer"><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">深蓝</font></font></b></a></p>

<p><a href="http://www.bootply.com/ODtOcZ2WOT" rel="nofollow noreferrer"><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">红樱桃）</font></font></b></a></p>

<p><a href="http://www.bootply.com/r9Prza34wB" rel="nofollow noreferrer"><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">深绿色</font></font></b></a></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是CSS</font></font></h1>

<pre><code>/*<font></font>
 * Black navbar style<font></font>
 */<font></font>
#navbar-black.navbar-default { /* #3C3C3C - #222222 */<font></font>
    font-size: 14px;<font></font>
    background-color: rgba(34, 34, 34, 1);<font></font>
    background: -webkit-linear-gradient(top, rgba(60, 60, 60, 1) 0%, rgba(34, 34, 34, 1) 100%);<font></font>
    background: linear-gradient(to bottom, rgba(60, 60, 60, 1) 0%, rgba(34, 34, 34, 1) 100%);<font></font>
    border: 0px;<font></font>
    border-radius: 0;<font></font>
}<font></font>
#navbar-black.navbar-default .navbar-nav&gt;li&gt;a:hover,<font></font>
#navbar-black.navbar-default .navbar-nav&gt;li&gt;a:focus,<font></font>
#navbar-black.navbar-default .navbar-nav&gt;li&gt;ul&gt;li&gt;a:hover,<font></font>
#navbar-black.navbar-default .navbar-nav&gt;li&gt;ul&gt;li&gt;a:focus,<font></font>
#navbar-black.navbar-default .navbar-nav&gt;.active&gt;a,<font></font>
#navbar-black.navbar-default .navbar-nav&gt;.active&gt;a:hover,<font></font>
#navbar-black.navbar-default .navbar-nav&gt;.active&gt;a:focus {<font></font>
    color: rgba(255, 255, 255, 1);<font></font>
    background-color: rgba(0, 0, 0, 1);<font></font>
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%);<font></font>
    background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%);<font></font>
}<font></font>
#sidebar-black, #column-black {<font></font>
      background-color: #222222;<font></font>
}<font></font>
#navbar-black.navbar-default .navbar-toggle {<font></font>
    border-color: #222222;<font></font>
}<font></font>
#navbar-black.navbar-default .navbar-toggle:hover,<font></font>
#navbar-black.navbar-default .navbar-toggle:focus {<font></font>
    background-color: #3C3C3C;<font></font>
}<font></font>
#navbar-black.navbar-default .navbar-nav&gt;li&gt;a,<font></font>
#navbar-black.navbar-default .navbar-nav&gt;li&gt;ul&gt;li&gt;a,<font></font>
#navbar-black.navbar-default .navbar-brand {<font></font>
    color: #999999;<font></font>
}<font></font>
#navbar-black.navbar-default .navbar-toggle .icon-bar,<font></font>
#navbar-black.navbar-default .navbar-toggle:hover .icon-bar,<font></font>
#navbar-black.navbar-default .navbar-toggle:focus .icon-bar {<font></font>
    background-color: #ffffff;<font></font>
}<font></font>
<font></font>
/*<font></font>
 * Red navbar style<font></font>
 */<font></font>
#navbar-red.navbar-default { /* #990033 - #cc0033 */<font></font>
    font-size: 14px;<font></font>
    background-color: rgba(153, 0, 51, 1);<font></font>
    background: -webkit-linear-gradient(top, rgba(204, 0, 51, 1) 0%, rgba(153, 0, 51, 1) 100%);<font></font>
    background: linear-gradient(to bottom, rgba(204, 0, 51, 1) 0%, rgba(153, 0, 51, 1) 100%);<font></font>
    border: 0px;<font></font>
    border-radius: 0;<font></font>
}<font></font>
#navbar-red.navbar-default .navbar-nav&gt;li&gt;a:hover,<font></font>
#navbar-red.navbar-default .navbar-nav&gt;li&gt;a:focus,<font></font>
#navbar-red.navbar-default .navbar-nav&gt;li&gt;ul&gt;li&gt;a:hover,<font></font>
#navbar-red.navbar-default .navbar-nav&gt;li&gt;ul&gt;li&gt;a:focus,<font></font>
#navbar-red.navbar-default .navbar-nav&gt;.active&gt;a,<font></font>
#navbar-red.navbar-default .navbar-nav&gt;.active&gt;a:hover,<font></font>
#navbar-red.navbar-default .navbar-nav&gt;.active&gt;a:focus {<font></font>
    color: rgba(51, 51, 51, 1);<font></font>
    background-color: rgba(255, 255, 255, 1);<font></font>
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);<font></font>
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);<font></font>
}<font></font>
#sidebar-red, #column-red {<font></font>
      background-color: #990033;<font></font>
}<font></font>
#navbar-red.navbar-default .navbar-toggle {<font></font>
    border-color: #990033;<font></font>
}<font></font>
#navbar-red.navbar-default .navbar-toggle:hover,<font></font>
#navbar-red.navbar-default .navbar-toggle:focus {<font></font>
    background-color: #cc0033;<font></font>
}<font></font>
#navbar-red.navbar-default .navbar-nav&gt;li&gt;a,<font></font>
#navbar-red.navbar-default .navbar-nav&gt;li&gt;ul&gt;li&gt;a,<font></font>
#navbar-red.navbar-default .navbar-brand {<font></font>
    color: #999999;<font></font>
}<font></font>
#navbar-red.navbar-default .navbar-toggle .icon-bar,<font></font>
#navbar-red.navbar-default .navbar-toggle:hover .icon-bar,<font></font>
#navbar-red.navbar-default .navbar-toggle:focus .icon-bar {<font></font>
    background-color: #ffffff;<font></font>
}<font></font>
<font></font>
/*<font></font>
 * Darkblue navbar style<font></font>
 */<font></font>
#navbar-darkblue.navbar-default { /* #003399 - #0033cc */<font></font>
    font-size: 14px;<font></font>
    background-color: rgba(51, 51, 153, 1);<font></font>
    background: -webkit-linear-gradient(top, rgba(51, 51, 204, 1) 0%, rgba(51, 51, 153, 1) 100%);<font></font>
    background: linear-gradient(to bottom, rgba(51, 51, 204, 1) 0%, rgba(51, 51, 153, 1) 100%);<font></font>
    border: 0px;<font></font>
    border-radius: 0;<font></font>
}<font></font>
#navbar-darkblue.navbar-default .navbar-nav&gt;li&gt;a:hover,<font></font>
#navbar-darkblue.navbar-default .navbar-nav&gt;li&gt;a:focus,<font></font>
#navbar-darkblue.navbar-default .navbar-nav&gt;li&gt;ul&gt;li&gt;a:hover,<font></font>
#navbar-darkblue.navbar-default .navbar-nav&gt;li&gt;ul&gt;li&gt;a:focus,<font></font>
#navbar-darkblue.navbar-default .navbar-nav&gt;.active&gt;a,<font></font>
#navbar-darkblue.navbar-default .navbar-nav&gt;.active&gt;a:hover,<font></font>
#navbar-darkblue.navbar-default .navbar-nav&gt;.active&gt;a:focus {<font></font>
    color: rgba(51, 51, 51, 1);<font></font>
    background-color: rgba(255, 255, 255, 1);<font></font>
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);<font></font>
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);<font></font>
}<font></font>
#sidebar-darkblue, #column-darkblue {<font></font>
    background-color: #333399;<font></font>
}<font></font>
#navbar-darkblue.navbar-default .navbar-toggle {<font></font>
    border-color: #333399;<font></font>
}<font></font>
#navbar-darkblue.navbar-default .navbar-toggle:hover,<font></font>
#navbar-darkblue.navbar-default .navbar-toggle:focus {<font></font>
    background-color: #3333cc;<font></font>
}<font></font>
#navbar-darkblue.navbar-default .navbar-nav&gt;li&gt;a,<font></font>
#navbar-darkblue.navbar-default .navbar-nav&gt;li&gt;ul&gt;li&gt;a,<font></font>
#navbar-darkblue.navbar-default .navbar-brand {<font></font>
    color: #999999;<font></font>
}<font></font>
#navbar-darkblue.navbar-default .navbar-toggle .icon-bar,<font></font>
#navbar-darkblue.navbar-default .navbar-toggle:hover .icon-bar,<font></font>
#navbar-darkblue.navbar-default .navbar-toggle:focus .icon-bar {<font></font>
    background-color: #ffffff;<font></font>
}<font></font>
<font></font>
/*<font></font>
 * Darkgreen navbar style<font></font>
 */<font></font>
#navbar-darkgreen.navbar-default { /* #006633 - #009933 */<font></font>
    font-size: 14px;<font></font>
    background-color: rgba(0, 102, 51, 1);<font></font>
    background: -webkit-linear-gradient(top, rgba(0, 153, 51, 1) 0%, rgba(0, 102, 51, 1) 100%);<font></font>
    background: linear-gradient(to bottom, rgba(0, 153, 51, 1) 0%, rgba(0, 102, 51, 1) 100%);<font></font>
    border: 0px;<font></font>
    border-radius: 0;<font></font>
}<font></font>
#navbar-darkgreen.navbar-default .navbar-nav&gt;li&gt;a:hover,<font></font>
#navbar-darkgreen.navbar-default .navbar-nav&gt;li&gt;a:focus,<font></font>
#navbar-darkgreen.navbar-default .navbar-nav&gt;li&gt;ul&gt;li&gt;a:hover,<font></font>
#navbar-darkgreen.navbar-default .navbar-nav&gt;li&gt;ul&gt;li&gt;a:focus,<font></font>
#navbar-darkgreen.navbar-default .navbar-nav&gt;.active&gt;a,<font></font>
#navbar-darkgreen.navbar-default .navbar-nav&gt;.active&gt;a:hover,<font></font>
#navbar-darkgreen.navbar-default .navbar-nav&gt;.active&gt;a:focus {<font></font>
    color: rgba(51, 51, 51, 1);<font></font>
    background-color: rgba(255, 255, 255, 1);<font></font>
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);<font></font>
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);<font></font>
}<font></font>
#sidebar-darkgreen, #column-darkgreen {<font></font>
    background-color: #006633;<font></font>
}<font></font>
#navbar-darkgreen.navbar-default .navbar-toggle {<font></font>
    border-color: #006633;<font></font>
}<font></font>
#navbar-darkgreen.navbar-default .navbar-toggle:hover,<font></font>
#navbar-darkgreen.navbar-default .navbar-toggle:focus {<font></font>
    background-color: #009933;<font></font>
}<font></font>
#navbar-darkgreen.navbar-default .navbar-nav&gt;li&gt;a,<font></font>
#navbar-darkgreen.navbar-default .navbar-nav&gt;li&gt;ul&gt;li&gt;a,<font></font>
#navbar-darkgreen.navbar-default .navbar-brand {<font></font>
    color: #999999;<font></font>
}<font></font>
#navbar-darkgreen.navbar-default .navbar-toggle .icon-bar,<font></font>
#navbar-darkgreen.navbar-default .navbar-toggle:hover .icon-bar,<font></font>
#navbar-darkgreen.navbar-default .navbar-toggle:focus .icon-bar {<font></font>
    background-color: #ffffff;<font></font>
}<font></font>
<font></font>
/*<font></font>
 * Yellow navbar style<font></font>
 */<font></font>
#navbar-yellow.navbar-default { /* #99ff00 - #ccff00 */<font></font>
    font-size: 14px;<font></font>
    background-color: rgba(153, 255, 0, 1);<font></font>
    background: -webkit-linear-gradient(top, rgba(204, 255, 0, 1) 0%, rgba(153, 255, 0, 1) 100%);<font></font>
    background: linear-gradient(to bottom, rgba(204, 255, 0, 1) 0%, rgba(153, 255, 0, 1) 100%);<font></font>
    border: 0px;<font></font>
    border-radius: 0;<font></font>
}<font></font>
#navbar-yellow.navbar-default .navbar-nav&gt;li&gt;a:hover,<font></font>
#navbar-yellow.navbar-default .navbar-nav&gt;li&gt;a:focus,<font></font>
#navbar-yellow.navbar-default .navbar-nav&gt;li&gt;ul&gt;li&gt;a:hover,<font></font>
#navbar-yellow.navbar-default .navbar-nav&gt;li&gt;ul&gt;li&gt;a:focus,<font></font>
#navbar-yellow.navbar-default .navbar-nav&gt;.active&gt;a,<font></font>
#navbar-yellow.navbar-default .navbar-nav&gt;.active&gt;a:hover,<font></font>
#navbar-yellow.navbar-default .navbar-nav&gt;.active&gt;a:focus {<font></font>
    color: rgba(51, 51, 51, 1);<font></font>
    background-color: rgba(255, 255, 255, 1);<font></font>
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);<font></font>
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);<font></font>
}<font></font>
#sidebar-yellow, #column-yellow {<font></font>
    background-color: #99ff00;<font></font>
}<font></font>
#navbar-yellow.navbar-default .navbar-toggle {<font></font>
    border-color: #99ff00;<font></font>
}<font></font>
#navbar-yellow.navbar-default .navbar-toggle:hover,<font></font>
#navbar-yellow.navbar-default .navbar-toggle:focus {<font></font>
    background-color: #ccff00;<font></font>
}<font></font>
#navbar-yellow.navbar-default .navbar-nav&gt;li&gt;a,<font></font>
#navbar-yellow.navbar-default .navbar-nav&gt;li&gt;ul&gt;li&gt;a,<font></font>
#navbar-yellow.navbar-default .navbar-brand {<font></font>
    color: #999999;<font></font>
}<font></font>
#navbar-yellow.navbar-default .navbar-toggle .icon-bar,<font></font>
#navbar-yellow.navbar-default .navbar-toggle:hover .icon-bar,<font></font>
#navbar-yellow.navbar-default .navbar-toggle:focus .icon-bar {<font></font>
    background-color: #ffffff;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇A阿飞</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">少用</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以考虑编译自己的版本。</font><font style="vertical-align: inherit;">尝试</font></font><a href="http://getbootstrap.com/customize/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://getbootstrap.com/customize/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（其中有一个Navbars设置的单独部分（默认navbar和Inverted Navbar））或从</font></font><a href="https://github.com/twbs/bootstrap" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/twbs/bootstrap</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载自己的副本</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在中找到导航栏设置</font></font><code>variables.less</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><code>navbar.less</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于编译导航栏（取决于</font></font><code>variables.less</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>mixins.less</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复制“导航栏默认部分”并填写您自己的颜色设置。</font><font style="vertical-align: inherit;">更改变量</font></font><code>variables.less</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将是最简单的方法（更改默认或反向导航栏将不成问题，因为每页只有一个导航栏）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在大多数情况下，您不会更改所有设置：</font></font></p>

<pre><code>// Navbar<font></font>
// -------------------------<font></font>
<font></font>
// Basics of a navbar<font></font>
@navbar-height:                    50px;<font></font>
@navbar-margin-bottom:             @line-height-computed;<font></font>
@navbar-default-color:             #777;<font></font>
@navbar-default-bg:                #f8f8f8;<font></font>
@navbar-default-border:            darken(@navbar-default-bg, 6.5%);<font></font>
@navbar-border-radius:             @border-radius-base;<font></font>
@navbar-padding-horizontal:        floor(@grid-gutter-width / 2);<font></font>
@navbar-padding-vertical:          ((@navbar-height - @line-height-computed) / 2);<font></font>
<font></font>
// Navbar links<font></font>
@navbar-default-link-color:                #777;<font></font>
@navbar-default-link-hover-color:          #333;<font></font>
@navbar-default-link-hover-bg:             transparent;<font></font>
@navbar-default-link-active-color:         #555;<font></font>
@navbar-default-link-active-bg:            darken(@navbar-default-bg, 6.5%);<font></font>
@navbar-default-link-disabled-color:       #ccc;<font></font>
@navbar-default-link-disabled-bg:          transparent;<font></font>
<font></font>
// Navbar brand label<font></font>
@navbar-default-brand-color:               @navbar-default-link-color;<font></font>
@navbar-default-brand-hover-color:         darken(@navbar-default-link-color, 10%);<font></font>
@navbar-default-brand-hover-bg:            transparent;<font></font>
<font></font>
// Navbar toggle<font></font>
@navbar-default-toggle-hover-bg:           #ddd;<font></font>
@navbar-default-toggle-icon-bar-bg:        #ccc;<font></font>
@navbar-default-toggle-border-color:       #ddd;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以尝试</font></font><a href="http://twitterbootstrap3navbars.w3masters.nl/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://twitterbootstrap3navbars.w3masters.nl/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该工具为您的自定义导航栏生成CSS代码。</font><font style="vertical-align: inherit;">（可选）您还可以向导航栏添加渐变颜色和边框。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near猪猪</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样尝试：</font></font></p>

<pre><code>&lt;!-- A light one --&gt;<font></font>
&lt;nav class="navbar navbar-default" role="navigation"&gt;&lt;/nav&gt;<font></font>
&lt;!-- A dark one --&gt;<font></font>
&lt;nav class="navbar navbar-inverse" role="navigation"&gt;&lt;/nav&gt;<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件 </font></font><code>navabr.css</code></h3>

<pre><code>/* Navbar */<font></font>
.navbar-default {<font></font>
    background-color: #F8F8F8;<font></font>
    border-color: #E7E7E7;<font></font>
}<font></font>
/* Title */<font></font>
.navbar-default .navbar-brand {<font></font>
    color: #777;<font></font>
}<font></font>
.navbar-default .navbar-brand:hover,<font></font>
.navbar-default .navbar-brand:focus {<font></font>
    color: #5E5E5E;<font></font>
}<font></font>
/* Link */<font></font>
.navbar-default .navbar-nav &gt; li &gt; a {<font></font>
    color: #777;<font></font>
}<font></font>
.navbar-default .navbar-nav &gt; li &gt; a:hover,<font></font>
.navbar-default .navbar-nav &gt; li &gt; a:focus {<font></font>
    color: #333;<font></font>
}<font></font>
.navbar-default .navbar-nav &gt; .active &gt; a,<font></font>
.navbar-default .navbar-nav &gt; .active &gt; a:hover,<font></font>
.navbar-default .navbar-nav &gt; .active &gt; a:focus {<font></font>
    color: #555;<font></font>
    background-color: #E7E7E7;<font></font>
}<font></font>
.navbar-default .navbar-nav &gt; .open &gt; a,<font></font>
.navbar-default .navbar-nav &gt; .open &gt; a:hover,<font></font>
.navbar-default .navbar-nav &gt; .open &gt; a:focus {<font></font>
    color: #555;<font></font>
    background-color: #D5D5D5;<font></font>
}<font></font>
/* Caret */<font></font>
.navbar-default .navbar-nav &gt; .dropdown &gt; a .caret {<font></font>
    border-top-color: #777;<font></font>
    border-bottom-color: #777;<font></font>
}<font></font>
.navbar-default .navbar-nav &gt; .dropdown &gt; a:hover .caret,<font></font>
.navbar-default .navbar-nav &gt; .dropdown &gt; a:focus .caret {<font></font>
    border-top-color: #333;<font></font>
    border-bottom-color: #333;<font></font>
}<font></font>
.navbar-default .navbar-nav &gt; .open &gt; a .caret,<font></font>
.navbar-default .navbar-nav &gt; .open &gt; a:hover .caret,<font></font>
.navbar-default .navbar-nav &gt; .open &gt; a:focus .caret {<font></font>
    border-top-color: #555;<font></font>
    border-bottom-color: #555;<font></font>
}<font></font>
/* Mobile version */<font></font>
.navbar-default .navbar-toggle {<font></font>
    border-color: #DDD;<font></font>
}<font></font>
.navbar-default .navbar-toggle:hover,<font></font>
.navbar-default .navbar-toggle:focus {<font></font>
    background-color: #DDD;<font></font>
}<font></font>
.navbar-default .navbar-toggle .icon-bar {<font></font>
    background-color: #CCC;<font></font>
}<font></font>
@media (max-width: 767px) {<font></font>
    .navbar-default .navbar-nav .open .dropdown-menu &gt; li &gt; a {<font></font>
        color: #777;<font></font>
    }<font></font>
    .navbar-default .navbar-nav .open .dropdown-menu &gt; li &gt; a:hover,<font></font>
    .navbar-default .navbar-nav .open .dropdown-menu &gt; li &gt; a:focus {<font></font>
        color: #333;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认的主要颜色用途如下：</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导航栏背景：＃F8F8F8</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导航栏边框：＃E7E7E7</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认颜色：＃777</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导航品牌悬停颜色：＃5E5E5E</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">悬停颜色：＃333</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">活动背景：＃D5D5D5</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主动色：＃555</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><em><a href="https://fellowtuts.com/bootstrap/to-change-navbar-color-in-twitter-bootstrap-3/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Twitter Bootstrap 3</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中的</font><em><a href="https://fellowtuts.com/bootstrap/to-change-navbar-color-in-twitter-bootstrap-3/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">“更改导航栏颜色”中</font></a></em><font style="vertical-align: inherit;">了解更多信息</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimLEYHarry</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Twitter Bootstrap中提到的反向名称和默认类名称导致它们为黑色和白色。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更好的是，您不应覆盖它，并在其附近添加一个类并为此编写特定的样式：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>my_style{<font></font>
    background-color: green;<font></font>
}</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO飞云</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用：</font></font></p>

<p><a href="https://i.stack.imgur.com/bniyM.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/bniyM.png" alt="在此处输入图片说明"></a></p>

<pre><code>&lt;nav class="navbar navbar-inverse" role="navigation"&gt;&lt;/nav&gt;<font></font>
<font></font>
navbar-inverse {<font></font>
    background-color: #F8F8F8;<font></font>
    border-color: #E7E7E7;<font></font>
}<font></font>
</code></pre>

<p><a href="https://onaircode.com/best-responsive-bootstrap-navigation-menus/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">25+ Bootstrap Nav菜单代码</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiGreen</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新了2018年的Bootstrap 4</font></font></em></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Bootstrap 4中更改Navbar颜色是不同的（并且稍微容易一些）。您可以创建一个自定义的navbar类，然后引用它来更改navbar，而不会影响其他Bootstrap导航。</font></font></p>

<pre><code>&lt;nav class="navbar navbar-custom"&gt;...&lt;/nav&gt;
</code></pre>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 4.0</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Bootstrap 4中，更改Navbar所需的CSS少得多。</font></font></p>

<pre><code>.navbar-custom {<font></font>
    background-color: #ff5500;<font></font>
}<font></font>
/* change the brand and text color */<font></font>
.navbar-custom .navbar-brand,<font></font>
.navbar-custom .navbar-text {<font></font>
    color: rgba(255,255,255,.8);<font></font>
}<font></font>
/* change the link color */<font></font>
.navbar-custom .navbar-nav .nav-link {<font></font>
    color: rgba(255,255,255,.5);<font></font>
}<font></font>
/* change the color of active or hovered links */<font></font>
.navbar-custom .nav-item.active .nav-link,<font></font>
.navbar-custom .nav-item:hover .nav-link {<font></font>
    color: #ffffff;<font></font>
}<font></font>
</code></pre>

<p><a href="http://www.codeply.com/go/1ZFF5CEXM5/custom-navbar-color" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 4自定义导航栏演示</font></font></a><a href="https://i.stack.imgur.com/6cUsa.png" rel="noreferrer"><img src="https://i.stack.imgur.com/6cUsa.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改活动/悬停链接的</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">颜色</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也适用于相同的CSS，但是如果您想让bg颜色填充链接的整个高度，则必须调整填充...</font></font></p>

<p><code>py-0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 从整个导航栏中删除垂直填充...</font></font></p>

<p><code>&lt;nav class="navbar navbar-expand-sm navbar-custom py-0"&gt;..&lt;/nav&gt;</code></p>

<pre><code>/* change the link color and padding  */<font></font>
.navbar-custom .navbar-nav .nav-link {<font></font>
    color: rgba(255,255,255,.5);<font></font>
    padding: .75rem 1rem;<font></font>
}<font></font>
<font></font>
/* change the color and background color of active links */<font></font>
.navbar-custom .nav-item.active .nav-link,<font></font>
.navbar-custom .nav-item:hover .nav-link {<font></font>
    color: #ffffff;<font></font>
    background-color: #333;<font></font>
}<font></font>
</code></pre>

<p><a href="https://www.codeply.com/go/CzhP1QKxnW" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 4更改链接和背景颜色演示</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另请参阅：</font></font><a href="https://stackoverflow.com/questions/42586729/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 4更改汉堡包切换器颜色</font></font></a></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引导程序3</font></font></strong></p>

<pre><code>&lt;nav class="navbar navbar-custom"&gt;<font></font>
  &lt;div class="navbar-header"&gt;<font></font>
    &lt;button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"&gt;...<font></font>
    &lt;/button&gt;<font></font>
    &lt;a class="navbar-brand" href="#"&gt;Title&lt;/a&gt;<font></font>
  &lt;/div&gt;<font></font>
   ...<font></font>
&lt;/nav&gt;<font></font>
<font></font>
<font></font>
.navbar-custom {<font></font>
    background-color:#229922;<font></font>
    color:#ffffff;<font></font>
    border-radius:0;<font></font>
}<font></font>
<font></font>
.navbar-custom .navbar-nav &gt; li &gt; a {<font></font>
    color:#fff;<font></font>
}<font></font>
<font></font>
.navbar-custom .navbar-nav &gt; .active &gt; a {<font></font>
    color: #ffffff;<font></font>
    background-color:transparent;<font></font>
}<font></font>
<font></font>
.navbar-custom .navbar-nav &gt; li &gt; a:hover,<font></font>
.navbar-custom .navbar-nav &gt; li &gt; a:focus,<font></font>
.navbar-custom .navbar-nav &gt; .active &gt; a:hover,<font></font>
.navbar-custom .navbar-nav &gt; .active &gt; a:focus,<font></font>
.navbar-custom .navbar-nav &gt; .open &gt;a {<font></font>
    text-decoration: none;<font></font>
    background-color: #33aa33;<font></font>
}<font></font>
<font></font>
.navbar-custom .navbar-brand {<font></font>
    color:#eeeeee;<font></font>
}<font></font>
.navbar-custom .navbar-toggle {<font></font>
    background-color:#eeeeee;<font></font>
}<font></font>
.navbar-custom .icon-bar {<font></font>
    background-color:#33aa33;<font></font>
}<font></font>
</code></pre>

<p><a href="http://bootply.com/78010" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootply上的自定义导航栏演示</font></font></a></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果导航栏具有下拉菜单，请添加以下内容以更改下拉颜色：</font></font></p>

<pre><code>/* for dropdowns only */<font></font>
.navbar-custom .navbar-nav .dropdown-menu  { <font></font>
  background-color: #33aa33;<font></font>
}<font></font>
.navbar-custom .navbar-nav .dropdown-menu&gt;li&gt;a  { <font></font>
  color: #fff;<font></font>
}<font></font>
.navbar-custom .navbar-nav .dropdown-menu&gt;li&gt;a:hover,.navbar-custom .navbar-nav .dropdown-menu&gt;li&gt;a:focus  { <font></font>
  color: #33aa33;<font></font>
}<font></font>
</code></pre>

<p><a href="http://www.bootply.com/Iq82PS84ZA" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带下拉菜单的演示</font></font></a></p>

<hr></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Stafan</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果仅是要更改导航栏的颜色，我的建议是使用：</font></font><a href="http://pikock.github.io/bootstrap-magic/app/#!/editor" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap Magic</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以更改导航栏不同属性的值并查看预览。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将结果下载为自定义CSS样式表或Less变量文件。</font><font style="vertical-align: inherit;">您可以使用输入字段和颜色选择器更改值。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Tony</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此导航栏CSS中，设置为自己的颜色：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>/* Navbar */<font></font>
.navbar-default {<font></font>
    background-color: #F8F8F8;<font></font>
    border-color: #E7E7E7;<font></font>
}<font></font>
/* Title */<font></font>
.navbar-default .navbar-brand {<font></font>
    color: #777;<font></font>
}<font></font>
.navbar-default .navbar-brand:hover,<font></font>
.navbar-default .navbar-brand:focus {<font></font>
    color: #5E5E5E;<font></font>
}<font></font>
/* Link */<font></font>
.navbar-default .navbar-nav &gt; li &gt; a {<font></font>
    color: #777;<font></font>
}<font></font>
.navbar-default .navbar-nav &gt; li &gt; a:hover,<font></font>
.navbar-default .navbar-nav &gt; li &gt; a:focus {<font></font>
    color: #333;<font></font>
}<font></font>
.navbar-default .navbar-nav &gt; .active &gt; a, <font></font>
.navbar-default .navbar-nav &gt; .active &gt; a:hover, <font></font>
.navbar-default .navbar-nav &gt; .active &gt; a:focus {<font></font>
    color: #555;<font></font>
    background-color: #E7E7E7;<font></font>
}<font></font>
.navbar-default .navbar-nav &gt; .open &gt; a, <font></font>
.navbar-default .navbar-nav &gt; .open &gt; a:hover, <font></font>
.navbar-default .navbar-nav &gt; .open &gt; a:focus {<font></font>
    color: #555;<font></font>
    background-color: #D5D5D5;<font></font>
}<font></font>
/* Caret */<font></font>
.navbar-default .navbar-nav &gt; .dropdown &gt; a .caret {<font></font>
    border-top-color: #777;<font></font>
    border-bottom-color: #777;<font></font>
}<font></font>
.navbar-default .navbar-nav &gt; .dropdown &gt; a:hover .caret,<font></font>
.navbar-default .navbar-nav &gt; .dropdown &gt; a:focus .caret {<font></font>
    border-top-color: #333;<font></font>
    border-bottom-color: #333;<font></font>
}<font></font>
.navbar-default .navbar-nav &gt; .open &gt; a .caret, <font></font>
.navbar-default .navbar-nav &gt; .open &gt; a:hover .caret, <font></font>
.navbar-default .navbar-nav &gt; .open &gt; a:focus .caret {<font></font>
    border-top-color: #555;<font></font>
    border-bottom-color: #555;<font></font>
}</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋小小</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也尝试一下。</font><font style="vertical-align: inherit;">这对我有用。</font></font></p>

<pre><code>.navbar-default .navbar-nav &gt; li &gt; a:hover,<font></font>
.navbar-default .navbar-nav &gt; li &gt; a:focus {<font></font>
  background-color: #00a950;<font></font>
  color: #000000;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LLEY</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">tl; dr- </font></font><a href="http://work.smarchal.com/twbscolor/css/e74c3cc0392becf0f1ffbbbc0" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TWBSColor-生成自己的Bootstrap导航栏</font></font></a></strong></p>
  
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本说明：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
  -在线工具：Bootstrap 3.3.2+ / 4.0.0+-此答案：Bootstrap 3.0.x</font></font></p>
</blockquote>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可用的导航栏</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您有两个基本的导航栏：</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;!-- A light one --&gt;<font></font>
&lt;nav class="navbar navbar-default" role="navigation"&gt;&lt;/nav&gt;<font></font>
&lt;!-- A dark one --&gt;<font></font>
&lt;nav class="navbar navbar-inverse" role="navigation"&gt;&lt;/nav&gt;<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认颜色使用</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是主要颜色及其用法：</font></font></p>

<ul>
<li><code>#F8F8F8</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：导航栏背景</font></font></li>
<li><code>#E7E7E7</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：导航栏边框</font></font></li>
<li><code>#777</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：默认颜色</font></font></li>
<li><code>#333</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：悬停颜色（</font></font><code>#5E5E5E</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于</font></font><code>.nav-brand</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><code>#555</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：活动颜色</font></font></li>
<li><code>#D5D5D5</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：活动背景</font></font></li>
</ul>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认样式</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要放置一些自定义样式，则需要更改以下CSS：</font></font></p>

<pre class="lang-css prettyprint-override"><code>/* navbar */<font></font>
.navbar-default {<font></font>
    background-color: #F8F8F8;<font></font>
    border-color: #E7E7E7;<font></font>
}<font></font>
/* Title */<font></font>
.navbar-default .navbar-brand {<font></font>
    color: #777;<font></font>
}<font></font>
.navbar-default .navbar-brand:hover,<font></font>
.navbar-default .navbar-brand:focus {<font></font>
    color: #5E5E5E;<font></font>
}<font></font>
/* Link */<font></font>
.navbar-default .navbar-nav &gt; li &gt; a {<font></font>
    color: #777;<font></font>
}<font></font>
.navbar-default .navbar-nav &gt; li &gt; a:hover,<font></font>
.navbar-default .navbar-nav &gt; li &gt; a:focus {<font></font>
    color: #333;<font></font>
}<font></font>
.navbar-default .navbar-nav &gt; .active &gt; a,<font></font>
.navbar-default .navbar-nav &gt; .active &gt; a:hover,<font></font>
.navbar-default .navbar-nav &gt; .active &gt; a:focus {<font></font>
    color: #555;<font></font>
    background-color: #E7E7E7;<font></font>
}<font></font>
.navbar-default .navbar-nav &gt; .open &gt; a,<font></font>
.navbar-default .navbar-nav &gt; .open &gt; a:hover,<font></font>
.navbar-default .navbar-nav &gt; .open &gt; a:focus {<font></font>
    color: #555;<font></font>
    background-color: #D5D5D5;<font></font>
}<font></font>
/* Caret */<font></font>
.navbar-default .navbar-nav &gt; .dropdown &gt; a .caret {<font></font>
    border-top-color: #777;<font></font>
    border-bottom-color: #777;<font></font>
}<font></font>
.navbar-default .navbar-nav &gt; .dropdown &gt; a:hover .caret,<font></font>
.navbar-default .navbar-nav &gt; .dropdown &gt; a:focus .caret {<font></font>
    border-top-color: #333;<font></font>
    border-bottom-color: #333;<font></font>
}<font></font>
.navbar-default .navbar-nav &gt; .open &gt; a .caret,<font></font>
.navbar-default .navbar-nav &gt; .open &gt; a:hover .caret,<font></font>
.navbar-default .navbar-nav &gt; .open &gt; a:focus .caret {<font></font>
    border-top-color: #555;<font></font>
    border-bottom-color: #555;<font></font>
}<font></font>
/* Mobile version */<font></font>
.navbar-default .navbar-toggle {<font></font>
    border-color: #DDD;<font></font>
}<font></font>
.navbar-default .navbar-toggle:hover,<font></font>
.navbar-default .navbar-toggle:focus {<font></font>
    background-color: #DDD;<font></font>
}<font></font>
.navbar-default .navbar-toggle .icon-bar {<font></font>
    background-color: #CCC;<font></font>
}<font></font>
@media (max-width: 767px) {<font></font>
    .navbar-default .navbar-nav .open .dropdown-menu &gt; li &gt; a {<font></font>
        color: #777;<font></font>
    }<font></font>
    .navbar-default .navbar-nav .open .dropdown-menu &gt; li &gt; a:hover,<font></font>
    .navbar-default .navbar-nav .open .dropdown-menu &gt; li &gt; a:focus {<font></font>
          color: #333;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自定义彩色导航栏示例</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是自定义彩色导航栏的四个示例：</font></font></p>

<p><strong><a href="http://jsfiddle.net/zessx/drSbw/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSFiddle链接</font></font></a></strong></p>

<p><img src="https://i.stack.imgur.com/3qhkK.jpg" alt="在此处输入图片说明"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和SCSS代码：</font></font></p>

<pre class="lang-css prettyprint-override"><code>$bgDefault   : #e74c3c;<font></font>
$bgHighlight : #c0392b;<font></font>
$colDefault  : #ecf0f1;<font></font>
$colHighlight: #ffbbbc;<font></font>
.navbar-default {<font></font>
  background-color: $bgDefault;<font></font>
  border-color: $bgHighlight;<font></font>
  .navbar-brand {<font></font>
    color: $colDefault;<font></font>
    &amp;:hover, &amp;:focus {<font></font>
      color: $colHighlight; }}<font></font>
  .navbar-text {<font></font>
    color: $colDefault; }<font></font>
  .navbar-nav {<font></font>
    &gt; li {<font></font>
      &gt; a {<font></font>
        color: $colDefault;<font></font>
        &amp;:hover,  &amp;:focus {<font></font>
          color: $colHighlight; }}}<font></font>
    &gt; .active {<font></font>
      &gt; a, &gt; a:hover, &gt; a:focus {<font></font>
        color: $colHighlight;<font></font>
        background-color: $bgHighlight; }}<font></font>
    &gt; .open {<font></font>
      &gt; a, &gt; a:hover, &gt; a:focus {<font></font>
        color: $colHighlight;<font></font>
        background-color: $bgHighlight; }}}<font></font>
  .navbar-toggle {<font></font>
    border-color: $bgHighlight;<font></font>
    &amp;:hover, &amp;:focus {<font></font>
      background-color: $bgHighlight; }<font></font>
    .icon-bar {<font></font>
      background-color: $colDefault; }}<font></font>
  .navbar-collapse,<font></font>
  .navbar-form {<font></font>
    border-color: $colDefault; }<font></font>
  .navbar-link {<font></font>
    color: $colDefault;<font></font>
    &amp;:hover {<font></font>
      color: $colHighlight; }}}<font></font>
@media (max-width: 767px) {<font></font>
  .navbar-default .navbar-nav .open .dropdown-menu {<font></font>
    &gt; li &gt; a {<font></font>
      color: $colDefault;<font></font>
      &amp;:hover, &amp;:focus {<font></font>
        color: $colHighlight; }}<font></font>
    &gt; .active {<font></font>
      &gt; a, &gt; a:hover, &gt; a:focus, {<font></font>
        color: $colHighlight;<font></font>
        background-color: $bgHighlight; }}}<font></font>
}<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后一点礼物</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚制作了一个脚本，该脚本将允许您生成主题：
 </font></font><strong><a href="http://work.smarchal.com/twbscolor/css/e74c3cc0392becf0f1ffbbbc0" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TWBSColor-生成自己的Bootstrap导航栏</font></font></a></strong></p>

<p><em>[Update]: TWBSColor now generates SCSS/SASS/<a href="https://en.wikipedia.org/wiki/Less_%28stylesheet_language%29" rel="noreferrer">Less</a>/CSS code.</em> <br>
<em>[Update]: From now, you can use Less as the default language provided by TWBSColor</em> <br>
<em>[Update]: TWBSColor now supports drop down menus colorization</em><br>
<em>[Update]: TWBSColor now allows to choose your version (Bootstrap 4 support added)</em></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Sam</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否必须直接更改CSS？</font><font style="vertical-align: inherit;">关于什么...</font></font></p>

<pre><code>&lt;nav class="navbar navbar-inverse" style="background-color: #333399;"&gt;<font></font>
&lt;div class="container-fluid"&gt;<font></font>
&lt;div class="navbar-header"&gt;<font></font>
  &lt;button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"&gt;<font></font>
    &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
    &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
    &lt;span class="icon-bar"&gt;&lt;/span&gt;                        <font></font>
  &lt;/button&gt;<font></font>
  &lt;a class="navbar-brand" href="#"&gt;Logo&lt;/a&gt;<font></font>
&lt;/div&gt;<font></font>
&lt;div class="collapse navbar-collapse" id="myNavbar"&gt;<font></font>
  &lt;ul class="nav navbar-nav"&gt;<font></font>
    &lt;li class="active"&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;<font></font>
    &lt;li&gt;&lt;a href="#"&gt;About&lt;/a&gt;&lt;/li&gt;<font></font>
    &lt;li&gt;&lt;a href="#"&gt;Projects&lt;/a&gt;&lt;/li&gt;<font></font>
    &lt;li&gt;&lt;a href="#"&gt;Contact&lt;/a&gt;&lt;/li&gt;<font></font>
  &lt;/ul&gt;<font></font>
  &lt;ul class="nav navbar-nav navbar-right"&gt;<font></font>
    &lt;li&gt;&lt;a href="#"&gt;&lt;span class="glyphicon glyphicon-log-in"&gt;&lt;/span&gt; Login&lt;/a&gt;&lt;/li&gt;<font></font>
  &lt;/ul&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p>
</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOL</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我花了一段时间，但发现包含以下内容使得可以更改导航栏颜色：</font></font></p>

<pre><code>.navbar{ <font></font>
    background-image: none;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
