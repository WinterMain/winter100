---
layout: question
title:  如何覆盖Bootstrap CSS样式？
date:   2020-04-03T03:51:15.000Z
description: 我需要修改bootstrap.css以适合我的网站。我觉得最好创建一个单独的custom.css文件而不是bootstrap.css直接进行修改，原因之一...
img: 
author: 小小Stafan宝儿
category: question
answer: 10
tags: html CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要修改</font></font><code>bootstrap.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以适合我的网站。</font><font style="vertical-align: inherit;">我觉得最好创建一个单独的</font></font><code>custom.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件而不是</font></font><code>bootstrap.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直接</font><font style="vertical-align: inherit;">进行修改</font><font style="vertical-align: inherit;">，原因之一是应该</font></font><code>bootstrap.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行更新，因此尝试重新包含所有修改内容会很麻烦。</font><font style="vertical-align: inherit;">我会为这些样式牺牲一些加载时间，但是对于我要覆盖的少数样式而言，这可以忽略不计。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为何要重写，</font></font><code>bootstrap.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以便</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">锚点/类的样式？</font><font style="vertical-align: inherit;">例如，如果我想删除以下内容的所有样式规则</font></font><code>legend</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>legend {<font></font>
  display: block;<font></font>
  width: 100%;<font></font>
  padding: 0;<font></font>
  margin-bottom: 20px;<font></font>
  font-size: 21px;<font></font>
  line-height: inherit;<font></font>
  color: #333333;<font></font>
  border: 0;<font></font>
  border-bottom: 1px solid #e5e5e5;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以删除中的所有内容</font></font><code>bootstrap.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是如果我对覆盖CSS的最佳做法的理解是正确的，我应该怎么做呢？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">明确地说，我想删除所有这些图例样式，并使用父级的CSS值。</font><font style="vertical-align: inherit;">因此，结合Pranav的答案，我会做以下事情吗？</font></font></p>

<pre><code>legend {<font></font>
  display: inherit !important;<font></font>
  width: inherit !important;<font></font>
  padding: inherit !important;<font></font>
  margin-bottom: inherit !important;<font></font>
  font-size: inherit !important;<font></font>
  line-height: inherit !important;<font></font>
  color: inherit !important;<font></font>
  border: inherit !important;<font></font>
  border-bottom: inherit !important;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我希望有一种方法可以执行以下操作：）</font></font></p>

<pre><code>legend {<font></font>
  clear: all;<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3995篇《如何覆盖Bootstrap CSS样式？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现（引导4）将自己的CSS放在后面</font></font><code>bootstrap.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，.js是最好的解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到要更改的项目（检查元素）并使用完全相同的声明，它将被覆盖。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我花了一些时间来解决这个问题。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用jquery css而不是css。</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">jQuery比bootstrap css具有优先权...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如</font></font></p>

<pre><code>$(document).ready(function(){<font></font>
        $(".mnu").css({"color" : "#CCFF00" , "font-size": "16px" , "text-decoration" : "overline"});    <font></font>
<font></font>
<font></font>
);<font></font>
<font></font>
 instead of<font></font>
<font></font>
.mnu<font></font>
{<font></font>
<font></font>
font-family:myfnt;<font></font>
font-size:20px;<font></font>
color:#006699;<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给图例提供ID并应用CSS。</font><font style="vertical-align: inherit;">就像向legend（）添加ID hello一样，css如下所示：</font></font></p>

<pre><code>#legend  legend {<font></font>
  display: block;<font></font>
  width: 100%;<font></font>
  padding: 0;<font></font>
  margin-bottom: 20px;<font></font>
  font-size: 21px;<font></font>
  line-height: inherit;<font></font>
  color: #333333;<font></font>
  border: 0;<font></font>
  border-bottom: 1px solid #e5e5e5;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见</font></font><a href="https://bootstrap.themes.guide/how-to-customize-bootstrap.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://bootstrap.themes.guide/how-to-customize-bootstrap.html</font></font></a></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于简单的CSS覆盖，您可以在bootstrap.css下面添加一个custom.css</font></font></p>

<pre><code>&lt;link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"&gt;<font></font>
&lt;link rel="stylesheet" type="text/css" href="css/custom.css"&gt;<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于更广泛的更改，建议使用SASS。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建自己的custom.scss</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">custom.scss中的更改后导入Bootstrap</font></font></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，让我们将主体背景色更改为浅灰色#eeeeee，并将蓝色主要上下文颜色更改为Bootstrap的$ purple变量...</font></font></p>

<pre><code>/* custom.scss */    <font></font>
<font></font>
/* import the necessary Bootstrap files */<font></font>
@import "bootstrap/functions";<font></font>
@import "bootstrap/variables";<font></font>
<font></font>
/* -------begin customization-------- */   <font></font>
<font></font>
/* simply assign the value */ <font></font>
$body-bg: #eeeeee;<font></font>
<font></font>
/* or, use an existing variable */<font></font>
$theme-colors: (<font></font>
  primary: $purple<font></font>
);<font></font>
/* -------end customization-------- */  <font></font>
<font></font>
/* finally, import Bootstrap to set the changes! */<font></font>
@import "bootstrap";<font></font>
</code></pre></li>
</ul></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您打算进行任何较大的更改，那么最好直接在引导程序本身中进行更改并重建它。</font><font style="vertical-align: inherit;">然后，您可以减少加载的数据量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参考</font></font><a href="https://github.com/twbs/bootstrap" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GitHub上的Bootstrap</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获得构建指南。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将您的custom.css文件链接为bootstrap.css下面的最后一个条目。</font><font style="vertical-align: inherit;">Custom.css样式定义将覆盖bootstrap.css</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML</font></font></p>

<pre><code>&lt;link href="css/bootstrap.min.css" rel="stylesheet"&gt;<font></font>
&lt;link href="css/custom.css" rel="stylesheet"&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复制custom.css中所有图例的样式定义并进行更改（例如margin-bottom：5px;-这将覆盖margin-bottom：20px;）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为您要覆盖基本样式表的各个部分，所以它不会对加载时间产生太大影响。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是我个人遵循的一些最佳做法：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">始终在基本CSS文件之后加载自定义CSS（无响应）。</font></font></li>
<li><font style="vertical-align: inherit;"></font><code>!important</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽可能</font><font style="vertical-align: inherit;">避免使用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这可以覆盖基本CSS文件中的一些重要样式。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想丢失媒体查询，请始终在custom.css之后加载bootstrap-sensitive.css。</font><font style="vertical-align: inherit;">-必须遵循</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好修改必需的属性（并非全部）。</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要重置为</font></font><code>legend</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引导程序</font><font style="vertical-align: inherit;">定义的样式</font><font style="vertical-align: inherit;">，可以在css文件中执行以下操作：</font></font></p>

<pre><code>legend {<font></font>
  all: unset;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="https://css-tricks.com/almanac/properties/a/all/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://css-tricks.com/almanac/properties/a/all/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//css-tricks.com/almanac/properties/a/all/</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS中的all属性将重置选定元素的所有属性，但方向和控制文本方向的unicode-bidi属性除外。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能的值为：</font></font><code>initial</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>inherit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＆</font></font><code>unset</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旁注：</font></font><code>clear</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性与</font></font><code>float</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="https://css-tricks.com/almanac/properties/c/clear/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://css-tricks.com/almanac/properties/c/clear/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）相关联</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在html的头部，将您的custom.css放在bootstrap.css之下。</font></font></p>

<pre><code>&lt;link href="bootstrap.min.css" rel="stylesheet"&gt;<font></font>
&lt;link href="custom.css" rel="stylesheet"&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，在custom.css中，必须为要覆盖的元素使用完全相同的选择器。</font><font style="vertical-align: inherit;">在这种情况下，</font></font><code>legend</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它仅保留</font></font><code>legend</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的custom.css中，因为引导程序没有更具体的选择器。</font></font></p>

<pre><code>legend {<font></font>
  display: inline;<font></font>
  width: auto;<font></font>
  padding: 0;<font></font>
  margin: 0;<font></font>
  font-size: medium;<font></font>
  line-height: normal;<font></font>
  color: #000000;<font></font>
  border: 0;<font></font>
  border-bottom: none;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但在情况下，</font></font><code>h1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，你必须采取更具体的选择喜欢的护理</font></font><code>.jumbotron h1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为</font></font></p>

<pre><code>h1 {<font></font>
  line-height: 2;<font></font>
  color: #f00;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会覆盖</font></font></p>

<pre><code>.jumbotron h1,<font></font>
.jumbotron .h1 {<font></font>
  line-height: 1;<font></font>
  color: inherit;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是css选择器的特殊性的有用说明，您需要了解特定的样式规则将应用于元素。
</font></font><a href="http://css-tricks.com/specifics-on-css-specificity/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://css-tricks.com/specifics-on-css-specificity/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他一切都只是复制/粘贴和编辑样式的问题。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>!important</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是一个好的选择，因为将来您很可能会想要覆盖自己的样式。</font><font style="vertical-align: inherit;">这给我们留下了CSS优先事项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，每个选择器都有自己的数字“权重”：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">积分100分</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类和伪类10分</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1点用于标记选择器和伪元素</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：如果元素具有</font></font><a href="https://css-tricks.com/specifics-on-css-specificity/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自动获胜的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内联样式</font><font style="vertical-align: inherit;">（1000分）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在两种选择器样式中，浏览器将始终选择权重更大的一种。</font><font style="vertical-align: inherit;">样式表的顺序仅在优先级均匀时才重要-这就是为什么覆盖Bootstrap并不容易的原因。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的选择是检查Bootstrap源代码，找出确切定义某些特定样式的方式，然后复制该选择器，使您的元素具有相同的优先级。</font><font style="vertical-align: inherit;">但是，在此过程中，我们有点松开了所有Bootstrap的甜味。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决此问题的最简单方法是将附加的任意ID分配给页面上的根元素之一，如下所示： </font></font><code>&lt;body id="bootstrap-overrides"&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，您可以为任何CSS选择器添加ID前缀，立即为元素添加100磅的权重，并覆盖Bootstrap定义：</font></font></p>

<pre class="lang-css prettyprint-override"><code>/* Example selector defined in Bootstrap */<font></font>
.jumbotron h1 { /* 10+1=11 priority scores */<font></font>
  line-height: 1;<font></font>
  color: inherit;<font></font>
}<font></font>
<font></font>
/* Your initial take at styling */<font></font>
h1 { /* 1 priority score, not enough to override Bootstrap jumbotron definition */<font></font>
  line-height: 1;<font></font>
  color: inherit;<font></font>
}<font></font>
<font></font>
/* New way of prioritization */<font></font>
#bootstrap-overrides h1 { /* 100+1=101 priority score, yay! */<font></font>
  line-height: 1;<font></font>
  color: inherit;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
