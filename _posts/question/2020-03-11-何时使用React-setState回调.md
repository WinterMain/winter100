---
layout: question
title:  何时使用React setState回调
date:   2020-03-11T03:41:26.000Z
description: 当反应组件状态改变时，将调用render方法。因此，对于任何状态更改，都可以在渲染方法主体中执行操作。那么setState回调是否有特定的用例？...
img: 
author: 神无Green前端
category: question
answer: 2
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当反应组件状态改变时，将调用render方法。</font><font style="vertical-align: inherit;">因此，对于任何状态更改，都可以在渲染方法主体中执行操作。</font><font style="vertical-align: inherit;">那么setState回调是否有特定的用例？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第607篇《何时使用React setState回调》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易卡卡西</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑setState调用</font></font></p>

<pre><code>this.setState({ counter: this.state.counter + 1 })
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理念</font></font></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setState可以在异步函数中调用</font></font></p>
</blockquote>

<p>So you cannot rely on <code>this</code>. If the above call was made inside a async function <code>this</code> will refer to state of component at that point of time but we expected this to refer to property inside state at time setState calling or beginning of async task. And as task was async call thus that property may have changed in time being. Thus it is unreliable to use <code>this</code> keyword to refer to some property of state thus we use callback function whose arguments are previousState and props which means when async task was done and it was time to update state using setState call prevState will refer to state now when setState has not started yet. Ensuring reliability that nextState would not be corrupted.</p>

<p>Wrong Code: would lead to corruption of data</p>

<pre><code>this.setState(<font></font>
   {counter:this.state.counter+1}<font></font>
 );<font></font>
</code></pre>

<p><strong>Correct Code with setState  having call back function:</strong></p>

<pre><code> this.setState(<font></font>
       (prevState,props)=&gt;{<font></font>
           return {counter:prevState.counter+1};<font></font>
        }<font></font>
    );<font></font>
</code></pre>

<p>Thus whenever we need to update our current state to next state based on value possed by property just now and all this is happening in async fashion it is good idea to use setState as callback function.</p>

<p><em>I have tried to explain it in codepen here</em> <a href="https://codepen.io/vtechguys/pen/gJBJxp" rel="nofollow noreferrer">CODE PEN</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝村村</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想到的1.用例是一个</font></font><code>api</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用，不应进入渲染，因为它将用于</font></font><code>each</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态更改。</font><font style="vertical-align: inherit;">而且，API调用仅应在特殊的状态更改上执行，而不应在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渲染上执行。</font></font></p>

<pre><code>changeSearchParams = (params) =&gt; {<font></font>
  this.setState({ params }, this.performSearch)<font></font>
} <font></font>
<font></font>
performSearch = () =&gt; {<font></font>
  API.search(this.state.params, (result) =&gt; {<font></font>
    this.setState({ result })<font></font>
  });<font></font>
}<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，对于任何状态更改，都可以在渲染方法主体中执行操作。</font></font></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常糟糕的做法</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-method应该是纯净的，这意味着不应执行任何操作，状态更改，api调用，只需合并视图并返回即可。</font><font style="vertical-align: inherit;">仅应在某些事件上执行操作。</font><font style="vertical-align: inherit;">渲染不是事件，而是</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
