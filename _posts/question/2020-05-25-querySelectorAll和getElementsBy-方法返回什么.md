---
layout: question
title:  querySelectorAll和getElementsBy \*方法返回什么？
date:   2020-05-25T04:02:21.000Z
description: DO getElementsByClassName（等类似的功能getElementsByTagName和querySelectorAll）的工作一样ge...
img: 
author: 十三
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DO </font></font><code>getElementsByClassName</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（等类似的功能</font></font><code>getElementsByTagName</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>querySelectorAll</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）的工作一样</font></font><code>getElementById</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，还是他们返回元素的数组？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我问的原因是因为我试图使用更改所有元素的样式</font></font><code>getElementsByClassName</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">见下文。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="com">//doesn't work</span><span class="pln">
document</span><span class="pun">.</span><span class="pln">getElementsByClassName</span><span class="pun">(</span><span class="str">'myElement'</span><span class="pun">).</span><span class="pln">style</span><span class="pun">.</span><span class="pln">size </span><span class="pun">=</span><span class="pln"> </span><span class="str">'100px'</span><span class="pun">;</span><span class="pln">

</span><span class="com">//works</span><span class="pln">
document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">'myIdElement'</span><span class="pun">).</span><span class="pln">style</span><span class="pun">.</span><span class="pln">size </span><span class="pun">=</span><span class="pln"> </span><span class="str">'100px'</span><span class="pun">;</span></code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4161篇《querySelectorAll和getElementsBy \*方法返回什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它返回类似数组的列表。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您以一个数组为例</font></font></strong></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> el </span><span class="pun">=</span><span class="pln"> getElementsByClassName</span><span class="pun">(</span><span class="str">"elem"</span><span class="pun">);</span><span class="pln">
el </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Array</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">slice</span><span class="pun">.</span><span class="pln">call</span><span class="pun">(</span><span class="pln">el</span><span class="pun">);</span><span class="pln"> </span><span class="com">//this line</span><span class="pln">
el</span><span class="pun">[</span><span class="lit">0</span><span class="pun">].</span><span class="pln">appendChild</span><span class="pun">(</span><span class="pln">otherElem</span><span class="pun">);</span><span class="pln">  </span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MonsterKK若合</span>
            <span class="discuss-time">2020.05.25</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">换一种说法</font></font></strong></p>

<ul>
<li><p><code>document.querySelector()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅选择</font><font style="vertical-align: inherit;">指定选择器</font><font style="vertical-align: inherit;">的第</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素。</font><font style="vertical-align: inherit;">因此它不会吐出一个数组，而是一个值。</font><font style="vertical-align: inherit;">类似于</font></font><code>document.getElementById()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅获取ID元素，因为ID必须是唯一的。</font></font></p></li>
<li><p><code>document.querySelectorAll()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用指定的选择器</font><font style="vertical-align: inherit;">选择</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素，然后将它们返回到数组中。</font><font style="vertical-align: inherit;">与</font><font style="vertical-align: inherit;">仅</font></font><code>document.getElementsByClassName()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于类和</font></font><code>document.getElementsByTagName()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">相似</font><font style="vertical-align: inherit;">。</font></font></p></li>
</ul>

<p><br></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么要使用querySelector？</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它仅用于轻松和简洁的目的。</font></font></p>

<p><br></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么要使用getElement / sBy？*</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">性能更快。</font></font></p>

<p><br></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么会有这种性能差异？</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两种选择的目的都是为了创建</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NodeList</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以便进一步使用。 
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">querySelectors</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用选择器生成一个静态NodeList，因此必须首先从头开始创建它。</font></font><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">getElement / sBy *</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">立即适应当前DOM的现有活动NodeList。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，何时使用哪种方法取决于您/您的项目/您的设备。</font></font></p>

<p><br></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资讯</font></font></strong></p>

<p><a href="https://jsfiddle.net/Thielicious/teu8nbd4/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有方法的演示</font></font></a><br>
<a href="https://developer.mozilla.org/en-US/docs/Web/API/NodeList" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NodeList文档</font></font></a><br>
<a href="https://jsperf.com/different-types-of-selecting" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">性能测试</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
