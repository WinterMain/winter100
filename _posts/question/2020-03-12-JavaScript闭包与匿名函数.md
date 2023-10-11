---
layout: question
title:  JavaScript闭包与匿名函数
date:   2020-03-12T06:48:38.000Z
description: 我的一个朋友和我目前正在讨论JS中的闭包和不闭包。我们只想确保我们正确理解它。让我们来看这个例子。我们有一个计数循环，希望延迟在控制台上打印计数器变量...
img: 
author: Itachi理查德
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的一个朋友和我目前正在讨论JS中的闭包和不闭包。</font><font style="vertical-align: inherit;">我们只想确保我们正确理解它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们来看这个例子。</font><font style="vertical-align: inherit;">我们有一个计数循环，希望延迟在控制台上打印计数器变量。</font><font style="vertical-align: inherit;">因此，我们使用</font></font><code>setTimeout</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">闭包</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">捕获计数器变量的值，以确保其不会打印N倍于值N的值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">闭包</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或接近</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">闭包</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的错误解决方案</font><font style="vertical-align: inherit;">是：</font></font></p>

<pre><code>for(var i = 0; i &lt; 10; i++) {<font></font>
    setTimeout(function() {<font></font>
        console.log(i);<font></font>
    }, 1000);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，它将</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在循环后</font><font style="vertical-align: inherit;">输出10倍的值</font><font style="vertical-align: inherit;">，即10。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以他的尝试是：</font></font></strong></p>

<pre><code>for(var i = 0; i &lt; 10; i++) {<font></font>
    (function(){<font></font>
        var i2 = i;<font></font>
        setTimeout(function(){<font></font>
            console.log(i2);<font></font>
        }, 1000)<font></font>
    })();<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按预期打印0到9。</font></font></p>

<p>I told him that he isn't using a <strong>closure</strong> to capture <code>i</code>, but he insists that he is. I proved that he doesn't use <strong>closures</strong> by putting the for loop body within another <code>setTimeout</code> (passing his anonymous function to <code>setTimeout</code>), printing 10 times 10 again. The same applies if I store his function in a <code>var</code> and execute it <em>after</em> the loop, also printing 10 times 10. So my argument is that <strong>he doesn't really <em>capture</em> the value of <code>i</code></strong>, making his version <em>not</em> a closure.</p>

<p><strong>My attempt was:</strong></p>

<pre><code>for(var i = 0; i &lt; 10; i++) {<font></font>
    setTimeout((function(i2){<font></font>
        return function() {<font></font>
            console.log(i2);<font></font>
        }<font></font>
    })(i), 1000);<font></font>
}<font></font>
</code></pre>

<p>So I capture <code>i</code> (named <code>i2</code> within the closure), but now I <em>return</em> another function and pass this around. <strong>In my case, the function passed to setTimeout really captures <code>i</code>.</strong></p>

<p><strong>Now who is using closures and who isn't?</strong></p>

<p>Note that both solutions print 0 to 9 on the console delayed, so they solve the original problem, but we want to understand which of those two solutions <strong>uses closures</strong> to accomplish this.</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1022篇《JavaScript闭包与匿名函数》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim西门</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们看一下两种方式：</font></font></p>

<pre><code>(function(){<font></font>
    var i2 = i;<font></font>
    setTimeout(function(){<font></font>
        console.log(i2);<font></font>
    }, 1000)<font></font>
})();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">声明并立即执行</font></font><code>setTimeout()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在其自身上下文</font><font style="vertical-align: inherit;">中运行的匿名函数</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">的当前值</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是通过将副本复制为</font></font><code>i2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">first </font><font style="vertical-align: inherit;">来保留的</font><font style="vertical-align: inherit;">；</font><font style="vertical-align: inherit;">它之所以有效是因为立即执行。</font></font></p>

<pre><code>setTimeout((function(i2){<font></font>
    return function() {<font></font>
        console.log(i2);<font></font>
    }<font></font>
})(i), 1000);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">声明内部函数的执行上下文，从而将的当前值</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保存到</font></font><code>i2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">；</font><font style="vertical-align: inherit;">这种方法还使用立即执行来保留值。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该提到的是，两种方法之间的运行语义是不同的。</font><font style="vertical-align: inherit;">您的内部函数将传递给</font></font><code>setTimeout()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">而他的内部函数将</font></font><code>setTimeout()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自己</font><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将两个代码包装在另一个代码中</font></font><code>setTimeout()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并不能证明只有第二种方法使用了闭包，开始的东西并不相同。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结论</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两种方法都使用闭包，所以这取决于个人喜好。</font><font style="vertical-align: inherit;">第二种方法更容易“移动”或概括。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Tony</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您和您的朋友都使用闭包：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">闭包是一种特殊的对象，它结合了两件事：一个函数以及创建该函数的环境。</font><font style="vertical-align: inherit;">环境由创建闭包时在范围内的任何局部变量组成。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN：</font><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Closures" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Closures" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/en-US/docs/JavaScript/Guide/Closures</font></font></a></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您朋友的代码函数</font></font><code>function(){ console.log(i2); }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内部定义的闭包匿名函数</font></font><code>function(){ var i2 = i; ...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以读写局部变量</font></font><em><code>i2</code></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的代码函数中，在函数</font></font><code>function(){ console.log(i2); }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">闭包内部定义</font></font><code>function(i2){ return ...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且可以读/写本地有价值的东西</font></font><em><code>i2</code></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在这种情况下声明为参数）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这两种情况下，函数都</font></font><code>function(){ console.log(i2); }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传递给</font></font><code>setTimeout</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个等效项（但内存利用率较低）是：</font></font></p>

<pre><code>function fGenerator(i2){<font></font>
    return function(){<font></font>
        console.log(i2);<font></font>
    }<font></font>
}<font></font>
for(var i = 0; i &lt; 10; i++) {<font></font>
    setTimeout(fGenerator(i), 1000);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green老丝Itachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仔细检查后，看起来你们俩都在使用闭包。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的朋友的情况下，</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可在匿名函数1内部</font></font><code>i2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行访问，</font><font style="vertical-align: inherit;">并</font><font style="vertical-align: inherit;">在存在的匿名函数2中进行访问</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的情况下，您要访问存在</font></font><code>i2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">于其中的匿名函数</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在chrome开发人员工具的“作用域变量”下和</font></font><code>debugger;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前</font><font style="vertical-align: inherit;">添加一条</font><font style="vertical-align: inherit;">语句</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将告诉变量该变量在什么作用域下。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamItachi阿飞</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><code>closure</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“闭包”是一个表达式（通常是一个函数），可以将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自由变量</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font><font style="vertical-align: inherit;">绑定这些变量</font><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">环境</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（“关闭”表达式）结合</font><font style="vertical-align: inherit;">在一起</font><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您正在使用</font></font><code>closure</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否定义了一个函数，该函数使用在函数外部定义的变量。</font><font style="vertical-align: inherit;">（我们将该变量称为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自由变量</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
它们都使用</font></font><code>closure</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（即使在第一个示例中也是如此）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">别坑我路易</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你们都在使用闭包。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">在这里</font><font style="vertical-align: inherit;">使用</font></font><a href="http://en.wikipedia.org/wiki/Closure_%28computer_science%29" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Wikipedia定义</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在计算机科学中，闭包（也称为词法闭包或函数闭包）是函数或对函数的引用以及引用环境，即一个表，该表存储对该函数的每个非局部变量（也称为自由变量）的引用。</font><font style="vertical-align: inherit;">与普通函数指针不同，闭包允许函数访问那些非局部变量，即使在其直接词法范围之外调用该函数也是如此。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您朋友的尝试</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过获取值并将其副本存储到local中，</font><font style="vertical-align: inherit;">显然使用了</font><font style="vertical-align: inherit;">非local </font><font style="vertical-align: inherit;">变量</font></font><code>i2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您自己的尝试</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在调用站点的范围内）作为参数传递给匿名函数。</font><font style="vertical-align: inherit;">到目前为止，这不是一个闭包，但是该函数返回另一个引用了same的函数</font></font><code>i2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">由于内部匿名函数内部</font></font><code>i2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是本地</font><font style="vertical-align: inherit;">函数</font><font style="vertical-align: inherit;">，因此将创建一个闭包。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
