---
layout: question
title:  如何在Twitter Bootstrap 3中将按钮居中？
date:   2020-03-24T06:46:35.000Z
description: 我正在Twitter Bootstrap中构建表单，但是将按钮居中于表单输入下方时出现问题。我已经尝试过将center-block类应用于按钮，但这没有用...
img: 
author: 西门
category: question
answer: 3
tags: html CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在Twitter Bootstrap中构建表单，但是将按钮居中于表单输入下方时出现问题。</font><font style="vertical-align: inherit;">我已经尝试过将</font></font><code>center-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类应用于按钮，但这没有用。</font><font style="vertical-align: inherit;">我该如何解决？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的代码。</font></font></p>

<pre><code>&lt;!-- Button --&gt;<font></font>
&lt;div class="form-group"&gt;<font></font>
    &lt;label class="col-md-4 control-label" for="singlebutton"&gt;&lt;/label&gt;<font></font>
    &lt;div class="col-md-4"&gt;<font></font>
        &lt;button id="singlebutton" name="singlebutton" class="btn btn-primary center-block"&gt;<font></font>
            Next Step!<font></font>
        &lt;/button&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3402篇《如何在Twitter Bootstrap 3中将按钮居中？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据Twitter Bootstrap文档：</font><a href="http://getbootstrap.com/css/#helper-classes-center" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://getbootstrap.com/css/#helper-classes-center" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//getbootstrap.com/css/#helper-classes-center</font></font></a></p>

<pre><code>&lt;!-- Button --&gt;<font></font>
&lt;div class="form-group"&gt;<font></font>
   &lt;label class="col-md-4 control-label" for="singlebutton"&gt;&lt;/label&gt;<font></font>
   &lt;div class="col-md-4 center-block"&gt;<font></font>
      &lt;button id="singlebutton" name="singlebutton" class="btn btn-primary center-block"&gt;<font></font>
          Next Step!<font></font>
       &lt;/button&gt;<font></font>
   &lt;/div&gt;  <font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该类</font></font><code>center-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所做的只是告诉元素的auto边距为0，其中auto为左/右边距。</font><font style="vertical-align: inherit;">但是，除非类text-center或css text-align：center; </font><font style="vertical-align: inherit;">是在父对象上设置的，元素不知道要从中进行此自动计算的点，因此不会使自己居中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里查看上面的代码示例：</font><a href="https://jsfiddle.net/Seany84/2j9pxt1z/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://jsfiddle.net/Seany84/2j9pxt1z/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/Seany84/2j9pxt1z/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加到您的样式：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示：表；</font><font style="vertical-align: inherit;">保证金：0自动;</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用“文本中心”类将div中的Button包裹起来。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需更改此：</font></font></p>

<pre><code>&lt;!-- wrong --&gt;<font></font>
&lt;div class="col-md-4 center-block"&gt;<font></font>
    &lt;button id="singlebutton" name="singlebutton" class="btn btn-primary center-block"&gt;Next Step!&lt;/button&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对此： </font></font></p>

<pre><code>&lt;!-- correct --&gt;<font></font>
&lt;div class="col-md-4 text-center"&gt; <font></font>
    &lt;button id="singlebutton" name="singlebutton" class="btn btn-primary"&gt;Next Step!&lt;/button&gt; <font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">BootstrapV4</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>center-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">滴入</font></font><a href="https://github.com/twbs/bootstrap/pull/19102" rel="noreferrer" title="＃19102"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＃19102</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">赞成</font></font><code>m-*-auto</code></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
