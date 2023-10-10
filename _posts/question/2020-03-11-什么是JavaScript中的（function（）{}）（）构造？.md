---
layout: question
title:  什么是JavaScript中的（function（）{}）（）构造？
date:   2020-03-11T02:42:13.000Z
description: 我曾经知道这是什么意思，但是我现在正在努力...这基本上是在说document.onload什么吗？(function () {})();...
img: 
author: 神乐小哥Near
category: question
answer: 18
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我曾经知道这是什么意思，但是我现在正在努力...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这基本上是在说</font></font><code>document.onload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么吗？</font></font></p>

<pre><code>(function () {<font></font>
<font></font>
})();<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaLEY</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，JavaScript代码在应用程序中具有全局作用域。</font><font style="vertical-align: inherit;">当我们在其中声明全局变量时，就有可能在开发的其他区域中将相同的重复变量用于其他目的。</font><font style="vertical-align: inherit;">由于此重复，可能会发生一些错误。</font><font style="vertical-align: inherit;">因此我们可以通过立即调用函数expression来避免使用该全局变量，该表达式是自执行表达式。当我们在该</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IIFE</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表达式中</font><font style="vertical-align: inherit;">编写代码时，</font><font style="vertical-align: inherit;">全局变量将类似于局部作用域和局部变量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建</font><strong><font style="vertical-align: inherit;">IIFE的</font></strong><font style="vertical-align: inherit;">两种方法</font></font><strong><font style="vertical-align: inherit;"></font></strong></p>

<pre><code>(function () {<font></font>
    "use strict";<font></font>
    var app = angular.module("myModule", []);<font></font>
}());<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>(function () {<font></font>
    "use strict";<font></font>
    var app = angular.module("myModule", []);<font></font>
})();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上面的代码片段中，“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">var app</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”现在是一个局部变量。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德神乐老丝</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这两组括号使它有些混乱，但是我在Google的示例中看到了另一种用法，它们使用了类似的用法，希望这可以帮助您更好地理解：</font></font></p>

<pre><code>var app = window.app || (window.app = {});<font></font>
console.log(app);<font></font>
console.log(window.app);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果</font></font><code>windows.app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未定义，则</font></font><code>window.app = {}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">立即执行，因此</font><font style="vertical-align: inherit;">在条件评估期间将其</font></font><code>window.app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分配给它</font></font><code>{}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此结果既是</font></font><code>app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">且</font></font><code>window.app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在变为</font></font><code>{}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此控制台输出为：</font></font></p>

<pre><code>Object {}<font></font>
Object {}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙卡卡西</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，在程序中编写函数后，我们不会立即调用该函数。</font><font style="vertical-align: inherit;">用非常简单的术语来说，当您在函数创建后立即调用它时，它被称为IIFE-一个花哨的名字。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用自唤匿名函数的原因是，它们决不能被其他代码调用，因为它们“设置”了要调用的代码（以及赋予函数和变量的范围）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">换句话说，它们就像在程序开始时“创建类”的程序。（自动）实例化它们之后，唯一可用的函数是匿名函数返回的函数。但是，其他所有“隐藏”功能以及任何状态（在作用域创建期间设置的变量）仍然存在。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很酷。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L前端</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下代码：</font></font></p>

<pre><code>(function () {<font></font>
<font></font>
})();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被称为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">立即调用函数表达式</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（IIFE）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之所以称为函数表达式，是因为</font></font><code>( yourcode )</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript中</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">运算符将其强制为表达式。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数表达式</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数声明</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之间的区别</font><font style="vertical-align: inherit;">如下：</font></font></p>

<pre><code>// declaration:<font></font>
function declaredFunction () {}<font></font>
<font></font>
// expressions:<font></font>
<font></font>
// storing function into variable<font></font>
const expressedFunction = function () {}<font></font>
<font></font>
// Using () operator, which transforms the function into an expression<font></font>
(function () {})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表达式只是一堆可以评估为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单个值</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的代码</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">对于上述示例中的表达式，此值为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单个函数对象</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在获得一个计算结果为函数对象的表达式之后，我们可以立即</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">运算符</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该函数对象</font></font><code>()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>(function() {<font></font>
<font></font>
  const foo = 10;        // all variables inside here are scoped to the function block<font></font>
  console.log(foo);<font></font>
<font></font>
})();<font></font>
<font></font>
console.log(foo);  // referenceError foo is scoped to the IIFE</code></pre>
</div>
</div>
<p></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么这有用？</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我们处理大型代码库和/或导入各种库时，命名冲突的机会就会增加。</font><font style="vertical-align: inherit;">当我们在IIFE内编写代码的某些相关部分（并因此使用相同的变量）时，所有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量和函数名的作用域都在IIFE的函数括号内</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这减少了命名冲突的机会，并使您更不小心地命名它们（例如，您不必给它们加上前缀）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">立即调用的函数表达式（IIFE）是创建后立即执行的函数。</font><font style="vertical-align: inherit;">它与任何事件或异步执行都没有关系。</font><font style="vertical-align: inherit;">您可以定义一个IIFE，如下所示：</font></font></p>
</blockquote>

<pre><code>(function() {<font></font>
     // all your code here<font></font>
     // ...<font></font>
})();<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一对括号function（）{...}将括号内的代码转换为表达式。第二对括号调用由表达式产生的函数。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">An </font></font><code>IIFE</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以描述为自调用匿名函数。</font><font style="vertical-align: inherit;">它最常见的用法是限制通过var生成的变量的范围，或封装上下文以避免名称冲突。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Ss Yy</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个用例是记忆，其中缓存对象不是全局的：</font></font></p>

<pre><code>var calculate = (function() {<font></font>
  var cache = {};<font></font>
  return function(a) {<font></font>
<font></font>
    if (cache[a]) {<font></font>
      return cache[a];<font></font>
    } else {<font></font>
      // Calculate heavy operation<font></font>
      cache[a] = heavyOperation(a);<font></font>
      return cache[a];<font></font>
    }<font></font>
  }<font></font>
})();<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IIFE（立即调用的函数表达式）是一个在脚本加载并消失后立即执行的函数。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑下面的函数，该函数写在名为iife.js的文件中</font></font></p>

<pre><code>(function(){<font></font>
       console.log("Hello Stackoverflow!");<font></font>
   })();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的代码将在您加载iife.js后立即执行，并显示“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hello Stackoverflow！</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在开发人员工具的控制台上。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关详细说明，请参见</font></font><a href="http://benalman.com/news/2010/11/immediately-invoked-function-expression/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">立即调用函数表达式（IIFE）</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖GO</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自执行匿名功能。</font><font style="vertical-align: inherit;">它在创建后立即执行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个有用的简短示例是：</font></font></p>

<pre><code>function prepareList(el){<font></font>
  var list = (function(){<font></font>
    var l = []; <font></font>
    for(var i = 0; i &lt; 9; i++){<font></font>
     l.push(i);<font></font>
    }<font></font>
    return l;<font></font>
  })();<font></font>
<font></font>
  return function (el){<font></font>
    for(var i = 0, l = list.length; i &lt; l; i++){<font></font>
      if(list[i] == el) return list[i];<font></font>
    }<font></font>
    return null;<font></font>
  }; <font></font>
} <font></font>
<font></font>
var search = prepareList();<font></font>
search(2);<font></font>
search(3);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您不必一次创建列表，而只需创建一次（减少开销）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom伽罗</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自我执行功能通常用于封装上下文并避免名称冲突。</font><font style="vertical-align: inherit;">您在（function（）{..}）（）内部定义的任何变量都不是全局变量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码</font></font></p>

<pre><code>var same_name = 1;<font></font>
<font></font>
var myVar = (function() {<font></font>
    var same_name = 2;<font></font>
    console.log(same_name);<font></font>
})();<font></font>
<font></font>
console.log(same_name);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生以下输出：</font></font></p>

<pre><code>2<font></font>
1<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过使用此语法，可以避免与JavaScript代码中其他地方声明的全局变量冲突。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">你的名字</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那是一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自调用的匿名函数</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看</font></font><a href="http://www.w3schools.com/js/js_function_definition.asp" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3Schools关于自调用功能的说明</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使函数表达式“自调用”。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自调用表达式将自动调用（启动），而不被调用。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果函数表达式后跟（），则函数表达式将自动执行。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不能自行调用函数声明。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam小哥逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是自调用匿名功能。</font><font style="vertical-align: inherit;">它在定义时执行。</font><font style="vertical-align: inherit;">这意味着已定义此函数，并在定义后立即调用自身。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法的解释是：第一个</font></font><code>()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">括号内的函数是没有名称的函数，通过下一个</font></font><code>();</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">括号，您可以理解在定义时已调用该函数。</font><font style="vertical-align: inherit;">您可以在第二个</font></font><code>()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">括号中</font><font style="vertical-align: inherit;">传递任何参数，该参数</font><font style="vertical-align: inherit;">将在第一个括号中的函数中获取。</font><font style="vertical-align: inherit;">请参阅以下示例：</font></font></p>

<pre><code>(function(obj){<font></font>
    // Do something with this obj<font></font>
})(object);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，您正在传递的“对象”将在函数中通过“ obj”访问，就像您在函数签名中抓住它一样。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiDavaid</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不，此构造仅创建命名范围。</font><font style="vertical-align: inherit;">如果您将它分成几部分，则可以看到您有一个外部</font></font></p>

<pre><code>(...)();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那是一个函数调用。</font><font style="vertical-align: inherit;">在括号内，您具有：</font></font></p>

<pre><code>function() {}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那是一个匿名函数。</font><font style="vertical-align: inherit;">在构造内部</font><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">var</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">声明的所有内容</font><font style="vertical-align: inherit;">仅在同一构造内部可见，并且不会污染全局名称空间。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim理查德泡芙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>(function () {<font></font>
})();<font></font>
</code></pre>

<p>This is called IIFE (Immediately Invoked Function Expression). One of the famous JavaScript design patterns, it is the heart and soul of the modern day Module pattern. As the name suggests it executes immediately after it is created. This pattern creates an isolated or private scope of execution.</p>

<p>JavaScript prior to ECMAScript 6 used lexical scoping, so IIFE was used for simulating block scoping. (With ECMAScript 6 block scoping is possible with the introduction of the <code>let</code> and <code>const</code> keywords.)
<a href="https://gist.github.com/gurucharanmk/5071d37bb5af61a93562fbe024a975de" rel="nofollow noreferrer">Reference for issue with lexical scoping</a></p>

<p><a href="https://gist.github.com/gurucharanmk/38d8557147d2f542d553b75dfeb40709" rel="nofollow noreferrer">Simulate block scoping with IIFE</a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用IIFE的的性能优势是通过像常用的全局对象的能力</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>document</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过减少范围查找等作为参数。</font><font style="vertical-align: inherit;">（请记住，JavaScript在本地范围内查找属性，并在整个范围内一直查找直到全局范围）。</font><font style="vertical-align: inherit;">因此，在本地范围内访问全局对象可以减少查找时间，如下所示。</font></font></p>

<pre><code>(function (globalObj) {<font></font>
//Access the globalObj<font></font>
})(window);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">BB</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它只是创建后立即执行的匿名函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像您将其分配给变量，然后在没有变量的情况下立即使用它：</font></font></p>

<pre><code>var f = function () {<font></font>
};<font></font>
f();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在jQuery中，您可能会想到类似的构造：</font></font></p>

<pre><code>$(function(){<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是绑定</font></font><code>ready</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件</font><font style="vertical-align: inherit;">的简短形式</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>$(document).ready(function(){<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是以上两个构造不是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IIFE</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一小胖</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该构造称为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">立即调用函数表达式（IIFE）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这意味着它可以立即执行。</font><font style="vertical-align: inherit;">可以将其视为当解释器到达该函数时自动调用的函数。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最常见的用例：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它最常见的用例之一是限制通过进行的变量的范围</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">通过创建的变量</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的作用域仅限于函数，因此此构造（某些代码的函数包装）将确保变量范围不会从该函数中泄漏出来。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在下面的示例中，count将在立即调用的函数之外不可用，即范围</font></font><code>count</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会从函数中泄漏出来。</font></font><code>Reference Error</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，</font><font style="vertical-align: inherit;">您都应该获得一个</font><font style="vertical-align: inherit;">，如果您尝试在立即调用的函数之外访问它。</font></font></p>

<pre><code>(function () { <font></font>
    var count = 10;<font></font>
})();<font></font>
console.log(count);  // Reference Error: count is not defined<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6替代品（推荐）</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ES6中，我们现在可以通过</font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">创建变量</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它们都是基于块的（与</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于函数的</font><font style="vertical-align: inherit;">块不同</font><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您现在可以编写许多非常简单的代码来确保变量的作用域不会泄漏出所需的块，而不必为上面提到的用例使用那种复杂的IIFE构造。 </font></font></p>

<pre><code>{ <font></font>
    let count = 10;<font></font>
};<font></font>
console.log(count);  // Reference Error: count is not defined<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此示例中，我们用来</font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义一个</font></font><code>count</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量，</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">变量</font></font><code>count</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只限于用大括号创建的代码块</font></font><code>{...}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我称它为</font></font><code>Curly Jail</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Stafan</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它声明一个匿名函数，然后调用它：</font></font></p>

<pre><code>(function (local_arg) {<font></font>
   // anonymous function<font></font>
   console.log(local_arg);<font></font>
})(arg);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天L</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就是说立即执行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以如果我这样做：</font></font></p>

<pre><code>var val = (function(){<font></font>
     var a = 0;  // in the scope of this function<font></font>
     return function(x){<font></font>
         a += x;<font></font>
         return a;<font></font>
     };<font></font>
})();<font></font>
<font></font>
alert(val(10)); //10<font></font>
alert(val(11)); //21<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴：</font><a href="http://jsfiddle.net/maniator/LqvpQ/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/maniator/LqvpQ/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/maniator/LqvpQ/</font></font></a></p>

<hr>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二个例子：</font></font></h3>

<pre><code>var val = (function(){<font></font>
     return 13 + 5;<font></font>
})();<font></font>
<font></font>
alert(val); //18<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
