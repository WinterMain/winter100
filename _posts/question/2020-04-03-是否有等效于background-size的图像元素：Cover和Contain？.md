---
layout: question
title:  是否有等效于background-size的图像元素：Cover和Contain？
date:   2020-04-03T03:50:45.000Z
description: 我有一个包含许多页面和不同背景图片的网站，并且通过CSS显示它们，例如：body.page-8 {    background  url(".....
img: 
author: 西门
category: question
answer: 9
tags: html CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个包含许多页面和不同背景图片的网站，并且通过CSS显示它们，例如：</font></font></p>



<pre class="lang-css prettyprint-override"><code>body.page-8 {<font></font>
    background: url("../img/pic.jpg") no-repeat scroll center top #000;<font></font>
    background-size: cover;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，我想使用</font></font><code>&lt;img&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">在一页上显示不同的（全屏）图片</font><font style="vertical-align: inherit;">，并且我希望它们具有与上述</font></font><code>background-image: cover;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">相同的   </font><font style="vertical-align: inherit;">属性（图像不能从CSS中显示，它们必须从HTML文档中显示）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常我使用：</font></font></p>

<pre class="lang-css prettyprint-override"><code>div.mydiv img {<font></font>
    width: 100%;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么：</font></font></p>

<pre class="lang-css prettyprint-override"><code>div.mydiv img {<font></font>
    width: auto;<font></font>
}<font></font>
</code></pre>

<p>to make the picture full and responsive. However the picture shrinks too much (<code>width: 100%</code>) when the screen gets too narrow, and shows the body's background-color in the bottom screen. The other method, <code>width: auto;</code>, only makes the image full size and does not respond to the screen size.</p>

<p>Is there a way to display the image the same way that <code>background-size: cover</code> does?</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3994篇《是否有等效于background-size的图像元素：Cover和Contain？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以采用ZOOM方法。</font><font style="vertical-align: inherit;">我们可以假设，如果宽高比图像的高度或宽度小于所需的高度或宽度，则最大缩放比例可以达到30％（或更大至100％）。</font><font style="vertical-align: inherit;">我们可以用溢出：隐藏其余不需要的区域。</font></font></p>

<pre><code>.image-container {<font></font>
  width: 200px;<font></font>
  height: 150px;<font></font>
  overflow: hidden;<font></font>
}<font></font>
.stage-image-gallery a img {<font></font>
  max-height: 130%;<font></font>
  max-width: 130%;<font></font>
  position: relative;<font></font>
  top: 50%;<font></font>
  left: 50%;<font></font>
  transform: translateX(-50%) translateY(-50%);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将调整具有不同宽度或高度的图像。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天樱</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不允许这样做“添加评论”，但是，是的，Eru Penkman所做的工作非常多，要像背景封面一样获得它，您要做的就是更改 </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>.tall-img{<font></font>
    margin-top:-50%;<font></font>
    width:100%;<font></font>
}<font></font>
.wide-img{<font></font>
    margin-left:-50%;<font></font>
    height:100%;<font></font>
}</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>.wide-img{<font></font>
    margin-left:-42%;<font></font>
    height:100%;<font></font>
}<font></font>
.tall-img{<font></font>
    margin-top:-42%;<font></font>
    width:100%;<font></font>
}</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于IE，您还需要添加第二行-宽度：100％； </font></font></p>

<pre><code>.mydiv img {<font></font>
    max-width: 100%;<font></font>
    width: 100%;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用CSS可以模拟</font></font><code>object-fit: [cover|contain];</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它是</font></font><code>transform</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>[max|min]-[width|height]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不是完美的。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这在一种情况下不起作用：如果图像比容器宽和短。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.img-ctr{<font></font>
  background: red;/*visible only in contain mode*/<font></font>
  border: 1px solid black;<font></font>
  height: 300px;<font></font>
  width: 600px;<font></font>
  overflow: hidden;<font></font>
  position: relative;<font></font>
  display: block;<font></font>
}<font></font>
.img{<font></font>
  display: block;<font></font>
<font></font>
  /*contain:*/<font></font>
  /*max-height: 100%;<font></font>
  max-width: 100%;*/<font></font>
  /*--*/<font></font>
<font></font>
  /*cover (not work for images wider and shorter than the container):*/<font></font>
  min-height: 100%;<font></font>
  width: 100%;<font></font>
  /*--*/<font></font>
<font></font>
  position: absolute;<font></font>
  top: 50%;<font></font>
  left: 50%;<font></font>
  transform: translate(-50%, -50%);<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;p&gt;Large square:<font></font>
&lt;span class="img-ctr"&gt;&lt;img class="img" src="http://placehold.it/1000x1000"&gt;&lt;/span&gt;<font></font>
&lt;/p&gt;<font></font>
&lt;p&gt;Small square:<font></font>
&lt;span class="img-ctr"&gt;&lt;img class="img" src="http://placehold.it/100x100"&gt;&lt;/span&gt;<font></font>
&lt;/p&gt;<font></font>
&lt;p&gt;Large landscape:<font></font>
&lt;span class="img-ctr"&gt;&lt;img class="img" src="http://placehold.it/2000x1000"&gt;&lt;/span&gt;<font></font>
&lt;/p&gt;<font></font>
&lt;p&gt;Small landscape:<font></font>
&lt;span class="img-ctr"&gt;&lt;img class="img" src="http://placehold.it/200x100"&gt;&lt;/span&gt;<font></font>
&lt;/p&gt;<font></font>
&lt;p&gt;Large portrait:<font></font>
&lt;span class="img-ctr"&gt;&lt;img class="img" src="http://placehold.it/1000x2000"&gt;&lt;/span&gt;<font></font>
&lt;/p&gt;<font></font>
&lt;p&gt;Small portrait:<font></font>
&lt;span class="img-ctr"&gt;&lt;img class="img" src="http://placehold.it/100x200"&gt;&lt;/span&gt;<font></font>
&lt;/p&gt;<font></font>
&lt;p&gt;Ultra thin portrait:<font></font>
&lt;span class="img-ctr"&gt;&lt;img class="img" src="http://placehold.it/200x1000"&gt;&lt;/span&gt;<font></font>
&lt;/p&gt;<font></font>
&lt;p&gt;Ultra wide landscape (images wider and shorter than the container):<font></font>
&lt;span class="img-ctr"&gt;&lt;img class="img" src="http://placehold.it/1000x200"&gt;&lt;/span&gt;<font></font>
&lt;/p&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试设置</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">既</font></font></em> <code>min-height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>min-width</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，用</font></font><code>display:block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>img {<font></font>
    display:block;<font></font>
    min-height:100%;<font></font>
    min-width:100%;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="http://jsfiddle.net/yfFqK/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设图像的包含元素为</font></font><code>position:relative</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>position:absolute</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则图像将覆盖容器。</font><font style="vertical-align: inherit;">但是，它不会居中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您知道图像是水平（set </font></font><code>margin-left:-50%</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）还是垂直（set </font></font><code>margin-top:-50%</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">溢出，则可以轻松居中</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">可以使用CSS媒体查询（和一些数学方法）来解决这一问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝猿阿飞</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您可以安排要填充的容器元素，这似乎可以工作，但感觉有点破旧。</font><font style="vertical-align: inherit;">本质上，我只是</font></font><code>min/max-width/height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在较大的区域上使用，然后将该区域缩放回原始尺寸。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.container {<font></font>
  width: 800px;<font></font>
  height: 300px;<font></font>
  border: 1px solid black;<font></font>
  overflow:hidden;<font></font>
  position:relative;<font></font>
}<font></font>
.container.contain img {<font></font>
  position: absolute;<font></font>
  left:-10000%; right: -10000%; <font></font>
  top: -10000%; bottom: -10000%;<font></font>
  margin: auto auto;<font></font>
  max-width: 10%;<font></font>
  max-height: 10%;<font></font>
  -webkit-transform:scale(10);<font></font>
  transform: scale(10);<font></font>
}<font></font>
.container.cover img {<font></font>
  position: absolute;<font></font>
  left:-10000%; right: -10000%; <font></font>
  top: -10000%; bottom: -10000%;<font></font>
  margin: auto auto;<font></font>
  min-width: 1000%;<font></font>
  min-height: 1000%;<font></font>
  -webkit-transform:scale(0.1);<font></font>
  transform: scale(0.1);<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;h1&gt;contain&lt;/h1&gt;<font></font>
  &lt;div class="container contain"&gt;<font></font>
    &lt;img <font></font>
       src="https://www.google.de/logos/doodles/2014/european-parliament-election-2014-day-4-5483168891142144-hp.jpg" <font></font>
       /&gt;<font></font>
    &lt;!-- 366x200 --&gt;<font></font>
  &lt;/div&gt;<font></font>
  &lt;h1&gt;cover&lt;/h1&gt;<font></font>
  &lt;div class="container cover"&gt;<font></font>
    &lt;img <font></font>
       src="https://www.google.de/logos/doodles/2014/european-parliament-election-2014-day-4-5483168891142144-hp.jpg" <font></font>
       /&gt;<font></font>
    &lt;!-- 366x200 --&gt;<font></font>
  &lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要模仿</font></font><code>background-size: contain</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是</font></font><code>object-fit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于缺乏支持而</font><font style="vertical-align: inherit;">无法使用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我的图片具有定义尺寸的容器，最终对我有用：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.image-container {<font></font>
  height: 200px;<font></font>
  width: 200px;<font></font>
  overflow: hidden;<font></font>
  background-color: rebeccapurple;<font></font>
  border: 1px solid yellow;<font></font>
  position: relative;<font></font>
}<font></font>
<font></font>
.image {<font></font>
  max-height: 100%;<font></font>
  max-width: 100%;<font></font>
  margin: auto;<font></font>
  position: absolute;<font></font>
  transform: translate(-50%, -50%);<font></font>
  top: 50%;<font></font>
  left: 50%;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;!-- wide --&gt;<font></font>
&lt;div class="image-container"&gt;<font></font>
  &lt;img class="image" src="http://placehold.it/300x100"&gt;<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;!-- tall --&gt;<font></font>
&lt;div class="image-container"&gt;<font></font>
  &lt;img class="image" src="http://placehold.it/100x300"&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到了一个模拟覆盖和包含的简单解决方案，它是纯CSS，适用于具有动态尺寸的容器，并且对图像比例没有任何限制。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，如果您不需要支持IE或16之前的Edge，则最好使用object-fit。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景尺寸：封面</font></font></h2>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.img-container {<font></font>
  position: relative;<font></font>
  overflow: hidden;<font></font>
}<font></font>
<font></font>
.background-image {<font></font>
  position: absolute;<font></font>
  min-width: 1000%;<font></font>
  min-height: 1000%;<font></font>
  left: 50%;<font></font>
  top: 50%;<font></font>
  transform: translateX(-50%) translateY(-50%) scale(0.1);<font></font>
  z-index: -1;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class="img-container"&gt;<font></font>
  &lt;img class="background-image" src="https://picsum.photos/1024/768/?random"&gt;<font></font>
  &lt;p style="padding: 20px; color: white; text-shadow: 0 0 10px black"&gt;<font></font>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<font></font>
  &lt;/p&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果图像的自然尺寸大于所显示的尺寸，则在此处使用1000％。</font><font style="vertical-align: inherit;">例如，如果图像为500x500，但容器仅为200x200。</font><font style="vertical-align: inherit;">使用此解决方案，图像将被调整为2000x2000（由于最小宽度/最小高度），然后缩小至200x200（由于</font></font><code>transform: scale(0.1)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">x10因子可以用x100或x1000代替，但是通常不理想的是在20x20 div上渲染2000x2000图像。</font><font style="vertical-align: inherit;">:)</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景大小：包含</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照相同的原理，您也可以使用它来模拟</font></font><code>background-size: contain</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
</font></font></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.img-container {<font></font>
  position: relative;<font></font>
  overflow: hidden;<font></font>
  z-index: 0;<font></font>
}<font></font>
<font></font>
.background-image {<font></font>
  position: absolute;<font></font>
  max-width: 10%;<font></font>
  max-height: 10%;<font></font>
  left: 50%;<font></font>
  top: 50%;<font></font>
  transform: translateX(-50%) translateY(-50%) scale(10);<font></font>
  z-index: -1;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div style="background-color: black"&gt;<font></font>
  &lt;div class="img-container"&gt;<font></font>
    &lt;img class="background-image" src="https://picsum.photos/1024/768/?random"&gt;<font></font>
    &lt;p style="padding: 20px; color: white; text-shadow: 0 0 10px black"&gt;<font></font>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<font></font>
    &lt;/p&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上有一个相当简单的</font></font><a href="http://jsfiddle.net/BuschFunker/sjt71j99/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS解决方案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，甚至可以在IE8上运行：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.container {<font></font>
  position: relative;<font></font>
  overflow: hidden;<font></font>
  /* Width and height can be anything. */<font></font>
  width: 50vw;<font></font>
  height: 50vh;<font></font>
}<font></font>
<font></font>
img {<font></font>
  position: absolute;<font></font>
  /* Position the image in the middle of its container. */<font></font>
  top: -9999px;<font></font>
  right: -9999px;<font></font>
  bottom: -9999px;<font></font>
  left: -9999px;<font></font>
  margin: auto;<font></font>
  /* The following values determine the exact image behaviour. */<font></font>
  /* You can simulate background-size: cover/contain/etc.<font></font>
     by changing between min/max/standard width/height values.<font></font>
     These values simulate background-size: cover<font></font>
  */<font></font>
  min-width: 100%;<font></font>
  min-height: 100%;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class="container"&gt;<font></font>
    &lt;img src="http://placehold.it/200x200" alt="" /&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
