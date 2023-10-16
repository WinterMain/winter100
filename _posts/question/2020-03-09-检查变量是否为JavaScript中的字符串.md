---
layout: question
title:  检查变量是否为JavaScript中的字符串
date:   2020-03-09T12:21:18.000Z
description: 如何确定变量是字符串还是JavaScript中的其他内容？...
img: 
author: 阿飞神乐
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何确定变量是字符串还是JavaScript中的其他内容？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第241篇《检查变量是否为JavaScript中的字符串》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>This is good enough for me.</p>

<p><strong>WARNING:</strong> This is not a perfect solution.
See the bottom of my post.</p>

<pre><code>Object.prototype.isString = function() { return false; };<font></font>
String.prototype.isString = function() { return true; };<font></font>
<font></font>
var isString = function(a) {<font></font>
  return (a !== null) &amp;&amp; (a !== undefined) &amp;&amp; a.isString();<font></font>
};<font></font>
</code></pre>

<p>And you can use this like below.</p>

<pre><code>//return false<font></font>
isString(null);<font></font>
isString(void 0);<font></font>
isString(-123);<font></font>
isString(0);<font></font>
isString(true);<font></font>
isString(false);<font></font>
isString([]);<font></font>
isString({});<font></font>
isString(function() {});<font></font>
isString(0/0);<font></font>
<font></font>
//return true<font></font>
isString("");<font></font>
isString(new String("ABC"));<font></font>
</code></pre>

<p><strong>WARNING:</strong> This works incorrectly in the case:</p>

<pre><code>//this is not a string<font></font>
var obj = {<font></font>
    //but returns true lol<font></font>
    isString: function(){ return true; }<font></font>
}<font></font>
<font></font>
isString(obj) //should be false, but true<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I find this simple technique useful to type-check for <strong>String</strong> -</p>

<pre><code>String(x) === x // true, if x is a string<font></font>
                // false in every other case<font></font>
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const test = x =&gt;<font></font>
  console.assert<font></font>
    ( String(x) === x<font></font>
    , `not a string: ${x}`<font></font>
    )<font></font>
<font></font>
test("some string")<font></font>
test(123)           // assertion failed<font></font>
test(0)             // assertion failed<font></font>
test(/some regex/)  // assertion failed<font></font>
test([ 5, 6 ])      // assertion failed<font></font>
test({ a: 1 })      // assertion failed<font></font>
test(x =&gt; x + 1)    // assertion failed</code></pre>
</div>
</div>
<p></p>

<p>The same technique works for <strong>Number</strong> too -</p>

<pre><code>Number(x) === x // true, if x is a number<font></font>
                // false in every other case<font></font>
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const test = x =&gt;<font></font>
  console.assert<font></font>
    ( Number(x) === x<font></font>
    , `not a number: ${x}`<font></font>
    )<font></font>
<font></font>
test("some string") // assertion failed<font></font>
test(123)           <font></font>
test(0)             <font></font>
test(/some regex/)  // assertion failed<font></font>
test([ 5, 6 ])      // assertion failed<font></font>
test({ a: 1 })      // assertion failed<font></font>
test(x =&gt; x + 1)    // assertion failed</code></pre>
</div>
</div>
<p></p>

<p>And for <strong>RegExp</strong> -</p>

<pre><code>RegExp(x) === x // true, if x is a regexp<font></font>
                // false in every other case<font></font>
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const test = x =&gt;<font></font>
  console.assert<font></font>
    ( RegExp(x) === x<font></font>
    , `not a regexp: ${x}`<font></font>
    )<font></font>
<font></font>
test("some string") // assertion failed<font></font>
test(123)           // assertion failed<font></font>
test(0)             // assertion failed<font></font>
test(/some regex/)  <font></font>
test([ 5, 6 ])      // assertion failed<font></font>
test({ a: 1 })      // assertion failed<font></font>
test(x =&gt; x + 1)    // assertion failed</code></pre>
</div>
</div>
<p></p>

<p>Same for <strong>Object</strong> -</p>

<pre><code>Object(x) === x // true, if x is an object<font></font>
                // false in every other case<font></font>
</code></pre>

<p>NB, regexps, arrays, and functions are considered objects too.</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const test = x =&gt;<font></font>
  console.assert<font></font>
    ( Object(x) === x<font></font>
    , `not an object: ${x}`<font></font>
    )<font></font>
<font></font>
test("some string") // assertion failed<font></font>
test(123)           // assertion failed<font></font>
test(0)             // assertion failed<font></font>
test(/some regex/)  <font></font>
test([ 5, 6 ])      <font></font>
test({ a: 1 })      <font></font>
test(x =&gt; x + 1)    </code></pre>
</div>
</div>
<p></p>

<p>But, checking for <strong>Array</strong> is a bit different -</p>

<pre><code>Array.isArray(x) === x // true, if x is an array<font></font>
                       // false in every other case<font></font>
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const test = x =&gt;<font></font>
  console.assert<font></font>
    ( Array.isArray(x)<font></font>
    , `not an array: ${x}`<font></font>
    )<font></font>
<font></font>
test("some string") // assertion failed<font></font>
test(123)           // assertion failed<font></font>
test(0)             // assertion failed<font></font>
test(/some regex/)  // assertion failed<font></font>
test([ 5, 6 ])      <font></font>
test({ a: 1 })      // assertion failed<font></font>
test(x =&gt; x + 1)    // assertion failed</code></pre>
</div>
</div>
<p></p>

<p>This technique does <em>not</em> work for <strong>Functions</strong> however -</p>

<pre><code>Function(x) === x // always false
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里A</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还发现这也很好，并且比其他示例短很多。</font></font></p>

<pre><code>if (myVar === myVar + '') {<font></font>
   //its string<font></font>
} else {<font></font>
   //its something else<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过串联空引号，它将值转换为字符串。</font><font style="vertical-align: inherit;">如果</font></font><code>myVar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经是一个字符串，则if语句成功。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德十三Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var a = new String('')<font></font>
var b = ''<font></font>
var c = []<font></font>
<font></font>
function isString(x) {<font></font>
  return x !== null &amp;&amp; x !== undefined &amp;&amp; x.constructor === String<font></font>
}<font></font>
<font></font>
console.log(isString(a))<font></font>
console.log(isString(b))<font></font>
console.log(isString(c))<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
