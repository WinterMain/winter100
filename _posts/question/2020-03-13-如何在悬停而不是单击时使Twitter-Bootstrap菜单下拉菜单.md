---
layout: question
title:  如何在悬停而不是单击时使Twitter Bootstrap菜单下拉菜单
date:   2020-03-13T12:32:55.000Z
description: 我想让我的Bootstrap菜单在悬停时自动下拉，而不是必须单击菜单标题。我也想丢掉菜单标题旁边的小箭头。...
img: 
author: 神乐Jim
category: question
answer: 13
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想让我的Bootstrap菜单在悬停时自动下拉，而不是必须单击菜单标题。</font><font style="vertical-align: inherit;">我也想丢掉菜单标题旁边的小箭头。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1558篇《如何在悬停而不是单击时使Twitter Bootstrap菜单下拉菜单》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Pro</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>This works for WordPress Bootstrap:</p>

<pre><code>.navbar .nav &gt; li &gt; .dropdown-menu:after,<font></font>
.navbar .nav &gt; li &gt; .dropdown-menu:before {<font></font>
    content: none;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖LEY西门</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>The very simple solution for version 2, only CSS.
Keeps the same friendly functionality for mobile and tablet.</p>

<pre><code>@media (min-width: 980px) {<font></font>
    .dropdown:hover .dropdown-menu {<font></font>
       display: block;<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西神奇</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果下拉菜单和插入符号小于平板电脑，则应该隐藏下拉菜单和插入符号。</font></font></p>

<pre><code>@media (max-width: 768px) {<font></font>
    .navbar ul.dropdown-menu, .navbar li.dropdown b.caret {<font></font>
        display: none;<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪阿飞</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将隐藏起来</font></font></p>

<pre><code>.navbar .dropdown-menu:before {<font></font>
   display:none;<font></font>
}<font></font>
.navbar .dropdown-menu:after {<font></font>
   display:none;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞蛋蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还添加了margin-top：0来重置.dropdown-menu的引导CSS边距，因此当用户从下拉菜单缓慢移至菜单列表时，菜单列表不会消失。</font></font></p>

<pre><code>ul.nav li.dropdown:hover &gt; ul.dropdown-menu {<font></font>
    display: block;    <font></font>
}<font></font>
<font></font>
.nav .dropdown-menu {<font></font>
    margin-top: 0;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green老丝Itachi</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能是一个愚蠢的主意，但是只要删除指向下方的箭头，您可以删除</font></font></p>

<pre><code>&lt;b class="caret"&gt;&lt;/b&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这对于向上的指针没有任何作用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪西门</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这为我工作：</font></font></p>

<pre><code>.dropdown:hover .dropdown-menu {<font></font>
    display: block;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是想添加一下，如果您有多个下拉菜单（就像我一样），您应该写：</font></font></p>

<pre><code>ul.nav li.dropdown:hover &gt; ul.dropdown-menu {<font></font>
    display: block;    <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且它将正常工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是Bootstrap 3内置的。只需将其添加到CSS中即可：</font></font></p>

<pre><code>.dropdown:hover .dropdown-menu {<font></font>
display: block;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三SamJim</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我基于最新的（v2.0.2）Bootstrap框架创建了一个纯悬停下拉菜单，该框架具有多个子菜单的支持，并认为我会将其发布给以后的用户：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>body {<font></font>
  padding-top: 60px;<font></font>
  padding-bottom: 40px;<font></font>
}<font></font>
<font></font>
.sidebar-nav {<font></font>
  padding: 9px 0;<font></font>
}<font></font>
<font></font>
.dropdown-menu .sub-menu {<font></font>
  left: 100%;<font></font>
  position: absolute;<font></font>
  top: 0;<font></font>
  visibility: hidden;<font></font>
  margin-top: -1px;<font></font>
}<font></font>
<font></font>
.dropdown-menu li:hover .sub-menu {<font></font>
  visibility: visible;<font></font>
}<font></font>
<font></font>
.dropdown:hover .dropdown-menu {<font></font>
  display: block;<font></font>
}<font></font>
<font></font>
.nav-tabs .dropdown-menu,<font></font>
.nav-pills .dropdown-menu,<font></font>
.navbar .dropdown-menu {<font></font>
  margin-top: 0;<font></font>
}<font></font>
<font></font>
.navbar .sub-menu:before {<font></font>
  border-bottom: 7px solid transparent;<font></font>
  border-left: none;<font></font>
  border-right: 7px solid rgba(0, 0, 0, 0.2);<font></font>
  border-top: 7px solid transparent;<font></font>
  left: -7px;<font></font>
  top: 10px;<font></font>
}<font></font>
<font></font>
.navbar .sub-menu:after {<font></font>
  border-top: 6px solid transparent;<font></font>
  border-left: none;<font></font>
  border-right: 6px solid #fff;<font></font>
  border-bottom: 6px solid transparent;<font></font>
  left: 10px;<font></font>
  top: 11px;<font></font>
  left: -6px;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/css/bootstrap.min.css" rel="stylesheet" /&gt;<font></font>
<font></font>
&lt;div class="navbar navbar-fixed-top"&gt;<font></font>
  &lt;div class="navbar-inner"&gt;<font></font>
    &lt;div class="container-fluid"&gt;<font></font>
      &lt;a data-target=".nav-collapse" data-toggle="collapse" class="btn btn-navbar"&gt;<font></font>
        &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
        &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
        &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
      &lt;/a&gt;<font></font>
      &lt;a href="#" class="brand"&gt;Project name&lt;/a&gt;<font></font>
      &lt;div class="nav-collapse"&gt;<font></font>
        &lt;ul class="nav"&gt;<font></font>
          &lt;li class="active"&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;<font></font>
          &lt;li&gt;&lt;a href="#"&gt;Link&lt;/a&gt;&lt;/li&gt;<font></font>
          &lt;li&gt;&lt;a href="#"&gt;Link&lt;/a&gt;&lt;/li&gt;<font></font>
          &lt;li&gt;&lt;a href="#"&gt;Link&lt;/a&gt;&lt;/li&gt;<font></font>
          &lt;li class="dropdown"&gt;<font></font>
            &lt;a data-toggle="dropdown" class="dropdown-toggle" href="#"&gt;Dropdown &lt;b class="caret"&gt;&lt;/b&gt;&lt;/a&gt;<font></font>
            &lt;ul class="dropdown-menu"&gt;<font></font>
              &lt;li&gt;<font></font>
                &lt;a href="#"&gt;2-level Dropdown &lt;i class="icon-arrow-right"&gt;&lt;/i&gt;&lt;/a&gt;<font></font>
                &lt;ul class="dropdown-menu sub-menu"&gt;<font></font>
                  &lt;li&gt;&lt;a href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;<font></font>
                  &lt;li&gt;&lt;a href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;<font></font>
                  &lt;li&gt;&lt;a href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;<font></font>
                  &lt;li class="divider"&gt;&lt;/li&gt;<font></font>
                  &lt;li class="nav-header"&gt;Nav header&lt;/li&gt;<font></font>
                  &lt;li&gt;&lt;a href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;<font></font>
                  &lt;li&gt;&lt;a href="#"&gt;One more separated link&lt;/a&gt;&lt;/li&gt;<font></font>
                &lt;/ul&gt;<font></font>
              &lt;/li&gt;<font></font>
              &lt;li&gt;&lt;a href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;<font></font>
              &lt;li&gt;&lt;a href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;<font></font>
              &lt;li class="divider"&gt;&lt;/li&gt;<font></font>
              &lt;li class="nav-header"&gt;Nav header&lt;/li&gt;<font></font>
              &lt;li&gt;&lt;a href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;<font></font>
              &lt;li&gt;&lt;a href="#"&gt;One more separated link&lt;/a&gt;&lt;/li&gt;<font></font>
            &lt;/ul&gt;<font></font>
          &lt;/li&gt;<font></font>
        &lt;/ul&gt;<font></font>
        &lt;form action="" class="navbar-search pull-left"&gt;<font></font>
          &lt;input type="text" placeholder="Search" class="search-query span2"&gt;<font></font>
        &lt;/form&gt;<font></font>
        &lt;ul class="nav pull-right"&gt;<font></font>
          &lt;li&gt;&lt;a href="#"&gt;Link&lt;/a&gt;&lt;/li&gt;<font></font>
          &lt;li class="divider-vertical"&gt;&lt;/li&gt;<font></font>
          &lt;li class="dropdown"&gt;<font></font>
            &lt;a class="#" href="#"&gt;Menu&lt;/a&gt;<font></font>
          &lt;/li&gt;<font></font>
        &lt;/ul&gt;<font></font>
      &lt;/div&gt;<font></font>
      &lt;!-- /.nav-collapse --&gt;<font></font>
    &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;hr&gt;<font></font>
<font></font>
&lt;ul class="nav nav-pills"&gt;<font></font>
  &lt;li class="active"&gt;&lt;a href="#"&gt;Regular link&lt;/a&gt;&lt;/li&gt;<font></font>
  &lt;li class="dropdown"&gt;<font></font>
    &lt;a href="#" data-toggle="dropdown" class="dropdown-toggle"&gt;Dropdown &lt;b class="caret"&gt;&lt;/b&gt;&lt;/a&gt;<font></font>
    &lt;ul class="dropdown-menu" id="menu1"&gt;<font></font>
      &lt;li&gt;<font></font>
        &lt;a href="#"&gt;2-level Menu &lt;i class="icon-arrow-right"&gt;&lt;/i&gt;&lt;/a&gt;<font></font>
        &lt;ul class="dropdown-menu sub-menu"&gt;<font></font>
          &lt;li&gt;&lt;a href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;<font></font>
          &lt;li&gt;&lt;a href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;<font></font>
          &lt;li&gt;&lt;a href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;<font></font>
          &lt;li class="divider"&gt;&lt;/li&gt;<font></font>
          &lt;li class="nav-header"&gt;Nav header&lt;/li&gt;<font></font>
          &lt;li&gt;&lt;a href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;<font></font>
          &lt;li&gt;&lt;a href="#"&gt;One more separated link&lt;/a&gt;&lt;/li&gt;<font></font>
        &lt;/ul&gt;<font></font>
      &lt;/li&gt;<font></font>
      &lt;li&gt;&lt;a href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;<font></font>
      &lt;li&gt;&lt;a href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;<font></font>
      &lt;li class="divider"&gt;&lt;/li&gt;<font></font>
      &lt;li&gt;&lt;a href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;<font></font>
    &lt;/ul&gt;<font></font>
  &lt;/li&gt;<font></font>
  &lt;li class="dropdown"&gt;<font></font>
    &lt;a href="#"&gt;Menu&lt;/a&gt;<font></font>
  &lt;/li&gt;<font></font>
  &lt;li class="dropdown"&gt;<font></font>
    &lt;a href="#"&gt;Menu&lt;/a&gt;<font></font>
  &lt;/li&gt;<font></font>
&lt;/ul&gt;</code></pre>
</div>
</div>
<p></p>

<p><a href="http://jsfiddle.net/2Smgv/3100/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示版</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁A</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了“我的头疼”的答案（很棒）之外：</font></font></p>

<pre><code>ul.nav li.dropdown:hover ul.dropdown-menu{<font></font>
    display: block;    <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有两个长期存在的问题：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击下拉链接将打开下拉菜单。</font><font style="vertical-align: inherit;">除非用户单击其他位置或将鼠标悬停在其上以创建笨拙的UI，否则它将保持打开状态。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下拉链接和下拉菜单之间有1px的边距。</font><font style="vertical-align: inherit;">如果您在下拉菜单和下拉菜单之间缓慢移动，则会导致下拉菜单隐藏。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（1）的解决方案是从导航链接中删除“类”和“数据切换”元素</font></font></p>

<pre><code>&lt;a href="#"&gt;<font></font>
     Dropdown<font></font>
     &lt;b class="caret"&gt;&lt;/b&gt;<font></font>
&lt;/a&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也使您能够创建到父页面的链接-使用默认实现是不可能的。</font><font style="vertical-align: inherit;">您可以将“＃”替换为要发送给用户的任何页面。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（2）的解决方案是删除.dropdown-menu选择器上的margin-top</font></font></p>

<pre><code>.navbar .dropdown-menu {<font></font>
 margin-top: 0px;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro番长</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使菜单自动悬停，可以使用基本CSS来实现。</font><font style="vertical-align: inherit;">您需要将选择器设计为隐藏菜单选项，然后将其</font></font><code>li</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">悬停在</font><font style="vertical-align: inherit;">适当的</font><font style="vertical-align: inherit;">标签上</font><font style="vertical-align: inherit;">时将其设置为显示为块</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">以twitter引导页面为例，选择器如下：</font></font></p>

<pre class="lang-css prettyprint-override"><code>ul.nav li.dropdown:hover &gt; ul.dropdown-menu {<font></font>
    display: block;    <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果使用的是Bootstrap的响应功能，则不希望在折叠的导航栏（在较小的屏幕上）上使用此功能。</font><font style="vertical-align: inherit;">为避免这种情况，请将以上代码包装在媒体查询中：</font></font></p>

<pre><code>@media (min-width: 979px) {<font></font>
  ul.nav li.dropdown:hover &gt; ul.dropdown-menu {<font></font>
    display: block;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要隐藏箭头（插入符号），这取决于您使用的是Twitter Bootstrap版本2或更低版本，还是版本3：</font></font></p>

<p><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引导程序3</font></font></b></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要删除版本3中的插入符号，您只需</font></font><code>&lt;b class="caret"&gt;&lt;/b&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要从</font></font><code>.dropdown-toggle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">anchor元素中</font><font style="vertical-align: inherit;">删除HTML </font><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;a class="dropdown-toggle" data-toggle="dropdown" href="#"&gt;<font></font>
    Dropdown<font></font>
    &lt;b class="caret"&gt;&lt;/b&gt;    &lt;-- remove this line<font></font>
&lt;/a&gt;<font></font>
</code></pre>

<p><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 2及更低</font></font></b></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要删除版本2中的插入符号，您需要对CSS有更多的了解，我建议您</font></font><code>:after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更详细地</font><font style="vertical-align: inherit;">了解</font><font style="vertical-align: inherit;">伪元素的工作方式。</font><font style="vertical-align: inherit;">为了使您开始理解，定位并删除twitter bootstrap示例中的箭头，可以使用以下CSS选择器和代码：</font></font></p>

<pre class="lang-css prettyprint-override"><code>a.menu:after, .dropdown-toggle:after {<font></font>
    content: none;<font></font>
}<font></font>
</code></pre>

<p>It will work in your favour if you look further into how these work and not just use the answers that I have given you.</p>

<p><strong><em>Thanks to @CocaAkat for pointing out that we were missing the "&gt;" child combinator to prevent sub menus being shown on the parent hover</em></strong></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小仲羽</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需用三行代码自定义CSS样式</font></font></p>

<pre><code>.dropdown:hover .dropdown-menu {<font></font>
   display: block;<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
