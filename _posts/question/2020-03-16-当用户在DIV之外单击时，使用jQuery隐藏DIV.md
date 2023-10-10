---
layout: question
title:  当用户在DIV之外单击时，使用jQuery隐藏DIV
date:   2020-03-16T06:28:43.000Z
description: 我正在使用此代码：$('body').click(function() {   $('.form_wrapper').hide();});$(...
img: 
author: 达蒙Near
category: question
answer: 6
tags: HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用此代码：</font></font></p>

<pre><code>$('body').click(function() {<font></font>
   $('.form_wrapper').hide();<font></font>
});<font></font>
<font></font>
$('.form_wrapper').click(function(event){<font></font>
   event.stopPropagation();<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和这个HTML：</font></font></p>

<pre><code>&lt;div class="form_wrapper"&gt;<font></font>
   &lt;a class="agree" href="javascript:;"&gt;I Agree&lt;/a&gt;<font></font>
   &lt;a class="disagree" href="javascript:;"&gt;Disagree&lt;/a&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是我在DIV中有链接，当单击它们时它们不再起作用。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1754篇《当用户在DIV之外单击时，使用jQuery隐藏DIV》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋梅古一</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p>Copied from <a href="https://sdtuts.com/click-on-not-specified-element/" rel="nofollow noreferrer">https://sdtuts.com/click-on-not-specified-element/</a></p>

<p>Live demo <a href="http://demos.sdtuts.com/click-on-specified-element" rel="nofollow noreferrer">http://demos.sdtuts.com/click-on-specified-element</a></p>

<pre><code>$(document).ready(function () {<font></font>
    var is_specified_clicked;<font></font>
    $(".specified_element").click(function () {<font></font>
        is_specified_clicked = true;<font></font>
        setTimeout(function () {<font></font>
            is_specified_clicked = false;<font></font>
        }, 200);<font></font>
    })<font></font>
    $("*").click(function () {<font></font>
        if (is_specified_clicked == true) {<font></font>
//WRITE CODE HERE FOR CLICKED ON OTHER ELEMENTS<font></font>
            $(".event_result").text("you were clicked on specified element");<font></font>
        } else {<font></font>
//WRITE CODE HERE FOR SPECIFIED ELEMENT CLICKED<font></font>
            $(".event_result").text("you were clicked not on specified element");<font></font>
        }<font></font>
    })<font></font>
})<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易阿飞</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var exclude_div = $("#ExcludedDiv");;  <font></font>
$(document).click(function(e){<font></font>
   if( !exclude_div.is( e.target ) )  // if target div is not the one you want to exclude then add the class hidden<font></font>
        $(".myDiv1").addClass("hidden");  <font></font>
<font></font>
}); </code></pre>
</div>
</div>
<p></p>

<p><a href="http://jsfiddle.net/sharmapattar/xJfHy/18/" rel="nofollow">FIDDLE</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西理查德</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><pre><code>var n = 0;<font></font>
$("#container").mouseenter(function() {<font></font>
n = 0;<font></font>
<font></font>
}).mouseleave(function() {<font></font>
n = 1;<font></font>
});<font></font>
<font></font>
$("html").click(function(){ <font></font>
if (n == 1) {<font></font>
alert("clickoutside");<font></font>
}<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗十三</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p>Even sleaker:</p>

<pre><code>$("html").click(function(){ <font></font>
    $(".wrapper:visible").hide();<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端LEYLEY</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能要检查为主体触发的click事件的目标，而不是依赖stopPropagation。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像是：</font></font></p>

<pre><code>$("body").click<font></font>
(<font></font>
  function(e)<font></font>
  {<font></font>
    if(e.target.className !== "form_wrapper")<font></font>
    {<font></font>
      $(".form_wrapper").hide();<font></font>
    }<font></font>
  }<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样，主体元素可能不包括浏览器中显示的整个视觉空间。</font><font style="vertical-align: inherit;">如果您发现点击没有注册，则可能需要为HTML元素添加点击处理程序。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猿</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><a href="http://jsfiddle.net/TmK2K/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现场演示</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查点击区域不在目标元素中还是其子元素中</font></font></p>

<pre><code>$(document).click(function (e) {<font></font>
    if ($(e.target).parents(".dropdown").length === 0) {<font></font>
        $(".dropdown").hide();<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery停止传播是最好的解决方案</font></font></p>

<p><a href="http://jsfiddle.net/C8FJP/363/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现场演示</font></font></a></p>

<pre><code>$(".button").click(function(e){<font></font>
    $(".dropdown").show();<font></font>
     e.stopPropagation();<font></font>
});<font></font>
<font></font>
$(".dropdown").click(function(e){<font></font>
    e.stopPropagation();<font></font>
});<font></font>
<font></font>
$(document).click(function(){<font></font>
    $(".dropdown").hide();<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
