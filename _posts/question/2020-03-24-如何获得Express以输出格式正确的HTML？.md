---
layout: question
title:  如何获得Express以输出格式正确的HTML？
date:   2020-03-24T08:39:33.000Z
description: 当使用Express for Node.js时，我注意到它输出的HTML代码没有换行符或制表符。尽管下载可能更有效，但在开发过程中可读性不强。如何获得...
img: 
author: JinJin
category: question
answer: 3
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当使用Express for Node.js时，我注意到它输出的HTML代码没有换行符或制表符。</font><font style="vertical-align: inherit;">尽管下载可能更有效，但在开发过程中可读性不强。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何获得Express以输出格式正确的HTML？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3520篇《如何获得Express以输出格式正确的HTML？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您真的需要格式正确的html吗？</font><font style="vertical-align: inherit;">即使您尝试在一个编辑器中输出看起来不错的东西，在另一个编辑器中也可能看起来很奇怪。</font><font style="vertical-align: inherit;">当然，我不知道您需要html做什么，但是我会尝试使用chrome开发工具或Firefox的Firebug。</font><font style="vertical-align: inherit;">这些工具使您可以很好地了解DOM，而不是html。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您确实需要格式正确的html，请尝试使用EJS代替玉。</font><font style="vertical-align: inherit;">那意味着您必须自己格式化html格式。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在使用控制台进行编译，则可以使用如下代码：</font></font></p>

<pre><code>$ jade views/ --out html --pretty
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jade本身有一个“漂亮”选项：</font></font></p>

<pre><code>var jade = require("jade");<font></font>
<font></font>
var jade_string = [<font></font>
    "!!! 5",<font></font>
    "html",<font></font>
    "    body",<font></font>
    "        #foo  I am a foo div!"<font></font>
].join("\n");<font></font>
<font></font>
var fn = jade.compile(jade_string, { pretty: true });<font></font>
console.log( fn() );<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...为您提供：</font></font></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html&gt;<font></font>
  &lt;body&gt;<font></font>
    &lt;div id="foo"&gt;I am a foo div!<font></font>
    &lt;/div&gt;<font></font>
  &lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我似乎并不很精明，但是对于我所追求的是-可以实际调试视图生成的HTML的功能-很好。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
