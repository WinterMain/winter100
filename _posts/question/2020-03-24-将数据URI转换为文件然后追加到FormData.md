---
layout: question
title:  将数据URI转换为文件，然后追加到FormData
date:   2020-03-24T10:56:22.000Z
description: 我一直在尝试重新实现HTML5图像上传程序，例如Mozilla Hacks网站上的 HTML5图像上传程序，但是它可以与WebKit浏览器一起使用。任务的...
img: 
author: Green番长
category: question
answer: 4
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在尝试重新实现HTML5图像上传程序，例如</font></font><a href="http://hacks.mozilla.org/2011/01/how-to-develop-a-html5-image-uploader/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla Hacks</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网站</font><a href="http://hacks.mozilla.org/2011/01/how-to-develop-a-html5-image-uploader/" rel="noreferrer"><font style="vertical-align: inherit;">上的</font></a><font style="vertical-align: inherit;"> HTML5图像上传程序</font><font style="vertical-align: inherit;">，但是它可以与WebKit浏览器一起使用。</font><font style="vertical-align: inherit;">任务的一部分是从</font></font><code>canvas</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象中</font><font style="vertical-align: inherit;">提取图像文件</font><font style="vertical-align: inherit;">，并将其附加到</font></font><a href="http://dev.w3.org/2006/webapi/XMLHttpRequest-2/#the-formdata-interface" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FormData</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象以进行上传。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题在于，虽然</font></font><code>canvas</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有</font></font><code>toDataURL</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回图像文件表示形式</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">功能，但FormData对象仅接受</font></font><a href="http://www.w3.org/TR/file-upload/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">File API中的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> File或Blob对象</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla解决方案在Firefox上使用了以下仅Firefox功能</font></font><code>canvas</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var file = canvas.mozGetAsFile("foo.png");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...在WebKit浏览器上不可用。</font><font style="vertical-align: inherit;">我能想到的最好的解决方案是找到一种将Data URI转换为File对象的方法，我认为这可能是File API的一部分，但是我一生都找不到能够做到这一点的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能吗？</font><font style="vertical-align: inherit;">如果没有，还有其他选择吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3693篇《将数据URI转换为文件，然后追加到FormData》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOHarry猪猪</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了与Ravinder Payal完全相同的问题，并且找到了答案。</font><font style="vertical-align: inherit;">尝试这个：</font></font></p>

<pre><code>var dataURL = canvas.toDataURL("image/jpeg");<font></font>
<font></font>
var name = "image.jpg";<font></font>
var parseFile = new Parse.File(name, {base64: dataURL.substring(23)});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">toDataURL给您一个字符串，您可以将该字符串放入隐藏的输入中。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不断发展的标准看起来是</font></font><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-canvas-toblob"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">canvas.toBlob（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是canvas.getAsFile（），因为Mozilla可能会猜测。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还没有浏览器支持它:(</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢您的精彩发言！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，任何尝试接受答案的人都应该对BlobBuilder保持谨慎，因为我发现支持是有限的（并且是命名空间）：</font></font></p>

<pre><code>    var bb;<font></font>
    try {<font></font>
        bb = new BlobBuilder();<font></font>
    } catch(e) {<font></font>
        try {<font></font>
            bb = new WebKitBlobBuilder();<font></font>
        } catch(e) {<font></font>
            bb = new MozBlobBuilder();<font></font>
        }<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否为BlobBuilder使用了另一个库的polyfill？</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><pre><code>var BlobBuilder = (window.MozBlobBuilder || window.WebKitBlobBuilder || window.BlobBuilder);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需尝试即可使用。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢check_ca。</font><font style="vertical-align: inherit;">做得好。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
