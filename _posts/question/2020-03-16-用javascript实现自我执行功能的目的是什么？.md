---
layout: question
title:  用javascript实现自我执行功能的目的是什么？
date:   2020-03-16T14:23:32.000Z
description: 在javascript中，您什么时候要使用它：(function(){    //Bunch of code...})();在此：//B...
img: 
author: 西里神无Pro
category: question
answer: 14
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在javascript中，您什么时候要使用它：</font></font></p>

<pre><code>(function(){<font></font>
    //Bunch of code...<font></font>
})();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此：</font></font></p>

<pre><code>//Bunch of code...
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Tony</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IIRC它允许您创建私有属性和方法。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天宝儿米亚</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看来这个问题已经准备好了，但我还是会发表我的意见。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道何时需要使用自执行功能。</font></font></p>

<pre><code>var myObject = {<font></font>
    childObject: new function(){<font></font>
        // bunch of code<font></font>
    },<font></font>
    objVar1: &lt;value&gt;,<font></font>
    objVar2: &lt;value&gt;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该功能使我可以使用一些额外的代码来定义更干净代码的childObjects属性和属性，例如设置常用变量或执行数学方程式；</font><font style="vertical-align: inherit;">哦! </font><font style="vertical-align: inherit;">或错误检查。</font><font style="vertical-align: inherit;">而不是限于...的嵌套对象实例化语法</font></font></p>

<pre><code>object: {<font></font>
    childObject: {<font></font>
        childObject: {&lt;value&gt;, &lt;value&gt;, &lt;value&gt;}<font></font>
    }, <font></font>
    objVar1: &lt;value&gt;,<font></font>
    objVar2: &lt;value&gt;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一般来说，编码有很多晦涩的方式来做很多相同的事情，这使您想知道“为什么要打扰？” </font><font style="vertical-align: inherit;">但是，新的情况不断出现，您将无法再仅依靠基本/核心原则。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪阿飞</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，您必须访问</font></font><a href="https://developer.mozilla.org/en-US/docs/Glossary/IIFE" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN IIFE</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，现在有关此点</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">立即调用函数表达式</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，当您的JavaScript文件从HTML调用时，此函数会立即调用。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样可以防止在IIFE惯用语中访问变量以及污染全局范围。</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙逆天Pro</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自执行功能用于管理变量的范围。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量的范围是程序在其中定义的区域。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全局变量具有全局范围；</font><font style="vertical-align: inherit;">它在JavaScript代码中的任何地方定义，并且可以从脚本中的任何位置（甚至在函数中）进行访问。</font><font style="vertical-align: inherit;">另一方面，在函数内声明的变量仅在函数体内定义。</font><font style="vertical-align: inherit;">它们是局部变量，具有局部范围，只能在该函数中访问。</font><font style="vertical-align: inherit;">函数参数也算作局部变量，并且仅在函数体内定义。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下所示，您可以访问函数内部的globalvariable变量，还请注意，在函数主体内，局部变量优先于具有相同名称的全局变量。 </font></font></p>

<pre><code>var globalvar = "globalvar"; // this var can be accessed anywhere within the script<font></font>
<font></font>
function scope() {<font></font>
    alert(globalvar);<font></font>
    localvar = "localvar" //can only be accessed within the function scope<font></font>
}<font></font>
<font></font>
scope(); <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，基本上，一个自执行函数允许编写代码而无需担心在其他JavaScript代码块中如何命名变量。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无西里</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">javascript中的自调用函数：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自调用表达式将自动调用（启动），而不被调用。</font><font style="vertical-align: inherit;">自调用表达式创建后立即被调用。</font><font style="vertical-align: inherit;">基本上，这用于避免命名冲突以及实现封装。</font><font style="vertical-align: inherit;">在此函数之外无法访问变量或声明的对象。</font><font style="vertical-align: inherit;">为了避免最小化问题（filename.min），请始终使用自执行函数。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony宝儿梅</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于Javascript中的函数是一类对象，因此通过这样定义它，可以有效地定义一个类似于C ++或C＃的“类”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该函数可以定义局部变量，并在其中包含函数。</font><font style="vertical-align: inherit;">内部函数（有效的实例方法）将可以访问局部变量（有效的实例变量），但它们将与脚本的其余部分隔离。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">用户7049302300</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个区别是，您在函数中声明的变量是局部变量，因此在退出函数时它们会消失，并且不会与其他代码中的其他变量发生冲突。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子乐</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">范围隔离，也许。</font><font style="vertical-align: inherit;">这样，函数声明中的变量不会污染外部名称空间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，在一半的JS实现中，无论如何它们还是会的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥猪猪</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个自我调用匿名函数如何有用的可靠示例。</font></font></p>

<pre><code>for( var i = 0; i &lt; 10; i++ ) {<font></font>
  setTimeout(function(){<font></font>
    console.log(i)<font></font>
  })<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出： </font></font><code>10, 10, 10, 10, 10...</code></p>

<pre><code>for( var i = 0; i &lt; 10; i++ ) {<font></font>
  (function(num){<font></font>
    setTimeout(function(){<font></font>
      console.log(num)<font></font>
    })<font></font>
  })(i)<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出： </font></font><code>0, 1, 2, 3, 4...</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱前端</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有一个参数，“代码段”返回一个函数？</font></font></p>

<pre><code>var a = function(x) { return function() { document.write(x); } }(something);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭。</font><font style="vertical-align: inherit;">的值</font></font><code>something</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由分配给的函数使用</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><code>something</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能具有一些变化的值（for循环），并且每次都有一个新函数。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanStafan</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p>Self-invocation (also known as
  auto-invocation) is when a function
  executes immediately upon its
  definition. This is a core pattern and
  serves as the foundation for many
  other patterns of JavaScript
  development.</p>
</blockquote>

<p>I am a great fan :) of it because:</p>

<ul>
<li>It keeps code to a minimum</li>
<li>It enforces separation of behavior from presentation</li>
<li>It provides a closure which prevents naming conflicts</li>
</ul>

<p>Enormously – (Why you should say its good?)</p>

<ul>
<li>It’s about defining and executing a function all at once.</li>
<li>You could have that self-executing function return a value and pass the function as a param to another function.</li>
<li>It’s good for encapsulation.</li>
<li>It’s also good for block scoping.</li>
<li>Yeah, you can enclose all your .js files in a self-executing function and can prevent global namespace pollution. ;)</li>
</ul>

<p>More <a href="http://mahtonu.wordpress.com/2010/05/19/self-executing-functions-in-javascript/" rel="noreferrer">here</a>.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi阳光</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命名空间。</font><font style="vertical-align: inherit;">JavaScript的作用域是功能级别的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小卡卡西</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不敢相信所有答案都没有暗示全球。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>(function(){})()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构造无法防止隐含的全局变量，对我而言，这是一个更大的问题，请参见</font></font><a href="http://yuiblog.com/blog/2006/06/01/global-domination/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://yuiblog.com/blog/2006/06/01/global-domination/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，功能块确保您定义的所有相关“全局变量”都局限于程序中，它不能保护您免受隐式全局变量的影响。</font></font><a href="http://www.jshint.com" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSHint</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等可以提供有关如何防御此行为的建议。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更简洁的</font></font><code>var App = {}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法提供了类似的保护级别，并且在“公共”页面上时可以包装在功能块中。</font><font style="vertical-align: inherit;">（</font><font style="vertical-align: inherit;">有关使用此构造的库的真实示例，</font><font style="vertical-align: inherit;">请参见</font></font><a href="http://emberjs.com" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ember.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="http://sproutcore.com" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SproutCore</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就</font></font><code>private</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性而言，除非您要创建公共框架或库，否则它们会被高估，但是如果您需要实现它们，</font></font><a href="http://www.crockford.com/javascript/private.html" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Douglas Crockford</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一些好主意。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ASamGreen</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其全部与可变作用域有关。</font><font style="vertical-align: inherit;">默认情况下，自执行函数中声明的变量仅可用于自执行函数中的代码。</font><font style="vertical-align: inherit;">这样就可以编写代码，而不必担心在其他JavaScript代码块中如何命名变量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如</font></font><a href="https://stackoverflow.com/users/10608/alexander-bird"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">亚历山大</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的评论中所述</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>(function(){ <font></font>
    var foo = 3; <font></font>
    alert(foo); <font></font>
})(); <font></font>
<font></font>
alert(foo); <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将首先警报“ 3”，然后在下一个警报上引发错误，因为未定义foo。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
