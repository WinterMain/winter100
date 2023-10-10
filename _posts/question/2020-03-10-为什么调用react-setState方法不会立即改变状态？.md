---
layout: question
title:  为什么调用react setState方法不会立即改变状态？
date:   2020-03-10T02:37:41.000Z
description: 我正在阅读reactjs文档的Forms部分，只是尝试了这段代码来演示用法（JSBIN）。onChangevar React= require('re...
img: 
author: 猴子Sam宝儿
category: question
answer: 6
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在阅读</font><a href="/questions/tagged/reactjs" class="post-tag" title="显示标记为“ reactjs”的问题" rel="tag"><font style="vertical-align: inherit;">reactjs</font></a><font style="vertical-align: inherit;">文档的</font></font><a href="https://facebook.github.io/react/docs/forms.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Forms</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分，</font><font style="vertical-align: inherit;">只是尝试了这段代码来演示</font><font style="vertical-align: inherit;">用法（</font><a href="http://jsbin.com/zilofo/edit?html,js,console,output"><font style="vertical-align: inherit;">JSBIN</font></a><font style="vertical-align: inherit;">）。</font></font><a href="/questions/tagged/reactjs" class="post-tag" title="显示标记为“ reactjs”的问题" rel="tag"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><code>onChange</code><font style="vertical-align: inherit;"></font><a href="http://jsbin.com/zilofo/edit?html,js,console,output"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<pre><code>var React= require('react');<font></font>
<font></font>
var ControlledForm= React.createClass({<font></font>
    getInitialState: function() {<font></font>
        return {<font></font>
            value: "initial value"<font></font>
        };<font></font>
    },<font></font>
<font></font>
    handleChange: function(event) {<font></font>
        console.log(this.state.value);<font></font>
        this.setState({value: event.target.value});<font></font>
        console.log(this.state.value);<font></font>
<font></font>
    },<font></font>
<font></font>
    render: function() {<font></font>
        return (<font></font>
            &lt;input type="text" value={this.state.value} onChange={this.handleChange}/&gt;<font></font>
        );<font></font>
    }<font></font>
});<font></font>
<font></font>
React.render(<font></font>
    &lt;ControlledForm/&gt;,<font></font>
  document.getElementById('mount')<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我</font></font><code>&lt;input/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在浏览器中</font><font style="vertical-align: inherit;">更新</font><font style="vertical-align: inherit;">值时，</font><font style="vertical-align: inherit;">回调</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内</font><font style="vertical-align: inherit;">的第二个</font><font style="vertical-align: inherit;">与第一个</font></font><code>handleChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相同</font><font style="vertical-align: inherit;">，为什么</font><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">回调</font><font style="vertical-align: inherit;">范围内</font><font style="vertical-align: inherit;">看不到结果</font><font style="vertical-align: inherit;">？</font></font><code>value</code><font style="vertical-align: inherit;"></font><code>console.log</code><font style="vertical-align: inherit;"></font><code>this.setState({value: event.target.value})</code><font style="vertical-align: inherit;"></font><code>handleChange</code><font style="vertical-align: inherit;"></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第438篇《为什么调用react setState方法不会立即改变状态？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiSam</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><code>async-await</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 语法非常适合以下内容...</font></font></p>

<pre><code>changeStateFunction = () =&gt; {<font></font>
  // Some Worker..<font></font>
<font></font>
  this.setState((prevState) =&gt; ({<font></font>
  year: funcHandleYear(),<font></font>
  month: funcHandleMonth()<font></font>
}));<font></font>
<font></font>
goNextMonth = async () =&gt; {<font></font>
  await this.changeStateFunction();<font></font>
  const history = createBrowserHistory();<font></font>
  history.push(`/calendar?year=${this.state.year}&amp;month=${this.state.month}`);<font></font>
}<font></font>
<font></font>
goPrevMonth = async () =&gt; {<font></font>
  await this.changeStateFunction();<font></font>
  const history = createBrowserHistory();<font></font>
  history.push(`/calendar?year=${this.state.year}&amp;month=${this.state.month}`);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云神乐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意反应生命周期方法！</font></font></p>

<ul>
<li><a href="http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/</font></font></a></li>
<li><a href="https://reactjs.org/docs/react-component.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://reactjs.org/docs/react-component.html</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我工作了几个小时，才发现</font></font><code>getDerivedStateFromProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次之后都会打电话</font><font style="vertical-align: inherit;">给我</font></font><code>setState()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">😂</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamItachi阿飞</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以尝试使用ES7异步/等待。</font><font style="vertical-align: inherit;">例如，使用您的示例：</font></font></p>

<pre><code>handleChange: async function(event) {<font></font>
    console.log(this.state.value);<font></font>
    await this.setState({value: event.target.value});<font></font>
    console.log(this.state.value);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐JinJin</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如React文档中所述，不能保证</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同步触发，因此您</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以在更新之前返回状态。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迈克尔·帕克（Michael Parker）提到在内传递回调</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">状态更改后处理逻辑的另一种方法是通过</font></font><code>componentDidUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生命周期方法，这是React文档中推荐的方法。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，我们建议为这种逻辑使用componentDidUpdate（）。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当可能会连续</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">触发s，并且您希望在每次状态更改后触发相同的函数</font><font style="vertical-align: inherit;">时，此功能特别有用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">除了将回调</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数</font><font style="vertical-align: inherit;">添加到每个回调</font><font style="vertical-align: inherit;">函数之外，您还可以将函数放在的内部</font></font><code>componentDidUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并在必要时</font><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">其中添加特定的逻辑。</font></font></p>

<pre><code>// example<font></font>
componentDidUpdate(prevProps, prevState) {<font></font>
  if (this.state.value &gt; prevState.value) {<font></font>
    this.foo();  <font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom凯</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从React的</font></font><a href="https://facebook.github.io/react/docs/react-component.html#setstate" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><code>setState()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会立即变异，</font></font><code>this.state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但会创建待处理的状态转换。</font></font><code>this.state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用此方法后进行</font><font style="vertical-align: inherit;">访问</font><font style="vertical-align: inherit;">可能会返回现有值。</font><font style="vertical-align: inherit;">无法保证对呼叫的同步操作，</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且可以为提高性能而对呼叫进行批量处理。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要在状态更改后执行函数，请将其作为回调传递。</font></font></p>

<pre><code>this.setState({value: event.target.value}, function () {<font></font>
    console.log(this.state.value);<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L泡芙Jim</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单地说-this.setState（{data：value}）本质上是异步的，这意味着它移出了调用栈，并且只有在解决后才返回到调用栈。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请阅读有关事件循环的内容，以清晰了解JS中的异步性质以及为何需要时间进行更新- </font></font></p>

<blockquote>
  <p><strong><a href="https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4</font></font></a></strong></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此- </font></font></p>

<pre><code>    this.setState({data:value});<font></font>
    console.log(this.state.data); // will give undefined or unupdated value<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于更新需要时间。</font><font style="vertical-align: inherit;">要实现以上过程-</font></font></p>

<pre><code>    this.setState({data:value},function () {<font></font>
     console.log(this.state.data);<font></font>
    });<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
