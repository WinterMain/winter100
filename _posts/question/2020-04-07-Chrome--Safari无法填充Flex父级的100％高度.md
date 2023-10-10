---
layout: question
title:  Chrome / Safari无法填充Flex父级的100％高度
date:   2020-04-07T03:21:11.000Z
description: 我想要一个具有特定高度的垂直菜单。每个孩子都必须填满父母的身高，并且中间对齐文本。孩子的数量是随机的，因此我必须使用动态值。Div .cont...
img: 
author: 卡卡西
category: question
answer: 5
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要一个具有特定高度的垂直菜单。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个孩子都必须填满父母的身高，并且中间对齐文本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">孩子的数量是随机的，因此我必须使用动态值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Div </font></font><code>.container</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含随机数的子代（</font></font><code>.item</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），</font><font style="vertical-align: inherit;">子代</font><font style="vertical-align: inherit;">总是必须填充父代的高度。</font><font style="vertical-align: inherit;">为此，我使用了flexbox。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了使文本居中对齐，我使用了</font></font><code>display: table-cell</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">技巧。</font><font style="vertical-align: inherit;">但是使用表格显示需要使用高度100％。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是</font></font><code>.item-inner { height: 100% }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法在webkit（Chrome）中使用。  </font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有解决此问题的方法吗？   </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还是有一种不同的技术可以使所有</font></font><code>.item</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文本的高度都垂直于中间对齐，</font><font style="vertical-align: inherit;">从而全部</font><font style="vertical-align: inherit;">填充父级的高度？</font></font></li>
</ol>

<p><a href="http://jsfiddle.net/y8mboo2s/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处的示例jsFiddle，应在Firefox和Chrome中查看</font></font></a></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.container {<font></font>
  height: 20em;<font></font>
  display: flex;<font></font>
  flex-direction: column;<font></font>
  border: 5px solid black<font></font>
}<font></font>
.item {<font></font>
  flex: 1;<font></font>
  border-bottom: 1px solid white;<font></font>
}<font></font>
.item-inner {<font></font>
  height: 100%;<font></font>
  width: 100%;<font></font>
  display: table;<font></font>
}<font></font>
a {<font></font>
  background: orange;<font></font>
  display: table-cell;<font></font>
  vertical-align: middle;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class="container"&gt;<font></font>
  &lt;div class="item"&gt;<font></font>
    &lt;div class="item-inner"&gt;<font></font>
      &lt;a&gt;Button&lt;/a&gt;<font></font>
    &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
<font></font>
  &lt;div class="item"&gt;<font></font>
    &lt;div class="item-inner"&gt;<font></font>
      &lt;a&gt;Button&lt;/a&gt;<font></font>
    &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
<font></font>
  &lt;div class="item"&gt;<font></font>
    &lt;div class="item-inner"&gt;<font></font>
      &lt;a&gt;Button&lt;/a&gt;<font></font>
    &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个类似的错误，但是使用的是固定高度而不是百分比。</font><font style="vertical-align: inherit;">它也是体内的弹性容器（没有指定高度）。</font><font style="vertical-align: inherit;">似乎在Safari上，由于某种原因，我的flex容器的高度为9px，但在所有其他浏览器中，它都显示了样式表中指定的正确100px高度。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过将</font></font><code>height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>min-height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">都添加</font><font style="vertical-align: inherit;">到CSS类，</font><font style="vertical-align: inherit;">我设法使其正常工作</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下内容适用于Safari 13.0.4和Chrome 79.0.3945.130：</font></font></p>

<pre><code>.flex-container {<font></font>
  display: flex;<font></font>
  flex-direction: column;<font></font>
  min-height: 100px;<font></font>
  height: 100px;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Mobile Safari，有一个浏览器修复程序。</font><font style="vertical-align: inherit;">您需要</font><font style="vertical-align: inherit;">为iOS设备</font><font style="vertical-align: inherit;">添加</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-webkit-box</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如</font></font></p>

<pre><code>display: flex;<font></font>
display: -webkit-box;<font></font>
flex-direction: column;<font></font>
-webkit-box-orient: vertical;<font></font>
-webkit-box-direction: normal;<font></font>
-webkit-flex-direction: column;<font></font>
align-items: stretch;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您将</font></font><code>align-items: stretch;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性用于父元素，请</font></font><code>height : 100%</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从子元素中</font><font style="vertical-align: inherit;">删除</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在iOS 8、9和10中遇到过类似的问题，上面的信息无法解决，但是经过一天的努力，我确实找到了解决方案。</font><font style="vertical-align: inherit;">当然，它不适用于所有人，但在我的情况下，我的物品堆放在一列中，当它应为内容高度时，其高度为0。</font><font style="vertical-align: inherit;">将CSS切换为行换行可解决此问题。</font><font style="vertical-align: inherit;">仅当您只有一个项目并且将它们堆叠在一起时，此方法才有效，但是由于花了我一天的时间才能找出答案，所以我认为我应该分享自己的解决方案！</font></font></p>

<pre><code>.wrapper {<font></font>
    flex-direction: column; // &lt;-- Remove this line<font></font>
    flex-direction: row; // &lt;-- replace it with<font></font>
    flex-wrap: wrap; // &lt;-- Add wrapping<font></font>
}<font></font>
<font></font>
.item {<font></font>
    width: 100%;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为容器指定flex属性对我有用：</font></font></p>

<pre><code>.container {<font></font>
    flex: 0 0 auto;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样可以确保高度已设置且不会增大。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案：删除</font></font><code>height: 100%</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.item-内</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并添加</font></font><code>display: flex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.item</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示：</font><a href="https://codepen.io/tronghiep92/pen/NvzVoo" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://codepen.io/tronghiep92/pen/NvzVoo" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//codepen.io/tronghiep92/pen/NvzVoo</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
