---
layout: question
title:  twitter bootstrap导航栏固定顶部重叠站点
date:   2020-03-23T08:21:17.000Z
description: 我在网站上使用引导程序，并且导航栏固定顶部出现问题。当我只使用常规导航栏时，一切都很好。但是，当我尝试将其切换到导航栏固定顶部时，该网站上的所有其他内容都...
img: 
author: 猴子村村
category: question
answer: 15
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在网站上使用引导程序，并且导航栏固定顶部出现问题。</font><font style="vertical-align: inherit;">当我只使用常规导航栏时，一切都很好。</font><font style="vertical-align: inherit;">但是，当我尝试将其切换到导航栏固定顶部时，该网站上的所有其他内容都会向上移动，就像导航栏不存在并且导航栏与之重叠一样。</font><font style="vertical-align: inherit;">我基本上是这样布置的：</font></font></p>

<pre><code>.navbar.navbar-fixed-top<font></font>
  .navbar-inner<font></font>
    .container<font></font>
.container<font></font>
  .row<font></font>
    //yield content<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图完全复制引导程序示例，但仅在使用navbar fixed top时仍然存在此问题。</font><font style="vertical-align: inherit;">我究竟做错了什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2988篇《twitter bootstrap导航栏固定顶部重叠站点》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋米亚蛋蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是将导航栏包裹在一个 </font></font></p>

<pre><code>&lt;div width="100%"&gt;<font></font>
&lt;div class="nav-? ??"&gt;<font></font>
...<font></font>
&lt;/nav&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有花哨的轨迹，但它起作用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了Nick Bisby的答案，如果您在轨道中使用HAML遇到此问题，并且已在此处应用Roberto Barros的修复程序：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将“ bootstrap_and_overrides.css”中的require替换为：</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">=需要twitter-bootstrap-static / bootstrap.css.erb</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（参见</font></font><a href="https://github.com/seyhunak/twitter-bootstrap-rails/issues/91" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/seyhunak/twitter-bootstrap-rails/issues/91</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...您需要将主体CSS放在</font><font style="vertical-align: inherit;">require语句</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如下所示：</font></font></p>

<pre><code>@import "twitter/bootstrap/bootstrap";<font></font>
body { padding-top: 40px; }<font></font>
@import "twitter/bootstrap/responsive";<font></font>
=require twitter-bootstrap-static/bootstrap.css.erb<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果require语句在正文CSS之前，则它将无效。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会这样做：</font></font></p>

<pre><code>// add appropriate media query if required to target mobile nav only<font></font>
.nav { overflow-y: hidden !important }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这应确保nav块不会拉长页面范围并覆盖页面内容。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您要做的就是 </font></font></p>

<pre><code>@media (min-width: 980px) { body { padding-top: 40px; } } 
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Bootstrap 3. +，我将使用以下CSS来修复基于</font><a href="https://github.com/twbs/bootstrap/issues/1768" rel="nofollow"><font style="vertical-align: inherit;">https://github.com/twbs/bootstrap/issues/1768的</font></a><font style="vertical-align: inherit;"> navbar-fixed-top和锚跳转重叠的问题 
</font></font><a href="https://github.com/twbs/bootstrap/issues/1768" rel="nofollow"><font style="vertical-align: inherit;"></font></a></p>

<pre><code>/* fix fixed-bar */<font></font>
body { padding-top: 40px; }<font></font>
@media screen and (max-width: 768px) {<font></font>
  body { padding-top: 40px; }<font></font>
}<font></font>
<font></font>
/* fix fixed-bar jumping to in-page anchor issue */<font></font>
*[id]:before { <font></font>
  display: block; <font></font>
  content: " "; <font></font>
  margin-top: -75px; <font></font>
  height: 75px; <font></font>
  visibility: hidden; <font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在nav标签内使用此类</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">class =“ navbar navbar-expand-lg navbar-light bg-light </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sticky-top</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于bootstrap 4</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如我在类似问题中发布的那样，我在真正的固定导航栏之前创建了一个虚拟的非固定导航栏取得了成功。</font></font></p>

<pre><code>&lt;nav class="navbar navbar-default"&gt;&lt;/nav&gt; &lt;!-- Dummy nav bar --&gt;<font></font>
&lt;nav class="navbar navbar-default navbar-fixed-top"&gt; &lt;!-- Real nav bar --&gt;<font></font>
    &lt;!-- Nav bar details --&gt;<font></font>
&lt;/nav&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该间距在所有屏幕尺寸上都非常合适。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只要改变</font></font><code>fixed-top</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用</font></font><code>sticky-top</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这样，您就不必计算填充。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
而且有效！！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Tony</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 4的解决方案在我的所有项目中均能完美运行：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从更改第一行</font></font></p>

<pre><code>navbar-fixed-top
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至</font></font></p>

<pre><code>sticky-top
</code></pre>

<p><a href="https://getbootstrap.com/docs/4.0/utilities/position/#sticky-top" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap文档参考</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大概他们做对了：D</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题在于navbar-fixed-top，除非指定正文填充，否则它将覆盖您的内容。</font><font style="vertical-align: inherit;">在100％的情况下，此处提供的解决方案均无效。</font><font style="vertical-align: inherit;">页面加载后，JQuery解决方案使页面闪烁/移动，这看起来很奇怪。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我而言，真正的解决方案不是使用navbar-fixed-top，而是使用navbar-static-top。</font></font></p>

<pre><code>.navbar { margin-bottom:0px;} //for jumtron support, see http://stackoverflow.com/questions/23911242/gap-between-navbar-and-jumbotron<font></font>
<font></font>
&lt;nav class="navbar navbar-inverse navbar-static-top"&gt;<font></font>
...<font></font>
&lt;/nav&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如其他人所说，在身体上添加填充顶部效果很好。</font><font style="vertical-align: inherit;">但是，当您使屏幕变窄（以手机宽度为单位）时，导航栏和机身之间会出现间隙。</font><font style="vertical-align: inherit;">同样，拥挤的导航栏可以包装到多行栏，再次覆盖部分内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这为我解决了这类问题</font></font></p>

<pre><code>body { padding-top: 40px; }<font></font>
@media screen and (max-width: 768px) {<font></font>
    body { padding-top: 0px; }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，这会产生40px的填充，而在768px宽度以下时会填充0px（根据bootstrap的文档，这是将在其中创建间隙的手机布局截止点）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的答案是正确的</font></font><a href="http://getbootstrap.com/components/#navbar-fixed-top" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">docs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要身体填充</font></font></h3>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">固定的导航栏将覆盖您的其他内容，除非您将其添加</font></font><code>padding</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到的顶部</font></font><code>&lt;body&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">试用您自己的值或使用下面的代码段。</font><font style="vertical-align: inherit;">提示：默认情况下，导航栏的高度为50px。</font></font></p>

<pre><code>body { padding-top: 70px; }
</code></pre>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保</font><font style="vertical-align: inherit;">在核心Bootstrap CSS </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加此名称</font><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 4文档中...</font></font></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">固定的导航栏使用位置：固定，这意味着它们是从DOM的正常流程中拉出的，并且可能需要自定义CSS（例如上的padding-top）以防止与其他元素重叠。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题是已知的，并且在twitter引导站点中有一种解决方法：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">粘贴导航栏时，请记住要考虑其下方的隐藏区域。</font><font style="vertical-align: inherit;">向中添加40px或更多的填充</font></font><code>&lt;body&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">确保将其添加到核心Bootstrap CSS之后以及可选的响应CSS之前。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这为我工作：</font></font></p>

<pre><code>body { padding-top: 40px; }
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我把它放在yield容器之前：</font></font></p>

<pre><code>&lt;div id="fix-for-navbar-fixed-top-spacing" style="height: 42px;"&gt;&amp;nbsp;&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢这种方法，因为它记录了使其工作所需的hack，此外它还适用于移动导航。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑-效果更好：</font></font></p>

<pre><code>@media (min-width: 980px) {<font></font>
  body {<font></font>
    padding-top: 60px;<font></font>
    padding-bottom: 42px;<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个更方便的解决方案供您参考，它在我的所有项目中都非常完美：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从更改第一行</font></font></p>

<pre><code>.navbar.navbar-fixed-top
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至</font></font></p>

<pre><code>.navbar.navbar-default.navbar-static-top
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
