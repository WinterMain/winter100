---
layout: question
title:  background和background-color有什么区别
date:   2020-03-24T03:29:09.000Z
description: 使用background和指定背景色之间有什么区别background-color？片段1body { background-color  blu...
img: 
author: 小卤蛋
category: question
answer: 16
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>background</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">指定背景色之间有什么区别</font></font><code>background-color</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">片段1</font></font></strong></p>

<pre><code>body { background-color: blue; }
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">片段2</font></font></strong></p>

<pre><code>body { background: blue; }
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3317篇《background和background-color有什么区别》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near阳光</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><code>background</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是以下内容的简写属性： </font></font></p>

<pre><code> - background-color<font></font>
 - background-image<font></font>
 - background-repeat<font></font>
 - background-attachment<font></font>
 - background-position<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在</font><a href="https://www.w3schools.com/css/css_background.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;">此处</font></a><font style="vertical-align: inherit;">详细了解每个属性</font></font><a href="https://www.w3schools.com/css/css_background.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性顺序</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在大多数浏览器实现中（我认为可能是较旧的浏览器可能会出现问题），属性的顺序并不重要，除了： </font></font></p>

<ul>
<li><p><code>background-origin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>background-clip</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：当这两个属性同时存在时，第一个引用，</font></font><code>-origin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二个</font><font style="vertical-align: inherit;">引用</font></font><code>-clip</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>background: content-box green padding-box;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等效于： </font></font></p>

<pre><code>background-origin: content-box;<font></font>
background-color: green;<font></font>
background-clip: padding-box;<font></font>
</code></pre></li>
<li><p><code>background-size</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">必须始终遵循</font></font><code>background-position</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且属性必须用</font></font><code>/</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>background-position</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由两个数字组成，则第一个为水平值，第二个为垂直值。</font></font></p></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">APro</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现您无法使用背景色设置渐变。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这有效：</font></font></strong></p>

<pre><code>background:linear-gradient(to right, rgba(255,0,0,0), rgba(255,255,255,1));
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不是：</font></font></strong></p>

<pre><code>background-color:linear-gradient(to right, rgba(255,0,0,0), rgba(255,255,255,1));
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我注意到我没有在文档中看到的一件事是使用 
</font></font><code>background: url("image.png")</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如上所示，如果找不到图片，它会发送302代码，而不是像您使用时那样被忽略 </font></font></p>

<pre><code>background-image: url("image.png") 
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于背景和背景颜色有一个错误</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">区别在于，使用背景时，有时是在CSS背景中创建网页时：#fff //可以覆盖Mask图片（“顶部项，文本或图片”））的块，因此最好始终使用background-安全使用的颜色，在您的设计中（如果有的话）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯LEY</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">区别在于</font></font><code>background</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">速记属性设置了几个与背景相关的属性。</font><font style="vertical-align: inherit;">它集所有这些，即使你只指定例如颜色值，自那时以来，其他属性都设置为初始值，例如</font></font><code>background-image</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这并不意味着它将始终覆盖这些属性的任何其他设置。</font><font style="vertical-align: inherit;">这取决于根据通常被普遍误解的规则的级联。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在实践中，速记往往更安全一些。</font><font style="vertical-align: inherit;">这是一种预防措施（虽然不完整，但很有用），以防止意外地从另一个样式表中获取一些意外的背景属性，例如背景图像。</font><font style="vertical-align: inherit;">此外，它更短。</font><font style="vertical-align: inherit;">但是您需要记住，这实际上意味着“设置所有背景属性”。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易神奇猪猪</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一旦了解可以使用继承功能，就可以做一些漂亮的事情。</font><font style="vertical-align: inherit;">但是首先让我们从</font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Background_and_Borders/Using_CSS_multiple_backgrounds" rel="nofollow noreferrer"><font style="vertical-align: inherit;">背景文档中</font></a><font style="vertical-align: inherit;">了解一些内容</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Background_and_Borders/Using_CSS_multiple_backgrounds" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用CSS3，您可以将多个背景应用于元素。</font><font style="vertical-align: inherit;">这些背景相互叠放，您提供的第一个背景位于顶部，背面提供了最后一个背景。</font><font style="vertical-align: inherit;">只有最后的背景可以包括背景颜色。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，当做一个：</font></font></p>

<pre><code>background: red;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他将背景色设置为红色，因为红色是列出的最后一个值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当一个：</font></font></p>

<pre><code>background: linear-gradient(to right, grey 50%, yellow 2%) red;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">红色是背景色，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您会看到一个渐变。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>    .box{<font></font>
        border-radius: 50%;<font></font>
        width: 200px;<font></font>
        height: 200px;<font></font>
        background: linear-gradient(to right, grey 50%, yellow 2%) red;<font></font>
    }<font></font>
<font></font>
    .box::before{<font></font>
       content: "";<font></font>
       display: block;<font></font>
       margin-left: 50%;<font></font>
       height: 50%;<font></font>
       border-radius: 0 100% 100% 0 / 50%;<font></font>
       transform: translateX(70px) translateY(-26px) rotate(325deg);<font></font>
       background: inherit;<font></font>
    }</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>    &lt;div class="box"&gt;<font></font>
      <font></font>
     &lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，背景色也一样：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>    .box{<font></font>
        border-radius: 50%;<font></font>
        width: 200px;<font></font>
        height: 200px;<font></font>
        background: linear-gradient(to right, grey 50%, yellow 2%) red;<font></font>
    }<font></font>
<font></font>
    .box::before{<font></font>
       content: "";<font></font>
       display: block;<font></font>
       margin-left: 50%;<font></font>
       height: 50%;<font></font>
       border-radius: 0 100% 100% 0 / 50%;<font></font>
       transform: translateX(70px) translateY(-26px) rotate(325deg);<font></font>
       background-color: inherit;<font></font>
    }</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>    &lt;div class="box"&gt;<font></font>
      <font></font>
     &lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发生这种情况的原因是，当我们这样做时：</font></font></p>

<pre><code>background: linear-gradient(to right, grey 50%, yellow 2%) #red;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后一个数字设置背景色。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，在之前，我们从背景继承（然后获得渐变）或背景色，然后得到红色。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比较18个颜色样本在页面上以小矩形呈现100次，一次具有背景，一次具有background-color。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我重新创建了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS性能</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实验，如今结果明显不同。</font></font></p>

<pre><code>background
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome 54</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：443（µs / div）</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox 49</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：162（µs / div）</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边缘</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 10：56（µs / div）</font></font></p>

<pre><code>background-color
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome 54</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：449（µs / div）</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox 49</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：171（µs / div）</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">边缘</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 10：58（µs / div）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您所见-几乎没有区别。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><code>background</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>background-color</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和其他一些与背景相关的东西</font><font style="vertical-align: inherit;">的快捷方式，</font><font style="vertical-align: inherit;">如下所示：</font></font></p>

<pre><code>background-color<font></font>
background-image<font></font>
background-repeat<font></font>
background-attachment<font></font>
background-position <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读W3C的以下声明：</font></font></p>

<blockquote>
  <p></p><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景-速记属性</font></font></h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了缩短代码，也可以在一个属性中指定所有背景属性。</font><font style="vertical-align: inherit;">这称为速记属性。</font></font><p></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景的简写属性是背景：</font></font></p>
</blockquote>

<pre><code>body {<font></font>
  background: white url("img_tree.png") no-repeat right top;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用简写属性时，属性值的顺序为：</font></font></p>

<blockquote>
<pre><code>background-color<font></font>
background-image<font></font>
background-repeat<font></font>
background-attachment<font></font>
background-position<font></font>
</code></pre>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只要其中一个属性值缺失，就没有关系。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva宝儿理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经注意到在为Outlook生成电子邮件时...</font></font></p>

<pre><code>/*works*/<font></font>
background: gray;<font></font>
<font></font>
/*does not work*/<font></font>
background-color: gray;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋卡卡西</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是最好的答案。</font><font style="vertical-align: inherit;">速记（背景）用于重置和DRY（与正手结合）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们都是一样的。</font><font style="vertical-align: inherit;">有多种背景选择器（即</font></font><code>background-color</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>background-image</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>background-position</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），你可以通过简单的两种访问它们</font></font><code>background</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择或更具体的一个。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>background: blue url(/myImage.jpg) no-repeat;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>background-color: blue;<font></font>
background-image: url(/myImage.jpg);<font></font>
background-repeat: no-repeat;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有区别。</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者将以相同的方式工作。</font></font></p>

<blockquote>
  <blockquote>
    <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS背景属性用于定义元素的背景效果。</font></font></p>
    
    <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于背景效果的CSS属性：</font></font></p>
  </blockquote>
  
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景颜色   </font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景图片  </font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景重复   </font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景附件    </font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景位置</font></font></li>
  </ul>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Background属性包括所有这些属性，您只需将它们写成一行即可。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有了</font></font><code>background</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以设置所有</font></font><code>background</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的属性，如：</font></font></p>

<ul>
<li><code>background-color</code> </li>
<li><code>background-image</code><br> </li>
<li><code>background-repeat</code><br></li>
<li><code>background-position</code><br>
<strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等等</font></font></em></strong> </li>
</ul>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有了</font></font><code>background-color</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以指定背景的颜色</font></font></p>

<pre><code>background: url(example.jpg) no-repeat center center #fff;
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">VS。</font></font></em></p>

<pre><code>background-image: url(example.jpg);<font></font>
background-position: center center;<font></font>
background-repeat: no-repeat;<font></font>
background-color: #fff;<font></font>
</code></pre>

<hr>

<h2><a href="http://www.w3schools.com/css/css_background.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多信息</font></font></a></h2>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（请参阅标题：背景-速记属性）</font></font></em></strong></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><code>background</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将取代所有之前的</font></font><code>background-color</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>background-image</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等规格。</font><font style="vertical-align: inherit;">这基本上是简写，但也需要</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新设置</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时，我会用它来覆盖</font></font><code>background</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模板自定义中的</font><font style="vertical-align: inherit;">先前</font><font style="vertical-align: inherit;">规范，在此我需要以下内容：</font></font></p>

<p><code>background: white url(images/image1.jpg) top left repeat;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下所示：</font></font></p>

<p><code>background: black;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，所有参数（</font></font><code>background-image</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>background-position</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>background-repeat</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）将重置为默认值。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假定它们是两个不同的属性，在您的特定示例中，结果没有区别，因为</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background" rel="noreferrer"><code>background</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上是</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景色</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  背景图像</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  背景位置</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  背景重复</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  背景附件</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  背景剪辑</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  背景起源</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  背景大小</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，除了之外</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-color" rel="noreferrer"><code>background-color</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>background</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">快捷方式添加一个或多个值，而无需重复任何其他   </font></font><code>background-*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性。</font></font></p>

<p>Which one to choose is essentially up to you, but it could also depend on specific conditions of your style declarations (e.g if you need to override just the <code>background-color</code> when inheriting other related <code>background-*</code> properties from a parent element, or if you need to remove all the values except the <code>background-color</code>).</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS性能</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><strong><code>background</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vs </font></font><strong><code>background-color</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比较18个颜色样本在页面上以小矩形呈现100次，一次具有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，一次具有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">background-color</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><img src="https://i.stack.imgur.com/pO46S.png" alt="背景与背景色"></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管这些数字来自一次页面重新加载，但随后的刷新使渲染时间发生了变化，但每次的百分比差异基本相同。</font></font></p>
  
  <p><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Safari 7.0.1中使用背景代替背景颜色时</font><strong><font style="vertical-align: inherit;">，这将节省近42.6ms，几乎是原来的两倍</font></strong><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">Chrome 33看起来差不多。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">老实说，这让我震惊，因为最长的时间有两个原因：</font></font></p>
  
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通常总是主张CSS属性的明确性，尤其是在背景方面，因为它会在以后影响特定性。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我以为当浏览器看到时</font></font><code>background: #000;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，他们真的看到了</font></font><code>background: #000 none no-repeat top center;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我在这里没有指向资源的链接，但我记得在某处读过它。</font></font></li>
  </ul>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font></font></strong> <font style="vertical-align: inherit;"><a href="https://github.com/mdo/css-perf#background-vs-background-color" rel="noreferrer"><font style="vertical-align: inherit;">https </font></a><strong><font style="vertical-align: inherit;">: </font></strong></font><a href="https://github.com/mdo/css-perf#background-vs-background-color" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/mdo/css-perf#background-vs-background-color</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
