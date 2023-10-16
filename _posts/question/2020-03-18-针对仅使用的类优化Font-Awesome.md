---
layout: question
title:  针对仅使用的类优化Font Awesome
date:   2020-03-18T07:41:20.000Z
description: 我正在使用Font Awesome Sass文件https //github.com/FortAwesome/Font-Awesome/blob/mast...
img: 
author: 逆天小卤蛋Green
category: question
answer: 5
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Font Awesome Sass文件</font></font><a href="https://github.com/FortAwesome/Font-Awesome/blob/master/sass/font-awesome.sass" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/FortAwesome/Font-Awesome/blob/master/sass/font-awesome.sass</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使其成为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">_font-awesome.sass，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此可以</font></font><code>@import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的Sass项目中使用。</font><font style="vertical-align: inherit;">我还使用</font></font><a href="http://middlemanapp.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://middlemanapp.com/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sass</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转换</font><font style="vertical-align: inherit;">为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Css</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">问题：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法将仅</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用过的图标类</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带入转换后的.css中？</font><font style="vertical-align: inherit;">因为现在它包含了</font><strong><font style="vertical-align: inherit;">_font-awesome.sass中的</font></strong><font style="vertical-align: inherit;">所有类</font></font><strong><font style="vertical-align: inherit;"></font></strong></p></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">BONUS：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以</font><font style="vertical-align: inherit;">用</font><strong><font style="vertical-align: inherit;">旧的图标类</font></strong><font style="vertical-align: inherit;">以</font><font style="vertical-align: inherit;">某种方式</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新编译</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字体，</font><font style="vertical-align: inherit;">以使其在生产时更小？</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我可以在上面的＃1上找到一些技巧，那就足够了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2023篇《针对仅使用的类优化Font Awesome》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy猴子阿飞</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，当然可以对Sass进行一些微调，以使其</font></font><code>%</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于</font><font style="vertical-align: inherit;">选择器</font><font style="vertical-align: inherit;">，使其只能扩展。</font><font style="vertical-align: inherit;">一旦完成，就可以创建与所需图标匹配的类，然后再</font></font><code>@extend</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对字体棒的类</font><font style="vertical-align: inherit;">进行匹配</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我个人是这样做的，实际上并没有使用标记中的类，而只是使用选择器来选择相关元素以及</font></font><code>@extend</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们与这些类。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>// _icons.scss<font></font>
%#{$fa-css-prefix}-glass:before { content: $fa-var-glass; }<font></font>
...<font></font>
<font></font>
// _core.scss<font></font>
%#{$fa-css-prefix} {<font></font>
    ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在您的scss中</font></font></p>

<pre><code>a.search {<font></font>
    @extend %fa;<font></font>
    @extend %fa-search;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等等。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Stafan阿飞</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sass不知道您实际上正在使用什么类。</font><font style="vertical-align: inherit;">您必须手动调整自身大小。</font><font style="vertical-align: inherit;">打开提供的.scss文件，并破解所有不需要的内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑字体文件本身以消除不需要的字形需要第三方应用程序执行，而这超出了此问题的范围。</font></font></p>

<hr>

<p><a href="http://fontello.com/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Fontello</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个在线Web服务，可以为您完成所有这些操作。</font><font style="vertical-align: inherit;">它使您可以在多个图标字体集合之间进行混合和匹配，从而为您的项目创建完美的字体文件。</font><font style="vertical-align: inherit;">除了自定义字体文件之外，它还提供了多个.css文件，其中包含已为您生成的样式（将扩展名更改为.scss可以将其导入到现有的Sass项目中）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A蛋蛋</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">fontello非常好，但</font></font><a href="http://icomoon.io/app" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IcoMoon</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更加</font><font style="vertical-align: inherit;">出色</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅小小</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><a href="http://app.fontastic.me/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Fontastic</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我工作（它在</font></font><a href="https://github.com/FortAwesome/Font-Awesome/wiki/Customize-Font-Awesome" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Font Awesome github页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上列出</font><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">选择所需的字形，然后将其下载为新的自定义字体。</font><font style="vertical-align: inherit;">优秀的工具。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near飞云</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以将Font-awesome中的图标子集用于生产。</font><font style="vertical-align: inherit;">现在有一个名为</font></font><strong><a href="https://github.com/johnsmclay/icnfnt" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">icnfnt</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的官方子设置工具</font><font style="vertical-align: inherit;">，该</font><font style="vertical-align: inherit;">工具</font><font style="vertical-align: inherit;">可让您从最新版本的Font-awesome（v3.0.2）中挑选和打包所需的图标。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定制下载还包括所有CSS，LESS，SCSS和SASS代码！</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
