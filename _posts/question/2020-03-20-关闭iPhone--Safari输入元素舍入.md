---
layout: question
title:  关闭iPhone / Safari输入元素舍入
date:   2020-03-20T05:14:27.000Z
description: 我的网站在iPhone / Safari浏览器上的呈现效果很好，但有一个例外：我的文本输入字段具有怪异的圆形样式，与我的网站的其余部分完全不一样。有没...
img: 
author: 番长樱梅
category: question
answer: 11
tags: html CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的网站在iPhone / Safari浏览器上的呈现效果很好，但有一个例外：我的文本输入字段具有怪异的圆形样式，与我的网站的其余部分完全不一样。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以指示Safari（通过CSS或元数据）不对输入字段进行舍入并按预期将其呈现为矩形？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2471篇《关闭iPhone / Safari输入元素舍入》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了在Safari和其他浏览器上正确呈现按钮，除了将webkit-appearance设置为none之外，您还需要为按钮提供特定的样式，例如：</font></font></p>

<pre><code>border-radius: 0;<font></font>
-webkit-appearance: none;<font></font>
background-image: linear-gradient(to bottom, #e4e4e4, #f7f7f7);<font></font>
border: 1px solid #afafaf<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green小哥Tom</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用了一个简单的border-radius：0; </font><font style="vertical-align: inherit;">删除文本输入类型的圆角。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid前端LEY</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请试试这个：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font><code>input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">CSS：</font></font></p>

<pre><code> -webkit-appearance: none;<font></font>
       border-radius: 0;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A逆天猿</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用normalize.css，则该样式表将执行</font></font><code>input[type="search"] { -webkit-appearance: textfield; }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它比单个类选择器具有更高的特异性</font></font><code>.foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此请注意，这样做不能做到</font></font><code>.my-field { -webkit-appearance: none; }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果您没有更好的方法来实现正确的特异性，这将有帮助：</font></font></p>

<p><code>.my-field { -webkit-appearance: none !important; }</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimProL</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有同样的问题，但仅适用于提交按钮。</font><font style="vertical-align: inherit;">需要去除内部阴影和圆角-</font></font></p>

<pre><code>input[type="submit"] { -webkit-appearance:none; -webkit-border-radius:0; }
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L前端</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于我在iPhone 3GS上的iOS 5.1.1而言，我必须清除搜索字段的样式并将其设置为预期的样式</font></font></p>

<pre><code>input[type="search"] {-webkit-appearance: none; border-radius: 0 3px 3px 0;}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则</font></font><code>-webkit-border-radius: 0;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单单没有明确的原生样式。</font><font style="vertical-align: inherit;">这也是本机应用程序上的Webview。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidPro</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是Compass（SCSS）的完整解决方案：</font></font></p>

<pre><code>input {<font></font>
  -webkit-appearance: none;  // remove shadow in iOS<font></font>
  @include border-radius(0);  // remove border-radius in iOS<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥猿</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接受的答案使单选按钮在Chrome上消失。</font><font style="vertical-align: inherit;">这有效：</font></font></p>

<pre><code>input:not([type="radio"]):not([type="checkbox"]) {<font></font>
    -webkit-appearance: none;<font></font>
    border-radius: 0;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是删除IOS中四舍五入的最佳方法。</font></font></p>

<pre><code>textarea,<font></font>
input[type="text"],<font></font>
input[type="button"],<font></font>
input[type="submit"] {<font></font>
     -webkit-appearance: none;<font></font>
     border-radius: 0;<font></font>
}<font></font>
</code></pre>

<p><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请不要将此代码用于“选择选项”。</font><font style="vertical-align: inherit;">这将在我们选择的问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天前端</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在iOS 5及更高版本上，出色</font></font><code>border-radius</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的技巧可以达到以下目的：</font></font></p>

<pre class="lang-css prettyprint-override"><code>input {<font></font>
    border-radius: 0;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果必须仅在iOS上删除圆角，否则由于某些原因不能在跨平台标准化圆角，请改用prefixed </font></font><code>-webkit-border-radius</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，该属性仍受支持。</font><font style="vertical-align: inherit;">当然，请注意，Apple可以随时选择放弃对prefix属性的支持，但是考虑到其其他特定于平台的CSS功能，他们会保留它的机会。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在旧版中，您必须设置</font></font><code>-webkit-appearance: none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-css prettyprint-override"><code>input {<font></font>
    -webkit-appearance: none;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomAL</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><code>input -webkit-appearance: none;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 独自行不通。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font><code>-webkit-border-radius:0px;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外添加。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
