---
layout: question
title:  jQuery SVG，为什么我不能添加类？
date:   2020-03-23T13:24:38.000Z
description: 我正在使用jQuery SVG。我无法向对象添加或删除类。有人知道我的错误吗？SVG：<rect class="jimmy" id="p5" x=...
img: 
author: 猪猪
category: question
answer: 6
tags: JavaScript CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用jQuery SVG。</font><font style="vertical-align: inherit;">我无法向对象添加或删除类。</font><font style="vertical-align: inherit;">有人知道我的错误吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SVG：</font></font></p>

<pre><code>&lt;rect class="jimmy" id="p5" x="200" y="200" width="100" height="100" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会添加该类的jQuery：</font></font></p>

<pre><code>$(".jimmy").click(function() {<font></font>
    $(this).addClass("clicked");<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道SVG和jQuery可以很好地协作，因为我</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定位对象并在单击对象时发出警报：</font></font></p>

<pre><code>$(".jimmy").click(function() {<font></font>
    alert('Handler for .click() called.');<font></font>
});<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryGil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">受以上答案（尤其是Sagar Gala）的启发，我创建了此</font></font><a href="https://github.com/henningit/SVG-class" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">API</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果您不希望或无法升级jquery版本，可以使用它。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用Snap.svg向SVG添加一个类。</font></font></p>

<pre><code>var jimmy = Snap(" .jimmy ")<font></font>
<font></font>
jimmy.addClass("exampleClass");<font></font>
</code></pre>

<p><a href="http://snapsvg.io/docs/#Element.addClass" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://snapsvg.io/docs/#Element.addClass</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我相当优雅但有效的代码，它处理以下问题（没有任何依赖性）：</font></font></p>

<ul>
<li><code>classList</code><font style="vertical-align: inherit;"></font><code>&lt;svg&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE中</font><font style="vertical-align: inherit;">不存在的</font><font style="vertical-align: inherit;">元素</font></font></li>
<li><code>className</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不代表</font><font style="vertical-align: inherit;">IE中元素</font><font style="vertical-align: inherit;">的</font></font><code>class</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font></font><code>&lt;svg&gt;</code><font style="vertical-align: inherit;"></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旧版IE的损坏</font></font><code>getAttribute()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>setAttribute()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实现</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"></font><code>classList</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽可能</font><font style="vertical-align: inherit;">使用它</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">码：</font></font></p>

<pre><code>var classNameContainsClass = function(fullClassName, className) {<font></font>
    return !!fullClassName &amp;&amp;<font></font>
           new RegExp("(?:^|\\s)" + className + "(?:\\s|$)").test(fullClassName);<font></font>
};<font></font>
<font></font>
var hasClass = function(el, className) {<font></font>
    if (el.nodeType !== 1) {<font></font>
        return false;<font></font>
    }<font></font>
    if (typeof el.classList == "object") {<font></font>
        return (el.nodeType == 1) &amp;&amp; el.classList.contains(className);<font></font>
    } else {<font></font>
        var classNameSupported = (typeof el.className == "string");<font></font>
        var elClass = classNameSupported ? el.className : el.getAttribute("class");<font></font>
        return classNameContainsClass(elClass, className);<font></font>
    }<font></font>
};<font></font>
<font></font>
var addClass = function(el, className) {<font></font>
    if (el.nodeType !== 1) {<font></font>
        return;<font></font>
    }<font></font>
    if (typeof el.classList == "object") {<font></font>
        el.classList.add(className);<font></font>
    } else {<font></font>
        var classNameSupported = (typeof el.className == "string");<font></font>
        var elClass = classNameSupported ?<font></font>
            el.className : el.getAttribute("class");<font></font>
        if (elClass) {<font></font>
            if (!classNameContainsClass(elClass, className)) {<font></font>
                elClass += " " + className;<font></font>
            }<font></font>
        } else {<font></font>
            elClass = className;<font></font>
        }<font></font>
        if (classNameSupported) {<font></font>
            el.className = elClass;<font></font>
        } else {<font></font>
            el.setAttribute("class", elClass);<font></font>
        }<font></font>
    }<font></font>
};<font></font>
<font></font>
var removeClass = (function() {<font></font>
    function replacer(matched, whiteSpaceBefore, whiteSpaceAfter) {<font></font>
        return (whiteSpaceBefore &amp;&amp; whiteSpaceAfter) ? " " : "";<font></font>
    }<font></font>
<font></font>
    return function(el, className) {<font></font>
        if (el.nodeType !== 1) {<font></font>
            return;<font></font>
        }<font></font>
        if (typeof el.classList == "object") {<font></font>
            el.classList.remove(className);<font></font>
        } else {<font></font>
            var classNameSupported = (typeof el.className == "string");<font></font>
            var elClass = classNameSupported ?<font></font>
                el.className : el.getAttribute("class");<font></font>
            elClass = elClass.replace(new RegExp("(^|\\s)" + className + "(\\s|$)"), replacer);<font></font>
            if (classNameSupported) {<font></font>
                el.className = elClass;<font></font>
            } else {<font></font>
                el.setAttribute("class", elClass);<font></font>
            }<font></font>
        }<font></font>
    }; //added semicolon here<font></font>
})();<font></font>
</code></pre>

<p>Example usage:</p>

<pre><code>var el = document.getElementById("someId");<font></font>
if (hasClass(el, "someClass")) {<font></font>
    removeClass(el, "someClass");<font></font>
}<font></font>
addClass(el, "someOtherClass");<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery 2.2支持SVG类操作</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://blog.jquery.com/2016/01/08/jquery-2-2-and-1-12-released/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery的2.2和1.12发布</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后包括以下报价：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管jQuery是HTML库，但我们同意对SVG元素的类支持可能会有用。</font><font style="vertical-align: inherit;">现在，用户将能够调用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.addClass（） </font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.removeClass（） </font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.toggleClass（） </font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.hasClass（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> SVG的方法。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改了class属性，而不是className属性</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这也使类方法可在常规XML文档中使用。</font><font style="vertical-align: inherit;">请记住，SVG无法使用许多其他功能，如果您需要除类操作之外的任何功能，我们仍建议使用专用于SVG的库。</font></font></p>
</blockquote>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><a href="https://code.jquery.com/jquery-2.2.0.js" rel="noreferrer"><font style="vertical-align: inherit;">jQuery 2.2.0的</font></a><font style="vertical-align: inherit;">示例</font></font><a href="https://code.jquery.com/jquery-2.2.0.js" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它测试：</font></font></p>

<ul>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.addClass（）</font></font></strong></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.removeClass（）</font></font></strong></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.hasClass（）</font></font></strong> </li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果单击该小方块，则它将更改其颜色，因为</font></font><code>class</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已添加/删除了</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">属性。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>$("#x").click(function() {<font></font>
    if ( $(this).hasClass("clicked") ) {<font></font>
        $(this).removeClass("clicked");<font></font>
    } else {<font></font>
        $(this).addClass("clicked");<font></font>
    }<font></font>
});</code></pre>
<pre class="snippet-code-css lang-css prettyprint-override"><code>.clicked {<font></font>
    fill: red !important;  <font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;html&gt;<font></font>
<font></font>
&lt;head&gt;<font></font>
    &lt;script src="https://code.jquery.com/jquery-2.2.0.js"&gt;&lt;/script&gt;<font></font>
&lt;/head&gt;<font></font>
<font></font>
&lt;body&gt;<font></font>
    &lt;svg width="80" height="80"&gt;<font></font>
        &lt;rect id="x" width="80" height="80" style="fill:rgb(0,0,255)" /&gt;<font></font>
    &lt;/svg&gt;<font></font>
&lt;/body&gt;<font></font>
<font></font>
&lt;/html&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamGil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">加载后，</font></font><code>jquery.svg.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须加载以下文件：</font></font><code>http://keith-wood.name/js/jquery.svgdom.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料来源：</font><a href="http://keith-wood.name/svg.html#dom" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://keith-wood.name/svg.html#dom" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//keith-wood.name/svg.html#dom</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作示例：</font><a href="http://jsfiddle.net/74RbC/99/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/74RbC/99/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/74RbC/99/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY樱</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOM API中</font><font style="vertical-align: inherit;">有</font></font><a href="https://developer.mozilla.org/en-US/docs/DOM/element.classList" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">element.classList</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可同时用于HTML和SVG元素。</font><font style="vertical-align: inherit;">不需要jQuery SVG插件，甚至不需要jQuery。</font></font></p>

<pre><code>$(".jimmy").click(function() {<font></font>
    this.classList.add("clicked");<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
