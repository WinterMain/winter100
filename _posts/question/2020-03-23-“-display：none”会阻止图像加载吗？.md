---
layout: question
title:  “ display：none”会阻止图像加载吗？
date:   2020-03-23T02:07:07.000Z
description: 每个响应式网站开发教程都建议使用display noneCSS属性来隐藏内容，以防止内容在移动浏览器中加载，从而使网站加载速度更快。是真的吗 难道disp...
img: 
author: 番长樱梅
category: question
answer: 11
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个响应式网站开发教程都建议使用</font></font><code>display:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS属性来隐藏内容，以防止内容在移动浏览器中加载，从而使网站加载速度更快。</font><font style="vertical-align: inherit;">是真的吗 </font><font style="vertical-align: inherit;">难道</font></font><code>display:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不加载图像或它仍然加载在手机浏览器的内容？</font><font style="vertical-align: inherit;">有什么方法可以防止在移动浏览器上加载不必要的内容？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2634篇《“ display：none”会阻止图像加载吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们说的是图片无法在手机上加载，对不对？</font><font style="vertical-align: inherit;">那么，如果您只是使用@media（最小宽度：400像素）{background-image：thing.jpg}，该怎么办？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">难道不是只能在一定的屏幕宽度以上查找图像吗？</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用display：none和images的诀窍是为它们分配一个ID。</font><font style="vertical-align: inherit;">当时并不需要很多代码来使其工作。</font><font style="vertical-align: inherit;">这是一个使用媒体查询和3个样式表的示例。</font><font style="vertical-align: inherit;">一种用于电话，一种用于平板电脑，另一种用于台式机。</font><font style="vertical-align: inherit;">我有3张图片，分别是手机，平板电脑和台式机的图片。</font><font style="vertical-align: inherit;">在电话屏幕上，仅会显示电话图像，平板电脑将仅显示平板电脑图像，台式机将显示在台式计算机图像上。</font><font style="vertical-align: inherit;">这是一个使其工作的代码示例：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">源代码：</font></font></p>

<pre><code>&lt;div id="content"&gt;<font></font>
&lt;img id="phone" src="images/phone.png" /&gt;<font></font>
&lt;img id="tablet" src="images/tablet.png" /&gt;<font></font>
&lt;img id="desktop" src="images/desktop.png" /&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不需要媒体查询的手机CSS。</font><font style="vertical-align: inherit;">使其工作的img＃phone：</font></font></p>

<pre><code>img#phone {<font></font>
    display: block;<font></font>
    margin: 6em auto 0 auto;<font></font>
    width: 70%;<font></font>
    }<font></font>
<font></font>
img#tablet {display: none;}<font></font>
img#desktop {display: none;}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">平板电脑的CSS：</font></font></p>

<pre><code>@media only screen and (min-width: 641px) {<font></font>
img#phone {display: none;}<font></font>
<font></font>
img#tablet {<font></font>
    display: block;<font></font>
    margin: 6em auto 0 auto;<font></font>
    width: 70%;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和桌面CSS：</font></font></p>

<pre><code>@media only screen and (min-width: 1141px) {<font></font>
img#tablet {display: none;}<font></font>
<font></font>
img#desktop {<font></font>
    display: block;<font></font>
    margin: 6em auto 0 auto;<font></font>
    width: 80%;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">祝你好运，让我知道它如何为您服务。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用@media查询CSS，基本上我们只是发布了一个项目，该项目的侧面是一棵巨大的树形图像，但没有显示在桌面/移动屏幕上。</font><font style="vertical-align: inherit;">因此，防止图像加载非常容易</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个小片段：</font></font></p>

<pre><code>.tree {<font></font>
    background: none top left no-repeat; <font></font>
}<font></font>
<font></font>
@media only screen and (min-width: 1200px) {<font></font>
    .tree {<font></font>
        background: url(enormous-tree.png) top left no-repeat;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用相同的CSS来显示和隐藏显示/可见性/不透明度，但是图像仍在加载中，这是我们想到的最安全的代码。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Eva</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种可能性是使用</font></font><code>&lt;noscript&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签并将图像放置在</font></font><code>&lt;noscript&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签内。</font><font style="vertical-align: inherit;">然后，</font></font><code>noscript</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据需要</font><font style="vertical-align: inherit;">使用javascript删除</font><font style="vertical-align: inherit;">标签。</font><font style="vertical-align: inherit;">这样，您可以使用渐进增强功能按需加载图像。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用我写的这个polyfill来读取</font></font><code>&lt;noscript&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE8 </font><font style="vertical-align: inherit;">中</font><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">的内容</font></font></p>

<p><a href="https://github.com/jameswestgate/noscript-textcontent" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/jameswestgate/noscript-textcontent</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否。如果您考虑节省手机用户的带宽，该图像将照常加载，并且仍将使用用户的带宽。您可以做的是使用媒体查询并筛选要加载图像的设备。图像必须设置为div等的背景图像，而不是标签，因为无论屏幕大小和媒体查询集如何，图像标签都会加载图像。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了防止获取资源，请使用</font></font><a href="http://webcomponents.org/articles/introduction-to-template-element/" rel="nofollow"><code>&lt;template&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web Components</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><a href="http://webcomponents.org/articles/introduction-to-template-element/" rel="nofollow"><font style="vertical-align: inherit;">元素</font></a><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁米亚小卤蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果可以，是否有一种方法可以不在移动浏览器中加载不必要的内容？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用 </font></font><code>&lt;img src="" srcset=""&gt;</code> </p>

<p><a href="http://www.webdesignerdepot.com/2015/08/the-state-of-responsive-images/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.webdesignerdepot.com/2015/08/the-state-of-sensitive-images/</font></font></a></p>

<p><a href="https://caniuse.com/#feat=srcset" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://caniuse.com/#feat=srcset</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖逆天</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><a href="http://www.quirksmode.org/css/displayimg.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">怪癖模式：图片和显示：无</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当图片包含</font></font><code>display: none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或位于元素中时 
   </font></font><code>display:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，浏览器可能选择不下载图片，除非将</font></font><code>display</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  设置为另一个值。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">切换</font></font><code>display</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font><font style="vertical-align: inherit;">时，只有Opera会下载图像</font></font><code>block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">其他所有浏览器均立即下载。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，它的渲染速度会稍微加快一点，只是因为它不必渲染图像，而且在屏幕上排序的元素要少一些。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不希望加载它，请将DIV留空，以便稍后将html包含</font></font><code>&lt;img&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签的</font><font style="vertical-align: inherit;">HTML加载到其中</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试使用Firebug或Wireshark，就像我之前提到的那样，即使</font></font><code>display:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存在</font><font style="vertical-align: inherit;">，您也会看到文件确实被传输了</font><font style="vertical-align: inherit;">。</font></font></p>

<p><strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果将显示设置为无，Opera是唯一不会加载图像的浏览器。</font></font></strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Opera现在已移至webkit，即使其显示设置为无，也将渲染所有图像。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个测试页面，可以证明这一点：</font></font></p>

<p><a href="http://www.quirksmode.org/css/displayimg.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.quirksmode.org/css/displayimg.html</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果将图像设为CSS中div的背景图像，则将该div设置为“ display：none”时，将不会加载该图像。</font><font style="vertical-align: inherit;">禁用CSS时，它仍然不会加载，因为CSS被禁用了。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子神奇</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些图像已加载。</font><font style="vertical-align: inherit;">由于脚本可能会动态检查DOM元素，因此浏览器不会优化元素（或元素内容）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在此处进行检查：</font><a href="http://jsfiddle.net/dk3TA/"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/dk3TA/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/dk3TA/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该图像具有</font></font><code>display:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样式，但是其大小由脚本读取。</font><font style="vertical-align: inherit;">您也可以通过查看浏览器开发人员工具的“网络”标签来进行检查。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，如果浏览器在小型CPU计算机上，则不必渲染图像（和布局页面）将使整个渲染操作更快，但是我怀疑这在今天是否确实有意义。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要防止图像加载，您可以简单地不将IMG元素添加到文档中（或将IMG </font></font><code>src</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">为</font></font><code>"data:"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>"about:blank"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器变得越来越聪明。</font><font style="vertical-align: inherit;">今天，如果浏览器可以确定图像没有用，则它可能会跳过图像加载（取决于版本）。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
