---
layout: question
title:  如何在Bootstrap 4中使用Sass更改字体大小？
date:   2020-03-23T03:47:14.000Z
description: 我正在获取交叉信息，并想在这里提出问题。我已经读过一些地方的字体大小，例如应该从html元素更改：html { font-size  14px }...
img: 
author: 猪猪Stafan
category: question
answer: 1
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在获取交叉信息，并想在这里提出问题。</font><font style="vertical-align: inherit;">我已经读过一些地方的字体大小，例如应该从html元素更改：</font></font></p>

<pre><code>html { font-size: 14px }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bootstrap 4 rem值将相应地更新文本。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有趣的是，如果我将html元素的font-size保留为其默认值，并更改bootstrap变量以更改字体大小，那我在做错什么吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>html { font-size: 16px }<font></font>
<font></font>
// Changing bootstrap variable to <font></font>
$font-size-base: 0.875rem //instead of 1rem<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2751篇《如何在Bootstrap 4中使用Sass更改字体大小？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Stafan</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引导定义的基础</font></font><code>font-size</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，在它的</font></font><code>_reboot.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为</font></font></p>

<pre><code>body {<font></font>
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;<font></font>
    font-size: 1rem;<font></font>
    font-weight: 400;<font></font>
    line-height: 1.5;<font></font>
    color: #292b2c;<font></font>
    background-color: #fff;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请勿将默认值更改为框架文件，请始终使用自定义css / js文件修改值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，为了更改字体大小以</font></font><code>14px</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您自己的</font><font style="vertical-align: inherit;">字体</font></font><code>style.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（自定义css文件）中</font><font style="vertical-align: inherit;">使用此</font><font style="vertical-align: inherit;">字体</font></font></p>

<pre><code>body {<font></font>
    font-size: 0.875rem;<font></font>
 }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><a href="http://jsfiddle.net/bhavikbamania/a8xn5bo3/1/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作的小提琴</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用，</font></font><code>!important</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将看不到更改以覆盖默认更改。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的</font></font><code>custom.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中执行以下操作：</font></font></p>

<pre><code>$custom-variable:0.875rem;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后像这样使用它：</font></font></p>

<pre><code>@import "./src/scss/_modules/custom"; <font></font>
@import "./bower_components/bootstrap/scss/bootstrap";<font></font>
<font></font>
body {<font></font>
font-size:$custom-variable;<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
