---
layout: question
title:  JavaScript的“ new”关键字是否有害？\[关闭\]
date:   2020-03-12T06:16:36.000Z
description:                                                                          ...
img: 
author: Itachi米亚斯丁
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLightbulb" width="18" height="18" viewBox="0 0 18 18"><path d="M9.5.5a.5.5 0 0 0-1 0v.25a.5.5 0 0 0 1 0V.5zm5.6 2.1a.5.5 0 0 0-.7-.7l-.25.25a.5.5 0 0 0 .7.7l.25-.25zM1 7.5c0-.28.22-.5.5-.5H2a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5zm14.5 0c0-.28.22-.5.5-.5h.5a.5.5 0 0 1 0 1H16a.5.5 0 0 1-.5-.5zM2.9 1.9c.2-.2.5-.2.7 0l.25.25a.5.5 0 1 1-.7.7L2.9 2.6a.5.5 0 0 1 0-.7z" fill-opacity=".4"></path><path opacity=".4" d="M7 16h4v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1z" fill="#3F3F3F"></path><path d="M15 8a6 6 0 0 1-3.5 5.46V14a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.54A6 6 0 1 1 15 8zm-4.15-3.85a.5.5 0 0 0-.7.7l2 2a.5.5 0 0 0 .7-.7l-2-2z" fill="#FFC166"></path></svg>
                        </div>
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                            按照目前的情况，这个问题并不适合我们的问答形式。</font><font style="vertical-align: inherit;">我们希望答案得到事实，参考或专业知识的支持，但是这个问题可能会引起辩论，争论，民意调查或扩展讨论。</font><font style="vertical-align: inherit;">如果您认为此问题可以解决并且可以重新提出，</font></font><a href="/help/reopen-questions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请访问帮助中心</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取指导。
                            
                        </font></font></div>
                    </div>
                </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2012-10-22 11：07：30Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">7年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在另一个</font></font><a href="https://stackoverflow.com/questions/377716/javascript-automatic-gettersetters-john-resig-book"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，用户指出该</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字使用很危险，并提出了不使用该对象创建对象的解决方案</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我不相信这是真的，主要是因为我使用了Prototype，Scriptaculous和其他出色的JavaScript库，并且每个人都使用了</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管如此，昨天我还是在Douglas Crockford在YUI剧院观看了一次演讲，他说的一模一样，他</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不再在代码中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">关键字（</font></font><a href="http://www.youtube.com/watch?v=ya4UHuXNygM&amp;t=50m23s" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript上的Crockford-Act III：终极功能-50:23分钟</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字</font><font style="vertical-align: inherit;">是否“不好” </font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">使用它的优缺点是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第981篇《JavaScript的“ new”关键字是否有害？[关闭]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">江山如画</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为new是邪恶的，不是因为如果您忘记错误使用它可能会导致问题，而是因为它会破坏继承链，从而使该语言难以理解。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript是基于原型的面向对象。</font><font style="vertical-align: inherit;">因此，每个对象都必须像这样从另一个对象创建</font></font><code>var newObj=Object.create(oldObj)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这里</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">oldObj</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">称为原型的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">newObj</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（因此“基于原型”）。</font><font style="vertical-align: inherit;">这意味着，如果没有找到一个属性</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">newObj</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么它将在搜索</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">oldObj</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。  </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，默认情况下，</font><em><font style="vertical-align: inherit;">newObj</font></em><font style="vertical-align: inherit;">将是一个空对象，但是由于其原型链，它似乎具有</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">oldObj的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有值</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在如果你做的另一方面</font></font><code>var newObj=new oldObj()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，原型</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">newObj</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">oldObj.prototype</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是不必要的难以理解。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">诀窍是使用 </font></font></p>

<pre><code>Object.create=function(proto){<font></font>
  var F = function(){};<font></font>
  F.prototype = proto;<font></font>
  var instance = new F();<font></font>
  return instance;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此函数内部，仅在此处应使用new。</font><font style="vertical-align: inherit;">之后，只需使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.create（）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font><font style="vertical-align: inherit;">该方法解决了原型问题。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin老丝</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我同意佩斯和这里的一些观点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我看来，“新”似乎是自我描述对象的创建，而Greg Dean所描述的YUI模式被</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全遮盖了</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人可能写的可能性</font></font><code>var bar = foo;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者</font></font><code>var bar = baz();</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">baz不是对象创建方法</font><font style="vertical-align: inherit;">的可能性</font><font style="vertical-align: inherit;">似乎</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">危险</font><em><font style="vertical-align: inherit;">得多</font></em><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony达蒙Mandy</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不使用new关键字的原理很简单：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过完全不使用它，可以避免因意外遗漏而导致的陷阱。</font><font style="vertical-align: inherit;">YUI使用的构造模式是如何完全避免使用新关键字的示例”</font></font></p>

<pre><code>var foo = function () {<font></font>
    var pub= { };<font></font>
    return pub;<font></font>
}<font></font>
var bar = foo();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您可以这样：</font></font></p>

<pre><code>function foo() { }<font></font>
var bar = new foo();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是这样做会冒着有人忘记使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">new</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字，而</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">this</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符全是富巴的风险。</font><font style="vertical-align: inherit;">AFAIK没有这样做的优势（除了您已经习惯了）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在一天结束时：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是关于防御。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  您可以使用新的陈述吗？</font><font style="vertical-align: inherit;">是。</font><font style="vertical-align: inherit;">它会使您的代码更危险吗？</font><font style="vertical-align: inherit;">是。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您曾经写过C ++，则类似于删除指针后将其设置为NULL。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖凯樱</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为“新”可增加代码的清晰度。</font><font style="vertical-align: inherit;">清晰是值得的。</font><font style="vertical-align: inherit;">很高兴知道有陷阱，但是通过避免清晰性来避免陷阱似乎对我而言并不可行。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LItachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript是一种动态语言，有数不胜数的方法可以弄乱另一种语言会阻止您的位置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">避免使用基本语言功能（例如</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可能会搞砸了）有点像在穿过雷区之前脱下闪亮的新鞋，以防万一您的鞋子浑浊。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用一种约定，其中函数名称以小写字母开头，而实际上是类定义的“函数”以大写字母开头。</font><font style="vertical-align: inherit;">结果是一个非常引人注目的视觉线索，表明“语法”是错误的：</font></font></p>

<pre><code>var o = MyClass();  // this is clearly wrong.
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除此以外，良好的命名习惯也有帮助。</font><font style="vertical-align: inherit;">在所有函数完成工作之后，因此名称中应该有一个动词，而类表示对象，是不带动词的名词和形容词。</font></font></p>

<pre><code>var o = chair() // Executing chair is daft.<font></font>
var o = createChair() // makes sense.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有趣的是，SO的语法着色如何解释了上面的代码。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖凯樱</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种情况</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新就是我所说的</font></font><a href="http://old.robowiki.net/cgi-bin/robowiki?PoohCoding" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">维尼编码</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">小熊维尼跟随他的肚子。</font><font style="vertical-align: inherit;">我说去</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你正在使用，而不是语言</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反对</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该语言的维护者很可能会针对他们尝试鼓励的惯用语优化该语言。</font><font style="vertical-align: inherit;">如果他们在语言中添加了新关键字，他们可能会认为在创建新实例时明确一点是有意义的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遵循该语言意图编写的代码将在每个发行版中提高效率。</font><font style="vertical-align: inherit;">避免使用该语言的关键构造的代码将随着时间而受苦。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：这远远超出了性能。</font><font style="vertical-align: inherit;">我无法数出我听到（或说过）“他们为什么这么做</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？”的次数。</font><font style="vertical-align: inherit;">当发现奇怪的代码时。</font><font style="vertical-align: inherit;">经常发现，在编写代码时，有一些“好的”理由。</font><font style="vertical-align: inherit;">遵循语言的道理是您最好的保证，因为从现在开始几年后都不会嘲笑您的代码。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无伽罗</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我写了一篇有关如何减轻在没有new关键字的情况下调用构造函数的问题的文章。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这主要是讲解性的，但是它显示了如何创建可以使用或不使用的构造函数，</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且不需要您添加</font></font><a href="http://en.wikipedia.org/wiki/Boilerplate_code" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样板代码</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在每个构造函数中</font><font style="vertical-align: inherit;">进行测试</font><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="http://js-bits.blogspot.com/2010/08/constructors-without-using-new.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://js-bits.blogspot.com/2010/08/constructors-without-using-new.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是该技术的要点：</font></font></p>

<pre><code>/**<font></font>
 * Wraps the passed in constructor so it works with<font></font>
 * or without the new keyword<font></font>
 * @param {Function} realCtor The constructor function.<font></font>
 *    Note that this is going to be wrapped<font></font>
 *    and should not be used directly <font></font>
 */<font></font>
function ctor(realCtor){<font></font>
  // This is going to be the actual constructor<font></font>
  return function wrapperCtor(){<font></font>
    var obj; // object that will be created<font></font>
    if (this instanceof wrapperCtor) {<font></font>
      // Called with new<font></font>
      obj = this;<font></font>
    } else {<font></font>
      // Called without new. Create an empty object of the<font></font>
      // correct type without running that constructor<font></font>
      surrogateCtor.prototype = wrapperCtor.prototype;<font></font>
      obj = new surrogateCtor();<font></font>
    }<font></font>
    // Call the real constructor function<font></font>
    realCtor.apply(obj, arguments);<font></font>
    return obj;<font></font>
  }<font></font>
<font></font>
  function surrogateCtor() {}<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用方法如下：</font></font></p>

<pre><code>// Create our point constructor<font></font>
Point = ctor(function(x,y){<font></font>
  this.x = x;<font></font>
  this.y = y;<font></font>
});<font></font>
<font></font>
// This is good<font></font>
var pt = new Point(20,30);<font></font>
// This is OK also<font></font>
var pt2 = Point(20,30);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony阿飞</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚阅读了他在克罗克福德（Crockfords）的书“ Javascript：好的部分”中的部分内容。</font><font style="vertical-align: inherit;">我感觉到他认为曾经刺伤他的一切都是有害的：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于开关掉线：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我绝不允许切换案例陷入下一个案例。</font><font style="vertical-align: inherit;">我曾在激烈的演讲中谈到为什么有时有用，然后立即由于意外的失败导致代码错误。</font><font style="vertical-align: inherit;">（第97页，ISBN 978-0-596-51774-8）</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于++和- </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">众所周知，++（递增）和-（递减）运算符会通过鼓励复杂性而导致不良代码。</font><font style="vertical-align: inherit;">在启用病毒和其他安全威胁方面，它们仅次于错误的体系结构。</font><font style="vertical-align: inherit;">（第122页）</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于新：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你忘记了包含</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
  调用构造函数时前缀，那么</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将不会被绑定到新的对象。</font><font style="vertical-align: inherit;">遗憾的是，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
  将绑定到全局对象，因此您将无法破坏全局变量，而不是增加新对象。</font><font style="vertical-align: inherit;">那真是太糟糕了。</font><font style="vertical-align: inherit;">没有编译警告，也没有运行时警告。</font><font style="vertical-align: inherit;">（第49页）</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有更多，但我希望您能明白。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对您的问题的回答：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不，这不是有害的。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是如果忘记了使用它的时间，可能会遇到一些问题。</font><font style="vertical-align: inherit;">如果您在良好的环境中进行开发，则会注意到这一点。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新资料</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编写此答案大约一年后，发布了ECMAScript的第五版，并支持</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严格模式</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在严格模式下，</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不再绑定到全局对象，而是绑定到</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Crockford在推广良好的JavaScript技术方面做了很多工作。</font><font style="vertical-align: inherit;">他对语言关键要素的自以为是的态度引发了许多有用的讨论。</font><font style="vertical-align: inherit;">就是说，太多的人把每一个“坏”或“有害”的宣告当作福音，拒绝超越一个人的视线。</font><font style="vertical-align: inherit;">有时可能会令人沮丧。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与从头开始构建每个对象相比</font><font style="vertical-align: inherit;">，使用</font><font style="vertical-align: inherit;">关键字</font><font style="vertical-align: inherit;">提供的功能</font><font style="vertical-align: inherit;">具有多个优点：</font></font></p>

<ol>
<li><a href="https://stackoverflow.com/questions/186244/what-does-it-mean-that-javascript-is-a-prototype-based-language"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原型继承</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">尽管基于类的OO语言的人们经常将怀疑和嘲笑混为一谈，但是JavaScript的本机继承技术是一种简单且令人惊讶的有效代码重用方法。</font><font style="vertical-align: inherit;">并且new关键字是使用它的规范方法（并且只有可用的跨平台方法）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">性能。</font><font style="vertical-align: inherit;">这是＃1的副作用：如果我想向创建的每个对象添加10个方法，我</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编写一个创建函数，将每个方法手动分配给每个新对象...或者，我可以将它们分配给创建功能，</font></font><code>prototype</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并用于</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记新对象。</font><font style="vertical-align: inherit;">这样不仅速度更快（原型上的每个方法都不需要代码），而且还避免了为每个方法使用单独的属性来膨胀每个对象。</font><font style="vertical-align: inherit;">在较慢的机器（尤其是较慢的JS解释器）上，当创建许多对象时，这可能意味着可以节省大量的时间和内存。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，它</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个关键的劣势，其他答案对此有很好的描述：如果您忘记使用它，您的代码将在没有警告的情况下中断。</font><font style="vertical-align: inherit;">幸运的是，这种缺点很容易消除-只需向函数本身添加一些代码即可：</font></font></p>

<pre><code>function foo()<font></font>
{<font></font>
   // if user accidentally omits the new keyword, this will <font></font>
   // silently correct the problem...<font></font>
   if ( !(this instanceof foo) )<font></font>
      return new foo();<font></font>
<font></font>
   // constructor logic follows...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以拥有</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不必担心因意外滥用而引起的问题</font><font style="vertical-align: inherit;">的优点</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果对破坏代码的想法无声地起作用，您甚至可以在检查中添加一个断言。</font><font style="vertical-align: inherit;">或者，如</font></font><a href="https://stackoverflow.com/users/36866/some"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">某些</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">评论所述，使用检查来引入运行时异常：</font></font></p>

<pre><code>if ( !(this instanceof arguments.callee) ) <font></font>
   throw new Error("Constructor called as a function");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（请注意，此代码段能够避免对构造函数名称进行硬编码，因为与前面的示例不同，它无需实际实例化对象-因此，可以将其复制到每个目标函数中，而无需进行修改。）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">John Resig在他的</font></font><a href="http://ejohn.org/blog/simple-class-instantiation/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“类”实例化简单</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文章中</font><font style="vertical-align: inherit;">详细介绍了此技术</font><font style="vertical-align: inherit;">，并包括一种默认情况下将此行为构建到“类”中的方法。</font><font style="vertical-align: inherit;">绝对值得一读...正如他即将出版的书</font></font><a href="http://www.manning.com/resig/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">《 JavaScript忍者的秘密》一样，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该书</font><font style="vertical-align: inherit;">在JavaScript语言的此功能和许多其他“有害”功能中发现了隐藏的金子（该</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">章</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对</font></font><code>with</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那些最初被解雇的人特别有启发性此功能非常align头）。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
