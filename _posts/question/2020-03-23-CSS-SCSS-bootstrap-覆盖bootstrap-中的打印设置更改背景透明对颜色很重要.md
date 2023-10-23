---
layout: question
title:  CSS / SCSS / bootstrap   覆盖bootstrap   中的打印设置  更改背景：透明！对颜色很重要
date:   2020-03-23T12:02:16.000Z
description: 我对引导CSS /打印有问题。在引导CSS（reset.css）中，所有内容均已清除以进行打​​印\`media print {  \* {   ...
img: 
author: 小胖
category: question
answer: 2
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对引导CSS /打印有问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在引导CSS（reset.css）中，所有内容均已清除以进行打​​印</font></font></p>

<pre><code>@media print {<font></font>
  * {<font></font>
    text-shadow: none !important;<font></font>
    color: black !important;<font></font>
    background: transparent !important;<font></font>
    box-shadow: none !important;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我必须打印几行彩色。</font><font style="vertical-align: inherit;">我的桌子看起来像这样：</font></font></p>

<pre><code>&lt;div class="container"&gt;<font></font>
    &lt;div id="task-summary"&gt;<font></font>
        &lt;div id="process-summary"&gt;<font></font>
            &lt;table class="table table-condensed"&gt;<font></font>
                &lt;tbody&gt;<font></font>
                    &lt;tr class="success"&gt;<font></font>
                        &lt;td&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将其嵌入到我的代码中，但是它不起作用：</font></font></p>

<pre><code>@media print {<font></font>
<font></font>
  #task-summary{<font></font>
    .success{<font></font>
      background-color: #DFF0D7 !important;<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经尝试过使用display来排除css：none ..它有效（不显示行）并且似乎在正确的位置。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人知道我如何在不编辑bootstrap的reset.css的情况下设法覆盖bootstrap css命令吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3011篇《CSS / SCSS / bootstrap   覆盖bootstrap   中的打印设置  更改背景：透明！对颜色很重要》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><pre><code>@media print {<font></font>
    .success {<font></font>
      background-color: #DFF0D7 !important;<font></font>
    }    <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>@media print {<font></font>
    #task-summary .success {<font></font>
      background-color: #DFF0D7 !important;<font></font>
    }  <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>@media print {<font></font>
    #task-summary &gt; #process-summary .success {<font></font>
      background-color: #DFF0D7;<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有同样的问题。</font><font style="vertical-align: inherit;">当您打印页面时，该</font></font><code>background-color: ...;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项不适用于表格行。</font><font style="vertical-align: inherit;">将CSS选择器更改为：</font></font></p>

<pre><code>@media print {<font></font>
<font></font>
  #task-summary .success td {<font></font>
    background-color: #DFF0D7 !important;<font></font>
<font></font>
    /* add this line for better support in chrome */ <font></font>
    -webkit-print-color-adjust:exact;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改后，一切都会正常。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
