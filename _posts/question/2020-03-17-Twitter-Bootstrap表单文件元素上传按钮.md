---
layout: question
title:  Twitter Bootstrap表单文件元素上传按钮
date:   2020-03-17T07:54:19.000Z
description: 为什么没有用于Twitter引导程序的精美文件元素上载按钮？如果为上传按钮实现了蓝色主按钮，那就太好了。甚至可以使用CSS精细化上传按钮吗？（似乎是无法操...
img: 
author: 梅Harry
category: question
answer: 6
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么没有用于Twitter引导程序的精美文件元素上载按钮？</font><font style="vertical-align: inherit;">如果为上传按钮实现了蓝色主按钮，那就太好了。</font><font style="vertical-align: inherit;">甚至可以使用CSS精细化上传按钮吗？</font><font style="vertical-align: inherit;">（似乎是无法操纵的本机浏览器元素）</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1902篇《Twitter Bootstrap表单文件元素上传按钮》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Harry路易</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我以为我要加上三便士的价值，只是说出默认</font></font><code>.custom-file-label</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>custom-file-input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">BS4文件输入以及如何使用它们。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后一类在输入组上，不可见。</font><font style="vertical-align: inherit;">前者是可见标签，并且具有：after伪元素，看起来像一个按钮。</font></font></p>

<pre><code>&lt;div class="custom-file"&gt;<font></font>
&lt;input type="file" class="custom-file-input" id="upload"&gt;<font></font>
&lt;label class="custom-file-label" for="upload"&gt;Choose file&lt;/label&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不能将类添加到伪元素，但是可以在CSS（或SASS）中设置其样式。</font></font></p>

<pre><code>.custom-file-label:after {<font></font>
    color: #fff;<font></font>
    background-color: #1e7e34;<font></font>
    border-color: #1c7430;<font></font>
    pointer: cursor;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><a href="http://markusslima.github.io/bootstrap-filestyle/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://markusslima.github.io/bootstrap-filestyle/</font></font></a></p>

<pre><code>$(":file").filestyle();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>&lt;input type="file" class="filestyle" data-input="false"&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我喜欢的最佳文件上传样式：</font></font></p>

<pre><code>&lt;div class="fileupload fileupload-new" data-provides="fileupload"&gt;<font></font>
  &lt;div class="input-append"&gt;<font></font>
    &lt;div class="uneditable-input span3"&gt;&lt;i class="icon-file fileupload-exists"&gt;&lt;/i&gt; &lt;span class="fileupload-preview"&gt;&lt;/span&gt;&lt;/div&gt;&lt;span class="btn btn-file"&gt;&lt;span class="fileupload-new"&gt;Select file&lt;/span&gt;&lt;span class="fileupload-exists"&gt;Change&lt;/span&gt;&lt;input type="file" /&gt;&lt;/span&gt;&lt;a href="#" class="btn fileupload-exists" data-dismiss="fileupload"&gt;Remove&lt;/a&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在以下位置获得演示和更多样式：</font></font></p>

<p><a href="http://www.jasny.net/bootstrap/javascript/#fileinput" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.jasny.net/bootstrap/javascript/#fileinput</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是使用此方法，您应该用jasny引导程序文件替换twitter引导程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问候。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有可接受结果的简单解决方案：</font></font></p>

<pre><code>&lt;input type="file" class="form-control"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和样式：</font></font></p>

<pre><code>input[type=file].form-control {<font></font>
    height: auto;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长Vicky</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上传按钮的样式很麻烦，因为它为输入而不是按钮设置样式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是您可以使用以下技巧：</font></font></p>

<p><a href="http://www.quirksmode.org/dom/inputfile.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.quirksmode.org/dom/inputfile.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">摘要：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选取法线</font></font><code>&lt;input type="file"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将其放入的元素中</font></font><code>position: relative</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向同一父元素添加</font></font><code>&lt;input&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有正确样式</font><font style="vertical-align: inherit;">的法线</font><font style="vertical-align: inherit;">和图像。</font><font style="vertical-align: inherit;">绝对放置这些元素，以便它们与占据相同的位置</font></font><code>&lt;input type="file"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将的z-index设置</font></font><code>&lt;input type="file"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为2，使其位于样式输入/图像的顶部。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，将的不透明度设置</font></font><code>&lt;input type="file"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为0。</font></font><code>&lt;input type="file"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在将变为实际上不可见，并且样式输入/图像也会照亮，但是您仍然可以单击“浏览”按钮。</font><font style="vertical-align: inherit;">如果按钮位于图像的顶部，则用户似乎单击图像并获得常规的文件选择窗口。</font><font style="vertical-align: inherit;">（请注意，您不能使用“可见性：隐藏”，因为真正不可见的元素也是不可点击的，因此我们需要保持点击状态）</font></font></p></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Gil</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它包含在Jasny的bootstrap中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用以下命令创建一个简单的上传按钮</font></font></p>

<pre><code>&lt;span class="btn btn-file"&gt;Upload&lt;input type="file" /&gt;&lt;/span&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用fileupload插件，您可以创建更多高级小部件。</font><font style="vertical-align: inherit;">看看
 </font></font><a href="http://jasny.github.io/bootstrap/javascript/#fileinput"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jasny.github.io/bootstrap/javascript/#fileinput</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
