---
layout: question
title:  具有左，中或右对齐项的Bootstrap NavBar
date:   2020-03-19T04:09:20.000Z
description: 在Bootstrap中，最简单的平台创建导航栏的方法是在左侧显示徽标A，在中央显示菜单项，在右侧显示徽标B。这是到目前为止我尝试过的方法，最终将它们对...
img: 
author: 伽罗GreenNear
category: question
answer: 8
tags: HTML CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，最简单的平台创建导航栏的方法是在左侧显示徽标A，在中央显示菜单项，在右侧显示徽标B。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是到目前为止我尝试过的方法，最终将它们对齐，以便徽标A在左侧，菜单项在徽标旁边在左侧，徽标B在右侧。</font></font></p>

<pre><code>&lt;div class="navbar navbar-fixed-top navbar-custom "&gt;<font></font>
  &lt;div class="container" &gt;<font></font>
    &lt;div class="navbar-header"&gt;<font></font>
      &lt;button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"&gt;<font></font>
        &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
        &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
        &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
      &lt;/button&gt;<font></font>
      &lt;a class="navbar-brand" href="#"&gt;&lt;span class="navbar-logo"&gt;Logo_A&lt;/span&gt;&lt;/a&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div class="collapse navbar-collapse"&gt;<font></font>
      &lt;ul class="nav navbar-nav"&gt;<font></font>
        &lt;li class="active"&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;<font></font>
        &lt;li&gt;&lt;a href="#about"&gt;Menu Item 1&lt;/a&gt;&lt;/li&gt;<font></font>
        &lt;li&gt;&lt;a href="#contact"&gt;Menu Item 2&lt;/a&gt;&lt;/li&gt;<font></font>
        &lt;li&gt;&lt;a href="#about"&gt;Menu Item 3&lt;/a&gt;&lt;/li&gt;<font></font>
      &lt;/ul&gt;<font></font>
      &lt;ul class="nav navbar-nav navbar-right"&gt;<font></font>
        &lt;li&gt;&lt;a href="#"&gt;&lt;img src="images/Logo_B.png" class="img-responsive"&gt;&lt;/a&gt;&lt;/li&gt;<font></font>
      &lt;/ul&gt;<font></font>
    &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2346篇《具有左，中或右对齐项的Bootstrap NavBar》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小宇宙凯</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的解决方案：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需将其</font></font><code>navbar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分为几列即可：例如，如果您总共有24列，则12个将为空，而12个将限制导航栏：</font></font></p>

<pre><code>&lt;nav class="navbar navbar-default"&gt;<font></font>
    &lt;div class="row"&gt;<font></font>
       &lt;div class="col-sm-4"&gt;&lt;/div&gt;<font></font>
       &lt;div class="col-sm-4"&gt;&lt;/div&gt;<font></font>
       &lt;div class="col-sm-4"&gt;&lt;/div&gt;<font></font>
<font></font>
       &lt;div class="col-sm-12"&gt;<font></font>
           &lt;ul class="nav navbar-nav" align="center"&gt;<font></font>
              &lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;<font></font>
              &lt;li&gt;&lt;a href="#"&gt;First Link&lt;/a&gt;&lt;/li&gt;<font></font>
              &lt;li&gt;&lt;a href="#"&gt;Second Link&lt;/a&gt;&lt;/li&gt;<font></font>
              &lt;li&gt;&lt;a href="#"&gt;Third Link&lt;/a&gt;&lt;/li&gt;<font></font>
              &lt;li&gt;&lt;a href="#"&gt;Fourth Link&lt;/a&gt;&lt;/li&gt;<font></font>
           &lt;/ul&gt;<font></font>
       &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/nav&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易LEY</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><pre class="lang-html prettyprint-override"><code>&lt;div class="d-flex justify-content-start"&gt;hello&lt;/div&gt;    <font></font>
&lt;div class="d-flex justify-content-end"&gt;hello&lt;/div&gt;<font></font>
&lt;div class="d-flex justify-content-center"&gt;hello&lt;/div&gt;<font></font>
&lt;div class="d-flex justify-content-between"&gt;hello&lt;/div&gt;<font></font>
&lt;div class="d-flex justify-content-around"&gt;hello&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据上述划分，将要居中的字段放在右侧，右侧或左侧。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐泡芙A</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个过时的问题，但是我找到了一个替代解决方案，可以从bootstrap github页面直接共享。</font><font style="vertical-align: inherit;">该文档尚未更新，因此在SO上还有其他问题要求相同的解决方案，尽管问题稍有不同。</font><font style="vertical-align: inherit;">该解决方案并不特定于您的情况，但是您可以看到该解决方案是</font></font><code>&lt;div class="container"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">紧随其后的，</font></font><code>&lt;nav class="navbar navbar-default navbar-fixed-top"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但也可以</font></font><code>&lt;div class="container-fluid"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据需要</font><font style="vertical-align: inherit;">替换</font><font style="vertical-align: inherit;">为该解决方案</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html&gt;<font></font>
<font></font>
&lt;head&gt;<font></font>
  &lt;title&gt;Navbar right padding broken &lt;/title&gt;<font></font>
  &lt;script src="//code.jquery.com/jquery-2.1.4.min.js"&gt;&lt;/script&gt;<font></font>
  &lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"&gt;&lt;/script&gt;<font></font>
  &lt;link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" /&gt;<font></font>
&lt;/head&gt;<font></font>
<font></font>
&lt;body&gt;<font></font>
  &lt;nav class="navbar navbar-default navbar-fixed-top"&gt;<font></font>
    &lt;div class="container"&gt;<font></font>
      &lt;div class="navbar-header"&gt;<font></font>
        &lt;button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"&gt;<font></font>
          &lt;span class="sr-only"&gt;Toggle navigation&lt;/span&gt;<font></font>
          &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
          &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
          &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
        &lt;/button&gt;<font></font>
        &lt;a href="#/" class="navbar-brand"&gt;Hello&lt;/a&gt;<font></font>
      &lt;/div&gt;<font></font>
      &lt;div class="collapse navbar-collapse navbar-ex1-collapse"&gt;<font></font>
<font></font>
        &lt;ul class="nav navbar-nav navbar-right"&gt;<font></font>
          &lt;li&gt;<font></font>
            &lt;div class="btn-group navbar-btn" role="group" aria-label="..."&gt;<font></font>
              &lt;button type="button" class="btn btn-default" data-toggle="modal" data-target="#modalLogin"&gt;Se connecter&lt;/button&gt;<font></font>
              &lt;button type="button" class="btn btn-default" data-toggle="modal" data-target="#modalSignin"&gt;Créer un compte&lt;/button&gt;<font></font>
            &lt;/div&gt;<font></font>
          &lt;/li&gt;<font></font>
        &lt;/ul&gt;<font></font>
      &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
  &lt;/nav&gt;<font></font>
&lt;/body&gt;<font></font>
<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此页面的小提琴中找到了解决方案：</font><a href="https://github.com/twbs/bootstrap/issues/18362" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://github.com/twbs/bootstrap/issues/18362" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/twbs/bootstrap/issues/18362</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且在V3中被列为“无法修复”。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A达蒙</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现以下是一个更好的解决方案，具体取决于您左，中和右项目的内容。</font><font style="vertical-align: inherit;">100％的宽度没有边距会导致div重叠，并且会阻止定位标记正常工作-也就是说，不会混乱使用z-indexs。</font></font></p>

<pre><code>.navbar-brand<font></font>
{<font></font>
    position: absolute;<font></font>
    width: 100%;<font></font>
    left: 0;<font></font>
    margin: auto;<font></font>
    margin-left: 48%;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥宝儿</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">拍了拍我的头，只是重新读了一下我的答案，才意识到OP要求在左边有两个徽标，在右边有一个中心菜单，而不是相反。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过在Bootstrap的徽标中使用“ navbar-right”和“ navbar-left”，然后在UL中使用“ nav-justified”而不是“ navbar-nav”，可以严格地在HTML中完成此操作。</font><font style="vertical-align: inherit;">不需要其他CSS（除非您想将navbar-collapse切换开关放置在xs视口的中心，然后需要重写一点，但将由您自己决定）。</font></font></p>

<pre><code>&lt;nav class="navbar navbar-default" role="navigation"&gt;<font></font>
  &lt;div class="navbar-header"&gt;<font></font>
    &lt;button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"&gt;<font></font>
      &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
      &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
      &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
    &lt;/button&gt;<font></font>
    &lt;div class="navbar-brand navbar-left"&gt;&lt;a href="#"&gt;&lt;img src="http://placehold.it/150x30"&gt;&lt;/a&gt;&lt;/div&gt;<font></font>
<font></font>
  &lt;/div&gt;<font></font>
  &lt;div class="navbar-brand navbar-right"&gt;&lt;a href="#"&gt;&lt;img src="http://placehold.it/150x30"&gt;&lt;/a&gt;&lt;/div&gt;<font></font>
<font></font>
  &lt;div class="navbar-collapse collapse"&gt;<font></font>
    &lt;ul class="nav nav-justified"&gt;<font></font>
        &lt;li&gt;&lt;a href="#"&gt;home&lt;/a&gt;&lt;/li&gt;<font></font>
        &lt;li&gt;&lt;a href="#about"&gt;about&lt;/a&gt;&lt;/li&gt;<font></font>
    &lt;/ul&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/nav&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootply：</font><a href="http://www.bootply.com/W6uB8YfKxm" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：</font></font><a href="http://www.bootply.com/W6uB8YfKxm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.bootply.com/W6uB8YfKxm</font></font></a></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些来到这里尝试以“品牌”为中心的人，这是我的老答案：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这个线程有些旧，但是只是为了发布我的发现。</font><font style="vertical-align: inherit;">自从tomaszbak打破collaspe以来，我决定以skelly的答案为基础。</font><font style="vertical-align: inherit;">首先，我在CSS中创建了“ navbar-center”并关闭了普通navbar的float：</font></font></p>

<pre><code>.navbar-center<font></font>
{<font></font>
   position: absolute;<font></font>
   width: 100%;<font></font>
   left: 0;<font></font>
   text-align: center;<font></font>
   margin: auto;<font></font>
}<font></font>
<font></font>
.navbar-brand{<font></font>
   float:none;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，skelly答案的问题是，如果您的品牌名称过长（或者您想为品牌使用图片），那么一旦进入sm视口，由于绝对位置和评论者的原因，它们可能会重叠说，一旦进入xs视口，切换开关就会中断（除非您使用Z定位，但我真的不想为此担心）。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我要做的是利用引导</font></font><a href="http://getbootstrap.com/css/#responsive-utilities" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">响应实用程序</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建品牌块的多个版本：</font></font></p>

<pre><code>&lt;nav class="navbar navbar-default" role="navigation"&gt;<font></font>
&lt;div class="navbar-header"&gt;<font></font>
  &lt;button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"&gt;<font></font>
    &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
    &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
    &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
  &lt;/button&gt;<font></font>
  &lt;div class="navbar-brand visible-xs"&gt;&lt;a href="#"&gt;Brand That is Really Long&lt;/a&gt;&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
&lt;div class="navbar-brand visible-sm text-center"&gt;&lt;a href="#"&gt;Brand That is Really Long&lt;/a&gt;&lt;/div&gt;<font></font>
&lt;div class="navbar-brand navbar-center hidden-xs hidden-sm"&gt;&lt;a href="#"&gt;Brand That is Really Long&lt;/a&gt;&lt;/div&gt;<font></font>
<font></font>
&lt;div class="navbar-collapse collapse"&gt;<font></font>
  &lt;ul class="nav navbar-nav navbar-left"&gt;<font></font>
      &lt;li&gt;&lt;a href="#"&gt;Left&lt;/a&gt;&lt;/li&gt;<font></font>
      &lt;li&gt;&lt;a href="#about"&gt;Left&lt;/a&gt;&lt;/li&gt;<font></font>
      &lt;li&gt;&lt;a href="#"&gt;Left&lt;/a&gt;&lt;/li&gt;<font></font>
      &lt;li&gt;&lt;a href="#about"&gt;Left&lt;/a&gt;&lt;/li&gt;<font></font>
      &lt;li&gt;&lt;a href="#"&gt;Left&lt;/a&gt;&lt;/li&gt;<font></font>
      &lt;li&gt;&lt;a href="#about"&gt;Left&lt;/a&gt;&lt;/li&gt;<font></font>
  &lt;/ul&gt;<font></font>
  &lt;ul class="nav navbar-nav navbar-right"&gt;<font></font>
    &lt;li&gt;&lt;a href="#about"&gt;Right&lt;/a&gt;&lt;/li&gt;<font></font>
    &lt;li&gt;&lt;a href="#contact"&gt;Right&lt;/a&gt;&lt;/li&gt;<font></font>
    &lt;li&gt;&lt;a href="#about"&gt;Right&lt;/a&gt;&lt;/li&gt;<font></font>
    &lt;li&gt;&lt;a href="#contact"&gt;Right&lt;/a&gt;&lt;/li&gt;<font></font>
    &lt;li&gt;&lt;a href="#about"&gt;Right&lt;/a&gt;&lt;/li&gt;<font></font>
    &lt;li&gt;&lt;a href="#contact"&gt;Right&lt;/a&gt;&lt;/li&gt;<font></font>
  &lt;/ul&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，现在lg和md视口的品牌集中在左侧和右侧，一旦进入sm视口，链接将落至下一行，以免与品牌重叠，最后在xs视口中的collaspe插入，您可以使用切换开关。</font><font style="vertical-align: inherit;">您可以更进一步，并在与navbar-brand一起使用时修改navbar-right和navbar-left的媒体查询，以便在sm视口中所有链接都居中，但没有时间对其进行审核。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在这里检查我的旧引导程序：www.bootply.com/n3PXXropP3</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想拥有3个品牌可能和“ z”一样麻烦，但是我觉得在自适应设计的世界中，这种解决方案更适合我的风格。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚卡卡西</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><h1>Bootstrap 4 (as of alpha 6)</h1>

<blockquote>
  <p>Navbars are built with flexbox! Instead of floats, you’ll need flexbox and margin utilities.</p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><code>justify-content-end</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>collapse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">div </font><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">“ </font><font style="vertical-align: inherit;">右对齐” </font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;div class="collapse navbar-collapse justify-content-end"&gt;<font></font>
  &lt;ul class="navbar-nav"&gt;<font></font>
    &lt;li class="nav-item active"&gt;<font></font>
      &lt;a class="nav-link" href="#"&gt;Home&lt;/a&gt;<font></font>
    &lt;/li&gt;<font></font>
  &lt;/ul&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完整示例在这里：</font><a href="https://jsbin.com/kemawa/edit?output" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://jsbin.com/kemawa/edit?output" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsbin.com/kemawa/edit?output</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝镜风</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要类似的东西（左，中和右对齐的项目），但是能够将居中的项目标记为活动状态。</font><font style="vertical-align: inherit;">对我有用的是：</font></font></p>

<p><a href="http://www.bootply.com/CSI2KcCoEM"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.bootply.com/CSI2KcCoEM</font></font></a></p>

<pre><code>&lt;nav class="navbar navbar-default" role="navigation"&gt;<font></font>
  &lt;div class="navbar-header"&gt;<font></font>
    &lt;button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"&gt;<font></font>
      &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
      &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
      &lt;span class="icon-bar"&gt;&lt;/span&gt;<font></font>
    &lt;/button&gt;    <font></font>
  &lt;/div&gt;<font></font>
  &lt;div class="navbar-collapse collapse"&gt;<font></font>
    &lt;ul class="nav navbar-nav"&gt;<font></font>
      &lt;li class="navbar-left"&gt;&lt;a href="#"&gt;Left 1&lt;/a&gt;&lt;/li&gt;<font></font>
      &lt;li class="navbar-left"&gt;&lt;a href="#"&gt;Left 2&lt;/a&gt;&lt;/li&gt;<font></font>
      &lt;li class="active"&gt;&lt;a href="#"&gt;Center 1&lt;/a&gt;&lt;/li&gt;<font></font>
      &lt;li&gt;&lt;a href="#"&gt;Center 2&lt;/a&gt;&lt;/li&gt;<font></font>
      &lt;li&gt;&lt;a href="#"&gt;Center 3&lt;/a&gt;&lt;/li&gt;<font></font>
      &lt;li class="navbar-right"&gt;&lt;a href="#"&gt;Right 1&lt;/a&gt;&lt;/li&gt;<font></font>
      &lt;li class="navbar-right"&gt;&lt;a href="#"&gt;Right 2&lt;/a&gt;&lt;/li&gt;<font></font>
    &lt;/ul&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/nav&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS：</font></font></p>

<pre><code>@media (min-width: 768px) {<font></font>
  .navbar-nav {<font></font>
    width: 100%;<font></font>
    text-align: center;<font></font>
  }<font></font>
  .navbar-nav &gt; li {<font></font>
    float: none;<font></font>
    display: inline-block;<font></font>
  }<font></font>
  .navbar-nav &gt; li.navbar-right {<font></font>
    float: right !important;<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无梅Eva</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引导程序4</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们有很多方法来对齐navBars项目。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于左对齐</font></font></strong>
<a href="https://i.stack.imgur.com/elnmi.jpg" rel="noreferrer"><img src="https://i.stack.imgur.com/elnmi.jpg" alt="在此处输入图片说明"></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">class =“ navbar-nav </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">mr-auto</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”</font></font></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于右对齐</font></font></strong>
<a href="https://i.stack.imgur.com/bV9JJ.jpg" rel="noreferrer"><img src="https://i.stack.imgur.com/bV9JJ.jpg" alt="在此处输入图片说明"></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">class =“ navbar-nav </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ml-auto</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”</font></font></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于中心对齐</font></font></strong>
<a href="https://i.stack.imgur.com/5QtXz.jpg" rel="noreferrer"><img src="https://i.stack.imgur.com/5QtXz.jpg" alt="在此处输入图片说明"></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">class =“ navbar-nav </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">mx-auto</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”</font></font></p>
</blockquote>

<pre><code>&lt;nav class="navbar navbar-expand-sm bg-dark navbar-dark"&gt;<font></font>
&lt;a routerLink="/" class="navbar-brand" href="#"&gt;Bootsrap 4&lt;/a&gt;<font></font>
&lt;ul class="navbar-nav ml-auto"&gt;<font></font>
&lt;li class="nav-item"&gt;<font></font>
&lt;a class="nav-link" href="home"&gt;Home&lt;/a&gt;<font></font>
&lt;/li&gt;<font></font>
&lt;li class="nav-item"&gt;<font></font>
&lt;a class="nav-link" href="about"&gt;About&lt;/a&gt;<font></font>
&lt;/li&gt;<font></font>
&lt;li class="nav-item"&gt;<font></font>
&lt;a class="nav-link" href="contact"&gt;Contact us&lt;/a&gt;<font></font>
&lt;/li&gt;<font></font>
&lt;/ul&gt;<font></font>
&lt;/nav&gt;<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
