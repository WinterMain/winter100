---
layout: question
title:  CSS内容属性：是否可以插入HTML而不是Text？
date:   2020-03-26T08:14:27.000Z
description: 只是想知道是否有可能以某种方式使CSS content属性插入html代码而不是在上插入字符串 before或 after类似这样的元素：.heade...
img: 
author: 十三西门
category: question
answer: 2
tags: html CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是想知道是否有可能以某种方式使CSS </font></font><code>content</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性插入html代码而不是在上插入字符串</font></font><code>:before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>:after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似这样的元素：</font></font></p>

<pre><code>.header:before{<font></font>
  content: '&lt;a href="#top"&gt;Back&lt;/a&gt;';<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将非常方便...可以通过Javascript完成，但是使用CSS确实可以使生活更轻松:)</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3760篇《CSS内容属性：是否可以插入HTML而不是Text？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimJim</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在CSS3分页媒体中，可以使用</font></font><code>position: running()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和来实现</font></font><code>content: element()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"></font><a href="https://www.w3.org/TR/css-gcpm-3/#running-syntax" rel="noreferrer"><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS为分页媒体模块</font></font></em></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">草稿</font><a href="https://www.w3.org/TR/css-gcpm-3/#running-syntax" rel="noreferrer"><em><font style="vertical-align: inherit;">生成的内容</font></em></a><font style="vertical-align: inherit;">示例</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>@top-center {<font></font>
  content: element(heading); <font></font>
}<font></font>
<font></font>
.runner { <font></font>
  position: running(heading);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.runner可以是任何元素，并且</font></font><code>heading</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是插槽的任意名称。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">澄清一下，基本上没有浏览器支持，所以这主要是为了将来参考/除了已经给出的“实用答案”。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，这是不可能的。</font><font style="vertical-align: inherit;">根据</font></font><a href="http://www.w3.org/TR/CSS21/generate.html#propdef-content" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规格</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成的内容不会更改文档树。</font><font style="vertical-align: inherit;">特别是，它不会反馈到文档语言处理器（例如，用于重新解析）。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">换句话说，对于字符串值，这意味着始终按字面意义对待该值。</font><font style="vertical-align: inherit;">无论使用哪种文档语言，都永远不会将其解释为标记。</font></font></p>

<p>As an example, using the given CSS with the following HTML:</p>

<pre><code>&lt;h1 class="header"&gt;Title&lt;/h1&gt;
</code></pre>

<p>... will result in the following output:</p>

<h1>&lt;a href="#top"&gt;Back&lt;/a&gt;Title</h1></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
