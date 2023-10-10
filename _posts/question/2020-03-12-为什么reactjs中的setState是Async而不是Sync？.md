---
layout: question
title:  为什么reactjs中的setState是Async而不是Sync？
date:   2020-03-12T02:53:16.000Z
description: 我刚刚发现，在React this.setState()函数中，任何组件中的函数都是异步的，或者在完成其调用的函数后被调用。现在我搜索并找到了这个博客...
img: 
author: Tom阳光
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚发现，在React </font></font><code>this.setState()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数中，任何组件</font><font style="vertical-align: inherit;">中的</font><font style="vertical-align: inherit;">函数都是异步的，或者在完成其调用的函数后被调用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在我搜索并找到了这个博客（</font></font><a href="http://www.bennadel.com/blog/2893-setstate-state-mutation-operation-may-be-synchronous-in-reactjs.htm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setState（）状态更改操作在ReactJS中可能是同步的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，他发现</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是async（在堆栈为空时调用）或sync（在调用后立即调用），具体取决于触发状态更改的方式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在这两件事很难消化 </font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在博客中，该</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数在一个函数内部被调用</font></font><code>updateState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是触发该</font></font><code>updateState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数的并不是被调用函数知道的东西。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们为什么要使</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">异步，因为JS是单线程语言，而此setState不是WebAPI或服务器调用，因此只能在JS的线程上完成。</font><font style="vertical-align: inherit;">他们这样做是为了使Re-Rendering不会停止所有事件侦听器和其他操作，或者存在其他设计问题。</font></font></li>
</ol></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第904篇《为什么reactjs中的setState是Async而不是Sync？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里GO</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好文章在这里   </font></font><a href="https://github.com/vasanthk/react-bits/blob/master/patterns/27.passing-function-to-setState.md" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/vasanthk/react-bits/blob/master/patterns/27.passing-function-to-setState.md</font></font></a></p>

<pre><code>// assuming this.state.count === 0<font></font>
this.setState({count: this.state.count + 1});<font></font>
this.setState({count: this.state.count + 1});<font></font>
this.setState({count: this.state.count + 1});<font></font>
// this.state.count === 1, not 3<font></font>
<font></font>
Solution<font></font>
this.setState((prevState, props) =&gt; ({<font></font>
  count: prevState.count + props.increment<font></font>
}));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或通过回调  </font></font><code>this.setState ({.....},callback)</code></p>

<p><a href="https://medium.com/javascript-scene/setstate-gate-abc10a9b2d82" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://medium.com/javascript-scene/setstate-gate-abc10a9b2d82 </font></font></a>
 <a href="https://medium.freecodecamp.org/functional-setstate-is-the-future-of-react-374f30401b6b" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://medium.freecodecamp.org/functional-setstate-is-the-future-of-react-374f30401b6b</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AL村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用以下自动换行</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行同步调用</font></font></em>
</p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>this.setState((state =&gt;{<font></font>
  return{<font></font>
    something<font></font>
  }<font></font>
})</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗小卤蛋米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">操作是异步的，并且为提高性能而进行了批处理。</font><font style="vertical-align: inherit;">的文档中对此进行了说明</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setState（）不会立即使this.state突变，而是创建一个挂起的状态转换。</font><font style="vertical-align: inherit;">调用此方法后访问this.state可能会返回现有值。</font><font style="vertical-align: inherit;">无法保证对setState的调用的同步操作，并且可能为提高性能而对调用进行批处理。</font></font></p>
</blockquote>

<p><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
2）为什么它们会使setState异步，因为JS是单线程语言，</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是WebAPI或服务器调用？</font></font><br></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是因为</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改状态并导致重新渲染。</font><font style="vertical-align: inherit;">这可能是一项昂贵的操作，并且使其同步可能会使浏览器无响应。
</font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
因此，setState调用是异步的也可以是批处理的，以获得更好的UI体验和性能。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
