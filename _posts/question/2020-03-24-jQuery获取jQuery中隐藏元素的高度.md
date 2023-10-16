---
layout: question
title:  jQuery：获取jQuery中隐藏元​​素的高度
date:   2020-03-24T08:21:53.000Z
description: 我需要获取隐藏的div内的元素的高度。现在，我显示div，获取高度，然后隐藏父div。这似乎有点愚蠢。有没有更好的办法？我正在使用jQuery 1.4...
img: 
author: 小小Stafan宝儿
category: question
answer: 4
tags: JavaScript CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要获取隐藏的div内的元素的高度。</font><font style="vertical-align: inherit;">现在，我显示div，获取高度，然后隐藏父div。</font><font style="vertical-align: inherit;">这似乎有点愚蠢。</font><font style="vertical-align: inherit;">有没有更好的办法？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用jQuery 1.4.2：</font></font></p>

<pre><code>$select.show();<font></font>
optionHeight = $firstOption.height(); //we can only get height if its visible<font></font>
$select.hide();<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3508篇《jQuery：获取jQuery中隐藏元​​素的高度》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种解决方法是在要获取其高度的元素外部创建一个父div，将高度设置为“ 0”并隐藏任何溢出。</font><font style="vertical-align: inherit;">接下来，使用子元素的高度，并删除父元素的溢出属性。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var height = $("#child").height();<font></font>
// Do something here<font></font>
$("#parent").append(height).removeClass("overflow-y-hidden");</code></pre>
<pre class="snippet-code-css lang-css prettyprint-override"><code>.overflow-y-hidden {<font></font>
  height: 0px;<font></font>
  overflow-y: hidden;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"&gt;&lt;/script&gt;<font></font>
<font></font>
&lt;div id="parent" class="overflow-y-hidden"&gt;<font></font>
  &lt;div id="child"&gt;<font></font>
    This is some content I would like to get the height of!<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据定义，元素只有在可见时才具有高度。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是好奇：为什么需要隐藏元素的高度？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种替代方法是</font><font style="vertical-align: inherit;">通过将元素放置在某种类型的叠加层之后（使用z-index）</font><font style="vertical-align: inherit;">来</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有效地</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">隐藏它。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以使用负边距将隐藏的div置于屏幕之外，而不是使用display：none，就像文本缩进图像替换技术一样。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如。</font></font></p>

<pre><code>position:absolute;<font></font>
left:  -2000px;<font></font>
top: 0;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，height（）仍然可用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您正在混淆两种CSS样式，即</font></font><a href="http://www.w3schools.com/cssref/pr_class_display.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示样式</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://www.w3schools.com/cssref/pr_class_visibility.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可见性样式</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果通过设置可见性css样式隐藏了元素，则无论元素是否可见，您都应该能够获得高度，因为该元素</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍在页面上占据空间</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果通过将display css样式更改为“ none”来隐藏该元素，则该元素不会在页面上占用空间，并且您将不得不赋予它一种显示样式，这将导致该元素在某个空间处呈现。哪一点就可以得到高度。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
