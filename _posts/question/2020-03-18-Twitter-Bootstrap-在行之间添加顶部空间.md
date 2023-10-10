---
layout: question
title:  Twitter Bootstrap-在行之间添加顶部空间
date:   2020-03-18T09:21:46.000Z
description: 如何class="row"使用Twitter Bootstrap框架向元素添加边距顶部？...
img: 
author: 蛋蛋Itachi
category: question
answer: 18
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何</font></font><code>class="row"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Twitter Bootstrap框架</font><font style="vertical-align: inherit;">向</font><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">添加边距顶部</font><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2110篇《Twitter Bootstrap-在行之间添加顶部空间》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">鱼二水</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>My trick. Not so clean, but works well for me</p>

<pre><code>&lt;p&gt;&amp;nbsp;&lt;/p&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro神奇神奇</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>Just simply use this <strong><code>bs3-upgrade</code></strong> helper for spacings and text aligment...</p>

<p><a href="https://github.com/studija/bs3-upgrade" rel="nofollow noreferrer">https://github.com/studija/bs3-upgrade</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Stafan</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>you can add this code : </p>

<pre><code>[class*="col-"] {<font></font>
    padding-top: 1rem;<font></font>
    padding-bottom: 1rem;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门GO村村</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;div class="row row-padding"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的代码</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长小胖</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap3</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS（仅装订线，周围没有空白）：</font></font></p>

<pre><code>.row.row-gutter {<font></font>
  margin-bottom: -15px;<font></font>
  overflow: hidden;<font></font>
}<font></font>
.row.row-gutter &gt; *[class^="col"] {<font></font>
  margin-bottom: 15px;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS（左右边距等于15px / 2）：</font></font></p>

<pre><code>.row.row-margins {<font></font>
  padding-top: 7px; /* or margin-top: 7px; */<font></font>
  padding-bottom: 7px; /* or margin-bottom: 7px; */<font></font>
}<font></font>
.row.row-margins &gt; *[class^="col"] {<font></font>
  margin-top: 8px;<font></font>
  margin-bottom: 8px;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法：</font></font></p>

<pre><code>&lt;div class="row row-gutter"&gt;<font></font>
    &lt;div class="col col-sm-9"&gt;first&lt;/div&gt;<font></font>
    &lt;div class="col col-sm-3"&gt;second&lt;/div&gt;<font></font>
    &lt;div class="col col-sm-12"&gt;third&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（使用SASS或LESS 15px可能是引导程序中的变量）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长斯丁Itachi</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><pre><code>just take a new class beside every row and apply css of margin-top: 20px;<font></font>
here is the code below<font></font>
&lt;style&gt;<font></font>
  .small-top<font></font>
   {<font></font>
     margin-top: 25px;  <font></font>
   }<font></font>
&lt;/style&gt;    <font></font>
&lt;div class="row small-top"&gt;<font></font>
   &lt;div class="col-md-12"&gt;<font></font>
   &lt;/div&gt;<font></font>
 &lt;/div&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙Gil</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Bootstrap 4 alpha +中，您可以使用此功能 </font></font></p>

<pre><code>class margin-bottom-5
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些类使用以下格式命名： </font></font><code>{property}-{sides}-{size}</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near村村</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果只想在一页上进行更改，请添加以下样式规则：</font></font></p>

<pre><code> #myCustomDivID .row {<font></font>
     margin-top:20px;<font></font>
 }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil前端</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在.css文件中添加到此类：</font></font></p>

<pre><code>.row {<font></font>
    margin-left: -20px;<font></font>
    *zoom: 1;<font></font>
    margin-top: 50px;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或创建一个新类并将其添加到元素中</font></font></p>

<pre><code>.rowSpecificFormName td {<font></font>
    margin-top: 50px;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅伽罗</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 4 alpha，用于页边距顶部：简写CSS类名称mt-1，mt-2（mt-lg-5，mt-sm-2），其底部，右侧，左侧相同，并且还具有自动类ml-汽车</font></font></p>

<pre><code>    &lt;div class="mt-lg-1" ...&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单位是从</font><font style="vertical-align: inherit;">variables.scss </font><font style="vertical-align: inherit;">中的从</font></font><code>1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>5</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：：这意味着如果您设置mt-1，它将给出.25rem的页边距上限。</font></font></p>

<pre><code>$spacers: (<font></font>
  0: (<font></font>
    x: 0,<font></font>
    y: 0<font></font>
  ),<font></font>
  1: (<font></font>
    x: ($spacer-x * .25),<font></font>
    y: ($spacer-y * .25)<font></font>
  ),<font></font>
  2: (<font></font>
    x: ($spacer-x * .5),<font></font>
    y: ($spacer-y * .5)<font></font>
  ),<font></font>
  3: (<font></font>
    x: $spacer-x,<font></font>
    y: $spacer-y<font></font>
  ),<font></font>
  4: (<font></font>
    x: ($spacer-x * 1.5),<font></font>
    y: ($spacer-y * 1.5)<font></font>
  ),<font></font>
  5: (<font></font>
    x: ($spacer-x * 3),<font></font>
    y: ($spacer-y * 3)<font></font>
  )<font></font>
) !default;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里阅读更多 </font></font></p>

<p><a href="https://v4-alpha.getbootstrap.com/utilities/spacing/#horizontal-centering" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://v4-alpha.getbootstrap.com/utilities/spacing/#horizo​​ntal-centering</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin猴子</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将以下类用于引导程序4：</font></font></p>

<p><code>mt-0</code>
<code>mt-1</code>
<code>mt-2</code>
<code>mt-3</code>
<code>mt-4</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="https://v4-alpha.getbootstrap.com/utilities/spacing/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://v4-alpha.getbootstrap.com/utilities/spacing/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//v4-alpha.getbootstrap.com/utilities/spacing/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长西门</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用这些类来更改上边距：</font></font></p>

<pre><code>.margin-top-05 { margin-top: 0.5em; }<font></font>
.margin-top-10 { margin-top: 1.0em; }<font></font>
.margin-top-15 { margin-top: 1.5em; }<font></font>
.margin-top-20 { margin-top: 2.0em; }<font></font>
.margin-top-25 { margin-top: 2.5em; }<font></font>
.margin-top-30 { margin-top: 3.0em; }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我需要一个元素与上面的元素有2em的间距时，可以这样使用它：</font></font></p>

<pre><code>&lt;div class="row margin-top-20"&gt;Something here&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您喜欢像素，请将em更改为px即可。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐十三</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将这些类添加到我的引导样式表中</font></font></p>

<pre><code>.voffset  { margin-top: 2px; }<font></font>
.voffset1 { margin-top: 5px; }<font></font>
.voffset2 { margin-top: 10px; }<font></font>
.voffset3 { margin-top: 15px; }<font></font>
.voffset4 { margin-top: 30px; }<font></font>
.voffset5 { margin-top: 40px; }<font></font>
.voffset6 { margin-top: 60px; }<font></font>
.voffset7 { margin-top: 80px; }<font></font>
.voffset8 { margin-top: 100px; }<font></font>
.voffset9 { margin-top: 150px; }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例</font></font></p>

<pre><code>&lt;div class="container"&gt;<font></font>
  &lt;div class="row voffset2"&gt;<font></font>
    &lt;div class="col-lg-12"&gt;<font></font>
      &lt;p&gt;<font></font>
        Vertically offset text.<font></font>
      &lt;/p&gt;<font></font>
    &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙神奇</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时，页边空白可能会导致设计问题：</font></font></p>

<p><a href="http://www.w3.org/TR/CSS2/box.html#collapsing-margins"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.w3.org/TR/CSS2/box.html#collapsing-margins</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我建议创建“ margin-bottom类”而不是“ margin-top类”，并将它们应用于上一个项目。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在使用Bootstrap导入LESS Bootstrap文件，请尝试使用比例Bootstrap主题空间来定义margin-bottom类：</font></font></p>

<pre><code>.margin-bottom-xs {margin-bottom: ceil(@line-height-computed / 4);}  <font></font>
.margin-bottom-sm {margin-bottom: ceil(@line-height-computed / 2);} <font></font>
.margin-bottom-md {margin-bottom: @line-height-computed;}<font></font>
.margin-bottom-lg {margin-bottom: ceil(@line-height-computed * 2);}  <font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Davaid</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap 4，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应使用</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">速记实用程序类</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">格式如下：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{属性} {面}-{大小}</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">财产</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是以下之一：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">m-对于设置边距的类</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">p-用于设置填充的类</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是以下之一：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">t-对于设置margin-top或padding-top的类</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">b-对于设置margin-bottom或padding-bottom的类</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">l-对于设置margin-left或padding-left的类</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">r-对于设置margin-right或padding-right的类</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">x-对于同时设置* -left和* -right的类</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">y-对于同时设置* -top和* -bottom的类</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空白-用于在元素的所有4面上设置边距或填充的类</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大小</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是以下之一：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0-对于通过将其设置为0消除边距或填充的类</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1-（默认情况下）用于将边距或填充设置为$ spacer * .25的类</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2-（默认情况下）用于将边距或填充设置为$ spacer * .5的类</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3-（默认情况下）用于将边距或填充设置为$ spacer的类</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4-（默认情况下）用于将边距或填充设置为$ spacer * 1.5的类</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5-（默认情况下）用于将边距或填充设置为$ spacer * 3的类</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">auto-对于将边距设置为auto的类</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您应该执行以下任一操作：</font></font></p>

<pre><code>&lt;div class="row mt-1"&gt;<font></font>
&lt;div class="row mt-2"&gt;<font></font>
          ...<font></font>
&lt;div class="row mt-5"&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读</font></font><a href="https://getbootstrap.com/docs/4.0/utilities/spacing/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取更多说明。</font><font style="vertical-align: inherit;">在</font></font><a href="https://www.w3schools.com/bootstrap4/tryit.asp?filename=trybs_util_spacing&amp;stacked=h" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试现场示例</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimAGil</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引导程序3</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要在引导程序中分隔行，则只需使用即可</font></font><code>.form-group</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这会将15px的空白添加到行的底部。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于您的情况，要获得最高利润，可以将此类添加到上一个</font></font><code>.row</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font></font></p>

<pre><code>&lt;div class="row form-group"&gt;<font></font>
<font></font>
/* From bootstrap.css */<font></font>
.form-group {<font></font>
        margin-bottom: 15px;<font></font>
}<font></font>
</code></pre>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引导程序4</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用内置的</font></font><a href="https://getbootstrap.com/docs/4.3/utilities/spacing/#notation" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">间距类</font></font></a></p>

<pre><code>&lt;div class="row mt-3"&gt;&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类名中的“ t”使其仅适用于“上”侧，下，左，右也有类似的类。</font><font style="vertical-align: inherit;">该数字定义空间大小。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋Itachi</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，只是让您知道发生了什么，我使用了一些新的类，如上面的Acyra所述：</font></font></p>

<pre><code>.top5 { margin-top:5px; }<font></font>
.top7 { margin-top:7px; }<font></font>
.top10 { margin-top:10px; }<font></font>
.top15 { margin-top:15px; }<font></font>
.top17 { margin-top:17px; }<font></font>
.top30 { margin-top:30px; }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当我想做 </font></font><code>&lt;div class="row top7"&gt;&lt;/div&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了更好地响应，您可以添加</font></font><code>margin-top:7%</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>5px</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：D</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY蛋蛋Near</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Twitter引导程序中编辑或覆盖行是一个坏主意，因为这是页面支架的核心部分，您将需要没有上边距的行。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要解决此问题，请创建一个新类“ top-buffer”，添加所需的标准边距。</font></font></p>

<pre><code>.top-buffer { margin-top:20px; }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在需要上边距的行div上使用它。</font></font></p>

<pre><code>&lt;div class="row top-buffer"&gt; ...
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
