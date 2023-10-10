---
layout: question
title:  如何在JavaScript中检查未定义或null变量？
date:   2020-03-12T10:08:11.000Z
description: 我们经常在JavaScript代码中使用以下代码模式if (typeof(some_variable) \!= 'undefined' && some_...
img: 
author: 猴子飞云
category: question
answer: 12
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们经常在JavaScript代码中使用以下代码模式</font></font></p>

<pre><code>if (typeof(some_variable) != 'undefined' &amp;&amp; some_variable != null)<font></font>
{<font></font>
    // Do something with some_variable<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有更冗长的检查方法具有相同的效果？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据一些论坛和文献的说法，简单地讲，以下内容应具有相同的效果。</font></font></p>

<pre><code>if (some_variable)<font></font>
{<font></font>
    // Do something with some_variable<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，</font><font style="vertical-align: inherit;">当</font><font style="vertical-align: inherit;">未定义</font><font style="vertical-align: inherit;">时</font><font style="vertical-align: inherit;">，</font></font><a href="http://en.wikipedia.org/wiki/Firebug_%28software%29" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firebug会将</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样的语句评估为运行时错误</font></font><code>some_variable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而第一个</font><font style="vertical-align: inherit;">语句</font><font style="vertical-align: inherit;">就可以了。</font><font style="vertical-align: inherit;">这仅仅是Firebug的一种（有害的）行为，还是这两种方式之间确实存在某些区别？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1252篇《如何在JavaScript中检查未定义或null变量？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ES5或ES6中，如果需要多次检查，可以执行以下操作：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const excluded = [null, undefined, ''];<font></font>
<font></font>
if (!exluded.includes(varToCheck) {<font></font>
  // it will bee not null, not undefined and not void string<font></font>
}</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>R.isNil(yourValue)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
Ramda </font><font style="vertical-align: inherit;">，您可以简单地使</font><font style="vertical-align: inherit;">Lodash和其他帮助程序库具有相同的功能。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里阳光</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试null（</font></font><code>if (value == null)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）或non-nullity（</font></font><code>if (value != null)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）的详细程度要比测试变量的定义状态少。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，</font><font style="vertical-align: inherit;">如果将变量（或对象属性）定义为布尔</font><font style="vertical-align: inherit;">值</font><font style="vertical-align: inherit;">，则进行测试</font></font><code>if (value)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或   </font></font><code>if( obj.property)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）以确保变量（或对象属性）的存在失败</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">买者自负 ：）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小JinJin蛋蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用严格的比较运算符可以轻松地区分这两个值：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作示例位于：</font></font></p>

<p><a href="http://www.thesstech.com/tryme?filename=nullandundefined" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.thesstech.com/tryme?filename=nulland未定义</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样例代码：</font></font></p>

<pre><code>function compare(){<font></font>
    var a = null; //variable assigned null value<font></font>
    var b;  // undefined<font></font>
    if (a === b){<font></font>
        document.write("a and b have same datatype.");<font></font>
    }<font></font>
    else{<font></font>
        document.write("a and b have different datatype.");<font></font>
    }   <font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端MandyJinJin</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与您拥有的类似，您可以执行类似的操作</font></font></p>

<p><code>if (some_variable === undefined || some_variable === null) {
   do stuff
}</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva凯</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在浏览器中</font><font style="vertical-align: inherit;">打开</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发人员工具</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后尝试下图所示的代码。</font></font></p>

<p><a href="https://i.stack.imgur.com/rr3X2.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/rr3X2.png" alt="图1"></a>
<a href="https://i.stack.imgur.com/IEqrO.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/IEqrO.png" alt="图2"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙Pro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了理解，让我们分析一下Javascript引擎在转换undefined，null和''（也为空字符串）时返回的值。</font><font style="vertical-align: inherit;">您可以直接在开发人员控制台上进行检查。</font></font></p>

<p><a href="https://i.stack.imgur.com/MlGa5.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/MlGa5.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以看到所有这些都将转换为false，这意味着这三者都被javascript假设为“不存在”。</font><font style="vertical-align: inherit;">因此，您无需像下面那样显式检查代码中的所有三个。</font></font></p>

<pre><code>if (a === undefined || a === null || a==='') {<font></font>
    console.log("Nothing");<font></font>
} else {<font></font>
    console.log("Something");<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还要指出一件事。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Boolean（0）的结果是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然是假的。</font><font style="vertical-align: inherit;">当0是预期结果的有效值时，这将在代码中创建错误。</font><font style="vertical-align: inherit;">因此，请确保在编写代码时进行检查。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经用这种方法做到了</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将ID保存在某个变量中</font></font></strong></p>

<pre><code>var someVariable = document.getElementById("someId");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后使用if条件</font></font></p>

<pre><code>if(someVariable === ""){<font></font>
 //logic<font></font>
} else if(someVariable !== ""){<font></font>
 //logic<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi伽罗</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于没有一个完整而正确的答案，因此我将尝试总结一下：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，表达式为：</font></font></p>

<pre><code>if (typeof(variable) != "undefined" &amp;&amp; variable != null)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法简化，因为</font></font><code>variable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能未声明，因此省略</font></font><code>typeof(variable) != "undefined"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将导致ReferenceError。</font><font style="vertical-align: inherit;">但是，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以根据上下文简化表达式</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>variable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全局</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以简化为：</font></font></p>

<pre><code>if (window.variable != null)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果它是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">local</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以避免未声明此变量的情况，并且还可以简化为：</font></font></p>

<pre><code>if (variable != null)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果它是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">object property</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则不必担心ReferenceError：</font></font></p>

<pre><code>if (obj.property != null)
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是使用Array </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">includes（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">的另一种</font><font style="vertical-align: inherit;">方法：</font></font></p>

<pre><code>[undefined, null].includes(value)
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐小小猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您尝试引用未声明的变量，则所有JavaScript实现都将引发错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象的属性不受相同条件的限制。</font><font style="vertical-align: inherit;">如果未定义对象属性，则尝试访问它不会引发错误。</font><font style="vertical-align: inherit;">因此，在这种情况下，您可以缩短：</font></font></p>

<pre><code> if (typeof(myObj.some_property) != "undefined" &amp;&amp; myObj.some_property != null)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至</font></font></p>

<pre><code>if (myObj.some_property != null)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑到这一点，以及可以将全局变量作为全局对象的属性进行访问的事实（</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于浏览器而言），可以对全局变量使用以下内容：</font></font></p>

<pre><code>if (window.some_variable != null) {<font></font>
    // Do something with some_variable<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在本地范围内，确保在代码块的顶部声明变量总是有用的，这将节省对的重复使用</font></font><code>typeof</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near路易蛋蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在更新的JavaScript标准（如ES5和ES6）中，您可以说</font></font></p>

<pre><code>&gt; Boolean(0) //false<font></font>
&gt; Boolean(null)  //false<font></font>
&gt; Boolean(undefined) //false<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全部返回false，这类似于Python对空变量的检查。</font><font style="vertical-align: inherit;">因此，如果您想围绕变量编写条件逻辑，只需说</font></font></p>

<pre><code>if (Boolean(myvar)){<font></font>
   // Do something<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，“空”或“空字符串”或“未定义”将得到有效处理。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
