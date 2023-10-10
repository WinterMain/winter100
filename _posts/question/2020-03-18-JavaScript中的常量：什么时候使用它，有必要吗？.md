---
layout: question
title:  JavaScript中的常量：什么时候使用它，有必要吗？
date:   2020-03-18T08:46:05.000Z
description: 我最近遇到过constJavaScript中的关键字。据我所知，它用于创建不可变变量，并且已经过测试以确保它不能被重新定义（在Node.js中）：co...
img: 
author: 阳光Green
category: question
answer: 10
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近遇到过</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const" rel="noreferrer"><strong><code>const</code></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">关键字。</font><font style="vertical-align: inherit;">据我所知，它用于创建</font></font><a href="https://stackoverflow.com/questions/20014513/javascript-const-keyword"><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不可变变量</font></font></em></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且已经过测试以确保它不能被重新定义（在Node.js中）：</font></font></p>

<pre><code>const x = 'const';<font></font>
const x = 'not-const';<font></font>
<font></font>
// Will give an error: 'constant 'x' has already been defined'<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我意识到它尚未在所有浏览器上实现标准化-但是我只对</font></font><a href="https://nodejs.org/api/v8.html#v8_v8" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js V8</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感兴趣</font><font style="vertical-align: inherit;">，而且我注意到，某些</font></font><a href="https://github.com/mozilla/node-client-sessions/blob/master/lib/client-sessions.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发人员/项目</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎可以在将</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字用于同样的效果。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我的问题是：</font></font></h3>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么时候可以</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否应该在每次声明一个不会被重新分配的变量时使用它？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用它代替，
 </font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反之亦然吗？</font></font></li>
</ul></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2065篇《JavaScript中的常量：什么时候使用它，有必要吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony阳光</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读以下文章。它很好地说明了这一点。 
</font></font><a href="https://tylermcginnis.com/var-let-const/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">let vs var vs const</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖阿飞</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不是JS编译行业的专家，但是可以说，v8是在const标志中使用的</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，在声明并更改了一堆变量之后，内存会碎片化，并且v8停止执行，暂停几秒钟，以进行gc或垃圾回收。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用const v8声明了变量，则可以放心将其放在其他const变量之间的固定大小固定容器中，因为它永远不会改变。</font><font style="vertical-align: inherit;">由于类型不会更改，因此它还可以保存该数据类型的正确操作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva阿飞</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，三点有用的事情</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（除了与之共享的范围改进之外</font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它为以后阅读代码的人们提供了证明，该值不得更改。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可以防止您（或任何追随您的人）更改值，除非他们回去有意更改声明。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为JavaScript引擎节省一些优化方面的分析。</font><font style="vertical-align: inherit;">例如，您已经声明值不能更改，因此引擎不必做任何工作来确定值是否更改，因此引擎可以根据未更改的值来决定是否进行优化。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你的问题：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么时候可以</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做任何你声明一个变量，其值永远不会改变的时间。</font><font style="vertical-align: inherit;">您是否认为合适完全取决于您的偏好/团队的偏好。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否应该在每次声明一个不会被重新分配的变量时使用它？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这取决于您/您的团队。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>var is used in place of</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">const`或反之</font><font style="vertical-align: inherit;">则实际上有什么区别</font><font style="vertical-align: inherit;">吗？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是：</font></font></p>

<ul>
<li><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有不同的范围规则。</font><font style="vertical-align: inherit;">（您可能想与</font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font><font style="vertical-align: inherit;">进行比较</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。）特别是：</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们是块范围的，并且在全局范围内使用时，不要在全局对象上创建属性（即使它们确实创建了全局变量）。</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有全局范围（在全局范围内使用时）或函数范围（即使在块中使用），并且在全局范围内使用时，会在全局对象上创建属性。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见上面的“三件事”，它们都适用于此问题。</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无达蒙</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它提供：1）常量引用，例如const x = []-可以修改数组，但是x不能指向另一个数组；</font><font style="vertical-align: inherit;">和2）区块范围。</font><font style="vertical-align: inherit;">const和let将一起在ecma6 / 2015中替换var请参见</font><a href="https://strongloop.com/strongblog/es6-variable-declarations/" rel="nofollow"><font style="vertical-align: inherit;">https://strongloop.com/strongblog/es6-variable-declarations/中的</font></a><font style="vertical-align: inherit;">讨论</font></font><a href="https://strongloop.com/strongblog/es6-variable-declarations/" rel="nofollow"><font style="vertical-align: inherit;"></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云老丝</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">摘要： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">const创建一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不可变的绑定，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着const变量标识符不可重新分配。</font></font></p>

<pre><code>const a = "value1";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不能使用 </font></font></p>

<pre><code>a = "value2";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果const标识符包含对象或数组，则只要我们不重新分配它，就可以更改其值。</font></font></p>

<pre><code>const x = { a: 1 }<font></font>
<font></font>
x.a = 2; //is possible and allowed<font></font>
<font></font>
const numbers = [1, 2];<font></font>
numbers.push(3); //is possible and allowed<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">const</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块级作用域</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，就像</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">let</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一样，</font><font style="vertical-align: inherit;">  它</font><font style="vertical-align: inherit;">与</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">var</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（它是函数作用域）不同</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之，当某些事情不太可能</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过重新分配</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而</font><strong><font style="vertical-align: inherit;">改变时，请</font></strong><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">const，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则</font><font style="vertical-align: inherit;">根据您希望的范围</font><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">let</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">var</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当代码死了很明显时，通过重新分配可以更改哪些内容以及不能更改哪些内容，就可以更容易地对代码进行推理。</font><font style="vertical-align: inherit;">将const更改为let非常简单。</font><font style="vertical-align: inherit;">默认情况下使用const会使您在进行此操作之前三思而后行。</font><font style="vertical-align: inherit;">在许多情况下，这是一件好事。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi猿</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实是个人喜好。</font><font style="vertical-align: inherit;">如您所说，可以在不重新分配常量且常量的情况下使用const。</font><font style="vertical-align: inherit;">例如，如果您想分配生日。</font><font style="vertical-align: inherit;">您的生日永远不会改变，因此您可以将其用作常量。</font><font style="vertical-align: inherit;">但是您的年龄确实发生了变化，因此可能会有所不同。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐十三</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">var</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：声明一个变量，值初始化为可选。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">let</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：声明一个具有块范围的局部变量。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">const</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：声明一个只读的命名常量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>var a;<font></font>
a = 1;<font></font>
a = 2;//re-initialize possible<font></font>
var a = 3;//re-declare<font></font>
console.log(a);//3<font></font>
<font></font>
let b;<font></font>
b = 5;<font></font>
b = 6;//re-initiliaze possible<font></font>
// let b = 7; //re-declare not possible<font></font>
console.log(b);<font></font>
<font></font>
// const c;<font></font>
// c = 9;   //initialization and declaration at same place<font></font>
const c = 9;<font></font>
// const c = 9;// re-declare and initialization is not possible<font></font>
console.log(c);//9<font></font>
// NOTE: Constants can be declared with uppercase or lowercase, but a common<font></font>
// convention is to use all-uppercase letters.<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid乐宝儿</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您有很好的答案，但让我们保持简单。</font></font></p>

<p><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 当您有一个已定义的常量时应使用（读为：在程序执行期间它不会更改）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>const pi = 3.1415926535
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您认为在以后执行时可能会更改某些内容，请使用</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据示例，实际的区别在于，</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将始终假设pi为3.14 [...]，这是事实。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果将其定义为</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可能不是3.14 [...]。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于更多的技术答案，@ Tibos在学术上是正确的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomDavaid</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一成不变的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">const声明创建对值的只读引用。</font><font style="vertical-align: inherit;">这并不意味着它拥有的值是不可变的，只是不能重新分配变量标识符。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁JinJinHarry</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的问题有两个方面：</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font><font style="vertical-align: inherit;">使用的技术方面是</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">以及与人为因素相关的方面是什么。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">技术差异很大。</font><font style="vertical-align: inherit;">在编译语言中，常量将在编译时被替换，并且其使用将允许其他优化（如删除无效代码）以进一步提高代码的运行效率。</font><font style="vertical-align: inherit;">最近的（松散使用的术语）JavaScript引擎实际上会编译JS代码以获得更好的性能，因此使用const关键字将告知它们上述优化是可能的，应该完成。</font><font style="vertical-align: inherit;">这导致更好的性能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与人有关的方面与关键字的语义有关。</font><font style="vertical-align: inherit;">变量是一种数据结构，其中包含预期会更改的信息。</font><font style="vertical-align: inherit;">常数是一种数据结构，其中包含永远不变的信息。</font><font style="vertical-align: inherit;">如果有错误的余地，</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应始终使用。</font><font style="vertical-align: inherit;">但是，并非必须使用声明所有在程序生存期内从未改变的信息</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果在不同的情况下信息应该更改，</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使实际的更改未出现在您的代码中，也请</font><font style="vertical-align: inherit;">使用该信息</font><font style="vertical-align: inherit;">进行指示。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
