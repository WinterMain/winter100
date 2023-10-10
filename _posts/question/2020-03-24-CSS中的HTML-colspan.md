---
layout: question
title:  CSS中的HTML colspan
date:   2020-03-24T08:25:21.000Z
description: 我正在尝试构建类似于以下内容的布局：+---+---+---+|   |   |   |+---+---+---+|           |+...
img: 
author: 斯丁Sam
category: question
answer: 5
tags: 的CSS CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试构建类似于以下内容的布局：</font></font></p>

<pre><code>+---+---+---+<font></font>
|   |   |   |<font></font>
+---+---+---+<font></font>
|           |<font></font>
+-----------+<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">底部填充上一行的空间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果这是一个实际的表，则可以使用轻松地完成此操作</font></font><code>&lt;td colspan="3"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是由于我只是在创建类似表的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">布局</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此无法使用</font></font><code>&lt;table&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签。</font><font style="vertical-align: inherit;">使用CSS可以吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个建议是完全使用flexbox代替表。</font><font style="vertical-align: inherit;">这当然是一种“现代浏览器”，但是现在是2016年；）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至少对于那些正在寻找答案的人来说，这可能是一种替代解决方案，因为原始帖子来自2010年。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个很好的指南：</font><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//css-tricks.com/snippets/css/a-guide-to-flexbox/</font></font></a></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.table {<font></font>
  border: 1px solid red;<font></font>
  padding: 2px;<font></font>
  max-width: 300px;<font></font>
  display: flex;<font></font>
  flex-flow: row wrap;<font></font>
}<font></font>
.table-cell {<font></font>
  border: 1px solid blue;<font></font>
  flex: 1 30%;<font></font>
}<font></font>
.colspan-3 {<font></font>
  border: 1px solid green;<font></font>
  flex: 1 100%;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class="table"&gt;<font></font>
  &lt;div class="table-cell"&gt;<font></font>
    row 1 - cell 1<font></font>
  &lt;/div&gt;<font></font>
  &lt;div class="table-cell"&gt;<font></font>
    row 1 - cell 2<font></font>
  &lt;/div&gt;<font></font>
  &lt;div class="table-cell"&gt;<font></font>
    row 1 - cell 3<font></font>
  &lt;/div&gt;<font></font>
  &lt;div class="table-cell colspan-3"&gt;<font></font>
    row 2 - cell 1 (spans 3 columns)<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以尝试使用诸如</font><a href="http://960.gs/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http://960.gs/</font></a><font style="vertical-align: inherit;">的网格系统</font></font><a href="http://960.gs/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您使用的是“ 12列”布局，您的代码将类似于以下内容：</font></font></p>

<pre><code>&lt;div class="container_12"&gt;<font></font>
&lt;div class="grid_4"&gt;1&lt;/div&gt;&lt;div class="grid_4"&gt;2&lt;/div&gt;&lt;div class="grid_4"&gt;3&lt;/div&gt;<font></font>
&lt;div class="clear"&gt;&lt;/div&gt;<font></font>
&lt;div class="grid_12"&gt;123&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不是CSS范围的一部分。  </font></font><code>colspan</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">描述页面内容的结构，或为表中的数据赋予一些含义，这就是HTML的工作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试添加</font></font><code>display: table-cell;  width: 1%;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到表格单元格元素中。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.table-cell {<font></font>
  display: table-cell;<font></font>
  width: 1%;<font></font>
  padding: 4px;<font></font>
  border: 1px solid #efefef;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class="table"&gt;<font></font>
  &lt;div class="table-cell"&gt;one&lt;/div&gt;<font></font>
  &lt;div class="table-cell"&gt;two&lt;/div&gt;<font></font>
  &lt;div class="table-cell"&gt;three&lt;/div&gt;<font></font>
  &lt;div class="table-cell"&gt;four&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
&lt;div class="table"&gt;<font></font>
  &lt;div class="table-cell"&gt;one&lt;/div&gt;<font></font>
  &lt;div class="table-cell"&gt;two&lt;/div&gt;<font></font>
  &lt;div class="table-cell"&gt;three&lt;/div&gt;<font></font>
  &lt;div class="table-cell"&gt;four&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
&lt;div class="table"&gt;<font></font>
  &lt;div class="table-cell"&gt;one&lt;/div&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有简单，优雅的CSS类似物</font></font><code>colspan</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">搜索此问题将返回各种解决方案，其中包括多种选择，包括绝对定位，调整大小以及类似的针对浏览器和具体情况的警告。</font><font style="vertical-align: inherit;">阅读并根据发现的内容做出最明智的决定。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
