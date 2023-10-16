---
layout: question
title:  检查值是否是JavaScript中的对象
date:   2020-03-09T13:52:36.000Z
description: 如何检查值是否是JavaScript中的Object？...
img: 
author: GilTomL
category: question
answer: 10
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何检查值是否是JavaScript中的Object？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第290篇《检查值是否是JavaScript中的对象》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>If you are already using AngularJS then it has a built in method which will check if its an object (without accepting null). </p>

<pre><code>angular.isObject(...)
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyEva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>What I like to use is this</p>

<pre><code>function isObject (obj) {<font></font>
  return typeof(obj) == "object" <font></font>
        &amp;&amp; !Array.isArray(obj) <font></font>
        &amp;&amp; obj != null <font></font>
        &amp;&amp; obj != ""<font></font>
        &amp;&amp; !(obj instanceof String)  }<font></font>
</code></pre>

<p>I think in most of the cases a Date must pass the check as an Object, so I do not filter dates out</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村神无猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当其他所有方法都失败时，我将使用以下方法：</font></font></p>

<pre><code>var isObject = function(item) {<font></font>
   return item.constructor.name === "Object";<font></font>
}; <font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村凯宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将起作用。</font><font style="vertical-align: inherit;">它是一个返回true，false或可能为null的函数。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const isObject = obj =&gt; obj &amp;&amp; obj.constructor &amp;&amp; obj.constructor === Object;<font></font>
<font></font>
console.log(isObject({})); // true<font></font>
console.log(isObject([])); // false<font></font>
console.log(isObject(new Function)); // false<font></font>
console.log(isObject(new Number(123))); // false<font></font>
console.log(isObject(null)); // null</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天古一Mandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">lodash具有</font></font><a href="https://lodash.com/docs#isPlainObject" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">isPlainObject</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这可能是许多访问此页面的人正在寻找的东西。</font><font style="vertical-align: inherit;">给定函数或数组时返回false。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var a = [1]<font></font>
typeof a //"object"<font></font>
a instanceof Object //true<font></font>
a instanceof Array //true<font></font>
<font></font>
var b ={a: 1}<font></font>
b instanceof Object //true<font></font>
b instanceof Array //false<font></font>
<font></font>
var c = null<font></font>
c instanceof Object //false<font></font>
c instanceof Array //false<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我被要求提供更多细节。</font><font style="vertical-align: inherit;">检查我们的变量是否为对象的最简洁，可理解的方法是</font></font><code>typeof myVar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它返回一个字符串类型（例如</font></font><code>"object"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>"undefined"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是Array和null也都有一个type </font></font><code>object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">要仅获取真实对象，需要使用</font></font><code>instanceof</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符</font><font style="vertical-align: inherit;">检查继承链</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它将消除null，但是Array在继承链中具有Object。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以解决方案是：</font></font></p>

<pre><code>if (myVar instanceof Object &amp;&amp; !(myVar instanceof Array)) {<font></font>
  // code for objects<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOItachi</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哦，我的上帝！</font><font style="vertical-align: inherit;">我认为这可能比以往更短，让我们看一下：</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简短代码和最终代码</font></font></h1>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function isObject(obj)<font></font>
{<font></font>
    return obj != null &amp;&amp; obj.constructor.name === "Object"<font></font>
}<font></font>
<font></font>
console.log(isObject({})) // returns true<font></font>
console.log(isObject([])) // returns false<font></font>
console.log(isObject(null)) // returns false</code></pre>
</div>
</div>
<p></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释</font></font></h1>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回类型</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型的JavaScript对象（包括</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）返回</font></font><code>"object"</code></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.log(typeof null, typeof [], typeof {})</code></pre>
</div>
</div>
<p></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查他们的构造函数</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查其</font></font><code>constructor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性将返回具有其名称的函数。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.log(({}).constructor) // returns a function with name "Object"<font></font>
console.log(([]).constructor) // returns a function with name "Array"<font></font>
console.log((null).constructor) //throws an error because null does not actually have a property</code></pre>
</div>
</div>
<p></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引入Function.name</font></font></h2>

<p><code>Function.name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回函数或</font></font><code>"anonymous"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">闭包</font><font style="vertical-align: inherit;">的只读名称</font><font style="vertical-align: inherit;">。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.log(({}).constructor.name) // returns "Object"<font></font>
console.log(([]).constructor.name) // returns "Array"<font></font>
console.log((null).constructor.name) //throws an error because null does not actually have a property</code></pre>
</div>
</div>
<p></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从2018年开始，Function.name在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE </font></font></strong> <font style="vertical-align: inherit;"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#Browser_compatibility" rel="noreferrer"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/name#Browser_compatibility中</font></a><font style="vertical-align: inherit;">可能不起作用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#Browser_compatibility" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamStafan十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我很喜欢： </font></font></p>

<pre><code>function isObject (item) {<font></font>
  return (typeof item === "object" &amp;&amp; !Array.isArray(item) &amp;&amp; item !== null);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果该项目是JS对象，并且不是JS数组，并且不是</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">…如果所有三个证明都是正确的，则返回</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果这三个条件中的任何一个失败，则</font></font><code>&amp;&amp;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试将短路并</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回。</font><font style="vertical-align: inherit;">在</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果需要的话（这取决于你如何使用测试可以省略</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOCS： </font></font></p>

<p><a href="http://devdocs.io/javascript/operators/typeof" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://devdocs.io/javascript/operators/typeof</font></font></a></p>

<p><a href="http://devdocs.io/javascript/global_objects/object" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://devdocs.io/javascript/global_objects/object</font></font></a></p>

<p><a href="http://devdocs.io/javascript/global_objects/array/isarray" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://devdocs.io/javascript/global_objects/array/isarray</font></font></a></p>

<p><a href="http://devdocs.io/javascript/global_objects/null" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://devdocs.io/javascript/global_objects/null</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小小十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>Object.prototype.toString.call(myVar)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 将返回：</font></font></p>

<ul>
<li><code>"[object Object]"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 如果myVar是对象</font></font></li>
<li><code>"[object Array]"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 如果myVar是一个数组</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等等</font></font></li>
</ul>

<p>For more information on this and why it is a good alternative to typeof, <a href="http://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/" rel="noreferrer">check out this article</a>.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenSam</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个答案是不完整的，并且会产生误导性的结果</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如，</font><font style="vertical-align: inherit;">在JavaScript中</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也被视为类型</font></font><code>object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，更不用说其他几种极端情况了。</font><font style="vertical-align: inherit;">请遵循以下建议，然后转到其他</font></font><strong><a href="https://stackoverflow.com/a/8511350/2336212"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“最受好评（并且正确！）的答案”</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原始答案</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试使用</font></font><code>typeof(var)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和/或</font></font><code>var instanceof something</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：这个答案给出了一个如何检查变量属性的想法，但是它</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">防弹配方（毕竟根本没有配方！）来检查它是否是一个对象，而不是对象。</font><font style="vertical-align: inherit;">由于人们倾向于在不做任何研究的情况下从这里寻找要复制的东西，因此我强烈建议他们转向另一个最受好评（也是正确的答案）的答案。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
