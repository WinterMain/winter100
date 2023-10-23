---
layout: question
title:  禁用/启用按钮和链接的最简单方法是什么（jQuery + Bootstrap）
date:   2020-03-20T05:20:25.000Z
description: 有时我使用样式设置为按钮的锚，有时我仅使用按钮。我想禁用特定的clicky-thing，以便：他们看起来很残疾他们不再被点击我怎样才能做到这...
img: 
author: 村村番长
category: question
answer: 5
tags: jQuery CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时我使用样式设置为按钮的锚，有时我仅使用按钮。</font><font style="vertical-align: inherit;">我想禁用特定的clicky-thing，以便：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们看起来很残疾</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们不再被点击</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我怎样才能做到这一点？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2478篇《禁用/启用按钮和链接的最简单方法是什么（jQuery + Bootstrap）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam小哥Tom</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您在页面上有这些按钮，例如：</font></font></p>

<pre><code>&lt;input type="submit" class="byBtn" disabled="disabled" value="Change"/&gt;<font></font>
&lt;input type="submit" class="byBtn" disabled="disabled" value="Change"/&gt;<font></font>
&lt;input type="submit" class="byBtn" disabled="disabled" value="Change"/&gt;<font></font>
&lt;input type="submit" class="byBtn" disabled="disabled" value="Change"/&gt;<font></font>
&lt;input type="submit" class="byBtn" disabled="disabled" value="Change"/&gt;<font></font>
&lt;input type="submit"value="Enable All" onclick="change()"/&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">js代码：</font></font></p>

<pre><code>function change(){<font></font>
   var toenable = document.querySelectorAll(".byBtn");        <font></font>
    for (var k in toenable){<font></font>
         toenable[k].removeAttribute("disabled");<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam小哥逆天</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个比较晚的答案，但是我偶然发现了这个问题，同时在寻找一种方法来单击单击后可能禁用boostrap按钮并可能添加一个不错的效果（例如微调器）。</font><font style="vertical-align: inherit;">我找到了一个很好的库，它确实做到了：</font></font></p>

<p><a href="http://msurguy.github.io/ladda-bootstrap/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://msurguy.github.io/ladda-bootstrap/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需包括所需的CSS和JS，向按钮添加一些属性，然后使用javascript启用lada。</font><font style="vertical-align: inherit;">您的按钮焕然一新（请查看演示以了解它的美丽）！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥TomA</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道我的答案来晚了，但是IMO这是切换“启用”和“禁用”按钮的最简单方法</font></font></p>

<pre><code>function toggleButtonState(button){<font></font>
<font></font>
  //If button is enabled, -&gt; Disable<font></font>
  if (button.disabled === false) {<font></font>
    button.disabled = true;<font></font>
<font></font>
  //If button is disabled, -&gt; Enable<font></font>
  } else if (button.disabled === true) {<font></font>
    button.disabled = false;<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥前端</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于这种行为，我始终使用jQueryUI </font></font><code>button</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小部件，将其用于链接和按钮。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML中定义标签：</font></font></p>

<pre><code>&lt;button id="sampleButton"&gt;Sample Button&lt;/button&gt;<font></font>
&lt;a id="linkButton" href="yourHttpReferenceHere"&gt;Link Button&lt;/a&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用jQuery初始化按钮：</font></font></p>

<pre><code>$("#sampleButton").button();<font></font>
$("#linkButton").button();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>button</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小部件方法来禁用/启用它们：</font></font></p>

<pre><code>$("#sampleButton").button("enable"); //enable the button<font></font>
$("#linkButton").button("disable"); //disable the button<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将解决按钮和光标的行为，但是如果您需要更深入地了解并在禁用时更改按钮样式，请覆盖页面CSS样式文件中的以下CSS类。</font></font></p>

<pre><code>.ui-state-disabled,<font></font>
.ui-widget-content .ui-state-disabled,<font></font>
.ui-widget-header .ui-state-disabled {<font></font>
      background-color:aqua;<font></font>
      color:black;<font></font>
 }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是请记住：那些CSS类（如果已更改）也将更改其他小部件的样式。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro神奇</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道我晚会晚了，但要具体回答两个问题：</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“我只想禁用特定的clicky-thing，以便：</font></font></em></p>

<ul>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们停止点击</font></font></em></li>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们看起来很残疾</font></font></em></li>
</ul>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这有多难？”</font></font></em></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们停止点击</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.对于像</font></font><code>&lt;button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或的</font><font style="vertical-align: inherit;">按钮</font><font style="vertical-align: inherit;">，</font></font><code>&lt;input type="button"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您添加属性：</font></font><code>disabled</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;button type="submit" disabled&gt;Register&lt;/button&gt;<font></font>
&lt;input type="button" value="Register" disabled&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.对于链接，任何链接...实际上，任何HTML元素，都可以使用CSS3 </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指针事件</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>.selector { pointer-events:none; }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当今最先进的技术（14/12/5）对浏览器对指针事件的支持非常棒。</font><font style="vertical-align: inherit;">但是我们通常必须在IE领域中支持旧版浏览器，因此IE10及以下版本不支持指针事件：</font></font><a href="http://caniuse.com/pointer-events" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="http://caniuse.com/pointer-events" rel="noreferrer"><font style="vertical-align: inherit;">//caniuse.com/pointer-events</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，使用此处其他人提到的JavaScript解决方案之一可能是旧版浏览器的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关指针事件的更多信息：</font></font></p>

<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/Web/CSS/pointer-events</font></font></a></li>
<li><a href="http://wiki.csswg.org/spec/css4-ui#pointer-events" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://wiki.csswg.org/spec/css4-ui#pointer-events</font></font></a></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们看起来很残疾</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，这是一个CSS答案，因此： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.对于类似</font></font><code>&lt;button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>&lt;input type="button"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>[attribute]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择器的</font><font style="vertical-align: inherit;">按钮</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>button[disabled] { ... }<font></font>
<font></font>
input[type=button][disabled] { ... }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个基本的演示，其中包含我在这里提到的内容：</font><strong><a href="http://jsfiddle.net/bXm5B/4/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a></strong><font style="vertical-align: inherit;"> : </font></font><strong><a href="http://jsfiddle.net/bXm5B/4/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/bXm5B/4/</font></font></a></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
