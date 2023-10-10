---
layout: question
title:  为什么vertical-align：middle在我的span或div上不起作用？
date:   2020-03-24T10:51:55.000Z
description: 我正在尝试将一个span或div元素垂直居中放置在另一个div元素中。但是当我放进去时vertical-align  middle，什么也没发生。我尝试更...
img: 
author: 猪猪A
category: question
answer: 15
tags: HTML CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试将一个</font></font><code>span</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">垂直居中</font><font style="vertical-align: inherit;">放置在另一个</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素中。</font><font style="vertical-align: inherit;">但是当我放进去时</font></font><code>vertical-align: middle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，什么也没发生。</font><font style="vertical-align: inherit;">我尝试更改</font></font><code>display</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两个元素</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">属性，但似乎没有任何效果。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我当前在网页中执行的操作：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.main {<font></font>
  height: 72px;<font></font>
  vertical-align: middle;<font></font>
  border: 1px solid black;<font></font>
  padding: 2px;<font></font>
}<font></font>
    <font></font>
.inner {<font></font>
  vertical-align: middle;<font></font>
  border: 1px solid red;    <font></font>
}<font></font>
    <font></font>
.second {<font></font>
  border: 1px solid blue; <font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class="main"&gt;<font></font>
  &lt;div class="inner"&gt;<font></font>
    This box should be centered in the larger box<font></font>
    &lt;div class="second"&gt;Another box in here&lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是实现的jsfiddle，表明它不起作用：</font><a href="http://jsfiddle.net/gZXWC/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/gZXWC/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/gZXWC/</font></font></a></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3687篇《为什么vertical-align：middle在我的span或div上不起作用？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom凯</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要将一个span或div元素垂直居中放置在另一个div中，请添加相对于父div的位置，并相对于子div绝对位置。现在，该子div可以放置在div内的任何位置。下面的示例在水平和垂直方向上居中。</font></font></p>

<pre><code>&lt;div class="parent"&gt;<font></font>
    &lt;div class="child"&gt;Vertically and horizontally centered child div&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS：</font></font></p>

<pre><code>.parent{<font></font>
    position: relative;<font></font>
}<font></font>
.child{<font></font>
    position: absolute;<font></font>
    top: 0;<font></font>
    bottom: 0;<font></font>
    left: 0;<font></font>
    right: 0;<font></font>
    margin: auto;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需将内容放入高度为100％的表格中，然后设置主div的高度即可</font></font></p>

<pre><code>&lt;div style="height:80px;border: 1px solid #000000;"&gt;<font></font>
&lt;table style="height:100%"&gt;<font></font>
&lt;tr&gt;&lt;td style="vertical-align: middle;"&gt;<font></font>
  This paragraph should be centered in the larger box<font></font>
&lt;/td&gt;&lt;/tr&gt;<font></font>
&lt;/table&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于</font></font><code>vertical-align</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">预期上的作品</font></font><code>td</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，你可以把一个单细胞</font></font><code>table</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对齐其内容。</font></font></p>

<pre><code>&lt;div&gt;<font></font>
    &lt;table style="width: 100%; height: 100%;"&gt;&lt;tr&gt;&lt;td style="vertical-align: middle; text-align: center"&gt;<font></font>
        Aligned content here...<font></font>
    &lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">笨拙，但据我所知可以正常工作。</font><font style="vertical-align: inherit;">它可能没有其他解决方法的缺点。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的HTML</font></font></strong></p>

<pre><code>&lt;div id="myparent"&gt;<font></font>
  &lt;div id="mychild"&gt;Test Content here&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的CSS</font></font></strong></p>

<pre><code>#myparent {<font></font>
  display: table;<font></font>
}<font></font>
#mychild {<font></font>
  display: table-cell;<font></font>
  vertical-align: middle;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们将父div设置为显示为表格，将子div设置为显示为表格单元格。</font><font style="vertical-align: inherit;">然后，我们可以在子div上使用vertical-align并将其值设置为middle。</font><font style="vertical-align: inherit;">此子div内的所有内容都将垂直居中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一篇关于如何垂直对齐的文章。我喜欢浮动方式。</font></font></p>

<p><a href="http://www.vanseodesign.com/css/vertical-centering/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.vanseodesign.com/css/vertical-centering/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></p>

<pre><code>&lt;div id="main"&gt;<font></font>
    &lt;div id="floater"&gt;&lt;/div&gt;<font></font>
    &lt;div id="inner"&gt;Content here&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和对应的样式：</font></font></p>

<pre><code>#main {<font></font>
   height: 250px;<font></font>
}<font></font>
<font></font>
#floater {<font></font>
   float: left;<font></font>
   height: 50%;<font></font>
   width: 100%;<font></font>
   margin-bottom: -50px;<font></font>
}<font></font>
<font></font>
#inner {<font></font>
   clear: both;<font></font>
   height: 100px;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥小卤蛋Tony</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是最新的最简单的解决方案-无需更改任何内容，只需将三行CSS规则添加到您要居中的div容器中即可。</font><font style="vertical-align: inherit;">我爱</font></font><code>Flex Box</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">#LoveFlexBox</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.main {<font></font>
  /* I changed height to 200px to make it easy to see the alignment. */<font></font>
  height: 200px;<font></font>
  vertical-align: middle;<font></font>
  border: 1px solid #000000;<font></font>
  padding: 2px;<font></font>
  <font></font>
  /* Just add the following three rules to the container of which you want to center at. */<font></font>
  display: flex;<font></font>
  flex-direction: column;<font></font>
  justify-content: center;<font></font>
  /* This is true vertical center, no math needed. */<font></font>
}<font></font>
.inner {<font></font>
  border: 1px solid #000000;<font></font>
}<font></font>
.second {<font></font>
  border: 1px solid #000000;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class="main"&gt;<font></font>
  &lt;div class="inner"&gt;This box should be centered in the larger box<font></font>
    &lt;div class="second"&gt;Another box in here&lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
  &lt;div class="inner"&gt;This box should be centered in the larger box<font></font>
    &lt;div class="second"&gt;Another box in here&lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">奖金</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>justify-content</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值可以设置为以下几个选项：</font></font></p>

<ul>
<li><p><code>flex-start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这会将子div与flex流在其父容器中开始的位置对齐。</font><font style="vertical-align: inherit;">在这种情况下，它将保持在最前面。</font></font></p></li>
<li><p><code>center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这会将子div与其父容器的中心对齐。</font><font style="vertical-align: inherit;">这真的很整洁，因为您不需要添加额外的div来包裹所有子项，只需将包装器放在父容器中即可使子项居中。</font><font style="vertical-align: inherit;">因此，这是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">真正的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">垂直中心（在中，</font></font><code>column</code> <code>flex-direction</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似地，如果将更</font></font><code>flow-direction</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">改为</font></font><code>row</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将变为水平居中。</font></font></p></li>
<li><p><code>flex-end</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这会将子div与flex流在其父容器中结束的位置对齐。</font><font style="vertical-align: inherit;">在这种情况下，它将移至底部。</font></font></p></li>
<li><p><code>space-between</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这将从流的开始到流的结束散布所有子级。</font><font style="vertical-align: inherit;">如果是演示，我添加了另一个子div，以表明它们已分散。</font></font></p></li>
<li><p><code>space-around</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，类似于</font></font><code>space-between</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但</font><font style="vertical-align: inherit;">在流程的开始和结束处</font><font style="vertical-align: inherit;">只有</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一半</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的空间。</font></font></p></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green小哥番长</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这很简单。</font><font style="vertical-align: inherit;">只需添加</font></font><code>display:table-cell</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的主类。</font></font></p>

<pre><code>.main {<font></font>
  height: 72px;<font></font>
  vertical-align: middle;<font></font>
  display:table-cell;<font></font>
  border: 1px solid #000000;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看看这个</font></font><a href="http://jsfiddle.net/gZXWC/484/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsfiddle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，您有两种垂直对齐方式的示例。</font><font style="vertical-align: inherit;">我使用它们，它们工作得很好。</font><font style="vertical-align: inherit;">一种是使用绝对定位，另一种是使用</font></font><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">flexbox</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="http://codepen.io/timbergus/pen/BjXeQB" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">垂直对齐示例</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Flexbox的，你可以通过自己的另一个元素中与之对齐的元素</font></font><code>display: flex;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>align-self</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果您还需要水平对齐，则可以</font><font style="vertical-align: inherit;">在容器中</font><font style="vertical-align: inherit;">使用</font></font><code>align-items</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>justify-content</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想使用flexbox，则可以使用position属性。</font><font style="vertical-align: inherit;">如果将容器设为相对且内容绝对，则内容将能够在容器内自由移动。</font><font style="vertical-align: inherit;">因此，如果您使用</font></font><code>top: 0;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>left: 0;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在内容中，它将位于容器的左上角。</font></font></p>

<p><a href="https://i.stack.imgur.com/y9A5I.png" rel="noreferrer"><img src="https://i.stack.imgur.com/y9A5I.png" alt="绝对定位"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，要对齐它，只需将顶部和左侧引用更改为50％。</font><font style="vertical-align: inherit;">这会将内容从内容的左上角放置在容器中心。</font></font></p>

<p><a href="https://i.stack.imgur.com/hjAXM.png" rel="noreferrer"><img src="https://i.stack.imgur.com/hjAXM.png" alt="在容器中间对齐"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您需要纠正此问题，将内容的大小向左和向左平移一半。</font></font></p>

<p><a href="https://i.stack.imgur.com/p63HE.png" rel="noreferrer"><img src="https://i.stack.imgur.com/p63HE.png" alt="绝对居中"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用它来对齐包装div中心的所有内容，以防对任何人都有帮助-我发现它最简单：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>div.wrapper {<font></font>
  /* --- This works --- */<font></font>
  display: flex;<font></font>
  /* Align Vertically */<font></font>
  align-items: center;<font></font>
  /* Align Horizontally */<font></font>
  justify-content: center;<font></font>
  /* --- ---------- ----- */<font></font>
  width: 100%;<font></font>
  height:100px;<font></font>
  background-color: blue;<font></font>
}<font></font>
div.inner {<font></font>
  width: 50px;<font></font>
  height: 50px;<font></font>
  background-color: orange;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class="wrapper"&gt;<font></font>
  &lt;div class="inner"&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Stafan</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">万一您不能依靠flexbox ... </font></font><code>.child</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">放在</font></font><code>.parent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的中心。</font><font style="vertical-align: inherit;">当像素大小未知（换句话说，总是）并且IE9 +也没有问题时，该方法就可以使用。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.parent { position: relative; }<font></font>
<font></font>
.child {<font></font>
    position: absolute;<font></font>
    top : 50%;<font></font>
    left: 50%;<font></font>
    -ms-transform: translate(-50%, -50%);<font></font>
    transform    : translate(-50%, -50%);    <font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class="parent" style="background:lightyellow; padding:6em"&gt; <font></font>
  &lt;div class="child" style="background:gold; padding:1em"&gt;&amp;mdash;&lt;/div&gt; <font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐伽罗</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">试试这个，对我很好：</font></font></p>

<pre><code>/* Internet Explorer 10 */<font></font>
display:-ms-flexbox;<font></font>
-ms-flex-pack:center;<font></font>
-ms-flex-align:center;<font></font>
<font></font>
/* Firefox */<font></font>
display:-moz-box;<font></font>
-moz-box-pack:center;<font></font>
-moz-box-align:center;<font></font>
<font></font>
/* Safari, Opera, and Chrome */<font></font>
display:-webkit-box;<font></font>
-webkit-box-pack:center;<font></font>
-webkit-box-align:center;<font></font>
<font></font>
/* W3C */<font></font>
display:box;<font></font>
box-pack:center;<font></font>
box-align:center;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p>You should put <code>vertical-align: middle</code> on the inner element, <strong>not</strong> the outer element. Set the <code>line-height</code> property on the outer element to match the <code>height</code> of the outer element. Then set <code>display: inline-block</code> and <code>line-height: normal</code> on the inner element. By doing this, the text on the inner element will wrap with a normal line-height. Works in Chrome, Firefox, Safari, and IE 8+</p>

<p><strong>HTML</strong></p>

<pre><code>&lt;div class="main"&gt;<font></font>
    &lt;div class="inner"&gt;Vertically centered text&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><strong>CSS</strong></p>

<pre><code>.main {<font></font>
    height: 72px;<font></font>
    line-height:72px;<font></font>
}<font></font>
.inner {<font></font>
    display: inline-block;<font></font>
    vertical-align: middle;<font></font>
    line-height: normal;<font></font>
}<font></font>
</code></pre>

<p><a href="http://jsfiddle.net/br090prs/" rel="noreferrer" title="小提琴">Fiddle</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanMandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用CSS3：</font></font></p>

<pre><code>&lt;div class="outer"&gt;<font></font>
   &lt;div class="inner"/&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS：</font></font></p>

<pre><code>.outer {<font></font>
  display : flex;<font></font>
  align-items : center;<font></font>
  justify-content: center;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：这可能不适用于旧版IE</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子路易Davaid</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将line-height设置为与包含div相同的高度也将起作用 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示</font></font><a href="http://jsfiddle.net/kevinPHPkevin/gZXWC/7/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/kevinPHPkevin/gZXWC/7/</font></font></a></p>

<pre><code>.inner {<font></font>
    line-height:72px;<font></font>
    border: 1px solid #000000;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLock" width="18" height="18" viewBox="0 0 18 18"><path d="M16 9a2 2 0 0 0-2-2V6A5 5 0 0 0 4 6v1a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V9zm-7 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.1-7H5.9V6a3.1 3.1 0 0 1 6.2 0v1z"></path></svg>
                        </div>
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b>Locked for <span dir="ltr" title="10月9日7:03">199 days</span></b>. There are <a href="/help/locked-posts">disputes about this answer’s content</a> being resolved at this time. It is not currently accepting new interactions.
                            
                        </div>
                    </div>
                </div>
                            </div>
                    </aside>
        <p>This seems to be the best way - some time has passed since my original post and this is what should be done now: <a href="http://jsfiddle.net/m3ykdyds/200" rel="nofollow noreferrer">http://jsfiddle.net/m3ykdyds/200</a></p>

<pre><code>/* CSS file */<font></font>
<font></font>
.main {<font></font>
    display: table;<font></font>
}<font></font>
<font></font>
.inner {<font></font>
    border: 1px solid #000000;<font></font>
    display: table-cell;<font></font>
    vertical-align: middle;<font></font>
}<font></font>
<font></font>
/* HTML File */<font></font>
&lt;div class="main"&gt;<font></font>
    &lt;div class="inner"&gt; This &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
