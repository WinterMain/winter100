---
layout: question
title:  display：inline-flex和display：flex有什么区别？
date:   2020-03-23T06:08:35.000Z
description: 我正在尝试在ID包装器中垂直对齐元素。我将属性display inline-flex;赋予此ID，因为ID包装器是flex容器。但是在呈现方式上没有什...
img: 
author: Gil猿
category: question
answer: 6
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在ID包装器中垂直对齐元素。</font><font style="vertical-align: inherit;">我将属性</font></font><code>display:inline-flex;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">赋予此ID，因为ID包装器是flex容器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是在呈现方式上没有什么区别。</font><font style="vertical-align: inherit;">我希望包装ID中的所有内容都会显示出来</font></font><code>inline</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">为什么不呢</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>#wrapper {<font></font>
    display: inline-flex;<font></font>
    /*no difference to display:flex; */<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;body&gt;<font></font>
    &lt;div id="wrapper"&gt;<font></font>
        &lt;header&gt;header&lt;/header&gt;<font></font>
        &lt;nav&gt;nav&lt;/nav&gt;<font></font>
        &lt;aside&gt;aside&lt;/aside&gt;<font></font>
        &lt;main&gt;main&lt;/main&gt;<font></font>
        &lt;footer&gt;footer&lt;/footer&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/body&gt;</code></pre>
</div>
</div>
<p></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2802篇《display：inline-flex和display：flex有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里小胖</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><code>flex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>inline-flex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这两个应用柔性布局容器的孩子。</font><font style="vertical-align: inherit;">容器的</font></font><code>display:flex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">行为类似于块级元素本身，</font></font><code>display:inline-flex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而使容器的行为类似于内联元素。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋蛋蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><code>display: inline-flex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会使</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">弹性项目</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内联显示。</font><font style="vertical-align: inherit;">它使</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">伸缩容器</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内联显示。</font><font style="vertical-align: inherit;">这是</font></font><code>display: inline-flex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">之间的唯一区别</font></font><code>display: flex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">一个类似的比较可以之间进行</font></font><code>display: inline-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>display: block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且</font></font><a href="https://stackoverflow.com/questions/24313271/display-property-differences-for-inline-something"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">几乎具有一个内联的对应的任何其它显示类型</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1个</font></font></sup></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">弹性项目的效果绝对没有区别；</font><font style="vertical-align: inherit;">无论flex容器是块级还是内联级，flex布局都是相同的。</font><font style="vertical-align: inherit;">特别是，flex项本身始终像块级框一样运行（尽管它们确实具有</font><font style="vertical-align: inherit;">内联块的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">某些</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性）。</font><font style="vertical-align: inherit;">您不能内联显示弹性项目；</font><font style="vertical-align: inherit;">否则，您实际上没有弹性布局。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前尚不清楚“垂直对齐”到底是什么意思，或者为什么要真正内联显示内容，但我不确定flexbox不是您要完成的任何事情的正确工具。</font><font style="vertical-align: inherit;">机会是你要找的是什么，只是普通的老直列布局（</font></font><code>display: inline</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和/或</font></font><code>display: inline-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），为此，Flexbox将是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更换; </font><font style="vertical-align: inherit;">flexbox </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有人都声称的通用布局解决方案（我之所以这样说是因为误解可能是您首先考虑使用flexbox的原因）。</font></font></p>

<hr>

<p><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1 </font></font></sup> <sub><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块布局和内联布局之间的差异不在此问题的范围内，但最突出的是自动宽度：块级框水平拉伸以填充其包含的块，而内联级框缩小以适合其容纳的块内容。</font><font style="vertical-align: inherit;">实际上，仅出于这个原因，</font></font><code>display: inline-flex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非您有很好的理由内联显示flex容器，否则您</font><font style="vertical-align: inherit;">几乎永远不会使用</font><font style="vertical-align: inherit;">。</font></font></sub></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Display：flex</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅将flex布局应用于容器的flex项或子项。</font><font style="vertical-align: inherit;">因此，容器本身停留在块级元素上，因此占用了屏幕的整个宽度。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将导致每个flex容器在屏幕上移至新行。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Display：inline-flex</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将flex布局应用于flex项或子项以及容器本身。</font><font style="vertical-align: inherit;">结果，容器就像子项一样充当内联flex元素，因此仅占用其项目/子项所需的宽度，而不是占据屏幕的整个宽度。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将导致两个或多个flex容器一个接一个地显示为inline-flex，并在屏幕上并排对齐，直到占据整个屏幕宽度为止。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ flex”和“ inline-flex”之间的区别</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简短答案：</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个是内联的，另一个基本上像块元素一样响应（但有一些不同）。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更长的答案：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Inline-Flex-Flex的内联版本允许元素及其子元素具有flex属性，同时仍保留在文档/网页的常规流程中。</font><font style="vertical-align: inherit;">基本上，如果宽度足够小，则可以将两个行内Flex容器放在同一行中，而没有任何多余的样式以允许它们存在于同一行中。</font><font style="vertical-align: inherit;">这非常类似于“内联块”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Flex-容器及其子级具有flex属性，但是容器保留该行，因为它是从文档的正常流程中取出的。</font><font style="vertical-align: inherit;">就文档流而言，它的响应就像一个块元素。</font><font style="vertical-align: inherit;">没有多余的样式，两个flexbox容器不能在同一行上存在。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能遇到的问题</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于您在示例中列出了元素，尽管我猜测是这样，但我想您想使用flex以偶数行的方式显示列出的元素，但继续并排查看这些元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能会遇到问题的原因是因为flex和inline-flex将默认的“ flex-direction”属性设置为“ row”。</font><font style="vertical-align: inherit;">这将并排显示子级。</font><font style="vertical-align: inherit;">将此属性更改为“ column”将允许您的元素堆叠并保留等于其父代宽度的space（width）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是一些示例以展示flex vs inline-flex的工作原理，以及有关inline vs block元素如何工作的快速演示...</font></font></p>

<pre><code>display: inline-flex; flex-direction: row;
</code></pre>

<p><a href="http://jsfiddle.net/vUSmV/258/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴</font></font></a></p>

<pre><code>display: flex; flex-direction: row;
</code></pre>

<p><a href="http://jsfiddle.net/vUSmV/259/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴</font></font></a></p>

<pre><code>display: inline-flex; flex-direction: column;
</code></pre>

<p><a href="http://jsfiddle.net/vUSmV/260/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴</font></font></a></p>

<pre><code>display: flex; flex-direction: column;
</code></pre>

<p><a href="http://jsfiddle.net/vUSmV/261/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴</font></font></a></p>

<pre><code>display: inline;
</code></pre>

<p><a href="https://jsfiddle.net/qzk7y3ka/2/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴</font></font></a></p>

<pre><code>display: block
</code></pre>

<p><a href="https://jsfiddle.net/6nacd8ch/2/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，一个很棒的参考文档：
 </font></font><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Flexbox完整指南-CSS技巧</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三米亚阳光</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，我知道起初可能有点混乱，但是</font></font><code>display</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谈论的是父元素，因此意味着当我们说：</font></font><code>display: flex;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它是关于元素的，而当我们说时</font></font><code>display:inline-flex;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，也是在使元素本身</font></font><code>inline</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像制作一个</font></font><code>div</code> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">inline</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">block</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，运行下面的代码片段，您可以看到如何</font></font><code>display flex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分解为下一行：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.inline-flex {<font></font>
  display: inline-flex;<font></font>
}<font></font>
<font></font>
.flex {<font></font>
  display: flex;<font></font>
}<font></font>
<font></font>
p {<font></font>
  color: red;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;body&gt;<font></font>
  &lt;p&gt;Display Inline Flex&lt;/p&gt;<font></font>
  &lt;div class="inline-flex"&gt;<font></font>
    &lt;header&gt;header&lt;/header&gt;<font></font>
    &lt;nav&gt;nav&lt;/nav&gt;<font></font>
    &lt;aside&gt;aside&lt;/aside&gt;<font></font>
    &lt;main&gt;main&lt;/main&gt;<font></font>
    &lt;footer&gt;footer&lt;/footer&gt;<font></font>
  &lt;/div&gt;<font></font>
<font></font>
  &lt;div class="inline-flex"&gt;<font></font>
    &lt;header&gt;header&lt;/header&gt;<font></font>
    &lt;nav&gt;nav&lt;/nav&gt;<font></font>
    &lt;aside&gt;aside&lt;/aside&gt;<font></font>
    &lt;main&gt;main&lt;/main&gt;<font></font>
    &lt;footer&gt;footer&lt;/footer&gt;<font></font>
  &lt;/div&gt;<font></font>
<font></font>
  &lt;p&gt;Display Flex&lt;/p&gt;<font></font>
  &lt;div class="flex"&gt;<font></font>
    &lt;header&gt;header&lt;/header&gt;<font></font>
    &lt;nav&gt;nav&lt;/nav&gt;<font></font>
    &lt;aside&gt;aside&lt;/aside&gt;<font></font>
    &lt;main&gt;main&lt;/main&gt;<font></font>
    &lt;footer&gt;footer&lt;/footer&gt;<font></font>
  &lt;/div&gt;<font></font>
<font></font>
  &lt;div class="flex"&gt;<font></font>
    &lt;header&gt;header&lt;/header&gt;<font></font>
    &lt;nav&gt;nav&lt;/nav&gt;<font></font>
    &lt;aside&gt;aside&lt;/aside&gt;<font></font>
    &lt;main&gt;main&lt;/main&gt;<font></font>
    &lt;footer&gt;footer&lt;/footer&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/body&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还可以快速创建以下图像，以一眼看出差异：</font></font></p>

<p><a href="https://i.stack.imgur.com/mns2H.jpg" rel="noreferrer"><img src="https://i.stack.imgur.com/mns2H.jpg" alt="display flex vs display inline-flex"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要更多信息，以便浏览器知道您想要什么。</font><font style="vertical-align: inherit;">例如，需要告知容器的子代“如何”弯曲。</font></font></p>

<p><a href="http://jsfiddle.net/fishgraphics/vUSmV/93/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新的小提琴</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经添加</font></font><code>#wrapper &gt; * { flex: 1; margin: auto; }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到CSS并更改</font></font><code>inline-flex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>flex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以看到元素现在如何在页面上均匀地分布。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
