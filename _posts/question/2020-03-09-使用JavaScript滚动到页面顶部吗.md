---
layout: question
title:  使用JavaScript滚动到页面顶部吗？
date:   2020-03-09T12:36:44.000Z
description: 如何使用JavaScript滚动到页面顶部？即使滚动条立即跳到顶部也是可取的。我不是在寻找平滑的滚动。...
img: 
author: 达蒙逆天Pro
category: question
answer: 15
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用JavaScript滚动到页面顶部？</font><font style="vertical-align: inherit;">即使滚动条立即跳到顶部也是可取的。</font><font style="vertical-align: inherit;">我不是在寻找平滑的滚动。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第250篇《使用JavaScript滚动到页面顶部吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">激活所有浏览器。</font><font style="vertical-align: inherit;">祝好运</font></font></p>

<pre><code>var process;<font></font>
        var delay = 50; //milisecond scroll top<font></font>
        var scrollPixel = 20; //pixel U want to change after milisecond<font></font>
        //Fix Undefine pageofset when using IE 8 below;<font></font>
        function getPapeYOfSet() {<font></font>
            var yOfSet = (typeof (window.pageYOffset) === "number") ? window.pageYOffset : document.documentElement.scrollTop;<font></font>
            return yOfSet;<font></font>
        }<font></font>
<font></font>
<font></font>
<font></font>
        function backToTop() {<font></font>
            process = setInterval(function () {<font></font>
                var yOfSet = getPapeYOfSet();<font></font>
                if (yOfSet === 0) {<font></font>
                    clearInterval(process);<font></font>
                } else {<font></font>
                    window.scrollBy(0, -scrollPixel);<font></font>
                }<font></font>
            }, delay);<font></font>
        }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin村村</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>You can try using JS as in this Fiddle <a href="http://jsfiddle.net/5bNmH/1/" rel="nofollow">http://jsfiddle.net/5bNmH/1/</a></p>

<p>Add the "Go to top" button in your page footer:</p>

<pre><code>&lt;footer&gt;<font></font>
    &lt;hr /&gt;<font></font>
    &lt;p&gt;Just some basic footer text.&lt;/p&gt;<font></font>
    &lt;!-- Go to top Button --&gt;<font></font>
    &lt;a href="#" class="go-top"&gt;Go Top&lt;/a&gt;<font></font>
&lt;/footer&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>None of the answers above will work in SharePoint 2016.</p>

<p>It has to be done like this : <a href="https://sharepoint.stackexchange.com/questions/195870/">https://sharepoint.stackexchange.com/questions/195870/</a></p>

<pre><code>var w = document.getElementById("s4-workspace");<font></font>
w.scrollTop = 0;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Stafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Non-jQuery solution / pure JavaScript:</p>

<pre><code>document.body.scrollTop = document.documentElement.scrollTop = 0;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞羽宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong>This will work:</strong></p>

<p><strong><code>window.scrollTo(0, 0);</code></strong></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>$(document).scrollTop(0);</code> also works.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙Sam</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Try this</p>

<pre><code>&lt;script&gt;<font></font>
    $(window).scrollTop(100);<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小哥</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>$(".scrolltop").click(function() {<font></font>
  $("html, body").animate({ scrollTop: 0 }, "slow");<font></font>
  return false;<font></font>
});</code></pre>
<pre class="snippet-code-css lang-css prettyprint-override"><code>.section{<font></font>
 height:400px;<font></font>
}<font></font>
.section1{<font></font>
  background-color: #333;<font></font>
}<font></font>
.section2{<font></font>
  background-color: red;<font></font>
}<font></font>
.section3{<font></font>
  background-color: yellow;<font></font>
}<font></font>
.section4{<font></font>
  background-color: green;<font></font>
}<font></font>
.scrolltop{<font></font>
  position:fixed;<font></font>
  right:10px;<font></font>
  bottom:10px;<font></font>
  color:#fff;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
&lt;title&gt;Scroll top demo&lt;/title&gt;<font></font>
&lt;script src="https://code.jquery.com/jquery-3.3.1.js"&gt;&lt;/script&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
&lt;div class="content-wrapper"&gt;<font></font>
&lt;div class="section section1"&gt;&lt;/div&gt;<font></font>
&lt;div class="section section2"&gt;&lt;/div&gt;<font></font>
&lt;div class="section section3"&gt;&lt;/div&gt;<font></font>
&lt;div class="section section4"&gt;&lt;/div&gt;<font></font>
&lt;a class="scrolltop"&gt;Scroll top&lt;/a&gt;<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">老</font></font><code>#top</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以做到的</font></font></p>

<pre><code>document.location.href = "#top";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在FF，IE和Chrome中正常运行</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Itachi理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">真的很奇怪：这个问题已经存在了五年，现在还没有可用于滚动动画的JavaScript答案……因此，您可以开始：</font></font></p>

<pre><code>var scrollToTop = window.setInterval(function() {<font></font>
    var pos = window.pageYOffset;<font></font>
    if ( pos &gt; 0 ) {<font></font>
        window.scrollTo( 0, pos - 20 ); // how far to scroll on each step<font></font>
    } else {<font></font>
        window.clearInterval( scrollToTop );<font></font>
    }<font></font>
}, 16); // how fast to scroll (this equals roughly 60 fps)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果愿意，可以将其包装在函数中，然后通过</font></font><code>onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性进行</font><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">检查这个</font></font><a href="http://jsfiddle.net/osoh6o5a/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsfiddle</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：这是一个非常基本的解决方案，可能不是性能最高的解决方案。</font><font style="vertical-align: inherit;">可以在这里找到一个非常详细的示例：</font><a href="https://github.com/cferdinandi/smooth-scroll" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/cferdinandi/smooth-scroll" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/cferdinandi/smooth-scroll</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要进行平滑滚动，请尝试以下操作：</font></font></p>

<pre><code>$("a").click(function() {<font></font>
     $("html, body").animate({ scrollTop: 0 }, "slow");<font></font>
     return false;<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个解决方案是JavaScript window.scrollTo方法：</font></font></p>

<pre><code> window.scrollTo(x-value, y-value);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">x值是沿水平轴的像素。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">y值是沿垂直轴的像素。</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">平滑滚动，纯JavaScript：</font></font></p>

<pre><code>(function smoothscroll(){<font></font>
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;<font></font>
    if (currentScroll &gt; 0) {<font></font>
         window.requestAnimationFrame(smoothscroll);<font></font>
         window.scrollTo (0,currentScroll - (currentScroll/5));<font></font>
    }<font></font>
})();<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenStafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试此滚动顶部</font></font></strong></p>

<pre><code>&lt;script&gt;<font></font>
 $(document).ready(function(){<font></font>
    $(window).scrollTop(0);<font></font>
});<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西达蒙西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不需要jQuery即可执行此操作。</font><font style="vertical-align: inherit;">一个标准的HTML标签就足够了...</font></font></p>

<pre><code>&lt;div id="jump_to_me"&gt;<font></font>
    blah blah blah<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;a target="#jump_to_me"&gt;Click Here To Destroy The World!&lt;/a&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不需要更改以进行动画处理，则无需使用任何特殊的插件-我只需要使用本机JavaScript window.scrollTo方法-传入0,0即可将页面立即滚动到左上角。</font></font></p>

<pre><code>window.scrollTo(x-coord, y-coord);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参量    </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">x坐标是沿水平轴的像素。  </font></font></li>
<li>y-coord is the pixel along the vertical axis. </li>
</ul></div>
        </div></div>
    {% endraw %}
  </div>
<div>
