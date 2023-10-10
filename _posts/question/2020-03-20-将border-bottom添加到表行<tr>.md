---
layout: question
title:  将border-bottom添加到表行<tr>
date:   2020-03-20T01:57:20.000Z
description: 我有一个3 x 3的表格。我需要一种为每行底部添加边框tr并为其指定特定颜色的方法。首先，我尝试了直接方式，即：<tr style="border...
img: 
author: 村村西门
category: question
answer: 14
tags: HTML CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个3 x 3的表格。我需要一种为每行底部添加边框</font></font><code>tr</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并为其指定特定颜色的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，我尝试了直接方式，即：</font></font></p>

<pre><code>&lt;tr style="border-bottom:1pt solid black;"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这没有用。</font><font style="vertical-align: inherit;">所以我像这样添加了CSS：</font></font></p>

<pre class="lang-css prettyprint-override"><code>tr {<font></font>
border-bottom: 1pt solid black;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那仍然没有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我更喜欢使用CSS，因为这样我就不必</font></font><code>style</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在每一行中</font><font style="vertical-align: inherit;">添加一个</font><font style="vertical-align: inherit;">属性。</font><font style="vertical-align: inherit;">我尚未向中添加</font></font><code>border</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font></font><code>&lt;table&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我希望那不会影响我的CSS。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无村村</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的HTML</font></font></p>

<pre><code>&lt;tr class="bottom-border"&gt;<font></font>
&lt;/tr&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的CSS</font></font></p>

<pre><code>tr.bottom-border {<font></font>
  border-bottom: 1px solid #222;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam小哥理查德</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个解决方案是</font></font><a href="https://www.w3schools.com/cssref/pr_border-spacing.asp" rel="nofollow noreferrer"><code>border-spacing</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>table td {<font></font>
  border-bottom: 2px solid black;<font></font>
}<font></font>
<font></font>
table {<font></font>
  border-spacing: 0px;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;table&gt;<font></font>
 &lt;tr&gt;<font></font>
   &lt;td&gt;ABC&lt;/td&gt;<font></font>
   &lt;td&gt;XYZ&lt;/td&gt;<font></font>
&lt;/table&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A樱</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试添加</font></font></p>

<pre><code>    table {<font></font>
      border-collapse: collapse;<font></font>
    }   <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旁边 </font></font></p>

<pre><code>    tr {<font></font>
      bottom-border: 2pt solid #color;<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后注释掉边界崩溃以查看有效方法。</font><font style="vertical-align: inherit;">只是让具有底部边界属性的tr选择器对我有用！</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有Border CSS ex。</font></font></strong></p>

<p><img src="https://i.stack.imgur.com/ZWDoc.png" alt="没有Border CSS ex。"></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无边框照片直播</font></font></strong></p>

<p><img src="https://i.stack.imgur.com/p3vXI.png" alt="无边框照片直播"></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS Border ex。</font></font></strong></p>

<p><img src="https://i.stack.imgur.com/ORoX8.png" alt="CSS Border ex。"></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有边框照片的桌子直播</font></font></strong></p>

<p><img src="https://i.stack.imgur.com/yzxWH.png" alt="带有边框照片的桌子直播"></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙小卤蛋Tom</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><code>&lt;td style="border-bottom-style: solid; border-bottom: thick dotted #ff0000; "&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以对整个行执行相同的操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有</font></font><code>border-bottom-style</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>border-top-style</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>border-left-style</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>border-right-style</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">或者只是一次将</font></font><code>border-style</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其应用于所有四个边界。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font><a href="http://www.w3schools.com/css/css_border.asp" rel="nofollow"><font style="vertical-align: inherit;">在此处</font></a><font style="vertical-align: inherit;">查看（并</font><font style="vertical-align: inherit;">在线</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）更多详细信息</font></font><a href="http://www.w3schools.com/css/css_border.asp" rel="nofollow"><font style="vertical-align: inherit;"></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子小小Tony</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用该</font></font><code>box-shadow</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性来伪造</font></font><code>tr</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">的边框</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">调整的Y位置</font></font><code>box-shadow</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（以下表示为2px）以调整厚度。</font></font></p>

<pre><code>tr {<font></font>
  -webkit-box-shadow: 0px 2px 0px 0px rgba(0,0,0,0.99);<font></font>
  -moz-box-shadow: 0px 2px 0px 0px rgba(0,0,0,0.99);<font></font>
  box-shadow: 0px 2px 0px 0px rgba(0,0,0,0.99);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near西里泡芙</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现使用此方法时，td元素之间的间隔会在边框中形成间隙，但不要担心...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决此问题的一种方法：</font></font></p>

<pre><code>&lt;tr&gt;<font></font>
    &lt;td&gt;<font></font>
        Example of normal table data<font></font>
    &lt;/td&gt;<font></font>
<font></font>
    &lt;td class="end" colspan="/* total number of columns in entire table*/"&gt;<font></font>
        /* insert nothing in here */ <font></font>
    &lt;/td&gt;<font></font>
&lt;/tr&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用CSS：</font></font></p>

<pre><code>td.end{<font></font>
    border:2px solid black;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐Eva</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有CSS边框底部：</font></font></p>

<pre><code>&lt;table&gt;<font></font>
    &lt;thead&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;th&gt;Title&lt;/th&gt;<font></font>
        &lt;/tr&gt;<font></font>
        &lt;tr&gt;<font></font>
            &lt;th&gt;<font></font>
                &lt;hr&gt;<font></font>
            &lt;/th&gt;<font></font>
        &lt;/tr&gt;<font></font>
    &lt;/thead&gt;<font></font>
&lt;/table&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi猪猪Green</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将行显示为块。</font></font></p>

<pre><code>tr {<font></font>
    display: block;<font></font>
    border-bottom: 1px solid #000;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并简单地显示其他颜色：</font></font></p>

<pre><code>tr.oddrow {<font></font>
    display: block;<font></font>
    border-bottom: 1px solid #F00;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinGil</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里有很多不完整的答案。</font><font style="vertical-align: inherit;">由于您无法在</font></font><code>tr</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签上</font><font style="vertical-align: inherit;">应用边框</font><font style="vertical-align: inherit;">，因此需要将其应用于</font></font><code>td</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>th</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签，如下所示：</font></font></p>

<pre><code>td {<font></font>
  border-bottom: 1pt solid black;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样做会在每个之间留一个很小的空间</font></font><code>td</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果您希望边框看起来像是</font></font><code>tr</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">，这可能是不希望的</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">为了“填补空白”，您需要利用</font><font style="vertical-align: inherit;">元素</font></font><code>border-collapse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上的属性</font></font><code>table</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将其值设置为</font></font><code>collapse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如下所示：</font></font></p>

<pre><code>table {<font></font>
  border-collapse: collapse;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony老丝</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用 </font></font></p>

<p><code>border-collapse:collapse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 如内森（Nathan）所写，您需要设置</font></font></p>

<p><code>td { border-bottom: 1px solid #000; }</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西小卤蛋GO</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse"><code>border-collapse:collapse</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到您的表格规则中：</font></font></p>

<pre><code>table { <font></font>
    border-collapse: collapse; <font></font>
}<font></font>
</code></pre>

<p><a href="http://www.w3schools.com/cssref/pr_border-collapse.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>border-collapse:collapse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上表</font></font><code>border-bottom: 1pt solid black;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的TR</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidA</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用 </font></font></p>

<pre><code>table{border-collapse:collapse}<font></font>
tr{border-top:thin solid}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用CSS属性替换“ thin solid”。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙卡卡西</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我以前有这样的问题。</font><font style="vertical-align: inherit;">我认为</font></font><code>tr</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能直接采用边框样式。</font><font style="vertical-align: inherit;">我的解决方法是</font></font><code>td</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在行中</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">s的</font><font style="vertical-align: inherit;">样式</font><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;tr class="border_bottom"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS：</font></font></p>

<pre class="lang-css prettyprint-override"><code>tr.border_bottom td {<font></font>
  border-bottom:1pt solid black;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
