---
layout: question
title:  jQuery document.createElement是否等效？
date:   2020-03-09T14:08:47.000Z
description: 我正在重构一些旧的JavaScript代码，并且正在进行很多DOM操作。var d = document;var odv = d.createEle...
img: 
author: ProTony
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在重构一些旧的JavaScript代码，并且正在进行很多DOM操作。</font></font></p>

<pre><code>var d = document;<font></font>
var odv = d.createElement("div");<font></font>
odv.style.display = "none";<font></font>
this.OuterDiv = odv;<font></font>
<font></font>
var t = d.createElement("table");<font></font>
t.cellSpacing = 0;<font></font>
t.className = "text";<font></font>
odv.appendChild(t);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道是否有使用jQuery的更好方法。</font><font style="vertical-align: inherit;">我一直在尝试：</font></font></p>

<pre><code>var odv = $.create("div");<font></font>
$.append(odv);<font></font>
// And many more<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我不确定这是否更好。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第301篇《jQuery document.createElement是否等效？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我为此做了一个小jQuery插件：</font><a href="https://github.com/ern0/jquery.create" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/ern0/jquery.create" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/ern0/jquery.create</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它遵循您的语法：</font></font></p>

<pre><code>var myDiv = $.create("div");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以将DOM节点ID指定为第二个参数：</font></font></p>

<pre><code>var secondItem = $.create("div","item2");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严重吗 </font><font style="vertical-align: inherit;">不会。但是此语法比</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$（“ &lt;div&gt; &lt;/ div&gt;”）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更好</font><font style="vertical-align: inherit;">，并且对于这笔钱来说，这是非常好的价值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是一个新的jQuery用户，从DOMAssistant切换，它具有类似的功能：</font><a href="http://www.domassistant.com/documentation/DOMAssistantContent-module.php" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://www.domassistant.com/documentation/DOMAssistantContent-module.php" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.domassistant.com/documentation/DOMAssistantContent-module.php</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的插件更简单，我认为通过链接方法添加属性和内容更好：</font></font></p>

<pre><code>$("#container").append( $.create("div").addClass("box").html("Hello, world!") );
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且，这是一个简单的jQuery插件（第100个）的一个很好的例子。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建新的DOM元素是该</font></font><code>jQuery()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">的核心功能</font><font style="vertical-align: inherit;">，请参见：</font></font></p>

<ul>
<li><a href="http://api.jquery.com/jQuery/#creating-new-elements" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://api.jquery.com/jQuery/#creating-new-elements</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">特别是</font></font><a href="http://api.jquery.com/jQuery/#example-1-1" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://api.jquery.com/jQuery/#example-1-1</font></font></a></li>
</ul></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
