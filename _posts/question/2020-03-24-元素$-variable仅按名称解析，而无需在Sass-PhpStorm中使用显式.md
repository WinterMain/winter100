---
layout: question
title:  元素$ variable仅按名称解析，而无需在Sass PhpStorm中使用显式
date:   2020-03-24T06:22:01.000Z
description: 我是Sass（SCSS）的新手。在Sass中，我遵循7-1 pattern，目前正在将Phpstorm用作IDE。我将所有_<name>.scss文件...
img: 
author: Gil
category: question
answer: 0
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是Sass（SCSS）的新手。</font><font style="vertical-align: inherit;">在Sass中，我遵循</font></font><code>7-1 pattern</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，目前正在将Phpstorm用作IDE。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将所有</font></font><code>_&lt;name&gt;.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">导入</font><font style="vertical-align: inherit;">一个名为</font></font><code>main.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">file的</font><font style="vertical-align: inherit;">主</font><font style="vertical-align: inherit;">文件中。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在</font></font><code>_variables.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">定义了颜色变量，</font><font style="vertical-align: inherit;">但是当我在其他.scss文件中使用它时，PhpStorm会给出如下错误</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素'gutter-horizo​​ntal'（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量名</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）仅按名称解析，而不使用显式导入。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还提供了我的IDE的屏幕截图，因此，您知道我的文件夹的结构。</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/24014/images/thumbnails/1585030794333.png" data-src="https://www.samyoc.com//uploads/users/24014/images/1585030794333.png" rel="noreferrer"><img src="https://i.stack.imgur.com/CNApu.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我检查了整个互联网，但找不到任何解决方案，这不是这个</font></font><a href="https://stackoverflow.com/questions/44415965/importing-bootstrap-in-less-not-working-element-is-resolved-only-by-name"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重复问题，</font><font style="vertical-align: inherit;">好！</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我将我</font></font><code>_variables.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的scss文件</font><font style="vertical-align: inherit;">导入时</font><font style="vertical-align: inherit;">，错误消失了。</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/24014/images/thumbnails/1585030794334.png" data-src="https://www.samyoc.com//uploads/users/24014/images/1585030794334.png" rel="noreferrer"><img src="https://i.stack.imgur.com/7WSJp.png" alt="在此处输入图片说明"></a></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">题</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么，我需要导入</font></font><code>vaiables.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有的scss文件还是做错了什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不明白这个问题来自哪里？</font><font style="vertical-align: inherit;">Sass还是PhpStorm？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">variables.scss</font></font></strong></p>

<pre><code>// COLORS<font></font>
<font></font>
$color-primary: #55c57a;<font></font>
$color-primary-light: #7ed56f;<font></font>
$color-primary-dark: #28b485;<font></font>
$color-gray-dark: #777;<font></font>
<font></font>
$color-black: #000;<font></font>
$color-white: #fff;<font></font>
<font></font>
// GRID<font></font>
<font></font>
$grid-width: 114rem;<font></font>
$gutter-vertical: 8rem;<font></font>
$gutter-horizontal: 6rem;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">main.scss</font></font></strong></p>

<pre><code>@charset "UTF-8";<font></font>
<font></font>
@import 'abstracts/variables';<font></font>
@import 'abstracts/functions';<font></font>
@import 'abstracts/mixins';<font></font>
<font></font>
@import 'base/animations';<font></font>
@import 'base/base';<font></font>
@import 'base/typography';<font></font>
@import 'base/utilities';<font></font>
<font></font>
@import 'components/buttons';<font></font>
<font></font>
@import 'layout/header';<font></font>
@import 'layout/grid';<font></font>
<font></font>
@import 'pages/home';<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3362篇《元素$ variable仅按名称解析，而无需在Sass PhpStorm中使用显式》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
