---
layout: question
title:  如何在Bootstrap中将容器垂直居中？
date:   2020-03-23T03:03:28.000Z
description: 我正在寻找一种将containerdiv 垂直居中放置jumbotron在页面中间的方法。在.jumbotron必须适应于屏幕的整个高度和宽度。的.c...
img: 
author: 神乐神奇
category: question
answer: 8
tags: html CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在寻找一种将</font></font><code>container</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">div </font><font style="vertical-align: inherit;">垂直居中</font><font style="vertical-align: inherit;">放置</font></font><code>jumbotron</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在页面中间的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>.jumbotron</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">必须适应于屏幕的整个高度和宽度。</font><font style="vertical-align: inherit;">的</font></font><code>.container</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">div有一个宽度</font></font><code>1025px</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和应在该页面（垂直中心）的中间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望此页面的大屏幕适应屏幕的高度和宽度，并且容器垂直于大屏幕垂直居中。</font><font style="vertical-align: inherit;">我该如何实现？</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.jumbotron {<font></font>
  height:100%;<font></font>
  width:100%;<font></font>
}<font></font>
.container {<font></font>
  width:1025px;<font></font>
}<font></font>
.jumbotron .container {<font></font>
  max-width: 100%;<font></font>
} </code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet"/&gt;<font></font>
&lt;div class="jumbotron"&gt;<font></font>
    &lt;div class="container text-center"&gt;<font></font>
        &lt;h1&gt;The easiest and powerful way&lt;/h1&gt;<font></font>
        &lt;div class="row"&gt;<font></font>
            &lt;div class="col-md-7"&gt;<font></font>
                 &lt;div class="top-bg"&gt;&lt;/div&gt;<font></font>
            &lt;/div&gt;<font></font>
<font></font>
            &lt;div class="col-md-5 iPhone-features" style="margin-left:-25px;"&gt;<font></font>
                &lt;ul class="top-features"&gt;<font></font>
                    &lt;li&gt;<font></font>
                        &lt;span&gt;&lt;i class="fa fa-random simple_bg top-features-bg"&gt;&lt;/i&gt;&lt;/span&gt;<font></font>
                        &lt;p&gt;&lt;strong&gt;Redirect&lt;/strong&gt;&lt;br&gt;Visitors where they converts more.&lt;/p&gt;<font></font>
                    &lt;/li&gt;<font></font>
                    &lt;li&gt;<font></font>
                        &lt;span&gt;&lt;i class="fa fa-cogs simple_bg top-features-bg"&gt;&lt;/i&gt;&lt;/span&gt;<font></font>
                        &lt;p&gt;&lt;strong&gt;Track&lt;/strong&gt;&lt;br&gt;Views, Clicks and Conversions.&lt;/p&gt;<font></font>
                    &lt;/li&gt;<font></font>
                    &lt;li&gt;<font></font>
                        &lt;span&gt;&lt;i class="fa fa-check simple_bg top-features-bg"&gt;&lt;/i&gt;&lt;/span&gt;<font></font>
                        &lt;p&gt;&lt;strong&gt;Check&lt;/strong&gt;&lt;br&gt;Constantly the status of your links.&lt;/p&gt;<font></font>
                    &lt;/li&gt;<font></font>
                    &lt;li&gt;<font></font>
                        &lt;span&gt;&lt;i class="fa fa-users simple_bg top-features-bg"&gt;&lt;/i&gt;&lt;/span&gt;<font></font>
                        &lt;p&gt;&lt;strong&gt;Collaborate&lt;/strong&gt;&lt;br&gt;With Customers, Partners and Co-Workers.&lt;/p&gt;<font></font>
                    &lt;/li&gt;<font></font>
                        &lt;a href="pricing-and-signup.html" class="btn-primary btn h2 lightBlue get-Started-btn"&gt;GET STARTED&lt;/a&gt;<font></font>
                        &lt;h6 class="get-Started-sub-btn"&gt;FREE VERSION AVAILABLE!&lt;/h6&gt;<font></font>
                &lt;/ul&gt;<font></font>
            &lt;/div&gt;<font></font>
        &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝达蒙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我用于垂直对齐内容的方式-带有自举3行的顶部/中央/底部。</font><font style="vertical-align: inherit;">引导3个具有相同高度并垂直对齐的列。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>/* columns of same height styles */<font></font>
<font></font>
.row-full-height {<font></font>
  height: 100%;<font></font>
}<font></font>
.col-full-height {<font></font>
  height: 100%;<font></font>
  vertical-align: middle;<font></font>
}<font></font>
.row-same-height {<font></font>
  display: table;<font></font>
  width: 100%;<font></font>
  /* fix overflow */<font></font>
  table-layout: fixed;<font></font>
}<font></font>
.col-xs-height {<font></font>
  display: table-cell;<font></font>
  float: none !important;<font></font>
}<font></font>
<font></font>
@media (min-width: 768px) {<font></font>
  .col-sm-height {<font></font>
    display: table-cell;<font></font>
    float: none !important;<font></font>
  }<font></font>
}<font></font>
@media (min-width: 992px) {<font></font>
  .col-md-height {<font></font>
    display: table-cell;<font></font>
    float: none !important;<font></font>
  }<font></font>
}<font></font>
@media (min-width: 1200px) {<font></font>
  .col-lg-height {<font></font>
    display: table-cell;<font></font>
    float: none !important;<font></font>
  }<font></font>
}<font></font>
/* vertical alignment styles */<font></font>
<font></font>
.col-top {<font></font>
  vertical-align: top;<font></font>
}<font></font>
.col-middle {<font></font>
  vertical-align: middle;<font></font>
}<font></font>
.col-bottom {<font></font>
  vertical-align: bottom;</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class="container"&gt;<font></font>
<font></font>
&lt;h2&gt;Demo 1&lt;/h2&gt;<font></font>
&lt;div class="row"&gt;<font></font>
  &lt;div class="row-same-height"&gt;<font></font>
    &lt;div class="col-xs-3 col-xs-height"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus tincidunt porttitor. Praesent vehicula aliquam enim. Fusce non luctus eros, sit amet consequat velit. Pellentesque volutpat est et est imperdiet pharetra. Integer vestibulum feugiat malesuada. Proin a felis ut libero vestibulum fermentum ut sit amet est. Morbi placerat eget lacus sed sagittis. Nullam eu elit gravida arcu viverra facilisis. Quisque laoreet enim neque, ut consequat sem tincidunt at. Fusce lobortis scelerisque libero, eget vulputate neque. &lt;/div&gt;<font></font>
    &lt;div class="col-xs-3 col-xs-height col-top"&gt;2st column&lt;/div&gt;<font></font>
    &lt;div class="col-xs-3 col-xs-height col-middle"&gt;3st column&lt;/div&gt;<font></font>
    &lt;div class="col-xs-3 col-xs-height col-bottom"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus tincidunt porttitor. Praesent vehicula aliquam enim. Fusce non luctus eros, sit amet consequat velit. Pellentesque volutpat est et est imperdiet pharetra.&lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;&lt;!-- ./row --&gt;<font></font>
&lt;/div&gt;&lt;!-- ./container --&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个</font></font><a href="https://jsfiddle.net/mohandere/gnayx1ap/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSFiddle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinDavaid</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Bootstrap 4，则只需添加2个div：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.jumbotron{<font></font>
  height:100%;<font></font>
  width:100%;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"&gt;&lt;/script&gt;    <font></font>
&lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"&gt;&lt;/script&gt;<font></font>
&lt;link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet"/&gt;<font></font>
<font></font>
&lt;body&gt;<font></font>
  &lt;div class="jumbotron"&gt;<font></font>
    &lt;div class="d-table w-100 h-100"&gt;<font></font>
      &lt;div class="d-table-cell w-100 h-100 align-middle"&gt;<font></font>
        &lt;h5&gt;<font></font>
          your stuff...<font></font>
        &lt;/h5&gt;<font></font>
        &lt;div class="container"&gt;<font></font>
          &lt;div class="row"&gt;<font></font>
            &lt;div class="col-12"&gt;<font></font>
              &lt;p&gt;<font></font>
                More stuff...<font></font>
              &lt;/p&gt;<font></font>
            &lt;/div&gt;<font></font>
          &lt;/div&gt;<font></font>
        &lt;/div&gt;<font></font>
      &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/body&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类：d-table，d-table-cell，w-100，h-100和align-middle可以胜任</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯Jim</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢的技术：</font></font></p>

<pre><code>body {<font></font>
  display: table;<font></font>
  position: absolute;<font></font>
  height: 100%;<font></font>
  width: 100%;<font></font>
}<font></font>
<font></font>
.jumbotron {<font></font>
   display: table-cell;<font></font>
   vertical-align: middle;<font></font>
}<font></font>
</code></pre>

<hr>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示版</font></font></h3>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>body {<font></font>
  display: table;<font></font>
  position: absolute;<font></font>
  height: 100%;<font></font>
  width: 100%;<font></font>
}<font></font>
<font></font>
.jumbotron {<font></font>
   display: table-cell;<font></font>
   vertical-align: middle;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"&gt;<font></font>
&lt;div class="jumbotron vertical-center"&gt;<font></font>
  &lt;div class="container text-center"&gt;<font></font>
    &lt;h1&gt;The easiest and powerful way&lt;/h1&gt;<font></font>
    &lt;div class="row"&gt;<font></font>
      &lt;div class="col-md-7"&gt;<font></font>
        &lt;div class="top-bg"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/div&gt;<font></font>
      &lt;/div&gt;<font></font>
<font></font>
      &lt;div class="col-md-5 iPhone-features"&gt;<font></font>
        &lt;ul class="top-features"&gt;<font></font>
          &lt;li&gt;<font></font>
            &lt;span&gt;&lt;i class="fa fa-random simple_bg top-features-bg"&gt;&lt;/i&gt;&lt;/span&gt;<font></font>
            &lt;p&gt;&lt;strong&gt;Redirect&lt;/strong&gt;&lt;br&gt;Visitors where they converts more.&lt;/p&gt;<font></font>
          &lt;/li&gt;<font></font>
          &lt;li&gt;<font></font>
            &lt;span&gt;&lt;i class="fa fa-cogs simple_bg top-features-bg"&gt;&lt;/i&gt;&lt;/span&gt;<font></font>
            &lt;p&gt;&lt;strong&gt;Track&lt;/strong&gt;&lt;br&gt;Views, Clicks and Conversions.&lt;/p&gt;<font></font>
          &lt;/li&gt;<font></font>
          &lt;li&gt;<font></font>
            &lt;span&gt;&lt;i class="fa fa-check simple_bg top-features-bg"&gt;&lt;/i&gt;&lt;/span&gt;<font></font>
            &lt;p&gt;&lt;strong&gt;Check&lt;/strong&gt;&lt;br&gt;Constantly the status of your links.&lt;/p&gt;<font></font>
          &lt;/li&gt;<font></font>
          &lt;li&gt;<font></font>
            &lt;span&gt;&lt;i class="fa fa-users simple_bg top-features-bg"&gt;&lt;/i&gt;&lt;/span&gt;<font></font>
            &lt;p&gt;&lt;strong&gt;Collaborate&lt;/strong&gt;&lt;br&gt;With Customers, Partners and Co-Workers.&lt;/p&gt;<font></font>
          &lt;/li&gt;<font></font>
          &lt;a href="pricing-and-signup.html" class="btn-primary btn h2 lightBlue get-Started-btn"&gt;GET STARTED&lt;/a&gt;<font></font>
          &lt;h6 class="get-Started-sub-btn"&gt;FREE VERSION AVAILABLE!&lt;/h6&gt;<font></font>
        &lt;/ul&gt;<font></font>
      &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另请参阅</font></font><a href="https://jsfiddle.net/y69tbpk2/3/" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此小提琴</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">灵活的盒子方式</font></font></h2>

<p><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，通过使用</font></font><a href="http://www.w3.org/TR/css-flexbox-1/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">弹性框布局，</font></font></a><font style="vertical-align: inherit;"><strong><font style="vertical-align: inherit;">垂直对齐</font></strong><font style="vertical-align: inherit;">非常简单</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如今，</font><font style="vertical-align: inherit;">除Internet Explorer 8和9之外，</font></font><a href="http://caniuse.com/#feat=flexbox" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">各种</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Web浏览器</font><font style="vertical-align: inherit;">都支持此方法</font><font style="vertical-align: inherit;">。因此，</font><font style="vertical-align: inherit;">对于IE8 / 9，</font><font style="vertical-align: inherit;">我们需要使用一些hacks / </font></font><a href="https://github.com/doctyper/flexie" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">polyfill</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://stackoverflow.com/questions/18516317/vertically-align-an-image-inside-a-div-with-responsive-height?lq=1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在下面的内容中，我将向您展示如何仅用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3行</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文本</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（不管使用旧的flexbox语法）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何做到这一点</font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好使用其他类，而不要进行更改</font></font><code>.jumbotron</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以实现垂直对齐。</font><font style="vertical-align: inherit;">我将使用</font></font><code>vertical-center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类名作为实例。</font></font></p>

<p><strong><a href="http://jsfiddle.net/hashem/ut5sbqvz/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实施例在此</font></font></a></strong> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（A </font></font><strong><a href="http://jsbin.com/namogi/1/edit?css,output" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">镜子</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上jsbin） </font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;div class="jumbotron vertical-center"&gt; &lt;!-- <font></font>
                      ^--- Added class  --&gt;<font></font>
  &lt;div class="container"&gt;<font></font>
    ...<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<pre class="lang-css prettyprint-override"><code>.vertical-center {<font></font>
  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */<font></font>
  min-height: 100vh; /* These two lines are counted as one :-)       */<font></font>
<font></font>
  display: flex;<font></font>
  align-items: center;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在演示中考虑）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">百分比</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值</font></font><code>height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>min-height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">性质是相对</font></font><code>height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">父元素的，因此，你应该指定</font></font><code>height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">明确的母公司。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于简洁，在发布的代码段中省略了供应商前缀/旧的flexbox语法，但在线示例中存在。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在一些旧的Web浏览器如Firefox 9 </font></font><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在我测试过）</font></font></sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，柔性容器- </font></font><code>.vertical-center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下-不会占用可用空间父里面，所以我们需要指定</font></font><code>width</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似属性：</font></font><code>width: 100%</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样在如上所述的某些Web浏览器中，</font></font><code>.container</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下</font><font style="vertical-align: inherit;">，伸缩项</font><font style="vertical-align: inherit;">可能不会水平出现在中央。</font><font style="vertical-align: inherit;">看来所施加的左/右</font></font><code>margin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>auto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有在柔性项目产生任何影响。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
因此，我们需要将其对齐</font></font><code>box-pack / justify-content</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关列的更多详细信息和/或垂直对齐，可以参考以下主题：</font></font></p>

<ul>
<li><a href="https://stackoverflow.com/questions/20547819/vertical-align-with-bootstrap-3/25517025#25517025"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与Bootstrap 3垂直对齐</font></font></a></li>
</ul>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传统Web浏览器的传统方式</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我回答这个问题时写的旧答案。</font><font style="vertical-align: inherit;">此方法已在</font></font><strong><a href="https://stackoverflow.com/questions/18516317/vertically-align-an-image-inside-a-div-with-responsive-height/18516474#18516474"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行了讨论</font><strong><a href="https://stackoverflow.com/questions/18516317/vertically-align-an-image-inside-a-div-with-responsive-height/18516474#18516474"><font style="vertical-align: inherit;">，</font></a></strong><font style="vertical-align: inherit;">并且应该也可以在Internet Explorer 8和9中使用。</font><font style="vertical-align: inherit;">我将简短地解释一下：</font></font></p>

<p>In inline flow, an inline level element can be aligned vertically to the middle by <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align" rel="noreferrer"><code>vertical-align: middle</code></a> declaration. Spec from <a href="http://www.w3.org/TR/CSS2/visudet.html#propdef-vertical-align" rel="noreferrer">W3C</a>:</p>

<blockquote>
  <p><strong>middle</strong><br>
  Align the vertical midpoint of the box with the baseline of the parent box plus half the x-height of the parent.</p>
</blockquote>

<p>In cases that the parent - <code>.vertical-center</code> element in this case - has an explicit <code>height</code>, by any chance if we could have a child element having the exact same <code>height</code> of the parent, we would be able <a href="https://stackoverflow.com/questions/25419552/how-to-align-a-label-to-the-bottom-of-a-div-in-css/25419852#25419852">to move the baseline of the parent</a> to the midpoint of the full-height child and surprisingly make our desired in-flow child - the <code>.container</code> - aligned to the center vertically.</p>

<h3>Getting all together</h3>

<p>That being said, we could create a full-height element within the <code>.vertical-center</code> by <code>::before</code> or <code>::after</code> pseudo elements and also change the default <code>display</code> type of it and the other child, the  <code>.container</code> to <code>inline-block</code>.</p>

<p>Then use <code>vertical-align: middle;</code> to align the inline elements vertically.</p>

<p>Here you go:</p>

<pre><code>&lt;div class="jumbotron vertical-center"&gt;<font></font>
  &lt;div class="container"&gt;<font></font>
    ...<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<pre class="lang-css prettyprint-override"><code>.vertical-center {<font></font>
  height:100%;<font></font>
  width:100%;<font></font>
<font></font>
  text-align: center;  /* align the inline(-block) elements horizontally */<font></font>
  font: 0/0 a;         /* remove the gap between inline(-block) elements */<font></font>
}<font></font>
<font></font>
.vertical-center:before {    /* create a full-height inline block pseudo=element */<font></font>
  content: " ";<font></font>
  display: inline-block;<font></font>
  vertical-align: middle;    /* vertical alignment of the inline element */<font></font>
  height: 100%;<font></font>
}<font></font>
<font></font>
.vertical-center &gt; .container {<font></font>
  max-width: 100%;<font></font>
<font></font>
  display: inline-block;<font></font>
  vertical-align: middle;  /* vertical alignment of the inline element */<font></font>
                           /* reset the font property */<font></font>
  font: 16px/1 "Helvetica Neue", Helvetica, Arial, sans-serif;<font></font>
}<font></font>
</code></pre>

<p><strong><a href="http://jsbin.com/vuyub/4/edit" rel="noreferrer">WORKING DEMO</a></strong>.</p>

<p>Also, to prevent unexpected issues in extra small screens, you can reset the height of the  pseudo-element to <code>auto</code> or <code>0</code> or change its <code>display</code> type to <code>none</code> if needed so:</p>

<pre class="lang-css prettyprint-override"><code>@media (max-width: 768px) {<font></font>
  .vertical-center:before {<font></font>
    height: auto;<font></font>
    /* Or */<font></font>
    display: none;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><strong><a href="http://jsbin.com/vuyub/5/edit" rel="noreferrer">UPDATED DEMO</a></strong></p>

<p>And one more thing:</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font><font style="vertical-align: inherit;">容器周围</font><font style="vertical-align: inherit;">有</font></font><code>footer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/个</font></font><code>header</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分，最好将这些元素正确</font><em><font style="vertical-align: inherit;">放置</font></em></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>relative</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>absolute</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？取决于您）。</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并增加一个较高的</font></font><code>z-index</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值（以确保），以使它们始终位于其他</font><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">的顶部。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在IE，Firefox和Chrome中进行了测试。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.parent-container {<font></font>
    position: relative;<font></font>
    height:100%;<font></font>
    width: 100%;<font></font>
}<font></font>
<font></font>
.child-container {<font></font>
    position: absolute;<font></font>
    top: 50%;<font></font>
    left: 50%;<font></font>
    transform: translate(-50%, -50%);<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class="parent-container"&gt;<font></font>
    &lt;div class="child-container"&gt;<font></font>
        &lt;h2&gt;Header Text&lt;/h2&gt;<font></font>
        &lt;span&gt;Some Text&lt;/span&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font><a href="https://css-tricks.com/centering-css-complete-guide/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https://css-tricks.com/centering-css-complete-guide/上</font></a><font style="vertical-align: inherit;">找到</font></font><a href="https://css-tricks.com/centering-css-complete-guide/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新2019</font></font></h2>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 4</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含flexbox，因此垂直居中的方法要容易得多，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且不需要额外的CSS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需使用</font></font><code>d-flex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>align-items-center</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实用程序类即可。</font></font></p>

<pre><code>&lt;div class="jumbotron d-flex align-items-center"&gt;<font></font>
  &lt;div class="container"&gt;<font></font>
    content<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><a href="http://www.codeply.com/go/ui6ABmMTLv" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.codeply.com/go/ui6ABmMTLv</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">垂直居中是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相对于高度</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您要居中的项目的父容器</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">必须</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义的高度</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果要使用页面的高度</font></font><code>vh-100</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">使用</font></font><code>min-vh-100</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">父级！</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>&lt;div class="jumbotron d-flex align-items-center min-vh-100"&gt;<font></font>
  &lt;div class="container text-center"&gt;<font></font>
    I am centered vertically<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p></p><hr><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
另请参见：</font></font><a href="https://stackoverflow.com/questions/42252443/vertical-align-center-in-bootstrap-4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 4中的垂直对齐中心</font></font></a><p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><a href="https://v4-alpha.getbootstrap.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 4中</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">水平居中的孩子</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，使用引导-4类：</font></font></p>

<pre><code>justify-content-center
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">垂直居中的孩子</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，使用引导-4类：</font></font></p>

<pre><code> align-items-center
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但请记住不要忘记将</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">d-flex</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类与bootstrap-4实用程序类一起使用，就像这样</font></font></p>

<pre><code>&lt;div class="d-flex justify-content-center align-items-center" style="height:100px;"&gt;<font></font>
    &lt;span class="bg-primary"&gt;MIDDLE&lt;/span&gt;    <font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果此代码不起作用，</font><strong><font style="vertical-align: inherit;">请</font></strong><font style="vertical-align: inherit;">确保添加bootstrap-4实用程序</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这不是此问题的直接答案，但可能会对某人有所帮助</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加Bootstrap.css，然后将其添加到您的CSS
</font></font></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>   <font></font>
html, body{height:100%; margin:0;padding:0}<font></font>
 <font></font>
.container-fluid{<font></font>
  height:100%;<font></font>
  display:table;<font></font>
  width: 100%;<font></font>
  padding: 0;<font></font>
}<font></font>
 <font></font>
.row-fluid {height: 100%; display:table-cell; vertical-align: middle;}<font></font>
 <font></font>
 <font></font>
<font></font>
.centering {<font></font>
  float:none;<font></font>
  margin:0 auto;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>Now call in your page <font></font>
<font></font>
&lt;div class="container-fluid"&gt;<font></font>
    &lt;div class="row-fluid"&gt;<font></font>
        &lt;div class="centering text-center"&gt;<font></font>
           Am in the Center Now :-)<font></font>
        &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
