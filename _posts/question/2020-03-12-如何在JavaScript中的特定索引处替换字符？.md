---
layout: question
title:  如何在JavaScript中的特定索引处替换字符？
date:   2020-03-12T08:06:25.000Z
description: 我有一个字符串，假设Hello world我需要替换索引3处的char。如何通过指定索引来替换char？var str = "hello world"...
img: 
author: JinJinPro
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个字符串，假设</font></font><code>Hello world</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要替换索引3处的char。如何通过指定索引来替换char？</font></font></p>

<pre><code>var str = "hello world";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要类似的东西</font></font></p>

<pre><code>str.replaceAt(0,"h");
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1109篇《如何在JavaScript中的特定索引处替换字符？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子古一蛋蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>The methods on here are complicated.
I would do it this way:</p>

<pre><code>var myString = "this is my string";<font></font>
myString = myString.replace(myString.charAt(number goes here), "insert replacement here");<font></font>
</code></pre>

<p>This is as simple as it gets.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilGreen</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>I know this is old but the solution does not work for negative index so I add a patch to it. hope it helps someone</p>

<pre><code>String.prototype.replaceAt=function(index, character) {<font></font>
    if(index&gt;-1) return this.substr(0, index) + character + this.substr(index+character.length);<font></font>
    else return this.substr(0, this.length+index) + character + this.substr(index+character.length);<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Tom猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>If you want to replace characters in string, you should create mutable strings. These are essentially character arrays. You could create a factory:</p>

<pre><code>  function MutableString(str) {<font></font>
    var result = str.split("");<font></font>
    result.toString = function() {<font></font>
      return this.join("");<font></font>
    }<font></font>
    return result;<font></font>
  }<font></font>
</code></pre>

<p>Then you can access the characters and the whole array converts to string when used as string:</p>

<pre><code>  var x = MutableString("Hello");<font></font>
  x[0] = "B"; // yes, we can alter the character<font></font>
  x.push("!"); // good performance: no new string is created<font></font>
  var y = "Hi, "+x; // converted to string: "Hi, Bello!"<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>You can extend the string type to include the inset method:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>String.prototype.append = function (index,value) {<font></font>
  return this.slice(0,index) + value + this.slice(index);<font></font>
};<font></font>
<font></font>
var s = "New string";<font></font>
alert(s.append(4,"complete "));</code></pre>
</div>
</div>
<p></p>

<p>Then you can call the function:</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry小小</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里有很多答案，并且所有答案都基于两种方法：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法1：使用两个子字符串拆分字符串，并将字符填充在它们之间</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法2：将字符串转换为字符数组，替换一个数组成员并将其加入</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我个人将在不同情况下使用这两种方法。</font><font style="vertical-align: inherit;">让我解释。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@FabioPhms：您的方法是我最初使用的方法，我担心它对包含许多字符的字符串不利。</font><font style="vertical-align: inherit;">但是，问题是有多少个字符？</font><font style="vertical-align: inherit;">我在10个“ lorem ipsum”段落中对其进行了测试，并花费了几毫秒的时间。</font><font style="vertical-align: inherit;">然后我在大10倍的弦上进行了测试-确实没有太大的区别。</font><font style="vertical-align: inherit;">嗯</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ vsync，@ Cory Mawhorter：您的评论是明确的；</font><font style="vertical-align: inherit;">但是，什么是大字符串呢？</font><font style="vertical-align: inherit;">我同意对于32 ... 100kb的性能应该更好，并且应该对这一字符替换操作使用substring-variant。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果我不得不进行很多替换，将会发生什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要执行自己的测试以证明在这种情况下更快。</font><font style="vertical-align: inherit;">假设我们有一种算法，可以处理由1000个字符组成的较短字符串。</font><font style="vertical-align: inherit;">我们预计该字符串中的每个字符平均将被替换100次左右。</font><font style="vertical-align: inherit;">因此，用于测试类似代码的代码是：</font></font></p>

<pre><code>var str = "... {A LARGE STRING HERE} ...";<font></font>
<font></font>
for(var i=0; i&lt;100000; i++)<font></font>
{<font></font>
  var n = '' + Math.floor(Math.random() * 10);<font></font>
  var p = Math.floor(Math.random() * 1000);<font></font>
  // replace character *n* on position *p*<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我为此制造了一个小提琴，就在</font></font><a href="http://jsfiddle.net/ozrentk/B5Uvu/2/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有两个测试，TEST1（子字符串）和TEST2（数组转换）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TEST1：195ms</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TEST2：6ms</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组转换似乎比子字符串高2个数量级！</font><font style="vertical-align: inherit;">所以-这里到底发生了什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际发生的情况是，TEST2中的所有操作都是使用数组之类的赋值表达式在数组本身上完成的</font></font><code>strarr2[p] = n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">与大字符串上的子字符串相比，分配确实非常快，而且很明显，它会赢。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，这全都在于为工作选择合适的工具。</font><font style="vertical-align: inherit;">再次。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony樱番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>This works similar to <code>Array.splice</code>:</p>

<pre><code>String.prototype.splice = function (i, j, str) {<font></font>
    return this.substr(0, i) + str + this.substr(j, this.length);<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用向量通常最有效地联系String。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议以下功能：</font></font></p>

<pre><code>String.prototype.replaceAt=function(index, char) {<font></font>
    var a = this.split("");<font></font>
    a[index] = char;<font></font>
    return a.join("");<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行以下代码段：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>String.prototype.replaceAt=function(index, char) {<font></font>
    var a = this.split("");<font></font>
    a[index] = char;<font></font>
    return a.join("");<font></font>
}<font></font>
<font></font>
var str = "hello world";<font></font>
str = str.replaceAt(3, "#");<font></font>
<font></font>
document.write(str);</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user"> ....</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中，字符串是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不可变的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这意味着您可以做的最好的事情是创建一个具有更改内容的新字符串，然后将变量分配为指向它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要自己定义</font></font><code>replaceAt()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数：</font></font></p>

<pre><code>String.prototype.replaceAt=function(index, replacement) {<font></font>
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并像这样使用它：</font></font></p>

<pre><code>var hello="Hello World";<font></font>
alert(hello.replaceAt(2, "!!")); //should display He!!o World<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
