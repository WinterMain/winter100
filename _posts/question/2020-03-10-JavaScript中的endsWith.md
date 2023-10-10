---
layout: question
title:  JavaScript中的endsWith
date:   2020-03-09T16:47:16.000Z
description: 如何在JavaScript中检查字符串是否以特定字符结尾？示例：我有一个字符串 var str = "mystring#";我想知道该字符串...
img: 
author: 小小凯
category: question
answer: 18
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在JavaScript中检查字符串是否以特定字符结尾？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例：我有一个字符串 </font></font></p>

<pre><code>var str = "mystring#";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道该字符串是否以结尾</font></font><code>#</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我该如何检查？</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"></font><code>endsWith()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中</font><font style="vertical-align: inherit;">是否有</font><font style="vertical-align: inherit;">方法？</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个解决方案是获取字符串的长度并获取最后一个字符并进行检查。</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是最好的方法还是还有其他方法？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长前端</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>For coffeescript</p>

<pre><code>String::endsWith = (suffix) -&gt;<font></font>
  -1 != @indexOf suffix, @length - suffix.length<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙米亚猿</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>all of them are very useful examples. Adding <code>String.prototype.endsWith = function(str)</code> will help us to simply call the method to check if our string ends with it or not, well regexp will also do it.</p>

<p>I found a better solution than mine. Thanks every one.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一番长小小</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>Do not use regular expressions. They are slow even in fast languages. Just write a function that checks the end of a string. This library has nice examples: <a href="https://github.com/danielnuriyev/groundjs/blob/master/util.js" rel="nofollow">groundjs/util.js</a>.
Be careful adding a function to String.prototype. This code has nice examples of how to do it: <a href="https://github.com/danielnuriyev/groundjs/blob/master/prototype.js" rel="nofollow">groundjs/prototype.js</a>
In general, this is a nice language-level library: <a href="https://github.com/danielnuriyev/groundjs/blob/master/ground.js" rel="nofollow">groundjs</a>
You can also take a look at lodash</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁宝儿</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>if(typeof String.prototype.endsWith !== "function") {<font></font>
    /**<font></font>
     * String.prototype.endsWith<font></font>
     * Check if given string locate at the end of current string<font></font>
     * @param {string} substring substring to locate in the current string.<font></font>
     * @param {number=} position end the endsWith check at that position<font></font>
     * @return {boolean}<font></font>
     *<font></font>
     * @edition ECMA-262 6th Edition, 15.5.4.23<font></font>
     */<font></font>
    String.prototype.endsWith = function(substring, position) {<font></font>
        substring = String(substring);<font></font>
<font></font>
        var subLen = substring.length | 0;<font></font>
<font></font>
        if( !subLen )return true;//Empty string<font></font>
<font></font>
        var strLen = this.length;<font></font>
<font></font>
        if( position === void 0 )position = strLen;<font></font>
        else position = position | 0;<font></font>
<font></font>
        if( position &lt; 1 )return false;<font></font>
<font></font>
        var fromIndex = (strLen &lt; position ? strLen : position) - subLen;<font></font>
<font></font>
        return (fromIndex &gt;= 0 || subLen === -fromIndex)<font></font>
            &amp;&amp; (<font></font>
                position === 0<font></font>
                // if position not at the and of the string, we can optimise search substring<font></font>
                //  by checking first symbol of substring exists in search position in current string<font></font>
                || this.charCodeAt(fromIndex) === substring.charCodeAt(0)//fast false<font></font>
            )<font></font>
            &amp;&amp; this.indexOf(substring, fromIndex) === fromIndex<font></font>
        ;<font></font>
    };<font></font>
}<font></font>
</code></pre>

<p><strong>Benefits:</strong></p>

<ul>
<li>This version is not just re-using indexOf.</li>
<li>Greatest performance on long strings. Here is a speed test <a href="http://jsperf.com/starts-ends-with/4" rel="nofollow">http://jsperf.com/starts-ends-with/4</a></li>
<li>Fully compatible with ecmascript specification. It passes the <a href="https://github.com/monolithed/ECMAScript-6/blob/master/tests/String.js" rel="nofollow">tests</a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiTom</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>This is the implementation of endsWith :
<code>
String.prototype.endsWith = function (str) {
  return this.length &gt;= str.length &amp;&amp; this.substr(this.length - str.length) == str;
}
</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiTom</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>This is the implementation of endsWith :</p>

<p>String.prototype.endsWith = function (str) {
  return this.length &gt;= str.length &amp;&amp; this.substr(this.length - str.length) == str;
}</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯卡卡西</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>After all those long tally of answers, i found this piece of code simple and easy to understand!</p>

<pre><code>function end(str, target) {<font></font>
  return str.substr(-target.length) == target;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚十三Harry</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>String.prototype.endWith = function (a) {<font></font>
    var isExp = a.constructor.name === "RegExp",<font></font>
    val = this;<font></font>
    if (isExp === false) {<font></font>
        a = escape(a);<font></font>
        val = escape(val);<font></font>
    } else<font></font>
        a = a.toString().replace(/(^\/)|(\/$)/g, "");<font></font>
    return eval("/" + a + "$/.test(val)");<font></font>
}<font></font>
<font></font>
// example<font></font>
var str = "Hello";<font></font>
alert(str.endWith("lo"));<font></font>
alert(str.endWith(/l(o|a)/));<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">年轻不拽世界怎么精彩</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>if you dont want to use lasIndexOf or substr then why not just look at the string in its natural state (ie. an array)</p>

<pre><code>String.prototype.endsWith = function(suffix) {<font></font>
    if (this[this.length - 1] == suffix) return true;<font></font>
    return false;<font></font>
}<font></font>
</code></pre>

<p>or as a standalone function</p>

<pre><code>function strEndsWith(str,suffix) {<font></font>
    if (str[str.length - 1] == suffix) return true;<font></font>
    return false;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilGreen</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>function check(str)<font></font>
{<font></font>
    var lastIndex = str.lastIndexOf('/');<font></font>
    return (lastIndex != -1) &amp;&amp; (lastIndex  == (str.length - 1));<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小逆天</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个使用正则表达式的快速替代方法对我来说很有吸引力：</font></font></p>

<pre><code>// Would be equivalent to:<font></font>
// "Hello World!".endsWith("World!")<font></font>
"Hello World!".match("World!$") != null<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙古一</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>String.prototype.endsWith = function(str) <font></font>
{return (this.match(str+"$")==str)}<font></font>
<font></font>
String.prototype.startsWith = function(str) <font></font>
{return (this.match("^"+str)==str)}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望这有帮助</font></font></p>

<pre><code>var myStr = “  Earth is a beautiful planet  ”;<font></font>
var myStr2 = myStr.trim();  <font></font>
//==“Earth is a beautiful planet”;<font></font>
<font></font>
if (myStr2.startsWith(“Earth”)) // returns TRUE<font></font>
<font></font>
if (myStr2.endsWith(“planet”)) // returns TRUE<font></font>
<font></font>
if (myStr.startsWith(“Earth”)) <font></font>
// returns FALSE due to the leading spaces…<font></font>
<font></font>
if (myStr.endsWith(“planet”)) <font></font>
// returns FALSE due to trailing spaces…<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传统方式 </font></font></p>

<pre><code>function strStartsWith(str, prefix) {<font></font>
    return str.indexOf(prefix) === 0;<font></font>
}<font></font>
<font></font>
function strEndsWith(str, suffix) {<font></font>
    return str.match(suffix+"$")==suffix;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光小卤蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自developer.mozilla.org </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">String.prototype.endsWith（）</font></font></a></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">摘要</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>endsWith()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法确定一个字符串是否以另一个字符串的字符结尾，并根据需要返回true或false。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">句法</font></font></h2>

<pre><code>str.endsWith(searchString [, position]);
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参量</font></font></h2>

<ul>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">searchString</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：在此字符串末尾要搜索的字符。</font></font></p></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">position</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：在此字符串中搜索，就好像该字符串只有这么长；</font><font style="vertical-align: inherit;">默认为该字符串的实际长度，限制在该字符串的长度所建立的范围内。</font></font></p></li>
</ul>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">描述</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此方法使您可以确定一个字符串是否以另一个字符串结尾。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例子</font></font></h2>

<pre><code>var str = "To be, or not to be, that is the question.";<font></font>
<font></font>
alert( str.endsWith("question.") );  // true<font></font>
alert( str.endsWith("to be") );      // false<font></font>
alert( str.endsWith("to be", 19) );  // true<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">技术指标</font></font></h2>

<p><a href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.endswith" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript语言规范第六版（ECMA-262）</font></font></a></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器兼容性</font></font></h2>

<p><a href="https://i.stack.imgur.com/THZsd.jpg" rel="noreferrer"><img src="https://i.stack.imgur.com/THZsd.jpg" alt="浏览器兼容性"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖GO</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有看到</font></font><code>slice</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法的配合。</font><font style="vertical-align: inherit;">所以我就把它留在这里：</font></font></p>

<pre><code>function endsWith(str, suffix) {<font></font>
    return str.slice(-suffix.length) === suffix<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐神无</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此版本避免创建子字符串，并且不使用正则表达式（此处提供某些正则表达式答案；而其他则不适用）：</font></font></p>

<pre><code>String.prototype.endsWith = function(str)<font></font>
{<font></font>
    var lastIndex = this.lastIndexOf(str);<font></font>
    return (lastIndex !== -1) &amp;&amp; (lastIndex + str.length === this.length);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果性能对您很重要，那么值得测试一下是否</font></font><code>lastIndexOf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上比创建子字符串更快。</font><font style="vertical-align: inherit;">（这可能取决于您使用的JS引擎...）在匹配的情况下，它可能会更快，并且当字符串很小时-但是当字符串很大时，甚至需要回顾整个过程虽然我们并不在乎:(</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于检查单个字符，找到长度然后使用</font></font><code>charAt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能是最好的方法。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid米亚</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是没有。</font></font></li>
<li><code>if( "mystring#".substr(-1) === "#" ) {}</code></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村阿飞</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">拜托，这是正确的</font></font><code>endsWith</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实现：</font></font></p>

<pre><code>String.prototype.endsWith = function (s) {<font></font>
  return this.length &gt;= s.length &amp;&amp; this.substr(this.length - s.length) == s;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>lastIndexOf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不匹配，</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">只会创建不必要的CPU循环。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>return this.lastIndexOf(str) + str.length == this.length;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在原始字符串的长度比搜索字符串的长度小一且找不到搜索字符串的情况下不起作用：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">lastIndexOf返回-1，然后添加搜索字符串的长度，然后剩下原始字符串的长度。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能的解决方法是</font></font></p>

<pre><code>return this.length &gt;= str.length &amp;&amp; this.lastIndexOf(str) + str.length == this.length
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
