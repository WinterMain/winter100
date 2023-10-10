---
layout: question
title:  如果html <img>的src属性无效，是否输入默认图像？
date:   2020-04-03T02:26:20.000Z
description: <img>万一src属性无效（仅使用HTML），有什么方法可以在HTML 标签中呈现默认图像？如果没有，那么解决该问题的轻巧方式是什么？...
img: 
author: 村村
category: question
answer: 7
tags: HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>&lt;img&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">万一</font></font><code>src</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性无效（仅使用HTML）</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">有什么方法可以在HTML </font><font style="vertical-align: inherit;">标签中</font><font style="vertical-align: inherit;">呈现默认图像</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">如果没有，那么解决该问题的轻巧方式是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3887篇《如果html <img>的src属性无效，是否输入默认图像？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Tony</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近不得不构建一个回退系统，其中包括任意数量的回退图像。</font><font style="vertical-align: inherit;">这是我使用简单的JavaScript函数完成的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的HTML</font></font></p>

<pre><code>&lt;img src="some_image.tiff"<font></font>
    onerror="fallBackImg(this);"<font></font>
    data-fallIndex="1"<font></font>
    data-fallback1="some_image.png"<font></font>
    data-fallback2="some_image.jpg"&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的JavaScript</font></font></p>

<pre><code>function fallBackImg(elem){<font></font>
    elem.onerror = null;<font></font>
    let index = +elem.dataset.fallIndex;<font></font>
    elem.src = elem.dataset[`fallback${index}`];<font></font>
    index++;<font></font>
    elem.dataset.fallbackindex = index;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我觉得这是处理许多后备图像的一种非常轻巧的方法。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您已经创建了动态Web项目并将所需的图像放置在WebContent中，则可以通过在Spring MVC中使用下面提到的代码来访问该图像：</font></font></p>

<pre><code>&lt;img src="Refresh.png" alt="Refresh" height="50" width="50"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以创建名为img的文件夹，并将图像放置在img文件夹中，并将该img文件夹放置在WebContent中，然后可以使用以下代码访问图像：</font></font></p>

<pre><code>&lt;img src="img/Refresh.png" alt="Refresh" height="50" width="50"&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋L卡卡西</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google将该页面添加到“ image fallback html”关键字，但是由于以上都不对我有帮助，并且我一直在寻找“对IE 9以下的svg fallback支持”，因此我一直进行搜索，结果是： </font></font></p>

<pre><code>&lt;img src="base-image.svg" alt="picture" /&gt;<font></font>
&lt;!--[if (lte IE 8)|(!IE)]&gt;&lt;image src="fallback-image.png" alt="picture" /&gt;&lt;![endif]--&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可能是题外话，但它解决了我自己的问题，也可能对其他人有帮助。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Jquery，您可以执行以下操作：</font></font></p>

<pre><code>$(document).ready(function() {<font></font>
    if ($("img").attr("src") != null)<font></font>
    {<font></font>
       if ($("img").attr("src").toString() == "")<font></font>
       {<font></font>
            $("img").attr("src", "images/default.jpg");<font></font>
       }<font></font>
    }<font></font>
    else<font></font>
    {<font></font>
        $("img").attr("src", "images/default.jpg");<font></font>
    }<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅限HTML的解决方案，唯一的要求是您</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">知道</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要插入的图像的大小。</font><font style="vertical-align: inherit;">由于它</font></font><code>background-image</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用作填充</font><font style="vertical-align: inherit;">图像，因此不适用于透明图像</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>background-image</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果给定的图像丢失，</font><font style="vertical-align: inherit;">我们可以成功地用于</font><font style="vertical-align: inherit;">链接显示的图像。</font><font style="vertical-align: inherit;">唯一的问题是图标图像损坏了-我们可以通过插入一个很大的空字符来删除它，从而将内容推到的显示之外</font></font><code>img</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>img {<font></font>
  background-image: url("http://placehold.it/200x200");<font></font>
  overflow: hidden;<font></font>
}<font></font>
<font></font>
img:before {<font></font>
  content: " ";<font></font>
  font-size: 1000px;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>This image is missing:<font></font>
&lt;img src="a.jpg" style="width: 200px; height: 200px"/&gt;&lt;br/&gt;<font></font>
And is displaying the placeholder</code></pre>
</div>
</div>
<p></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅CSS解决方案（仅适用于Webkit）</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>img:before {<font></font>
  content: " ";<font></font>
  font-size: 1000px;<font></font>
  background-image: url("http://placehold.it/200x200");<font></font>
  display: block;<font></font>
  width: 200px;<font></font>
  height: 200px;<font></font>
  position: relative;<font></font>
  z-index: 0;<font></font>
  margin-bottom: -16px;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>This image is there:<font></font>
&lt;img src="http://placehold.it/100x100"/&gt;&lt;br/&gt;<font></font>
<font></font>
This image is missing:<font></font>
&lt;img src="a.jpg"/&gt;&lt;br/&gt;<font></font>
And is displaying the placeholder</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;img style="background-image: url(image1), url(image2);"&gt;&lt;/img&gt;                                            </code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用可添加多个图像的背景图像。</font><font style="vertical-align: inherit;">我的情况是：image1是主图像，它将从某个位置（浏览器执行请求）获得。image2是在加载image1时显示的默认本地图像。</font><font style="vertical-align: inherit;">如果image1返回任何类型的错误，则用户将看不到任何更改，这对于用户体验将是干净的</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy前端</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您要求提供</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅HTML的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案...</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code> &lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN"<font></font>
   "http://www.w3.org/TR/html4/strict.dtd"&gt;<font></font>
<font></font>
&lt;html lang="en"&gt;<font></font>
<font></font>
&lt;head&gt;<font></font>
  &lt;title&gt;Object Test&lt;/title&gt;<font></font>
  &lt;meta http-equiv="Content-Type" content="text/html; charset=utf-8"&gt;<font></font>
&lt;/head&gt;<font></font>
<font></font>
&lt;body&gt;<font></font>
<font></font>
  &lt;p&gt;<font></font>
    &lt;object data="http://stackoverflow.com/does-not-exist.png" type="image/png"&gt;<font></font>
      &lt;img src="https://cdn.sstatic.net/Img/unified/sprites.svg?v=e5e58ae7df45" alt="Stack Overflow logo and icons and such"&gt;<font></font>
    &lt;/object&gt;<font></font>
  &lt;/p&gt;<font></font>
<font></font>
&lt;/body&gt;<font></font>
<font></font>
&lt;/html&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于第一个图像不存在，因此将显示后备（此网站上使用的sprites *）。</font><font style="vertical-align: inherit;">如果您使用的是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">真正</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的老的浏览器不支持</font></font><a href="http://htmlhelp.com/reference/html40/special/object.html" rel="noreferrer"><code>object</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它会忽略该标签和使用</font></font><code>img</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">兼容性，</font><font style="vertical-align: inherit;">请参见</font></font><a href="https://caniuse.com/#search=%3Cobject%3E" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">caniuse</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网站。</font><font style="vertical-align: inherit;">截至2018年，ie6 +的所有浏览器均广泛支持此元素。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">*除非再次更改图片的网址，否则您可能会看到替代文字。</font></font></em></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
