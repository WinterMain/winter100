---
layout: question
title:  javascript中的多个箭头功能是什么意思？
date:   2020-03-14T10:07:58.000Z
description: 我一直在阅读一堆react代码，并且看到一些我不理解的东西：handleChange = field => e => {  e.preventDef...
img: 
author: 伊芙妮
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在阅读一堆</font></font><code>react</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码，并且看到一些我不理解的东西：</font></font></p>

<pre><code>handleChange = field =&gt; e =&gt; {<font></font>
  e.preventDefault();<font></font>
  /// Do something here<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易凯</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可能并不完全相关，但是由于提到的问题react是用例（并且我一直碰到这个SO线程）：双箭头功能的一个重要方面在这里没有明确提及。</font><font style="vertical-align: inherit;">只有“第一个”箭头（函数）被命名（因此在运行时可以“区分”），随后的任何箭头都是匿名的，从React的角度来看，每个箭头都被视为“新”对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，双箭头功能将导致任何PureComponent始终重新渲染。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您有一个带有更改处理程序的父组件，如下所示：</font></font></p>

<pre><code>handleChange = task =&gt; event =&gt; { ... operations which uses both task and event... };
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使用如下渲染：</font></font></p>

<p><code>{
   tasks.map(task =&gt; &lt;MyTask handleChange={this.handleChange(task)}/&gt;
}</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在输入或单击上使用handleChange。</font><font style="vertical-align: inherit;">这一切都有效并且看起来非常不错。</font><font style="vertical-align: inherit;">但是，这意味着将导致父项重新呈现的任何更改（如完全不相关的状态更改）也将重新呈现所有MyTask，即使它们是PureComponents。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以通过多种方式来缓解这种情况，例如传递“最外”箭头和您将使用的对象，或者编写自定义的shouldUpdate函数，或者回到基础知识，例如编写命名函数（并手动绑定此函数……）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简洁</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> simple</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是一个函数，它返回另一个以简短方式编写的函数。</font></font></p>

<pre class="lang-js prettyprint-override"><code>const handleChange = field =&gt; e =&gt; {<font></font>
  e.preventDefault()<font></font>
  // Do something here<font></font>
}<font></font>
<font></font>
// is equal to <font></font>
function handleChange(field) {<font></font>
  return function(e) {<font></font>
    e.preventDefault()<font></font>
    // Do something here<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">人们为什么这样做</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ❓</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在需要编写可自定义的功能时遇到了什么？</font><font style="vertical-align: inherit;">还是您必须编写一个具有固定参数（参数）的回调函数，但是您需要向该函数传递更多变量，但要避免使用全局变量？</font><font style="vertical-align: inherit;">如果您的回答为“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”，那么这就是方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，我们有一个</font></font><code>button</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">with onClick回调。</font><font style="vertical-align: inherit;">而且我们需要传递</font></font><code>id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给函数，但是</font></font><code>onClick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只接受一个参数</font></font><code>event</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此不能像这样传递额外的参数：</font></font></p>

<pre class="lang-js prettyprint-override"><code>const handleClick = (event, id) {<font></font>
  event.preventDefault()<font></font>
  // Dispatch some delete action by passing record id<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不起作用！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我们将创建一个函数，该函数将返回具有其自身变量范围的其他函数，而没有任何全局变量，因为全局变量是邪恶的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面的函数</font></font><code>handleClick(props.id)}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将被调用并返回一个函数，它将</font></font><code>id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在其作用域内！</font><font style="vertical-align: inherit;">无论按下多少次，id都不会相互影响或改变，它们是完全隔离的。</font></font></p>

<pre class="lang-js prettyprint-override"><code>const handleClick = id =&gt; event {<font></font>
  event.preventDefault()<font></font>
  // Dispatch some delete action by passing record id<font></font>
}<font></font>
<font></font>
const Confirm = props =&gt; (<font></font>
  &lt;div&gt;<font></font>
    &lt;h1&gt;Are you sure to delete?&lt;/h1&gt;<font></font>
    &lt;button onClick={handleClick(props.id)}&gt;<font></font>
      Delete<font></font>
    &lt;/button&gt;<font></font>
  &lt;/div<font></font>
)<font></font>
<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西里</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的问题中的示例是</font></font><code>curried function</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">第一个参数</font></font><code>arrow function</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并具有的</font><font style="vertical-align: inherit;">a的示例</font></font><code>implicit return</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">箭头函数按词法绑定此对象，即它们没有自己的</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数，但从</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">封闭范围</font><font style="vertical-align: inherit;">获取</font><font style="vertical-align: inherit;">值</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与上面的代码等效</font></font></p>

<pre><code>const handleChange = (field) {<font></font>
  return function(e) {<font></font>
     e.preventDefault();<font></font>
     /// Do something here<font></font>
  }.bind(this);<font></font>
}.bind(this);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于示例的另一件事要注意的是，将其定义</font></font><code>handleChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为const或函数。</font><font style="vertical-align: inherit;">可能您将其用作类方法的一部分，并且使用了</font></font><code>class fields syntax</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，与其直接绑定外部函数，不如将其绑定到类构造函数中</font></font></p>

<pre><code>class Something{<font></font>
    constructor(props) {<font></font>
       super(props);<font></font>
       this.handleChange = this.handleChange.bind(this);<font></font>
    }<font></font>
    handleChange(field) {<font></font>
        return function(e) {<font></font>
           e.preventDefault();<font></font>
           // do something<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该示例中要注意的另一件事是隐式和显式返回之间的区别。</font></font></p>

<pre><code>const abc = (field) =&gt; field * 2;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面是隐式返回的示例，即。</font><font style="vertical-align: inherit;">它以值字段作为参数，并返回结果</font></font><code>field*2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">该结果</font><font style="vertical-align: inherit;">明确指定要返回的函数</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于显式返回，您将显式告诉方法返回值</font></font></p>

<pre><code>const abc = () =&gt; { return field*2; }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于箭头功能要注意的另一件事是它们没有自己的功能，</font></font><code>arguments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但也从父级范围继承了该功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如果您仅定义一个箭头函数，例如</font></font></p>

<pre><code>const handleChange = () =&gt; {<font></font>
   console.log(arguments) // would give an error on running since arguments in undefined<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为替代，箭头函数提供您可以使用的其余参数</font></font></p>

<pre><code>const handleChange = (...args) =&gt; {<font></font>
   console.log(args);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Tony古一</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一般提示，如果您对新的JS语法及其编译方式感到困惑，则可以检查</font></font><a href="https://babeljs.io/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">babel</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如，将您的代码复制到babel中并选择es2015预设将给出类似的输出</font></font></p>

<pre><code>handleChange = function handleChange(field) {<font></font>
 return function (e) {<font></font>
 e.preventDefault();<font></font>
  // Do something here<font></font>
   };<font></font>
 };<font></font>
</code></pre>

<p><a href="https://i.stack.imgur.com/vWrgH.png" rel="noreferrer"><img src="https://i.stack.imgur.com/vWrgH.png" alt="巴别塔"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗L</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理解</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Syntax" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">箭头函数</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Syntax" rel="noreferrer"><font style="vertical-align: inherit;">可用语法</font></a><font style="vertical-align: inherit;">将使您了解在“链接”时它们所引入的行为，如您提供的示例中所示。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当编写不带大括号，带有或不带有多个参数的箭头函数时，将</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">隐式</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font><font style="vertical-align: inherit;">构成函数主体的表达式</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在您的示例中，该表达式是另一个箭头函数。</font></font></p>

<pre><code>No arrow funcs              Implicitly return `e=&gt;{…}`    Explicitly return `e=&gt;{…}` <font></font>
---------------------------------------------------------------------------------<font></font>
function (field) {         |  field =&gt; e =&gt; {            |  field =&gt; {<font></font>
  return function (e) {    |                             |    return e =&gt; {<font></font>
      e.preventDefault()   |    e.preventDefault()       |      e.preventDefault()<font></font>
  }                        |                             |    }<font></font>
}                          |  }                          |  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用箭头语法编写匿名函数的另一个优点是将它们按词法绑定到定义它们的范围。</font><font style="vertical-align: inherit;">从</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN上的“箭头功能”</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">箭头函数表达式</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相比具有更短的语法</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数表达式</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和词法结合</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值。</font><font style="vertical-align: inherit;">箭头函数始终是</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">匿名的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑到它是从</font></font><a href="/questions/tagged/reactjs" class="post-tag" title="显示标记为“ reactjs”的问题" rel="tag"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">reactjs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序中</font><font style="vertical-align: inherit;">获取的，这在您的示例中特别相关</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">作为由@naomik指出的那样，在你做出反应经常访问</font></font><a href="https://facebook.github.io/react/docs/component-specs.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件的成员函数</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>Unbound                     Explicitly bound            Implicitly bound <font></font>
------------------------------------------------------------------------------<font></font>
function (field) {         |  function (field) {       |  field =&gt; e =&gt; {<font></font>
  return function (e) {    |    return function (e) {  |    <font></font>
      this.setState(...)   |      this.setState(...)   |    this.setState(...)<font></font>
  }                        |    }.bind(this)           |    <font></font>
}                          |  }.bind(this)             |  }<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
