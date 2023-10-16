---
layout: question
title:  在JavaScript函数中定义全局变量
date:   2020-03-12T09:51:42.000Z
description: 是否可以在JavaScript函数中定义全局变量？我想在其他函数中使用trailimage变量（在makeObj函数中声明）。<html xmln...
img: 
author: 飞云卡卡西
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以在JavaScript函数中定义全局变量？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想</font><font style="vertical-align: inherit;">在其他函数中</font><font style="vertical-align: inherit;">使用</font></font><code>trailimage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量（在</font></font><code>makeObj</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数中</font><font style="vertical-align: inherit;">声明</font><font style="vertical-align: inherit;">）。</font></font></p>

<pre><code>&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;<font></font>
    &lt;head id="Head1" runat="server"&gt;<font></font>
        &lt;title&gt;&lt;/title&gt;<font></font>
        &lt;script type="text/javascript"&gt;<font></font>
            var offsetfrommouse = [10, -20];<font></font>
            var displayduration = 0;<font></font>
            var obj_selected = 0;<font></font>
            function makeObj(address) {<font></font>
                **var trailimage = [address, 50, 50];**<font></font>
                document.write('&lt;img id="trailimageid" src="' + trailimage[0] + '" border="0"  style=" position: absolute; visibility:visible; left: 0px; top: 0px; width: ' + trailimage[1] + 'px; height: ' + trailimage[2] + 'px"&gt;');<font></font>
                obj_selected = 1;<font></font>
            }<font></font>
<font></font>
            function truebody() {<font></font>
                return (!window.opera &amp;&amp; document.compatMode &amp;&amp; document.compatMode != "BackCompat") ? document.documentElement : document.body;<font></font>
            }<font></font>
            function hidetrail() {<font></font>
                var x = document.getElementById("trailimageid").style;<font></font>
                x.visibility = "hidden";<font></font>
                document.onmousemove = "";<font></font>
            }<font></font>
            function followmouse(e) {<font></font>
                var xcoord = offsetfrommouse[0];<font></font>
                var ycoord = offsetfrommouse[1];<font></font>
                var x = document.getElementById("trailimageid").style;<font></font>
                if (typeof e != "undefined") {<font></font>
                    xcoord += e.pageX;<font></font>
                    ycoord += e.pageY;<font></font>
                }<font></font>
                else if (typeof window.event != "undefined") {<font></font>
                    xcoord += truebody().scrollLeft + event.clientX;<font></font>
                    ycoord += truebody().scrollTop + event.clientY;<font></font>
                }<font></font>
                var docwidth = 1395;<font></font>
                var docheight = 676;<font></font>
                if (xcoord + trailimage[1] + 3 &gt; docwidth || ycoord + trailimage[2] &gt; docheight) {<font></font>
                    x.display = "none";<font></font>
                    alert("inja");<font></font>
                }<font></font>
                else<font></font>
                    x.display = "";<font></font>
                x.left = xcoord + "px";<font></font>
                x.top = ycoord + "px";<font></font>
            }<font></font>
<font></font>
            if (obj_selected = 1) {<font></font>
                alert("obj_selected = true");<font></font>
                document.onmousemove = followmouse;<font></font>
                if (displayduration &gt; 0)<font></font>
                    setTimeout("hidetrail()", displayduration * 1000);<font></font>
            }<font></font>
        &lt;/script&gt;<font></font>
    &lt;/head&gt;<font></font>
    &lt;body&gt;<font></font>
        &lt;form id="form1" runat="server"&gt;<font></font>
        &lt;img alt="" id="house" src="Pictures/sides/right.gif" style="z-index: 1; left: 372px;<font></font>
            top: 219px; position: absolute; height: 138px; width: 120px" onclick="javascript:makeObj('Pictures/sides/sides-not-clicked.gif');" /&gt;<font></font>
        &lt;/form&gt;<font></font>
    &lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1242篇《在JavaScript函数中定义全局变量》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro神奇</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要创建启动函数，则可以通过以下方式定义全局函数和变量：</font></font></p>

<pre><code>function(globalScope)<font></font>
{<font></font>
     //define something<font></font>
     globalScope.something() { <font></font>
         alert("It works");<font></font>
     };<font></font>
}(window)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为该函数是使用此参数全局调用的，所以这里是全局范围。</font><font style="vertical-align: inherit;">因此，事物应该是全球事物。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚伽罗L</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个可能很丰富的示例代码。</font></font></p>

<pre><code>  var Human = function(){<font></font>
   name = "Shohanur Rahaman";  // global variable<font></font>
   this.name = "Tuly"; // constructor variable <font></font>
   var age = 21;<font></font>
 };<font></font>
<font></font>
  var shohan = new Human();<font></font>
<font></font>
 document.write(shohan.name+"&lt;br&gt;");<font></font>
 document.write(name);<font></font>
 document.write(age); // undefined cause its local variable <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，我找到了一个不错的答案：</font></font><a href="http://www.quora.com/How-can-one-declare-a-global-variable-in-JavaScript" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在JavaScript中声明一个全局变量</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEva卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需声明 </font></font></p>

<pre><code>var trialImage;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">外。</font><font style="vertical-align: inherit;">然后</font></font></p>

<pre><code>function makeObj(address) {<font></font>
    trialImage = [address, 50, 50];<font></font>
..<font></font>
..<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞A飞云</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在函数外部定义Trailimage变量并在makeObj函数中设置其值非常简单。</font><font style="vertical-align: inherit;">现在，您可以从任何地方访问其价值。</font></font></p>

<pre><code>var offsetfrommouse = [10, -20];<font></font>
var displayduration = 0;<font></font>
var obj_selected = 0;<font></font>
var trailimage;<font></font>
function makeObj(address) {<font></font>
      trailimage = [address, 50, 50];<font></font>
      ....<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里JinJin</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需在函数外部声明它，然后在函数内部分配值即可。</font><font style="vertical-align: inherit;">就像是：</font></font></p>

<pre><code>&lt;script type="text/javascript"&gt;<font></font>
    var offsetfrommouse = [10, -20];<font></font>
    var displayduration = 0;<font></font>
    var obj_selected = 0;<font></font>
    var trailimage = null ;  // GLOBAL VARIABLE<font></font>
    function makeObj(address) {<font></font>
        trailimage = [address, 50, 50];  //ASSIGN VALUE<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者简单地从函数内部的变量名中删除“ var”也会使其具有全局性，但是最好在外部将其声明一次以获取更清晰的代码。</font><font style="vertical-align: inherit;">这也将起作用：</font></font></p>

<pre><code>var offsetfrommouse = [10, -20];<font></font>
var displayduration = 0;<font></font>
var obj_selected = 0;<font></font>
<font></font>
function makeObj(address) {<font></font>
    trailimage = [address, 50, 50];  //GLOBAL VARIABLE , ASSIGN VALUE<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望这个例子能进一步解释：</font><a href="http://jsfiddle.net/qCrGE/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/qCrGE/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/qCrGE/</font></font></a></p>

<pre><code>var globalOne = 3;<font></font>
testOne();<font></font>
<font></font>
function testOne()<font></font>
{<font></font>
    globalOne += 2;<font></font>
    alert("globalOne is : " + globalOne );<font></font>
    globalOne += 1;<font></font>
}<font></font>
<font></font>
alert("outside globalOne is : " + globalOne);<font></font>
<font></font>
testTwo();<font></font>
<font></font>
function testTwo()<font></font>
{<font></font>
    globalTwo = 20;<font></font>
    alert("globalTwo is " + globalTwo);<font></font>
    globalTwo += 5;<font></font>
}<font></font>
<font></font>
alert("outside globalTwo is :" + globalTwo);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam梅小胖</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不，你不能。</font><font style="vertical-align: inherit;">只需在函数外部声明变量即可。</font><font style="vertical-align: inherit;">您不必在分配值的同时声明它：</font></font></p>

<pre><code>var trailimage;<font></font>
<font></font>
function makeObj(address) {<font></font>
  trailimage = [address, 50, 50];<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝猿Near</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UPDATE1：如果您阅读注释，则围绕此特定命名约定进行了很好的讨论。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UPDATE2：似乎自从我的答案发布以来，命名约定就变得更加正式了。</font><font style="vertical-align: inherit;">教书，写书等的人谈论</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">宣言和</font></font><code>function</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">宣言。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UPDATE3：以下是支持我的观点的其他Wikipedia帖子：</font><a href="http://en.wikipedia.org/wiki/Declaration_(computer_programming)#Declarations_and_Definitions" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font><a href="http://en.wikipedia.org/wiki/Declaration_(computer_programming)#Declarations_and_Definitions" rel="nofollow noreferrer"><font style="vertical-align: inherit;">//en.wikipedia.org/wiki/Declaration_(</font></a><font style="vertical-align: inherit;"> computer_programming)#Declarations_and_Definitions</font></font><a href="http://en.wikipedia.org/wiki/Declaration_(computer_programming)#Declarations_and_Definitions" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...并回答主要问题。</font><font style="vertical-align: inherit;">函数前的DECLARE变量。</font><font style="vertical-align: inherit;">这将起作用，并且符合在范围顶部声明变量的良好做法：)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva阿飞</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，正如其他人所说的，您可以</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在全局范围内（在所有函数之外）使用声明全局变量：</font></font></p>

<pre><code>&lt;script&gt;<font></font>
var yourGlobalVariable;<font></font>
function foo() {<font></font>
    // ...<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您可以在上分配一个属性</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;script&gt;<font></font>
function foo() {<font></font>
    window.yourGlobalVariable = ...;<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...因为在浏览器中，</font><font style="vertical-align: inherit;">用声明的</font></font><s><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有全局变量</font></font></s><font style="vertical-align: inherit;"></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都是</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象的</font><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（在最新规范ECMAScript 2015中，</font><font style="vertical-align: inherit;">全局范围内</font><font style="vertical-align: inherit;">的new </font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>class</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句创建的不是全局对象属性的全局变量；这是ES2015中的新概念。）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（也有</font></font><a href="http://blog.niftysnippets.org/2008/03/horror-of-implicit-globals.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">隐式全局变量的恐怖</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但不要故意这样做，并尽最大努力避免偶然地这样做，也许可以使用ES5 </font></font><code>"use strict"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">话虽如此：如果可能（我几乎可以肯定），我会避免使用全局变量。</font><font style="vertical-align: inherit;">正如我所提到的，它们最终是的属性</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经非常</font></font><a href="http://www.w3.org/TR/Window/"><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">拥挤</font></font></em></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了所有元素</font></font><code>id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（其中很多（仅包含一个</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">））被转储到其中（无论即将发布的规范是什么，IE都将其中</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存在的</font><font style="vertical-align: inherit;">任何内容都转储了IE）</font><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而是将代码包装在作用域函数中，并使用该作用域局部变量，并在其中封闭其他函数：</font></font></p>

<pre><code>&lt;script&gt;<font></font>
(function() { // Begin scoping function<font></font>
    var yourGlobalVariable; // Global to your code, invisible outside the scoping function<font></font>
    function foo() {<font></font>
        // ...<font></font>
    }<font></font>
})();         // End scoping function<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
