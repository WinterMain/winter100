---
layout: question
title:  target =“ _ blank”与target =“ _ new”
date:   2020-03-19T02:56:52.000Z
description: 什么之间的区别<a target="_new">，并<a target="_blank">和我应该使用如果我只是想打开一个新标签/窗口的链接？...
img: 
author: 神乐卡卡西
category: question
answer: 11
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么之间的区别</font></font><code>&lt;a target="_new"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并</font></font><code>&lt;a target="_blank"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和我应该使用如果我只是想打开一个新标签/窗口的链接？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2281篇《target =“ _ blank”与target =“ _ new”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AEva伽罗</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在iframe页面上使用_New很有用。</font><font style="vertical-align: inherit;">由于target =“ _ blank”不能解决问题，而是在同一iframe上打开页面，因此target new是iframe页面的最佳解决方案。</font><font style="vertical-align: inherit;">只是我的五分钱。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西门十三</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了在新标签页/窗口中打开链接，您将使用</font></font><code>&lt;a target="_blank"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值</font></font><code>_blank</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">=定向的浏览上下文：一个新的：根据您的浏览设置的选项卡或窗口</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值</font></font><code>_new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">=无效；</font><font style="vertical-align: inherit;">HTML5中元素上的target属性没有这样的值</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目标属性及其在元素上的所有值：</font></font><a href="http://w3-video.com/Web_Technologies/HTML5/html5_attributes/a/html5_a_target_attribute.php" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视频演示</font></font></a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接的target属性强制浏览器在新的浏览器窗口中打开目标页面。</font><font style="vertical-align: inherit;">使用</font></font><code>_blank</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为目标值，将同时使用，每次产生一个新的窗口</font></font><code>_new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将只产卵一个新窗口，用的目标值，点击每一个环节</font></font><code>_new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将取代以前催生窗口中加载该页面</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy逆天</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">_blank作为目标值每次都会产生一个新窗口， </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">_new将仅产生一个新窗口。  </font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样，单击目标值为_new的每个链接都将替换先前生成的窗口中加载的页面。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以单击此处</font></font><a href="http://www.searchenginejournal.com/when-not-to-use-target_blank-link-attribute/19924/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">何时使用_blank或_new</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自己尝试一下。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A凯</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意-切记始终包含“引号”-至少在Chrome上</font></font><code>target=_blank</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（不</font></font><code>target="_blank"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带引号）</font><font style="vertical-align: inherit;">与</font><font style="vertical-align: inherit;">（带引号）不一样。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后者在新的标签/窗口中打开每个链接。</font><font style="vertical-align: inherit;">前一个（缺少引号）在一个新的选项卡/窗口中打开您单击的第一个链接，然后用您单击的每个后续链接（也用缺失的引号命名）覆盖相同的选项卡/窗口。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyJinJin</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我了解，</font></font><code>target = whatever</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将查找具有该名称的框架/窗口。</font><font style="vertical-align: inherit;">如果找不到，它将使用该名称打开一个新窗口。</font><font style="vertical-align: inherit;">如果为</font></font><code>whatever == "_new"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则其显示方式与您使用过的</font></font><code>_blank</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除外.....</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用保留的目标名称之一将绕过“查找”阶段。</font><font style="vertical-align: inherit;">因此，</font></font><code>target = "_blank"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在十二个链接上将打开十二个空白窗口，但是</font></font><code>target = whatever</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在十二个链接上将仅打开一个</font><font style="vertical-align: inherit;">空白</font><font style="vertical-align: inherit;">窗口。</font></font><code>target = "_new"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">十几个链接上的链接可能会显示不稳定的行为。</font><font style="vertical-align: inherit;">我没有在几种浏览器上尝试过，但只能打开一个窗口。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至少这就是我解释规则的方式。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蓝染大人飞云</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><code>target="_blank"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 在大多数浏览器中打开一个新标签。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid前端LEY</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前可能有人问过这个问题，但：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“指定target =“ _ new的每个链接”都会查找并按名称查找该窗口，然后在其中打开。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用target =“ _ blank”，则每次都会在当前窗口的顶部创建一个全新的窗口。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从这里：</font><a href="http://thedesignspace.net/MT2archives/000316.html" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://thedesignspace.net/MT2archives/000316.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//thedesignspace.net/MT2archives/000316.html</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Stafan</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这是一个古老的问题，正确的答案，使用</font></font><code>_blank</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经提到过好几次了，但是使用</font></font><code>&lt;a target="somesite.com" target="_blank"&gt;Link&lt;/a&gt;</code> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存在安全隐患</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它</font></font><a href="https://mathiasbynens.github.io/rel-noopener/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="https://jakearchibald.com/2016/performance-benefits-of-rel-noopener/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">性能优势</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）来使用：</font></font></p>

<pre><code>&lt;a href="somesite.com" target="_blank" rel="noopener noreferrer"&gt;Link&lt;/a&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyItachi</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>target="_blank"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将指示浏览器在用户单击链接时创建新的浏览器选项卡或窗口。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>target="_new"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据规范，</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">从技术上讲是无效的，但据我所知，每个浏览器的行为都相同：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将搜索上下文名称为“ _new”的标签或窗口</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果找到“ _new”标签/窗口，则将URL加载到其中</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果未找到，则使用上下文名称“ _new”创建一个新的选项卡/窗口，并将URL加载到其中</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意的</font></font><code>target="_new"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">行为与完全相同</font></font><code>target="new"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，后者是有效的HTML，而前者是无效的HTML。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更令人困惑的是，在HTML4中，该</font></font><code>target</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性已被弃用。</font><font style="vertical-align: inherit;">在HTML5中，此决定被撤销，并且再次成为规范的正式组成部分。</font></font><code>target</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论您使用什么版本的HTML，</font><font style="vertical-align: inherit;">所有浏览器都支持</font><font style="vertical-align: inherit;">，但是如果您的文档类型是HTML4，则某些验证程序会将使用情况标记为已弃用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Stafan</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用“ _blank”</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="http://dev.w3.org/html5/spec/Overview.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5规范</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有效的浏览上下文名称</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是至少一个字符的任何字符串，它不与U + 005F低线字符开头。</font><font style="vertical-align: inherit;">（以下划线开头的名称保留用于特殊关键字。）</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有效的浏览上下文名称或关键字</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个有效的浏览上下文名称的任何字符串或者是一个一个ASCII不区分大小写的匹配：_blank，_self，_parent，_top或“ - </font></font><a href="http://w3c.github.io/html/browsers.html#browsing-context-names" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源</font></font></a></p>
</blockquote>

<p>That means that there is no such keyword as <code>_new</code> in HTML5, and <a href="http://www.w3.org/TR/html401/types.html#type-frame-target" rel="noreferrer">not in HTML4 (and consequently XHTML) either</a>. That means, that there will be no consistent behavior whatsoever if you use this as a value for the target attribute.</p>

<h3>Security recommendation</h3>

<p>As Daniel and Michael have pointed out in the comments, when using target <code>_blank</code> pointing to an untrusted website, you should, in addition, set <code>rel="noopener"</code>. This prevents the opening site to mess with the opener via JavaScript. See <a href="https://mathiasbynens.github.io/rel-noopener/" rel="noreferrer">this post</a> for more information.</p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
