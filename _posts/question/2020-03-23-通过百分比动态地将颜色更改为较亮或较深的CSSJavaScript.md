---
layout: question
title:  通过百分比动态地将颜色更改为较亮或较深的CSS（JavaScript）
date:   2020-03-23T08:06:37.000Z
description: 我们在网站上有一个庞大的应用程序，并且我们有一些链接，比如说蓝色，就像该网站上的蓝色链接。现在，我想建立其他一些链接，但颜色要浅一些。显然，我可以简单地通...
img: 
author: Tom凯
category: question
answer: 16
tags: 的CSS CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们在网站上有一个庞大的应用程序，并且我们有一些链接，比如说蓝色，就像该网站上的蓝色链接。</font><font style="vertical-align: inherit;">现在，我想建立其他一些链接，但颜色要浅一些。</font><font style="vertical-align: inherit;">显然，我可以简单地通过在CSS文件中添加十六进制代码来完成操作，但是我们的网站允许用户确定其自定义配置文件/网站（例如Twitter）所需的颜色。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以，我的问题是：我们可以按百分比减少颜色吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设以下代码是CSS：</font></font></p>

<pre><code>a {<font></font>
  color: blue;<font></font>
}<font></font>
<font></font>
a.lighter {<font></font>
  color: -50%; // obviously not correct way, but just an idea<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>a.lighter {<font></font>
  color: blue -50%;  // again not correct, but another example of setting color and then reducing it<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以减少一定百分比的颜色？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2974篇《通过百分比动态地将颜色更改为较亮或较深的CSS（JavaScript）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用JavaScript库（例如JXtension），该库使用户能够使颜色变浅或变深。</font><font style="vertical-align: inherit;">如果您想查找此全新库的文档，</font></font><a href="http://gotochriswest.com/forum/viewtopic.php?f=4&amp;t=249#p423" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请单击此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您还可以使用JXtension将一种颜色与另一种颜色组合。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AAEva</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅我对Ctford的回复的评论。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为减轻颜色的简单方法是采用每个RGB分量，将其加到0xff并除以2。如果不能得到所需的确切结果，则取0xff减去当前值乘以某个常数。然后再添加回当前值。</font><font style="vertical-align: inherit;">例如，如果要向白色方向移动1/3，则取（0xff-电流）/ 3 +电流。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须使用它来查看获得了什么结果。</font><font style="vertical-align: inherit;">我担心使用这个简单的公式，足够大的系数可以使深色很好地褪色，可能会使浅色完全变成白色，而如果足够小的系数可以使浅色仅稍微变浅，则可能会使深色不足。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不过，我认为，比起固定的步数，到白色的距离要小得多。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilTom</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">综上所述，一个纯粹用DIV和CSS完成的表格解决方案，尝试一下；）浏览器应该支持RGBA颜色。</font></font></p>

<pre><code>&lt;head&gt;<font></font>
&lt;style&gt;<font></font>
    .colored-div-table {<font></font>
        display: table;<font></font>
        table-layout: fixed;<font></font>
    }<font></font>
    .colored-div-table #col {<font></font>
        display: table-column;<font></font>
    }<font></font>
    .colored-div-table #col:nth-child(odd) {<font></font>
    }<font></font>
    .colored-div-table #col:nth-child(even) {<font></font>
    }<font></font>
    .colored-div-table #col:nth-child(1){<font></font>
        background-color: lightblue;<font></font>
        width: 50px !important;<font></font>
    }<font></font>
    .colored-div-table #col:nth-child(2){<font></font>
        background-color: lightyellow;<font></font>
        width: 200px !important;<font></font>
    }<font></font>
    .colored-div-table #col:nth-child(3){<font></font>
        background-color: lightcyan;<font></font>
        width: 50px !important;<font></font>
    }<font></font>
    .colored-div-table #row {<font></font>
        display: table-row;<font></font>
    }<font></font>
    .colored-div-table #row div {<font></font>
        display: table-cell;<font></font>
    }<font></font>
    .colored-div-table #row div:nth-child(1) {<font></font>
<font></font>
    }<font></font>
    .colored-div-table #row div:nth-child(2) {<font></font>
    }<font></font>
    .colored-div-table #row div:nth-child(3) {<font></font>
    }<font></font>
    .colored-div-table #row:nth-child(odd) {<font></font>
        background-color: rgba(0,0,0,0.1)<font></font>
    }<font></font>
    .colored-div-table #row:nth-child(even) {<font></font>
    }<font></font>
&lt;/style&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
<font></font>
&lt;div id="divtable" class="colored-div-table"&gt;<font></font>
    &lt;div id="col"&gt;&lt;/div&gt;<font></font>
    &lt;div id="col"&gt;&lt;/div&gt;<font></font>
    &lt;div id="col"&gt;&lt;/div&gt;  <font></font>
<font></font>
    &lt;div id="row"&gt;<font></font>
        &lt;div&gt;First Line&lt;/div&gt;&lt;div&gt;FL C2&lt;/div&gt;&lt;div&gt;FL C3&gt;&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
<font></font>
    &lt;div id="row"&gt;<font></font>
        &lt;div&gt;Second Line&lt;/div&gt;&lt;div&gt;SL C2&lt;/div&gt;&lt;div&gt;SL C3&gt;&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
<font></font>
    &lt;div id="row"&gt;<font></font>
        &lt;div&gt;Third Line&lt;/div&gt;&lt;div&gt;TL C2&lt;/div&gt;&lt;div&gt;TL C3&gt;&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
<font></font>
    &lt;div id="row"&gt;<font></font>
        &lt;div&gt;Forth Line&lt;/div&gt;&lt;div&gt;FL C2&lt;/div&gt;&lt;div&gt;FL C3&gt;&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div id="row"&gt;<font></font>
        &lt;div&gt;Fifth Line&lt;/div&gt;&lt;div&gt;FL C2&lt;/div&gt;&lt;div&gt;FL C3&gt;&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div id="row"&gt;<font></font>
        &lt;div&gt;Sixth Line&lt;/div&gt;&lt;div&gt;SL C2&lt;/div&gt;&lt;div&gt;SL C3&gt;&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div id="row"&gt;<font></font>
        &lt;div&gt;Seventh Line&lt;/div&gt;&lt;div&gt;SL C2&lt;/div&gt;&lt;div&gt;SL C3&gt;&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div id="row"&gt;<font></font>
        &lt;div&gt;Eight Line&lt;/div&gt;&lt;div&gt;EL C2&lt;/div&gt;&lt;div&gt;EL C3&gt;&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div id="row"&gt;<font></font>
        &lt;div&gt;Nineth Line&lt;/div&gt;&lt;div&gt;NL C2&lt;/div&gt;&lt;div&gt;NL C3&gt;&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div id="row"&gt;<font></font>
        &lt;div&gt;Tenth Line&lt;/div&gt;&lt;div&gt;TL C2&lt;/div&gt;&lt;div&gt;TL C3&gt;&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
<font></font>
&lt;/div&gt;<font></font>
&lt;/body&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道已经晚了，但是，您可以对按钮使用包装器并更改rgba颜色功能的不透明度级别，如其他答案所述，但没有明确的示例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一支笔：</font></font></p>

<p><a href="https://codepen.io/aronkof/pen/WzGmjR" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://codepen.io/aronkof/pen/WzGmjR</font></font></a></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>#wrapper {<font></font>
  width: 50vw;<font></font>
  height: 50vh;<font></font>
  background-color: #AAA;<font></font>
  margin: 20px auto;<font></font>
  border-radius: 5px;<font></font>
  display: grid;<font></font>
  place-items: center;<font></font>
} <font></font>
<font></font>
.btn-wrap {<font></font>
  background-color: #000;<font></font>
  display: inline-block;<font></font>
}<font></font>
<font></font>
button {<font></font>
  transition: all 0.6s linear;<font></font>
  background-color: rgba(0, 255, 0, 1);<font></font>
  border: none;<font></font>
  outline: none;<font></font>
  color: #fff;<font></font>
  padding: 50px;<font></font>
  font-weight: 700;<font></font>
  font-size: 2em;<font></font>
}<font></font>
<font></font>
button:hover {<font></font>
  background-color: rgba(0, 255, 0, .5);<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div id="wrapper"&gt;<font></font>
  &lt;div class="btn-wrap"&gt;<font></font>
    &lt;button class="btn"&gt;HEY!&lt;/buutton&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥十三</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试：</font></font></p>

<pre><code>a {<font></font>
  color: hsl(240, 100%, 50%);<font></font>
}<font></font>
<font></font>
a:hover {<font></font>
  color: hsl(240, 100%, 70%);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果需要蛮力以使其与旧版浏览器兼容，则可以使用</font></font><a href="http://colllor.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Colllor</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自动选择相似的颜色变化。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例（颜色：＃a9dbb4）：</font></font></p>

<p><a href="https://i.stack.imgur.com/UxWQ8.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/UxWQ8.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋A</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不直接，不。</font><font style="vertical-align: inherit;">但是您可以使用一个网站，例如</font></font><a href="http://colorschemedesigner.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">colorschemedesigner.com</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将为您提供基础色，然后为您提供不同范围的基础色的十六进制和rgb代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到适合自己网站的配色方案后，我将颜色的十六进制代码放入样式表顶部的注释部分内，并命名为它们。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他一些配色方案生成器包括：</font></font></p>

<ul>
<li><a href="http://www.colorschemer.com/online.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.colorschemer.com/online.html</font></font></a></li>
<li><a href="http://colorschemegenerator.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://colorschemegenerator.com/</font></font></a></li>
<li><a href="http://www.cssjuice.com/25-popular-color-scheme-and-palette-generators/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.cssjuice.com/25-popular-color-scheme-and-palette-generators/</font></font></a></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你决定使用</font></font><a href="http://compass-style.org/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://compass-style.org/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，基于SASS-CSS框架，它提供了非常有用的</font></font><code>darken()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>lighten()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">青菜功能动态生成CSS。</font><font style="vertical-align: inherit;">这很干净：</font></font></p>

<pre><code>@import compass/utilities<font></font>
<font></font>
$link_color: #bb8f8f<font></font>
a<font></font>
  color: $link_color<font></font>
a:visited<font></font>
  color: $link_color<font></font>
a:hover<font></font>
  color: darken($link_color,10)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生</font></font></p>

<pre><code>a {<font></font>
  color: #bb8f8f;<font></font>
}<font></font>
<font></font>
a:visited {<font></font>
  color: #bb8f8f;<font></font>
}<font></font>
<font></font>
a:hover {<font></font>
  color: #a86f6f;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个古老的问题，但是大多数答案都需要使用预处理器或JavaScript进行操作，否则它们不仅会影响元素的颜色，而且还会影响其中包含的元素的颜色。</font><font style="vertical-align: inherit;">我将添加一种复杂的纯CSS方法来执行相同的操作。</font><font style="vertical-align: inherit;">也许将来，随着更高级的CSS功能的出现，它将变得更加容易。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个想法是基于使用：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RGB颜色，因此红色，绿色和蓝色具有单独的值；</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS变量，用于存储颜色值和暗度；</font><font style="vertical-align: inherit;">和</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>calc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能，以应用更改。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，暗度将为1（对于100％，是常规颜色），如果乘以0到1之间的数字，则会使颜色变暗。</font><font style="vertical-align: inherit;">例如，如果您将每个值乘以0.85，则将使颜色变深15％（100％-15％= 85％= 0.85）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个示例，我创建了三个类：</font></font><code>.dark</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>.darker</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>.darkest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这将分别使原始颜色变深25％，50％和75％：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>html {<font></font>
  --clarity: 1;<font></font>
}<font></font>
<font></font>
div {<font></font>
  display: inline-block;<font></font>
  height: 100px;<font></font>
  width: 100px;<font></font>
  line-height: 100px;<font></font>
  color: white;<font></font>
  text-align: center;<font></font>
  font-family: arial, sans-serif;<font></font>
  font-size: 20px;<font></font>
  background: rgba(<font></font>
                  calc(var(--r) * var(--clarity)), <font></font>
                  calc(var(--g) * var(--clarity)), <font></font>
                  calc(var(--b) * var(--clarity))<font></font>
                );<font></font>
}<font></font>
<font></font>
.dark    { --clarity: 0.75; }<font></font>
.darker  { --clarity: 0.50; }<font></font>
.darkest { --clarity: 0.25; }<font></font>
<font></font>
.red {<font></font>
  --r: 255;<font></font>
  --g: 0;<font></font>
  --b: 0;<font></font>
}<font></font>
<font></font>
.purple {<font></font>
  --r: 205;<font></font>
  --g: 30;<font></font>
  --b: 205;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class="red"&gt;0%&lt;/div&gt;<font></font>
&lt;div class="red dark"&gt;25%&lt;/div&gt;<font></font>
&lt;div class="red darker"&gt;50%&lt;/div&gt;<font></font>
&lt;div class="red darkest"&gt;75%&lt;/div&gt;<font></font>
<font></font>
&lt;br/&gt;&lt;br/&gt;<font></font>
<font></font>
&lt;div class="purple"&gt;0%&lt;/div&gt;<font></font>
&lt;div class="purple dark"&gt;25%&lt;/div&gt;<font></font>
&lt;div class="purple darker"&gt;50%&lt;/div&gt;<font></font>
&lt;div class="purple darkest"&gt;75%&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想要深色，可以使用</font></font><code>rgba</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不透明度较低的黑色：</font></font></p>

<pre><code>rgba(0,0,0,0.3)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打火机使用白色：</font></font></p>

<pre><code>rgba(255,255,255,0.3).
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font><font style="vertical-align: inherit;">在所有现代浏览</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font><font style="vertical-align: inherit;">使用</font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter" rel="noreferrer"><font style="vertical-align: inherit;">CSS过滤器</font></a><font style="vertical-align: inherit;">执行此操作</font><font style="vertical-align: inherit;">（请参见</font></font><a href="http://caniuse.com/#feat=css-filters" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">caniuse兼容性表</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.button {<font></font>
  color: #ff0000;<font></font>
}<font></font>
<font></font>
/* note: 100% is baseline so 85% is slightly darker, <font></font>
   20% would be significantly darker */<font></font>
.button:hover {<font></font>
  filter: brightness(85%);<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;button class="button"&gt;Foo lorem ipsum&lt;/button&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从CSS Tricks可获得更多有关您可以使用的各种过滤器的信息：</font><a href="https://css-tricks.com/almanac/properties/f/filter/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://css-tricks.com/almanac/properties/f/filter/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//css-tricks.com/almanac/properties/f/filter/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HSL颜色提供了答案，HSL颜色值指定为：hsl（hue [0,255]，饱和度％，亮度％）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE9 +，Firefox，Chrome，Safari和Opera 10+支持HSL。</font></font></p>

<pre><code>a<font></font>
{<font></font>
color:hsl(240,65%,50%);<font></font>
}<font></font>
a.lighter <font></font>
{<font></font>
color:hsl(240,65%,75%);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用的堆栈可以使用</font></font><a href="http://sass-lang.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SASS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以使用以下</font></font><a href="http://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method" rel="noreferrer"><code>lighten</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数：</font></font></p>

<pre><code>$linkcolour: #0000FF;<font></font>
<font></font>
a {<font></font>
  color: $linkcolour;<font></font>
}<font></font>
<font></font>
a.lighter {<font></font>
  color: lighten($linkcolour, 50%);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在撰写本文时，这是我发现的用于色彩处理的最佳纯CSS实现：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用CSS变量以HSL（而不是HEX / RGB格式）定义颜色，然后用于</font></font><code>calc()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">操作它们。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个基本示例：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>:root {<font></font>
  --link-color-h: 211;<font></font>
  --link-color-s: 100%;<font></font>
  --link-color-l: 50%;<font></font>
  --link-color-hsl: var(--link-color-h), var(--link-color-s), var(--link-color-l);<font></font>
<font></font>
  --link-color: hsl(var(--link-color-hsl));<font></font>
  --link-color-10: hsla(var(--link-color-hsl), .1);<font></font>
  --link-color-20: hsla(var(--link-color-hsl), .2);<font></font>
  --link-color-30: hsla(var(--link-color-hsl), .3);<font></font>
  --link-color-40: hsla(var(--link-color-hsl), .4);<font></font>
  --link-color-50: hsla(var(--link-color-hsl), .5);<font></font>
  --link-color-60: hsla(var(--link-color-hsl), .6);<font></font>
  --link-color-70: hsla(var(--link-color-hsl), .7);<font></font>
  --link-color-80: hsla(var(--link-color-hsl), .8);<font></font>
  --link-color-90: hsla(var(--link-color-hsl), .9);<font></font>
<font></font>
  --link-color-warm: hsl(calc(var(--link-color-h) + 80), var(--link-color-s), var(--link-color-l));<font></font>
  --link-color-cold: hsl(calc(var(--link-color-h) - 80), var(--link-color-s), var(--link-color-l));<font></font>
<font></font>
  --link-color-low: hsl(var(--link-color-h), calc(var(--link-color-s) / 2), var(--link-color-l));<font></font>
  --link-color-lowest: hsl(var(--link-color-h), calc(var(--link-color-s) / 4), var(--link-color-l));<font></font>
<font></font>
  --link-color-light: hsl(var(--link-color-h), var(--link-color-s), calc(var(--link-color-l) / .9));<font></font>
  --link-color-dark: hsl(var(--link-color-h), var(--link-color-s), calc(var(--link-color-l) * .9));<font></font>
}<font></font>
<font></font>
.flex {<font></font>
  display: flex;<font></font>
}<font></font>
<font></font>
.flex &gt; div {<font></font>
  flex: 1;<font></font>
  height: calc(100vw / 10);<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;h3&gt;Color Manipulation (alpha)&lt;/h3&gt;<font></font>
<font></font>
&lt;div class="flex"&gt;<font></font>
  &lt;div style="background-color: var(--link-color-10)"&gt;&lt;/div&gt;<font></font>
  &lt;div style="background-color: var(--link-color-20)"&gt;&lt;/div&gt;<font></font>
  &lt;div style="background-color: var(--link-color-30)"&gt;&lt;/div&gt;<font></font>
  &lt;div style="background-color: var(--link-color-40)"&gt;&lt;/div&gt;<font></font>
  &lt;div style="background-color: var(--link-color-50)"&gt;&lt;/div&gt;<font></font>
  &lt;div style="background-color: var(--link-color-60)"&gt;&lt;/div&gt;<font></font>
  &lt;div style="background-color: var(--link-color-70)"&gt;&lt;/div&gt;<font></font>
  &lt;div style="background-color: var(--link-color-80)"&gt;&lt;/div&gt;<font></font>
  &lt;div style="background-color: var(--link-color-90)"&gt;&lt;/div&gt;<font></font>
  &lt;div style="background-color: var(--link-color)"&gt;&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;h3&gt;Color Manipulation (Hue)&lt;/h3&gt;<font></font>
<font></font>
&lt;div class="flex"&gt;<font></font>
  &lt;div style="background-color: var(--link-color-warm)"&gt;&lt;/div&gt;<font></font>
  &lt;div style="background-color: var(--link-color)"&gt;&lt;/div&gt;<font></font>
  &lt;div style="background-color: var(--link-color-cold)"&gt;&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;h3&gt;Color Manipulation (Saturation)&lt;/h3&gt;<font></font>
<font></font>
&lt;div class="flex"&gt;<font></font>
  &lt;div style="background-color: var(--link-color)"&gt;&lt;/div&gt;<font></font>
  &lt;div style="background-color: var(--link-color-low)"&gt;&lt;/div&gt;<font></font>
  &lt;div style="background-color: var(--link-color-lowest)"&gt;&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;h3&gt;Color Manipulation (Lightness)&lt;/h3&gt;<font></font>
<font></font>
&lt;div class="flex"&gt;<font></font>
  &lt;div style="background-color: var(--link-color-light)"&gt;&lt;/div&gt;<font></font>
  &lt;div style="background-color: var(--link-color)"&gt;&lt;/div&gt;<font></font>
  &lt;div style="background-color: var(--link-color-dark)"&gt;&lt;/div&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还创建了一个CSS框架（仍处于早期阶段），以提供称为</font></font><a href="https://github.com/sparanoid/root-variables" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">root-variables的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本CSS变量支持</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在LESS中，您将使用以下变量：</font></font></p>

<pre><code>@primary-color: #999;<font></font>
@primary-color-lighter: lighten(@primary-color, 20%);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将采用第一个变量并将其减少20％（或任何其他百分比）。</font><font style="vertical-align: inherit;">在此示例中，您最终将得到较浅的颜色：</font></font><code>#ccc</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存在“不透明”，它将使背景发光：</font></font></p>

<pre><code>opacity: 0.5;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但我不确定这是您的意思。</font><font style="vertical-align: inherit;">定义“减少颜色”：使透明？</font><font style="vertical-align: inherit;">还是加白？</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
