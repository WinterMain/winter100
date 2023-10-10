---
layout: question
title:  JavaScript截断/切片/修剪掉字符串中的最后一个字符
date:   2020-03-09T11:11:33.000Z
description: 我有一个字符串，12345.00并且我希望它返回12345.0。我已经看过了trim，但是看起来它只是在修剪空白，slice而我看不出它是如何工作的。...
img: 
author: ItachiJinJin
category: question
answer: 16
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个字符串，</font></font><code>12345.00</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且我希望它返回</font></font><code>12345.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经看过了</font></font><code>trim</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是看起来它只是在修剪空白，</font></font><code>slice</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而我看不出</font><font style="vertical-align: inherit;">它是</font><font style="vertical-align: inherit;">如何工作的。</font><font style="vertical-align: inherit;">有什么建议么？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy小卤蛋凯</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Use substring to get everything to the left of _bar. But first you have to get the instr of _bar in the string:</p>

<pre><code>str.substring(3, 7);
</code></pre>

<p>3 is that start and 7 is the length.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProGreen</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Try this:</p>

<pre><code>&lt;script&gt;<font></font>
    var x="foo_foo_foo_bar";<font></font>
    for (var i=0; i&lt;=x.length; i++) {<font></font>
        if (x[i]=="_" &amp;&amp; x[i+1]=="b") {<font></font>
            break;<font></font>
        }<font></font>
        else {<font></font>
            document.write(x[i]);<font></font>
        }<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p>You can also try the live working example on <a href="http://jsfiddle.net/informativejavascript/F7WTn/87/" rel="nofollow noreferrer">http://jsfiddle.net/informativejavascript/F7WTn/87/</a>.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGO西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>if(str.substring(str.length - 4) == "_bar")<font></font>
{<font></font>
    str = str.substring(0, str.length - 4);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Eva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>In cases where you want to remove something that is close to the end of a string (in case of variable sized strings) you can combine slice() and substr().</p>

<p>I had a string with markup, dynamically built, with a list of anchor tags separated by comma. The string was something like:</p>

<pre><code>var str = "&lt;a&gt;text 1,&lt;/a&gt;&lt;a&gt;text 2,&lt;/a&gt;&lt;a&gt;text 2.3,&lt;/a&gt;&lt;a&gt;text abc,&lt;/a&gt;";
</code></pre>

<p>To remove the last comma I did the following:</p>

<pre><code>str = str.slice(0, -5) + str.substr(-4);
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva千羽</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>The shortest way:</p>

<pre><code>str.slice(0, -1); 
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿AJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>If you want to do generic rounding of floats, instead of just trimming the last character:</p>

<pre><code>var float1 = 12345.00,<font></font>
    float2 = 12345.4567,<font></font>
    float3 = 12345.982;<font></font>
<font></font>
var MoreMath = {<font></font>
    /**<font></font>
     * Rounds a value to the specified number of decimals<font></font>
     * @param float value The value to be rounded<font></font>
     * @param int nrDecimals The number of decimals to round value to<font></font>
     * @return float value rounded to nrDecimals decimals<font></font>
     */<font></font>
    round: function (value, nrDecimals) {<font></font>
        var x = nrDecimals &gt; 0 ? 10 * parseInt(nrDecimals, 10) : 1;<font></font>
        return Math.round(value * x) / x;<font></font>
    }<font></font>
}<font></font>
<font></font>
MoreMath.round(float1, 1) =&gt; 12345.0<font></font>
MoreMath.round(float2, 1) =&gt; 12345.5<font></font>
MoreMath.round(float3, 1) =&gt; 12346.0<font></font>
</code></pre>

<p><em>EDIT:</em> Seems like there exists a built in function for this, as Paolo points out. That solution is obviously much cleaner than mine. Use <a href="http://www.w3schools.com/jsref/jsref_parseFloat.asp" rel="nofollow noreferrer">parseFloat</a> followed by <a href="http://www.w3schools.com/jsref/jsref_tofixed.asp" rel="nofollow noreferrer">toFixed</a> </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const str = "test!";<font></font>
console.log(str.slice(0, -1));</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const myString = "Hello World!";<font></font>
console.log(myString.slice(0, -1));</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC38880545</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（。*），多次捕获任何字符</font></font></li>
</ol>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.log("a string".match(/(.*).$/)[1]);</code></pre>
</div>
</div>
<p></p>

<ol start="2">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。，匹配最后一个字符，在这种情况下</font></font></li>
</ol>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.log("a string".match(/(.*).$/));</code></pre>
</div>
</div>
<p></p>

<ol start="3">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$，匹配字符串的结尾</font></font></li>
</ol>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.log("a string".match(/(.*).{2}$/)[1]);</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用正则表达式：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let aStr = "12345.00";<font></font>
aStr = aStr.replace(/.$/, '');<font></font>
console.log(aStr);</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi泡芙Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">怎么样：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let myString = "12345.00";<font></font>
console.log(myString.substring(0, myString.length - 1));</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正则表达式是您要查找的内容：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let str = "foo_bar";<font></font>
console.log(str.replace(/_bar$/, ""));</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋小卤蛋小哥</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的方法是使用</font></font><code>slice</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符串</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">方法，</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">方法允许使用负数位置（对应于字符串末尾的偏移量）：</font></font></p>

<pre><code>const s = "your string";<font></font>
const withoutLastFourChars = s.slice(0, -4);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要更通用的方法来删除最后一个下划线（包括下划线）之后的所有内容，可以执行以下操作（只要</font></font><code>s</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保证至少包含一个下划线）：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const s = "your_string";<font></font>
const withoutLastChunk = s.slice(0, s.lastIndexOf("_"));<font></font>
console.log(withoutLastChunk);</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font><font style="vertical-align: inherit;">JavaScript字符串对象</font><font style="vertical-align: inherit;">的</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/substring" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">substring</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法：</font></font></p>

<pre><code>s = s.substring(0, s.length - 4)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它无条件删除string中的最后四个字符</font></font><code>s</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果您要</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有条件地</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除最后四个字符，则前提是它们</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">恰好是</font></font></em> <code>_bar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var re = /_bar$/;<font></font>
s.replace(re, "");<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">slice</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！</font><font style="vertical-align: inherit;">您只需要确保您知道如何使用它即可。</font><font style="vertical-align: inherit;">正号是相对于开始，负号是相对于结束。</font></font></p>

<pre><code>js&gt;"12345.00".slice(0,-1)<font></font>
12345.0<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">substring</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let str = "12345.00";<font></font>
str = str.substring(0, str.length - 1);<font></font>
console.log(str);</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是公认的答案，但是根据下面的对话，</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">切片</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法更加清晰：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let str = "12345.00";<font></font>
str = str.slice(0, -1); <font></font>
console.log(str);</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
