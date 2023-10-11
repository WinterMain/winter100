---
layout: question
title:  在Chrome中打印时需要删除href值
date:   2020-03-23T13:24:13.000Z
description: 我试图自定义打印CSS，并发现它会打印出带有href值和链接的链接。这是在Chrome中。对于此HTML：<a href="http //ww...
img: 
author: 小胖猪猪
category: question
answer: 7
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图自定义打印CSS，并发现它会打印出带有</font></font><code>href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值和链接的链接。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是在Chrome中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于此HTML：</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;a href="http://www.google.com"&gt;Google&lt;/a&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它打印：</font></font></p>

<pre class="lang-none prettyprint-override"><code>Google (http://www.google.com)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望它打印：</font></font></p>

<pre class="lang-none prettyprint-override"><code>Google
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3066篇《在Chrome中打印时需要删除href值》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于普通用户。</font><font style="vertical-align: inherit;">打开当前页面的检查窗口。</font><font style="vertical-align: inherit;">并输入：</font></font></p>

<pre><code>l = document.getElementsByTagName("a");<font></font>
for (var i =0; i&lt;l.length; i++) {<font></font>
    l[i].href = "";<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，您将不会在打印预览中看到url链接。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony小卤蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap会做同样的事情（...与下面选择的答案相同）。</font></font></p>

<pre><code>@media print {<font></font>
  a[href]:after {<font></font>
    content: " (" attr(href) ")";<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需从此处删除它，或在您自己的打印样式表中覆盖它即可：</font></font></p>

<pre><code>@media print {<font></font>
  a[href]:after {<font></font>
    content: none !important;<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><a href="http://jsfiddle.net/3yDzY/show/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在打印样式表中的某处，您必须具有以下代码段：</font></font></p>

<pre><code>a[href]::after {<font></font>
    content: " (" attr(href) ")"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">唯一的其他可能性是您需要扩展程序来为您执行此操作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱猿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>@media print {<font></font>
   a[href]:after {<font></font>
      display: none;<font></font>
      visibility: hidden;<font></font>
   }<font></font>
}</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作完美。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">隐藏Page url。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>media="print"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在风格踏歌例如：</font></font></p>

<pre><code>&lt;style type="text/css" media="print"&gt;<font></font>
            @page {<font></font>
                size: auto;   /* auto is the initial value */<font></font>
                margin: 0;  /* this affects the margin in the printer settings */<font></font>
            }<font></font>
            @page { size: portrait; }<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要删除链接： </font></font></p>

<pre><code>@media print {<font></font>
   a[href]:after {<font></font>
      visibility: hidden !important;<font></font>
   }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用以下CSS</font></font></p>

<pre><code>&lt;link href="~/Content/common/bootstrap.css" rel="stylesheet" type="text/css"    /&gt;<font></font>
&lt;link href="~/Content/common/bootstrap.min.css" rel="stylesheet" type="text/css" /&gt;<font></font>
&lt;link href="~/Content/common/site.css" rel="stylesheet" type="text/css" /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需通过添加</font><strong><font style="vertical-align: inherit;">media =“ screen”</font></strong><font style="vertical-align: inherit;">将其更改为以下样式</font></font><strong><font style="vertical-align: inherit;"></font></strong></p>

<pre><code>&lt;link href="~/Content/common/bootstrap.css" rel="stylesheet" **media="screen"** type="text/css" /&gt;<font></font>
&lt;link href="~/Content/common/bootstrap.min.css" rel="stylesheet" **media="screen"** type="text/css" /&gt;<font></font>
&lt;link href="~/Content/common/site.css" rel="stylesheet" **media="screen"** type="text/css" /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为它将起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前者的回答像 </font></font></p>

<pre><code>    @media print {<font></font>
  a[href]:after {<font></font>
    content: none !important;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在chrome浏览器中无法正常运行。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只在锚中嵌套img时遇到了类似的问题：</font></font></p>

<pre><code>&lt;a href="some/link"&gt;<font></font>
   &lt;img src="some/src"&gt;<font></font>
&lt;/a&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我申请 </font></font></p>

<pre><code>@media print {<font></font>
   a[href]:after {<font></font>
      content: none !important;<font></font>
   }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于某种原因，我失去了img和整个锚的宽度，所以我改用了：</font></font></p>

<pre><code>@media print {<font></font>
   a[href]:after {<font></font>
      visibility: hidden;<font></font>
   }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">效果很好。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提示</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><a href="https://stackoverflow.com/a/29962072/5211269"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查打印预览</font></font></a> </p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
