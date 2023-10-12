---
layout: question
title:  Twitter Bootstrap 3：如何使用媒体查询？
date:   2020-03-20T05:13:50.000Z
description: 我正在使用Bootstrap 3构建响应式布局，在该布局中我想根据屏幕尺寸调整一些字体大小。如何使用媒体查询进行这种逻辑处理？...
img: 
author: JimLEYHarry
category: question
answer: 16
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Bootstrap 3构建响应式布局，在该布局中我想根据屏幕尺寸调整一些字体大小。</font><font style="vertical-align: inherit;">如何使用媒体查询进行这种逻辑处理？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2470篇《Twitter Bootstrap 3：如何使用媒体查询？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">改善主要回应：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">media</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font></font><code>&lt;link&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（它支持媒体查询），以便仅下载用户所需的代码。</font></font></p>

<pre><code>&lt;link href="style.css" rel="stylesheet"&gt;<font></font>
&lt;link href="deviceSizeDepending.css" rel="stylesheet" media="(min-width: 40em)"&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，浏览器将下载所有CSS资源，而与</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">媒体</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">无关</font><font style="vertical-align: inherit;">。
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不同之处在于，如果将media属性的media-query评估为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">false，</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则该.css文件及其内容将不会被渲染阻止。</font></font></strong></p>

<p>Therefore, it is recommended to use the <em>media</em> attribute in the <code>&lt;link&gt;</code> tag since it guarantees a better user experience.</p>

<p>Here you can read a Google article about this issue <a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css" rel="nofollow noreferrer">https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css</a></p>

<p>Some tools that will help you to automate the separation of your css code in different files according to your media-querys</p>

<p>Webpack
<a href="https://www.npmjs.com/package/media-query-plugin" rel="nofollow noreferrer">https://www.npmjs.com/package/media-query-plugin</a> 
<a href="https://www.npmjs.com/package/media-query-splitting-plugin" rel="nofollow noreferrer">https://www.npmjs.com/package/media-query-splitting-plugin</a></p>

<p>PostCSS
<a href="https://www.npmjs.com/package/postcss-extract-media-query" rel="nofollow noreferrer">https://www.npmjs.com/package/postcss-extract-media-query</a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁泡芙</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">:)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在最新的引导程序（4.3.1）中，可以使用SCSS（SASS）使用@mixin中的一种 </font></font><code>/bootstrap/scss/mixins/_breakpoints.scss</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至少具有最小断点宽度的介质。</font><font style="vertical-align: inherit;">不查询最小的断点。</font><font style="vertical-align: inherit;">使@content适用于给定的断点且更宽。</font></font></p>

<p><code>@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints)</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">介质最大为最大断点宽度。</font><font style="vertical-align: inherit;">没有查询最大的断点。</font><font style="vertical-align: inherit;">使@content适用于给定的断点并变窄。</font></font></p>

<p><code>@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints)</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跨多个断点宽度的介质。</font><font style="vertical-align: inherit;">使@content适用于最小和最大断点之间</font></font></p>

<p><code>@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints)</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">断点的最小和最大宽度之间的媒体。</font><font style="vertical-align: inherit;">最小的断点没有最小值，最大的断点没有最大值。</font><font style="vertical-align: inherit;">使@content仅适用于给定的断点，而不适用于更宽或更窄的视口。</font></font></p>

<p><code>@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints)</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>.content__extra {<font></font>
  height: 100%;<font></font>
<font></font>
  img {<font></font>
    margin-right: 0.5rem;<font></font>
  }<font></font>
<font></font>
  @include media-breakpoint-down(xs) {<font></font>
    margin-bottom: 1rem;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明文件： </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简介</font></font><a href="https://getbootstrap.com/docs/4.3/layout/overview/#responsive-breakpoints" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://getbootstrap.com/docs/4.3/layout/overview/#sensitive-breakpoints</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迁移</font></font><a href="https://getbootstrap.com/docs/4.3/migration/#responsive-utilities" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://getbootstrap.com/docs/4.3/migration/#sensitive-utilities</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量</font></font><a href="https://getbootstrap.com/docs/4.3/layout/grid/#variables" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://getbootstrap.com/docs/4.3/layout/grid/#variables</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快乐的编码;）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomLEY</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap主要在源Sass文件中为布局，网格系统和组件使用以下媒体查询范围（或断点）。</font></font></em></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">超小型设备（纵向电话，小于576px）无媒体查询，</font></font><code>xs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为这是Bootstrap中的默认设置</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小型设备（横向手机，576像素及以上）</font></font></strong></p>

<pre><code>@media (min-width: 576px) { ... }
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中型设备（平板电脑，768像素及以上）</font></font></strong></p>

<pre><code>@media (min-width: 768px) { ... }
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大型设备（台式机，992px及以上）</font></font></strong></p>

<pre><code>@media (min-width: 992px) { ... }
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">超大型设备（大型台式机，1200px及以上）</font></font></strong></p>

<pre><code>@media (min-width: 1200px) { ... }
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于我们用Sass编写了源CSS，因此所有媒体查询都可以通过Sass mixins获得：</font></font></em></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">xs断点无需媒体查询，因为它有效 </font></font><code>@media (min-width: 0) { ... }</code></strong></p>

<pre><code>@include media-breakpoint-up(sm) { ... }<font></font>
@include media-breakpoint-up(md) { ... }<font></font>
@include media-breakpoint-up(lg) { ... }<font></font>
@include media-breakpoint-up(xl) { ... }<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了深入了解它，请通过下面的链接</font></font></em> </p>

<p><a href="https://getbootstrap.com/docs/4.3/layout/overview/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://getbootstrap.com/docs/4.3/layout/overview/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@media only屏幕和（最大宽度：1200px）{}</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@media only屏幕和（最大宽度：979px）{}</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@media only屏幕和（最大宽度：767px）{}</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@media only屏幕和（最大宽度：480px）{}</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@media only屏幕和（最大宽度：320像素）{}</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@media（最小宽度：768像素）和（最大宽度：991像素）{} </font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@media（最小宽度：992px）和（最大宽度：1024px）{} </font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LLSam</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对IE使用媒体查询；</font></font></p>

<pre><code>@media only screen <font></font>
and (min-device-width : 320px) <font></font>
and (max-device-width : 480px) <font></font>
and (orientation : landscape) and (-ms-high-contrast: none), (-ms-high-contrast: active) {<font></font>
}<font></font>
@media only screen <font></font>
and (min-device-width : 360px) <font></font>
and (max-device-width : 640px) <font></font>
and (orientation : portrait) and (-ms-high-contrast: none), (-ms-high-contrast: active) {<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamSam</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在我的示例中看到字体大小和背景颜色根据屏幕大小而变化</font></font></p>
</blockquote>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;<font></font>
&lt;style&gt;<font></font>
body {<font></font>
    background-color: lightgreen;<font></font>
}<font></font>
/* Custom, iPhone Retina */ <font></font>
@media(max-width:320px){<font></font>
    body {<font></font>
        background-color: lime;<font></font>
        font-size:14px;<font></font>
     }<font></font>
}<font></font>
@media only screen and (min-width : 320px) {<font></font>
     body {<font></font>
        background-color: red;<font></font>
        font-size:18px;<font></font>
    }<font></font>
}<font></font>
/* Extra Small Devices, Phones */ <font></font>
@media only screen and (min-width : 480px) {<font></font>
     body {<font></font>
        background-color: aqua;<font></font>
        font-size:24px;<font></font>
    }<font></font>
}<font></font>
/* Small Devices, Tablets */<font></font>
@media only screen and (min-width : 768px) {<font></font>
     body {<font></font>
        background-color: green;<font></font>
        font-size:30px;<font></font>
    }<font></font>
}<font></font>
/* Medium Devices, Desktops */<font></font>
@media only screen and (min-width : 992px) {<font></font>
     body {<font></font>
        background-color: grey;<font></font>
        font-size:34px;<font></font>
    }<font></font>
}<font></font>
/* Large Devices, Wide Screens */<font></font>
@media only screen and (min-width : 1200px) {<font></font>
     body {<font></font>
        background-color: black;<font></font>
        font-size:42px;<font></font>
    }<font></font>
}<font></font>
&lt;/style&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
&lt;p&gt;Resize the browser window. When the width of this document is larger than the height, the background-color is "lightblue", otherwise it is "lightgreen".&lt;/p&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们在Less文件中使用以下媒体查询在网格系统中创建关键断点。</font></font></p>

<pre><code>/* Small devices (tablets, 768px and up) */<font></font>
@media (min-width: @screen-sm-min) { ... }<font></font>
<font></font>
/* Medium devices (desktops, 992px and up) */<font></font>
@media (min-width: @screen-md-min) { ... }<font></font>
<font></font>
/* Large devices (large desktops, 1200px and up) */<font></font>
@media (min-width: @screen-lg-min) { ... }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另请参阅</font></font><a href="http://getbootstrap.com/css/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap</font></font></a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请记住，避免文本缩放是响应式布局存在的主要原因。</font><font style="vertical-align: inherit;">响应式网站背后的整个逻辑是创建可有效显示您的内容的功能布局，以便在多种屏幕尺寸上易于阅读和使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管在某些情况下有必要缩放文本，但是请注意不要缩小站点大小，以免错过重点。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反正这是一个例子。</font></font></p>

<pre><code>@media(min-width:1200px){<font></font>
<font></font>
    h1 {font-size:34px}<font></font>
<font></font>
}<font></font>
@media(min-width:992px){<font></font>
<font></font>
    h1 {font-size:32px}<font></font>
<font></font>
}<font></font>
@media(min-width:768px){<font></font>
<font></font>
    h1 {font-size:28px}<font></font>
<font></font>
}<font></font>
@media(max-width:767px){<font></font>
<font></font>
    h1 {font-size:26px}<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外请记住，480视口已被放在引导程序3中。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或简单的Sass-Compass：</font></font></h2>

<pre><code>@mixin col-xs() {<font></font>
    @media (max-width: 767px) {<font></font>
        @content;<font></font>
    }<font></font>
}<font></font>
@mixin col-sm() {<font></font>
    @media (min-width: 768px) and (max-width: 991px) {<font></font>
        @content;<font></font>
    }<font></font>
}<font></font>
@mixin col-md() {<font></font>
    @media (min-width: 992px) and (max-width: 1199px) {<font></font>
        @content;<font></font>
    }<font></font>
}<font></font>
@mixin col-lg() {<font></font>
    @media (min-width: 1200px) {<font></font>
        @content;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></h2>

<pre><code>#content-box {<font></font>
    @include border-radius(18px);<font></font>
    @include adjust-font-size-to(18pt);<font></font>
    padding:20px;<font></font>
    border:1px solid red;<font></font>
    @include col-xs() {<font></font>
        width: 200px;<font></font>
        float: none;<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green前端</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据其他用户的回答，我编写了这些自定义的mixin，以方便使用：</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入少</font></font></h1>

<pre><code>.when-xs(@rules) { @media (max-width: @screen-xs-max) { @rules(); } }<font></font>
.when-sm(@rules) { @media (min-width: @screen-sm-min) { @rules(); } }<font></font>
.when-md(@rules) { @media (min-width: @screen-md-min) { @rules(); } }<font></font>
.when-lg(@rules) { @media (min-width: @screen-lg-min) { @rules(); } }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法示例</font></font></p>

<pre><code>body {<font></font>
  .when-lg({<font></font>
    background-color: red;<font></font>
  });<font></font>
}<font></font>
</code></pre>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SCSS输入</font></font></h1>

<pre><code>@mixin when-xs() { @media (max-width: $screen-xs-max) { @content; } }<font></font>
@mixin when-sm() { @media (min-width: $screen-sm-min) { @content; } }<font></font>
@mixin when-md() { @media (min-width: $screen-md-min) { @content; } }<font></font>
@mixin when-lg() { @media (min-width: $screen-lg-min) { @content; } }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法示例：</font></font></p>

<pre><code>body {<font></font>
  @include when-md {<font></font>
    background-color: red;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出量</font></font></h1>

<pre><code>@media (min-width:1200px) {<font></font>
  body {<font></font>
    background-color: red;<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonySamGreen</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从Bootstrap v3.3.6开始，使用以下媒体查询，这些媒体查询与概述可用响应类的文档相对应（</font></font><a href="http://getbootstrap.com/css/#responsive-utilities"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://getbootstrap.com/css/#response-utilities</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<pre><code>/* Extra Small Devices, .visible-xs-* */<font></font>
@media (max-width: 767px) {}<font></font>
<font></font>
/* Small Devices, .visible-sm-* */<font></font>
@media (min-width: 768px) and (max-width: 991px) {}<font></font>
<font></font>
/* Medium Devices, .visible-md-* */<font></font>
@media (min-width: 992px) and (max-width: 1199px) {}<font></font>
<font></font>
/* Large Devices, .visible-lg-* */<font></font>
@media (min-width: 1200px) {}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从Bootstrap GitHub存储库中提取的媒体查询从以下较少的文件中提取：-</font></font></p>

<p><a href="https://github.com/twbs/bootstrap/blob/v3.3.6/less/responsive-utilities.less"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/twbs/bootstrap/blob/v3.3.6/less/sensitive-utilities.less </font></font></a>
<a href="https://github.com/twbs/bootstrap/blob/v3.3.6/less/variables.less"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/twbs/bootstrap/blob/v3.3.6/less/variables.less</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LL</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个使用LESS模仿Bootstrap而不导入较少文件的模块化示例。</font></font></p>

<pre><code>@screen-xs-max: 767px;<font></font>
@screen-sm-min: 768px;<font></font>
@screen-sm-max: 991px;<font></font>
@screen-md-min: 992px;<font></font>
@screen-md-max: 1199px;<font></font>
@screen-lg-min: 1200px;<font></font>
<font></font>
//xs only<font></font>
@media(max-width: @screen-xs-max) {<font></font>
<font></font>
}<font></font>
//small and up<font></font>
@media(min-width: @screen-sm-min) {<font></font>
<font></font>
}<font></font>
//sm only<font></font>
@media(min-width: @screen-sm-min) and (max-width: @screen-sm-max) {<font></font>
<font></font>
}<font></font>
//md and up<font></font>
@media(min-width: @screen-md-min) {<font></font>
<font></font>
}<font></font>
//md only<font></font>
@media(min-width: @screen-md-min) and (max-width: @screen-md-max) {<font></font>
<font></font>
}<font></font>
//lg and up<font></font>
@media(min-width: @screen-lg-min) {<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro猿A</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是两个例子。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一旦视口变为700px或更小，则将所有h1标签设为20px。</font></font></p>

<pre><code>@media screen and ( max-width: 700px ) {<font></font>
  h1 {<font></font>
     font-size: 20px;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使所有h1都为20px，直到视口达到700px或更大。</font></font></p>

<pre><code>@media screen and ( min-width: 700px ) {<font></font>
  h1 {<font></font>
     font-size: 20px;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助：0）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些是Bootstrap3的值：</font></font></p>

<pre><code>/* Extra Small */<font></font>
@media(max-width:767px){}<font></font>
<font></font>
/* Small */<font></font>
@media(min-width:768px) and (max-width:991px){}<font></font>
<font></font>
/* Medium */<font></font>
@media(min-width:992px) and (max-width:1199px){}<font></font>
<font></font>
/* Large */<font></font>
@media(min-width:1200px){}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于bisio的答案和Bootstrap 3代码，我为想要复制完整媒体查询集并将其粘贴到其样式表中的任何人提供了一个更准确的答案：</font></font></p>

<pre><code>/* Large desktops and laptops */<font></font>
@media (min-width: 1200px) {<font></font>
<font></font>
}<font></font>
<font></font>
/* Landscape tablets and medium desktops */<font></font>
@media (min-width: 992px) and (max-width: 1199px) {<font></font>
<font></font>
}<font></font>
<font></font>
/* Portrait tablets and small desktops */<font></font>
@media (min-width: 768px) and (max-width: 991px) {<font></font>
<font></font>
}<font></font>
<font></font>
/* Landscape phones and portrait tablets */<font></font>
@media (max-width: 767px) {<font></font>
<font></font>
}<font></font>
<font></font>
/* Portrait phones and smaller */<font></font>
@media (max-width: 480px) {<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引导程序3</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要保持一致，以下是BS3中使用的选择器：</font></font></p>

<pre><code>@media(max-width:767px){}<font></font>
@media(min-width:768px){}<font></font>
@media(min-width:992px){}<font></font>
@media(min-width:1200px){}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：仅供参考，这可能对调试有用：</font></font></p>

<pre><code>&lt;span class="visible-xs"&gt;SIZE XS&lt;/span&gt;<font></font>
&lt;span class="visible-sm"&gt;SIZE SM&lt;/span&gt;<font></font>
&lt;span class="visible-md"&gt;SIZE MD&lt;/span&gt;<font></font>
&lt;span class="visible-lg"&gt;SIZE LG&lt;/span&gt;<font></font>
</code></pre>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引导程序4</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是BS4中使用的选择器。</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">BS4中没有“最低”设置，因为“超小”是默认设置。</font><font style="vertical-align: inherit;">也就是说，您首先要编码XS大小，然后再覆盖这些媒体。</font></font></em></p>

<pre><code>@media(min-width:576px){}<font></font>
@media(min-width:768px){}<font></font>
@media(min-width:992px){}<font></font>
@media(min-width:1200px){}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新2019年2月11日：BS3信息从3.4.0版本开始仍然是准确的，已为新网格更新了BS4，从4.3.0版开始是准确的。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
