---
layout: question
title:  HTML Input =“ file”接受属性文件类型（CSV）
date:   2020-03-19T04:31:57.000Z
description: 我的页面上有一个文件上传对象： <input type="file" ID="fileSelect" />在我的桌面上使用以下excel文件：...
img: 
author: 樱凯Mandy
category: question
answer: 5
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的页面上有一个文件上传对象： </font></font></p>

<pre><code>&lt;input type="file" ID="fileSelect" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的桌面上使用以下excel文件：</font></font></p>

<blockquote>
  <ol>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">file1.xlsx </font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">file1.xls</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">file.csv</font></font></li>
  </ol>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我要上传文件到</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ONLY</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示</font></font><code>.xlsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>.xls</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，和</font></font><code>.csv</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>accept</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，我发现这些内容类型负责</font></font><code>.xlsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＆</font></font><code>.xls</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展...</font></font></p>

<blockquote>
  <p><code>accept</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">= application / vnd.openxmlformats-officedocument.spreadsheetml.sheet（.XLSX）</font></font></p>
  
  <p><code>accept</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">= application / vnd.ms-excel（.XLS）</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，我找不到Excel CSV文件的正确内容类型！</font><font style="vertical-align: inherit;">有什么建议么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例：</font><a href="http://jsfiddle.net/LzLcZ/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：</font></font><a href="http://jsfiddle.net/LzLcZ/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/LzLcZ/</font></font></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2359篇《HTML Input =“ file”接受属性文件类型（CSV）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗前端</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以使用新的html5输入验证属性</font></font><code>pattern=".+\.(xlsx|xls|csv)"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，这很尴尬。。。我找到了我想要的解决方案，而且再简单不过了。</font><font style="vertical-align: inherit;">我使用以下代码来获得所需的结果。</font><font style="vertical-align: inherit;">希望这对以后的人有所帮助。</font><font style="vertical-align: inherit;">感谢大家的帮助。</font></font></p>

<pre><code>&lt;input id="fileSelect" type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" /&gt;  
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有效接受类型：</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSV</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件（.csv），请使用：</font></font><br></p>

<pre><code>&lt;input type="file" accept=".csv" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Excel文件97-2003</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（.xls），请使用：</font></font><br></p>

<pre><code>&lt;input type="file" accept="application/vnd.ms-excel" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Excel Files 2007+</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（.xlsx），请使用：</font></font><br></p>

<pre><code>&lt;input type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文本文件</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（.txt），请使用：</font></font><br></p>

<pre><code>&lt;input type="file" accept="text/plain" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">图像文件</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（.png / .jpg / etc），请使用：</font></font><br></p>

<pre><code>&lt;input type="file" accept="image/*" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML文件</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（.htm，.html），请使用：</font></font><br></p>

<pre><code>&lt;input type="file" accept="text/html" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视频文件</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（.avi，.mpg，.mpeg，.mp4），请使用：</font></font></p>

<pre><code>&lt;input type="file" accept="video/*" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">音频文件</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（.mp3，.wav等），请使用：</font></font></p>

<pre><code>&lt;input type="file" accept="audio/*" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PDF文件</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请使用：</font></font></p>

<pre><code>&lt;input type="file" accept=".pdf" /&gt; 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示：</font><a href="http://jsfiddle.net/dirtyd77/LzLcZ/144/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><br>
<a href="http://jsfiddle.net/dirtyd77/LzLcZ/144/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/dirtyd77/LzLcZ/144/</font></font></a></p>

<hr>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></em> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您试图显示Excel CSV文件（</font></font><code>.csv</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），请</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用：</font></font></p>

<ul>
<li><code>text/csv</code></li>
<li><code>application/csv</code></li>
<li><code>text/comma-separated-values</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅适用于Opera</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></li>
</ul>

<hr>

<p>If you are trying to display a <em>particular file type</em> (for example, a <code>WAV</code> or <code>PDF</code>), then this will almost always work...</p>

<pre><code> &lt;input type="file" accept=".FILETYPE" /&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一神乐</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经</font></font><code>text/comma-separated-values</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在接受属性中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">了CSV mime-type，并且在Opera中工作正常。</font><font style="vertical-align: inherit;">尝试</font></font><code>text/csv</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有运气。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果建议的其他MIME类型为CSV，则为CSV： </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文字/逗号分隔值 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文字/ csv</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序/ csv</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序/ excel </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序/vnd.ms-excel </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序/ vnd.msexcel</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文字/任何文字</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源：</font><a href="http://filext.com/file-extension/CSV" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：</font></font><a href="http://filext.com/file-extension/CSV" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//filext.com/file-extension/CSV</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村伽罗十三</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Safari 10下，这对我不起作用：</font></font></p>

<pre><code>&lt;input type="file" accept=".csv" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不得不这样写：</font></font></p>

<pre><code>&lt;input type="file" accept="text/csv" /&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚LEY</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些天你可以只使用文件扩展名</font></font></p>

<pre><code>&lt;input type="file" ID="fileSelect" accept=".xlsx, .xls, .csv"/&gt;
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
