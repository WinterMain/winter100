---
layout: question
title:  Sass-map-get和simple变量有什么区别？
date:   2020-04-03T02:46:23.000Z
description: 我是Sass的新手，并且我一直在阅读有关使用变量的不同方法的信息，我尝试应用的这一原理仅适用于颜色，我发现的某些解决方案就是这样的（map-get） ：...
img: 
author: 乐
category: question
answer: 2
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是Sass的新手，并且我一直在阅读有关使用变量的不同方法的信息，我尝试应用的这一原理仅适用于颜色，我发现的某些解决方案就是这样的（map-get） ：</font></font></p>

<pre><code>$colors: (<font></font>
    lighestGray: #F8F8FA,<font></font>
    lightGray: #A5ACBA,<font></font>
    light: #FFFFFF,<font></font>
    dark: #000000,<font></font>
    link: #428bca,<font></font>
    linkHover: #555,<font></font>
    navBlue: #7AC243,<font></font>
    navGreen: #009CDC,<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后像这样在类上使用它：</font></font></p>

<pre><code>.my-class {<font></font>
    color: map-get($colors, dark);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种方法是使用：</font></font></p>

<pre><code>$color-black: #000000;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后像这样使用它：</font></font></p>

<pre><code>.my-class {<font></font>
    color: $color-black;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是，哪个选项更好？</font><font style="vertical-align: inherit;">或</font></font><code>map-get</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能还有另一个目的？，Sass是否为此设置了模式，或者取决于每个Web开发人员？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢你的协助！。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问候。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3913篇《Sass-map-get和simple变量有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小蛋蛋</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">map-get用于从更多类型的对象获取css值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您有$ param，在其中定义了多个属性，现在要分配。</font><font style="vertical-align: inherit;">您可以通过以下方式使用它-</font></font></p>

<pre><code>color: map-get($params, "color");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他简单变量仅包含单个值的地方</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">map-get从持有多个值的对象获取css值，而获取单个值的变量</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用具有后备颜色的CSS变量制作主题的示例，请参见</font></font><a href="https://codepen.io/ronjonk/pen/aboZJEL" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Codepen CSS变量</font></font></a></p>

<pre><code>// VARS (FOR FALLBACK)<font></font>
// -------------------<font></font>
$theme-base: #70c1ac;<font></font>
$theme-base-aa: adjust-color($theme-base, $blue: 125);<font></font>
<font></font>
// PROCESSED THEME<font></font>
$theme-color: $theme-base;<font></font>
$theme-color-dark: darken($theme-color, 20%);<font></font>
$theme-color-light: lighten($theme-color, 20%);<font></font>
$theme-color-mixed: mix(#fff, $theme-color, 75%);<font></font>
$theme-color-trans: transparentize($theme-color, .4);<font></font>
<font></font>
// PROCESSED SECONDARY<font></font>
$theme-color-aa: $theme-base-aa;<font></font>
$theme-color-aa-dark: darken($theme-color-aa, 20%);<font></font>
$theme-color-aa-light: lighten($theme-color-aa, 20%);<font></font>
$theme-color-aa-mixed: mix(#fff, $theme-color-aa, 75%);<font></font>
$theme-color-aa-trans: transparentize($theme-color-aa, .4);<font></font>
<font></font>
$theme-colors: (<font></font>
  "aa-dark": $theme-color-aa-dark,<font></font>
  "aa-light": $theme-color-aa-light,<font></font>
  "aa-mixed": $theme-color-aa-mixed,<font></font>
  "aa-trans": $theme-color-aa-trans,<font></font>
  aa: $theme-color-aa,<font></font>
  dark: $theme-color-dark,<font></font>
  light: $theme-color-light,<font></font>
  mixed: $theme-color-mixed,<font></font>
  theme: $theme-color,<font></font>
  trans: $theme-color-trans,<font></font>
);<font></font>
<font></font>
@mixin themeColor ($prop, $color: null) {<font></font>
  @if ($color) {<font></font>
    #{$prop}: map-get($theme-colors, $color);<font></font>
    #{$prop}: var(--theme-color-#{$color})<font></font>
  } @else {<font></font>
    #{$prop}: map-get($theme-colors, theme);<font></font>
    #{$prop}: var(--theme-color);<font></font>
  }<font></font>
}<font></font>
<font></font>
@mixin setThemeColors($base1: "", $base2: "") {<font></font>
  // BASE THEME COLORS<font></font>
  $color-base: $theme-base;<font></font>
  $color-aa: $theme-base-aa;<font></font>
<font></font>
  @if ($base1) {<font></font>
    $color-base: $base1;<font></font>
    $color-aa: $base2;<font></font>
  }<font></font>
<font></font>
  // PROCESSED THEME COLORS<font></font>
  $color-aa-dark: darken($color-aa, 20%);<font></font>
  $color-aa-light: lighten($color-aa, 20%);<font></font>
  $color-aa-mixed: mix(#fff, $color-aa, 75%);<font></font>
  $color-aa-trans: transparentize($color-aa, .5);<font></font>
  $color-aa: $color-aa;<font></font>
  $color-dark: darken($color-base, 20%);<font></font>
  $color-light: lighten($color-base, 20%);<font></font>
  $color-mixed: mix(#fff, $color-base, 75%);<font></font>
  $color-trans: transparentize($color-base, .5);<font></font>
<font></font>
  // CSS VARIABLES<font></font>
  --theme-color-aa-dark: #{$color-aa-dark};<font></font>
  --theme-color-aa-light: #{$color-aa-light};<font></font>
  --theme-color-aa-trans: #{$color-aa-trans};<font></font>
  --theme-color-aa: #{$color-aa};<font></font>
  --theme-color-dark: #{$color-dark};<font></font>
  --theme-color-light: #{$color-light};<font></font>
  --theme-color-mixed: #{$color-mixed};<font></font>
  --theme-color-trans: #{$color-trans};<font></font>
  --theme-color: #{$color-base};<font></font>
}<font></font>
<font></font>
:root {<font></font>
  @include setThemeColors($theme-base, $theme-base-aa);<font></font>
}<font></font>
<font></font>
body {<font></font>
  @include themeColor("background","mixed");<font></font>
  font-size: 2rem;<font></font>
}<font></font>
<font></font>
ul {<font></font>
  list-style: none; /* Remove default bullets */<font></font>
}<font></font>
<font></font>
ul li::before {<font></font>
  content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */<font></font>
  @include themeColor("color","dark");<font></font>
<font></font>
  font-weight: bold; /* If you want it to be bold */<font></font>
  display: inline-block; /* Needed to add space between the bullet and the text */ <font></font>
  width: 1.2em; /* Also needed for space (tweak if needed) */<font></font>
  margin-left: -.8em; /* Also needed for space (tweak if needed) */<font></font>
}<font></font>
<font></font>
li {<font></font>
  @include themeColor("color", "light");<font></font>
  @include themeColor("background", "aa-dark");<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
