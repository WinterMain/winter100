---
layout: question
title:  什么是AMP HTML，它如何与Framework / tool X配合？
date:   2020-04-07T03:14:22.000Z
description: 好的，所以我们现在可能已经从Google 听说过AMP HTML。我很好奇的是，这将如何适应我们现有的工作流程。如果您正在编写React或Angula...
img: 
author: 古一Green
category: question
answer: 3
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，所以我们现在可能已经</font><font style="vertical-align: inherit;">从Google </font><font style="vertical-align: inherit;">听说过</font></font><a href="https://github.com/ampproject/amphtml"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AMP HTML</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我很好奇的是，这将如何适应我们现有的工作流程。</font><font style="vertical-align: inherit;">如果您正在编写React或Angular应用，那么AMP HTML在开发过程中如何适应？</font><font style="vertical-align: inherit;">这些框架中的每一个都已经有一种定义组件的方法，似乎AMP只是添加到了堆栈中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们大多数人已经在使用其他工具，例如browserify或webpack。</font><font style="vertical-align: inherit;">我不容易看到AMP如何</font><font style="vertical-align: inherit;">与其他产品相</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适应</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">其中一些工具已经使我们能够以优化的方式为我们的网站提供服务。</font><font style="vertical-align: inherit;">AMP HTML将在多大程度上改变所有这些？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4050篇《什么是AMP HTML，它如何与Framework / tool X配合？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Itachi</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，通过此</font><a href="https://www.ampproject.org/learn/about-amp/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">URL，</font></a><font style="vertical-align: inherit;">事情变得更加清晰</font></font><a href="https://www.ampproject.org/learn/about-amp/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最大的优化之一是它使来自外部资源的所有内容都异步，因此页面中没有任何内容可以阻止任何东西呈现。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，不再有渲染阻止CSS。 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他性能技术包括所有iframe的沙盒处理，资源加载之前页面上每个元素的布局的预先计算以及禁用慢速CSS选择器。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望此新链接对您有所帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AMP HTML基本上已经回归基础，并提供了最快的HTML。</font><font style="vertical-align: inherit;">我想起了</font></font><code>WAP</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>Nokia 7110</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是制作网页的一套严格的规则，该规则可以扩展并开放给其他公司和开发人员扩展。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前尚不知道这如何与SPA（单页应用程序）和其他javascript前端沉重框架一起使用，这是那些开发人员必须弄清楚的。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它的核心是带有自定义元素的静态HTML页面，这些元素旨在在速度较慢的连接和较小的视图上尽快加载。</font><font style="vertical-align: inherit;">任何人都可以针对移动设备优化其网站，如果真的愿意，可以将其缩减到几KB，无论是否使用AMP-HTML。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主要好处是 </font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google将支持它，认为是Android，Chrome和Google搜索，Google CDN。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面将加载得非常快，并且看起来仍然很漂亮。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像</font></font><a href="https://github.com/Automattic/amp-wp/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Wordpress</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和其他发行商</font><font style="vertical-align: inherit;">那样的最初采用</font><font style="vertical-align: inherit;">可能是一组单独的移动友好AMP页面。</font><font style="vertical-align: inherit;">这是来自Google的，他希望您使所有普通网页都适合移动设备浏览，或者面对SEO热门。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您从长远考虑，它是针对性能的移动网络规范。</font><font style="vertical-align: inherit;">如果采用，则在5年内，任何网页都可以在几秒钟内在移动连接上加载，无论该连接的质量如何。</font><font style="vertical-align: inherit;">如果我们迫不及待地希望技术和电信公司提高速度，那么我们可以至少减小页面的大小。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AMP专为静态页面而设计。</font><font style="vertical-align: inherit;">开发人员必须制作两个不同的页面：普通版和AMP版。</font><font style="vertical-align: inherit;">AMP页面将具有指向正常页面的链接，反之亦然。</font><font style="vertical-align: inherit;">每当来自移动设备的请求到达正常页面时，它将加载AMP页面，反之亦然。</font><font style="vertical-align: inherit;">Google拥有自己的AMP缓存，可以更快地加载它。</font><font style="vertical-align: inherit;">在开发AMP页面时，我们只需要考虑AMP规则。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
