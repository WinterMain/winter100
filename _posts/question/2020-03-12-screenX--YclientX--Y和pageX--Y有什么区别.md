---
layout: question
title:  screenX / Y，clientX / Y和pageX / Y有什么区别？
date:   2020-03-12T06:13:38.000Z
description: screenX/ Y，clientX/ Y和pageX/有Y什么区别？另外，对于iPad Safari，计算结果是否与台式机类似？还是因为视口而有所不...
img: 
author: 宝儿AA
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>screenX</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>Y</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>clientX</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>Y</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>pageX</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/有</font></font><code>Y</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么</font><font style="vertical-align: inherit;">区别</font><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，对于iPad Safari，计算结果是否与台式机类似？还是因为视口而有所不同？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您能指出一个例子，那就太好了。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第979篇《screenX / Y，clientX / Y和pageX / Y有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三蛋蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者之间的差异将在很大程度上取决于您当前所指的浏览器。</font><font style="vertical-align: inherit;">每个属性都以不同的方式或根本没有实现这些属性。</font></font><a href="http://www.quirksmode.org/dom/w3c_cssom.html#mousepos" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Quirksmode</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供了很多有关W3C标准（例如DOM和JavaScript事件）的浏览器差异的文档。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天TomHarry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><ol>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">pageX / Y</font></font></strong><font style="vertical-align: inherit;"></font><code>&lt;html&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以CSS像素为单位</font><font style="vertical-align: inherit;">给出相对于</font><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">的坐标</font><font style="vertical-align: inherit;">。</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">clientX / Y</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给出相对于</font></font><code>viewport</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS像素</font><font style="vertical-align: inherit;">的坐标</font><font style="vertical-align: inherit;">。</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">screenX / Y</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给出相对于</font></font><code>screen</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设备内像素</font><font style="vertical-align: inherit;">的坐标</font><font style="vertical-align: inherit;">。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于您的最后一个问题，在台式机和移动浏览器上计算是否相似...为了更好地理解-在移动浏览器上，我们需要区分两个新概念：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">布局视口</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可视视口</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">视觉视口是页面上当前显示在屏幕上的部分。</font><font style="vertical-align: inherit;">布局视口是在桌面浏览器上呈现的整个页面（包括所有在当前视口中不可见的元素）的同义词。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在移动浏览器中，</font></font><code>pageX</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>pageY</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍然相对于页面以CSS像素为单位，因此您可以获得相对于文档页面的鼠标坐标。</font><font style="vertical-align: inherit;">另一方面</font></font><code>clientX</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>clientY</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义与</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视觉视口</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关的鼠标坐标</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里还有另一个关于视觉视口和布局视口之间差异的stackoverflow线程：</font></font><a href="https://stackoverflow.com/questions/6333927/difference-between-visual-viewport-and-layout-viewport"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视觉视口和布局视口之间的差异？</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个很好的资源：</font><a href="http://www.quirksmode.org/mobile/viewports2.html" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://www.quirksmode.org/mobile/viewports2.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.quirksmode.org/mobile/viewports2.html</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中：</font></font></strong></p>

<p><code>pageX</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>pageY</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>screenX</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>screenY</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>clientX</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，和</font></font><code>clientY</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回一个数，其指示物理“CSS像素”的数量的点是从参考点。</font><font style="vertical-align: inherit;">事件点是用户单击的位置，参考点是左上角的点。</font><font style="vertical-align: inherit;">这些属性返回到该参考点的水平和垂直距离。</font></font></p>

<p><strong><code>pageX</code> and <code>pageY</code>:</strong><br>
Relative to the top left of the fully rendered content area in the browser. This reference point is below the URL bar and back button in the upper left. This point could be anywhere in the browser window and can actually change location if there are embedded scrollable pages embedded within pages and the user moves a scrollbar.</p>

<p><strong><code>screenX</code> and <code>screenY</code>:</strong><br>
Relative to the top left of the physical screen/monitor, this reference point only moves if you increase or decrease the number of monitors or the monitor resolution.</p>

<p><strong><code>clientX</code> and <code>clientY</code>:</strong><br>
Relative to the upper left edge of the content area (<a href="https://stackoverflow.com/questions/2939693/what-is-view-port-in-html">the viewport</a>) of the browser window.  This point does not move even if the user moves a scrollbar from within the browser.</p>

<p><strong>For a visual on which browsers support which properties:</strong></p>

<p><a href="http://www.quirksmode.org/dom/w3c_cssom.html#t03" rel="noreferrer">http://www.quirksmode.org/dom/w3c_cssom.html#t03</a></p>

<p><strong>w3schools has an online Javascript interpreter and editor so you can see what each does</strong></p>

<p><a href="http://www.w3schools.com/jsref/tryit.asp?filename=try_dom_event_clientxy" rel="noreferrer">http://www.w3schools.com/jsref/tryit.asp?filename=try_dom_event_clientxy</a></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
&lt;script&gt;<font></font>
function show_coords(event)<font></font>
{<font></font>
  var x=event.clientX;<font></font>
  var y=event.clientY;<font></font>
  alert("X coords: " + x + ", Y coords: " + y);<font></font>
}<font></font>
&lt;/script&gt;<font></font>
&lt;/head&gt;<font></font>
<font></font>
&lt;body&gt;<font></font>
<font></font>
&lt;p onmousedown="show_coords(event)"&gt;Click this paragraph, <font></font>
and an alert box will alert the x and y coordinates <font></font>
of the mouse pointer.&lt;/p&gt;<font></font>
<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYEvaL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一张解释之间的差异</font></font><code>pageY</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>clientY</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><img src="https://i.stack.imgur.com/4C3no.png" alt="pageY vs clientY"></p>

<p><font style="vertical-align: inherit;"></font><code>pageX</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和和</font></font><code>clientX</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分别</font><font style="vertical-align: inherit;">相同</font><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<p><code>pageX/Y</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 坐标相对于整个渲染页面的左上角（包括通过滚动隐藏的部分）， </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而</font></font><code>clientX/Y</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">坐标是相对于页面可见部分（通过浏览器窗口“可见”）的左上角。</font></font></p>

<h2><a href="http://jsbin.com/oRIDUXE/1/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">观看演示</font></font></a></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能永远都不需要 </font></font><code>screenX/Y</code></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
