---
layout: question
title:  在CSS中设置cellpadding和cellspacing吗？
date:   2020-03-13T07:47:11.000Z
description: 在HTML表中，cellpadding和cellspacing可以这样设置：<table cellspacing="1" cellpadding="1...
img: 
author: L猪猪
category: question
answer: 17
tags: HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML表中，</font></font><code>cellpadding</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>cellspacing</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以这样设置：</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;table cellspacing="1" cellpadding="1"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用CSS如何完成相同的工作？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1414篇《在CSS中设置cellpadding和cellspacing吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro神奇</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>I suggest this and all the cells for the particular table are effected. </p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>table.tbl_classname td, th {<font></font>
    padding: 5px 5px 5px 4px   ;<font></font>
 }</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom乐小小</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong>You can check the below code just create a <code>index.html</code> and run it.</strong></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html&gt;<font></font>
   &lt;head&gt;<font></font>
      &lt;style&gt;<font></font>
         table{<font></font>
         border-spacing:10px;<font></font>
         }<font></font>
         td{<font></font>
         padding:10px;<font></font>
         }<font></font>
      &lt;/style&gt;<font></font>
   &lt;/head&gt;<font></font>
   &lt;body&gt;<font></font>
      &lt;table cellspacing="0" cellpadding="0"&gt;<font></font>
         &lt;th&gt;Col 1&lt;/th&gt;<font></font>
         &lt;th&gt;Col 2&lt;/th&gt;<font></font>
         &lt;th&gt;Col 3&lt;/th&gt;<font></font>
         &lt;tr&gt;<font></font>
            &lt;td&gt;1&lt;/td&gt;<font></font>
            &lt;td&gt;2&lt;/td&gt;<font></font>
            &lt;td&gt;3&lt;/td&gt;<font></font>
         &lt;/tr&gt;<font></font>
      &lt;/table&gt;<font></font>
   &lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><strong>OUTPUT :</strong> </p>

<p><a href="https://i.stack.imgur.com/nzzTu.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/nzzTu.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无阿飞古一</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>In an HTML table, the <code>cellpadding</code> and <code>cellspacing</code> can be set like this:</p>

<p>For <strong>cell-padding</strong>:</p>

<p>Just call simple <code>td/th</code> cell <code>padding</code>.</p>

<p><strong>Example:</strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-css lang-css prettyprint-override"><code>/******Call-Padding**********/<font></font>
<font></font>
table {<font></font>
    border-collapse: collapse;<font></font>
}<font></font>
<font></font>
td {<font></font>
  border: 1px solid red;<font></font>
  padding: 10px;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;table&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;th&gt;Head1 &lt;/th&gt;<font></font>
            &lt;th&gt;Head2 &lt;/th&gt;<font></font>
            &lt;th&gt;Head3 &lt;/th&gt;<font></font>
            &lt;th&gt;Head4 &lt;/th&gt;<font></font>
        &lt;/tr&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;td&gt;11&lt;/td&gt;<font></font>
            &lt;td&gt;12&lt;/td&gt;<font></font>
            &lt;td&gt;13&lt;/td&gt;<font></font>
            &lt;td&gt;14&lt;/td&gt;<font></font>
        &lt;/tr&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;td&gt;21&lt;/td&gt;<font></font>
            &lt;td&gt;22&lt;/td&gt;<font></font>
            &lt;td&gt;23&lt;/td&gt;<font></font>
            &lt;td&gt;24&lt;/td&gt;<font></font>
        &lt;/tr&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;td&gt;31&lt;/td&gt;<font></font>
            &lt;td&gt;32&lt;/td&gt;<font></font>
            &lt;td&gt;33&lt;/td&gt;<font></font>
            &lt;td&gt;34&lt;/td&gt;<font></font>
        &lt;/tr&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;td&gt;41&lt;/td&gt;<font></font>
            &lt;td&gt;42&lt;/td&gt;<font></font>
            &lt;td&gt;43&lt;/td&gt;<font></font>
            &lt;td&gt;44&lt;/td&gt;<font></font>
        &lt;/tr&gt;<font></font>
    &lt;/table&gt;</code></pre>
</div>
</div>
<p></p>

<pre><code>table {<font></font>
    border-collapse: collapse;<font></font>
}<font></font>
<font></font>
td {<font></font>
  border: 1px solid red;<font></font>
  padding: 10px;<font></font>
}<font></font>
</code></pre>

<p>For <strong>cell-spacing</strong></p>

<p>Just call simple <code>table</code> <code>border-spacing</code></p>

<p><strong>Example:</strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-css lang-css prettyprint-override"><code>/********* Cell-Spacing   ********/<font></font>
table {<font></font>
    border-spacing: 10px;<font></font>
    border-collapse: separate;<font></font>
}<font></font>
<font></font>
td {<font></font>
  border: 1px solid red;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;table&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;th&gt;Head1&lt;/th&gt;<font></font>
            &lt;th&gt;Head2&lt;/th&gt;<font></font>
            &lt;th&gt;Head3&lt;/th&gt;<font></font>
            &lt;th&gt;Head4&lt;/th&gt;<font></font>
        &lt;/tr&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;td&gt;11&lt;/td&gt;<font></font>
            &lt;td&gt;12&lt;/td&gt;<font></font>
            &lt;td&gt;13&lt;/td&gt;<font></font>
            &lt;td&gt;14&lt;/td&gt;<font></font>
        &lt;/tr&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;td&gt;21&lt;/td&gt;<font></font>
            &lt;td&gt;22&lt;/td&gt;<font></font>
            &lt;td&gt;23&lt;/td&gt;<font></font>
            &lt;td&gt;24&lt;/td&gt;<font></font>
        &lt;/tr&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;td&gt;31&lt;/td&gt;<font></font>
            &lt;td&gt;32&lt;/td&gt;<font></font>
            &lt;td&gt;33&lt;/td&gt;<font></font>
            &lt;td&gt;34&lt;/td&gt;<font></font>
        &lt;/tr&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;td&gt;41&lt;/td&gt;<font></font>
            &lt;td&gt;42&lt;/td&gt;<font></font>
            &lt;td&gt;43&lt;/td&gt;<font></font>
            &lt;td&gt;44&lt;/td&gt;<font></font>
        &lt;/tr&gt;<font></font>
    &lt;/table&gt;</code></pre>
</div>
</div>
<p></p>

<pre><code>/********* Cell-Spacing   ********/<font></font>
table {<font></font>
    border-spacing: 10px;<font></font>
    border-collapse: separate;<font></font>
}<font></font>
<font></font>
td {<font></font>
  border: 1px solid red;<font></font>
}<font></font>
</code></pre>

<p>More table style by CSS source link <a href="http://quirksmode.org/css/css2/tables.html" rel="nofollow noreferrer">here you get more table style by CSS</a>.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇逆天猪猪</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>How about adding the style directly to the table itself?  This is instead of using <code>table</code> in your CSS, which is a <strong>BAD</strong> approach if you have multiple tables on your page:</p>

<pre><code>&lt;table style="border-collapse: separate;border-spacing: 2px;"&gt;<font></font>
    &lt;tr&gt;<font></font>
        &lt;td style="padding: 4px 4px;"&gt;Some Text&lt;/td&gt;<font></font>
    &lt;/tr&gt;<font></font>
&lt;/table&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil小哥伽罗</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>You can simply do something like this in your CSS, using <code>border-spacing</code> and <code>padding</code>:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>table {<font></font>
  border-collapse: collapse;<font></font>
}<font></font>
<font></font>
td, th {<font></font>
  padding: 1em;<font></font>
  border: 1px solid blue;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;table&gt;<font></font>
  &lt;tr&gt;<font></font>
    &lt;th&gt;head_1&lt;/th&gt;<font></font>
    &lt;th&gt;head_2&lt;/th&gt;<font></font>
    &lt;th&gt;head_3&lt;/th&gt;<font></font>
    &lt;th&gt;head_4&lt;/th&gt;<font></font>
  &lt;/tr&gt;<font></font>
  &lt;tr&gt;<font></font>
    &lt;td&gt;txt_1&lt;/td&gt;<font></font>
    &lt;td&gt;txt_2&lt;/td&gt;<font></font>
    &lt;td&gt;txt_3&lt;/td&gt;<font></font>
    &lt;td&gt;txt_4&lt;/td&gt;<font></font>
  &lt;/tr&gt;<font></font>
&lt;/table&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamItachi阿飞</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>I used <code>!important</code> after the border-collapse like</p>

<pre class="lang-css prettyprint-override"><code>border-collapse: collapse !important;
</code></pre>

<p>and it works for me in IE7. It seems to override the cellspacing attribute.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A达蒙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>table {<font></font>
    border-spacing: 4px; <font></font>
    color: #000; <font></font>
    background: #ccc; <font></font>
}<font></font>
td {<font></font>
    padding-left: 4px;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一蛋蛋凯</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>Try this:</p>

<pre class="lang-css prettyprint-override"><code>table {<font></font>
    border-collapse: separate;<font></font>
    border-spacing: 10px;<font></font>
}<font></font>
table td, table th {<font></font>
    padding: 10px;<font></font>
}<font></font>
</code></pre>

<p>Or try this:</p>

<pre class="lang-css prettyprint-override"><code>table {<font></font>
    border-collapse: collapse;<font></font>
}<font></font>
table td, table th {<font></font>
    padding: 10px;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry猴子A</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;table&gt;<font></font>
    &lt;tr&gt;<font></font>
        &lt;th&gt;Col 1&lt;/th&gt;<font></font>
        &lt;th&gt;Col 2&lt;/th&gt;<font></font>
        &lt;th&gt;Col 3&lt;/th&gt;<font></font>
    &lt;/tr&gt;<font></font>
    &lt;tr&gt;<font></font>
        &lt;td&gt;1&lt;/td&gt;<font></font>
        &lt;td&gt;2&lt;/td&gt;<font></font>
        &lt;td&gt;3&lt;/td&gt;<font></font>
    &lt;/tr&gt;<font></font>
&lt;/table&gt;<font></font>
</code></pre>

<p><code>cell-padding</code> can be given by <code>padding</code> in CSS while <code>cell-spacing</code> can be set by setting <code>border-spacing</code> for table.</p>

<pre><code>table {<font></font>
    border-spacing: 10px;<font></font>
}<font></font>
td {<font></font>
    padding: 10px;<font></font>
}<font></font>
</code></pre>

<p><a href="https://jsfiddle.net/8d93cd60/" rel="noreferrer">Fiddle</a>.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Pro</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>CSS:</p>

<pre><code>selector{<font></font>
    padding:0 0 10px 0; // Top left bottom right <font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙LEY</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>table th,td {<font></font>
    padding: 8px 2px;<font></font>
}<font></font>
table {<font></font>
    border-collapse: separate;<font></font>
    border-spacing: 2px;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Pro</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong>Simply use CSS padding rules with table data:</strong> </p>

<pre><code>td { <font></font>
    padding: 20px;<font></font>
}<font></font>
</code></pre>

<p>And for border spacing:</p>

<pre><code>table { <font></font>
    border-spacing: 1px;<font></font>
    border-collapse: collapse;<font></font>
}<font></font>
</code></pre>

<p><strong><em>However, it can create problems in older version of browsers like Internet&nbsp;Explorer because of the diff implementation of the box model.</em></strong> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三SamJim</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>Just use <code>border-collapse: collapse</code> for your table, and <code>padding</code> for <code>th</code> or <code>td</code>.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin猪猪</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>This style is for <strong>full reset for tables</strong> - <strong>cellpadding</strong>, <strong>cellspacing</strong> and <strong>borders</strong>.</p>

<p>I had this style in my reset.css file:</p>

<pre><code>table{<font></font>
    border:0;          /* Replace border */<font></font>
    border-spacing: 0px; /* Replace cellspacing */<font></font>
    border-collapse: collapse; /* Patch for Internet Explorer 6 and Internet Explorer 7 */<font></font>
}<font></font>
table td{<font></font>
    padding: 0px; /* Replace cellpadding */<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan神乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知，在表格单元格上设置边距实际上并没有任何效果。</font><font style="vertical-align: inherit;">真正的CSS等效项</font></font><code>cellspacing</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>border-spacing</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-但在Internet Explorer中不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>border-collapse: collapse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如前所述，</font><font style="vertical-align: inherit;">您可以</font><font style="vertical-align: inherit;">用来将像元间隔可靠地设置为0，但是对于任何其他值，我认为唯一的跨浏览器方法是继续使用该</font></font><code>cellspacing</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿Near</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>The simple solution to this problem is: </p>

<pre class="lang-css prettyprint-override"><code>table<font></font>
{<font></font>
    border: 1px solid #000000;<font></font>
    border-collapse: collapse;<font></font>
    border-spacing: 0px;<font></font>
}<font></font>
table td<font></font>
{<font></font>
    padding: 8px 8px;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器的默认行为等效于：</font></font></p>

<pre><code>table {border-collapse: collapse;}<font></font>
td    {padding: 0px;}<font></font>
</code></pre>

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://i.stack.imgur.com/cukle.png" alt="在此处输入图片说明"></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">细胞填充</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置单元格内容和单元格壁之间的空间量</font></font></p>

<pre><code>table {border-collapse: collapse;}<font></font>
td    {padding: 6px;}<font></font>
</code></pre>

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://i.stack.imgur.com/c0ght.png" alt="在此处输入图片说明"></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单元间距</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制表格单元格之间的空间</font></font></p>

<pre><code>table {border-spacing: 2px;}<font></font>
td    {padding: 0px;}<font></font>
</code></pre>

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://i.stack.imgur.com/WNuBP.png" alt="在此处输入图片说明"></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都</font></font></h2>

<pre><code>table {border-spacing: 2px;}<font></font>
td    {padding: 6px;}<font></font>
</code></pre>

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://i.stack.imgur.com/eyZQl.png" alt="在此处输入图片说明"></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者（特殊）</font></font></h2>

<pre><code>table {border-spacing: 8px 2px;}<font></font>
td    {padding: 6px;}<font></font>
</code></pre>

<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://i.stack.imgur.com/gbJ3T.png" alt="在此处输入图片说明"></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果已</font></font><code>border-spacing</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置，则表示</font></font><code>border-collapse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表的属性为</font></font><code>separate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><a href="http://jsfiddle.net/H4emK/3303/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自己尝试！</font></font></a></p>

<p><a href="http://www.htmlcodetutorial.com/tables/index_famsupp_29.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以找到实现此目标的旧HTML方法。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
