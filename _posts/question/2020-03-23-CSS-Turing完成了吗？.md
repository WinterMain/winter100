---
layout: question
title:  CSS Turing完成了吗？
date:   2020-03-23T08:15:09.000Z
description: 就我所知，CSS并不是图灵完整的。但是我对CSS的了解非常有限。  CSS Turing完成了吗？现有的任何草案或委员会是否正在考虑可能使Turi...
img: 
author: 小宇宙
category: question
answer: 7
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我所知，CSS并不是图灵完整的。</font><font style="vertical-align: inherit;">但是我对CSS的了解非常有限。  </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS Turing完成了吗？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现有的任何草案或委员会是否正在考虑可能使Turing完整性成为可能的语言功能？</font></font></li>
</ul></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS不是一种编程语言，因此图灵完备性问题是毫无意义的。</font><font style="vertical-align: inherit;">如果像IE6中那样将编程扩展添加到CSS，那么新的综合就是完全不同的事情。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS只是样式的描述；</font><font style="vertical-align: inherit;">它没有任何逻辑，并且其结构是扁平的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三SamJim</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">图灵完整性的一个方面是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它的</font></font><a href="https://en.wikipedia.org/wiki/Halting_problem" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">暂停问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法确定</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着没有</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通用的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">算法来确定CSS程序将永远完成运行还是循环。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我们可以为CSS推导这样的算法！</font><font style="vertical-align: inherit;">这里是：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果样式表未声明任何</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_animations" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">动画</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则它将停止。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果确实有动画，则：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果任何一个</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count" rel="noreferrer"><code>animation-iteration-count</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>infinite</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且HTML中包含的选择器已匹配，则它将</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">停止。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则，它将停止。</font></font></p></li>
</ul></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而已。</font><font style="vertical-align: inherit;">由于我们只是表明停止问题对于CSS是可以决定的，因此可以得出结论，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并不是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">图灵完成的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（其他人提到了IE 6，它允许在CSS中嵌入任意JavaScript表达式；这显然会增加Turing的完整性。但是该功能是非标准的，无论如何他们都不会使用它。）</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Daniel Wagner提出了我在原始答案中没有提到的观点。</font><font style="vertical-align: inherit;">他指出，虽然我已经介绍了</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">动画</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是样式引擎的其他部分（例如</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择器匹配</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">布局）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以导致图灵完整性。</font><font style="vertical-align: inherit;">尽管很难就这些问题进行正式辩论，但我将尝试概述为什么仍不太可能实现图灵完整性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一：图灵完整的语言有某种方式可以</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将数据反馈回自身</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，无论是通过递归还是循环。</font><font style="vertical-align: inherit;">但是CSS语言的设计对此反馈意见表示反对：</font></font></p>

<ul>
<li><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries" rel="noreferrer"><code>@media</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查询</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只能检查浏览器本身的属性，例如视口大小或像素分辨率。</font><font style="vertical-align: inherit;">这些属性可以通过用户交互或JavaScript代码（例如，调整浏览器窗口的大小）来更改，但不能仅通过CSS来更改。</font></font></p></li>
<li><p><code>::before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>::after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">伪元素</font></font><a href="https://stackoverflow.com/q/5041494/617159"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不被视为DOM的一部分</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且不能以任何其他方式进行匹配。</font></font></p></li>
<li><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors#Combinators" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择器组合</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">器只能检查</font><font style="vertical-align: inherit;">当前</font><font style="vertical-align: inherit;">元素</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之上</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的元素，因此不能用于创建依赖关系循环。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"></font><a href="https://jsfiddle.net/xxv1z7L9/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您将鼠标悬停在某个元素上时，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以</font><a href="https://jsfiddle.net/xxv1z7L9/" rel="noreferrer"><font style="vertical-align: inherit;">将其移开</font></a><font style="vertical-align: inherit;">，但是位置只有在移动鼠标时才会更新。</font></font></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这足以使您确信</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择器匹配本身不可能是图灵完成的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是布局呢？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现代的CSS布局算法非常复杂，具有诸如</font></font><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Flexbox</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Grid之</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类的功能。</font><font style="vertical-align: inherit;">但是，即使有可能触发布局无限循环，也很难利用它来执行有用的计算。</font><font style="vertical-align: inherit;">这是因为CSS选择器仅检查DOM的内部结构，而不检查这些元素在屏幕上的布局。</font><font style="vertical-align: inherit;">因此，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何使用布局系统的图灵完整性证明都必须仅依赖于布局</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p>Finally – and this is perhaps the most important reason – <strong>browser vendors have an interest in keeping CSS <em>not</em> Turing complete</strong>. By restricting the language, vendors allow for <a href="https://calendar.perfplanet.com/2011/css-selector-performance-has-changed-for-the-better/" rel="noreferrer">clever optimizations</a> that make the web faster for everyone. Moreover, Google dedicates <a href="https://www.chromium.org/Home/chromium-security/bugs/using-clusterfuzz" rel="noreferrer">a whole server farm</a> to searching for bugs in Chrome. If there were a way to write an infinite loop using CSS, then they probably would have found it already 😉</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font><font style="vertical-align: inherit;">在CSS3中</font><font style="vertical-align: inherit;">对</font></font><a href="http://en.wikipedia.org/wiki/Rule_110" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规则110</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行编码</font><font style="vertical-align: inherit;">，因此，只要您认为适当的随附HTML文件</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和用户交互</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是CSS“执行”的一部分，</font><font style="vertical-align: inherit;">它就可以完成图灵完成</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">一个</font></font><a href="http://eli.fox-epste.in/rule110-full.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很好的实现</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是可用的，这里包括另一个实现：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>body {<font></font>
    -webkit-animation: bugfix infinite 1s;<font></font>
    margin: 0.5em 1em;<font></font>
}<font></font>
@-webkit-keyframes bugfix { from { padding: 0; } to { padding: 0; } }<font></font>
<font></font>
/*<font></font>
 * 111 110 101 100 011 010 001 000<font></font>
 *  0   1   1   0   1   1   1   0<font></font>
 */<font></font>
<font></font>
body &gt; input {<font></font>
    -webkit-appearance: none;<font></font>
    display: block;<font></font>
    float: left;<font></font>
    border-right: 1px solid #ddd;<font></font>
    border-bottom: 1px solid #ddd;<font></font>
    padding: 0px 3px;<font></font>
    margin: 0;<font></font>
    font-family: Consolas, "Courier New", monospace;<font></font>
    font-size: 7pt;<font></font>
}<font></font>
body &gt; input::before {<font></font>
    content: "0";<font></font>
}<font></font>
<font></font>
p {<font></font>
    font-family: Verdana, sans-serif;<font></font>
    font-size: 9pt;<font></font>
    margin-bottom: 0.5em;<font></font>
}<font></font>
<font></font>
body &gt; input:nth-of-type(-n+30) { border-top: 1px solid #ddd; }<font></font>
body &gt; input:nth-of-type(30n+1) { border-left: 1px solid #ddd; clear: left; }<font></font>
<font></font>
body &gt; input::before { content: "0"; }<font></font>
<font></font>
body &gt; input:checked::before { content: "1"; }<font></font>
body &gt; input:checked { background: #afa !important; }<font></font>
<font></font>
<font></font>
input:not(:checked) +<font></font>
        *+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+<font></font>
        input::before {<font></font>
    content: "1";<font></font>
}<font></font>
input:not(:checked) +<font></font>
        *+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+<font></font>
        input {<font></font>
    background: #fa0;<font></font>
}<font></font>
<font></font>
<font></font>
input:checked +<font></font>
        *+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+<font></font>
        input::before {<font></font>
    content: "1";<font></font>
}<font></font>
input:checked +<font></font>
        *+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+<font></font>
        input {<font></font>
    background: #fa0;<font></font>
}<font></font>
<font></font>
<font></font>
input:checked +<font></font>
        *+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+<font></font>
        input::before {<font></font>
    content: "1";<font></font>
}<font></font>
input:checked +<font></font>
        *+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+<font></font>
        input {<font></font>
    background: #fa0;<font></font>
}<font></font>
<font></font>
input:checked + input:checked + input:checked +<font></font>
        *+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+<font></font>
        input::before {<font></font>
    content: "0";<font></font>
}<font></font>
input:checked + input:checked + input:checked +<font></font>
        *+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+<font></font>
        input {<font></font>
    background: #fff;<font></font>
}<font></font>
<font></font>
input:not(:checked) + input:not(:checked) + input:not(:checked) +<font></font>
        *+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+<font></font>
        input::before {<font></font>
    content: "0";<font></font>
}<font></font>
input:not(:checked) + input:not(:checked) + input:not(:checked) +<font></font>
        *+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+<font></font>
        input {<font></font>
    background: #fff;<font></font>
}<font></font>
<font></font>
body &gt; input:nth-child(30n) { display: none !important; }<font></font>
body &gt; input:nth-child(30n) + label { display: none !important; }</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;p&gt;&lt;a href="http://en.wikipedia.org/wiki/Rule_110"&gt;Rule 110&lt;/a&gt; in (webkit) CSS, proving Turing-completeness.&lt;/p&gt;<font></font>
<font></font>
&lt;!-- A total of 900 checkboxes required --&gt;<font></font>
&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;&lt;input type="checkbox"/&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪GO</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><a href="http://frankmccabe.wordpress.com/2008/09/30/sub-turing-complete-programming-languages/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据这篇文章，不是</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">文章还指出，使其成为一个好主意。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用其中一项评论：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我不认为CSS即将完成。</font><font style="vertical-align: inherit;">没有能力在CSS中定义函数。</font><font style="vertical-align: inherit;">为了使系统图灵完整，必须有可能编写一个解释器：一个解释表示要执行程序的表达式的函数。</font><font style="vertical-align: inherit;">CSS没有用户可以直接访问的变量。</font><font style="vertical-align: inherit;">因此，您甚至无法为表示要在CSS中解释的程序的结构建模。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里的根本问题是，除非代码是无限长的，否则任何用HTML + CSS编写的机器都不能评估无限多的步骤（即，不可能有“真实的”递归）。</font><font style="vertical-align: inherit;">而这个问题将这款机器达到配置</font></font><code>H</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤或更少的是，如果总是回答的</font></font><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是有限的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">图灵完整性不仅涉及“定义函数”或“具有ifs / loops / etc”。</font><font style="vertical-align: inherit;">例如，Haskell没有“循环”，lambda微积分没有“ if”，等等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，此站点：</font></font><a href="http://experthuman.com/programming-with-nothing" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="http://experthuman.com/programming-with-nothing" rel="noreferrer"><font style="vertical-align: inherit;">//experthuman.com/programming-with-nothing</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">作者使用Ruby并创建了仅包含闭包（没有字符串，数字或类似内容）的“ FizzBu​​zz”程序...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有些例子中人们仅使用类型系统在Scala上计算某些算术函数</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以，是的，在我看来，CSS3 + HTML是图灵完备的（即使您不能在那时不做任何真正的计算而不会发疯） </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><a href="https://stackoverflow.com/a/5239256/1938348"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案不准确，因为它混合了对UTM和UTM本身（通用图灵机）的描述。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们有</font></font><a href="https://stackoverflow.com/a/26445990/1938348"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很好的答案，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是从不同的角度来看，它并没有直接显示当前最佳答案中的缺陷。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，我们可以同意人类可以作为UTM。</font><font style="vertical-align: inherit;">这意味着如果我们这样做</font></font></p>

<pre><code>CSS + Human == UTM
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那</font></font><code>CSS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分就没用了，因为所有工作都可以</font></font><code>Human</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由谁来做UTM部分</font><font style="vertical-align: inherit;">来完成</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">单击行为可以是UTM，因为您不是随机单击而是仅在特定位置单击。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以使用以下文本（</font></font><a href="https://en.wikipedia.org/wiki/Rule_110" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规则110</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">代替CSS </font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>000 -&gt; 0<font></font>
001 -&gt; 1<font></font>
010 -&gt; 1<font></font>
011 -&gt; 1<font></font>
100 -&gt; 0<font></font>
101 -&gt; 1<font></font>
110 -&gt; 1<font></font>
111 -&gt; 0<font></font>
</code></pre>

<p>To guide my actions and result will be same. This mean this text UTM? No this is only input (description) that other UTM (human or computer) can read and run. Clicking is enough to run any UTM.</p>

<hr>

<p>Critical part that CSS lack is ability to change of it own state in arbitrary way, if CSS could generate clicks then it would be UTM. Argument that your clicks are "crank" for CSS is not accurate because real "crank" for CSS is Layout Engine that run it and it should be enough to prove that CSS is UTM.</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
