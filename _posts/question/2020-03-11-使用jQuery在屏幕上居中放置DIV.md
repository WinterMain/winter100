---
layout: question
title:  使用jQuery在屏幕上居中放置DIV
date:   2020-03-11T03:17:21.000Z
description: 如何<div>使用jQuery在屏幕中央设置a ？...
img: 
author: GilGreen
category: question
answer: 13
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用jQuery在屏幕中央</font><font style="vertical-align: inherit;">设置a </font><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Itachi</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS解决方案</font></font></strong>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅两行</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将您的内部div水平和垂直居中。</font></font></p>

<pre><code>#outer{<font></font>
  display: flex;<font></font>
}<font></font>
#inner{<font></font>
margin: auto;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">}</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅用于水平对齐，更改 </font></font></p>

<pre><code>margin: 0 auto;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于垂直方向，变化</font></font></p>

<pre><code>margin: auto 0;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天蛋蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用CSS </font></font><code>translate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性：</font></font></p>

<pre><code>position: absolute;<font></font>
transform: translate(-50%, -50%);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读</font></font><a href="http://blog.netgloo.com/2014/07/30/centering-a-div-with-css-without-negative-margin-or-jquery/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这篇文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取更多详细信息。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么不使用CSS将div居中？</font></font></p>

<pre><code>#timer_wrap{  <font></font>
  position: fixed;<font></font>
  left: 50%;<font></font>
  top: 50%;<font></font>
} <font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Sam路易</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需说：$（“＃divID”）。html（$（''）。html（$（“＃divID”）。html（）））;;</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门猴子</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有很多方法可以做到这一点。</font><font style="vertical-align: inherit;">我的对象通过</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">display：none</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">隐藏</font><font style="vertical-align: inherit;">在BODY标签内，因此位置相对于BODY。</font><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$（“＃object_id”）。show（）之后</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我调用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$（“＃object_id”）。center（）</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">position：absolute，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为有可能（尤其是在小型移动设备上）模态窗口大于设备窗口，在这种情况下，如果定位固定，则某些模态内容可能无法访问。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我根据其他人的回答和我的具体需求而设计的口味：</font></font></p>

<pre><code>$.fn.center = function () {<font></font>
        this.css("position","absolute");<font></font>
<font></font>
        //use % so that modal window will adjust with browser resizing<font></font>
        this.css("top","50%");<font></font>
        this.css("left","50%");<font></font>
<font></font>
        //use negative margin to center<font></font>
        this.css("margin-left",(-1*this.outerWidth()/2)+($(window).scrollLeft())+"px");<font></font>
        this.css("margin-top",(-1*this.outerHeight()/2)+($(window).scrollTop())+"px");<font></font>
<font></font>
        //catch cases where object would be offscreen<font></font>
        if(this.offset().top&lt;0)this.css({"top":"5px","margin-top":"0"});<font></font>
        if(this.offset().left&lt;0)this.css({"left":"5px","margin-left":"0"});<font></font>
<font></font>
        return this;<font></font>
    };<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小欧学姐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对托尼·洛斯答案的更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
这是我现在认真使用的答案的修改后的版本。</font><font style="vertical-align: inherit;">我想我会分享一下，因为它可以为您可能遇到的各种情况添加更多功能，例如，不同类型的</font></font><code>position</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者只需要水平/垂直居中，而不是两者都需要。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">center.js：</font></font></p>

<pre><code>// We add a pos parameter so we can specify which position type we want<font></font>
<font></font>
// Center it both horizontally and vertically (dead center)<font></font>
jQuery.fn.center = function (pos) {<font></font>
    this.css("position", pos);<font></font>
    this.css("top", ($(window).height() / 2) - (this.outerHeight() / 2));<font></font>
    this.css("left", ($(window).width() / 2) - (this.outerWidth() / 2));<font></font>
    return this;<font></font>
}<font></font>
<font></font>
// Center it horizontally only<font></font>
jQuery.fn.centerHor = function (pos) {<font></font>
    this.css("position", pos);<font></font>
    this.css("left", ($(window).width() / 2) - (this.outerWidth() / 2));<font></font>
    return this;<font></font>
}<font></font>
<font></font>
// Center it vertically only<font></font>
jQuery.fn.centerVer = function (pos) {<font></font>
    this.css("position", pos);<font></font>
    this.css("top", ($(window).height() / 2) - (this.outerHeight() / 2));<font></font>
    return this;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的</font></font><code>&lt;head&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;script src="scripts/center.js"&gt;&lt;/script&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法示例：</font></font></p>

<pre><code>$("#example1").centerHor("absolute")<font></font>
$("#example2").centerHor("fixed")<font></font>
<font></font>
$("#example3").centerVer("absolute")<font></font>
$("#example4").centerVer("fixed")<font></font>
<font></font>
$("#example5").center("absolute")<font></font>
$("#example6").center("fixed")<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可以与任何定位类型一起使用，并且可以轻松地在整个站点中使用，也可以轻松地移植到您创建的任何其他站点。</font><font style="vertical-align: inherit;">不再需要烦人的变通办法来正确地使内容居中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这对外面的人有用！</font><font style="vertical-align: inherit;">请享用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony樱番长</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不需要jQuery的</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用它来使Div元素居中。</font><font style="vertical-align: inherit;">CSS样式</font></font></p>

<pre><code>.black_overlay{<font></font>
    display: none;<font></font>
    position: absolute;<font></font>
    top: 0%;<font></font>
    left: 0%;<font></font>
    width: 100%;<font></font>
    height: 100%;<font></font>
    background-color: black;<font></font>
    z-index:1001;<font></font>
    -moz-opacity: 0.8;<font></font>
    opacity:.80;<font></font>
    filter: alpha(opacity=80);<font></font>
}<font></font>
<font></font>
.white_content {<font></font>
    display: none;<font></font>
    position: absolute;<font></font>
    top: 25%;<font></font>
    left: 25%;<font></font>
    width: 50%;<font></font>
    height: 50%;<font></font>
    padding: 16px;<font></font>
    border: 16px solid orange;<font></font>
    background-color: white;<font></font>
    z-index:1002;<font></font>
    overflow: auto;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开放元素</font></font></p>

<pre><code>$(document).ready(function(){<font></font>
    $(".open").click(function(e){<font></font>
      $(".black_overlay").fadeIn(200);<font></font>
    });<font></font>
<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Mandy</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您得到的过渡效果不佳，因为每次滚动文档时都要调整元素的位置。</font><font style="vertical-align: inherit;">您要使用固定位置。</font><font style="vertical-align: inherit;">我尝试了上面列出的固定中心插件，看来确实可以很好地解决问题。</font><font style="vertical-align: inherit;">固定位置允许您将元素居中一次，并且CSS属性将在每次滚动时为您保持该位置。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐猪猪</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为，如果要使元素始终居中于页面中间，则绝对位置最好。</font><font style="vertical-align: inherit;">您可能需要固定的元素。</font><font style="vertical-align: inherit;">我找到了另一个使用固定定位的jQuery居中插件。</font><font style="vertical-align: inherit;">它称为</font></font><a href="http://david-tang.net/2010/06/fixed-center-plugin/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">固定中心</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">别太浪</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想纠正一个问题。</font></font></p>

<pre><code>this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的代码在以下情况下</font></font><code>this.height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（例如，假设用户调整屏幕大小且内容是动态的）</font><font style="vertical-align: inherit;">不起作用</font></font><code>scrollTop() = 0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，例如：</font></font></p>

<p><code>window.height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>600</code><br>
<code>this.height</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>650</code></p>

<pre><code>600 - 650 = -50  <font></font>
<font></font>
-50 / 2 = -25<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，该框位于</font></font><code>-25</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">屏幕中央。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易飞云</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将使用</font></font><strong><a href="http://api.jqueryui.com/position/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery UI</font></font></a></strong> <code>position</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数。</font></font></p>

<p><strong><a href="http://jsfiddle.net/ADm97/1/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅工作演示</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;div id="test" style="position:absolute;background-color:blue;color:white"&gt;<font></font>
    test div to center in window<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我有一个id为“ test”的div居中，则以下脚本会将div居中显示在文档中的窗口中。</font><font style="vertical-align: inherit;">（位置选项中“ my”和“ at”的默认值为“ center”）</font></font></p>

<pre><code>&lt;script type="text/javascript"&gt;<font></font>
$(function(){<font></font>
  $("#test").position({<font></font>
     of: $(window)<font></font>
  });<font></font>
};<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙村村Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以单独使用CSS居中，如下所示：</font></font></p>

<p><strong><a href="http://jsfiddle.net/apaul34208/e4y6F/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作实例</font></font></a></strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.center{<font></font>
    position: absolute;<font></font>
    height: 50px;<font></font>
    width: 50px;<font></font>
    background:red;<font></font>
    top:calc(50% - 50px/2); /* height divided by 2*/<font></font>
    left:calc(50% - 50px/2); /* width divided by 2*/<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div class="center"&gt;&lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><code>calc()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 允许您在CSS中进行基本计算。</font></font></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/calc"><font style="vertical-align: inherit;"></font><code>calc()</code></a><font style="vertical-align: inherit;"><a href="http://caniuse.com/#feat=calc"><font style="vertical-align: inherit;">浏览器支持表的</font></a><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/calc"><font style="vertical-align: inherit;">MDN文档</font></a></font><br>
<a href="http://caniuse.com/#feat=calc"><font style="vertical-align: inherit;"></font></a> </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗小哥</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢向jQuery添加功能，因此该功能将有所帮助：</font></font></p>

<pre><code>jQuery.fn.center = function () {<font></font>
    this.css("position","absolute");<font></font>
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + <font></font>
                                                $(window).scrollTop()) + "px");<font></font>
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + <font></font>
                                                $(window).scrollLeft()) + "px");<font></font>
    return this;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在我们可以这样写：</font></font></p>

<pre><code>$(element).center();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示：</font></font><a href="http://jsfiddle.net/DerekL/GbDw9/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（带有添加的参数）</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
