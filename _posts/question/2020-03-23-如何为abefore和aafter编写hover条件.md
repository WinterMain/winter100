---
layout: question
title:  如何为a：before和a：after编写：hover条件？
date:   2020-03-23T02:00:30.000Z
description: 如何写 hover和 visited条件a before？我正在尝试，a before hover但是没有用...
img: 
author: 宝儿
category: question
answer: 4
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何写</font></font><code>:hover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>:visited</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">条件</font></font><code>a:before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试，</font></font><code>a:before:hover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是没有用</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2629篇《如何为a：before和a：after编写：hover条件？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">写</font></font><code>a:hover::before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>a::before:hover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><a href="http://jsfiddle.net/sandeep/PJspQ/1/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">example</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里Sam</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试使用</font></font><code>.card-listing:hover::after</code> <code>hover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>::</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它会起作用</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在鼠标悬停时更改菜单链接的文本。</font><font style="vertical-align: inherit;">（悬停时使用的不同语言文字）这是</font></font></p>

<p><a href="http://jsfiddle.net/nagendra_rao/YSgKL/2/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsfiddle示例</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的HTML：</font></font></p>

<pre><code>&lt;a align="center" href="#"&gt;&lt;span&gt;kannada&lt;/span&gt;&lt;/a&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS：</font></font></p>

<pre><code>span {<font></font>
    font-size:12px;<font></font>
}<font></font>
a {<font></font>
    color:green;<font></font>
}<font></font>
a:hover span {<font></font>
    display:none;<font></font>
}<font></font>
a:hover:before {<font></font>
    color:red;<font></font>
    font-size:24px;<font></font>
    content:"ಕನ್ನಡ";<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以使用右尖括号（“&gt;”）将操作限制为一个类，就像我在这段代码中所做的那样：</font></font></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html lang="en"&gt;<font></font>
&lt;head&gt;<font></font>
  &lt;meta charset="UTF-8"&gt;<font></font>
  &lt;title&gt;Document&lt;/title&gt;<font></font>
  &lt;style type="text/css"&gt;<font></font>
    span {<font></font>
    font-size:12px;<font></font>
    }<font></font>
    a {<font></font>
        color:green;<font></font>
    }<font></font>
    .test1&gt;a:hover span {<font></font>
        display:none;<font></font>
    }<font></font>
    .test1&gt;a:hover:before {<font></font>
        color:red;<font></font>
        content:"Apple";<font></font>
    }<font></font>
  &lt;/style&gt;<font></font>
&lt;/head&gt;<font></font>
<font></font>
&lt;body&gt;<font></font>
  &lt;div class="test1"&gt;<font></font>
    &lt;a href="#"&gt;&lt;span&gt;Google&lt;/span&gt;&lt;/a&gt;<font></font>
  &lt;/div&gt;<font></font>
  &lt;div class="test2"&gt;<font></font>
    &lt;a href="#"&gt;&lt;span&gt;Apple&lt;/span&gt;&lt;/a&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/body&gt;<font></font>
<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> hover：before开关仅适用于.test1类</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
