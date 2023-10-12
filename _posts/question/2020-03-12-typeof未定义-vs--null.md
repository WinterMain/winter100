---
layout: question
title:  typeof！==“未定义” vs. = null
date:   2020-03-12T10:39:48.000Z
description: 我经常看到JavaScript代码以这种方式检查未定义的参数等：if (typeof input \!== "undefined") {    // ...
img: 
author: 猴子十三
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我经常看到JavaScript代码以这种方式检查未定义的参数等：</font></font></p>

<pre><code>if (typeof input !== "undefined") {<font></font>
    // do stuff<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这似乎有点浪费，因为它涉及类型查找和字符串比较，更不用说它的冗长了。</font><font style="vertical-align: inherit;">这是必需的，因为</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以重命名。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是：</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
与该方法相比，该代码有何优势：</font></font></p>

<pre><code>if (null != input) {<font></font>
    // do stuff<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知，您无法重新定义</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此不会意外中断。</font><font style="vertical-align: inherit;">并且，由于</font></font><code>!=</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符</font><font style="vertical-align: inherit;">的类型强制</font><font style="vertical-align: inherit;">，这将同时检查</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...，这通常正是您想要的（例如，用于可选功能参数）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这种形式似乎并不广泛，甚至会导致JSLint对使用邪恶</font></font><code>!=</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符的人</font><font style="vertical-align: inherit;">大吼大叫</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么认为这种风格不好？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1291篇《typeof！==“未定义” vs. = null》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪路易</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>if (input == undefined) { ... }
</code></pre>

<p>works just fine. It is of course not a <code>null</code> comparison, but I usually find that if I need to distinguish between <code>undefined</code> and <code>null</code>, I actually rather need to distinguish between <code>undefined</code> and just any false value, so</p>

<pre><code>else if (input) { ... }
</code></pre>

<p>does it.</p>

<p>If a program redefines <code>undefined</code> it is really braindead anyway.</p>

<p>The only reason I can think of was for IE4 compatibility, it did not understand the <code>undefined</code> keyword (which is not actually a keyword, unfortunately), but of course values could <em>be</em> <code>undefined</code>, so you had to have this:</p>

<pre><code>var undefined;
</code></pre>

<p>and the comparison above would work just fine.</p>

<p>In your second example, you probably need double parentheses to make lint happy?</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖泡芙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var bar = null;<font></font>
console.log(typeof bar === "object"); //true yes <font></font>
//because null a datatype of object<font></font>
<font></font>
var barf = "dff";<font></font>
console.log(typeof barf.constructor);//function<font></font>
<font></font>
<font></font>
console.log(Array.isArray(bar));//falsss<font></font>
<font></font>
<font></font>
console.log((bar !== null) &amp;&amp; (bar.constructor === Object)); //false<font></font>
<font></font>
console.log((bar !== null) &amp;&amp; (typeof bar === "object"));  // logs false<font></font>
//because bar!==null, bar is a object<font></font>
<font></font>
<font></font>
console.log((bar !== null) &amp;&amp; ((typeof bar === "object") || (typeof bar === "function"))); //false<font></font>
<font></font>
console.log(typeof bar === typeof object); //false<font></font>
console.log(typeof bar2 === typeof undefined); //true<font></font>
console.log(typeof bar3 === typeof undefinedff); //true<font></font>
console.log(typeof bar2 == typeof undefined); //true<font></font>
<font></font>
console.log((bar !== null) &amp;&amp; (typeof bar === "object") &amp;&amp; (toString.call(bar) !== "[object Array]")); //false</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">王者一打九银</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您真的担心未定义会被重新定义，则可以使用以下帮助方法来防止这种情况：</font></font></p>

<pre><code>function is_undefined(value) {<font></font>
   var undefined_check; // instantiate a new variable which gets initialized to the real undefined value<font></font>
   return value === undefined_check;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之所以如此，是因为有人写的时候，</font></font><code>undefined = "foo"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他只允许</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">名称</font></font></strong> <code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用一个新值，但他不更改的实际值</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ALPro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用void运算符获取未定义的值：</font></font></p>

<pre><code>if (input !== void 0) {<font></font>
    // do stuff    <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（是的，正如在另一个答案中指出的那样，如果未声明变量，这将引发错误，但是这种情况通常可以通过代码检查或代码重构（例如</font></font><code>window.input !== void 0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于测试全局变量或添加</font></font><code>var input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">来排除</font><font style="vertical-align: inherit;">。）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好办法：</font></font></p>

<pre><code>if(typeof neverDeclared == "undefined") //no errors
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是最好看的方法是通过检查：</font></font></p>

<pre><code>if(typeof neverDeclared === typeof undefined) //also no errors and no strings
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天LEY逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><code>typeof</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 更安全，因为它允许从未声明过标识符：</font></font></p>

<pre><code>if(typeof neverDeclared === "undefined") // no errors<font></font>
<font></font>
if(neverDeclared === null) // throws ReferenceError: neverDeclared is not defined<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
