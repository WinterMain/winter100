---
layout: question
title:  包括CSS的最佳方法？为什么要使用\`import？
date:   2020-03-24T01:19:21.000Z
description: 基本上，我想知道\`import将样式表导入到现有样式表中而不是仅添加另一个样式表的优点/目的是什么？<link rel="stylesheet" ty...
img: 
author: GOL
category: question
answer: 12
tags: HTML CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，我想知道</font></font><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将样式表导入到现有样式表中而不是仅添加另一个样式表</font><font style="vertical-align: inherit;">的优点/目的是什么</font><font style="vertical-align: inherit;">？</font></font></p>

<pre><code>&lt;link rel="stylesheet" type="text/css" href="" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到文件头？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3148篇《包括CSS的最佳方法？为什么要使用\`import？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为@import在为多个设备编写代码时最有用。</font><font style="vertical-align: inherit;">包含条件语句，仅包含所讨论设备的样式，然后仅加载一张纸。</font><font style="vertical-align: inherit;">您仍然可以使用链接标记添加任何常见的样式元素。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">几乎没有理由使用@import，因为它会分别加载每个导入的CSS文件，并且会大大降低您的网站速度。</font><font style="vertical-align: inherit;">如果您对处理CSS的最佳方式感兴趣（涉及页面速度），则应采用以下方式处理</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> CSS代码：</font></font></p>

<ul>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开所有CSS文件，然后复制每个文件的代码</font></font></strong> </li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将所有代码粘贴到页面的HTML标头中的单个STYLE标记之间</font></font></strong></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非您有大量代码或有特殊需要，否则切勿使用CSS @import或单独的CSS文件来提供CSS。</font></font></strong></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处提供更多详细信息：</font><a href="http://www.giftofspeed.com/optimize-css-delivery/" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://www.giftofspeed.com/optimize-css-delivery/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.giftofspeed.com/optimize-css-delivery/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面效果最好的原因是，它为浏览器创建的请求更少，并且可以立即开始呈现CSS，而无需下载单独的文件。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村米亚小小</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为关键是您实际上编写多个CSS样式表的两个原因。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您编写多张工作表是因为网站的不同页面需要不同的CSS定义。</font><font style="vertical-align: inherit;">或者至少不是全部它们都需要另一页需要的所有CSS定义。</font><font style="vertical-align: inherit;">因此，请拆分CSS文件，以优化在不同页面上加载的工作表，并避免加载太多CSS定义。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想到的第二个原因是您的CSS太大了，变得难以处理，并且为了更轻松地维护大型CSS文件，您将它们拆分为多个CSS文件。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出于第一个原因，</font></font><code>&lt;link&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将应用</font><font style="vertical-align: inherit;">附加</font><font style="vertical-align: inherit;">标记，因为这允许您为不同页面加载不同的CSS文件集。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于第二个原因，该</font></font><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句似乎最方便，因为您获得了多个CSS文件，但是加载的文件始终相同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从加载时间的角度来看，没有什么不同。</font><font style="vertical-align: inherit;">无论如何实现，浏览器都必须检查并下载单独的CSS文件。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时您必须使用@import而不是inline。</font><font style="vertical-align: inherit;">如果您正在处理具有32个或更多css文件的复杂应用程序，并且必须支持IE9，则别无选择。</font><font style="vertical-align: inherit;">IE9会忽略前31个后的任何CSS文件，其中包括和内联CSS。</font><font style="vertical-align: inherit;">但是，每张纸可以导入其他31张纸。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在使用CSS RESET，请在CSS中使用@import，例如Eric Meyer的Reset CSS v2.0，因此它在应用CSS之前就已经完成了工作，从而避免了冲突。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Jim番长</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用自</font></font><a href="http://webdesign.about.com/od/beginningcss/f/css_import_link.htm" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://webdesign.about.com/od/beginningcss/f/css_import_link.htm</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@import方法的主要目的是在页面上使用多个样式表，但是&lt;head&gt;中只有一个链接。</font><font style="vertical-align: inherit;">例如，一家公司可能对站点上的每个页面都有一个全局样式表，而子部分具有仅适用于该子部分的其他样式。</font><font style="vertical-align: inherit;">通过链接到子节样式表并在该样式表的顶部导入全局样式，您不必维护一个巨大的样式表，其中包含站点和每个子节的所有样式。</font><font style="vertical-align: inherit;">唯一的要求是，所有@import规则都必须位于其余样式规则之前。</font><font style="vertical-align: inherit;">请记住，继承仍然是一个问题。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy猪猪</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用@import的一个地方是当我在做两个版本的页面时，英语和法语。</font><font style="vertical-align: inherit;">我将使用main.css用英语构建我的页面。</font><font style="vertical-align: inherit;">构建法语版本时，将链接到法语样式表（main_fr.css）。</font><font style="vertical-align: inherit;">在法语样式表的顶部，我将导入main.css，然后为法语版本中我需要的不同部分重新定义特定规则。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们非常相似。</font><font style="vertical-align: inherit;">有人可能会说@import更易于维护。</font><font style="vertical-align: inherit;">但是，每个@import都会以与使用“ link”方法相同的方式向您收取新的HTTP请求。</font><font style="vertical-align: inherit;">因此，在速度方面并没有更快。</font><font style="vertical-align: inherit;">正如“ duskwuff”所说，它不会同时加载，这是一个失败。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝乐Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在头中添加CSS样式表与使用导入功能并没有太大的区别。</font><font style="vertical-align: inherit;">using </font></font><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常用于链接样式表，以便可以轻松扩展样式表。</font><font style="vertical-align: inherit;">它可以用于轻松交换不同的颜色布局，例如，结合一些常规的CSS定义。</font><font style="vertical-align: inherit;">我要说的主要优点/目的是可扩展性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也同意xbonez的评论，因为可移植性和可维护性是附加的好处。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无阳光</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出于速度原因，</font><font style="vertical-align: inherit;">最好不要</font><font style="vertical-align: inherit;">在页面中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">CSS。</font><font style="vertical-align: inherit;">看到这篇出色的文章以了解为什么不这样做：</font><a href="http://www.stevesouders.com/blog/2009/04/09/dont-use-import/"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://www.stevesouders.com/blog/2009/04/09/dont-use-import/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.stevesouders.com/blog/2009/04/09/dont-use-import/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且，通常很难对通过@import标记提供服务的css文件进行最小化和合并，因为minify脚本无法从其他css文件中“剥离” @import行。</font><font style="vertical-align: inherit;">当将它们包含为&lt;link标记时，可以使用现有的minify php / dotnet / java模块进行缩小。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此：使用</font></font><code>&lt;link /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Green</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从页面速度的角度来看，</font></font><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">几乎不应该使用CSS文件，因为它可以防止样式表被同时下载。</font><font style="vertical-align: inherit;">例如，如果样式表A包含以下文本：</font></font></p>

<pre><code>@import url("stylesheetB.css");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么在下载第一个样式表之前，可能不会开始下载第二个样式表。</font><font style="vertical-align: inherit;">另一方面，如果两个样式表都在</font></font><code>&lt;link&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML主页面的元素中</font><font style="vertical-align: inherit;">引用</font><font style="vertical-align: inherit;">，则可以同时下载</font><font style="vertical-align: inherit;">两个样式表</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果两个样式表总是一起加载，将它们简单地组合到一个文件中也很有帮助。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时在某些情况下</font></font><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适当，但通常是例外，而不是规则。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用链接方法，样式表被并行加载（更快更好），几乎所有浏览器都支持链接</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">import会逐一加载（慢速加载）任何额外的css文件，并且可能会给您带来Flash风格的内容</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
