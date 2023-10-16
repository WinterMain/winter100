---
layout: question
title:  如何在JavaScript中反转字符串？
date:   2020-03-16T06:50:28.000Z
description: 你如何扭转地方（或就地）在JavaScript字符串时，它被传递给用一个return语句的功能，而无需使用内置函数（.reverse()，.charAt(...
img: 
author: Pro小宇宙
category: question
answer: 18
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你如何扭转地方（或就地）在JavaScript字符串时，它被传递给用一个return语句的功能，而无需使用内置函数（</font></font><code>.reverse()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>.charAt()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等等）？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1771篇《如何在JavaScript中反转字符串？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪Green</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p>Keep it DRY and simple silly!!</p>

<pre><code>function reverse(s){<font></font>
let str = s;<font></font>
var reverse = '';<font></font>
for (var i=str.length;i&gt;0;i--){<font></font>
<font></font>
    var newstr = str.substring(0,i)<font></font>
    reverse += newstr.substr(-1,1)<font></font>
}<font></font>
return reverse;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony宝儿</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p>My own original attempt...</p>

<pre><code>var str = "The Car";<font></font>
<font></font>
function reverseStr(str) {<font></font>
  var reversed = "";<font></font>
  var len = str.length;<font></font>
  for (var i = 1; i &lt; (len + 1); i++) {  <font></font>
    reversed += str[len - i];      <font></font>
  }<font></font>
<font></font>
  return reversed;<font></font>
}<font></font>
<font></font>
var strReverse = reverseStr(str);    <font></font>
console.log(strReverse);<font></font>
// "raC ehT"<font></font>
</code></pre>

<p><a href="http://jsbin.com/bujiwo/19/edit?js,console,output" rel="nofollow">http://jsbin.com/bujiwo/19/edit?js,console,output</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi小宇宙</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><pre><code>var str = "my name is saurabh ";<font></font>
var empStr='',finalString='';<font></font>
var chunk=[];<font></font>
function reverse(str){<font></font>
var i,j=0,n=str.length;<font></font>
    for(i=0;i&lt;n;++i){<font></font>
        if(str[i]===' '){<font></font>
            chunk[j]=empStr;<font></font>
            empStr = '';<font></font>
            j++;<font></font>
        }else{<font></font>
            empStr=empStr+str[i];<font></font>
        }<font></font>
    }<font></font>
    for(var z=chunk.length-1;z&gt;=0;z--){<font></font>
        finalString = finalString +' '+ chunk[z];<font></font>
        console.log(finalString);<font></font>
    }<font></font>
    return true;<font></font>
}<font></font>
reverse(str);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L猿</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p>Using Array functions,</p>

<pre><code>String.prototype.reverse = function(){<font></font>
    return [].reduceRight.call(this, function(last, secLast){return last + secLast});<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><pre><code>function reverseString(string) {<font></font>
    var reversedString = "";<font></font>
    var stringLength = string.length - 1;<font></font>
    for (var i = stringLength; i &gt;= 0; i--) {<font></font>
        reversedString += string[i];<font></font>
    }<font></font>
    return reversedString;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinPro</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><pre><code>//es6<font></font>
//array.from<font></font>
const reverseString = (string) =&gt; Array.from(string).reduce((a, e) =&gt; e + a);<font></font>
//split<font></font>
const reverseString = (string) =&gt; string.split('').reduce((a, e) =&gt; e + a); <font></font>
<font></font>
//split problem<font></font>
"𠜎𠺢".split('')[0] === Array.from("𠜎𠺢")[0] // "�" === "𠜎" =&gt; false<font></font>
"😂😹🤗".split('')[0] === Array.from("😂😹🤗")[0] // "�" === "😂" =&gt; false<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐神乐</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符串本身是不可变的，但是您可以使用以下代码轻松创建反向副本：</font></font></p>

<pre><code>function reverseString(str) {<font></font>
<font></font>
  var strArray = str.split("");<font></font>
  strArray.reverse();<font></font>
<font></font>
  var strReverse = strArray.join("");<font></font>
<font></font>
  return strReverse;<font></font>
}<font></font>
<font></font>
reverseString("hello");<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">用户7049302300</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">真正的答案是：您不能将其原地反转，但是可以创建一个新的相反的字符串。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像进行递归练习一样：有时候，当您去面试时，面试官可能会问您如何使用递归来做到这一点，我认为“首选答案”可能是“我宁愿不递归地这样做。容易导致堆栈溢出”（因为</font></font><code>O(n)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是</font></font><code>O(log n)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。如果是</font></font><code>O(log n)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则很难导致堆栈溢出-堆栈级别32可以处理40亿个项目，因为2 ** 32是4294967296。但是，如果为</font></font><code>O(n)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则很容易导致堆栈溢出。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时候，面试官还会问你：“就像练习一样，为什么你还不使用递归来写呢？” </font><font style="vertical-align: inherit;">这里是：</font></font></p>

<pre><code>String.prototype.reverse = function() {<font></font>
    if (this.length &lt;= 1) return this;<font></font>
    else return this.slice(1).reverse() + this.slice(0,1);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试运行：</font></font></p>

<pre><code>var s = "";<font></font>
for(var i = 0; i &lt; 1000; i++) {<font></font>
    s += ("apple" + i);<font></font>
}<font></font>
console.log(s.reverse());<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></p>

<pre><code>999elppa899elppa...2elppa1elppa0elppa
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了尝试使堆栈溢出，我</font><font style="vertical-align: inherit;">在Google Chrome中</font><font style="vertical-align: inherit;">更改</font></font><code>1000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>10000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它报告：</font></font></p>

<pre><code>RangeError: Maximum call stack size exceeded
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小卤蛋Pro</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不能因为JS字符串是不可变的。</font><font style="vertical-align: inherit;">简短的非就地解决方案</font></font></p>

<pre><code>[...str].reverse().join``
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let str = "Hello World!";<font></font>
let r = [...str].reverse().join``;<font></font>
console.log(r);</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinStafan</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这是一个已经解决的老问题，但是出于我的娱乐，我编写了以下反向函数，并认为如果对其他人有用的话，我会分享一下。</font><font style="vertical-align: inherit;">它同时处理代理对和组合标记：</font></font></p>

<pre><code>function StringReverse (str)<font></font>
{<font></font>
  var charArray = [];<font></font>
  for (var i = 0; i &lt; str.length; i++)<font></font>
    {<font></font>
      if (i+1 &lt; str.length)<font></font>
        {<font></font>
          var value = str.charCodeAt(i);<font></font>
          var nextValue = str.charCodeAt(i+1);<font></font>
          if (   (   value &gt;= 0xD800 &amp;&amp; value &lt;= 0xDBFF<font></font>
                  &amp;&amp; (nextValue &amp; 0xFC00) == 0xDC00) // Surrogate pair)<font></font>
              || (nextValue &gt;= 0x0300 &amp;&amp; nextValue &lt;= 0x036F)) // Combining marks<font></font>
            {<font></font>
              charArray.unshift(str.substring(i, i+2));<font></font>
              i++; // Skip the other half<font></font>
              continue;<font></font>
            }<font></font>
        }<font></font>
<font></font>
      // Otherwise we just have a rogue surrogate marker or a plain old character.<font></font>
      charArray.unshift(str[i]);<font></font>
    }<font></font>
<font></font>
  return charArray.join('');<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mathias，Punycode和所有其他参考的所有道具，使我了解了JavaScript字符编码的复杂性。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin飞云</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有多种方法，您可以检查以下内容，</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.传统的for循环（递增）：</font></font></strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function reverseString(str){<font></font>
        let stringRev ="";<font></font>
        for(let i= 0; i&lt;str.length; i++){<font></font>
            stringRev = str[i]+stringRev;<font></font>
        }<font></font>
        return stringRev;<font></font>
}<font></font>
alert(reverseString("Hello World!"));</code></pre>
</div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.传统的for循环（递减）：</font></font></strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function reverseString(str){<font></font>
    let revstr = "";<font></font>
    for(let i = str.length-1; i&gt;=0; i--){<font></font>
        revstr = revstr+ str[i];<font></font>
    }<font></font>
    return revstr;<font></font>
}<font></font>
alert(reverseString("Hello World!"));</code></pre>
</div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3.使用for-of循环</font></font></strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function reverseString(str){<font></font>
    let strn ="";<font></font>
    for(let char of str){<font></font>
        strn = char + strn;<font></font>
    }<font></font>
    return strn;<font></font>
}<font></font>
alert(reverseString("Get well soon"));</code></pre>
</div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4.使用forEach /高阶数组方法：</font></font></strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function reverseString(str){<font></font>
<font></font>
  let revSrring = "";<font></font>
  str.split("").forEach(function(char){<font></font>
    <font></font>
    revSrring = char + revSrring;<font></font>
  <font></font>
  });<font></font>
  return revSrring;<font></font>
}<font></font>
alert(reverseString("Learning JavaScript"));</code></pre>
</div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5. ES6标准：</font></font></strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function reverseString(str){<font></font>
<font></font>
  let revSrring = "";<font></font>
  str.split("").forEach(char =&gt; revSrring = char + revSrring);<font></font>
  return revSrring;<font></font>
}<font></font>
alert(reverseString("Learning JavaScript"));</code></pre>
</div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">6.最新方法：</font></font></strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function reverseString(str){<font></font>
<font></font>
  return str.split("").reduce(function(revString, char){<font></font>
       return char + revString;<font></font>
  }, "");<font></font>
 <font></font>
}<font></font>
<font></font>
alert(reverseString("Learning JavaScript"));</code></pre>
</div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">7.您还可以使用以下方法获得结果，</font></font></strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function reverseString(str){<font></font>
<font></font>
  return str.split("").reduce((revString, char)=&gt; char + revString, "");<font></font>
 <font></font>
}<font></font>
alert(reverseString("Learning JavaScript"));</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐飞云</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在一次采访中，我被要求在不使用任何变量或本机方法的情况下反转字符串。</font><font style="vertical-align: inherit;">这是我最喜欢的实现：</font></font></p>

<pre><code>function reverseString(str) {<font></font>
    return str === '' ? '' : reverseString(str.slice(1)) + str[0];<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐阳光</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过多种方式来反转JavaScript中的字符串。</font><font style="vertical-align: inherit;">我记下了我喜欢的三种方式。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法1：使用反向功能：</font></font></strong></p>

<pre><code>function reverse(str) {<font></font>
  return str.split('').reverse().join('');<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法2：遍历字符：</font></font></strong></p>

<pre><code>function reverse(str) {<font></font>
  let reversed = '';<font></font>
<font></font>
  for (let character of str) {<font></font>
    reversed = character + reversed;<font></font>
  }<font></font>
<font></font>
  return reversed;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法3：使用reduce函数：</font></font></strong></p>

<pre><code>function reverse(str) {<font></font>
  return str.split('').reduce((rev, char) =&gt; char + rev, '');<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望这有帮助 ：）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony西门古一</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" rel="noreferrer"><code>Array.from()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将字符串转换为数组，然后</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" rel="noreferrer"><code>Array.prototype.reverse()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反转数组，然后</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" rel="noreferrer"><code>Array.prototype.join()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使其返回字符串。</font></font></p>

<pre><code>const reverse = str =&gt; Array.from(str).reverse().join('');
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝米亚</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">整个“在原处倒置字符串”是一个过时的面试问题，C程序员会问，被他们面试的人（也许是为了报仇）。</font><font style="vertical-align: inherit;">不幸的是，“就位”部分不再起作用，因为几乎所有托管语言（JS，C＃等）中的字符串都使用不可变的字符串，从而破坏了在不分配任何新内存的情况下移动字符串的整个想法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管上面的解决方案确实确实反转了字符串，但是他们没有分配更多的内存就不会这样做，因此不满足条件。</font><font style="vertical-align: inherit;">您需要直接访问分配的字符串，并且能够操纵其原始存储位置，以便能够将其原地反转。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就个人而言，我真的很讨厌这些面试问题，但可悲的是，我相信我们会在未来几年内继续看到它们。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易LEY</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">详细的分析以及十种不同的方式来反转字符串及其性能细节。</font></font></p>

<p><a href="http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些实现的性能：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个浏览器效果最佳的实施</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome 15-象征1和6 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox 7-实施6 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE 9-实施4 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Opera 12-实施9</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些是这些实现：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实施1：</font></font></strong></p>

<pre><code>function reverse(s) {<font></font>
  var o = '';<font></font>
  for (var i = s.length - 1; i &gt;= 0; i--)<font></font>
    o += s[i];<font></font>
  return o;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实施2：</font></font></strong></p>

<pre><code>function reverse(s) {<font></font>
  var o = [];<font></font>
  for (var i = s.length - 1, j = 0; i &gt;= 0; i--, j++)<font></font>
    o[j] = s[i];<font></font>
  return o.join('');<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实施3：</font></font></strong></p>

<pre><code>function reverse(s) {<font></font>
  var o = [];<font></font>
  for (var i = 0, len = s.length; i &lt;= len; i++)<font></font>
    o.push(s.charAt(len - i));<font></font>
  return o.join('');<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实施4：</font></font></strong></p>

<pre><code>function reverse(s) {<font></font>
  return s.split('').reverse().join('');<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实施5：</font></font></strong></p>

<pre><code>function reverse(s) {<font></font>
  var i = s.length,<font></font>
      o = '';<font></font>
  while (i &gt; 0) {<font></font>
    o += s.substring(i - 1, i);<font></font>
    i--;<font></font>
  }<font></font>
  return o;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实施6：</font></font></strong></p>

<pre><code>function reverse(s) {<font></font>
  for (var i = s.length - 1, o = ''; i &gt;= 0; o += s[i--]) { }<font></font>
  return o;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实施7：</font></font></strong></p>

<pre><code>function reverse(s) {<font></font>
  return (s === '') ? '' : reverse(s.substr(1)) + s.charAt(0);<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实施8：</font></font></strong></p>

<pre><code>function reverse(s) {<font></font>
  function rev(s, len, o) {<font></font>
    return (len === 0) ? o : rev(s, --len, (o += s[len]));<font></font>
  };<font></font>
  return rev(s, s.length, '');<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实施9：</font></font></strong></p>

<pre><code>function reverse(s) {<font></font>
  s = s.split('');<font></font>
  var len = s.length,<font></font>
      halfIndex = Math.floor(len / 2) - 1,<font></font>
      tmp;<font></font>
<font></font>
<font></font>
     for (var i = 0; i &lt;= halfIndex; i++) {<font></font>
        tmp = s[len - i - 1];<font></font>
        s[len - i - 1] = s[i];<font></font>
        s[i] = tmp;<font></font>
      }<font></font>
      return s.join('');<font></font>
    }<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实施10</font></font></strong></p>

<pre><code>function reverse(s) {<font></font>
  if (s.length &lt; 2)<font></font>
    return s;<font></font>
  var halfIndex = Math.ceil(s.length / 2);<font></font>
  return reverse(s.substr(halfIndex)) +<font></font>
         reverse(s.substr(0, halfIndex));<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅乐</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><pre><code>String.prototype.reverse_string=function() {return this.split("").reverse().join("");}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>String.prototype.reverse_string = function() {<font></font>
    var s = "";<font></font>
    var i = this.length;<font></font>
    while (i&gt;0) {<font></font>
        s += this.substring(i-1,i);<font></font>
        i--;<font></font>
    }<font></font>
    return s;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Jim</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只要您要处理简单的ASCII字符，并且很高兴使用内置函数，就可以使用：</font></font></p>

<pre><code>function reverse(s){<font></font>
    return s.split("").reverse().join("");<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要支持UTF-16或其他多字节字符的解决方案，请注意此函数将提供无效的unicode字符串或看起来很有趣的有效字符串。</font><font style="vertical-align: inherit;">您可能需要考虑</font></font><a href="https://stackoverflow.com/a/16776621/1636522"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
