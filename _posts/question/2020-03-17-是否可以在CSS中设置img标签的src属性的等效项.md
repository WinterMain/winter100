---
layout: question
title:  是否可以在CSS中设置img标签的src属性的等效项？
date:   2020-03-17T10:45:51.000Z
description: 是否可以src在CSS中设置属性值？目前，我正在做的是：<img src="pathTo/myImage.jpg"/>我希望它像这样<img...
img: 
author: 卡卡西猴子
category: question
answer: 17
tags: HTML CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以</font></font><code>src</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在CSS中</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">属性值？</font><font style="vertical-align: inherit;">目前，我正在做的是：</font></font></p>

<pre><code>&lt;img src="pathTo/myImage.jpg"/&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望它像这样</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;img class="myClass" /&gt;
</code></pre>

<pre class="lang-js prettyprint-override"><code>.myClass {<font></font>
    some-src-property: url("pathTo/myImage.jpg");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">CSS中</font><font style="vertical-align: inherit;">的</font></font><code>background</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>background-image:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">来执行此</font><font style="vertical-align: inherit;">操作</font><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1981篇《是否可以在CSS中设置img标签的src属性的等效项？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Davaid斯丁</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需使用HTML5 :) </font></font></p>

<pre><code>&lt;picture&gt;<font></font>
    &lt;source srcset="smaller.jpg" media="(max-width: 768px)"&gt;<font></font>
    &lt;source srcset="default.jpg"&gt;<font></font>
    &lt;img srcset="default.jpg" alt="My default image"&gt;<font></font>
&lt;/picture&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一LEY</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当用户在</font><font style="vertical-align: inherit;">禁用</font><i><font style="vertical-align: inherit;">“打印</font></i><i><b><font style="vertical-align: inherit;">背景</font></b></i><i><font style="vertical-align: inherit;">色和</font></i><i><b><font style="vertical-align: inherit;">图像</font></b></i><i><font style="vertical-align: inherit;"> ”的情况</font></i><i><b><font style="vertical-align: inherit;">下</font></b></i><font style="vertical-align: inherit;">打印文档时，</font><font style="vertical-align: inherit;">任何基于</font></font><code>background</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>background-image</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能失败的</font><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">不幸的是，这是典型浏览器的默认设置。</font></font><i><font style="vertical-align: inherit;"></font><b><font style="vertical-align: inherit;"></font></b><font style="vertical-align: inherit;"></font><b><font style="vertical-align: inherit;"></font></b><font style="vertical-align: inherit;"></font></i><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里唯一的打印友好和跨浏览器兼容的方法是Bronx提出的方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小老丝</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您尝试根据项目的上下文动态在按钮中添加图像，则可以使用？。</font><font style="vertical-align: inherit;">根据结果​​参考来源。</font><font style="vertical-align: inherit;">在这里，我正在使用mvvm设计，让我的Model.Phases [0]值确定我是否希望基于灯光相位的值在我的按钮上填充打开或关闭的灯泡图像。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不确定是否有帮助。</font><font style="vertical-align: inherit;">我正在使用JqueryUI，Blueprint和CSS。</font><font style="vertical-align: inherit;">类定义应允许您根据自己的喜好为按钮设置样式。</font></font></p>

<pre><code>    &lt;button&gt;                           <font></font>
  &lt;img class="@(Model.Phases[0] ? "light-on": "light-off")" src="@(Model.Phases[0] ? "~/Images/LightBulbOn.png" : "~/Images/LightBulbOff.png")"/&gt;                             <font></font>
  &lt;img class="@(Model.Phases[0] ? "light-on": "light-off")" src="@(Model.Phases[0] ? "~/Images/LightBulbOn.png" : "~/Images/LightBulbOff.png")"/&gt;   <font></font>
  &lt;img class="@(Model.Phases[0] ? "light-on": "light-off")" src="@(Model.Phases[0] ? "~/Images/LightBulbOn.png" : "~/Images/LightBulbOff.png")"/&gt;     <font></font>
</code></pre>

<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖路易</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我要补充一点：背景图像也可以用</font></font><code>background-position: x y;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（x水平y垂直）定位。</font><font style="vertical-align: inherit;">（..）我的案例，CSS：</font></font></p>

<pre><code>(..) <font></font>
#header {<font></font>
  height: 100px; <font></font>
  background-image: url(http://.../head6.jpg); <font></font>
  background-position: center; <font></font>
  background-repeat: no-repeat; <font></font>
  background-color: grey; <font></font>
  (..)<font></font>
} <font></font>
(...)<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端猿</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想设置背景属性，则不能仅使用CSS设置图像的src属性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您可以使用JavaScript来执行此操作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天泡芙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用CSS </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成。</font><font style="vertical-align: inherit;">但是，如果您使用的是JQuery，则可以执行以下操作：</font></font></p>

<pre><code>$("img.myClass").attr("src", "http://somwhere");
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Tom逆天</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者您也可以这样做，我在互联网上发现了问题。</font></font></p>

<p><a href="https://robau.wordpress.com/2012/04/20/override-image-src-in-css/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://robau.wordpress.com/2012/04/20/override-image-src-in-css/</font></font></a></p>

<pre><code>&lt;img src="linkToImage.jpg" class="egg"&gt;
</code></pre>

<pre class="lang-css prettyprint-override"><code>.egg {<font></font>
  width: 100%;<font></font>
  height: 0;<font></font>
  padding: 0 0 200px 0;<font></font>
  background-image: url(linkToImage.jpg);<font></font>
  background-size: cover;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样可以有效地隐藏图像并填充背景。</font><font style="vertical-align: inherit;">噢，这可真是骇人听闻，但是，如果您想使用带有替代文本的IMG标签以及无需使用JavaScript即可缩放的背景？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我正在进行的一个项目中，我创建了一个英雄方块树枝模板</font></font></p>

<pre><code>&lt;div class="hero"&gt;<font></font>
  &lt;img class="image" src="{{ bgImageSrc }}"<font></font>
       alt="{{ altText }}" style="background-image: url({{ bgImageSrc }});"&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidJinJin</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这是一个非常老的问题，但是没有答案提供了永远无法做到这一点的正确理由。</font><font style="vertical-align: inherit;">尽管您可以“做”正在寻找的东西，但是您不能以有效的方式来做。</font><font style="vertical-align: inherit;">为了拥有有效的img标签，它</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">必须</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有src和alt属性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，提供不使用src属性的img标签来实现此目的的任何答案都在促进使用无效代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之：您要查找的内容无法在语法结构内合法完成。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料来源：W3验证器</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光猿</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知，您不能。</font><font style="vertical-align: inherit;">CSS是关于样式的，图像的src是内容。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyEva</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的答案是重申先前的解决方案并强调纯CSS实现。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您要从另一个站点采购内容，因此您无法控制所提供的HTML，则需要Pure CSS解决方案。</font><font style="vertical-align: inherit;">就我而言，我试图删除许可源内容的品牌，以便被许可方不必为他们购买内容的公司做广告。</font><font style="vertical-align: inherit;">因此，我在保留所有其他内容的同时删除了他们的徽标。</font><font style="vertical-align: inherit;">我应该注意，这是在客户的合同范围内。</font></font></p>

<pre><code>{ /* image size is 204x30 */<font></font>
     width:0;<font></font>
     height:0;<font></font>
     padding-left:102px;<font></font>
     padding-right:102px;<font></font>
     padding-top:15px;<font></font>
     padding-bottom:15px;<font></font>
     background-image:url(http://sthstest/Style%20Library/StThomas/images/rhn_nav_logo2.gif);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门路易</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不，您不能通过CSS设置image src属性。</font><font style="vertical-align: inherit;">如您所说，最接近的是</font></font><code>background</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>background-image</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我不建议这样做，因为这样做有点不合逻辑。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果您要定位的浏览器可以使用CSS3解决方案，则可以使用它。</font></font><code>content:url</code> <a href="https://stackoverflow.com/questions/2182716/how-can-we-specify-src-attribute-of-img-tag-in-css/11484688#11484688"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照Pacerier的回答中所述</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以在下面的其他答案中找到其他跨浏览器的解决方案。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryHarry</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将多个图像放入“控制”容器中，然后更改容器的类。</font><font style="vertical-align: inherit;">在CSS中，根据容器的类添加规则来管理图像的可见性。</font><font style="vertical-align: inherit;">这将产生与更改</font></font><code>img src</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单个图像的属性</font><font style="vertical-align: inherit;">相同的效果</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></p>

<pre><code>&lt;span id="light" class="red"&gt;<font></font>
    &lt;img class="red" src="red.png" /&gt;<font></font>
    &lt;img class="yellow" src="yellow.png" /&gt;<font></font>
    &lt;img class="green" src="green.png" /&gt;<font></font>
&lt;/span&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS：</font></font></p>

<pre><code>#light         { ... }<font></font>
#light         *        { display: none; }     // all images are hidden<font></font>
#light.red     .red     { display: inline; }   // show red image when #light is red<font></font>
#light.yellow  .yellow  { display: inline; }   // .. or yellow<font></font>
#light.green   .green   { display: inline; }   // .. or green<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，它将像CSS一样预加载所有图像</font></font><code>backround-image</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但与</font></font><code>img src</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过JS进行</font><font style="vertical-align: inherit;">更改不同</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐猪猪</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在HTML代码中定义2张图片，并用于</font></font><code>display: none;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确定哪一张图片可见。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐猴子</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个非常好的解决方案-&gt; </font></font><a href="http://css-tricks.com/replace-the-image-in-an-img-with-css/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://css-tricks.com/replace-the-image-in-an-img-with-css/</font></font></a><br>
<br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
Pro和Con：</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
（+）与vector一起使用具有相对宽度/高度（</font></font><a href="https://stackoverflow.com/users/461499/robau"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RobAu</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><a href="https://stackoverflow.com/questions/2182716/how-can-we-specify-src-attribute-of-img-tag-in-css/10247567#10247567"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法处理）</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
（+）的图像是跨浏览器（对于IE8 +也适用）</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
（+），它仅使用CSS。</font><font style="vertical-align: inherit;">因此，无需修改img src（或者如果您没有访问权限/不想更改已经存在的img src属性）。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
（-）抱歉，它</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实使用</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了背景CSS属性：)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里小胖小卤蛋</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们是对的。</font><font style="vertical-align: inherit;">IMG是一个内容元素，而CSS是关于设计的。</font><font style="vertical-align: inherit;">但是，当您出于设计目的使用某些内容元素或属性时呢？</font><font style="vertical-align: inherit;">我的网页上都有IMG，如果我更改样式（CSS），则必须更改。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，这是一种以CSS样式定义IMG表示形式（实际上不是图像）的解决方案。</font></font><br></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个1x1透明gif或png。</font></font><br></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为该图像分配IMG的属性“ src”。</font></font><br></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用CSS样式中的“背景图像”定义最终演示。</font></font><br></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它就像一个魅力:)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO小胖</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用这个CSS使用了空的div解决方案：</font></font></p>

<pre><code>#throbber {<font></font>
    background-image: url(/Content/pictures/ajax-loader.gif);<font></font>
    background-repeat: no-repeat;<font></font>
    width: 48px;<font></font>
    height: 48px;<font></font>
    min-width: 48px;<font></font>
    min-height: 48px;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></p>

<pre><code>&lt;div id="throbber"&gt;&lt;/div&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易GO</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content" rel="noreferrer"><code>content:url("image.jpg")</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完整的工作解决方案（</font></font><kbd><a href="http://jsfiddle.net/3BRN7/406/" rel="noreferrer">Live Demo</a></kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;!doctype html&gt;<font></font>
<font></font>
&lt;style&gt;<font></font>
.MyClass123{<font></font>
	content:url("http://imgur.com/SZ8Cm.jpg");<font></font>
}<font></font>
&lt;/style&gt;<font></font>
<font></font>
&lt;img class="MyClass123"/&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过测试和工作：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">铬14.0.835.163 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Safari 4.0.5 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Opera 10.6 </font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过测试，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正常工作：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FireFox 40.0.2（观察开发人员网络工具，您可以看到已加载URL，但未显示图像）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Internet Explorer 11.0.9600.17905（URL永远不会加载）</font></font></li>
</ul></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
