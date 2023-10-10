---
layout: question
title:  禁用“输入”文本标签的自动缩放-iPhone上的Safari
date:   2020-03-19T02:45:21.000Z
description: 我制作了一个带有<input>标记的HTML页面type="text"。当我使用iPhone上的Safari单击它时，页面变大（自动缩放）。有人知道如何禁...
img: 
author: 小小十三泡芙
category: question
answer: 12
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我制作了一个带有</font></font><code>&lt;input&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">的HTML页面</font></font><code>type="text"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当我使用iPhone上的Safari单击它时，页面变大（自动缩放）。</font><font style="vertical-align: inherit;">有人知道如何禁用此功能吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐猴子</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p>Here is a hack I used on one of my projects:</p>

<pre><code>select {<font></font>
    font-size: 2.6rem; // 1rem = 10px<font></font>
    ...<font></font>
    transform-origin: ... ...;<font></font>
    transform: scale(0.5) ...;<font></font>
}<font></font>
</code></pre>

<p>Ended up with the initial styles and scale I wanted but no zoom on focus. </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin神奇宝儿</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p>By the way, if you use <strong>Bootstrap</strong>, you can just use this variant:</p>

<pre><code>.form-control {<font></font>
  font-size: 16px;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村卡卡西</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p>After a while of while trying I came up with this solution</p>

<pre class="lang-js prettyprint-override"><code>// set font-size to 16px to prevent zoom <font></font>
input.addEventListener("mousedown", function (e) {<font></font>
  e.target.style.fontSize = "16px";<font></font>
});<font></font>
<font></font>
// change font-size back to its initial value so the design will not break<font></font>
input.addEventListener("focus", function (e) {<font></font>
  e.target.style.fontSize = "";<font></font>
});<font></font>
</code></pre>



<p>On "mousedown" it sets font-size of input to 16px. This will prevent the zooming. On focus event it changes font-size back to initial value. </p>

<p>Unlike solutions posted before, this will let you set the font-size of the input to whatever you want.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green猿</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p>After reading almost every single line here and testing the various solutions, this is, thanks to all who shared their solutions, what I came up with, tested and working for me on iPhone 7 iOS 10.x :</p>

<pre><code>@media screen and (-webkit-min-device-pixel-ratio:0) {<font></font>
    input[type="email"]:hover,<font></font>
    input[type="number"]:hover,<font></font>
    input[type="search"]:hover,<font></font>
    input[type="text"]:hover,<font></font>
    input[type="tel"]:hover,<font></font>
    input[type="url"]:hover,<font></font>
    input[type="password"]:hover,<font></font>
    textarea:hover,<font></font>
    select:hover{font-size: initial;}<font></font>
}<font></font>
@media (min-width: 768px) {<font></font>
    input[type="email"]:hover,<font></font>
    input[type="number"]:hover,<font></font>
    input[type="search"]:hover,<font></font>
    input[type="text"]:hover,<font></font>
    input[type="tel"]:hover,<font></font>
    input[type="url"]:hover,<font></font>
    input[type="password"]:hover,<font></font>
    textarea:hover,<font></font>
    select:hover{font-size: inherit;}<font></font>
}<font></font>
</code></pre>

<p>It has some cons, though, noticeably a "jump" as result of the quick font size change occuring between the "hover"ed and "focus"ed states - and the redraw impact on performance</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p>This worked for me:</p>

<pre><code>input, textarea {<font></font>
    font-size: initial;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry蛋蛋Eva</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p>Add <strong>user-scalable=0</strong> to viewport meta as following</p>

<pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"&gt;
</code></pre>

<p>Worked for me :)</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva飞云</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p>I recently (today :D) had to integrate this behavior. In order to not impact the original design fields, including combo, I opted to apply the transformation at the focus of the field:</p>

<pre><code>input[type="text"]:focus, input[type="password"]:focus,<font></font>
textarea:focus, select:focus {<font></font>
  font-size: 16px;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子神奇</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决此问题的正确方法是将元视口更改为：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇伽罗Itachi</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总之，答案是：将表单元素的字体大小设置为至少16px</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Eva西门</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的网站是为移动设备设计的，则可以决定不允许扩展。</font></font></p>

<pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这解决了您的移动页面或表单将“浮动”的问题。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green达蒙Harry</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><pre><code>@media screen and (-webkit-min-device-pixel-ratio:0) { <font></font>
  select:focus,<font></font>
  textarea:focus,<font></font>
  input:focus {<font></font>
    font-size: 16px;<font></font>
    background: #eee;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新增：IOS仍会缩放，除非您在输入中使用16px且没有焦点。</font></font></h2>

<pre><code>@media screen and (-webkit-min-device-pixel-ratio:0) { <font></font>
  select,<font></font>
  textarea,<font></font>
  input {<font></font>
    font-size: 16px;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我添加了背景，因为IOS在选择中未添加任何背景。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞小胖</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p>You can prevent Safari from automatically zooming in on text fields during user input <strong>without</strong> disabling the user’s ability to pinch zoom. Just add <code>maximum-scale=1</code> but leave out the user-scale attribute suggested in other answers.</p>

<p>It is a worthwhile option if you have a form in a layer that “floats” around if zoomed, which can cause important UI elements to move off screen.</p>

<p><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"&gt;</code></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
