---
layout: question
title:  检查JavaScript中变量是数字还是字符串
date:   2020-03-13T08:49:34.000Z
description: 有谁知道如何检查JavaScript中的变量是数字还是字符串？...
img: 
author: GOItachi老丝
category: question
answer: 14
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有谁知道如何检查JavaScript中的变量是数字还是字符串？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1441篇《检查JavaScript中变量是数字还是字符串》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易卡卡西</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">晚会很晚；</font><font style="vertical-align: inherit;">但是，当我想检查某些输入是字符串还是数字时，以下内容对我来说一直很有效。</font></font></p>

<pre><code>return !!Object.prototype.toString.call(input).match(/\[object (String|Number)\]/);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Jim</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>function IsNumeric(num) {<font></font>
    return ((num &gt;=0 || num &lt; 0)&amp;&amp; (parseInt(num)==num) );<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenSamA</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需使用 </font></font></p>

<pre><code>myVar.constructor == String
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>myVar.constructor == Number
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要处理定义为对象或文字的字符串并进行保存，则不想使用辅助函数。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型检查</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>typeof</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符</font><font style="vertical-align: inherit;">检查变量的类型</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>typeof variable
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">价值检查</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面的代码对数字返回true，对其他任何东西返回false：</font></font></p>

<pre><code>!isNaN(+variable);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿神奇梅</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嗯？</font><font style="vertical-align: inherit;">只需使用正则表达式即可！</font><font style="vertical-align: inherit;">:)</font></font></p>

<pre><code>function isInteger(val) {<font></font>
  return val.match(/^[0-9]$/)<font></font>
}<font></font>
<font></font>
function isFloat(val) {<font></font>
  return val.match(/^[0-9]*/\.[0-9]+$/)<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomGO梅</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery使用以下代码：</font></font></p>

<pre><code>function isNumber(obj) {<font></font>
  return !isNaN( parseFloat( obj ) ) &amp;&amp; isFinite( obj );<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅供参考，如果您使用的是jQuery，</font></font></p>

<pre><code>$.isNumeric() 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理这个。</font><font style="vertical-align: inherit;">有关</font><a href="http://api.jquery.com/jQuery.isNumeric/" rel="nofollow"><font style="vertical-align: inherit;">http://api.jquery.com/jQuery.isNumeric/的</font></a><font style="vertical-align: inherit;">更多详细信息</font></font><a href="http://api.jquery.com/jQuery.isNumeric/" rel="nofollow"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易理查德</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为将var转换为字符串会降低性能，至少</font><font style="vertical-align: inherit;">在最新的浏览器中执行的</font><font style="vertical-align: inherit;">此</font></font><a href="http://jsperf.com/check-if-var-is-string"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表明如此。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果您关心性能，我会使用：</font></font></p>

<pre><code>typeof str === "string" || str instanceof String
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于检查变量是否为字符串（即使使用</font></font><code>var str = new String("foo")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>str instanceof String</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也将返回true）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至于检查，如果它是一个数字我会去的原生：</font></font><code>isNaN</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">; </font><font style="vertical-align: inherit;">功能。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimGO</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嗯，怎么样：</font></font></p>

<pre><code>function IsString(obj) {<font></font>
    return obj !== undefined &amp;&amp; obj != null &amp;&amp; obj.toLowerCase !== undefined;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过几个月的进一步审查，这只能保证</font></font><code>obj</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个</font></font><code>toLowerCase</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义</font><font style="vertical-align: inherit;">了方法或属性名称的对象</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我为自己的回答感到ham愧。</font><font style="vertical-align: inherit;">请参阅票数最高的</font></font><code>typeof</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙Tom</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一种基于以下想法的方法：通过添加零或空字符串将输入强制为数字或字符串，然后进行类型相等性比较。</font></font></p>

<pre><code>function is_number(x) { return x === x+0;  }<font></font>
function is_string(x) { return x === x+""; }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于某些不可思议的原因，</font></font><code>x===x+0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎效果优于</font></font><code>x===+x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有任何失败的情况？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样：</font></font></p>

<pre><code>function is_boolean(x) { return x === !!x; }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这似乎比</font></font><code>x===true || x===false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">略快</font></font><code>typeof x==="boolean"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（并且比快得多</font></font><code>x===Boolean(x)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后还有 </font></font></p>

<pre><code>function is_regexp(x)  { return x === RegExp(x); }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有这些都取决于特定于每种类型的“标识”操作的存在，该操作可以应用于任何值并可靠地产生所讨论类型的值。</font><font style="vertical-align: inherit;">我无法想到这样的日期操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于NaN，有</font></font></p>

<pre><code>function is_nan(x) { return x !== x;}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这基本上是下划线的版本，因为它代表约比快四倍</font></font><code>isNaN()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但在下划线源提到，“南是唯一的评论</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数量</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不等于本身”，并增加了对_.isNumber检查。</font><font style="vertical-align: inherit;">为什么？</font><font style="vertical-align: inherit;">还有哪些其他对象不等于自己？</font><font style="vertical-align: inherit;">另外，下划线使用- </font></font><code>x !== +x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是</font></font><code>+</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里有</font><font style="vertical-align: inherit;">什么不同</font><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后对于偏执狂：</font></font></p>

<pre><code>function is_undefined(x) { return x===[][0]; }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或这个 </font></font></p>

<pre><code>function is_undefined(x) { return x===void(0); }
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易米亚</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或仅使用以下内容的倒数</font></font><code>isNaN()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>if(!isNaN(data))<font></font>
  do something with the number<font></font>
else<font></font>
  it is a string<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，使用jQuery </font></font><code>$.isNumeric()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更有趣。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里GO</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将其除以1吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为问题将是类似“ 123ABG”的字符串输入</font></font></p>

<pre><code>var Check = "123ABG"<font></font>
<font></font>
if(Check == Check / 1)<font></font>
{<font></font>
alert("This IS a number \n")<font></font>
}<font></font>
<font></font>
else<font></font>
{<font></font>
alert("This is NOT a number \n")<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我最近做的一种方式。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green老丝Itachi</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您正在寻找</font></font><code>isNaN()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.log(!isNaN(123));<font></font>
console.log(!isNaN(-1.23));<font></font>
console.log(!isNaN(5-2));<font></font>
console.log(!isNaN(0));<font></font>
console.log(!isNaN("0"));<font></font>
console.log(!isNaN("2"));<font></font>
console.log(!isNaN("Hello"));<font></font>
console.log(!isNaN("2005/12/12"));</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参见</font><font style="vertical-align: inherit;">MDN上的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript isNaN（）函数</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚阿飞</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查值是字符串文字还是String对象：</font></font></p>

<pre><code>function isString(o) {<font></font>
    return typeof o == "string" || (typeof o == "object" &amp;&amp; o.constructor === String);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单元测试：</font></font></p>

<pre><code>function assertTrue(value, message) {<font></font>
    if (!value) {<font></font>
        alert("Assertion error: " + message);<font></font>
    }<font></font>
}<font></font>
<font></font>
function assertFalse(value, message)<font></font>
{<font></font>
    assertTrue(!value, message);<font></font>
}<font></font>
<font></font>
assertTrue(isString("string literal"), "number literal");<font></font>
assertTrue(isString(new String("String object")), "String object");<font></font>
assertFalse(isString(1), "number literal");<font></font>
assertFalse(isString(true), "boolean literal");<font></font>
assertFalse(isString({}), "object");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查数字类似：</font></font></p>

<pre><code>function isNumber(o) {<font></font>
    return typeof o == "number" || (typeof o == "object" &amp;&amp; o.constructor === Number);<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
