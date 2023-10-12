---
layout: question
title:  我可以在CSS中产生onclick效果吗？
date:   2020-03-23T03:16:02.000Z
description: 我有一个想要在点击时更改的图像元素。<img id="btnLeft">这有效：#btnLeft hover {    width 70p...
img: 
author: GO
category: question
answer: 9
tags: html CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个想要在点击时更改的图像元素。</font></font></p>

<pre><code>&lt;img id="btnLeft"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这有效：</font></font></p>

<pre><code>#btnLeft:hover {<font></font>
    width:70px;<font></font>
    height:74px;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我需要的是：</font></font></p>

<pre><code>#btnLeft:onclick {<font></font>
    width:70px;<font></font>
    height:74px;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这显然不起作用。</font></font><code>onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS </font><font style="vertical-align: inherit;">根本有可能有</font><font style="vertical-align: inherit;">行为（即不使用JavaScript）吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2721篇《我可以在CSS中产生onclick效果吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以使用：target</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一般目标</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：目标</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或按类别名称过滤</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.classname：目标</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或按ID名称过滤</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">#idname：target</font></font></p>
</blockquote>

<pre><code>&lt;style&gt;<font></font>
<font></font>
#id01:target {      <font></font>
      position: absolute;<font></font>
      left: 0;<font></font>
      top: 0;<font></font>
      width: 100%;<font></font>
      height: 100%;<font></font>
      display: flex;<font></font>
      align-items: center;<font></font>
      justify-content: center;<font></font>
}<font></font>
<font></font>
.msg{<font></font>
    display:none;<font></font>
}<font></font>
<font></font>
.close{     <font></font>
    color:white;        <font></font>
    width: 2rem;<font></font>
    height: 2rem;<font></font>
    background-color: black;<font></font>
    text-align:center;<font></font>
    margin:20px;<font></font>
}<font></font>
<font></font>
&lt;/style&gt;<font></font>
<font></font>
<font></font>
&lt;a href="#id01"&gt;Open&lt;/a&gt;<font></font>
<font></font>
&lt;div id="id01" class="msg"&gt;    <font></font>
    &lt;a href="" class="close"&gt;&amp;times;&lt;/a&gt;<font></font>
    &lt;p&gt;Some text. Some text. Some text.&lt;/p&gt;<font></font>
    &lt;p&gt;Some text. Some text. Some text.&lt;/p&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了一个问题，该元素在悬停时必须变为红色，在悬停时必须单击时变为蓝色。</font><font style="vertical-align: inherit;">要使用CSS实现此目的，您需要例如：</font></font></p>

<pre><code>h1:hover { color: red; } <font></font>
h1:active { color: blue; }<font></font>
<font></font>
&lt;h1&gt;This is a heading.&lt;/h1&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我努力了一段时间，直到发现</font><font style="vertical-align: inherit;">CSS选择器</font><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顺序</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是我遇到的问题。</font><font style="vertical-align: inherit;">问题是我切换了位置并且活动的选择器不起作用。</font><font style="vertical-align: inherit;">然后我发现</font></font><code>:hover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">先走再走</font></font><code>:active</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小卤蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有以下用于鼠标悬停和鼠标单击的代码，它可以正常工作：</font></font></p>

<pre><code>//For Mouse Hover<font></font>
.thumbnail:hover span{ /*CSS for enlarged image*/<font></font>
    visibility: visible;<font></font>
    text-align:center;<font></font>
    vertical-align:middle;<font></font>
    height: 70%;<font></font>
    width: 80%;<font></font>
    top:auto;<font></font>
    left: 10%;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您单击该代码时，该代码将隐藏该图像：</font></font></p>

<pre><code>.thumbnail:active span {<font></font>
    visibility: hidden;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p>How about a pure CSS solution without being (that) hacky?</p>

<p><a href="https://i.stack.imgur.com/yqgFv.gif" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/yqgFv.gif" alt="在此处输入图片说明"></a>
</p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.page {<font></font>
  position: fixed;<font></font>
  top: 0;<font></font>
  bottom: 0;<font></font>
  right: 0;<font></font>
  left: 0;<font></font>
  background-color: #121519;<font></font>
  color: whitesmoke;<font></font>
}<font></font>
<font></font>
.controls {<font></font>
  display: flex;<font></font>
  align-items: center;<font></font>
  justify-content: center;<font></font>
  height: 100%;<font></font>
  width: 100%;<font></font>
}<font></font>
<font></font>
.arrow {<font></font>
  cursor: pointer;<font></font>
  transition: filter 0.3s ease 0.3s;<font></font>
}<font></font>
<font></font>
.arrow:active {<font></font>
  filter: drop-shadow(0 0 0 steelblue);<font></font>
  transition: filter 0s;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;body class="page"&gt;<font></font>
  &lt;div class="controls"&gt;<font></font>
    &lt;div class="arrow"&gt;<font></font>
      &lt;img src="https://i.imgur.com/JGUoNfS.png" /&gt;<font></font>
    &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/body&gt;</code></pre>
</div>
</div>
<p></p>

<p>@TylerH has a great response but its a pretty complex solution.  I have a solution for those of you that just want a simple "onclick" effect with pure css without a bunch of extra elements.</p>

<p>We will simply use css transitions.  You could probably do similar with animations. </p>

<p>The trick is to change the delay for the transition so that it will last when the user clicks.  </p>

<pre><code>.arrowDownContainer:active,<font></font>
.arrowDownContainer.clicked {<font></font>
  filter: drop-shadow(0px 0px 0px steelblue);<font></font>
  transition: filter 0s;<font></font>
}<font></font>
</code></pre>

<p>Here I add the "clicked" class as well so that javascript can also provide the effect if it needs to.  I use 0px drop-shadow filter because it will highlight the given transparent graphic blue this way for my case.</p>

<p>I have a filter at 0s here so that it wont take effect.  When the effect is released I can then add the transition with a delay so that it will provide a nice "clicked" effect. </p>

<pre><code>.arrowDownContainer {<font></font>
  cursor: pointer;<font></font>
  position: absolute;<font></font>
  bottom: 0px;<font></font>
  top: 490px;<font></font>
  left: 108px;<font></font>
  height: 222px;<font></font>
  width: 495px;<font></font>
  z-index: 3;<font></font>
  transition: filter 0.3s ease 0.3s;<font></font>
}<font></font>
</code></pre>

<p>This allows me to set it up so that when the user clicks the button, it highlights blue then fades out slowly (you could, of course, use other effects as well). </p>

<p>While you are limited here in the sense that the animation to highlight is instant, it does still provide the desired effect.  You could likely use this trick with animation to produce a smoother overall transition.</p>

<p><a href="https://i.stack.imgur.com/q5MoQ.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/q5MoQ.png" alt="在此处输入图片说明"></a></p>

<p><a href="https://i.stack.imgur.com/AaLUj.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/AaLUj.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：在OP澄清他想要什么之前回答。</font><font style="vertical-align: inherit;">以下是类似于Javascript onclick的onclick，而不是</font></font><code>:active</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">伪类。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这只能通过Javascript或</font><a href="http://css-tricks.com/the-checkbox-hack/"><font style="vertical-align: inherit;">Checkbox Hack</font></a><font style="vertical-align: inherit;">来实现</font></font><a href="http://css-tricks.com/the-checkbox-hack/"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复选框hack本质上使您可以单击标签，从而“选中”复选框，从而使您可以根据需要设置标签的样式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="http://dabblet.com/gist/1506530"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果为元素指定a，</font></font><code>tabindex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则可以使用</font></font><code>:focus</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">伪类来模拟点击。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的HTML</font></font></strong></p>

<pre><code>&lt;img id="btnLeft" tabindex="0" src="http://placehold.it/250x100" /&gt;
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的CSS</font></font></strong></p>

<pre><code>#btnLeft:focus{<font></font>
    width:70px;<font></font>
    height:74px;<font></font>
}<font></font>
</code></pre>

<p><a href="http://jsfiddle.net/NaTj5/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/NaTj5/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><a href="https://stackoverflow.com/a/32721572/2827823"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TylerH的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回答非常好，我只需要对最后一个按钮版本进行更新即可。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>#btnControl {<font></font>
    display: none;<font></font>
}<font></font>
<font></font>
.btn {<font></font>
    width: 60px;<font></font>
    height: 30px;<font></font>
    background: silver;<font></font>
    border-radius: 5px;<font></font>
    padding: 1px 3px;<font></font>
    box-shadow: 1px 1px 1px #000;<font></font>
    display: block;<font></font>
    text-align: center;<font></font>
    background-image: linear-gradient(to bottom, #f4f5f5, #dfdddd);<font></font>
    font-family: arial;<font></font>
    font-size: 12px;<font></font>
    line-height:30px;<font></font>
}<font></font>
<font></font>
.btn:hover {<font></font>
    background-image: linear-gradient(to bottom, #c3e3fa, #a5defb);<font></font>
}<font></font>
<font></font>
.btn:active {<font></font>
    margin: 1px 1px 0;<font></font>
    box-shadow: -1px -1px 1px #000;<font></font>
    background-image: linear-gradient(to top, #f4f5f5, #dfdddd);<font></font>
}<font></font>
<font></font>
#btnControl:checked + label {<font></font>
    width: 70px;<font></font>
    height: 74px;<font></font>
    line-height: 74px;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;input type="checkbox" id="btnControl"/&gt;<font></font>
&lt;label class="btn" for="btnControl"&gt;Click me!&lt;/label&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯梅小胖</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用伪类</font></font><code>:target</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来模仿点击事件，下面举一个例子。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>#something {<font></font>
  display: none;<font></font>
}<font></font>
<font></font>
#something:target {<font></font>
  display: block;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;a href="#something"&gt;Show&lt;/a&gt;<font></font>
&lt;div id="something"&gt;Bingo!&lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">外观如下：</font><a href="http://jsfiddle.net/TYhnb/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/TYhnb/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/TYhnb/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要注意的一点是，这仅限于超链接，因此，如果您需要在超链接之外的其他应用程序（例如按钮）上使用它，则可能需要对其稍加修改，例如将超链接样式化为按钮。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最接近的是</font></font><a href="https://developer.mozilla.org/en-US/docs/CSS/%3aactive"><code>:active</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>#btnLeft:active {<font></font>
    width: 70px;<font></font>
    height: 74px;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这仅在按住鼠标按钮时才适用。</font><font style="vertical-align: inherit;">应用样式</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使之保持</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> onclick </font><font style="vertical-align: inherit;">的唯一方法</font><font style="vertical-align: inherit;">是使用一些JavaScript。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
