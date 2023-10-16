---
layout: question
title:  使用JavaScript计算文字宽度
date:   2020-03-13T10:10:27.000Z
description: 我想使用JavaScript计算字符串的宽度。是否可以不必使用等宽字体？如果不是内置的，我唯一的想法就是为每个字符创建一个宽度表，但这是非常不合理的，...
img: 
author: Harry小胖
category: question
answer: 13
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想使用JavaScript计算字符串的宽度。</font><font style="vertical-align: inherit;">是否可以不必使用等宽字体？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不是内置的，我唯一的想法就是为每个字符创建一个宽度表，但这是非常不合理的，特别是支持</font></font><a href="http://en.wikipedia.org/wiki/Unicode" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Unicode</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和不同类型的大小（以及与此相关的所有浏览器）。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1509篇《使用JavaScript计算文字宽度》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐JinJin</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴的工作示例：</font><a href="http://jsfiddle.net/tdpLdqpo/1/" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/tdpLdqpo/1/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/tdpLdqpo/1/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></p>

<pre><code>&lt;h1 id="test1"&gt;<font></font>
    How wide is this text?<font></font>
&lt;/h1&gt;<font></font>
&lt;div id="result1"&gt;&lt;/div&gt;<font></font>
&lt;hr/&gt;<font></font>
&lt;p id="test2"&gt;<font></font>
    How wide is this text?<font></font>
&lt;/p&gt;<font></font>
&lt;div id="result2"&gt;&lt;/div&gt;<font></font>
&lt;hr/&gt;<font></font>
&lt;p id="test3"&gt;<font></font>
    How wide is this text?&lt;br/&gt;&lt;br/&gt;<font></font>
    f sdfj f sdlfj lfj lsdk jflsjd fljsd flj sflj sldfj lsdfjlsdjkf sfjoifoewj flsdjfl jofjlgjdlsfjsdofjisdojfsdmfnnfoisjfoi  ojfo dsjfo jdsofjsodnfo sjfoj ifjjfoewj fofew jfos fojo foew jofj s f j<font></font>
&lt;/p&gt;<font></font>
&lt;div id="result3"&gt;&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript代码：</font></font></p>

<pre><code>function getTextWidth(text, font) {<font></font>
    var canvas = getTextWidth.canvas ||<font></font>
        (getTextWidth.canvas = document.createElement("canvas"));<font></font>
    var context = canvas.getContext("2d");<font></font>
    context.font = font;<font></font>
    var metrics = context.measureText(text);<font></font>
    return metrics.width;<font></font>
};<font></font>
<font></font>
$("#result1")<font></font>
.text("answer: " +<font></font>
    getTextWidth(<font></font>
             $("#test1").text(),<font></font>
             $("#test1").css("font")) + " px");<font></font>
<font></font>
$("#result2")<font></font>
    .text("answer: " +<font></font>
        getTextWidth(<font></font>
             $("#test2").text(),<font></font>
             $("#test2").css("font")) + " px");<font></font>
<font></font>
$("#result3")<font></font>
    .text("answer: " +<font></font>
        getTextWidth(<font></font>
             $("#test3").text(),<font></font>
             $("#test3").css("font")) + " px");<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易达蒙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用createRange做到这一点，它比文本克隆技术更准确：</font></font></p>

<pre><code>function getNodeTextWidth(nodeWithText) {<font></font>
    var textNode = $(nodeWithText).contents().filter(function () {<font></font>
        return this.nodeType == Node.TEXT_NODE;<font></font>
    })[0];<font></font>
    var range = document.createRange();<font></font>
    range.selectNode(textNode);<font></font>
    return range.getBoundingClientRect().width;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY老丝</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果其他任何人都在这里寻找一种测量字符串宽度的</font><font style="vertical-align: inherit;">方法</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种知道适合特定宽度的最大字体大小的方法，则此函数基于@Domi的二进制搜索解决方案：</font></font></p>

<pre><code>/**<font></font>
 * Find the largest font size (in pixels) that allows the string to fit in the given width.<font></font>
 * <font></font>
 * @param {String} text The text to be rendered.<font></font>
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold ?px verdana") -- note the use of ? in place of the font size.<font></font>
 * @param {width} the width in pixels the string must fit in<font></font>
 * @param {minFontPx} the smallest acceptable font size in pixels<font></font>
 * @param {maxFontPx} the largest acceptable font size in pixels<font></font>
**/<font></font>
function GetTextSizeForWidth( text, font, width, minFontPx, maxFontPx )<font></font>
{<font></font>
    for ( ; ; )<font></font>
    {<font></font>
        var s = font.replace( "?", maxFontPx );<font></font>
        var w = GetTextWidth( text, s );<font></font>
        if ( w &lt;= width )<font></font>
        {<font></font>
            return maxFontPx;<font></font>
        }<font></font>
<font></font>
        var g = ( minFontPx + maxFontPx ) / 2;<font></font>
<font></font>
        if ( Math.round( g ) == Math.round( minFontPx ) || Math.round( g ) == Math.round( maxFontPx ) )<font></font>
        {<font></font>
            return g;<font></font>
        }<font></font>
<font></font>
        s = font.replace( "?", g );<font></font>
        w = GetTextWidth( text, s );<font></font>
        if ( w &gt;= width )<font></font>
        {<font></font>
            maxFontPx = g;<font></font>
        }<font></font>
        else<font></font>
        {<font></font>
            minFontPx = g;<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小神奇</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">试试这个代码：</font></font></p>

<pre><code>function GetTextRectToPixels(obj)<font></font>
{<font></font>
var tmpRect = obj.getBoundingClientRect();<font></font>
obj.style.width = "auto"; <font></font>
obj.style.height = "auto"; <font></font>
var Ret = obj.getBoundingClientRect(); <font></font>
obj.style.width = (tmpRect.right - tmpRect.left).toString() + "px";<font></font>
obj.style.height = (tmpRect.bottom - tmpRect.top).toString() + "px"; <font></font>
return Ret;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一GO</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文本的宽度和高度可以通过</font></font><code>clientWidth</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">获得</font></font><code>clientHeight</code></p>

<pre><code>var element = document.getElementById ("mytext");<font></font>
<font></font>
var width = element.clientWidth;<font></font>
var height = element.clientHeight;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保样式位置属性设置为绝对</font></font></p>

<pre><code>element.style.position = "absolute";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不需要位于a之内</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以位于a </font></font><code>p</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或a之内</font></font><code>span</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙老丝</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我喜欢只做一个静态字符宽度图的“唯一想法”！</font><font style="vertical-align: inherit;">对于我的目的，它实际上工作得很好。</font><font style="vertical-align: inherit;">有时，出于性能原因，或者由于您无法轻松访问DOM，您可能只想将快速，简单易用的独立计算器校准为单个字体。</font><font style="vertical-align: inherit;">因此，这是经过Helvetica校准的；</font><font style="vertical-align: inherit;">传递字符串和（可选）字体大小：</font></font></p>

<pre><code>function measureText(str, fontSize = 10) {<font></font>
  const widths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2796875,0.2765625,0.3546875,0.5546875,0.5546875,0.8890625,0.665625,0.190625,0.3328125,0.3328125,0.3890625,0.5828125,0.2765625,0.3328125,0.2765625,0.3015625,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.2765625,0.2765625,0.584375,0.5828125,0.584375,0.5546875,1.0140625,0.665625,0.665625,0.721875,0.721875,0.665625,0.609375,0.7765625,0.721875,0.2765625,0.5,0.665625,0.5546875,0.8328125,0.721875,0.7765625,0.665625,0.7765625,0.721875,0.665625,0.609375,0.721875,0.665625,0.94375,0.665625,0.665625,0.609375,0.2765625,0.3546875,0.2765625,0.4765625,0.5546875,0.3328125,0.5546875,0.5546875,0.5,0.5546875,0.5546875,0.2765625,0.5546875,0.5546875,0.221875,0.240625,0.5,0.221875,0.8328125,0.5546875,0.5546875,0.5546875,0.5546875,0.3328125,0.5,0.2765625,0.5546875,0.5,0.721875,0.5,0.5,0.5,0.3546875,0.259375,0.353125,0.5890625]<font></font>
  const avg = 0.5279276315789471<font></font>
  return str<font></font>
    .split('')<font></font>
    .map(c =&gt; c.charCodeAt(0) &lt; widths.length ? widths[c.charCodeAt(0)] : avg)<font></font>
    .reduce((cur, acc) =&gt; acc + cur) * fontSize<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那个丑陋的巨大数组是由字符代码索引的ASCII字符宽度。</font><font style="vertical-align: inherit;">因此，这仅支持ASCII（否则假定平均字符宽度）。</font><font style="vertical-align: inherit;">幸运的是，宽度基本上与字体大小成线性比例，因此在任何字体大小下都可以很好地工作。</font><font style="vertical-align: inherit;">显然，它对字距调整或连字等均缺乏任何了解。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了“校准”，我只是在svg上将每个字符渲染到charCode 126（强大的波浪号），并得到了边界框并将其保存到此数组中；</font></font><a href="https://bl.ocks.org/tophtucker/62f93a4658387bb61e4510c37e2e97cf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多代码，解释和演示在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Tony</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面的代码片段“计算” span-tag的宽度，如果它太长，则在其后附加“ ...”，并减小文本长度，直到适合其父级为止（或直到​​尝试了超过一千次）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的CSS</font></font></p>

<pre><code>div.places {<font></font>
  width : 100px;<font></font>
}<font></font>
div.places span {<font></font>
  white-space:nowrap;<font></font>
  overflow:hidden;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的HTML</font></font></p>

<pre><code>&lt;div class="places"&gt;<font></font>
  &lt;span&gt;This is my house&lt;/span&gt;<font></font>
&lt;/div&gt;<font></font>
&lt;div class="places"&gt;<font></font>
  &lt;span&gt;And my house are your house&lt;/span&gt;<font></font>
&lt;/div&gt;<font></font>
&lt;div class="places"&gt;<font></font>
  &lt;span&gt;This placename is most certainly too wide to fit&lt;/span&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript（使用jQuery）</font></font></p>

<pre><code>// loops elements classed "places" and checks if their child "span" is too long to fit<font></font>
$(".places").each(function (index, item) {<font></font>
    var obj = $(item).find("span");<font></font>
    if (obj.length) {<font></font>
        var placename = $(obj).text();<font></font>
        if ($(obj).width() &gt; $(item).width() &amp;&amp; placename.trim().length &gt; 0) {<font></font>
            var limit = 0;<font></font>
            do {<font></font>
                limit++;<font></font>
                                    placename = placename.substring(0, placename.length - 1);<font></font>
                                    $(obj).text(placename + "...");<font></font>
            } while ($(obj).width() &gt; $(item).width() &amp;&amp; limit &lt; 1000)<font></font>
        }<font></font>
    }<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一村村</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;span id="text"&gt;Text&lt;/span&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
var textWidth = document.getElementById("text").offsetWidth;<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只要&lt;span&gt;标记没有应用其他样式，它就应该起作用。</font><font style="vertical-align: inherit;">offsetWidth将包括任何边框的宽度，水平填充，垂直滚动条的宽度等。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯斯丁</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更好的方法是在显示元素之前检测文本是否适合。</font><font style="vertical-align: inherit;">因此，您可以使用此功能，而无需在屏幕上显示该元素。</font></font></p>

<pre><code>function textWidth(text, fontProp) {<font></font>
    var tag = document.createElement("div");<font></font>
    tag.style.position = "absolute";<font></font>
    tag.style.left = "-999em";<font></font>
    tag.style.whiteSpace = "nowrap";<font></font>
    tag.style.font = fontProp;<font></font>
    tag.innerHTML = text;<font></font>
<font></font>
    document.body.appendChild(tag);<font></font>
<font></font>
    var result = tag.clientWidth;<font></font>
<font></font>
    document.body.removeChild(tag);<font></font>
<font></font>
    return result;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法：</font></font></p>

<pre><code>if ( textWidth("Text", "bold 13px Verdana") &gt; elementWidth) {<font></font>
    ...<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥猴子</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="https://www.sencha.com/products/extjs/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ExtJS的JavaScript库</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个名为Ext.util.TextMetrics说，“为文本块精确测量像素，让您可以准确确定的高和宽，以像素为单位，文本的给定块将是”一个伟大的阶级。</font><font style="vertical-align: inherit;">您可以直接使用它，也可以查看其源代码以查看其完成方式。</font></font></p>

<p><a href="http://docs.sencha.com/extjs/6.5.3/modern/Ext.util.TextMetrics.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://docs.sencha.com/extjs/6.5.3/modern/Ext.util.TextMetrics.html</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子神乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用...</font></font></p>

<pre><code>// Handy JavaScript to measure the size taken to render the supplied text;<font></font>
// you can supply additional style information too if you have it.<font></font>
<font></font>
function measureText(pText, pFontSize, pStyle) {<font></font>
    var lDiv = document.createElement('div');<font></font>
<font></font>
    document.body.appendChild(lDiv);<font></font>
<font></font>
    if (pStyle != null) {<font></font>
        lDiv.style = pStyle;<font></font>
    }<font></font>
    lDiv.style.fontSize = "" + pFontSize + "px";<font></font>
    lDiv.style.position = "absolute";<font></font>
    lDiv.style.left = -1000;<font></font>
    lDiv.style.top = -1000;<font></font>
<font></font>
    lDiv.innerHTML = pText;<font></font>
<font></font>
    var lResult = {<font></font>
        width: lDiv.clientWidth,<font></font>
        height: lDiv.clientHeight<font></font>
    };<font></font>
<font></font>
    document.body.removeChild(lDiv);<font></font>
    lDiv = null;<font></font>
<font></font>
    return lResult;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Mandy</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML 5中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以仅使用</font></font><a href="http://www.w3schools.com/tags/canvas_measuretext.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Canvas.measureText方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="http://www.html5canvastutorials.com/tutorials/html5-canvas-text-metrics/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进一步说明</font><font style="vertical-align: inherit;">）。</font></font></p>

<p><a href="http://jsfiddle.net/eNzjZ/34/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">试试这个小提琴</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>/**<font></font>
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.<font></font>
 * <font></font>
 * @param {String} text The text to be rendered.<font></font>
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").<font></font>
 * <font></font>
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393<font></font>
 */<font></font>
function getTextWidth(text, font) {<font></font>
    // re-use canvas object for better performance<font></font>
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));<font></font>
    var context = canvas.getContext("2d");<font></font>
    context.font = font;<font></font>
    var metrics = context.measureText(text);<font></font>
    return metrics.width;<font></font>
}<font></font>
<font></font>
console.log(getTextWidth("hello there!", "bold 12pt arial"));  // close to 86<font></font>
</code></pre>

<p><a href="http://jsfiddle.net/eNzjZ/70/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个小提琴</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将这种Canvas方法与</font></font><a href="https://stackoverflow.com/a/5047712/2228771"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bob Monteverde基于DOM的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法的变体</font><font style="vertical-align: inherit;">进行了比较，因此您可以分析和比较结果的准确性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种方法有几个优点，包括：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比其他（基于DOM）方法更简洁，更安全，因为它不会更改全局状态（例如DOM）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font></font><a href="http://diveintohtml5.info/canvas.html#text" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修改更多的画布文本属性</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（例如</font></font><code>textAlign</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和）</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">可以进行进一步的自定义</font></font><code>textBaseline</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：将文本添加到DOM时，请记住还要考虑</font></font><a href="http://api.jquery.com/outerwidth/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">padding，margin和border</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p>NOTE 2: On some browsers, this method yields sub-pixel accuracy (result is a floating point number), on others it does not (result is only an int). You might want to run <code>Math.floor</code> (or <code>Math.ceil</code>) on the result, to avoid inconsistencies. Since the DOM-based method is never sub-pixel accurate, this method has even higher precision than the other methods here.</p>

<p>According to <a href="http://jsperf.com/measure-text-width/4" rel="noreferrer">this jsperf</a> (thanks to the contributors in comments), the <em>Canvas method</em> and the <em>DOM-based method</em> are about equally fast, if caching is added to the <em>DOM-based method</em> and you are not using Firefox. In Firefox, for some reason, this <em>Canvas method</em> is much much faster than the <em>DOM-based method</em> (as of September 2014).</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝村村Stafan</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建具有以下样式的DIV。</font><font style="vertical-align: inherit;">在JavaScript中，设置要测量的字体大小和属性，将字符串放入DIV中，然后读取DIV的当前宽度和高度。</font><font style="vertical-align: inherit;">它将拉伸以适合内容，并且大小将在字符串呈现大小的几个像素之内。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var fontSize = 12;<font></font>
var test = document.getElementById("Test");<font></font>
test.style.fontSize = fontSize;<font></font>
var height = (test.clientHeight + 1) + "px";<font></font>
var width = (test.clientWidth + 1) + "px"<font></font>
<font></font>
console.log(height, width);</code></pre>
<pre class="snippet-code-css lang-css prettyprint-override"><code>#Test<font></font>
{<font></font>
    position: absolute;<font></font>
    visibility: hidden;<font></font>
    height: auto;<font></font>
    width: auto;<font></font>
    white-space: nowrap; /* Thanks to Herb Caudill comment */<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div id="Test"&gt;<font></font>
    abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
