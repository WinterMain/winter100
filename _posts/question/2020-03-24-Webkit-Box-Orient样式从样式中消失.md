---
layout: question
title:  Webkit Box Orient样式从样式中消失
date:   2020-03-24T03:04:30.000Z
description: 在我的Angular应用中（我的版本为4.3.1），我在多行之后添加了CSS省略号。为此，我在Sass中使用以下CSS代码。.ellipsis {...
img: 
author: 小宇宙
category: question
answer: 4
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的Angular应用中（我的版本为4.3.1），我在多行之后添加了CSS省略号。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
为此，我在Sass中使用以下CSS代码。</font></font></p>

<pre><code>.ellipsis {<font></font>
    -webkit-box-orient: vertical;<font></font>
    display: block;<font></font>
    display: -webkit-box;<font></font>
    -webkit-line-clamp: 2;<font></font>
    overflow: hidden;<font></font>
    text-overflow: ellipsis;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出于某种原因，盒装式线条仅通过移线从样式中删除，从而导致省略号不起作用。</font><font style="vertical-align: inherit;">这似乎发生在Angular和Ionic应用程序中。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有答案对我有用。</font></font></p>

<p>My solution was to put the <code>-webkit-box-orient: vertical</code> as inline-styling and the rest as a class. Not elegant, but it works.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下为我工作。</font></font></p>

<pre><code>.ellipsis {<font></font>
/* autoprefixer: off */<font></font>
-webkit-box-orient: vertical;<font></font>
/* autoprefixer: on */<font></font>
display: block;<font></font>
display: -webkit-box;<font></font>
-webkit-line-clamp: 2;<font></font>
overflow: hidden;<font></font>
text-overflow: ellipsis;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">}</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与先前介绍的解决方案类似，但是如果那是您的话，则少一行：</font></font></p>

<pre><code>.ellipsis {<font></font>
    /* autoprefixer: ignore next */<font></font>
    -webkit-box-orient: vertical;<font></font>
    display: block;<font></font>
    display: -webkit-box;<font></font>
    -webkit-line-clamp: 2;<font></font>
    overflow: hidden;<font></font>
    text-overflow: ellipsis;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包装</font></font><code>-webkit-box-orient</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下自动前缀代码似乎可以解决此问题。</font></font></p>

<pre><code>.ellipsis {<font></font>
    /* autoprefixer: off */<font></font>
    -webkit-box-orient: vertical;<font></font>
    /* autoprefixer: on */<font></font>
    display: block;<font></font>
    display: -webkit-box;<font></font>
    -webkit-line-clamp: 2;<font></font>
    overflow: hidden;<font></font>
    text-overflow: ellipsis;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
