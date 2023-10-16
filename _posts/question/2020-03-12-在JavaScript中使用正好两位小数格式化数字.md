---
layout: question
title:  在JavaScript中使用正好两位小数格式化数字
date:   2020-03-12T06:28:10.000Z
description: 我有这行代码将我的数字四舍五入到小数点后两位。但是我得到这样的数字：10.8、2.4等。这些不是我对小数点后两位的想法，因此我如何改善以下内容？Mat...
img: 
author: 逆天樱
category: question
answer: 12
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有这行代码将我的数字四舍五入到小数点后两位。</font><font style="vertical-align: inherit;">但是我得到这样的数字：10.8、2.4等。这些不是我对小数点后两位的想法，因此我如何改善以下内容？</font></font></p>

<pre><code>Math.round(price*Math.pow(10,2))/Math.pow(10,2);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要数字10.80、2.40等。使用jQuery对我来说很好。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第987篇《在JavaScript中使用正好两位小数格式化数字》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Simple as this.</p>

<pre><code>var rounded_value=Math.round(value * 100) / 100;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>I found a very simple way that solved this problem for me and can be used or adapted:</p>

<pre><code>td[row].innerHTML = price.toPrecision(price.toFixed(decimals).length
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>(Math.round((10.2)*100)/100).toFixed(2)
</code></pre>

<p>That should yield: <code>10.20</code></p>

<pre><code>(Math.round((.05)*100)/100).toFixed(2)
</code></pre>

<p>That should yield: <code>0.05</code></p>

<pre><code>(Math.round((4.04)*100)/100).toFixed(2)
</code></pre>

<p>That should yield: <code>4.04</code></p>

<p>etc.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门老丝Pro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>Number(((Math.random() * 100) + 1).toFixed(2))
</code></pre>

<p>this will return a random number from 1 to 100 rounded to 2 decimal places.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi梅Harry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Put <strong>the following</strong> in some global scope:</p>

<pre><code>Number.prototype.getDecimals = function ( decDigCount ) {<font></font>
   return this.toFixed(decDigCount);<font></font>
}<font></font>
</code></pre>

<p>and <strong>then try</strong>:</p>

<pre><code>var a = 56.23232323;<font></font>
a.getDecimals(2); // will return 56.23<font></font>
</code></pre>

<h2>Update</h2>

<p>Note that <code>toFixed()</code> can only work for the number of decimals between <code>0-20</code> i.e. <code>a.getDecimals(25)</code> may generate a javascript error, so to accomodate that you may add some additional check i.e.</p>

<pre><code>Number.prototype.getDecimals = function ( decDigCount ) {<font></font>
   return ( decDigCount &gt; 20 ) ? this : this.toFixed(decDigCount);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">四舍五入</font></font></strong></p>

<pre><code>function round_down(value, decPlaces) {<font></font>
    return Math.floor(value * Math.pow(10, decPlaces)) / Math.pow(10, decPlaces);<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">围捕</font></font></strong></p>

<pre><code>function round_up(value, decPlaces) {<font></font>
    return Math.ceil(value * Math.pow(10, decPlaces)) / Math.pow(10, decPlaces);<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">舍入最近</font></font></strong></p>

<pre><code>function round_nearest(value, decPlaces) {<font></font>
    return Math.round(value * Math.pow(10, decPlaces)) / Math.pow(10, decPlaces);<font></font>
}<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">合并</font></font><a href="https://stackoverflow.com/a/7641824/1889449"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/7641824/1889449</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和
   </font></font><a href="https://www.kirupa.com/html5/rounding_numbers_in_javascript.htm" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.kirupa.com/html5/rounding_numbers_in_javascript.htm</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢他们。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小哥斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">四舍五入您的十进制值，然后将其</font></font><code>toFixed(x)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用作您的期望数字。</font></font></p>

<pre><code>function parseDecimalRoundAndFixed(num,dec){<font></font>
  var d =  Math.pow(10,dec);<font></font>
  return (Math.round(num * d) / d).toFixed(dec);<font></font>
}<font></font>
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">呼叫</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">parseDecimalRoundAndFixed（10.800243929,4）=&gt; 10.80 parseDecimalRoundAndFixed（10.807243929,2）=&gt; 10.81</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙小胖</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个简单的</font></font></p>

<pre><code>function roundFloat(num,dec){<font></font>
    var d = 1;<font></font>
    for (var i=0; i&lt;dec; i++){<font></font>
        d += "0";<font></font>
    }<font></font>
    return Math.round(num * d) / d;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用方式 </font></font><code>alert(roundFloat(1.79209243929,4));</code></p>

<p><a href="http://jsfiddle.net/ow3n/YqQgC/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">杰斯菲德尔</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Tom猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我没有找到解决此问题的准确方法，因此我创建了自己的解决方案：</font></font></p>

<pre><code>function inprecise_round(value, decPlaces) {<font></font>
  return Math.round(value*Math.pow(10,decPlaces))/Math.pow(10,decPlaces);<font></font>
}<font></font>
<font></font>
function precise_round(value, decPlaces){<font></font>
    var val = value * Math.pow(10, decPlaces);<font></font>
    var fraction = (Math.round((val-parseInt(val))*10)/10);<font></font>
<font></font>
    //this line is for consistency with .NET Decimal.Round behavior<font></font>
    // -342.055 =&gt; -342.06<font></font>
    if(fraction == -0.5) fraction = -0.6;<font></font>
<font></font>
    val = Math.round(parseInt(val) + fraction) / Math.pow(10, decPlaces);<font></font>
    return val;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例子：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function inprecise_round(value, decPlaces) {<font></font>
  return Math.round(value * Math.pow(10, decPlaces)) / Math.pow(10, decPlaces);<font></font>
}<font></font>
<font></font>
function precise_round(value, decPlaces) {<font></font>
  var val = value * Math.pow(10, decPlaces);<font></font>
  var fraction = (Math.round((val - parseInt(val)) * 10) / 10);<font></font>
<font></font>
  //this line is for consistency with .NET Decimal.Round behavior<font></font>
  // -342.055 =&gt; -342.06<font></font>
  if (fraction == -0.5) fraction = -0.6;<font></font>
<font></font>
  val = Math.round(parseInt(val) + fraction) / Math.pow(10, decPlaces);<font></font>
  return val;<font></font>
}<font></font>
<font></font>
// This may produce different results depending on the browser environment<font></font>
console.log("342.055.toFixed(2)         :", 342.055.toFixed(2)); // 342.06 on Chrome &amp; IE10<font></font>
<font></font>
console.log("inprecise_round(342.055, 2):", inprecise_round(342.055, 2)); // 342.05<font></font>
console.log("precise_round(342.055, 2)  :", precise_round(342.055, 2));   // 342.06<font></font>
console.log("precise_round(-342.055, 2) :", precise_round(-342.055, 2));  // -342.06<font></font>
<font></font>
console.log("inprecise_round(0.565, 2)  :", inprecise_round(0.565, 2));   // 0.56<font></font>
console.log("precise_round(0.565, 2)    :", precise_round(0.565, 2));     // 0.57</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Sam乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种获得100％确定带有2个小数的数字的方法： </font></font></p>

<pre><code>(Math.round(num*100)/100).toFixed(2)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果这导致舍入错误，则可以使用James在其评论中解释的以下内容：</font></font></p>

<pre><code>(Math.round((num * 1000)/10)/100).toFixed(2)
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">toFixed（n）提供小数点后的n个长度；</font><font style="vertical-align: inherit;">toPrecision（x）提供x的总长度。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在下面使用此方法</font></font></p>

<pre><code>// Example: toPrecision(4) when the number has 7 digits (3 before, 4 after)<font></font>
    // It will round to the tenths place<font></font>
    num = 500.2349;<font></font>
    result = num.toPrecision(4); // result will equal 500.2<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且，如果您希望该号码固定使用</font></font></p>

<pre><code>result = num.toFixed(2);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通常将其添加到我的个人库中，在提出一些建议并也使用@TIMINeutron解决方案之后，使其适用于十进制长度，这是最合适的： </font></font></p>

<pre><code>function precise_round(num, decimals) {<font></font>
   var t = Math.pow(10, decimals);   <font></font>
   return (Math.round((num * t) + (decimals&gt;0?1:0)*(Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将适用于所报告的异常。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
