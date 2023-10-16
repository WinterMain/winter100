---
layout: question
title:  如何将CSS应用于iframe？
date:   2020-03-15T10:43:52.000Z
description: 我有一个简单的页面，其中包含一些iframe部分（以显示RSS链接）。如何将相同的CSS格式从首页应用于iframe中显示的页面？...
img: 
author: 西里神奇
category: question
answer: 7
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个简单的页面，其中包含一些iframe部分（以显示RSS链接）。</font><font style="vertical-align: inherit;">如何将相同的CSS格式从首页应用于iframe中显示的页面？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1627篇《如何将CSS应用于iframe？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry凯</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p>Well, I have followed these steps:</p>

<ol>
<li>Div with a class to hold <code>iframe</code></li>
<li>Add <code>iframe</code> to the <code>div</code>.</li>
<li>In CSS file, </li>
</ol>

<pre class="lang-css prettyprint-override"><code>divClass { width: 500px; height: 500px; }<font></font>
divClass iframe { width: 100%; height: 100%; }<font></font>
</code></pre>

<p>This works in IE 6. Should work in other browsers, do check!</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro猪猪</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p>As an alternative, you can use CSS-in-JS technology, like below lib:</p>

<p><a href="https://github.com/cssobj/cssobj" rel="nofollow noreferrer">https://github.com/cssobj/cssobj</a></p>

<p>It can inject JS object as CSS to iframe, dynamically</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝卡卡西西里</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p>I think the easiest way is to add another div, in the same place as the iframe, then </p>

<p>make its <code>z-index</code> bigger than the iframe container, so you can easly just style your own div. If you need to click on it, just use <code>pointer-events:none</code> on your own div, so the iframe would be working in case you need to click on it ;)</p>

<p>I hope It will help someone ;)  </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A达蒙</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p>You will not be able to style the contents of the iframe this way. My suggestion would be to use serverside scripting (PHP, ASP, or a Perl script) or find an online service that will convert a feed to JavaScript code. The only other way to do it would be if you can do a serverside include.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易小卤蛋</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p>If you control the page in the iframe, as hangy said, the easiest approach is to create a shared CSS file with common styles, then just link to it from your html pages.</p>

<p>Otherwise it is unlikely you will be able to dynamically change the style of a page from an external page in your iframe.  This is because browsers have tightened the security on cross frame dom scripting due to possible misuse for spoofing and other hacks.</p>

<p><a href="http://www.dyn-web.com/tutorials/iframes/" rel="noreferrer">This tutorial</a> may provide you with more information on scripting iframes in general.  <a href="http://msdn.microsoft.com/en-us/library/ms533028(VS.85).aspx" rel="noreferrer">About cross frame scripting</a> explains the security restrictions from the IE perspective.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Sam乐</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大多数浏览器普遍将iframe视为不同的HTML页面。</font><font style="vertical-align: inherit;">如果要将相同的样式表应用于iframe的内容，只需从那里使用的页面引用它即可。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅十三Near</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><pre><code>var $head = $("#eFormIFrame").contents().find("head");<font></font>
<font></font>
$head.append($("&lt;link/&gt;", {<font></font>
    rel: "stylesheet",<font></font>
    href: url,<font></font>
    type: "text/css"<font></font>
}));<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
