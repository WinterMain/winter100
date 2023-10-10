---
layout: question
title:  如何使用CSS更改SVG图像的颜色（jQuery SVG图像替换）？
date:   2020-03-18T11:35:48.000Z
description: 这是我想出的一小段代码的自我问答。当前，没有一种简单的方法可以嵌入SVG图像，然后可以通过CSS访问SVG元素。有多种使用JS SVG框架的方法，但是...
img: 
author: 村村神无猴子
category: question
answer: 9
tags: jQuery的 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我想出的一小段代码的自我问答。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前，没有一种简单的方法可以嵌入SVG图像，然后可以通过CSS访问SVG元素。</font><font style="vertical-align: inherit;">有多种使用JS SVG框架的方法，但是如果您要做的只是制作带有过渡状态的简单图标，它们将过于复杂。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以这就是我想出的，我认为这是迄今为止在网站上使用SVG文件的最简单方法。</font><font style="vertical-align: inherit;">它的概念来自早期的文本到图像替换方法，但据我所知，从未对SVG进行过处理。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是问题：</font></font></p>

<h2><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在不使用JS-SVG框架的情况下在SVG中嵌入SVG并更改其颜色？</font></font></strong></h2></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐猪猪</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果这是静态更改，请在Adobe Illustrator（或任何合适的SVG编辑器）中打开SVG文件，然后更改颜色并保存。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚卡卡西</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TL / DR：转到此处-&gt; </font></font><a href="https://codepen.io/sosuke/pen/Pjoqqp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://codepen.io/sosuke/pen/Pjoqqp</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我假设您有类似这样的html：</font></font></p>

<pre><code>&lt;img src="/img/source.svg" class="myClass"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绝对走过滤路线，即。</font><font style="vertical-align: inherit;">您的svg很可能是黑色或白色。</font><font style="vertical-align: inherit;">您可以应用一个滤镜以使其成为所需的任何颜色，例如，我有一个黑色的svg，我想要薄荷绿色。</font><font style="vertical-align: inherit;">我首先将其反转为白色（从技术上来说，这是所有RGB颜色都完整的），然后使用色相饱和度等。要正确处理：</font></font></p>

<pre><code>filter: invert(86%) sepia(21%) saturate(761%) hue-rotate(92deg) brightness(99%) contrast(107%);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更好的是，您可以使用一种工具将所需的十六进制转换为过滤器：</font><a href="https://codepen.io/sosuke/pen/Pjoqqp" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :   </font></font><a href="https://codepen.io/sosuke/pen/Pjoqqp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//codepen.io/sosuke/pen/Pjoqqp</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomJim前端</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>Since SVG is basically code, you need just contents. I used PHP to obtain content, but you can use whatever you want.</p>

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

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla Firefox 59.0.2（64位）Linux</font></font></li>
</ol>

<p><a href="https://i.stack.imgur.com/hny3K.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/hny3K.jpg" alt="在此处输入图片说明"></a></p>

<ol start="2">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google Chrome66.0.3359.181（正式版）（64位）Linux</font></font></li>
</ol>

<p><a href="https://i.stack.imgur.com/shBNk.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/shBNk.jpg" alt="在此处输入图片说明"></a></p>

<ol start="3">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Opera 53.0.2907.37 Linux</font></font></li>
</ol>

<p><a href="https://i.stack.imgur.com/bcnwH.jpg" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/bcnwH.jpg" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Gil</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我写了一条指令来解决AngularJS的问题。</font></font><a href="https://github.com/OmriAharon/ngReusableSvg" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可用</font><a href="https://github.com/OmriAharon/ngReusableSvg" rel="noreferrer"><font style="vertical-align: inherit;">-ngReusableSvg</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">呈现后，它将替换SVG元素，并将其放置在</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素内，从而使其CSS易于更改。</font><font style="vertical-align: inherit;">这有助于在不同位置使用不同大小/颜色使用相同的SVG文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法很简单：</font></font></p>

<pre><code>&lt;object oa-reusable-svg<font></font>
        data="my_icon.svg"<font></font>
        type="image/svg+xml"<font></font>
        class="svg-class"<font></font>
        height="30"  // given to prevent UI glitches at switch time<font></font>
        width="30"&gt;<font></font>
&lt;/object&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后，您可以轻松拥有：</font></font></p>

<pre><code>.svg-class svg {<font></font>
    fill: red; // whichever color you want<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙达蒙</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个名为SVGInject的开源库，该库使用该</font></font><code>onload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性来触发注入。</font><font style="vertical-align: inherit;">您可以在</font><a href="https://github.com/iconfu/svg-inject" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https://github.com/iconfu/svg-inject</font></a><font style="vertical-align: inherit;">找到GitHub项目</font></font><a href="https://github.com/iconfu/svg-inject" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

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
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>&lt;img&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素注入自动据为己有。</font><font style="vertical-align: inherit;">如果您动态添加SVG，则不必担心再次调用注入函数。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果将SVG多次注入，则将随机字符串添加到SVG中的每个ID，以避免在文档中多次具有相同的ID。 </font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SVGInject是纯Javascript，可与所有支持SVG的浏览器一起使用。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免责声明：我是SVGInject的合著者</font></font></em></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗卡卡西猴子</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我意识到您想使用CSS来完成此操作，但是只是提醒一下，如果它是一个小而简单的图像-您始终可以在Notepad ++中将其弹出打开并更改路径/其他元素的填充：</font></font></p>

<pre><code>&lt;path style="fill:#010002;" d="M394.854,205.444c9.218-15.461,19.102-30.181,14.258-49.527<font></font>
    ...<font></font>
    C412.843,226.163,402.511,211.451,394.854,205.444z"/&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可以节省大量的丑陋脚本。</font><font style="vertical-align: inherit;">很抱歉，如果它不在基地，但是有时简单的解决方案可能会被忽略。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...即使交换多个svg图片，其大小也可能小于此问题的某些代码段。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Davaid</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您可以在页面中包含文件（PHP包含或通过选择的CMS包含），则可以添加SVG代码并将其包含到页面中。</font><font style="vertical-align: inherit;">这与将SVG源代码粘贴到页面中相同，但是使页面标记更整洁。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好处是您可以通过CSS定位SVG的各个部分以进行悬停-不需要javascript。</font></font></p>

<p><a href="http://codepen.io/chriscoyier/pen/evcBu"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://codepen.io/chriscoyier/pen/evcBu</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需要使用如下CSS规则：</font></font></p>

<pre><code>#pathidorclass:hover { fill: #303 !important; }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，该</font></font><code>!important</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">位是覆盖填充颜色所必需的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim理查德</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您可以使用CSS </font></font><code>mask</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，授予</font></font><a href="http://caniuse.com/css-masks"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器支持</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是很好，但是可以使用后备</font></font></p>

<pre><code>.frame {<font></font>
    background: blue;<font></font>
    -webkit-mask: url(image.svg) center / contain no-repeat;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid乐宝儿</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以</font><font style="vertical-align: inherit;">在</font><a href="http://caniuse.com/#feat=css-filters" rel="noreferrer"><font style="vertical-align: inherit;">大多数现代浏览器</font></a><font style="vertical-align: inherit;">（包括Edge，但不包括IE11）中</font><font style="vertical-align: inherit;">使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/filter" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS </font></font><code>filter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它适用于SVG图像以及其他元素。</font><font style="vertical-align: inherit;">您可以使用</font><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">修改颜色，尽管它们不允许您单独修改其他颜色。</font><font style="vertical-align: inherit;">我使用以下CSS类显示图标的“禁用”版本（其中原始图片是具有饱和色的SVG图片）：</font></font><a href="http://caniuse.com/#feat=css-filters" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><code>hue-rotate</code><font style="vertical-align: inherit;"></font><code>invert</code><font style="vertical-align: inherit;"></font></p>

<pre><code>.disabled {<font></font>
    opacity: 0.4;<font></font>
    filter: grayscale(100%);<font></font>
    -webkit-filter: grayscale(100%);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在大多数浏览器中，这使其变为浅灰色。</font><font style="vertical-align: inherit;">在IE（可能还没有测试过的Opera Mini）中，它的不透明度属性会使其褪色，尽管它不是灰色，但看起来仍然不错。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个示例，其中包含四个不同的</font></font><a href="https://twemoji.maxcdn.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Twemoji</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">铃声图标</font><font style="vertical-align: inherit;">CSS类</font><font style="vertical-align: inherit;">：原始（黄色），上述“禁用”类，</font></font><code>hue-rotate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（绿色）和</font></font><code>invert</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（蓝色）。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.twa-bell {<font></font>
  background-image: url("https://twemoji.maxcdn.com/svg/1f514.svg");<font></font>
  display: inline-block;<font></font>
  background-repeat: no-repeat;<font></font>
  background-position: center center;<font></font>
  height: 3em;<font></font>
  width: 3em;<font></font>
  margin: 0 0.15em 0 0.3em;<font></font>
  vertical-align: -0.3em;<font></font>
  background-size: 3em 3em;<font></font>
}<font></font>
.grey-out {<font></font>
  opacity: 0.4;<font></font>
  filter: grayscale(100%);<font></font>
  -webkit-filter: grayscale(100%);<font></font>
}<font></font>
.hue-rotate {<font></font>
  filter: hue-rotate(90deg);<font></font>
  -webkit-filter: hue-rotate(90deg);<font></font>
}<font></font>
.invert {<font></font>
  filter: invert(100%);<font></font>
  -webkit-filter: invert(100%);<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html&gt;<font></font>
<font></font>
&lt;head&gt;<font></font>
&lt;/head&gt;<font></font>
<font></font>
&lt;body&gt;<font></font>
  &lt;span class="twa-bell"&gt;&lt;/span&gt;<font></font>
  &lt;span class="twa-bell grey-out"&gt;&lt;/span&gt;<font></font>
  &lt;span class="twa-bell hue-rotate"&gt;&lt;/span&gt;<font></font>
  &lt;span class="twa-bell invert"&gt;&lt;/span&gt;<font></font>
&lt;/body&gt;<font></font>
<font></font>
&lt;/html&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
