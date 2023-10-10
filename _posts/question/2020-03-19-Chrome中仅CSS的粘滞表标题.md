---
layout: question
title:  Chrome中仅CSS的粘滞表标题
date:   2020-03-19T03:38:52.000Z
description: 我有以下Sass片段，我希望其中的内容<thead>随着表格的滚动而浮动。这在Safari中可以正常运行，但在Chrome中不能正常运行Version 5...
img: 
author: 十三A
category: question
answer: 4
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有以下Sass片段，我希望其中的内容</font></font><code>&lt;thead&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随着表格的滚动而浮动。</font><font style="vertical-align: inherit;">这在Safari中可以正常运行，但在Chrome中不能正常运行</font></font><code>Version 58.0.3029.110 (64-bit)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道Chrome一直对Chrome拥有断断续续的</font></font><code>sticky</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持，但目前是最终的支持吗？</font><font style="vertical-align: inherit;">这是Chrome的bug，还是我需要其他解决方案？</font><font style="vertical-align: inherit;">（我更喜欢CSS方法而不是Javascript，因为它更具性能。）</font></font></p>

<pre><code>.table {<font></font>
  thead {<font></font>
    background: white;<font></font>
    position: sticky;<font></font>
    top: 0;<font></font>
    z-index: 10;<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2307篇《Chrome中仅CSS的粘滞表标题》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门猿</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><a href="https://jsfiddle.net/y9cwnb81/4/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://jsfiddle.net/y9cwnb81/4/</font></font></a></p>

<pre><code>div.table {<font></font>
  width: 100%;<font></font>
  display: grid;<font></font>
  grid-template-columns: 1fr 1fr 1fr;<font></font>
  grid-template-rows: 1fr auto;<font></font>
<font></font>
  grid-template-areas:<font></font>
    "header header header"<font></font>
    "content content content";<font></font>
}<font></font>
<font></font>
.header {<font></font>
  grid: 1fr/1fr;<font></font>
}<font></font>
<font></font>
.content {<font></font>
  display: grid;<font></font>
  grid-template-columns: 1fr 1fr 1fr;<font></font>
  grid-template-rows: auto;<font></font>
  grid-area: content;<font></font>
  height: 200px;<font></font>
  overflow-y: scroll;<font></font>
}<font></font>
<font></font>
.content div {<font></font>
  grid: auto-flow 1fr / repeat(auto-fill);<font></font>
}<font></font>
<font></font>
&lt;!-- Here is the table code --&gt;<font></font>
<font></font>
&lt;div class="table"&gt;<font></font>
  &lt;div class="header"&gt;Name&lt;/div&gt;<font></font>
  &lt;div class="header"&gt;Color&lt;/div&gt;<font></font>
  &lt;div class="header"&gt;Description&lt;/div&gt;<font></font>
  &lt;div class="content"&gt;<font></font>
    &lt;div&gt;Apple&lt;/div&gt;<font></font>
    &lt;div&gt;Red&lt;/div&gt;<font></font>
    &lt;div&gt;These are red asd,mas, da,msnd asndm,asndm,asndbansbdansmbdmnasbd.&lt;/div&gt;<font></font>
<font></font>
    &lt;div&gt;Apple&lt;/div&gt;<font></font>
    &lt;div&gt;Red&lt;/div&gt;<font></font>
    &lt;div&gt;These are red asd.&lt;/div&gt;<font></font>
<font></font>
    &lt;div&gt;Apple&lt;/div&gt;<font></font>
    &lt;div&gt;Red&lt;/div&gt;<font></font>
    &lt;div&gt;These are red asd.&lt;/div&gt;<font></font>
<font></font>
    &lt;div&gt;Apple&lt;/div&gt;<font></font>
    &lt;div&gt;Red&lt;/div&gt;<font></font>
    &lt;div&gt;These are red asd.&lt;/div&gt;<font></font>
<font></font>
    &lt;div&gt;Apple&lt;/div&gt;<font></font>
    &lt;div&gt;Red&lt;/div&gt;<font></font>
    &lt;div&gt;These are red asd.&lt;/div&gt;<font></font>
<font></font>
    &lt;div&gt;Apple&lt;/div&gt;<font></font>
    &lt;div&gt;Red&lt;/div&gt;<font></font>
    &lt;div&gt;These are red asd.&lt;/div&gt;<font></font>
<font></font>
    &lt;div&gt;Apple&lt;/div&gt;<font></font>
    &lt;div&gt;Red&lt;/div&gt;<font></font>
    &lt;div&gt;These are red asd.&lt;/div&gt;<font></font>
<font></font>
    &lt;div&gt;Apple&lt;/div&gt;<font></font>
    &lt;div&gt;Red&lt;/div&gt;<font></font>
    &lt;div&gt;These are red asd.&lt;/div&gt;<font></font>
<font></font>
    &lt;div&gt;Apple&lt;/div&gt;<font></font>
    &lt;div&gt;Red&lt;/div&gt;<font></font>
    &lt;div&gt;These are red asd.&lt;/div&gt;<font></font>
<font></font>
    &lt;div&gt;Apple&lt;/div&gt;<font></font>
    &lt;div&gt;Red&lt;/div&gt;<font></font>
    &lt;div&gt;These are red asd.&lt;/div&gt;<font></font>
<font></font>
    &lt;div&gt;Apple&lt;/div&gt;<font></font>
    &lt;div&gt;Red&lt;/div&gt;<font></font>
    &lt;div&gt;These are red asd.&lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个使用CSS GRID的示例，仅在CSS中具有粘性标头，而无需使用javascript。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green樱</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您在表头单元格而不是表行上设置粘性位置。 </font></font></p>

<pre><code>.td.header {<font></font>
  position: sticky;<font></font>
  top:0px;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看这个</font></font><a href="https://jsfiddle.net/g0xkaufs/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsfiddle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获得简单的示例。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯泡芙Davaid</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">位置：粘性不适用于Chrome中的某些表格元素（thead / tr）。</font><font style="vertical-align: inherit;">您可以将粘性移至需要保持粘性的tds / th。</font><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre><code>.table {<font></font>
  thead tr:nth-child(1) th{<font></font>
    background: white;<font></font>
    position: sticky;<font></font>
    top: 0;<font></font>
    z-index: 10;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也将起作用。</font></font></p>

<pre><code>.table {<font></font>
    position: sticky;<font></font>
    top: 0;<font></font>
    z-index: 10;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将标题移动到单独的布局。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>&lt;table class="table"&gt;<font></font>
    &lt;thead&gt;<font></font>
    &lt;tr&gt;<font></font>
        &lt;th&gt;1&lt;/th&gt;<font></font>
        &lt;th&gt;2&lt;/th&gt;<font></font>
        &lt;th&gt;3&lt;/th&gt;<font></font>
        &lt;th&gt;4&lt;/th&gt;<font></font>
    &lt;/tr&gt;<font></font>
    &lt;/thead&gt;<font></font>
&lt;/table&gt;<font></font>
&lt;table&gt;<font></font>
    &lt;tbody&gt;<font></font>
    &lt;tr&gt;<font></font>
        &lt;td&gt;1&lt;/td&gt;<font></font>
        &lt;td&gt;2&lt;/td&gt;<font></font>
        &lt;td&gt;3&lt;/td&gt;<font></font>
        &lt;td&gt;4&lt;/td&gt;<font></font>
    &lt;/tr&gt;<font></font>
    &lt;tr&gt;<font></font>
        &lt;td&gt;1&lt;/td&gt;<font></font>
        &lt;td&gt;2&lt;/td&gt;<font></font>
        &lt;td&gt;3&lt;/td&gt;<font></font>
        &lt;td&gt;4&lt;/td&gt;<font></font>
    &lt;/tr&gt;<font></font>
    &lt;tr&gt;<font></font>
        &lt;td&gt;1&lt;/td&gt;<font></font>
        &lt;td&gt;2&lt;/td&gt;<font></font>
        &lt;td&gt;3&lt;/td&gt;<font></font>
        &lt;td&gt;4&lt;/td&gt;<font></font>
    &lt;/tr&gt;<font></font>
&lt;/table&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德GO</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于某个仍在寻找解决方案并对被接受的解决方案不满意的人。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）在元素上使用粘顶类。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）自己上课</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>th.sticky-header {<font></font>
  position: sticky;<font></font>
  top: 0;<font></font>
  z-index: 10;<font></font>
  /*To not have transparent background.<font></font>
  background-color: white;*/<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;table class="table"&gt;<font></font>
  &lt;thead&gt;<font></font>
    &lt;tr&gt;<font></font>
      &lt;th class="sticky-header"&gt;1&lt;/th&gt;<font></font>
      &lt;th class="sticky-header"&gt;2&lt;/th&gt;<font></font>
      &lt;th class="sticky-header"&gt;3&lt;/th&gt;<font></font>
      &lt;th class="sticky-header"&gt;4&lt;/th&gt;<font></font>
    &lt;/tr&gt;<font></font>
  &lt;/thead&gt;<font></font>
  &lt;tbody&gt;<font></font>
    &lt;tr&gt;<font></font>
      &lt;td&gt;1&lt;/td&gt;<font></font>
      &lt;td&gt;2&lt;/td&gt;<font></font>
      &lt;td&gt;3&lt;/td&gt;<font></font>
      &lt;td&gt;4&lt;/td&gt;<font></font>
    &lt;/tr&gt;<font></font>
    &lt;tr&gt;<font></font>
      &lt;td&gt;1&lt;/td&gt;<font></font>
      &lt;td&gt;2&lt;/td&gt;<font></font>
      &lt;td&gt;3&lt;/td&gt;<font></font>
      &lt;td&gt;4&lt;/td&gt;<font></font>
    &lt;/tr&gt;<font></font>
    &lt;tr&gt;<font></font>
      &lt;td&gt;1&lt;/td&gt;<font></font>
      &lt;td&gt;2&lt;/td&gt;<font></font>
      &lt;td&gt;3&lt;/td&gt;<font></font>
      &lt;td&gt;4&lt;/td&gt;<font></font>
    &lt;/tr&gt;<font></font>
  &lt;/tbody&gt;<font></font>
&lt;/table&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
