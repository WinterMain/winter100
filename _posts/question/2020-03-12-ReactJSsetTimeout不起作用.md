---
layout: question
title:  ReactJS：setTimeout（）不起作用？
date:   2020-03-12T09:32:28.000Z
description: 请记住以下代码： var Component = React.createClass({    getInitialState  function...
img: 
author: 神无蛋蛋
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请记住以下代码： </font></font></p>

<pre><code>var Component = React.createClass({<font></font>
<font></font>
    getInitialState: function () {<font></font>
        return {position: 0};    <font></font>
    },<font></font>
<font></font>
    componentDidMount: function () {<font></font>
        setTimeout(this.setState({position: 1}), 3000);<font></font>
    },<font></font>
<font></font>
    render: function () {<font></font>
         return (<font></font>
            &lt;div className="component"&gt;<font></font>
                {this.state.position}<font></font>
            &lt;/div&gt;<font></font>
         ); <font></font>
    }<font></font>
<font></font>
});<font></font>
<font></font>
ReactDOM.render(<font></font>
    &lt;Component /&gt;,<font></font>
    document.getElementById('main')<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">难道不应该在3秒后改变状态吗？</font><font style="vertical-align: inherit;">它立即改变。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的主要目标是每3秒更改一次状态（使用</font></font><code>setInterval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），但由于它不起作用，因此我尝试了</font></font><code>setTimeout()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该方法也不起作用。</font><font style="vertical-align: inherit;">上面有灯吗？</font><font style="vertical-align: inherit;">谢谢！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1217篇《ReactJS：setTimeout（）不起作用？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有3种方法可以访问“ setTimeout”函数内部的范围</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一，</font></font></p>

<pre><code>const self = this<font></font>
setTimeout(function() {<font></font>
  self.setState({position:1})<font></font>
}, 3000)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其次是使用ES6箭头功能，导致箭头功能本身没有作用域（此）</font></font></p>

<pre><code>setTimeout(()=&gt; {<font></font>
   this.setState({position:1})<font></font>
}, 3000)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第三个是在函数内部绑定范围</font></font></p>

<pre><code>setTimeout(function(){<font></font>
   this.setState({position:1})<font></font>
}.bind(this), 3000)<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony达蒙Mandy</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于括号而被立即调用！</font><font style="vertical-align: inherit;">将其包装在一个匿名函数中，然后调用它：</font></font></p>

<pre><code>setTimeout(function() {<font></font>
    this.setState({position: 1})<font></font>
}.bind(this), 3000);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天小卤蛋Green</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的代码作用域（</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将是您的</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象，而不是您的react组件，因此这</font></font><code>setTimeout(this.setState({position: 1}), 3000)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将导致崩溃。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那来自javascript而不是React，它是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">js闭包</font></font></strong></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，为了绑定当前的反应组件范围，请执行以下操作：</font></font></p>

<pre><code>setTimeout(function(){this.setState({position: 1})}.bind(this), 3000);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，如果您的浏览器支持es6或您的projs支持将es6编译为es5，请尝试使用箭头功能，因为箭头功能可解决“此”问题：</font></font></p>

<pre><code>setTimeout(()=&gt;this.setState({position: 1}), 3000);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这有点旧了，但是要注意，React建议重新安装组件，以清除安装间隔：</font><a href="https://reactjs.org/docs/state-and-lifecycle.html" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> ://reactjs.org/docs/state-and-lifecycle.html</font></font><a href="https://reactjs.org/docs/state-and-lifecycle.html" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我想在这个讨论中添加这个答案：</font></font></p>

<pre><code>  componentDidMount() {<font></font>
    this.timerID = setInterval(<font></font>
      () =&gt; this.tick(),<font></font>
      1000<font></font>
    );<font></font>
  }<font></font>
  componentWillUnmount() {<font></font>
    clearInterval(this.timerID);<font></font>
  }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你没有告诉谁叫setTimeout</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，如何调用超时而无需调用其他功能。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.您可以执行此操作而无需执行其他功能。</font></font></h3>

<pre><code>setTimeout(this.setState.bind(this, {position:1}), 3000);
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">function.prototype.bind（）</font></font></strong></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setTimeout获取函数的位置并将其保留在上下文中。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.即使编写更少的代码也可以做到这一点。</font></font></h3>

<pre><code>setTimeout(this.setState, 3000, {position:1});
</code></pre>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能</font></font></em></strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些时候使用了相同的绑定方法</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setTimeout仅占据函数的位置，并且函数已经具有上下文？</font><font style="vertical-align: inherit;">无论如何，它有效！</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：这些可与您在js中使用的任何功能一起使用。</font></font></em></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞宝儿猴子</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>setTimeout(() =&gt; {<font></font>
  this.setState({ position: 1 });<font></font>
}, 3000);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于ES6箭头功能不会更改的上下文，因此上述方法也将起作用</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Tony</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做</font></font></p>

<pre><code>setTimeout(<font></font>
    function() {<font></font>
        this.setState({position: 1});<font></font>
    }<font></font>
    .bind(this),<font></font>
    3000<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则，您会将的结果传递</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给</font></font><code>setTimeout</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
