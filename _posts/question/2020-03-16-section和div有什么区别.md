---
layout: question
title:  <section>和<div>有什么区别？
date:   2020-03-16T06:35:16.000Z
description: <section>和<div>in有HTML什么区别？我们不是在两种情况下都定义了节吗？...
img: 
author: TomNear前端
category: question
answer: 12
tags: HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>&lt;section&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">in有</font></font><code>HTML</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么</font><font style="vertical-align: inherit;">区别</font><font style="vertical-align: inherit;">？</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们不是在两种情况下都定义了节吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1757篇《<section>和<div>有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>&lt;section&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签定义文档中的部分，如章节，页眉，页脚，或该文件的任何其它部分。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签定义的划分或HTML文档中的一个部分。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记用于组块元件，以将它们与CSS格式化。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom西里路易</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><strong><code>&lt;section&gt;&lt;/section&gt;</code></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML </font></font><code>&lt;section&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素表示文档的一般部分，即内容的主题分组，通常带有标题。</font></font><code>&lt;section&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常应通过将标题（</font></font><code>&lt;h1&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- </font></font><code>&lt;h6&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素）作为元素的子元素</font><font style="vertical-align: inherit;">来标识</font><font style="vertical-align: inherit;">每个</font></font><code>&lt;section&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  元素。</font><font style="vertical-align: inherit;">详情请点击链接。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考文献：</font></font></p>

<ul>
<li><a href="http://www.w3schools.com/tags/tag_section.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.w3schools.com/tags/tag_section.asp</font></font></a></li>
<li><a href="https://developer.mozilla.org/en/docs/Web/HTML/Element/section" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/en/docs/Web/HTML/Element/section</font></font></a></li>
</ul>

<hr>

<p><strong><code>&lt;div&gt;&lt;/div&gt;</code></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML </font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素（或HTML Document Division Element）是流内容的通用容器，它本质上不代表任何内容。</font><font style="vertical-align: inherit;">它可以用于对元素进行分组以进行样式设置（使用class或id属性），或者因为它们共享属性值（例如lang）。</font><font style="vertical-align: inherit;">仅当没有其他语义元素（例如</font></font><code>&lt;article&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>&lt;nav&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）合适</font><font style="vertical-align: inherit;">时才应使用它</font><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：-http: </font></font><a href="http://www.w3schools.com/tags/tag_div.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.w3schools.com/tags/tag_div.asp-https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
: </font></font><a href="https://developer.mozilla.org/en/docs/Web/HTML/Element/div" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/en/docs/Web/HTML/Element/div</font></font></a></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是一些链接，它们更多地讨论了它们之间的区别：</font></font></p>

<ul>
<li><a href="http://html5doctor.com/avoiding-common-html5-mistakes/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://html5doctor.com/avoiding-common-html5-mistakes/</font></font></a></li>
<li><a href="https://teamtreehouse.com/community/use-div-or-section-element" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://teamtreehouse.com/community/use-div-or-section-element</font></font></a></li>
<li><a href="http://webdesign.about.com/od/html5tags/fl/div-vs-section.htm" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://webdesign.about.com/od/html5tags/fl/div-vs-section.htm</font></font></a></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三小哥</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是有关如何在Web应用程序（纯粹是主观的）的情况下区分几个最近的html5元素的提示。 </font></font></p>

<p><code>&lt;section&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在图形用户界面中标记窗口小部件，而</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">窗口小部件的组件的容器</font><font style="vertical-align: inherit;">则</font><font style="vertical-align: inherit;">是容器，例如包含按钮和标签的容器。</font></font></p>

<p><code>&lt;article&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 对具有共同目的的小部件进行分组。</font></font></p>

<p><code>&lt;header&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是标题和菜单栏。</font></font></p>

<p><code>&lt;footer&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是状态栏。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Green</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>&lt;section&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能会</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更整洁</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，帮助</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">屏幕阅读器</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">搜索引擎优化</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，同时</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在字节小</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更快地型</font></font></strong></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总体上差别不大。</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，不建议把</font></font><code>&lt;section&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>&lt;section&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而不是放置</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内</font></font><code>&lt;section&gt;</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚猴子</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意不要过度使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">section</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签代替</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">div</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素。</font><font style="vertical-align: inherit;">一</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码应在上下文中定义一个显著区域</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的身体</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">从语义上讲，HTML5鼓励我们按以下方式定义文档：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;html&gt;<font></font>
&lt;head&gt;&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
    &lt;header&gt;&lt;/header&gt;<font></font>
    &lt;section&gt;<font></font>
        &lt;h1&gt;&lt;/h1&gt;<font></font>
        &lt;div&gt;<font></font>
            &lt;span&gt;&lt;/span&gt;<font></font>
        &lt;/div&gt;<font></font>
        &lt;div&gt;&lt;/div&gt;<font></font>
    &lt;/section&gt;<font></font>
    &lt;footer&gt;&lt;/footer&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种策略使网络机器人和自动屏幕阅读器可以更好地理解您的内容流。</font><font style="vertical-align: inherit;">该标记明确定义了主要页面内容的包含位置。</font><font style="vertical-align: inherit;">当然，页眉和页脚通常在网站的数百甚至数千页面中很常见。</font><font style="vertical-align: inherit;">该</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签应限于解释这里独特的内容包含。</font><font style="vertical-align: inherit;">然后，</font><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">section</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签内，我们应继续使用层次结构中较低的HTML标签（例如</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">h1</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">div</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">span</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等）</font><font style="vertical-align: inherit;">来标记和控制内容</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在大多数简单页面中，应该只有一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">section</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签，而不是多个。</font><font style="vertical-align: inherit;">也请考虑其他有趣的HTML5标签，它们与</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">section</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相似</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">考虑</font><font style="vertical-align: inherit;">在文档流中</font><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">article</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">summary</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">aside</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和其他内容。</font><font style="vertical-align: inherit;">如您所见，这些标签进一步增强了我们定义HTML文档主要区域的能力。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易村村</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><code>&lt;div&gt;</code>—the generic flow container we all know and love. It’s a block-level element with no additional semantic meaning (W3C:Markup, WhatWG)</p>

<p><code>&lt;section&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">—通用文档或应用程序部分。</font><font style="vertical-align: inherit;">通常，A具有标题（标题），也可能具有页脚。</font><font style="vertical-align: inherit;">它是一大堆相关内容，例如长篇文章的小节，页面的主要部分（例如，首页上的新闻部分）或Webapp的选项卡式界面中的页面。</font><font style="vertical-align: inherit;">（W3C：Markup，WhatWG）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的建议：div：使用较低的版本（我认为仍为4.01）html元素（很多设计师对此进行了处理）。</font><font style="vertical-align: inherit;">部分：最近使用（html5）html元素。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYHarryHarry</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML5标准中，</font></font><code>&lt;section&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素被定义为相关元素的块。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素被定义为子元素的块。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam小哥Tom</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">section标签为html提供了更多的语义语法。</font><font style="vertical-align: inherit;">div是节的通用标记。</font><font style="vertical-align: inherit;">当您将section标签用于适当的内容时，它也可以用于搜索引擎优化。</font><font style="vertical-align: inherit;">section标签还使html解析变得容易。</font><font style="vertical-align: inherit;">有关更多信息，请参阅。</font></font><a href="http://blog.whatwg.org/is-not-just-a-semantic" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://blog.whatwg.org/is-not-just-a-semantic</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小蛋蛋</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是观察-尚未找到任何证实这一点的文档</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果一个节包含另一个节，则内部节中的h1标题将以比外部节中的h1标题更小的字体显示。</font><font style="vertical-align: inherit;">当使用div而不是section时，内部div h1标头显示为h1。</font></font></p>

<pre><code>&lt;section&gt;<font></font>
  &lt;h1&gt;Level1&lt;/h1&gt;<font></font>
  some text<font></font>
  &lt;section&gt;<font></font>
    &lt;h1&gt;Level2&lt;/h1&gt;<font></font>
    some more text<font></font>
  &lt;/section&gt;<font></font>
&lt;/section&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-Level2-标头的字体比Level1-标头的字体小。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当使用css为h1标头着色时，内部h1也被着色（表现为常规h1）。</font><font style="vertical-align: inherit;">在Firefox 18，IE 10和Chrome 28中，这是相同的行为。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝乐</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><h2><strong><code>&lt;div&gt; Vs &lt;Section&gt;</code></strong></h2>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第1轮</font></font></h2>

<p><strong><code>&lt;div&gt;:</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><a href="http://en.wikipedia.org/wiki/HTML"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   元素（或HTML文档分割元件）是用于流内容，这本身不表示任何一般容器。</font><font style="vertical-align: inherit;">它可以用于对元素进行分组以进行样式设置（使用class或id属性），或者因为它们共享属性值（例如lang）。</font><font style="vertical-align: inherit;">仅当没有其他语义元素（例如</font></font><code>&lt;article&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>&lt;nav&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）合适</font><font style="vertical-align: inherit;">时才应使用它</font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><code>&lt;section&gt;:</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="http://en.wikipedia.org/wiki/HTML"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">段件（</font></font><code>&lt;section&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）表示一个文件，一个通用的部分，即，内容的主题分组，典型地具有一个标题。</font></font></p>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二回合</font></font></h2>

<p><strong><code>&lt;div&gt;:</code></strong> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器支持</font></font></strong>
<img src="https://i.stack.imgur.com/zSFmL.png" alt="在此处输入图片说明"></p>

<p><strong><code>&lt;section&gt;:</code></strong> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器支持</font></font></strong></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表格中的数字指定了完全支持该元素的第一个浏览器版本。</font></font></em>
<img src="https://i.stack.imgur.com/jYJNk.png" alt="在此处输入图片说明"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，div仅从纯CSS或DOM角度而言是相关的，而部分也与语义有关，并且在不久的将来与搜索引擎的索引也相关。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙猴子</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><code>&lt;section&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 表示内部的内容已分组（即，与单个主题相关），并且应作为条目出现在页面轮廓中。</font></font></p>

<p><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，在另一方面，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有传达任何意义</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自于它的任何发现一旁</font></font><code>class</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>lang</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>title</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以不：使用a </font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会在HTML中定义部分。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从规格：</font></font></p>

<h3><code>&lt;section&gt;</code></h3>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>&lt;section&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素表示一个文档或应用程序的通用部分。</font><font style="vertical-align: inherit;">在这种情况下，一节是内容的主题分组。</font></font><code>section</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常应通过将标题（h1-h6元素）作为元素的子元素来标识</font><font style="vertical-align: inherit;">每个</font></font><code>&lt;section&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素。</font></font></p>
  
  <p>Examples of sections would be chapters, the various tabbed pages in a tabbed dialog box, or the numbered sections of a thesis. A Web site’s home page could be split into sections for an introduction, news items, and contact information.</p>
  
  <p>...</p>
  
  <p><strong>The <code>&lt;section&gt;</code> element is not a generic container element. When an element is needed only for styling purposes or as a convenience for scripting, authors are encouraged to use the <code>&lt;div&gt;</code> element instead. A general rule is that the <code>&lt;section&gt;</code> element is appropriate only if the element’s contents would be listed explicitly in the document’s outline.</strong></p>
</blockquote>

<p>(<a href="https://www.w3.org/TR/html/sections.html#the-section-element" rel="noreferrer">https://www.w3.org/TR/html/sections.html#the-section-element</a>)</p>

<h3><code>&lt;div&gt;</code></h3>

<blockquote>
  <p>The <code>&lt;div&gt;</code> element has no special meaning at all. It represents its children. It can be used with the <code>class</code>, <code>lang</code>, and <code>title</code> attributes to mark up semantics common to a group of consecutive elements.</p>
  
  <p><strong>Note:</strong> Authors are strongly encouraged to view the <code>&lt;div&gt;</code> element as an element of last resort, for when no other element is suitable. Use of more appropriate elements instead of the <code>&lt;div&gt;</code> element leads to better accessibility for readers and easier maintainability for authors.</p>
</blockquote>

<p>(<a href="https://www.w3.org/TR/html/grouping-content.html#the-div-element" rel="noreferrer">https://www.w3.org/TR/html/grouping-content.html#the-div-element</a>)</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小西门</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><code>&lt;section&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记一个</font></font><a href="http://html5doctor.com/the-section-element/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记一个没有关联语义的通用块。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
