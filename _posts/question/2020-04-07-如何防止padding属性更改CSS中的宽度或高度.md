---
layout: question
title:  如何防止padding属性更改CSS中的宽度或高度？
date:   2020-04-07T03:21:00.000Z
description: 我正在创建一个带有DIV的网站。除了创建DIV之外，其他所有东西都可以解决。我这样创建它们（示例）：newdiv {    width  200px...
img: 
author: 梅
category: question
answer: 6
tags: HTML CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在创建一个带有</font></font><code>DIV</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">网站</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">除了创建DIV之外，其他所有东西都可以解决。</font><font style="vertical-align: inherit;">我这样创建它们（示例）：</font></font></p>

<pre><code>newdiv {<font></font>
    width: 200px;<font></font>
    height: 60px;<font></font>
    padding-left: 20px;<font></font>
    text-align: left;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我添加该</font></font><code>padding-left</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性时，</font></font><code>DIV</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改</font><font style="vertical-align: inherit;">的宽度</font><font style="vertical-align: inherit;">更改为220px，并且我希望它保持在200px。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我创建了另一个</font><font style="vertical-align: inherit;">与完全相同的</font></font><code>DIV</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">名称</font><font style="vertical-align: inherit;">，然后将其放在其中，</font><font style="vertical-align: inherit;">但</font><font style="vertical-align: inherit;">没有填充且</font><font style="vertical-align: inherit;">具有</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我得到同样的东西，其</font><font style="vertical-align: inherit;">宽度将为220px。</font></font><code>anotherdiv</code><font style="vertical-align: inherit;"></font><code>newdiv</code><font style="vertical-align: inherit;"></font><code>newdiv</code><font style="vertical-align: inherit;"></font><code>newdiv</code><font style="vertical-align: inherit;"></font><code>anotherdiv</code><font style="vertical-align: inherit;"></font><code>padding-left: 20px</code><font style="vertical-align: inherit;"></font><code>newdiv</code><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我该如何解决这个问题？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4068篇《如何防止padding属性更改CSS中的宽度或高度？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需将div的宽度更改为160px（如果您的填充为20px，则会为div的宽度增加40px），因此您需要从其宽度中减去40px，以使div看起来正常且不会因其上的额外宽度而失真您的文字全弄乱了。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需添加  </font></font><code>box-sizing: border-box;</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋神奇</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加属性： </font></font></p>

<pre><code>-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */<font></font>
-moz-box-sizing: border-box;    /* Firefox, other Gecko */<font></font>
box-sizing: border-box;         /* Opera/IE 8+ */<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此功能</font><font style="vertical-align: inherit;">在版本8以下的Internet Explorer中</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法使用</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要缩进div中的文本而不更改div的大小，请使用CSS </font></font><code>text-indent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>padding-left</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.indent {<font></font>
  text-indent: 1em;<font></font>
}<font></font>
.border {<font></font>
  border-style: solid;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class="border"&gt;<font></font>
  Non indented<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;br&gt;<font></font>
<font></font>
&lt;div class="border indent"&gt;<font></font>
  Indented<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>width: auto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">在您的newdiv中放置一个div</font></font><code>margin-left: 20px</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从newdiv删除填充。</font></font></p>

<p><a href="http://www.w3.org/TR/CSS2/box.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3 Box模型页面上有很好的信息。</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个</font></font></p>

<pre><code>box-sizing: border-box;
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
