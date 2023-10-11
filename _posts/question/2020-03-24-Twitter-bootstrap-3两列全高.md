---
layout: question
title:  Twitter bootstrap 3两列全高
date:   2020-03-24T09:41:33.000Z
description: 我正在尝试使用twitter bootstrap 3 进行两列全高布局。似乎twitter bootstrap 3不支持全高布局。我想做的事：  +-...
img: 
author: 神乐神奇
category: question
answer: 15
tags: html CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试</font><font style="vertical-align: inherit;">使用twitter bootstrap 3 </font><font style="vertical-align: inherit;">进行两列</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全高</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">布局。似乎</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">twitter bootstrap 3</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不支持全高布局。</font><font style="vertical-align: inherit;">我想做的事：</font></font></p>

<pre><code>  +-------------------------------------------------+<font></font>
  |                     Header                      |<font></font>
  +------------+------------------------------------+<font></font>
  |            |                                    |<font></font>
  |            |                                    |<font></font>
  |Navigation  |         Content                    |<font></font>
  |            |                                    |<font></font>
  |            |                                    |<font></font>
  |            |                                    |<font></font>
  |            |                                    |<font></font>
  |            |                                    |<font></font>
  |            |                                    |<font></font>
  +------------+------------------------------------+<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果内容增加，则导航也应增加。 </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个父母的身高100％无效，因为在某些情况下内容为一行。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绝对位置似乎是错误的方法</font></font></li>
<li><code>display: table</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而</font></font><code>display:table-cell</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决这个问题，但它是胜之不武</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的HTML：</font></font></p>

<pre><code>    &lt;div class="container"&gt;<font></font>
      &lt;div class="row"&gt;<font></font>
        &lt;div class="col-md-3"&gt;&lt;/div&gt;<font></font>
        &lt;div class="col-md-9"&gt;&lt;/div&gt;<font></font>
      &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法使它与默认的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">twitter bootstrap 3</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类一起使用？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3586篇《Twitter bootstrap 3两列全高》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在尝试了此处提供的代码之后：</font></font><a href="http://cyberdesigncraft.com/bootstrap-3-grid-tutorial/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引导程序教程</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是使用最新的</font></font><a href="https://github.com/twbs/bootstrap/releases/download/v3.0.2/bootstrap-3.0.2-dist.zip" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> v3.0.2的</font><font style="vertical-align: inherit;">另一种选择</font><font style="vertical-align: inherit;">：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记：</font></font></strong> </p>

<pre><code>&lt;div id="headcontainer" class="container"&gt;<font></font>
           &lt;p&gt;Your Header&lt;/p&gt;    <font></font>
&lt;/div&gt;<font></font>
&lt;div id="maincontainer" class="container"&gt;<font></font>
      &lt;div class="row"&gt;<font></font>
         &lt;div class="col-xs-4"&gt; <font></font>
            &lt;p&gt;Your Navigation&lt;/p&gt; <font></font>
         &lt;/div&gt;<font></font>
         &lt;div class="col-xs-8"&gt; <font></font>
            &lt;p&gt;Your Content&lt;/p&gt; <font></font>
         &lt;/div&gt;<font></font>
      &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他CSS：</font></font></strong></p>

<pre><code>#maincontainer, #headcontainer {<font></font>
width: 100%;<font></font>
}<font></font>
<font></font>
#headcontainer {<font></font>
background-color:#CCCC99; <font></font>
height: 150px<font></font>
}<font></font>
<font></font>
#maincontainer .row .col-xs-4{<font></font>
background-color:gray; <font></font>
height:1000px<font></font>
}<font></font>
<font></font>
#maincontainer .row .col-xs-8{<font></font>
background-color:green;<font></font>
height: 1000px<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样本</font></font><a href="http://jsfiddle.net/zHRZr/4/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSFiddle</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这对任何有兴趣的人有所帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个</font></font></p>

<pre><code>&lt;div class="row row-offcanvas row-offcanvas-right"&gt;<font></font>
&lt;div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar" role="navigation"&gt;Nav     Content&lt;/div&gt;<font></font>
&lt;div class="col-xs-12 col-sm-9"&gt;Content goes here&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这使用Bootstrap 3，因此不需要额外的CSS等。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否</font><font style="vertical-align: inherit;">  在JAVAscript的部分中</font><font style="vertical-align: inherit;">看到了引导程序的</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修补</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">程序</font><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这将是最好，最简单的解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在那看看：</font><a href="http://getbootstrap.com/javascript/#affix" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://getbootstrap.com/javascript/#affix" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//getbootstrap.com/javascript/#affix</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋泡芙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里没有抵消提及。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用绝对值来定位左侧边栏。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的CSS</font></font></em></p>

<pre><code>.sidebar-fixed{<font></font>
  width: 16.66666667%;<font></font>
  height: 100%;<font></font>
}<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的HTML</font></font></em></p>

<pre><code>&lt;div class="row"&gt;<font></font>
  &lt;div class="sidebar-fixed"&gt;<font></font>
    Side Bar<font></font>
  &lt;/div&gt;<font></font>
  &lt;div class="col-md-10 col-md-offset-2"&gt;<font></font>
    CONTENT<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个 </font></font></p>

<p></p>

<pre><code> &lt;div class="container"&gt;<font></font>
     &lt;!-- Header--&gt;         <font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
 &lt;div class="row-fluid"&gt;<font></font>
     &lt;div class="span3 well"&gt;<font></font>
         &lt;ul class="nav nav-list"&gt;<font></font>
             &lt;li class="nav-header"&gt;Our Services&lt;/li&gt;<font></font>
                &lt;!-- Navigation  --&gt;<font></font>
             &lt;li class="active"&gt;&lt;a href="#"&gt;Overview&lt;/a&gt;&lt;/li&gt;<font></font>
             &lt;li&gt;&lt;a href="#"&gt;Android Applications&lt;/a&gt;&lt;/li&gt;<font></font>
             &lt;li class="divider"&gt;&lt;/li&gt;<font></font>
         &lt;/ul&gt;<font></font>
     &lt;/div&gt;<font></font>
     &lt;div class="span7 offset1"&gt;<font></font>
      &lt;!-- Content --&gt;         <font></font>
     &lt;/div&gt;<font></font>
 &lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">造访</font></font><a href="http://www.sitepoint.com/building-responsive-websites-using-twitter-bootstrap/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.sitepoint.com/building-sensitive-websites-using-twitter-bootstrap/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢Syed </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryItachi</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我编写了一个与Bootstrap兼容的简单CSS，以创建完整的宽度和高度表：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴：</font></font></strong> <font style="vertical-align: inherit;"><a href="https://jsfiddle.net/uasbfc5e/4/" rel="nofollow"><font style="vertical-align: inherit;">https </font></a><strong><font style="vertical-align: inherit;">: </font></strong></font><a href="https://jsfiddle.net/uasbfc5e/4/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/uasbfc5e/4/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原理是：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在主DIV上添加“ tablefull”  </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后隐式地，下面的DIV将创建行  </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后行下方的DIV将是单元格  </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将“ tableheader”类用于标题或类似内容</font></font></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></strong></p>

<pre><code>&lt;div class="tablefull"&gt;<font></font>
    &lt;div class="tableheader"&gt;<font></font>
        &lt;div class="col-xs-4"&gt;Header A&lt;/div&gt;<font></font>
        &lt;div class="col-xs-4"&gt;B&lt;/div&gt;<font></font>
        &lt;div class="col-xs-4"&gt;C&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div&gt;<font></font>
        &lt;div class="col-xs-6"&gt;Content 50% width auto height&lt;/div&gt;<font></font>
        &lt;div class="col-xs-6"&gt;Hello World&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div&gt;<font></font>
        &lt;div class="col-xs-9"&gt;Content 70% width auto height&lt;/div&gt;<font></font>
        &lt;div class="col-xs-3"&gt;Merry Halloween&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS：</font></font></strong></p>

<pre><code>div.tablefull {<font></font>
    display: table;<font></font>
    table-layout: fixed;<font></font>
    width: 100%;<font></font>
    height: 100%;<font></font>
}<font></font>
<font></font>
div.tablefull&gt;div.tableheader, div.tablefull&gt;div.tableheader&gt;div{<font></font>
    height: 0%;<font></font>
}<font></font>
<font></font>
div.tablefull&gt;div {<font></font>
    display: table-row;<font></font>
}<font></font>
<font></font>
div.tablefull&gt;div&gt;div {<font></font>
    display: table-cell;<font></font>
    height: 100%;<font></font>
    padding: 0;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，我已经通过</font><strong><font style="vertical-align: inherit;">Bootstrap 3.0</font></strong><font style="vertical-align: inherit;">实现了同样的功能</font></font><strong><font style="vertical-align: inherit;"></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最新引导程序的示例</font></font></strong></p>

<p><a href="http://jsfiddle.net/HDNQS/1/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/HDNQS/1/</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></strong></p>

<pre><code>&lt;div class="header"&gt;<font></font>
    whatever<font></font>
&lt;/div&gt;<font></font>
&lt;div class="container-fluid wrapper"&gt;<font></font>
    &lt;div class="row"&gt;<font></font>
        &lt;div class="col-md-3 navigation"&gt;&lt;/div&gt;<font></font>
        &lt;div class="col-md-9 content"&gt;&lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SCSS：</font></font></strong></p>

<pre><code>html, body, .wrapper {<font></font>
    padding: 0;<font></font>
    margin: 0;<font></font>
    height: 100%;<font></font>
}<font></font>
<font></font>
$headerHeight: 43px;<font></font>
<font></font>
.navigation, .content {<font></font>
    display: table-cell;<font></font>
    float: none;<font></font>
    vertical-align: top;<font></font>
}<font></font>
<font></font>
.wrapper {<font></font>
    display: table;<font></font>
    width: 100%;<font></font>
    margin-top: -$headerHeight;<font></font>
    padding-top: $headerHeight;<font></font>
}<font></font>
<font></font>
.header {<font></font>
    height: $headerHeight;<font></font>
}<font></font>
<font></font>
.row {<font></font>
    height: 100%;<font></font>
    margin: 0;<font></font>
    display: table-row;<font></font>
    &amp;:before, &amp;:after {<font></font>
        content: none;<font></font>
    }<font></font>
}<font></font>
<font></font>
.navigation {<font></font>
    background: #4a4d4e;<font></font>
    padding-left: 0;<font></font>
    padding-right: 0;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您担心的只是放下颜色，那么还有一种更简单的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将此标签放在您的身体标签的首尾</font></font></p>

<pre><code>&lt;div id="nfc" class="col col-md-2"&gt;&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而这在你的CSS</font></font></p>

<pre><code>#nfc{<font></font>
  background: red;<font></font>
  top: 0;<font></font>
  left: 0;<font></font>
  bottom: 0;<font></font>
  position: fixed;<font></font>
  z-index: -99;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只是创建一个形状，将其固定在页面后面并将其拉伸到最大高度。</font><font style="vertical-align: inherit;">通过使用现有的引导程序类，您将获得正确的宽度，并且它将保持响应状态。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种方法ofc有一些局限性，但是如果它是针对页面的根结构的，那是最好的答案。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font></p>

<pre><code>&lt;div class="container"&gt;<font></font>
    &lt;div class="row"&gt;<font></font>
        &lt;div class="col-md-12"&gt;header section&lt;/div&gt;<font></font>
<font></font>
    &lt;/div&gt;<font></font>
     &lt;div class="row fill"&gt;<font></font>
        &lt;div class="col-md-4"&gt;Navigation&lt;/div&gt;<font></font>
        &lt;div class="col-md-8"&gt;Content&lt;/div&gt;<font></font>
<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.fill类的css在下面</font></font></p>

<pre><code> .fill{<font></font>
    width:100%;<font></font>
    height:100%;<font></font>
    min-height:100%;<font></font>
    padding:10px;<font></font>
    color:#efefef;<font></font>
    background: blue;<font></font>
}<font></font>
.col-md-12<font></font>
{<font></font>
    background: red;<font></font>
<font></font>
}<font></font>
<font></font>
.col-md-4<font></font>
{<font></font>
    background: yellow;<font></font>
    height:100%;<font></font>
    min-height:100%;<font></font>
<font></font>
}<font></font>
.col-md-8<font></font>
{<font></font>
    background: green;<font></font>
    height:100%;<font></font>
    min-height:100%;<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">供您参考，请看</font></font><a href="http://jsfiddle.net/zrBGw/129/embedded/result/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴。</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，最好的选择似乎是与</font></font><code>padding-bottom</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">负面</font></font><code>margin-bottom</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">策略</font><font style="vertical-align: inherit;">对抗</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我举了两个例子。</font><font style="vertical-align: inherit;">一个在</font></font><code>&lt;header&gt;</code> <strong><a href="http://jsfiddle.net/scsGj/25/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">里面</font></font></a></strong> <code>.container</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，另一个在</font></font><strong><a href="http://jsfiddle.net/scsGj/26/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">外面</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两种版本均应正常工作。</font><font style="vertical-align: inherit;">请注意以下</font></font><code>@media</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查询</font><font style="vertical-align: inherit;">的使用，</font><font style="vertical-align: inherit;">以便删除较小屏幕上的多余填充...</font></font></p>

<pre><code>@media screen and (max-width:991px) {<font></font>
    .content { padding-top:0; }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除此之外，这些示例还可以解决您的问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Tom</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现代且非常简单的解决方案：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></p>

<pre><code>&lt;div class="container"&gt;<font></font>
  &lt;div class="row"&gt;<font></font>
    &lt;div class="col-md-3"&gt;&lt;/div&gt;<font></font>
    &lt;div class="col-md-9"&gt;&lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS：</font></font></p>

<pre><code>.row{<font></font>
    display: flex;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry神奇</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以用</font></font><code>padding-bottom: 100%; margin-bottom: -100%;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">技巧</font><font style="vertical-align: inherit;">实现您想要的</font><font style="vertical-align: inherit;">，在</font></font><a href="http://jsfiddle.net/W29Wh/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴中</font><font style="vertical-align: inherit;">可以看到</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对您的HTML进行了一些更改，但是使用以下代码，您可以使用自己的HTML达到相同的结果</font></font></p>

<pre><code>.col-md-9 {<font></font>
    overflow: hidden;<font></font>
}<font></font>
<font></font>
.col-md-3 {<font></font>
    padding-bottom: 100%;<font></font>
    margin-bottom: -100%;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知，您最多可以使用5种方法来完成此任务：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用CSS显示表/表单元格属性或使用实际表。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在包装器内使用绝对定位的元素。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Flexbox显示属性，但到今天为止，它仍然有</font></font><a href="http://caniuse.com/#search=flexbox"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分支持</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过使用</font></font><a href="http://alistapart.com/article/fauxcolumns"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">人造色谱柱技术</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模拟整个色谱柱的高度</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用填充/边距技术。</font></font><a href="http://jsfiddle.net/scsGj/19/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bootstrap：我没有太多经验，但是我认为他们没有为此提供样式。</font></font></p>

<pre><code>.row<font></font>
{<font></font>
    overflow: hidden;<font></font>
    height: 100%;<font></font>
}<font></font>
.row .col-md-3,<font></font>
.row .col-md-9 <font></font>
{<font></font>
    padding: 30px 3.15% 99999px; <font></font>
    float: left;<font></font>
    margin-bottom: -99999px;<font></font>
}<font></font>
.row .col-md-3 p,<font></font>
.row .col-md-9 p <font></font>
{<font></font>
    margin-bottom: 30px;<font></font>
}<font></font>
.col-md-3<font></font>
{<font></font>
    background: pink;<font></font>
    left:0;<font></font>
    width:25%<font></font>
}<font></font>
.col-md-9<font></font>
{<font></font>
    width: 75%;<font></font>
    background: yellow;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想到了一个细微的更改，它不会更改默认的引导行为。</font><font style="vertical-align: inherit;">而且我只能在需要时使用它：</font></font></p>

<pre><code>.table-container {<font></font>
  display: table;<font></font>
}<font></font>
<font></font>
.table-container .table-row {<font></font>
  height: 100%;<font></font>
  display: table-row;<font></font>
}<font></font>
<font></font>
.table-container .table-row .table-col {<font></font>
  display: table-cell;<font></font>
  float: none;<font></font>
  vertical-align: top;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我可以这样使用它：</font></font></p>

<pre><code>&lt;div class="container table-container"&gt;<font></font>
  &lt;div class="row table-row"&gt;<font></font>
    &lt;div class="col-lg-4 table-col"&gt; ... &lt;/div&gt;<font></font>
    &lt;div class="col-lg-4 table-col"&gt; ... &lt;/div&gt;<font></font>
    &lt;div class="col-lg-4 table-col"&gt; ... &lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">纯粹的CSS解决方案非常容易，并且可以像一个魅力十足的跨浏览器一样工作。   </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需向nav和content列添加一个较大的填充和同样大的负边距，然后将其行包装在隐藏了溢出的类中。</font></font><br>
<a href="http://fiddle.jshell.net/panchroma/dGY9g/show/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实时取景</font></font></a><br>
<a href="http://fiddle.jshell.net/panchroma/dGY9g/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑取景</font></font></a> </p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的HTML</font></font></strong>  </p>

<pre><code>&lt;div class="container"&gt;<font></font>
<font></font>
  &lt;div class="row"&gt;<font></font>
    &lt;div class="col-xs-12 header"&gt;&lt;h1&gt;Header&lt;/h1&gt;&lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
<font></font>
  &lt;div class="row col-wrap"&gt;<font></font>
<font></font>
    &lt;div class="col-md-3 col"&gt;<font></font>
      &lt;h1&gt;Nav&lt;/h1&gt;<font></font>
    &lt;/div&gt;<font></font>
<font></font>
    &lt;div class="col-md-9 col"&gt;<font></font>
      &lt;h1&gt;Content&lt;/h1&gt;<font></font>
    &lt;/div&gt;<font></font>
<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的CSS</font></font></strong>  </p>

<pre><code>.col{<font></font>
margin-bottom: -99999px;<font></font>
padding-bottom: 99999px;<font></font>
}<font></font>
<font></font>
.col-wrap{<font></font>
overflow: hidden; <font></font>
}  <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">祝好运！</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
