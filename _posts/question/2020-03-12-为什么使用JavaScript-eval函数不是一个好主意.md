---
layout: question
title:  为什么使用JavaScript eval函数不是一个好主意？
date:   2020-03-12T08:03:02.000Z
description: eval函数是一种动态生成代码的强大而简便的方法，那么有哪些警告？...
img: 
author: Sam梅
category: question
answer: 21
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">eval函数是一种动态生成代码的强大而简便的方法，那么有哪些警告？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1108篇《为什么使用JavaScript eval函数不是一个好主意？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil西里斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">垃圾收集</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器的垃圾收集不知道是否可以将已评估的代码从内存中删除，因此仅将其保存直到重新加载页面为止。</font><font style="vertical-align: inherit;">如果您的用户不久才出现在您的页面上，也不错，但这对于webapp来说可能是个问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是演示问题的脚本</font></font></p>

<p><a href="https://jsfiddle.net/CynderRnAsh/qux1osnw/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://jsfiddle.net/CynderRnAsh/qux1osnw/</font></font></a></p>

<pre><code>document.getElementById("evalLeak").onclick = (e) =&gt; {<font></font>
  for(let x = 0; x &lt; 100; x++) {<font></font>
    eval(x.toString());<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与上述代码一样简单的操作会导致少量内存被存储，直到应用程序终止。</font><font style="vertical-align: inherit;">当逃避的脚本是一个巨大的函数并按间隔调用时，情况更糟。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Jim</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我要说的是，如果您使用</font></font><code>eval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在浏览器中运行的javascript </font><font style="vertical-align: inherit;">并没有关系</font><font style="vertical-align: inherit;">。*（caveat）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有现代的浏览器都有一个开发人员控制台，您可以在其中执行任意JavaScript，并且任何半智能的开发人员都可以查看您的JS源并将所需的任何内容放入开发人员控制台中以完成所需的工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">*只要您的服务器端点具有对用户提供的值的正确验证和清除，则在客户端javascript中解析和评估的内容无关紧要。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果您询问是否适合</font></font><code>eval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在PHP中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">，答案是“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，除非您</font><font style="vertical-align: inherit;">将可能传递给eval语句的任何值</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">列入白名单</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿小小</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了在执行用户提交的代码时可能出现的安全问题外，大多数时候，还有一种更好的方法，该方法无需每次执行代码都重新解析。</font><font style="vertical-align: inherit;">匿名函数或对象属性可以替代大多数eval用法，并且更加安全，快捷。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC66078158</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript引擎在编译阶段执行了许多性能优化。</font><font style="vertical-align: inherit;">其中一些可以归结为能够在进行词法分析时基本静态地分析代码，并预先确定所有变量和函数声明的位置，从而在执行过程中花费较少的精力来解析标识符。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果引擎在代码中找到一个eval（..），则它实际上必须假定其对标识符位置的所有了解可能都是无效的，因为它无法在词法分析时确切地知道您可能传递给eval（..）的代码。修改词法范围，或您可能要传递给的对象的内容，以创建要查询的新词法范围。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">换句话说，从悲观的意义上讲，如果存在eval（..），它将进行的大多数优化都是毫无意义的，因此它根本不执行优化。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这说明了一切。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font></font></p>

<p><a href="https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&amp;%20closures/ch2.md#eval" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&amp;%20closures/ch2.md#eval</font></font></a></p>

<p><a href="https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&amp;%20closures/ch2.md#performance" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&amp;%20closures/ch2.md#performance</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小小十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">eval（）非常强大，可用于执行JS语句或评估表达式。</font><font style="vertical-align: inherit;">但是问题不关乎eval（）的使用，而只是说一些您用eval（）运行的字符串如何受到恶意方的影响。</font><font style="vertical-align: inherit;">最后，您将运行恶意代码。</font><font style="vertical-align: inherit;">权力伴随着巨大的责任。</font><font style="vertical-align: inherit;">因此，明智地使用它就是您正在使用它。</font><font style="vertical-align: inherit;">这与eval（）函数关系不大，但是本文提供了相当不错的信息：</font></font><a href="http://blogs.popart.com/2009/07/javascript-injection-attacks/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> :
  </font><a href="http://blogs.popart.com/2009/07/javascript-injection-attacks/" rel="nofollow"><font style="vertical-align: inherit;">//blogs.popart.com/2009/07/javascript-injection-attacks/</font></a><font style="vertical-align: inherit;"> 
如果您正在寻找eval（）的基础知识在这里查看：</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : 
 </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">谷若汐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一篇有关eval以及它不是邪恶的好文章：</font><a href="http://www.nczonline.net/blog/2013/06/25/eval-isnt-evil-just-misunderstood/" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="http://www.nczonline.net/blog/2013/06/25/eval-isnt-evil-just-misunderstood/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.nczonline.net/blog/2013/06/25/eval-isnt-evil-just-misunderstood/</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我并不是说您应该精疲力尽，并开始在任何地方使用eval（）。</font><font style="vertical-align: inherit;">实际上，运行eval（）的好用例很少。</font><font style="vertical-align: inherit;">绝对存在代码清晰度，可调试性和性能方面的问题，这些问题不容忽视。</font><font style="vertical-align: inherit;">但是当您遇到eval（）有意义的情况时，就不用担心使用它。</font><font style="vertical-align: inherit;">尝试先不要使用它，但是当适当使用eval（）时，不要让任何人吓到您认为您的代码更脆弱或更不安全。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙小胖</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随着下一代浏览器以某种JavaScript编译器的形式出现，这可能会成为一个更大的问题。</font><font style="vertical-align: inherit;">在这些较新的浏览器上，通过Eval执行的代码可能无法像其他JavaScript一样出色地运行。</font><font style="vertical-align: inherit;">有人应该做一些分析。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO前端</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您希望用户输入一些逻辑函数并求与与或，则JavaScript eval函数非常理想。</font><font style="vertical-align: inherit;">我可以接受两个字符串和</font></font><code>eval(uate) string1 === string2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，等等。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这大大降低了您对安全性的信心。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋Tom</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>If you spot the use of eval() in your code, remember the mantra “eval() is evil.” </p>

<p>This
function takes an arbitrary string and executes it as JavaScript code. When the code in
question is known beforehand (not determined at runtime), there’s no reason to use
eval(). 
If the code is dynamically generated at runtime, there’s often a better way to
achieve the goal without eval(). 
For example, just using square bracket notation to
access dynamic properties is better and simpler:</p>

<pre><code>// antipattern<font></font>
var property = "name";<font></font>
alert(eval("obj." + property));<font></font>
<font></font>
// preferred<font></font>
var property = "name";<font></font>
alert(obj[property]);<font></font>
</code></pre>

<p>Using <code>eval()</code> also has security implications, because you might be executing code (for
example coming from the network) that has been tampered with. 
This is a common antipattern when dealing with a JSON response from an Ajax request. 
In those cases
it’s better to use the browsers’ built-in methods to parse the JSON response to make
sure it’s safe and valid. For browsers that don’t support <code>JSON.parse()</code> natively, you can
use a library from JSON.org.</p>

<p>It’s also important to remember that passing strings to <code>setInterval()</code>, <code>setTimeout()</code>,
and the <code>Function()</code> constructor is, for the most part, similar to using <code>eval()</code> and therefore
should be avoided. </p>

<p>Behind the scenes, JavaScript still has to evaluate and execute
the string you pass as programming code:</p>

<pre><code>// antipatterns<font></font>
setTimeout("myFunc()", 1000);<font></font>
setTimeout("myFunc(1, 2, 3)", 1000);<font></font>
<font></font>
// preferred<font></font>
setTimeout(myFunc, 1000);<font></font>
setTimeout(function () {<font></font>
myFunc(1, 2, 3);<font></font>
}, 1000);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用新的Function（）构造函数与eval（）相似，应谨慎使用。</font><font style="vertical-align: inherit;">它可能是一个强大的结构，但经常被滥用。</font><font style="vertical-align: inherit;">如果绝对必须使用</font></font><code>eval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以考虑使用new Function（）代替。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">潜在的好处很小，因为在new Function（）中评估的代码将在局部函数范围内运行，因此在评估的代码中用var定义的任何变量都不会自动成为全局变量。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">防止自动全局变量的另一种方法是将</font></font><code>eval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">包装
 </font><font style="vertical-align: inherit;">到立即函数中。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德小宇宙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只要您知道使用它的上下文，并不一定很糟。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的应用程序正在使用</font></font><code>eval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="http://en.wikipedia.org/wiki/XMLHttpRequest" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XMLHttpRequest</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font><font style="vertical-align: inherit;">到您自己的站点（由受信任的服务器端代码</font><font style="vertical-align: inherit;">创建）的JSON创建对象</font><font style="vertical-align: inherit;">，则可能不是问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，不​​受信任的客户端JavaScript代码不能做太多事情。</font><font style="vertical-align: inherit;">只要您执行的事情</font></font><code>eval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自合理的来源，就可以了。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝猿Near</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这个讨论很古老，但是我真的很喜欢</font><font style="vertical-align: inherit;">Google的</font></font><a href="http://www.youtube.com/watch?feature=player_detailpage&amp;v=6EJ801el-I8#t=1729s" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法，并希望与他人分享这种感觉；）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一件事是，您越了解越多，您就会尝试去理解，最终您只是不相信某事是好是坏，只是因为有人这么说:)这是一部非常鼓舞人心的</font></font><a href="http://www.youtube.com/watch?v=MFtijdklZDo" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视频</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，帮助我独自思考了更多:)好的做法很好，但是请不要轻率地使用它们:)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin神奇宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能会带来安全风险，执行范围不同，效率很低，因为它会为代码执行创建全新的脚本环境。</font><font style="vertical-align: inherit;">有关更多信息，请参见此处：</font></font><a href="http://userjs.org/help/tutorials/efficient-code#evalevil" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">eval</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，它非常有用，并且适度使用可以增加很多良好的功能。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易路易</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非您让eval（）动态内容（通过cgi或输入），否则它与页面中所有其他JavaScript一样安全可靠。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐路易</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了其他答案外，我认为eval语句无法实现高级最小化。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非您100％确定要评估的代码来自受信任的来源（通常是您自己的应用程序），否则这是使您的系统遭受跨站点脚本攻击的肯定方式。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin梅</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主要是，它很难维护和调试。</font><font style="vertical-align: inherit;">就像一个</font></font><code>goto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以使用它，但是它使发现问题变得更加困难，并且使以后可能需要进行更改的人员变得更加困难。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">→笑里藏刀↓</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我相信这是因为它可以从字符串执行任何JavaScript函数。</font><font style="vertical-align: inherit;">使用它可以使人们更容易地将恶意代码注入应用程序。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想到两点：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安全性（但是，只要您生成要自己评估的字符串，就可能不是问题）</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">性能：除非要执行的代码未知，否则无法对其进行优化。</font><font style="vertical-align: inherit;">（关于javascript和性能，当然是</font></font><a href="http://steve-yegge.blogspot.com/2008/05/dynamic-languages-strike-back.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Steve Yegge的介绍</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProTony</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果传递有效的用户输入，通常这只是一个问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三村村蛋蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将用户输入传递给eval（）会带来安全风险，但是每次调用eval（）都会创建一个新的JavaScript解释器实例。</font><font style="vertical-align: inherit;">这可能是资源浪费。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
