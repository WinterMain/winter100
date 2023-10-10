---
layout: question
title:  JavaScript中的（内置）方式来检查字符串是否为有效数字
date:   2020-03-09T15:09:39.000Z
description: 我希望与旧的VB6 IsNumeric()函数在同一概念空间中存在某些东西吗？...
img: 
author: JimDavaid卡卡西
category: question
answer: 13
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望与旧的VB6 </font></font><code>IsNumeric()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数</font><font style="vertical-align: inherit;">在同一概念空间中存在某些东西</font><font style="vertical-align: inherit;">吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一番长小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>You could make use of types, like with the <a href="https://flow.org/en/docs/types/primitives/" rel="nofollow noreferrer">flow librar</a>y, to get static, compile time checking.  Of course not terribly useful for user input.</p>

<pre><code>// @flow<font></font>
<font></font>
function acceptsNumber(value: number) {<font></font>
  // ...<font></font>
}<font></font>
<font></font>
acceptsNumber(42);       // Works!<font></font>
acceptsNumber(3.14);     // Works!<font></font>
acceptsNumber(NaN);      // Works!<font></font>
acceptsNumber(Infinity); // Works!<font></font>
acceptsNumber("foo");    // Error!<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil小哥伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Just use <code>isNaN()</code>, this will convert the string to a <strong>number</strong> and if get a valid <strong>number</strong>, will return <code>false</code>...</p>

<pre><code>isNaN("Alireza"); //return true<font></font>
isNaN("123"); //return false<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>My solution:</p>

<pre><code>// returns true for positive ints; <font></font>
// no scientific notation, hexadecimals or floating point dots<font></font>
<font></font>
var isPositiveInt = function(str) { <font></font>
   var result = true, chr;<font></font>
   for (var i = 0, n = str.length; i &lt; n; i++) {<font></font>
       chr = str.charAt(i);<font></font>
       if ((chr &lt; "0" || chr &gt; "9") &amp;&amp; chr != ",") { //not digit or thousands separator<font></font>
         result = false;<font></font>
         break;<font></font>
       };<font></font>
       if (i == 0 &amp;&amp; (chr == "0" || chr == ",")) {  //should not start with 0 or ,<font></font>
         result = false;<font></font>
         break;<font></font>
       };<font></font>
   };<font></font>
   return result;<font></font>
 };<font></font>
</code></pre>

<p>You can add additional conditions inside the loop, to fit you particular needs.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>PFB the working solution:</p>

<pre><code> function(check){ <font></font>
    check = check + "";<font></font>
    var isNumber =   check.trim().length&gt;0? !isNaN(check):false;<font></font>
    return isNumber;<font></font>
    }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁JinJinHarry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于TypeScript无效，因为：</font></font></p>

<p><code>declare function isNaN(number: number): boolean;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于TypeScript，您可以使用：</font></font></p>

<p><code>/^\d+$/.test(key)</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，我正在使用我制作的这个...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，它一直在工作：</font></font></p>

<pre><code>function checkNumber(value) {<font></font>
    if ( value % 1 == 0 )<font></font>
    return true;<font></font>
    else<font></font>
    return false;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您发现任何问题，请告诉我。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony达蒙Mandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么jQuery的实现不够好？</font></font></p>

<pre><code>function isNumeric(a) {<font></font>
    var b = a &amp;&amp; a.toString();<font></font>
    return !$.isArray(a) &amp;&amp; b - parseFloat(b) + 1 &gt;= 0;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迈克尔提出了类似的建议（尽管我在这里偷了“ user1691651-约翰”的变更版）：</font></font></p>

<pre><code>function isNumeric(num){<font></font>
    num = "" + num; //coerce num to be a string<font></font>
    return !isNaN(num) &amp;&amp; !isNaN(parseFloat(num));<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是最有可能性能较差但结果稳定的解决方案。</font><font style="vertical-align: inherit;">这是jQuery 1.12.4实现和Michael的回答的矛盾之处，需要额外检查前导/后缀空格（因为Michael的版本对于前导/后缀空格的数字返回true）：</font></font></p>

<pre><code>function isNumeric(a) {<font></font>
    var str = a + "";<font></font>
    var b = a &amp;&amp; a.toString();<font></font>
    return !$.isArray(a) &amp;&amp; b - parseFloat(b) + 1 &gt;= 0 &amp;&amp;<font></font>
           !/^\s+|\s+$/g.test(str) &amp;&amp;<font></font>
           !isNaN(str) &amp;&amp; !isNaN(parseFloat(str));<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不过，后一个版本具有两个新变量。</font><font style="vertical-align: inherit;">通过执行以下操作，可以绕开其中之一：</font></font></p>

<pre><code>function isNumeric(a) {<font></font>
    if ($.isArray(a)) return false;<font></font>
    var b = a &amp;&amp; a.toString();<font></font>
    a = a + "";<font></font>
    return b - parseFloat(b) + 1 &gt;= 0 &amp;&amp;<font></font>
            !/^\s+|\s+$/g.test(a) &amp;&amp;<font></font>
            !isNaN(a) &amp;&amp; !isNaN(parseFloat(a));<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了手动测试我当前困境中遇到的几个用例之外，我还没有通过其他方法对其中的任何一个进行过测试，而这些都是非常标准的东西。</font><font style="vertical-align: inherit;">这是“站在巨人的肩膀上”的情况。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">isNaN（num）//如果变量不包含有效数字，则返回true</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要检查前导/尾随空格（例如，当需要一定数量的数字时），并且需要输入例如“ 1111”而不是“ 111”或“ 111”，则并不完全正确输入。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更好地使用：</font></font></p>

<pre><code>var num = /^\d+$/.test(num)
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞GilGreen</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">parseInt（），但是请注意，此函数在某种意义上有所不同，例如对于parseInt（“ 100px”）返回100。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经测试过，迈克尔的解决方案是最好的。</font><font style="vertical-align: inherit;">投票给他上面的答案（在该页面上搜索“如果您确实要确保该字符串”以找到它）。</font><font style="vertical-align: inherit;">本质上，他的答案是这样的：</font></font></p>

<pre><code>function isNumeric(num){<font></font>
  num = "" + num; //coerce num to be a string<font></font>
  return !isNaN(num) &amp;&amp; !isNaN(parseFloat(num));<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它适用于每个测试用例，我在这里记录了这些内容：</font><a href="https://jsfiddle.net/wggehvp9/5/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://jsfiddle.net/wggehvp9/5/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/wggehvp9/5/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于这些边缘情况，许多其他解决方案均失败：''，null，“”，true和[]。</font><font style="vertical-align: inherit;">从理论上讲，您可以通过适当的错误处理来使用它们，例如：</font></font></p>

<pre><code>return !isNaN(num);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>return (+num === +num);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对/ \ s /，null，“”，true，false，[]（还有其他？）进行特殊处理</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙Sam</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">isNan函数</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">isNaN（）函数确定一个值是否为非法数字（非数字）。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果该值等于NaN，则此函数返回true。</font><font style="vertical-align: inherit;">否则，它返回false。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此函数不同于Number特定</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Number.isNaN（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&nbsp; 全局isNaN（）函数，将测试的值转换为Number，然后对其进行测试。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Number.isNan（）不会将值转换为Number，并且对于任何非Number类型的值也不会返回true。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋村村</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你真的想确保字符串只包含一个数字，任何数字（整数或浮点数），并准确一些，你</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>parseInt()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>parseFloat()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>Number()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>!isNaN()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自己。</font><font style="vertical-align: inherit;">请注意，</font></font><code>!isNaN()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上是</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在什么时候</font></font><code>Number()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会返回数字，</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么时候会返回</font></font><code>NaN</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，所以我将在其余的讨论中将其排除在外。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的问题</font></font><code>parseFloat()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是，它会返回一个数字，如果字符串中包含任何数量，即使字符串不包含</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">准确</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的数字：</font></font></p>

<pre><code>parseFloat("2016-12-31")  // returns 2016<font></font>
parseFloat("1-1") // return 1<font></font>
parseFloat("1.2.3") // returns 1.2<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题</font></font><code>Number()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在于，如果传递的值根本不是数字，它将返回一个数字！</font></font></p>

<pre><code>Number("") // returns 0<font></font>
Number(" ") // returns 0<font></font>
Number(" \u00A0   \t\n\r") // returns 0<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">滚动自己的正则表达式的问题在于，除非您创建了与浮点数匹配的确切正则表达式，否则Javascript会识别该正则表达式，否则您会错过某些情况，或者会发现一些本不应该的情况。</font><font style="vertical-align: inherit;">即使您可以使用自己的正则表达式，为什么呢？</font><font style="vertical-align: inherit;">有更简单的内置方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，事实证明</font></font><code>Number()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（和</font></font><code>isNaN()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）在每种情况下</font></font><code>parseFloat()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都应该</font><font style="vertical-align: inherit;">做正确的事情，</font><font style="vertical-align: inherit;">在这种</font><font style="vertical-align: inherit;">情况下，本</font><font style="vertical-align: inherit;">不应该返回数字，反之亦然。</font><font style="vertical-align: inherit;">因此，要确定一个字符串是否确实是唯一且仅是一个数字，请调用这两个函数并查看它们是否</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回true：</font></font></p>

<pre><code>function isNumber(str) {<font></font>
  if (typeof str != "string") return false // we only process strings!<font></font>
  // could also coerce to string: str = ""+str<font></font>
  return !isNaN(str) &amp;&amp; !isNaN(parseFloat(str))<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Ss Yy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用RegExp方式：</font></font></p>

<pre><code>var num = "987238";<font></font>
<font></font>
if(num.match(/^-{0,1}\d+$/)){<font></font>
  //valid integer (positive or negative)<font></font>
}else if(num.match(/^\d+\.\d+$/)){<font></font>
  //valid float<font></font>
}else{<font></font>
  //not valid number<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
