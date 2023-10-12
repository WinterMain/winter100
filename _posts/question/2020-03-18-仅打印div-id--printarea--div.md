---
layout: question
title:  仅打印<div id =“ printarea”> </ div>？
date:   2020-03-18T11:44:16.000Z
description: 如何打印指示的div（而无需手动禁用页面上的所有其他内容）？我想避免使用新的预览对话框，因此使用此内容创建新窗口没有用。该页面包含几个表，其中一个...
img: 
author: 阳光LEY
category: question
answer: 15
tags: JavaScript CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何打印指示的div（而无需手动禁用页面上的所有其他内容）？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想避免使用新的预览对话框，因此使用此内容创建新窗口没有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该页面包含几个表，其中一个表包含我要打印的div-该表已通过网络的视觉样式进行了样式设置，因此不应以打印形式显示。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2198篇《仅打印<div id =“ printarea”> </ div>？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村十三逆天</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>The Best way to Print particular Div or any Element</p>

<pre><code>printDiv("myDiv");<font></font>
<font></font>
function printDiv(id){<font></font>
        var printContents = document.getElementById(id).innerHTML;<font></font>
        var originalContents = document.body.innerHTML;<font></font>
        document.body.innerHTML = printContents;<font></font>
        window.print();<font></font>
        document.body.innerHTML = originalContents;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Stafan</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>I found the solution.</p>

<pre><code>@media print {<font></font>
    .print-area {<font></font>
        background-color: white;<font></font>
        height: 100%;<font></font>
        width: auto;<font></font>
        position: absolute;<font></font>
        top: 0;<font></font>
        bottom: 0;<font></font>
        left: 0;<font></font>
        right: 0;<font></font>
        z-index:1500;<font></font>
        visibility: visible;<font></font>
    }<font></font>
    @page{<font></font>
        size: portrait;<font></font>
        margin: 1cm;<font></font>
    }<font></font>
/*IF print-area parent element is position:absolute*/<font></font>
    .ui-dialog,<font></font>
    .ui-dialog .ui-dialog-content{<font></font>
        position:unset !important;<font></font>
        visibility: hidden;<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里JinJin</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>You could use a separate CSS style which disables every other content except the one with the id "printarea".</p>

<p>See <a href="http://alistapart.com/article/goingtoprint/" rel="nofollow noreferrer">CSS Design: Going to Print</a> for further explanation and examples.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋梅蛋蛋</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>The printDiv() function came out a few times, but in that case, you loose all your binding elements and input values. So, my solution is to create a div for everything called "body_allin" and another one outside the first one called "body_print".</p>

<p>Then you call this function:</p>

<pre><code>function printDiv(divName){<font></font>
<font></font>
    var printContents = document.getElementById(divName).innerHTML;<font></font>
<font></font>
    document.getElementById("body_print").innerHTML = printContents;<font></font>
<font></font>
    document.getElementById("body_allin").style.display = "none";<font></font>
    document.getElementById("body_print").style.display = "";<font></font>
<font></font>
    window.print();<font></font>
<font></font>
    document.getElementById("body_print").innerHTML = "";<font></font>
    document.getElementById("body_allin").style.display = "";<font></font>
    document.getElementById("body_print").style.display = "none";<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德十三Davaid</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>If you only want to print this div, you must use the instruction:</p>

<pre><code>@media print{<font></font>
    *{display:none;}<font></font>
    #mydiv{display:block;}<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗猪猪理查德</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>Best css to fit space empty height:</p>

<pre><code>@media print {<font></font>
  body * {<font></font>
    visibility: hidden;<font></font>
    height:0;<font></font>
  }<font></font>
  #section-to-print, #section-to-print * {<font></font>
    visibility: visible;<font></font>
    height:auto;<font></font>
  }<font></font>
  #section-to-print {<font></font>
    position: absolute;<font></font>
    left: 0;<font></font>
    top: 0;<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearHarry</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>In my case I had to print a image inside a page. When I used the solution voted, I had 1 blank page and the other one showing the image. Hope it will help someone.</p>

<p>Here is the css I used:</p>

<pre><code>@media print {<font></font>
  body * {<font></font>
    visibility: hidden;<font></font>
  }<font></font>
<font></font>
  #not-print * {<font></font>
    display: none;<font></font>
  }<font></font>
<font></font>
  #to-print, #to-print * {<font></font>
    visibility: visible;<font></font>
  }<font></font>
<font></font>
  #to-print {<font></font>
    display: block !important;<font></font>
    position: absolute;<font></font>
    left: 0;<font></font>
    top: 0;<font></font>
    width: auto;<font></font>
    height: 99%;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p>My html is:</p>

<pre><code>&lt;div id="not-print" &gt;<font></font>
  &lt;header class="row wrapper page-heading"&gt;<font></font>
<font></font>
  &lt;/header&gt;<font></font>
<font></font>
  &lt;div class="wrapper wrapper-content"&gt;<font></font>
    &lt;%= image_tag @qrcode.image_url,  size: "250x250" , alt: "#{@qrcode.name}" %&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;div id="to-print" style="display: none;"&gt;<font></font>
  &lt;%= image_tag @qrcode.image_url,  size: "300x300" , alt: "#{@qrcode.name}" %&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪小小小哥</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>I picked up the content using JavaScript and created a window that I could print in stead...</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin理查德</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;script type="text/javascript"&gt;<font></font>
   function printDiv(divId) {<font></font>
       var printContents = document.getElementById(divId).innerHTML;<font></font>
       var originalContents = document.body.innerHTML;<font></font>
       document.body.innerHTML = "&lt;html&gt;&lt;head&gt;&lt;title&gt;&lt;/title&gt;&lt;/head&gt;&lt;body&gt;" + printContents + "&lt;/body&gt;";<font></font>
       window.print();<font></font>
       document.body.innerHTML = originalContents;<font></font>
   }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A达蒙</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>With CSS 3 you could use the following:</p>

<pre><code>body *:not(#printarea) {<font></font>
    display: none;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry小胖古一</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嗯...使用样式表的类型进行打印...例如：</font></font></p>

<pre><code>&lt;link rel="stylesheet" type="text/css" href="print.css" media="print" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">print.css：</font></font></p>

<pre><code>div { display: none; }<font></font>
#yourdiv { display: block; }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Eva</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这很好用：</font></font></p>

<pre><code>&lt;style type="text/css"&gt;<font></font>
@media print<font></font>
{<font></font>
body * { visibility: hidden; }<font></font>
#printcontent * { visibility: visible; }<font></font>
#printcontent { position: absolute; top: 40px; left: 30px; }<font></font>
}<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，这仅适用于“可见性”。</font><font style="vertical-align: inherit;">“显示”不会这样做。</font><font style="vertical-align: inherit;">在FF3中测试。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green神乐</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您能否使用</font></font><a href="http://css-discuss.incutio.com/?page=PrintStylesheets" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打印样式表</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并使用CSS来安排要打印的内容？</font></font><a href="http://www.alistapart.com/stories/goingtoprint/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读本文</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取更多指导。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有的答案至今是相当有缺陷-他们要么涉及添加</font></font><code>class="noprint"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到任何东西，或者会搞乱</font></font><code>display</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内</font></font><code>#printable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为最好的解决方案是围绕不可打印的东西创建包装器：</font></font></p>

<pre><code>&lt;head&gt;<font></font>
    &lt;style type="text/css"&gt;<font></font>
<font></font>
    #printable { display: none; }<font></font>
<font></font>
    @media print<font></font>
    {<font></font>
        #non-printable { display: none; }<font></font>
        #printable { display: block; }<font></font>
    }<font></font>
    &lt;/style&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
    &lt;div id="non-printable"&gt;<font></font>
        Your normal page contents<font></font>
    &lt;/div&gt;<font></font>
<font></font>
    &lt;div id="printable"&gt;<font></font>
        Printer version<font></font>
    &lt;/div&gt;<font></font>
&lt;/body&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然这不是完美的，因为它涉及到在HTML中移动一些内容...</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子神无</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个通用的解决方案，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><strong><font style="vertical-align: inherit;">CSS</font></strong><font style="vertical-align: inherit;">，我已经验证可以使用。</font></font></p>

<pre><code>@media print {<font></font>
  body * {<font></font>
    visibility: hidden;<font></font>
  }<font></font>
  #section-to-print, #section-to-print * {<font></font>
    visibility: visible;<font></font>
  }<font></font>
  #section-to-print {<font></font>
    position: absolute;<font></font>
    left: 0;<font></font>
    top: 0;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替代方法不是很好。</font><font style="vertical-align: inherit;">使用</font></font><code>display</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是棘手的，因为如果有任何元素，</font></font><code>display:none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则任何后代都不会显示。</font><font style="vertical-align: inherit;">要使用它，您必须更改页面的结构。</font></font></p>

<p>Using <code>visibility</code> works better since you can turn on visibility for descendants. The invisible elements still affect the layout though, so I move <code>section-to-print</code> to the top left so it prints properly.</p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
