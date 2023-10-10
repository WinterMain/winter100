---
layout: question
title:  HTML5中的polyfill是什么意思？
date:   2020-03-23T06:10:22.000Z
description: HTML5中的polyfill是什么意思？我在许多有关HTML5的网站中都看到了这个词，例如HTML5-Cross-Browser-Polyfills。...
img: 
author: 小胖
category: question
answer: 4
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5中的polyfill是什么意思？</font><font style="vertical-align: inherit;">我在许多有关HTML5的网站中都看到了这个词，例如</font></font><a href="https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5-Cross-Browser-Polyfills。</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，这里我们收集了所有的填充，后备和填充，以便将HTML5功能植入到本机不支持它们的浏览器中。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我实际上不了解polyfill的含义。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是HTML5的新技术还是JavaScript库？</font><font style="vertical-align: inherit;">在HTML5之前我从未听说过这个词。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">垫片，后备和填料之间有什么区别？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2806篇《HTML5中的polyfill是什么意思？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿十三</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">填充填充是一种填充程序，它将</font><font style="vertical-align: inherit;">原始调用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替换</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为对填充程序</font><font style="vertical-align: inherit;">的调用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，假设您要使用navigator.mediaDevices对象，但并非所有浏览器都支持此对象。</font><font style="vertical-align: inherit;">您可以想象一个提供了垫片的库，您可以像这样使用它：</font></font></p>

<pre><code>&lt;script src="js/MediaShim.js"&gt;&lt;/script&gt;<font></font>
&lt;script&gt;<font></font>
    MediaShim.mediaDevices.getUserMedia(...);<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，您将显式调用填充程序，而不是使用原始对象或方法。</font><font style="vertical-align: inherit;">另一方面，polyfill会替换原始对象上的对象和方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>&lt;script src="js/adapter.js"&gt;&lt;/script&gt;<font></font>
&lt;script&gt;<font></font>
    navigator.mediaDevices.getUserMedia(...);<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的代码中，看起来好像您正在使用标准的navigator.mediaDevices对象。</font><font style="vertical-align: inherit;">但是实际上，polyfill（示例中的adapter.js）已经用自己的对象替换了该对象。</font></font></p>

<p>The one it has replaced it with is a shim. This will detect if the feature is natively supported and use it if it is, or it will work around it using other APIs if it is not.</p>

<p>So a polyfill is a sort of "transparent" shim. And this is what Remy Sharp (who coined the term) meant when saying "<em>if you removed the polyfill script, your code would continue to work, without any changes required in spite of the polyfill being removed</em>".</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">polyfill是使用JavaScript制作的浏览器后备，它允许您希望在现代浏览器中使用的功能可以在较旧的浏览器中使用，例如，在较旧的浏览器中支持画布（HTML5功能）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一种HTML5技术，因为它与HTML5结合使用，但它不是HTML5的一部分，您可以在没有HTML5的情况下使用polyfill（例如，支持所需的CSS3技术）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是个好帖子：</font></font></p>

<p><a href="http://remysharp.com/2010/10/08/what-is-a-polyfill/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://remysharp.com/2010/10/08/what-is-a-polyfill/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是Polyfills和Shims的完整列表：</font></font></p>

<p><a href="https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，让我们澄清一下polyfil不是什么：polyfill不是HTML5标准的一部分。</font><font style="vertical-align: inherit;">即使您经常看到在这些上下文中引用了polyfill，polyfill也不仅限于Javascript。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">术语polyfill本身是指一些代码，这些代码“允许您具有某些期望的功能，这些功能在当前或“现代”浏览器中也可以在不支持该功能的其他浏览器中使用。”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里的polyfill的来源和示例：</font></font></p>

<p><a href="http://www.programmerinterview.com/index.php/html5/html5-polyfill/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.programmerinterview.com/index.php/html5/html5-polyfill/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">polyfill是一段代码（或插件），它提供开发人员希望浏览器本机提供的技术。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
