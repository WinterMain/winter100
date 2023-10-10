---
layout: question
title:  如何使用JavaScript获取图像大小（高度和宽度）？
date:   2020-03-11T15:38:12.000Z
description: 是否有任何JavaScript或jQuery API或方法来获取页面上图像的尺寸？...
img: 
author: 蛋蛋猿
category: question
answer: 10
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有任何JavaScript或jQuery API或方法来获取页面上图像的尺寸？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid小宇宙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Thought this might be helpful to some who are using Javascript and/or Typescript in 2019. </p>

<p><strong>I found the following, as some have suggested, to be incorrect:</strong></p>

<pre><code>let img = new Image();<font></font>
img.onload = function() {<font></font>
  console.log(this.width, this.height) // Error: undefined is not an object<font></font>
};<font></font>
img.src = "http://example.com/myimage.jpg";<font></font>
</code></pre>

<p><strong>This is correct:</strong></p>

<pre><code>let img = new Image();<font></font>
img.onload = function() {<font></font>
  console.log(img.width, img.height)<font></font>
};<font></font>
img.src = "http://example.com/myimage.jpg:;<font></font>
</code></pre>

<p><strong>Conclusion:</strong></p>

<p>Use <code>img</code>, not <code>this</code>, after <code>onload</code>.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里Sam</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>var img = document.getElementById("img_id");<font></font>
alert( img.height + " ;; " + img .width + " ;; " + img .naturalHeight + " ;; " + img .clientHeight + " ;; " + img.offsetHeight + " ;; " + img.scrollHeight + " ;; " + img.clientWidth + " ;; " + img.offsetWidth + " ;; " + img.scrollWidth )<font></font>
//But all invalid in Baidu browser  360 browser ...<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当页面在js或jquery中加载时，您可以应用onload handler属性，如下所示：</font></font></p>

<pre><code>$(document).ready(function(){<font></font>
   var width = img.clientWidth;<font></font>
   var height = img.clientHeight;<font></font>
<font></font>
 });<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilGilPro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用：</font></font></p>

<pre><code>var image=document.getElementById("imageID");<font></font>
var width=image.offsetWidth;<font></font>
var height=image.offsetHeight;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯番长蛋蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在使用实际图像尺寸之前，您应该加载源图像。</font><font style="vertical-align: inherit;">如果您使用JQuery框架，则可以通过简单的方法获得真实的图像大小。</font></font></p>

<pre><code>$("ImageID").load(function(){<font></font>
  console.log($(this).width() + "x" + $(this).height())<font></font>
})<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://jquery.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库-</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>.width()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>.height()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多有关</font></font><a href="http://api.jquery.com/width/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery width</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://api.jquery.com/height/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery heigth的信息</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例代码-</font></font></h2>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>$(document).ready(function(){<font></font>
    $("button").click(function()<font></font>
    {<font></font>
        alert("Width of image: " + $("#img_exmpl").width());<font></font>
        alert("Height of image: " + $("#img_exmpl").height());<font></font>
    });<font></font>
});</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"&gt;&lt;/script&gt;<font></font>
<font></font>
&lt;img id="img_exmpl" src="http://images.all-free-download.com/images/graphicthumb/beauty_of_nature_9_210287.jpg"&gt;<font></font>
&lt;button&gt;Display dimensions of img&lt;/button&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚凯</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为对这些答案的更新很有用，因为投票最好的答复之一是建议使用</font></font><code>clientWidth</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">and clientHeight，我认为它已经过时了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经对HTML5进行了一些实验，以查看实际上返回了哪些值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，我使用了一个名为Dash的程序来获取图像API的概述。</font><font style="vertical-align: inherit;">它声明</font></font><code>height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>width</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是图像的渲染高度/宽度，并且</font></font><code>naturalHeight</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>naturalWidth</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font><font style="vertical-align: inherit;">图像</font><font style="vertical-align: inherit;">的固有高度/宽度（并且仅HTML5）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用了一个美丽的蝴蝶的图像，该图像来自高度为300且宽度为400的文件。</font></font></p>

<pre><code>var img = document.getElementById("img1");<font></font>
<font></font>
console.log(img.height,           img.width);<font></font>
console.log(img.naturalHeight,    img.naturalWidth);<font></font>
console.log($("#img1").height(),  $("#img1").width());<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我将此HTML和内联CSS用于高度和宽度。</font></font></p>

<pre><code>&lt;img style="height:120px;width:150px;" id="img1" src="img/Butterfly.jpg" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果：</font></font></p>

<pre><code>/*Image Element*/ height == 300         width == 400<font></font>
           naturalHeight == 300  naturalWidth == 400<font></font>
/*Jquery*/      height() == 120       width() == 150<font></font>
<font></font>
/*Actual Rendered size*/    120                  150<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我将HTML更改为以下内容：</font></font></p>

<pre><code>&lt;img height="90" width="115" id="img1" src="img/Butterfly.jpg" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使用高度和宽度属性，而不是内联样式</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果：</font></font></p>

<pre><code>/*Image Element*/ height ==  90         width == 115<font></font>
           naturalHeight == 300  naturalWidth == 400<font></font>
/*Jquery*/      height() ==  90       width() == 115<font></font>
<font></font>
/*Actual Rendered size*/     90                  115<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我将HTML更改为以下内容：</font></font></p>

<pre><code>&lt;img height="90" width="115" style="height:120px;width:150px;" id="img1" src="img/Butterfly.jpg" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即同时使用属性和CSS，以查看哪个优先。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果：</font></font></p>

<pre><code>/*Image Element*/ height ==  90         width == 115<font></font>
           naturalHeight == 300  naturalWidth == 400<font></font>
/*Jquery*/      height() == 120       width() == 150<font></font>
<font></font>
/*Actual Rendered size*/    120                  150<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomTony</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外（除了Rex和Ian的答案），还有：</font></font></p>

<pre><code>imageElement.naturalHeight
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font></p>

<pre><code>imageElement.naturalWidth
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些提供了图像文件本身的高度和宽度（而不仅仅是图像元素）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi梅Harry</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用JQuery，您可以执行以下操作：</font></font></p>

<pre><code>var imgWidth = $("#imgIDWhatever").width();
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是jQuery，但您要求的是图片大小，则必须等待它们加载，否则您将只能得到零。</font></font></p>

<pre><code>$(document).ready(function() {<font></font>
    $("img").load(function() {<font></font>
        alert($(this).height());<font></font>
        alert($(this).width());<font></font>
    });<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
