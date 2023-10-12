---
layout: question
title:  JavaScript等同于printf / String.Format
date:   2020-03-09T11:08:47.000Z
description: 我正在寻找一种等效于C / PHP printf()或C＃/ Java程序员String.Format()（IFormatProvider适用于.NET）...
img: 
author: 十三LEY
category: question
answer: 17
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在寻找一种等效于C / PHP </font></font><code>printf()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或C＃/ Java程序员</font></font><code>String.Format()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>IFormatProvider</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于.NET）的</font><font style="vertical-align: inherit;">JavaScript </font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的基本要求是现在使用数字的千位分隔符格式，但是可以处理很多组合（包括日期）的东西会很好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我意识到Microsoft的</font></font><a href="http://en.wikipedia.org/wiki/Ajax_%28programming%29" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ajax</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库提供了的版本</font></font><code>String.Format()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但我们不希望该框架的全部开销。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第216篇《JavaScript等同于printf / String.Format》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我没有看到该</font></font><code>String.format</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变体：</font></font></p>

<pre><code>String.format = function (string) {<font></font>
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);<font></font>
    return string.replace(/{(\d+)}/g, function (match, number) {<font></font>
        return typeof args[number] != "undefined" ? args[number] : match;<font></font>
    });<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以</font><font style="vertical-align: inherit;">为Typescript </font><font style="vertical-align: inherit;">使用简单的轻量级</font></font><a href="https://github.com/sevensc/typescript-string-operations#stringformat" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String.Format</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符串操作库。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String.Format（）：</font></font></strong></p>

<pre><code>var id = image.GetId()<font></font>
String.Format("image_{0}.jpg", id)<font></font>
output: "image_2db5da20-1c5d-4f1a-8fd4-b41e34c8c5b5.jpg";<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明符的字符串格式：</font></font></strong></p>

<pre><code>var value = String.Format("{0:L}", "APPLE"); //output "apple"<font></font>
<font></font>
value = String.Format("{0:U}", "apple"); // output "APPLE"<font></font>
<font></font>
value = String.Format("{0:d}", "2017-01-23 00:00"); //output "23.01.2017"<font></font>
<font></font>
<font></font>
value = String.Format("{0:s}", "21.03.2017 22:15:01") //output "2017-03-21T22:15:01"<font></font>
<font></font>
value = String.Format("{0:n}", 1000000);<font></font>
//output "1.000.000"<font></font>
<font></font>
value = String.Format("{0:00}", 1);<font></font>
//output "01"<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象的字符串格式，包括说明符：</font></font></strong></p>

<pre><code>var fruit = new Fruit();<font></font>
fruit.type = "apple";<font></font>
fruit.color = "RED";<font></font>
fruit.shippingDate = new Date(2018, 1, 1);<font></font>
fruit.amount = 10000;<font></font>
<font></font>
String.Format("the {type:U} is {color:L} shipped on {shippingDate:s} with an amount of {amount:n}", fruit);<font></font>
// output: the APPLE is red shipped on 2018-01-01 with an amount of 10.000<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋L</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于基本格式： </font></font></p>

<pre><code>var template = jQuery.validator.format("{0} is not a valid value");<font></font>
var result = template("abc");<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jnck</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在</font></font><a href="http://www.webtoolkit.info/javascript-sprintf.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.webtoolkit.info/javascript-sprintf.html上</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到JavaScript的“ sprintf” </font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱A</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="http://phpjs.org/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PHPJS项目</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">写JavaScript实现的许多PHP的功能。</font><font style="vertical-align: inherit;">由于PHP的</font></font><code>sprintf()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能与C基本相同</font></font><code>printf()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此</font></font><a href="http://phpjs.org/functions/sprintf" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们的JavaScript实现</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应能满足您的需求。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个非常不同的版本，我喜欢的版本（此版本使用{xxx}令牌而不是{0}编号的参数，它具有更多的自说明性，并且更适合本地化）：</font></font></p>

<pre><code>String.prototype.format = function(tokens) {<font></font>
  var formatted = this;<font></font>
  for (var token in tokens)<font></font>
    if (tokens.hasOwnProperty(token))<font></font>
      formatted = formatted.replace(RegExp("{" + token + "}", "g"), tokens[token]);<font></font>
  return formatted;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个变化是：</font></font></p>

<pre><code>  var formatted = l(this);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先调用l（）本地化函数。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用这个：</font></font></p>

<pre><code>String.prototype.format = function() {<font></font>
    var newStr = this, i = 0;<font></font>
    while (/%s/.test(newStr))<font></font>
        newStr = newStr.replace("%s", arguments[i++])<font></font>
<font></font>
    return newStr;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我称之为：</font></font></p>

<pre><code>"&lt;h1&gt;%s&lt;/h1&gt;&lt;p&gt;%s&lt;/p&gt;".format("Header", "Just a test!");
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅小哥</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">十分优雅：</font></font></p>

<pre><code>String.prototype.format = function (){<font></font>
    var args = arguments;<font></font>
    return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (curlyBrack, index) {<font></font>
        return ((curlyBrack == "{{") ? "{" : ((curlyBrack == "}}") ? "}" : args[index]));<font></font>
    });<font></font>
};<font></font>
<font></font>
// Usage:<font></font>
"{0}{1}".format("{1}", "{0}")<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功劳归于 </font></font><del><a href="http://technoblogia.net/2011/11/08/%D7%98%D7%99%D7%A4-%D7%A4%D7%95%D7%A0%D7%A7%D7%A6%D7%99%D7%99%D7%AA-%D7%A2%D7%96%D7%A8-%D7%91-javascript-%D7%9C%D7%A2%D7%99%D7%A6%D7%95%D7%91-%D7%9E%D7%97%D7%A8%D7%95%D7%96%D7%95%D7%AA/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（链接断开）</font></font></a></del> <a href="https://gist.github.com/0i0/1519811"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://gist.github.com/0i0/1519811</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要处理千位分隔符，则应真正使用JavaScript </font></font><a href="http://www.hunlock.com/blogs/The_Complete_Javascript_Number_Reference" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Number</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类中的</font><font style="vertical-align: inherit;">toLocaleString（），</font><font style="vertical-align: inherit;">因为它将格式化用户区域的字符串。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript </font></font><a href="http://www.hunlock.com/blogs/Javascript_Dates-The_Complete_Reference" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Date</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类可以格式化本地化的日期和时间。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Jim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将添加自询问以来发现的发现：</font></font></p>

<ul>
<li><a href="http://locutus.io/php/strings/number_format/index.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">number_format（用于千位分隔符/货币格式）</font></font></a></li>
<li><a href="http://locutus.io/php/strings/sprintf/index.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sprintf（与上述作者相同）</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可悲的是，似乎sprintf无法处理.NET的字符串格式之类的千位分隔符格式。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪小小小哥</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><a href="http://www.masterdata.se/r/string_format_for_javascript/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为JavaScript</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用了一个名为</font><a href="http://www.masterdata.se/r/string_format_for_javascript/" rel="noreferrer"><font style="vertical-align: inherit;">String.format</font></a><font style="vertical-align: inherit;">的小型库</font><a href="http://www.masterdata.se/r/string_format_for_javascript/" rel="noreferrer"><font style="vertical-align: inherit;">，</font></a><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">库</font><font style="vertical-align: inherit;">支持大多数格式字符串功能（包括数字和日期的格式），并使用.NET语法。</font><font style="vertical-align: inherit;">该脚本本身小于4 kB，因此不会产生太多开销。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+1 Zippo，除了函数体必须如下所示，否则它将在每次迭代后附加当前字符串：</font></font></p>

<pre><code>String.prototype.format = function() {<font></font>
    var formatted = this;<font></font>
    for (var arg in arguments) {<font></font>
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);<font></font>
    }<font></font>
    return formatted;<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><a href="http://en.wikipedia.org/wiki/Node.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户，</font></font><a href="https://nodejs.org/api/util.html#util_util_format_format_args" rel="noreferrer"><code>util.format</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它具有类似于printf的功能：</font></font></p>

<pre><code>util.format("%s world", "Hello")
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用以下简单功能：</font></font></p>

<pre><code>String.prototype.format = function() {<font></font>
    var formatted = this;<font></font>
    for( var arg in arguments ) {<font></font>
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);<font></font>
    }<font></font>
    return formatted;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这与string.format非常相似：</font></font></p>

<pre><code>"{0} is dead, but {1} is alive!".format("ASP", "ASP.NET")
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中的数字格式</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我来到了这个问题页面，希望找到如何</font><font style="vertical-align: inherit;">在JavaScript中</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">格式化数字</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而不引入另一个库。</font><font style="vertical-align: inherit;">这是我发现的：</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">四舍五入浮点数</font></font></h2>

<p><font style="vertical-align: inherit;"></font><code>sprintf("%.2f", num)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中</font><font style="vertical-align: inherit;">的等效项</font><font style="vertical-align: inherit;">似乎是</font></font><code>num.toFixed(2)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，格式</font></font><code>num</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为2位小数，并四舍五入（但请参阅</font></font><code>Math.round</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面的</font><font style="vertical-align: inherit;">@ ars265注释</font><font style="vertical-align: inherit;">）。</font></font></p>

<pre><code>(12.345).toFixed(2); // returns "12.35" (rounding!)<font></font>
(12.3).toFixed(2); // returns "12.30" (zero padding)<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指数形式</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相当于</font></font><code>sprintf("%.2e", num)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IS </font></font><code>num.toExponential(2)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。  </font></font></p>

<pre><code>(33333).toExponential(2); // "3.33e+4"
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">十六进制和其他基础</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要在基数B中打印数字，请尝试</font></font><code>num.toString(B)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">JavaScript支持从2到36的自动转换（此外，某些浏览器</font></font><a href="https://developer.mozilla.org/en-US/docs/DOM/window.btoa" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对base64编码的支持有限</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<pre><code>(3735928559).toString(16); // to base 16: "deadbeef"<font></font>
parseInt("deadbeef", 16); // from base 16: 3735928559<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考页</font></font></h2>

<p><a href="http://www.mredkj.com/javascript/numberFormat.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JS数字格式快速教程</font></font></a></p>

<p><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number/toFixed" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MoFi的</font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number/toFixed" rel="noreferrer"><font style="vertical-align: inherit;">toFixed（）参考页</font></a><font style="vertical-align: inherit;">（带有toPrecision（），toExponential（），toLocaleString（）等的链接）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从ES6开始，您可以使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模板字符串</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>let soMany = 10;<font></font>
console.log(`This is ${soMany} times easier!`);<font></font>
// "This is 10 times easier!<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，模板字符串</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用反引号</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> `代替，而不是（单引号）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解更多信息：</font></font></p>

<p><a href="https://developers.google.com/web/updates/2015/01/ES6-Template-Strings"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developers.google.com/web/updates/2015/01/ES6-Template-Strings</font></font></a></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings</font></font></a></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：检查mozilla站点以找到支持的浏览器列表。</font></font></em></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从ES6开始，您可以使用模板字符串：</font></font></p>

<pre><code>let soMany = 10;<font></font>
console.log(`This is ${soMany} times easier!`);<font></font>
// "This is 10 times easier!<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">详细信息，</font><font style="vertical-align: inherit;">请参见</font><font style="vertical-align: inherit;">下面的</font><font style="vertical-align: inherit;">Kim </font></font><a href="https://stackoverflow.com/a/32202320/2430448"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除此以外：</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font><a href="https://github.com/alexei/sprintf.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sprintf（）for JavaScript</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您真的想自己做一个简单的格式化方法，请不要先后进行替换，而要同时进行。</font></font></p>

<p>Because most of the other proposals that are mentioned fail when a replace string of previous replacement does also contain a format sequence like this:</p>

<pre><code>"{0}{1}".format("{1}", "{0}")
</code></pre>

<p>Normally you would expect the output to be <code>{1}{0}</code> but the actual output is <code>{1}{1}</code>. So do a simultaneously replacement instead like in <a href="https://stackoverflow.com/questions/610406/javascript-printf-string-format/4673436#4673436">fearphage’s suggestion</a>.</p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
