---
layout: question
title:  HTML5画布与SVG与div
date:   2020-03-13T07:25:31.000Z
description: 即时创建元素并能够移动元素的最佳方法是什么？例如，假设我要创建一个矩形，圆形和多边形，然后选择这些对象并四处移动。我了解HTML5提供了三个使之成为可...
img: 
author: Tom凯
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即时创建元素并能够移动元素的最佳方法是什么？</font><font style="vertical-align: inherit;">例如，假设我要创建一个矩形，圆形和多边形，然后选择这些对象并四处移动。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我了解HTML5提供了三个使之成为可能的元素：</font></font><a href="http://www.w3.org/TR/2014/REC-html5-20141028/embedded-content-0.html#svg" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">svg</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="http://www.w3.org/TR/2014/REC-html5-20141028/scripting-1.html#the-canvas-element" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">canvas</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://www.w3.org/TR/2014/REC-html5-20141028/grouping-content.html#the-div-element" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">div</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">对于我想做什么，这些元素中的哪一个将提供最佳性能？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了比较这些方法，我正在考虑创建三个视觉上相同的网页，每个网页中都有页眉，页脚，小部件和文本内容。</font><font style="vertical-align: inherit;">第一页中的小部件将完全使用</font></font><code>canvas</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">创建</font><font style="vertical-align: inherit;">，第二页中的完全使用</font></font><code>svg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素创建，而第三页中的使用简单</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素HTML和CSS创建。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1377篇《HTML5画布与SVG与div》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云斯丁GO</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在谷歌搜索时，我</font><font style="vertical-align: inherit;">在</font><a href="http://teropa.info/blog/2016/12/12/graphics-in-angular-2.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http://teropa.info/blog/2016/12/12/graphics-in-angular-2.html中</font></a><font style="vertical-align: inherit;">找到了有关</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SVG</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Canvas的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用和压缩的很好的解释</font><font style="vertical-align: inherit;">。</font></font><a href="http://teropa.info/blog/2016/12/12/graphics-in-angular-2.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望能帮助到你：</font></font></p>

<blockquote>
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SVG与HTML一样，使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保留的呈现方式</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：当我们想在屏幕上绘制矩形时，我们在DOM中声明性地使用一个元素。</font><font style="vertical-align: inherit;">然后，浏览器将绘制一个矩形，但它还将创建一个</font><font style="vertical-align: inherit;">表示该矩形</font><font style="vertical-align: inherit;">的内存中</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/SVGRectElement" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SVGRectElement</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象。</font><font style="vertical-align: inherit;">这个对象是我们需要操纵的东西–它被保留了。</font><font style="vertical-align: inherit;">我们可以随时间分配不同的位置和大小。</font><font style="vertical-align: inherit;">我们还可以附加事件侦听器以使其具有交互性。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Canvas使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">立即渲染</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：当我们</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#Drawing_rectangles" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绘制一个矩形时</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，浏览器会立即在屏幕上渲染一个矩形，但是永远不会有任何代表它的“矩形对象”。</font><font style="vertical-align: inherit;">画布缓冲区中只有一堆像素。</font><font style="vertical-align: inherit;">我们不能移动矩形。</font><font style="vertical-align: inherit;">我们只能绘制另一个矩形。</font><font style="vertical-align: inherit;">我们无法响应矩形上的点击或其他事件。</font><font style="vertical-align: inherit;">我们只能响应</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">整个画布</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上的事件</font><font style="vertical-align: inherit;">。</font></font></li>
  </ul>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，canvas是比SVG更底层的限制性API。</font><font style="vertical-align: inherit;">但这有一个缺点，那就是使用画布您可以用相同的资源量执行更多操作。</font><font style="vertical-align: inherit;">因为浏览器不必创建和维护我们绘制的所有对象的内存对象图，所以它需要更少的内存和计算资源即可绘制相同的视觉场景。</font><font style="vertical-align: inherit;">如果您要绘制非常大而复杂的可视化效果，则Canvas可能是您的理想选择。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin阿飞番长</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出于您的目的，我建议您使用SVG，因为您会获得DOM事件，例如包含鼠标操作（包括拖放）在内的DOM事件，因此您不必实现自己的重绘，也不必跟踪状态。你的对象。</font><font style="vertical-align: inherit;">当您需要进行位图图像处理时，请使用Canvas；而当您要处理用HTML创建的内容时，请使用常规div。</font><font style="vertical-align: inherit;">在性能方面，您会发现现代浏览器现在正在加速这三种浏览器，但是到目前为止，canvas是最受关注的。</font><font style="vertical-align: inherit;">另一方面，JavaScript编写的好坏对于使画布发挥最大性能至关重要，因此我仍然建议您使用SVG。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenGil</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解SVG和Canvas之间的差异将有助于选择正确的产品。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">帆布</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取决于分辨率 </font></font></li>
<li><a href="https://stackoverflow.com/questions/9880279/how-do-i-add-a-simple-onclick-event-handler-to-a-canvas-element"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不支持事件处理程序</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/3697615/how-can-i-write-text-on-a-html5-canvas-element"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文字渲染能力差</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/923885/capture-html-canvas-as-gif-jpg-png-pdf"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将结果图像另存为.png或.jpg</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常适合图形密集型游戏</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SVG</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分辨率独立</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持事件处理程序</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最适合具有较大渲染区域的应用程序（Google地图）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果很复杂，则渲染速度较慢（经常使用DOM的东西都会很慢）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不适合游戏应用</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天前端</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我同意Simon Sarris的结论：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将Protovis（SVG）中的某些可视化与Processingjs（Canvas）进行了比较，后者显示&gt; 2000点，并且processingjs比protovis快得多。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用SVG处理事件当然要容易得多，因为您可以将事件附加到对象上。</font><font style="vertical-align: inherit;">在“画布”中，您必须手动进行操作（检查鼠标位置等），但是对于简单的交互而言，这并不难。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有</font><font style="vertical-align: inherit;">dojo工具箱</font><font style="vertical-align: inherit;">的</font></font><a href="http://dojotoolkit.org/reference-guide/dojox/gfx.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dojo.gfx</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库。</font><font style="vertical-align: inherit;">它提供了一个抽象层，您可以指定渲染器（SVG，Canvas，Silverlight）。</font><font style="vertical-align: inherit;">尽管我不知道额外的抽象层会增加多少开销，但这可能也是一个可行的选择，但是它使交互和动画编码变得容易，并且与渲染器无关。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是一些有趣的基准：</font></font></p>

<ul>
<li><a href="http://svbreakaway.info/tp.php#jan21a" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://svbreakaway.info/tp.php#jan21a</font></font></a></li>
<li><a href="http://www.eleqtriq.com/2010/02/canvas-svg-flash/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.eleqtriq.com/2010/02/canvas-svg-flash/</font></font></a></li>
<li><a href="http://smus.com/canvas-vs-svg-performance/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://smus.com/canvas-vs-svg-performance/</font></font></a></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光逆天</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于divs选项，只有我2美分。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">著名/臭名昭著和SamsaraJS（可能还有其他）使用绝对定位的非嵌套div（具有非平凡的HTML / CSS内容），结合matrix2d / matrix3d进行定位和2D / 3D转换，并在中等移动硬件上实现稳定的60FPS ，因此我反对divs是一个缓慢的选择。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Youtube和其他地方有很多屏幕录像，浏览器中运行着高性能2D / 3D素材，所有内容都是DOM元素，您可以</font><font style="vertical-align: inherit;">以60FPS的速度</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查元素</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（与WebGL混合以获得某些效果，但不适用于渲染的主要部分）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西理查德</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管上面的大多数答案仍然有些道理，但我认为它们值得更新：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多年来，SVG的性能有了很大提高，现在，SVG的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">硬件加速CSS过渡和动画</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全不依赖JavaScript性能。</font><font style="vertical-align: inherit;">当然，JavaScript的性能也得到了改善，并且Canvas的性能也得到了改善，但并没有SVG得到改善。</font><font style="vertical-align: inherit;">另外，今天几乎所有浏览器中都提供了一个“新手”，那就是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebGL</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">使用与Simon相同的词语：它</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">击败了Canvas和SVG</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，这并不意味着它应该成为首选技术，因为它是一种野兽，并且只能在非常特定的用例中更快。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在当今大多数用例中，恕我直言，SVG提供了最佳的性能/可用性比。</font><font style="vertical-align: inherit;">可视化必须非常复杂（就元素数量而言），同时又必须非常简单（每个元素），以便Canvas甚至更多，WebGL才能真正发挥作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://stackoverflow.com/a/49709860/351836"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回答类似问题时，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我提供了更多详细信息，为什么我认为</font><font style="vertical-align: inherit;">有时</font><a href="https://stackoverflow.com/a/49709860/351836"><font style="vertical-align: inherit;">将这</font></a><font style="vertical-align: inherit;">三种技术</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结合起来</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是您最好的选择。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
