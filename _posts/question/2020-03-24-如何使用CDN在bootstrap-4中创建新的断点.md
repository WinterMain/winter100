---
layout: question
title:  如何使用CDN在bootstrap 4中创建新的断点？
date:   2020-03-24T11:14:19.000Z
description: 我使用BootstrapCDN。用sass编写并由gulp构建的其他样式。我需要创建自己的Breakpionts。如果使用CDN，可以制作它们吗？我不知道...
img: 
author: 泡芙
category: question
answer: 2
tags: twitter-bootstrap CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用BootstrapCDN。</font><font style="vertical-align: inherit;">用sass编写并由gulp构建的其他样式。</font><font style="vertical-align: inherit;">我需要创建自己的Breakpionts。</font><font style="vertical-align: inherit;">如果使用CDN，可以制作它们吗？</font><font style="vertical-align: inherit;">我不知道该怎么做。</font><font style="vertical-align: inherit;">我必须创建这些断点：</font></font></p>

<pre><code>--breakpoint-xxxs: 0;<font></font>
--breakpoint-xxs: 320px;<font></font>
--breakpoint-xs: 568px;<font></font>
--breakpoint-sm: 667px;<font></font>
--breakpoint-md: 768px;<font></font>
--breakpoint-lg: 992px;<font></font>
--breakpoint-xl: 1200px;<font></font>
--breakpoint-xxl: 1440px;<font></font>
--breakpoint-xxxl: 1600px;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想得到这样的东西：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"&gt;<font></font>
<font></font>
&lt;div class="container"&gt;<font></font>
	&lt;div class="row"&gt;<font></font>
		&lt;div class="col col-xxxs-1 col-xxs-2 col-xs-3 col-sm-4 col-md-5 col-lg-6 col-xl-7 col-xxl-8 col-xxxl-9"&gt;<font></font>
			&lt;div style="height:100vh;background:purple"&gt;text&lt;/div&gt;<font></font>
		&lt;/div&gt;&lt;!--col--&gt;<font></font>
	&lt;/div&gt;&lt;!--.row--&gt;<font></font>
&lt;/div&gt;&lt;!--.container--&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到</font></font><a href="http://blog.codeply.com/2016/06/06/how-to-create-a-new-breakpoint-in-bootstrap-4/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了手册</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，正在尝试这样做：</font></font></p>

<pre><code>$grid-breakpoints: (<font></font>
  xxxs: 0,<font></font>
  xxs: 320px,<font></font>
  xs: 568px,<font></font>
  sm: 667px,<font></font>
  md: 768px,<font></font>
  lg: 992px,<font></font>
  xl: 1200px,<font></font>
  xxl: 1440px,<font></font>
  xxxl: 1600px<font></font>
)  !default;<font></font>
<font></font>
$container-max-widths: (<font></font>
  xxxs: 0,<font></font>
  xxs: 320px,<font></font>
  xs: 568px,<font></font>
  sm: 667px,<font></font>
  md: 768px,<font></font>
  lg: 992px,<font></font>
  xl: 1200px,<font></font>
  xxl: 1440px,<font></font>
  xxxl: 1600px<font></font>
) !default;<font></font>
<font></font>
:root {<font></font>
  --breakpoint-xxxs: 0;<font></font>
  --breakpoint-xxs: 320px;<font></font>
  --breakpoint-xs: 568px;<font></font>
  --breakpoint-sm: 667px;<font></font>
  --breakpoint-md: 768px;<font></font>
  --breakpoint-lg: 992px;<font></font>
  --breakpoint-xl: 1200px;<font></font>
  --breakpoint-xxl: 1440px;<font></font>
  --breakpoint-xxxl: 1600px;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是它不会产生结果，并且会产生错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非法嵌套：变量声明下不得嵌套任何内容。</font></font></p>
</blockquote>

<p><a href="https://codepen.io/kizoso/pen/oEyeVd" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Codepen mcve</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我做错了什么？</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
预先感谢您的帮助。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UPD：如果不可能的话...还有其他选择吗？</font><font style="vertical-align: inherit;">我可以轻松地编辑代码以使用断点模拟引导网格吗？</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UPD2：我通过</font></font><a href="https://stackoverflow.com/questions/48924751/how-to-create-new-breakpoints-in-bootstrap-4-using-cdn/48925128#48925128"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ aer0</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修复了这些错误</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>$grid-breakpoints: (xxxs: 0, xxs: 320px, xs: 568px, sm: 667px, md: 768px, lg: 992px, xl: 1200px, xxl: 1440px, xxxl: 1600px)!default<font></font>
<font></font>
$container-max-widths: (xxxs: 0, xxs: 320px, xs: 568px, sm: 667px, md: 768px, lg: 992px, xl: 1200px, xxl: 1440px, xxxl: 1600px)!default<font></font>
<font></font>
\:root<font></font>
  --breakpoint-xxxs: 0<font></font>
  --breakpoint-xxs: 320px<font></font>
  --breakpoint-xs: 568px<font></font>
  --breakpoint-sm: 667px<font></font>
  --breakpoint-md: 768px<font></font>
  --breakpoint-lg: 992px<font></font>
  --breakpoint-xl: 1200px<font></font>
  --breakpoint-xxl: 1440px<font></font>
  --breakpoint-xxxl: 1600px<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这不能解决我的问题。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3719篇《如何使用CDN在bootstrap 4中创建新的断点？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝逆天</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不能完全通过CDN来完成。</font><font style="vertical-align: inherit;">要</font><font style="vertical-align: inherit;">使用SASS </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自定义/覆盖，您需要@import必需的Bootstrap scss文件</font></font><code>custom.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">要覆盖网格断点，至少需要</font></font><code>functions</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>variables</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">然后根据需要设置变量，最后设置@import bootstrap。</font><font style="vertical-align: inherit;">注意默认值！</font><font style="vertical-align: inherit;">已</font></font><a href="https://getbootstrap.com/docs/4.0/getting-started/theming/#variable-defaults" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中的</font><a href="https://getbootstrap.com/docs/4.0/getting-started/theming/#variable-defaults" rel="noreferrer"><font style="vertical-align: inherit;">说明</font></a><font style="vertical-align: inherit;">被删除为</font><font style="vertical-align: inherit;">正确的自定义方法。</font></font></p>

<pre><code>/* import what we need to override */<font></font>
@import "bootstrap/functions";<font></font>
@import "bootstrap/variables";<font></font>
<font></font>
/* set the overriding variables */<font></font>
$grid-breakpoints: (<font></font>
  xxxs: 0,<font></font>
  xxs: 320px,<font></font>
  xs: 568px,<font></font>
  sm: 667px,<font></font>
  md: 768px,<font></font>
  lg: 992px,<font></font>
  xl: 1200px,<font></font>
  xxl: 1440px,<font></font>
  xxxl: 1600px<font></font>
);<font></font>
$container-max-widths: (<font></font>
  xxxs: 0,<font></font>
  xxs: 320px,<font></font>
  xs: 568px,<font></font>
  sm: 667px,<font></font>
  md: 768px,<font></font>
  lg: 992px,<font></font>
  xl: 1200px,<font></font>
  xxl: 1440px,<font></font>
  xxxl: 1600px<font></font>
);<font></font>
<font></font>
/* override the !default vars with the values we set above */<font></font>
@import "bootstrap";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用这种方法，我们添加了新的网格断点，并确保</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些新断点</font></font><em><font style="vertical-align: inherit;"></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Bootstrap中的</font><strong><em><font style="vertical-align: inherit;">任何地方都可以使用</font></em></strong><font style="vertical-align: inherit;">，包括</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网格，用于间距，显示，flexbox，对齐，定位</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等的</font><strong><font style="vertical-align: inherit;">响应实用程序</font></strong><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="https://www.codeply.com/go/BIgmm1XGc2" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.codeply.com/go/BIgmm1XGc2</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另请参阅：</font></font><br>
<a href="https://stackoverflow.com/questions/45776055/how-to-extend-modify-customize-bootstrap-4-with-sass"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用SASS </font></font></a><font style="vertical-align: inherit;"><a href="https://stackoverflow.com/questions/37490537/twitter-bootstrap-add-media-queries-for-xxs-breakpoint/37543791#37543791"><font style="vertical-align: inherit;">Twitter Bootstrap </font></a><a href="https://stackoverflow.com/questions/45776055/how-to-extend-modify-customize-bootstrap-4-with-sass"><font style="vertical-align: inherit;">扩展/修改（自定义）Bootstrap 4 </font></a></font><br>
<a href="https://stackoverflow.com/questions/37490537/twitter-bootstrap-add-media-queries-for-xxs-breakpoint/37543791#37543791"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：添加针对xxs断点的媒体查询</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据Github的说法，您似乎在这里遇到了“错误”。</font><font style="vertical-align: inherit;">看到这里：</font><a href="https://github.com/sass/sass/issues/1166" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/sass/sass/issues/1166" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/sass/sass/issues/1166</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">话虽如此，您必须像这样那样在一行中编写变量定义。</font></font></p>

<pre><code>$grid-breakpoints: (xxxs: 0, xxs: 320px, xs: 568px, sm: 667px, md: 768px, lg: 992px, xl: 1200px, xxl: 1440px, xxxl: 1600px) !default
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
