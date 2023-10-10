---
layout: question
title:  仅使用CSS，将div悬停在<a>上时显示div
date:   2020-03-23T13:18:48.000Z
description: 当有人将鼠标悬停在<a>元素上时，我想显示一个div ，但是我想在CSS中而不是在JavaScript中执行此操作。您知道如何实现吗？...
img: 
author: DavaidTony宝儿
category: question
answer: 9
tags: 的CSS CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当有人将鼠标悬停在</font></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素上时，我想</font><font style="vertical-align: inherit;">显示一个div </font><font style="vertical-align: inherit;">，但是我想在CSS中而不是在JavaScript中执行此操作。</font><font style="vertical-align: inherit;">您知道如何实现吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3060篇《仅使用CSS，将div悬停在<a>上时显示div》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Green</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">别忘了 </font><font style="vertical-align: inherit;">如果您要在图像上悬停，则必须将其放在容器周围。</font><font style="vertical-align: inherit;">CSS：</font></font></p>

<pre><code>.brand:hover + .brand-sales {<font></font>
    display: block;<font></font>
}<font></font>
<font></font>
.brand-sales {<font></font>
    display: none;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您将鼠标悬停在此：</font></font></p>

<pre><code>&lt;span className="brand"&gt;<font></font>
   &lt;img src="https://murmure.me/wp-content/uploads/2017/10/nike-square-1900x1900.jpg" <font></font>
     alt"some image class="product-card-place-logo"/&gt;<font></font>
&lt;/span&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将显示：</font></font></p>

<pre><code>&lt;div class="product-card-sales-container brand-sales"&gt;<font></font>
    &lt;div class="product-card-"&gt;Message from the business goes here. They can talk alot or not&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Tom</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的HTML</font></font></p>

<pre><code>&lt;div&gt;<font></font>
    &lt;h4&gt;Show content&lt;/h4&gt;<font></font>
&lt;/div&gt;<font></font>
&lt;div&gt;<font></font>
  &lt;p&gt;Hello World&lt;/p&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的CSS</font></font></p>

<pre><code> div+div {<font></font>
    display: none;<font></font>
 }<font></font>
<font></font>
 div:hover +div {<font></font>
   display: block;<font></font>
 }<font></font>
</code></pre>

<p><a href="https://codepen.io/KondalDurgam/pen/NYpooe" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CodePen：将鼠标悬停在div上将文本显示在另一个div中</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据我使用此CSS进行的测试：  </font></font></p>

<pre><code>.expandable{<font></font>
display: none;<font></font>
}<font></font>
.expand:hover+.expandable{<font></font>
display:inline !important;<font></font>
}<font></font>
.expandable:hover{<font></font>
display:inline !important;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和这个HTML：</font></font></p>

<pre><code>&lt;div class="expand"&gt;expand&lt;/div&gt;<font></font>
&lt;div class="expand"&gt;expand&lt;/div&gt;<font></font>
&lt;div class="expandable"&gt;expandable&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，结果是它确实使用第二个展开，但没有使用第一个展开。</font><font style="vertical-align: inherit;">因此，如果悬停目标和隐藏的div之间有一个div，则它将不起作用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，如果我想与隐藏的div交互，而每次离开触发元素时都看不到它消失（在这种情况下为a），则必须添加：</font></font></p>

<pre><code>div:hover {<font></font>
    display: block;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请测试此代码</font></font></p>

<pre><code>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt;<font></font>
&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
<font></font>
&lt;style type="text/css"&gt; <font></font>
div<font></font>
{<font></font>
display:none;<font></font>
color:black<font></font>
width:100px;<font></font>
height:100px;<font></font>
background:white;<font></font>
animation:myfirst 9s;<font></font>
-moz-animation:myfirst 9s; /* Firefox */<font></font>
-webkit-animation:myfirst 5s; /* Safari and Chrome */  <font></font>
<font></font>
}<font></font>
<font></font>
@keyframes myfirst<font></font>
{<font></font>
0%   {background:blue;}<font></font>
25%  {background:yellow;}<font></font>
50%  {background:blue;}<font></font>
100% {background:green;}<font></font>
}<font></font>
<font></font>
 @-moz-keyframes myfirst /* Firefox */<font></font>
{<font></font>
0%   {background:white;}<font></font>
50%  {background:blue;}<font></font>
100% {background:green;}<font></font>
}<font></font>
<font></font>
@-webkit-keyframes myfirst /* Safari and Chrome */<font></font>
{<font></font>
  0%   {background:red;}<font></font>
  25%  {background:yellow;}<font></font>
  50%  {background:blue;}<font></font>
  100% {background:green;}<font></font>
}<font></font>
<font></font>
a:hover + div{<font></font>
display:inline;<font></font>
} <font></font>
&lt;/style&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
&lt;a href="#"&gt;Hover over me!&lt;/a&gt;<font></font>
&lt;div&gt;the color is changing now&lt;/div&gt;<font></font>
&lt;div&gt;&lt;/div&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Tony</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想提供这种通用模板解决方案，该解决方案扩展了Yi Jiang提供的正确解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他好处包括：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持将鼠标悬停在任何元素类型或多个元素上；</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">弹出窗口可以是任何元素类型或元素集，包括对象；</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自我证明代码；</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保弹出窗口出现在其他元素上方；</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果从数据库生成html代码，则可以遵循的良好基础。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在html中，放置以下结构：</font></font></p>

<pre><code>&lt;div class="information_popup_container"&gt;<font></font>
&lt;div class="information"&gt;<font></font>
&lt;!-- The thing or things you want to hover over go here such as images, tables, <font></font>
     paragraphs, objects other divisions etc. --&gt; <font></font>
&lt;/div&gt;<font></font>
&lt;div class="popup_information"&gt;<font></font>
&lt;!-- The thing or things you want to popup go here such as images, tables, <font></font>
     paragraphs, objects other divisions etc. --&gt; <font></font>
&lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在css中放置以下结构：</font></font></p>

<pre><code>div.information_popup_container {<font></font>
position: absolute;<font></font>
width:0px;<font></font>
height:0px;<font></font>
/* Position Information */<font></font>
/* Appearance Information */<font></font>
}<font></font>
div.information_popup_container &gt; div.information {<font></font>
/* Position Information */<font></font>
/* Appearance Information */<font></font>
}<font></font>
div.information_popup_container &gt; div.popup_information {<font></font>
position: fixed;<font></font>
visibility: hidden;<font></font>
/* Position Information */<font></font>
/* Appearance Information */<font></font>
}<font></font>
div.information_popup_container &gt; div.information:hover + div.popup_information {<font></font>
visibility: visible;<font></font>
z-index: 200;<font></font>
}<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要注意的几点是：</font></font></h2>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为div.popup的位置设置为固定的（也可以使用绝对值），所以内容不在文档的正常流程中，因此可见属性无法正常工作。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置z-index以确保div.popup出现在其他页面元素上方。</font></font></li>
<li>The information_popup_container is set to a small size and thus cannot be hovered over.</li>
<li>This code only supports hovering over the div.information element.  To support hovering over both the div.information and div.popup then see Hover Over The Popup below.</li>
<li>It has been tested and works as expected in Opera 12.16 Internet Explorer 10.0.9200, Firefox 18.0 and Google Chrome 28.0.15.</li>
</ol>

<h3>Hover Over The Popup</h3>

<p>As additional information.  When the popup contains information that you might want to cut and paste or contains an object that you might want to interact with then first replace:</p>

<pre><code>div.information_popup_container &gt; div.information:hover + div.popup_information {<font></font>
visibility: visible;<font></font>
z-index: 200;<font></font>
}<font></font>
</code></pre>

<p>with</p>

<pre><code>div.information_popup_container &gt; div.information:hover + div.popup_information <font></font>
,div.information_popup_container &gt; div.popup_information:hover {<font></font>
visibility: visible;<font></font>
z-index: 200;<font></font>
}<font></font>
</code></pre>

<p>And second, adjust the position of div.popup so that there is an overlap with div.information.  A few pixels is sufficient to ensure that the div.popup is can receive the hover when moving the cusor off div.information.</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这在Internet Explorer 10.0.9200中无法正常工作，在Opera 12.16，Firefox 18.0和Google Chrome 28.0.15中工作正常。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">带有弹出式多级菜单的完整示例，</font><font style="vertical-align: inherit;">请参见小提琴</font></font><a href="http://jsfiddle.net/F68Le/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/F68Le/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.showme {<font></font>
  display: none;<font></font>
}<font></font>
<font></font>
.showhim:hover .showme {<font></font>
  display: block;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class="showhim"&gt;HOVER ME<font></font>
  &lt;div class="showme"&gt;hai&lt;/div&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><a href="http://jsfiddle.net/cor6bay6/1/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsfiddle</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于这个答案很受欢迎，我认为需要做一个小小的解释。</font><font style="vertical-align: inherit;">当您将鼠标悬停在内部元素上时，使用此方法将不会消失。</font><font style="vertical-align: inherit;">因为.showme位于.showhim内部，所以当您在两行文本（或任何两行文本）之间移动鼠标时，它不会消失。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些是在实现此类行为时需要注意的quirq的示例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这完全取决于您需要什么。</font><font style="vertical-align: inherit;">此方法适用于菜单样式的方案，而</font></font><a href="https://stackoverflow.com/questions/5210033/using-only-css-show-div-on-hover-over-a#5210074"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Yi Jiang</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的适用于工具提示。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以执行</font></font><a href="http://jsfiddle.net/Vqmaw/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下操作</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">： 
</font></font></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>div {<font></font>
    display: none;<font></font>
}<font></font>
    <font></font>
a:hover + div {<font></font>
    display: block;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;a&gt;Hover over me!&lt;/a&gt;<font></font>
&lt;div&gt;Stuff shown on hover&lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这使用</font></font><a href="http://meyerweb.com/eric/articles/webrev/200007a.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相邻的兄弟选择器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，是the </font></font><a href="http://www.alistapart.com/articles/dropdowns"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">鱼下拉菜单</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的基础</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5允许锚元素包装几乎所有内容，因此在这种情况下，</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">元素成为锚的子级。</font><font style="vertical-align: inherit;">否则原理是相同的-使用</font></font><code>:hover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">伪类更改</font></font><code>display</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个元素</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">属性。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现使用opacity更好，它允许您添加</font></font><a href="http://css3generator.com/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">css3</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">过渡以达到很好的悬停效果。</font><font style="vertical-align: inherit;">转换将仅由较旧的IE浏览器删除，因此可以正常降级。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>#stuff {<font></font>
    opacity: 0.0;<font></font>
    -webkit-transition: all 500ms ease-in-out;<font></font>
    -moz-transition: all 500ms ease-in-out;<font></font>
    -ms-transition: all 500ms ease-in-out;<font></font>
    -o-transition: all 500ms ease-in-out;<font></font>
    transition: all 500ms ease-in-out;<font></font>
}<font></font>
#hover {<font></font>
    width:80px;<font></font>
    height:20px;<font></font>
    background-color:green;<font></font>
    margin-bottom:15px;<font></font>
}<font></font>
#hover:hover + #stuff {<font></font>
    opacity: 1.0;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div id="hover"&gt;Hover&lt;/div&gt;<font></font>
&lt;div id="stuff"&gt;stuff&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
