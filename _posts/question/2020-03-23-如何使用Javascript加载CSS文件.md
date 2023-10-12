---
layout: question
title:  如何使用Javascript加载CSS文件？
date:   2020-03-23T06:50:28.000Z
description: 是否可以使用Javascript将CSS样式表导入html页面？如果是这样，怎么办？附言：JavaScript将托管在我的网站上，但我希望用户能够放入...
img: 
author: 乐
category: question
answer: 9
tags: JavaScript CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以使用Javascript将CSS样式表导入html页面？</font><font style="vertical-align: inherit;">如果是这样，怎么办？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附言：JavaScript将托管在我的网站上，但我希望用户能够放入</font></font><code>&lt;head&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其网站</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">标签，并且它应该能够将托管在我的服务器上的CSS文件导入当前网页。</font><font style="vertical-align: inherit;">（css文件和javascript文件都将托管在我的服务器上）。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2879篇《如何使用Javascript加载CSS文件？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenDavaidJim</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><pre><code>var fileref = document.createElement("link")<font></font>
fileref.setAttribute("rel", "stylesheet")<font></font>
fileref.setAttribute("type", "text/css")<font></font>
fileref.setAttribute("th:href", "@{/filepath}")<font></font>
fileref.setAttribute("href", "/filepath")<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用百里香，这很好用。</font><font style="vertical-align: inherit;">谢谢</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想分享另一种方法，不仅可以加载CSS，还可以加载所有资产（js，css，图像）并处理</font><font style="vertical-align: inherit;">文件堆的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">onload</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件。</font><font style="vertical-align: inherit;">是</font></font><code>async-assets-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">请参见下面的示例：</font></font></p>

<pre><code>&lt;script src="https://unpkg.com/async-assets-loader"&gt;&lt;/script&gt;<font></font>
&lt;script&gt;<font></font>
var jsfile = "https://code.jquery.com/jquery-3.4.1.min.js";<font></font>
var cssfile = "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css";<font></font>
var imgfile = "https://logos.keycdn.com/keycdn-logo-black.png";<font></font>
var assetsLoader = new asyncAssetsLoader();<font></font>
assetsLoader.load([<font></font>
      {uri: jsfile, type: "script"},<font></font>
      {uri: cssfile, type: "style"},<font></font>
      {uri: imgfile, type: "img"}<font></font>
    ], function () {<font></font>
      console.log("Assets are loaded");<font></font>
      console.log("Img width: " + assetsLoader.getLoadedTags()[imgfile].width);<font></font>
    });<font></font>
&lt;/script&gt; <font></font>
</code></pre>

<p>According to the <a href="https://www.npmjs.com/package/async-assets-loader" rel="nofollow noreferrer">async-assets-loader</a> docs</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用此</font></font><a href="http://developer.yahoo.com/yui/get/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">YUI库</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或使用</font></font><a href="http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本文来实现</font></font></a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="http://developer.yahoo.com/yui/get/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">YUI库</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能是你在找什么。</font><font style="vertical-align: inherit;">它还支持跨域加载。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用jquery，则</font></font><a href="http://nicolas.rudas.info/jQuery/getPlugin/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此插件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行相同的操作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱阳光Pro</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是使用jQuery的元素创建方法（我的喜好）和回调的方法</font></font><code>onLoad</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var css = $("&lt;link&gt;", {<font></font>
  "rel" : "stylesheet",<font></font>
  "type" :  "text/css",<font></font>
  "href" : "style.css"<font></font>
})[0];<font></font>
<font></font>
css.onload = function(){<font></font>
  console.log("CSS IN IFRAME LOADED");<font></font>
};<font></font>
<font></font>
document<font></font>
  .getElementsByTagName("head")[0]<font></font>
  .appendChild(css);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此代码： </font></font></p>

<pre><code>var element = document.createElement("link");<font></font>
element.setAttribute("rel", "stylesheet");<font></font>
element.setAttribute("type", "text/css");<font></font>
element.setAttribute("href", "external.css");<font></font>
document.getElementsByTagName("head")[0].appendChild(element);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个通用的jquery插件，可按需加载CSS和JS文件的同步和异步。</font><font style="vertical-align: inherit;">它还可以跟踪已加载的内容：）请参阅：</font><a href="http://code.google.com/p/rloader/" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://code.google.com/p/rloader/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//code.google.com/p/rloader/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一泡芙猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这是一个很老的话题，但是我的5美分到了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有另一种方法可以执行此操作，具体取决于您的需求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一种情况，我希望CSS文件仅在一段时间内处于活动状态。</font><font style="vertical-align: inherit;">就像CSS切换一样。</font><font style="vertical-align: inherit;">激活css，然后在另一个事件后将其激活。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了动态加载css然后删除它之外，您可以在新css中所有元素的前面添加一个Class / id，然后仅切换该CSS基本节点的class / id（例如body标签）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此解决方案，您最初会加载更多的css文件，但是您可以使用更动态的方式切换css布局。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋阿飞小小</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Element.insertAdjacentHTML</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有非常好的浏览器支持，并且可以在一行中添加样式表。</font></font></p>

<pre><code>document.getElementsByTagName("head")[0].insertAdjacentHTML(<font></font>
    "beforeend",<font></font>
    "&lt;link rel=\"stylesheet\" href=\"path/to/style.css\" /&gt;");<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
