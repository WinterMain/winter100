---
layout: question
title:  img src SVG使用CSS更改样式
date:   2020-03-23T01:57:35.000Z
description: html<img src="logo.svg" alt="Logo" class="logo-img">的CSS.logo-img path...
img: 
author: 米亚
category: question
answer: 11
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">html</font></font></strong></p>

<pre><code>&lt;img src="logo.svg" alt="Logo" class="logo-img"&gt;
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的CSS</font></font></strong></p>

<pre><code>.logo-img path {<font></font>
  fill: #000;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的svg加载并且是本地的，</font></font><code>fill: #fff</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是当我使用</font><font style="vertical-align: inherit;">上面的SVG </font></font><code>css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试将其更改为黑色时，它并没有改变，这是我第一次使用SVG，我不确定为什么它不起作用。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单..</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用以下代码：</font></font></p>

<pre><code>&lt;svg class="logo"&gt;<font></font>
  &lt;use xlink:href="../../static/icons/logo.svg#Capa_1"&gt;&lt;/use&gt;<font></font>
&lt;/svg&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先指定svg的路径，然后输入其ID，在本例中为“ Capa_1”。</font><font style="vertical-align: inherit;">您可以通过在任何编辑器中打开svg来获取其ID。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在CSS中： </font></font></p>

<pre><code>.logo {<font></font>
  fill: red;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于SVG基本上是代码，因此只需要内容。</font><font style="vertical-align: inherit;">我使用PHP获取内容，但是您可以使用任何您想要的内容。</font></font></p>

<pre><code>&lt;?php<font></font>
$content    = file_get_contents($pathToSVG);<font></font>
?&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我将内容按原样打印在div容器中</font></font></p>

<pre><code>&lt;div class="fill-class"&gt;&lt;?php echo $content;?&gt;&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最终在CSS上为容器的SVG子项设置规则</font></font></p>

<pre><code>.fill-class &gt; svg { <font></font>
    fill: orange;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我得到了带有材料图标SVG的结果：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla Firefox 59.0.2（64位）Linux</font></font></p>

<p><a href="https://i.stack.imgur.com/46V0s.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/46V0s.jpg" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google Chrome66.0.3359.181（正式版）（64位）Linux</font></font></p>

<p><a href="https://i.stack.imgur.com/432FP.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/432FP.jpg" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Opera 53.0.2907.37 Linux</font></font></p>

<p><a href="https://i.stack.imgur.com/JUJAe.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/JUJAe.jpg" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么不使用一个或多个svg图像创建webfont，将webfont导入css，然后仅使用css color属性更改字形的颜色？</font><font style="vertical-align: inherit;">无需JavaScript</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，您必须将SVG注入HTML DOM。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个名为</font></font><a href="https://github.com/iconfu/svg-inject" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SVGInject的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开源库</font><font style="vertical-align: inherit;">可以为您完成此操作。</font><font style="vertical-align: inherit;">它使用该</font></font><code>onload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性触发注入。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是使用SVGInject的一个最小示例：</font></font></p>

<pre><code>&lt;html&gt;<font></font>
  &lt;head&gt;<font></font>
    &lt;script src="svg-inject.min.js"&gt;&lt;/script&gt;<font></font>
  &lt;/head&gt;<font></font>
  &lt;body&gt;<font></font>
    &lt;img src="image.svg" onload="SVGInject(this)" /&gt;<font></font>
  &lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">加载图像后，</font></font><code>onload="SVGInject(this)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将触发注入，并且该</font></font><code>&lt;img&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素将被</font></font><code>src</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性中</font><font style="vertical-align: inherit;">提供的SVG文件的内容替换</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它解决了SVG注入的几个问题：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以隐藏SVG，直到完成注射。</font><font style="vertical-align: inherit;">如果在加载期间已应用样式，则这很重要，否则会导致短暂的“未样式化内容闪烁”。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>&lt;img&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素自动注入自己。</font><font style="vertical-align: inherit;">如果您动态添加SVG，则不必担心再次调用注入函数。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果将SVG多次注入，则将随机字符串添加到SVG中的每个ID，以避免在文档中多次具有相同的ID。 </font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SVGInject是纯Javascript，可与所有支持SVG的浏览器一起使用。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免责声明：我是SVGInject的合著者</font></font></em></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用滤镜转换为任何颜色。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近找到了这个解决方案，希望有人可以使用它。</font><font style="vertical-align: inherit;">由于该解决方案使用滤镜，因此可以用于任何类型的图像。</font><font style="vertical-align: inherit;">不只是svg。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您只想更改单色图像，则可以在某些滤镜的帮助下完成此操作。</font><font style="vertical-align: inherit;">当然，它也适用于多色图像，但是您不能指定特定的颜色。</font><font style="vertical-align: inherit;">只有整个图像。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">滤镜来自“ </font></font><a href="https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters/43960991#43960991"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何仅使用CSS滤镜将黑色转换为任何给定颜色”中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议的脚本。</font><font style="vertical-align: inherit;">
如果要将白色更改为任何颜色，可以调整每个滤镜的反转值。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.startAsBlack{<font></font>
  display: inline-block;<font></font>
  width: 50px;<font></font>
  height: 50px;<font></font>
  background: black;<font></font>
}<font></font>
<font></font>
.black-green{<font></font>
  filter: invert(43%) sepia(96%) saturate(1237%) hue-rotate(88deg) brightness(128%) contrast(119%);<font></font>
}<font></font>
<font></font>
.black-red{<font></font>
  filter: invert(37%) sepia(93%) saturate(7471%) hue-rotate(356deg) brightness(91%) contrast(135%);<font></font>
}<font></font>
<font></font>
.black-blue{<font></font>
  filter: invert(12%) sepia(83%) saturate(5841%) hue-rotate(244deg) brightness(87%) contrast(153%);<font></font>
}<font></font>
<font></font>
.black-purple{<font></font>
  filter: invert(18%) sepia(98%) saturate(2657%) hue-rotate(289deg) brightness(121%) contrast(140%);<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>Black to any color: &lt;br/&gt;<font></font>
&lt;div class="startAsBlack black-green"&gt;&lt;/div&gt;<font></font>
&lt;div class="startAsBlack black-red"&gt;&lt;/div&gt;<font></font>
&lt;div class="startAsBlack black-blue"&gt;&lt;/div&gt;<font></font>
&lt;div class="startAsBlack black-purple"&gt;&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您只是在实色和黑白之间切换图像，则可以将一个选择器设置为： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{filter：none;}</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个为：</font></font></p>

<pre><code>{filter:grayscale(100%);}
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了扩展@gringo答案，可以使用其他答案中描述的Javascript方法，但是需要用户下载不必要的图像文件，并且IMO会膨胀您的代码。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为更好的方法是将所有1色矢量图形迁移到webfont文件。</font><font style="vertical-align: inherit;">我过去曾经使用过</font></font><a href="https://fortawesome.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Fort Awesome</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将您的SVG格式的自定义图标/图像以及您可能使用的任何第三方图标（Font Awesome，Bootstrap图标等）组合到单个webfont文件中的效果非常好用户必须下载。</font><font style="vertical-align: inherit;">您也可以对其进行自定义，因此仅包含您正在使用的第三方图标。</font><font style="vertical-align: inherit;">这样可以减少页面必须发出的请求数量，并且可以减轻页面的整体负担，尤其是如果您已经包含任何第三方图标库的话。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您更喜欢面向开发人员的选项，则可以使用</font></font><a href="https://www.google.com/search?q=npm+svg+webfont" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google“ npm svg webfont”</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并使用最适合您的环境的节点模块之一。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一旦完成了这两个选项中的任何一个，就可以通过CSS轻松更改颜色，并且很可能在此过程中加快了网站的速度。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试纯CSS：</font></font></p>

<pre><code>.logo-img {<font></font>
  // to black<font></font>
  filter: invert(1);<font></font>
  // or to blue<font></font>
  // filter: invert(1) sepia(1) saturate(5) hue-rotate(175deg);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本文中的更多信息</font></font><a href="https://blog.union.io/code/2017/08/10/img-svg-fill/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://blog.union.io/code/2017/08/10/img-svg-fill/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2018：如果您想要动态颜色，不想使用javascript且不需要内联SVG，请使用CSS变量。</font><font style="vertical-align: inherit;">适用于Chrome，Firefox和Safari。</font><font style="vertical-align: inherit;">编辑：和边缘</font></font></p>

<pre><code>&lt;svg&gt;<font></font>
    &lt;use xlink:href="logo.svg" style="--color_fill: #000;"&gt;&lt;/use&gt;<font></font>
&lt;/svg&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在你的SVG，替换的任何实例</font></font><code>style="fill: #000"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用</font></font><code>style="fill: var(--color_fill)"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将svg设置为蒙版。</font><font style="vertical-align: inherit;">这样，设置背景颜色将充当您的填充颜色。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的HTML</font></font></strong></p>

<pre><code>&lt;div class="logo"&gt;&lt;/div&gt;
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的CSS</font></font></strong></p>

<pre><code>.logo {<font></font>
    background-color: red;<font></font>
    -webkit-mask: url(logo.svg) no-repeat center;<font></font>
    mask: url(logo.svg) no-repeat center;<font></font>
}<font></font>
</code></pre>

<p><strong>JSFiddle:</strong> <a href="https://jsfiddle.net/KuhlTime/2j8exgcb/" rel="noreferrer">https://jsfiddle.net/KuhlTime/2j8exgcb/</a><br>
<strong>MDN:</strong> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/mask" rel="noreferrer">https://developer.mozilla.org/en-US/docs/Web/CSS/mask</a>  </p>

<p>Please note that this method is not working for the Edge browser. You can check that by going to this website: <a href="https://caniuse.com/#search=mask" rel="noreferrer">https://caniuse.com/#search=mask</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Harry</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的目标只是更改徽标的颜色，而不必使用CSS，则不要使用以前的答案所建议的javascript或jquery。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要精确回答原始问题，只需：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"></font><code>logo.svg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在文本编辑器中</font><font style="vertical-align: inherit;">打开</font><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">寻找</font></font><code>fill: #fff</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并替换为</font></font><code>fill: #000</code> </p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，</font></font><code>logo.svg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在文本编辑器中打开时</font><font style="vertical-align: inherit;">，您</font><font style="vertical-align: inherit;">可能看起来像这样：</font></font></p>

<pre><code>&lt;svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"&gt;<font></font>
  &lt;path d="M0 0h24v24H0z" fill="none"/&gt;<font></font>
  &lt;path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="#fff"/&gt;<font></font>
&lt;/svg&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...只需更改填充并保存。 </font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
