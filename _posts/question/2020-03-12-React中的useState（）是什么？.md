---
layout: question
title:  React中的useState（）是什么？
date:   2020-03-12T09:05:43.000Z
description: 我目前正在React中学习钩子概念，并试图理解以下示例。import { useState } from 'react';function Exa...
img: 
author: 阿飞古一A
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我目前正在React中学习钩子概念，并试图理解以下示例。</font></font></p>

<pre><code>import { useState } from 'react';<font></font>
<font></font>
function Example() {<font></font>
    // Declare a new state variable, which we'll call "count"<font></font>
    const [count, setCount] = useState(0);<font></font>
<font></font>
  return (<font></font>
    &lt;div&gt;<font></font>
      &lt;p&gt;You clicked {count} times&lt;/p&gt;<font></font>
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;<font></font>
        Click me<font></font>
      &lt;/button&gt;<font></font>
    &lt;/div&gt;<font></font>
  );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的示例在处理程序函数参数本身上增加计数器。</font><font style="vertical-align: inherit;">如果我想在事件处理函数中修改计数值怎么办</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑下面的例子</font></font></p>

<pre><code>setCount = () =&gt; {<font></font>
  //how can I modify count value here. Not sure if I can use setState to modify its value<font></font>
  //also I want to modify other state values as well here. How can I do that<font></font>
}<font></font>
<font></font>
&lt;button onClick={() =&gt; setCount()}&gt;<font></font>
  Click me<font></font>
&lt;/button&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1177篇《React中的useState（）是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProItachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><a href="https://reactjs.org/docs/hooks-overview.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React钩子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是访问</font><a href="https://reactjs.org/docs/hooks-overview.html" rel="noreferrer"><font style="vertical-align: inherit;">React</font></a><font style="vertical-align: inherit;">核心功能的一种新方法（仍在开发中），例如</font></font><code>state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需使用类，在您的示例中，如果您想直接在处理函数中增加一个计数器而不在</font></font><code>onClick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prop中</font><font style="vertical-align: inherit;">直接指定它</font><font style="vertical-align: inherit;">，您可以可以做类似的事情：</font></font></p>

<pre><code>...<font></font>
const [count, setCounter] = useState(0);<font></font>
const [moreStuff, setMoreStuff] = useState(...);<font></font>
...<font></font>
<font></font>
const setCount = () =&gt; {<font></font>
    setCounter(count + 1);<font></font>
    setMoreStuff(...);<font></font>
    ...<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和onClick：</font></font></p>

<pre><code>&lt;button onClick={setCount}&gt;<font></font>
    Click me<font></font>
&lt;/button&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们快速解释一下这一行的情况：</font></font></strong></p>

<pre><code>const [count, setCounter] = useState(0);
</code></pre>

<p><code>useState(0)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回一个元组，其中第一个参数</font></font><code>count</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是计数器的当前状态，并且</font></font><code>setCounter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是允许我们更新计数器状态的方法。</font><font style="vertical-align: inherit;">我们可以使用该</font></font><code>setCounter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法来更新</font></font><code>count</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何地方</font><font style="vertical-align: inherit;">的状态</font><font style="vertical-align: inherit;">-在这种情况下，我们在</font></font><code>setCount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数中</font><font style="vertical-align: inherit;">使用它</font><font style="vertical-align: inherit;">可以做更多的事情；</font><font style="vertical-align: inherit;">带有钩子的想法是，我们能够使代码保持更多功能，并且</font><font style="vertical-align: inherit;">在不需要/不需要时</font><font style="vertical-align: inherit;">避免使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于类的组件</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="https://enmascript.com/articles/2018/10/26/react-conf-2018-understanding-react-hooks-proposal-with-simple-examples" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我写了多个例子挂钩一个完整的文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（包括计数器）如</font></font><a href="https://codepen.io/enmanuelduran/pen/LgMomz" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本codepen</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我利用了</font></font><code>useState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>useEffect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>useContext</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，和</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自定义挂钩</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我可以深入了解有关钩子如何工作的详细信息，但是文档在解释</font></font><a href="https://reactjs.org/docs/hooks-overview.html#-state-hook" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态钩子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和其他钩子方面</font><font style="vertical-align: inherit;">做得很好</font><font style="vertical-align: inherit;">，希望对您有所帮助。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong> <a href="https://github.com/facebook/react/blob/master/CHANGELOG.md#1680-february-6-2019" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">钩子不再是一个建议</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为版本</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">16.8</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用了，因此React网站上有一个部分可以回答一些</font></font><a href="https://reactjs.org/docs/hooks-faq.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FAQ</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Eva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢loelsonk，我这样做了</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>const [dataAction, setDataAction] = useState({name: '', description: ''});<font></font>
<font></font>
    const _handleChangeName = (data) =&gt; {<font></font>
        if(data.name)<font></font>
            setDataAction( prevState  =&gt; ({ ...prevState,   name : data.name }));<font></font>
        if(data.description)<font></font>
            setDataAction( prevState  =&gt; ({ ...prevState,   description : data.description }));<font></font>
    };<font></font>
    <font></font>
    ....return (<font></font>
    <font></font>
          &lt;input onChange={(event) =&gt; _handleChangeName({name: event.target.value})}/&gt;<font></font>
          &lt;input onChange={(event) =&gt; _handleChangeName({description: event.target.value})}/&gt;<font></font>
    )</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里猴子</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><code>useState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是React v16.8.0中可用的钩子之一。</font><font style="vertical-align: inherit;">基本上，它使您可以将原本没有状态/功能的组件变成可以拥有自己状态的组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在最基本的级别上，它是通过以下方式使用的：</font></font></p>

<pre><code>const [isLoading, setLoading] = useState(true);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，这使您可以调用</font></font><code>setLoading</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传递布尔值。</font><font style="vertical-align: inherit;">这是拥有“有状态”功能组件的一种很酷的方法。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一GO</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">useState（）是内置的React挂钩示例，可让您在功能组件中使用状态。</font><font style="vertical-align: inherit;">在React 16.7之前这是不可能的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">useState函数是一个内置的挂钩，可以从react包中导入。</font><font style="vertical-align: inherit;">它允许您向功能组件添加状态。</font><font style="vertical-align: inherit;">使用功能组件内部的useState挂钩，您可以创建一条状态，而无需切换到类组件。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一老丝宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">挂钩是</font></font><code>React v16.7.0-alpha</code> <code>useState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“挂钩” </font><font style="vertical-align: inherit;">中的一个新功能</font><font style="vertical-align: inherit;">。</font></font><code>useState()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置any变量的默认值并在函数组件（PureComponent函数）中进行管理。  </font></font><code>ex : const [count, setCount] = useState(0);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置计数0的默认值。并且u可以使用</font></font><code>setCount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">to </font></font><code>increment</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>decrement</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该值。</font></font><code>onClick={() =&gt; setCount(count + 1)}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">增加计数值。</font></font><a href="https://reactjs.org/docs/hooks-overview.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOC</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
