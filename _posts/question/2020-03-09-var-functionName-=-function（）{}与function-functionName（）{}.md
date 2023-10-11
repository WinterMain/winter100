---
layout: question
title:  var functionName = function（）{}与function functionName（）{}
date:   2020-03-09T04:13:29.000Z
description: 我最近开始维护别人的JavaScript代码。我正在修复错误，添加功能，还试图整理代码并使之更加一致。以前的开发人员使用了两种方法来声明函数，如果有背...
img: 
author: 猴子神乐
category: question
answer: 18
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近开始维护别人的JavaScript代码。</font><font style="vertical-align: inherit;">我正在修复错误，添加功能，还试图整理代码并使之更加一致。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以前的开发人员使用了两种方法来声明函数，如果有背后的原因，我将无法解决。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两种方式是：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> functionOne </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="com">// Some code</span><span class="pln">
</span><span class="pun">};</span></code></pre>



<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> functionTwo</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="com">// Some code</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用这两种不同方法的原因是什么，每种方法的利弊是什么？</font><font style="vertical-align: inherit;">有什么方法可以用一种方法不能完成的吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第136篇《var functionName = function（）{}与function functionName（）{}》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙老丝</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>new Function()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可用于在字符串中传递函数的主体。</font><font style="vertical-align: inherit;">因此，可以将其用于创建动态功能。</font><font style="vertical-align: inherit;">还传递脚本而不执行脚本。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> func </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">Function</span><span class="pun">(</span><span class="str">"x"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"y"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"return x*y;"</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">function</span><span class="pln"> secondFunction</span><span class="pun">(){</span><span class="pln">
   </span><span class="kwd">var</span><span class="pln"> result</span><span class="pun">;</span><span class="pln">
   result </span><span class="pun">=</span><span class="pln"> func</span><span class="pun">(</span><span class="lit">10</span><span class="pun">,</span><span class="lit">20</span><span class="pun">);</span><span class="pln">
   console</span><span class="pun">.</span><span class="pln">log </span><span class="pun">(</span><span class="pln"> result </span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

secondFunction</span><span class="pun">()</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">--神经Xiao--</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这只是声明函数的两种可能方法，第二种方法是可以在声明之前使用该函数。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于效果：</font></font></em></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新版本</font></font><code>V8</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引入了一些后台优化，因此也进行了优化</font></font><code>SpiderMonkey</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，表达式和声明之间几乎没有区别。</font><font style="vertical-align: inherit;">现在</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数表达</font></font><a href="https://jsperf.com/fdeclaration-vs-fexpression" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎更快</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">铬62.0.3202</font></font></em></strong>
<a href="https://i.stack.imgur.com/lW91X.png" rel="noreferrer" data-bitapp="processed"><img src="https://i.stack.imgur.com/lW91X.png" alt="镀铬测试"></a></p>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">火狐55</font></font></em></strong>
<a href="https://i.stack.imgur.com/po3gG.png" rel="noreferrer" data-bitapp="processed"><img src="https://i.stack.imgur.com/po3gG.png" alt="Firefox测试"></a></p>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">铬金丝雀63.0.3225</font></font></em></strong>
<a href="https://i.stack.imgur.com/lcPvN.png" rel="noreferrer" data-bitapp="processed"><img src="https://i.stack.imgur.com/lcPvN.png" alt="Chrome Canary测试"></a></p>

<p><br></p>

<blockquote>
  <p><code>Anonymous</code> function expressions <a href="https://jsperf.com/named-vs-anonymous-expressions" rel="noreferrer" data-bitapp="processed">appear to have better performance</a>
  against <code>Named</code> function expression.</p>
</blockquote>

<p><br></p>

<p><strong><em>Firefox</em></strong>
<a href="https://i.stack.imgur.com/npaAl.png" rel="noreferrer" data-bitapp="processed"><img src="https://i.stack.imgur.com/npaAl.png" alt="Firefox named_anonymous"></a>
<strong><em>Chrome Canary</em></strong>
<a href="https://i.stack.imgur.com/6YkeY.png" rel="noreferrer" data-bitapp="processed"><img src="https://i.stack.imgur.com/6YkeY.png" alt="Chrome金丝雀named_anonymous"></a>
<strong><em>Chrome</em></strong>
<a href="https://i.stack.imgur.com/x9H8J.png" rel="noreferrer" data-bitapp="processed"><img src="https://i.stack.imgur.com/x9H8J.png" alt="Chrome named_anonymous"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">eva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者都是定义函数的不同方式。</font><font style="vertical-align: inherit;">不同之处在于浏览器如何解释它们并将其加载到执行上下文中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一种情况是函数表达式，仅在解释器到达该行代码时才加载。</font><font style="vertical-align: inherit;">因此，如果您按照以下方式进行操作，则会收到错误消息，认为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">functionOne不是function</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">functionOne</span><span class="pun">();</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> functionOne </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="com">// Some code</span><span class="pln">
</span><span class="pun">};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原因是在第一行没有将任何值分配给functionOne，因此未定义。</font><font style="vertical-align: inherit;">我们试图将其称为函数，因此会出现错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在第二行中，我们将匿名函数的引用分配给functionOne。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二种情况是在执行任何代码之前加载的函数声明。</font><font style="vertical-align: inherit;">因此，如果您喜欢以下代码，则在代码执行之前加载声明不会有任何错误。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">functionOne</span><span class="pun">();</span><span class="pln">
</span><span class="kwd">function</span><span class="pln"> functionOne</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
   </span><span class="com">// Some code</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamStafan十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中，有两种创建函数的方法：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数声明：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> fn</span><span class="pun">(){</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"Hello"</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
fn</span><span class="pun">();</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是非常基本的，不言自明的，用于多种语言，并跨C语言族成为标准。</font><font style="vertical-align: inherit;">我们声明了一个定义它的函数，并通过调用它来执行它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该知道的是，函数实际上是JavaScript中的对象。</font><font style="vertical-align: inherit;">在内部，我们为上述函数创建了一个对象，并为其指定了名称fn或对该对象的引用存储在fn中。</font><font style="vertical-align: inherit;">函数是JavaScript中的对象；</font><font style="vertical-align: inherit;">函数的实例实际上是一个对象实例。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数表达式：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> fn</span><span class="pun">=</span><span class="kwd">function</span><span class="pun">(){</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"Hello"</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
fn</span><span class="pun">();</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript具有一流的函数，即创建函数并将其分配给变量，就像创建字符串或数字并将其分配给变量一样。</font><font style="vertical-align: inherit;">在此，将fn变量分配给一个函数。</font><font style="vertical-align: inherit;">这个概念的原因是函数是JavaScript中的对象。</font><font style="vertical-align: inherit;">fn指向上述函数的对象实例。</font><font style="vertical-align: inherit;">我们已经初始化了一个函数并将其分配给变量。</font><font style="vertical-align: inherit;">它没有执行功能并没有分配结果。</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font></font><em><a href="http://jkoder.com/javascript-function-declaration-syntax-var-fn-function-vs-function-fn/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript函数声明语法：var fn = function（）{} vs function fn（）{}</font></font></a></em></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋LEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>The first one (function doSomething(x)) should be part of an object notation.</p>

<p>The second one (<code>var doSomething = function(x){ alert(x);}</code>) is simply creating an anonymous function and assigning it to a variable, <code>doSomething</code>. So doSomething() will call the function.</p>

<p>You may want to know what a <em>function declaration</em> and <em>function expression</em> is.</p>

<p>A function declaration defines a named function variable without requiring variable assignment. Function declarations occur as standalone constructs and cannot be nested within non-function blocks.</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> foo</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">3</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<blockquote>
  <p>ECMA 5 (13.0) defines the syntax as <br>
  function Identifier ( FormalParameterList<sub>opt</sub> ) { FunctionBody }</p>
</blockquote>

<p>In above condition the function name is visible within its scope and the scope of its parent (otherwise it would be unreachable).</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在函数表达式中</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数表达式将函数定义为较大的表达式语法（通常是变量赋值）的一部分。</font><font style="vertical-align: inherit;">通过函数表达式定义的函数可以命名或匿名。</font><font style="vertical-align: inherit;">函数表达式不应以“ function”开头。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="com">// Anonymous function expression</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">3</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="com">// Named function expression</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> foo</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">3</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="com">// Self-invoking function expression</span><span class="pln">
</span><span class="pun">(</span><span class="kwd">function</span><span class="pln"> foo</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    alert</span><span class="pun">(</span><span class="str">"hello!"</span><span class="pun">);</span><span class="pln">
</span><span class="pun">})();</span></code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMA 5（13.0）将语法定义为</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  函数标识符</font></font><sub><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">opt</font></font></sub><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（FormalParameterList </font></font><sub><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">opt</font></font></sub><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）{FunctionBody}</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用这些函数创建对象，则会得到：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> objectOne </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> functionOne</span><span class="pun">();</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">objectOne</span><span class="pun">.</span><span class="pln">__proto__</span><span class="pun">);</span><span class="pln"> </span><span class="com">// prints "Object {}" because constructor is an anonymous function</span><span class="pln">

</span><span class="kwd">var</span><span class="pln"> objectTwo </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> functionTwo</span><span class="pun">();</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">objectTwo</span><span class="pun">.</span><span class="pln">__proto__</span><span class="pun">);</span><span class="pln"> </span><span class="com">// prints "functionTwo {}" because constructor is a named function</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他答案中未提及的另一个区别是，如果您使用匿名函数</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> functionOne </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="com">// Some code</span><span class="pln">
</span><span class="pun">};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将其用作构造函数，如</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> one </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> functionOne</span><span class="pun">();</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么</font></font><code>one.constructor.name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将不会被定义。</font></font><code>Function.name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是非标准的，但受Firefox，Chrome，其他Webkit衍生的浏览器和IE 9+支持。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用 </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> functionTwo</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="com">// Some code</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
two </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> functionTwo</span><span class="pun">();</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用来检索构造函数的名称作为字符串</font></font><code>two.constructor.name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐阿飞</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在代码中使用可变方法的原因非常特殊，上面已以抽象的方式介绍了该方法的理论，但是一个示例可能会帮助一些像我这样的人，但是他们的JavaScript专业知识有限。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有需要与160个独立设计的品牌一起运行的代码。</font><font style="vertical-align: inherit;">大多数代码位于共享文件中，而与品牌有关的内容位于单独的文件中，每个品牌一个。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有些品牌需要特定的功能，而有些则不需要。</font><font style="vertical-align: inherit;">有时，我必须添加新功能来进行特定于品牌的事情。</font><font style="vertical-align: inherit;">我很乐意更改共享编码，但是我不想更改所有160套品牌文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过使用变量语法，我可以在共享代码中声明变量（本质上是一个函数指针），然后分配一个琐碎的存根函数，或者设置为null。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，需要该功能的特定实现的一个或两个品牌可以定义其功能版本，然后根据需要将其分配给变量，其余的则不执行任何操作。</font><font style="vertical-align: inherit;">我可以在共享代码中执行null函数之前对其进行测试。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从上面的评论中，我认为也许也可以重新定义静态函数，但是我认为变量解决方案很好而且很明确。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一L</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用计算机科学术语，我们谈论匿名函数和命名函数。</font><font style="vertical-align: inherit;">我认为最重要的区别是匿名函数未绑定到名称，因此名称匿名函数。</font><font style="vertical-align: inherit;">在JavaScript中，它是在运行时动态声明的一流对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关匿名函数和lambda演算的更多信息，Wikipedia是一个好的开始（</font></font><a href="http://en.wikipedia.org/wiki/Anonymous_function" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://en.wikipedia.org/wiki/Anonymous_function</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就代码维护成本而言，更可取的是命名函数：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与声明它们的位置无关（但仍受范围限制）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更能抵抗诸如条件初始化之类的错误（如果需要，您仍然可以覆盖）。</font></font></li>
<li>The code becomes more readable by allocating local functions separately of scope functionality. Usually in the scope the functionality goes first, followed by declarations of local functions.</li>
<li>In a debugger you will clearly see the function name on the call stack instead of an "anonymous/evaluated" function.</li>
</ul>

<p>I suspect more PROS for named functions are follow. And what is listed as an advantage of named functions is a disadvantage for anonymous ones.</p>

<p>Historically, anonymous functions appeared from the inability of JavaScript as a language to list members with named functions:</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">{</span><span class="pln">
    member</span><span class="pun">:</span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="com">/* How do I make "this.member" a named function? */</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建立绑定后，分配给变量的函数声明和函数表达式的行为相同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，</font><font style="vertical-align: inherit;">在功能对象实际与其变量相关联的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方式</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时间方面</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存在差异</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这种差异是由于</font><font style="vertical-align: inherit;">JavaScript中</font><font style="vertical-align: inherit;">称为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量提升</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的机制引起的</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，所有函数声明和变量声明都被提升到声明所在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的顶部</font><font style="vertical-align: inherit;">（这就是我们说JavaScript具有</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数作用域的原因</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吊起函数声明时，函数主体将“跟随”，因此在评估函数主体时，变量将立即绑定到函数对象。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当一个变量声明悬挂，初始化并</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
跟随，而是“留下”。</font><font style="vertical-align: inherit;">将该变量初始化为
 </font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数体的开头，并将</font><font style="vertical-align: inherit;">
在代码的原始位置为其</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分配</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个值。</font><font style="vertical-align: inherit;">（实际上，将在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">声明具有相同名称的变量的</font><em><font style="vertical-align: inherit;">每个</font></em><font style="vertical-align: inherit;">位置</font><font style="vertical-align: inherit;">分配一个值</font><font style="vertical-align: inherit;">。）</font></font></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提升的顺序也很重要：函数声明优先于具有相同名称的变量声明，而最后一个函数声明优先于具有相同名称的先前函数声明。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些例子...</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> foo </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">function</span><span class="pln"> bar</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(!</span><span class="pln">foo</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> foo </span><span class="pun">=</span><span class="pln"> </span><span class="lit">10</span><span class="pln"> </span><span class="pun">}</span><span class="pln">
  </span><span class="kwd">return</span><span class="pln"> foo</span><span class="pun">;</span><span class="pln"> </span><span class="pun">}</span><span class="pln">
bar</span><span class="pun">()</span><span class="pln"> </span><span class="com">// 10</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量</font></font><code>foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被提升到函数的顶部，初始化为</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>!foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即为</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">so </font></font><code>foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">赋值</font></font><code>10</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">范围</font><font style="vertical-align: inherit;">的</font></font><code>foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">外部</font></font><code>bar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不起任何作用，并且没有受到影响。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> f</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">return</span><span class="pln"> a</span><span class="pun">;</span><span class="pln"> 
  </span><span class="kwd">function</span><span class="pln"> a</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="kwd">return</span><span class="pln"> </span><span class="lit">1</span><span class="pun">};</span><span class="pln"> 
  </span><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">4</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">function</span><span class="pln"> a</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="kwd">return</span><span class="pln"> </span><span class="lit">2</span><span class="pun">}}</span><span class="pln">
f</span><span class="pun">()()</span><span class="pln"> </span><span class="com">// 2</span><span class="pln">

</span><span class="kwd">function</span><span class="pln"> f</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">return</span><span class="pln"> a</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">4</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">function</span><span class="pln"> a</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="kwd">return</span><span class="pln"> </span><span class="lit">1</span><span class="pun">};</span><span class="pln">
  </span><span class="kwd">function</span><span class="pln"> a</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="kwd">return</span><span class="pln"> </span><span class="lit">2</span><span class="pun">}}</span><span class="pln">
f</span><span class="pun">()()</span><span class="pln"> </span><span class="com">// 2</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数声明优先于变量声明，最后一个函数声明为“ sticks”。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> f</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">4</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">function</span><span class="pln"> a</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="kwd">return</span><span class="pln"> </span><span class="lit">1</span><span class="pun">};</span><span class="pln"> 
  </span><span class="kwd">function</span><span class="pln"> a</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="kwd">return</span><span class="pln"> </span><span class="lit">2</span><span class="pun">};</span><span class="pln"> 
  </span><span class="kwd">return</span><span class="pln"> a</span><span class="pun">;</span><span class="pln"> </span><span class="pun">}</span><span class="pln">
f</span><span class="pun">()</span><span class="pln"> </span><span class="com">// 4</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此示例</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中，使用通过评估第二个函数声明得到的函数对象进行初始化，然后分配</font></font><code>4</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">function</span><span class="pln"> b</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">10</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">return</span><span class="pun">;</span><span class="pln">
  </span><span class="kwd">function</span><span class="pln"> a</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{}}</span><span class="pln">
b</span><span class="pun">();</span><span class="pln">
a </span><span class="com">// 1</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里首先悬挂函数声明，然后声明和初始化变量</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">接下来，分配此变量</font></font><code>10</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">换句话说：分配没有分配给外部变量</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个重要的原因是添加一个且仅一个变量作为名称空间的“根”。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> </span><span class="typ">MyNamespace</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{}</span><span class="pln">
</span><span class="typ">MyNamespace</span><span class="pun">.</span><span class="pln">foo</span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">

</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> </span><span class="typ">MyNamespace</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  foo</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="pun">},</span><span class="pln">
  </span><span class="pun">...</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有很多命名空间的技术。</font><font style="vertical-align: inherit;">随着大量可用JavaScript模块的出现，这一点变得越来越重要。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另请参阅</font></font><em><a href="https://stackoverflow.com/questions/881515/" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在JavaScript中声明名称空间？</font></font></a></em></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您需要避免覆盖函数的先前定义时，最好使用第一种方法而不是第二种方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">condition</span><span class="pun">){</span><span class="pln">
    </span><span class="kwd">function</span><span class="pln"> myfunction</span><span class="pun">(){</span><span class="pln">
        </span><span class="com">// Some code</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，此定义</font></font><code>myfunction</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将覆盖任何先前的定义，因为它将在解析时完成。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">condition</span><span class="pun">){</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> myfunction </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(){</span><span class="pln">
        </span><span class="com">// Some code</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做正确的工作，</font></font><code>myfunction</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只</font><font style="vertical-align: inherit;">定义</font><font style="vertical-align: inherit;">何时</font></font><code>condition</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">满足。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他评论者已经涵盖了以上两个变体的语义差异。</font><font style="vertical-align: inherit;">我想指出一种风格上的差异：只有“赋值”变体可以设置另一个对象的属性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我经常用以下模式构建JavaScript模块：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">(</span><span class="kwd">function</span><span class="pun">(){</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> exports </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{};</span><span class="pln">

    </span><span class="kwd">function</span><span class="pln"> privateUtil</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            </span><span class="pun">...</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">

    exports</span><span class="pun">.</span><span class="pln">publicUtil </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
            </span><span class="pun">...</span><span class="pln">
    </span><span class="pun">};</span><span class="pln">

    </span><span class="kwd">return</span><span class="pln"> exports</span><span class="pun">;</span><span class="pln">
</span><span class="pun">})();</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用这种模式，您的公共函数将全部使用赋值，而您的私有函数将使用声明。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（还请注意，在声明之后，赋值应使用分号，而在声明中则禁止使用分号。）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEvaGreen</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><a href="https://stackoverflow.com/a/336868/2351696" data-bitapp="processed"><font style="vertical-align: inherit;">格雷格答案的</font></a><font style="vertical-align: inherit;">更好解释</font></font><a href="https://stackoverflow.com/a/336868/2351696" data-bitapp="processed"><font style="vertical-align: inherit;"></font></a></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">functionTwo</span><span class="pun">();</span><span class="pln">
</span><span class="kwd">function</span><span class="pln"> functionTwo</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么没有错误？</font><font style="vertical-align: inherit;">我们总是被教导表达式从上到下执行（??）</font></font></strong></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为：</font></font></h2>

<blockquote>
  <p><font style="vertical-align: inherit;"></font><code>hoisted</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript解释器</font><font style="vertical-align: inherit;">总是将函数声明和变量声明</font><font style="vertical-align: inherit;">不可见地</font><font style="vertical-align: inherit;">移动（</font><font style="vertical-align: inherit;">）到其包含范围的顶部。</font><font style="vertical-align: inherit;">函数参数和语言定义的名称显然已经存在。</font></font><a href="http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本樱桃</font></font></a></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着这样的代码：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">functionOne</span><span class="pun">();</span><span class="pln">                  </span><span class="pun">---------------</span><span class="pln">      </span><span class="kwd">var</span><span class="pln"> functionOne</span><span class="pun">;</span><span class="pln">
                                </span><span class="pun">|</span><span class="pln"> is actually </span><span class="pun">|</span><span class="pln">      functionOne</span><span class="pun">();</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> functionOne </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){</span><span class="pln">   </span><span class="pun">|</span><span class="pln"> interpreted </span><span class="pun">|--&gt;</span><span class="pln">
</span><span class="pun">};</span><span class="pln">                              </span><span class="pun">|</span><span class="pln">    like     </span><span class="pun">|</span><span class="pln">      functionOne </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){</span><span class="pln">
                                </span><span class="pun">---------------</span><span class="pln">      </span><span class="pun">};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，声明的赋值部分未悬挂。</font><font style="vertical-align: inherit;">仅悬挂名称。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是对于函数声明，整个函数体也将被提升</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">functionTwo</span><span class="pun">();</span><span class="pln">              </span><span class="pun">---------------</span><span class="pln">      </span><span class="kwd">function</span><span class="pln"> functionTwo</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
                            </span><span class="pun">|</span><span class="pln"> is actually </span><span class="pun">|</span><span class="pln">      </span><span class="pun">};</span><span class="pln">
</span><span class="kwd">function</span><span class="pln"> functionTwo</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">    </span><span class="pun">|</span><span class="pln"> interpreted </span><span class="pun">|--&gt;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">                           </span><span class="pun">|</span><span class="pln">    like     </span><span class="pun">|</span><span class="pln">      functionTwo</span><span class="pun">();</span><span class="pln">
                            </span><span class="pun">---------------</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomMandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">区别在于它</font></font><code>functionOne</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个函数表达式，因此仅在到达该行时才定义，而是</font></font><code>functionTwo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数声明，并在其周围的函数或脚本执行后（由于</font></font><a href="http://adripofjavascript.com/blog/drips/variable-and-function-hoisting.html" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提升</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）而定义。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，一个函数表达式：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="com">// TypeError: functionOne is not a function</span><span class="pln">
functionOne</span><span class="pun">();</span><span class="pln">

</span><span class="kwd">var</span><span class="pln"> functionOne </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"Hello!"</span><span class="pun">);</span><span class="pln">
</span><span class="pun">};</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif1" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且，一个函数声明：   </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="com">// Outputs: "Hello!"</span><span class="pln">
functionTwo</span><span class="pun">();</span><span class="pln">

</span><span class="kwd">function</span><span class="pln"> functionTwo</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"Hello!"</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif2" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也意味着您不能使用函数声明有条件地定义函数：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">test</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
   </span><span class="com">// Error or misbehavior</span><span class="pln">
   </span><span class="kwd">function</span><span class="pln"> functionThree</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> doSomething</span><span class="pun">();</span><span class="pln"> </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的定义实际上</font></font><code>functionThree</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><code>test</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的值</font><font style="vertical-align: inherit;">无关，</font><font style="vertical-align: inherit;">除非</font></font><code>use strict</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有效</font><font style="vertical-align: inherit;">-除非</font><font style="vertical-align: inherit;">有效，在这种情况下，它只会引发错误。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY逆天Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您在此处张贴的两个代码段几乎可以出于所有目的以相同的方式运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，行为上的差异在于，对于第一个变体（</font></font><code>var functionOne = function() {}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），只能在代码中的该点之后调用该函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用第二个变体（</font></font><code>function functionTwo()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），该函数可用于在声明该函数的位置上方运行的代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是因为在第一个变量中，</font></font><code>foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在运行时</font><font style="vertical-align: inherit;">将函数分配给了变量</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在第二步中，</font></font><code>foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在解析时</font><font style="vertical-align: inherit;">将函数分配给该标识符</font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多技术信息</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript具有三种定义函数的方式。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的第一个代码片段显示了一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数表达式</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这涉及使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“函数”运算符</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建函数-该运算符的结果可以存储在任何变量或对象属性中。</font><font style="vertical-align: inherit;">这样函数表达式功能强大。</font><font style="vertical-align: inherit;">函数表达式通常称为“匿名函数”，因为它不必具有名称，</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的第二个示例是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数声明</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“功能”语句</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建功能。</font><font style="vertical-align: inherit;">该函数在解析时可用，并且可以在该范围内的任何位置调用。</font><font style="vertical-align: inherit;">您以后仍然可以将其存储在变量或对象属性中。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义函数的第三种方法是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ Function（）”构造函数</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该函数未在原始文章中显示。</font><font style="vertical-align: inherit;">不建议使用此功能，因为它的工作方式与相同</font></font><code>eval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但存在问题。</font></font></li>
</ol></div>
        </div></div>
    {% endraw %}
  </div>
<div>
