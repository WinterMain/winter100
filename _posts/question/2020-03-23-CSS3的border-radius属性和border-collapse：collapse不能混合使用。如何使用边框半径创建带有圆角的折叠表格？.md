---
layout: question
title:  CSS3的border-radius属性和border-collapse：collapse不能混合使用。如何使用边框半径创建带有圆角的折叠表格？
date:   2020-03-23T04:16:54.000Z
description: 编辑-原标题：是否有其他方式来实现border-collapse collapse的CSS（为了有倒塌，圆角表）？事实证明，仅使表格的边框折叠起来并不...
img: 
author: 逆天JinJin
category: question
answer: 21
tags: html CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑-原标题：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有其他方式来实现</font></font><code>border-collapse:collapse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>CSS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（为了有倒塌，圆角表）？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事实证明，仅使表格的边框折叠起来并不能解决根本问题，所以我更新了标题以更好地反映讨论内容。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用该</font></font><code>CSS3</code> <code>border-radius</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><strong><font style="vertical-align: inherit;">制作带有圆角的表</font></strong><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我正在使用的表格样式如下所示：</font></font></p>

<pre><code>table {<font></font>
    -moz-border-radius:10px;<font></font>
    -webkit-border-radius:10px;<font></font>
    border-radius:10px<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是问题所在。</font><font style="vertical-align: inherit;">我也想设置该</font></font><code>border-collapse:collapse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，并且</font><font style="vertical-align: inherit;">设置该</font><font style="vertical-align: inherit;">属性</font></font><code>border-radius</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后将不再起作用。</font><font style="vertical-align: inherit;">有没有一种基于CSS的方式可以获得与</font></font><code>border-collapse:collapse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不实际使用</font><font style="vertical-align: inherit;">相同的效果</font><font style="vertical-align: inherit;">？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我做了一个简单的页面来演示该问题</font></font><a href="http://vamin.net/examples/rounded_tables.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（只火狐/ Safari浏览器）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看来问题的很大一部分是将表设置为具有圆角不会影响Corner </font></font><code>td</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">的角</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果桌子全是一种颜色，那将不是问题，因为我可以</font></font><code>td</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分别使第一行和最后一行的上角</font><font style="vertical-align: inherit;">和下</font><font style="vertical-align: inherit;">角变圆。</font><font style="vertical-align: inherit;">但是，我在表中使用了不同的背景色来区分标题和条纹，因此内部</font></font><code>td</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素也将显示其圆角。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">拟议解决方案摘要：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用另一个带有圆角的元素包围桌子是行不通的，因为桌子的四角“渗漏了”。</font></font></p>

<p>Specifying border width to 0 doesn't collapse the table.</p>

<p>Bottom <code>td</code> corners still square after setting cellspacing to zero.</p>

<p>Using JavaScript instead- works by avoiding the problem.</p>

<p><strong>Possible solutions:</strong></p>

<p>The tables are generated in PHP, so I could just apply a different class to each of the outer th/tds and style each corner separately. I'd rather not do this, since it's not very elegant and a bit of a pain to apply to multiple tables, so please keep suggestions coming.</p>

<p>Possible solution 2 is to use JavaScript (jQuery, specifically) to style the corners. This solution also works, but still not quite what I'm looking for (I know I'm picky). I have two reservations: </p>

<ol>
<li>this is a very lightweight site, and I'd like to keep JavaScript to the barest minimum </li>
<li>part of the appeal that using border-radius has for me is graceful degradation and progressive enhancement. By using border-radius for all rounded corners, I hope to have a consistently rounded site in CSS3-capable browsers and a consistently square site in others (I'm looking at you, IE).</li>
</ol>

<p>I know that trying to do this with CSS3 today may seem needless, but I have my reasons. I would also like to point out that this problem is a result of the w3c specification, not poor CSS3 support, so any solution will still be relevant and useful when CSS3 has more widespread support.</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2799篇《CSS3的border-radius属性和border-collapse：collapse不能混合使用。如何使用边框半径创建带有圆角的折叠表格？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝路易神乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迄今为止最好的解决方案来自您自己的解决方案，它是这样的：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>table, tr, td, th{<font></font>
  border: 1px solid; <font></font>
  text-align: center;<font></font>
}<font></font>
<font></font>
table{<font></font>
	border-spacing: 0;<font></font>
  width: 100%;<font></font>
  display: table;<font></font>
}<font></font>
<font></font>
table tr:last-child td:first-child, tr:last-child, table {<font></font>
    border-bottom-left-radius: 25px;<font></font>
}<font></font>
<font></font>
table tr:last-child td:last-child, tr:last-child, table {<font></font>
    border-bottom-right-radius: 25px;<font></font>
}<font></font>
<font></font>
<font></font>
table tr:first-child th:first-child, tr:first-child, table {<font></font>
    border-top-left-radius: 25px;<font></font>
}<font></font>
<font></font>
table tr:first-child th:last-child, tr:first-child, table {<font></font>
    border-top-right-radius: 25px;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;table&gt;<font></font>
  &lt;tr&gt;<font></font>
    &lt;th&gt;Num&lt;/th&gt;&lt;th&gt;Lett&lt;/th&gt;&lt;th&gt;Lat&lt;/th&gt;<font></font>
  &lt;/tr&gt;<font></font>
  &lt;tr&gt;<font></font>
    &lt;td&gt;1&lt;/td&gt;&lt;td&gt;A&lt;/td&gt;&lt;td&gt;I&lt;/td&gt;<font></font>
  &lt;/tr&gt;<font></font>
  &lt;tr&gt;<font></font>
    &lt;td&gt;2&lt;/td&gt;&lt;td&gt;B&lt;/td&gt;&lt;td&gt;II&lt;/td&gt;<font></font>
  &lt;/tr&gt;<font></font>
  &lt;tr&gt;<font></font>
    &lt;td&gt;3&lt;/td&gt;&lt;td&gt;C&lt;/td&gt;&lt;td&gt;III&lt;/td&gt;<font></font>
  &lt;/tr&gt;<font></font>
&lt;/table&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋梅蛋蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一种方法：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>div {<font></font>
  ...<font></font>
  overflow: hidden;<font></font>
  border-radius: 14px;<font></font>
  transform: rotate(0deg);<font></font>
}<font></font>
table {<font></font>
  border-spacing: 0;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div&gt;<font></font>
  &lt;table&gt;&lt;/table&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>    div {<font></font>
      ...<font></font>
      overflow: hidden;<font></font>
      border-radius: 14px;<font></font>
      position: relative;<font></font>
      z-index: 1;<font></font>
    }<font></font>
<font></font>
<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边界半径现已得到正式支持。</font><font style="vertical-align: inherit;">因此，在以上所有示例中，您都可以删除“ -moz-”前缀。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个技巧是对顶部和底部行使用与边框相同的颜色。</font><font style="vertical-align: inherit;">所有三种颜色都相同，即使不是物理颜色，它也可以融合并看起来像是完美的圆桌。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长小哥</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我总是使用Sass这样做</font></font></p>

<pre><code>table {<font></font>
  border-radius: 0.25rem;<font></font>
  thead tr:first-child th {<font></font>
    &amp;:first-child {<font></font>
      border-top-left-radius: 0.25rem;<font></font>
    }<font></font>
    &amp;:last-child {<font></font>
      border-top-right-radius: 0.25rem;<font></font>
    }<font></font>
  }<font></font>
  tbody tr:last-child td {<font></font>
    &amp;:first-child {<font></font>
      border-bottom-left-radius: 0.25rem;<font></font>
    }<font></font>
    &amp;:last-child {<font></font>
      border-bottom-right-radius: 0.25rem;<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我开始实验“展示”，我发现：</font></font><code>border-radius</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>border</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>margin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>padding</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，在</font></font><code>table</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示有：</font></font></p>

<pre><code>display: inline-table;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如 </font></font></p>

<pre><code>table tbody tr {<font></font>
  display: inline-table;<font></font>
  width: 960px; <font></font>
  -webkit-border-radius: 5px;<font></font>
  -moz-border-radius: 5px;<font></font>
  border-radius: 5px;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我们需要</font></font><code>width</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为每一列</font><font style="vertical-align: inherit;">设置一个</font></font></p>

<pre><code>tr td.first-column {<font></font>
  width: 100px;<font></font>
}<font></font>
tr td.second-column {<font></font>
  width: 860px;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遇到相同的问题后找到了这个答案，但是发现很简单：只需给表溢出即可：隐藏</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不需要包装元素。</font><font style="vertical-align: inherit;">当然，我不知道这在7年前最初提出该问题时是否会奏效，但现在已经奏效。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐蛋蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有圆角和边框的表格。</font><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@Ramon Tayag</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"></font><strong><code>border-spacing: 0</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他指出，</font><font style="vertical-align: inherit;">关键是要使用</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SCSS的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>$line: 1px solid #979797;<font></font>
$radius: 5px;<font></font>
<font></font>
table {<font></font>
  border: $line;<font></font>
  border-radius: $radius;<font></font>
  border-spacing: 0;<font></font>
  th,<font></font>
  tr:not(:last-child) td {<font></font>
    border-bottom: $line;<font></font>
  }<font></font>
  th:not(:last-child),<font></font>
  td:not(:last-child) {<font></font>
    border-right: $line;<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是HTML和CSS的新手，我也在这里寻找解决方案，这是我发现的。</font></font></p>

<pre><code>table,th,td {<font></font>
   border: 1px solid black;<font></font>
   border-spacing: 0<font></font>
}<font></font>
/* add border-radius to table only*/<font></font>
table {<font></font>
   border-radius: 25px    <font></font>
}<font></font>
/* then add border-radius to top left border of left heading cell */<font></font>
th:first-child {<font></font>
   border-radius: 25px 0 0 0<font></font>
}<font></font>
/* then add border-radius to top right border of right heading cell */<font></font>
th:last-child {<font></font>
   border-radius: 0 25px 0 0<font></font>
}<font></font>
/* then add border-radius to bottom left border of left cell of last row */<font></font>
tr:last-child td:first-child {<font></font>
   border-radius: 0 0 0 25px<font></font>
}<font></font>
/* then add border-radius to bottom right border of right cell of last row */<font></font>
tr:last-child td:last-child {<font></font>
   border-radius: 0 0 25px 0<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试一下，猜猜它起作用了:)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙前端</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚为此编写了一套疯狂的CSS，看起来很完美：</font></font></p>

<pre><code>table {<font></font>
  border-collapse: separate;<font></font>
  border-spacing: 0;<font></font>
  width: 100%;<font></font>
}<font></font>
table td,<font></font>
table th {<font></font>
  border-right: 1px solid #CCC;<font></font>
  border-top: 1px solid #CCC;<font></font>
  padding: 3px 5px;<font></font>
  vertical-align: top;<font></font>
}<font></font>
table td:first-child,<font></font>
table th:first-child {<font></font>
  border-left: 1px solid #CCC;<font></font>
}<font></font>
table tr:last-child td,<font></font>
table tr:last-child th {<font></font>
  border-bottom: 1px solid #CCC;<font></font>
}<font></font>
table thead + tbody tr:first-child td {<font></font>
  border-top: 0;<font></font>
}<font></font>
table thead td,<font></font>
table th {<font></font>
  background: #EDEDED;<font></font>
}<font></font>
<font></font>
/* complicated rounded table corners! */<font></font>
table thead:first-child tr:last-child td:first-child {<font></font>
  border-bottom-left-radius: 0;<font></font>
}<font></font>
table thead:first-child tr:last-child td:last-child {<font></font>
  border-bottom-right-radius: 0;<font></font>
}<font></font>
table thead + tbody tr:first-child td:first-child {<font></font>
  border-top-left-radius: 0;<font></font>
}<font></font>
table thead + tbody tr:first-child td:last-child {<font></font>
  border-top-right-radius: 0;<font></font>
}<font></font>
table tr:first-child td:first-child,<font></font>
table thead tr:first-child td:first-child {<font></font>
  border-top-left-radius: 5px;<font></font>
}<font></font>
table tr:first-child td:last-child,<font></font>
table thead tr:first-child td:last-child {<font></font>
  border-top-right-radius: 5px;<font></font>
}<font></font>
table tr:last-child td:first-child,<font></font>
table thead:last-child tr:last-child td:first-child {<font></font>
  border-bottom-left-radius: 5px;<font></font>
}<font></font>
table tr:last-child td:last-child,<font></font>
table thead:last-child tr:last-child td:last-child {<font></font>
  border-bottom-right-radius: 5px;<font></font>
}<font></font>
<font></font>
/* end complicated rounded table corners !*/<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边框折叠的解决方案：为表格分隔并显示：为tbody和thead使用内联表格。</font></font></p>

<pre><code>table {<font></font>
  width: 100%;<font></font>
  border-collapse: separate;<font></font>
  border-spacing: 0px;<font></font>
  background: transparent;   <font></font>
}<font></font>
table thead {<font></font>
  display: inline-table;<font></font>
  width: 100%;<font></font>
  background: #fc0 url(../images/bg-heading.png) repeat-x 0% 0;<font></font>
  -webkit-border-top-left-radius: 7px;<font></font>
  -moz-border-radius-topleft: 7px;<font></font>
  -webkit-border-top-right-radius: 7px;<font></font>
  -moz-border-radius-topright: 7px;<font></font>
    border-radius: 7px 7px 0px 0px;<font></font>
  padding: 1px;<font></font>
  padding-bottom: 0;<font></font>
}<font></font>
<font></font>
table tbody {<font></font>
  border: 1px solid #ddd;<font></font>
  display: inline-table;<font></font>
  width: 100%;<font></font>
  border-top: none;        <font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于有边框和可滚动的表，请使用此表（替换变量，</font></font><code>$</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">起始文本）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用</font></font><code>thead</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>tfoot</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者</font></font><code>th</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，只需更换</font></font><code>tr:first-child</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>tr-last-child</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>td</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们。</font></font></p>

<pre><code>#table-wrap {<font></font>
  border: $border solid $color-border;<font></font>
  border-radius: $border-radius;<font></font>
}<font></font>
table {<font></font>
  border-collapse: collapse;<font></font>
  border-spacing: 0;<font></font>
}<font></font>
table td { border: $border solid $color-border; }<font></font>
table td:first-child { border-left: none; }<font></font>
table td:last-child { border-right: none; }<font></font>
table tr:first-child td { border-top: none; }<font></font>
table tr:last-child td { border-bottom: none; }<font></font>
table tr:first-child td:first-child { border-top-left-radius: $border-radius; }<font></font>
table tr:first-child td:last-child { border-top-right-radius: $border-radius; }<font></font>
table tr:last-child td:first-child { border-bottom-left-radius: $border-radius; }<font></font>
table tr:last-child td:last-child { border-bottom-right-radius: $border-radius; }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></p>

<pre><code>&lt;div id=table-wrap&gt;<font></font>
  &lt;table&gt;<font></font>
    &lt;tr&gt;<font></font>
       &lt;td&gt;1&lt;/td&gt;<font></font>
       &lt;td&gt;2&lt;/td&gt;<font></font>
    &lt;/tr&gt;<font></font>
    &lt;tr&gt;<font></font>
       &lt;td&gt;3&lt;/td&gt;<font></font>
       &lt;td&gt;4&lt;/td&gt;<font></font>
    &lt;/tr&gt;<font></font>
  &lt;/table&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试了一种使用伪元素的解决方法，</font></font><code>:before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>:after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>thead th:first-child</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>thead th:last-child</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与包裹表一起使用 </font></font><code>&lt;div class="radius borderCCC"&gt;</code></p>

<pre><code>table thead th:first-child:before{ <font></font>
    content:" ";<font></font>
    position:absolute;<font></font>
    top:-1px;<font></font>
    left:-1px;<font></font>
    width:15px;<font></font>
    height:15px;<font></font>
    border-left:1px solid #ccc;<font></font>
    border-top:1px solid #ccc; <font></font>
    -webkit-border-radius:5px 0px 0px;<font></font>
}<font></font>
table thead th:last-child:after{ <font></font>
    content:" "; <font></font>
    position:absolute; <font></font>
    top:-1px;<font></font>
    right:-1px; <font></font>
    width:15px;<font></font>
    height:15px;<font></font>
    border-right:1px solid #ccc;<font></font>
    border-top:1px solid #ccc;<font></font>
    -webkit-border-radius:0px 5px 0px 0px;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">见</font></font><a href="http://jsfiddle.net/adardesign/PhaaP/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsFiddle</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Chrome浏览器中对我有效（13.0.782.215）让我知道在其他浏览器中是否对您有效。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，您可以将</font></font><code>table</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内部</font><font style="vertical-align: inherit;">添加</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为包装器。</font><font style="vertical-align: inherit;">然后将这些</font></font><code>CSS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码</font><font style="vertical-align: inherit;">分配</font><font style="vertical-align: inherit;">给包装器：</font></font></p>

<pre><code>.table-wrapper {<font></font>
  border: 1px solid #f00;<font></font>
  border-radius: 5px;<font></font>
  overflow: hidden;<font></font>
}<font></font>
<font></font>
table {<font></font>
  border-collapse: collapse;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有同样的问题。</font></font><code>border-collapse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全</font><font style="vertical-align: inherit;">删除</font><font style="vertical-align: inherit;">并使用： 
 </font></font><code>cellspacing="0" cellpadding="0"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
在html文档中。</font><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>&lt;table class="top_container" align="center" cellspacing="0" cellpadding="0"&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗飞云</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想要一个纯CSS的解决方案（无需</font></font><code>cellspacing=0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML中</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">），并允许1px边框（您不能使用该</font></font><code>border-spacing: 0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案），则我喜欢执行以下操作：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置一个</font></font><code>border-right</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>border-bottom</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你的表格单元格（</font></font><code>td</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>th</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一行中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的单元格</font><font style="vertical-align: inherit;">一个</font></font><code>border-top</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一列中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的单元格</font><font style="vertical-align: inherit;">一个</font></font><code>border-left</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>first-child</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>last-child</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择器，在四个角中将表格单元的相应角四舍五入。</font></font></li>
</ul>

<p><a href="http://codepen.io/mlms13/pen/CGgLF" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处查看演示。</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">鉴于以下HTML：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅以下示例：
</font></font></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>   <font></font>
<font></font>
 .custom-table{margin:30px;}<font></font>
    table {<font></font>
        border-collapse: separate;<font></font>
        border-spacing: 0;<font></font>
        min-width: 350px;<font></font>
        <font></font>
    }<font></font>
    table tr th,<font></font>
    table tr td {<font></font>
        border-right: 1px solid #bbb;<font></font>
        border-bottom: 1px solid #bbb;<font></font>
        padding: 5px;<font></font>
    }<font></font>
    table tr th:first-child, table tr th:last-child{<font></font>
    border-top:solid 1px      #bbb;}<font></font>
    table tr th:first-child,<font></font>
    table tr td:first-child {<font></font>
        border-left: 1px solid #bbb;<font></font>
        <font></font>
    }<font></font>
    table tr th:first-child,<font></font>
    table tr td:first-child {<font></font>
        border-left: 1px solid #bbb;<font></font>
    }<font></font>
    table tr th {<font></font>
        background: #eee;<font></font>
        text-align: left;<font></font>
    }<font></font>
    <font></font>
    table.Info tr th,<font></font>
    table.Info tr:first-child td<font></font>
    {<font></font>
        border-top: 1px solid #bbb;<font></font>
    }<font></font>
    <font></font>
    /* top-left border-radius */<font></font>
    table tr:first-child th:first-child,<font></font>
    table.Info tr:first-child td:first-child {<font></font>
        border-top-left-radius: 6px;<font></font>
    }<font></font>
    <font></font>
    /* top-right border-radius */<font></font>
    table tr:first-child th:last-child,<font></font>
    table.Info tr:first-child td:last-child {<font></font>
        border-top-right-radius: 6px;<font></font>
    }<font></font>
    <font></font>
    /* bottom-left border-radius */<font></font>
    table tr:last-child td:first-child {<font></font>
        border-bottom-left-radius: 6px;<font></font>
    }<font></font>
    <font></font>
    /* bottom-right border-radius */<font></font>
    table tr:last-child td:last-child {<font></font>
        border-bottom-right-radius: 6px;<font></font>
    }<font></font>
         </code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class="custom-table"&gt;<font></font>
    &lt;table&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;th&gt;item1&lt;/th&gt;<font></font>
            &lt;th&gt;item2&lt;/th&gt;<font></font>
        &lt;/tr&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;td&gt;item1&lt;/td&gt;<font></font>
            &lt;td&gt;item2&lt;/td&gt;<font></font>
        &lt;/tr&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;td&gt;item1&lt;/td&gt;<font></font>
            &lt;td&gt;item2&lt;/td&gt;<font></font>
        &lt;/tr&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;td&gt;item1&lt;/td&gt;<font></font>
            &lt;td&gt;item2&lt;/td&gt;<font></font>
        &lt;/tr&gt;<font></font>
    &lt;/table&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门达蒙Davaid</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下方法可以通过使用</font></font><code>box-shadow</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展为</font></font><code>1px</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是“真实”边界的</font><font style="vertical-align: inherit;">方法（在Chrome中进行测试）工作</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>table {<font></font>
    border-collapse: collapse;<font></font>
    border-radius: 30px;<font></font>
    border-style: hidden; /* hide standard table (collapsed) border */<font></font>
    box-shadow: 0 0 0 1px #666; /* this draws the table border  */ <font></font>
}<font></font>
<font></font>
td {<font></font>
    border: 1px solid #ccc;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能必须在表格周围放置另一个元素，并用圆角边框设置样式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="http://www.w3.org/TR/css3-background/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作草案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定是</font></font><code>border-radius</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不适用于表格元素时的值</font></font><code>border-collapse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>collapse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知，唯一的方法是修改所有单元格，如下所示：</font></font></p>

<pre><code>table td {<font></font>
  border-right-width: 0px;<font></font>
  border-bottom-width: 0px;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在右下角得到边框</font></font></p>

<pre><code>table tr td:last-child {<font></font>
  border-right-width: 1px;<font></font>
}<font></font>
table tr:last-child td {<font></font>
  border-bottom-width: 1px;<font></font>
}<font></font>
</code></pre>

<p><code>:last-child</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ie6中无效，但是如果您使用的是</font></font><code>border-radius</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我，则认为您不在乎。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看示例页面后，您似乎可以使用单元格间距和填充来解决此问题。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您看到的粗灰色边框实际上是表格的背景（如果将边框颜色更改为红色，则可以清楚地看到它）。</font><font style="vertical-align: inherit;">如果将单元格间距设置为零（或等效地：），</font></font><code>td, th { margin:0; }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则灰色的“边框”将消失。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑2：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找不到仅使用一张桌子的方法。</font><font style="vertical-align: inherit;">如果您将标题行更改为嵌套表，则可能能够获得所需的效果，但是它将需要更多的工作，而且不是动态的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如Ian所说的，解决方案是将表嵌套在div内并进行如下设置：</font></font></p>

<pre><code>.table_wrapper {<font></font>
  border-radius: 5px;<font></font>
  overflow: hidden;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用时</font></font><code>overflow:hidden</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，方形角不会在div中流血。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否尝试过使用</font></font><code>table{border-spacing: 0}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>table{border-collapse: collapse}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">???</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想到了。</font><font style="vertical-align: inherit;">您只需要使用一些特殊的选择器即可。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">圆角化表格的问题是td元素也没有变圆。</font><font style="vertical-align: inherit;">您可以通过执行以下操作来解决此问题：</font></font></p>

<pre><code>table tr:last-child td:first-child {<font></font>
    border-bottom-left-radius: 10px;<font></font>
}<font></font>
<font></font>
table tr:last-child td:last-child {<font></font>
    border-bottom-right-radius: 10px;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在一切正常，除了仍然存在</font></font><code>border-collapse: collapse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">破坏所有内容</font><font style="vertical-align: inherit;">的问题</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种解决方法是</font><font style="vertical-align: inherit;">在表上</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font><code>border-spacing: 0</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认值并保留默认值</font></font><code>border-collapse: separate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
