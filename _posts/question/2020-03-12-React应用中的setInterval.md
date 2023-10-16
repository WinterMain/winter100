---
layout: question
title:  React应用中的setInterval
date:   2020-03-12T09:02:25.000Z
description: 我在React还是很新，但是我一直在慢慢地学习，遇到了一些我坚持的事情。 我正在尝试在React中构建一个“计时器”组件，老实说，我不知道我是否做得正...
img: 
author: 杨岑宝
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在React还是很新，但是我一直在慢慢地学习，遇到了一些我坚持的事情。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在React中构建一个“计时器”组件，老实说，我不知道我是否做得正确（或有效）。</font><font style="vertical-align: inherit;">在下面我的代码，我设置状态来返回一个对象</font></font><code>{ currentCount: 10 }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并已与玩弄</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>componentWillUnmount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只能得到状态，以“倒计时”，从10到9。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分两部分的问题：我怎么了？</font><font style="vertical-align: inherit;">并且，有没有使用setTimeout的更有效方法（而不是使用</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＆</font></font><code>componentWillUnmount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">先感谢您。</font></font></p>

<pre><code>import React from 'react';<font></font>
<font></font>
var Clock = React.createClass({<font></font>
<font></font>
  getInitialState: function() {<font></font>
    return { currentCount: 10 };<font></font>
  },<font></font>
<font></font>
  componentDidMount: function() {<font></font>
    this.countdown = setInterval(this.timer, 1000);<font></font>
  },<font></font>
<font></font>
  componentWillUnmount: function() {<font></font>
    clearInterval(this.countdown);<font></font>
  },<font></font>
<font></font>
  timer: function() {<font></font>
    this.setState({ currentCount: 10 });<font></font>
  },<font></font>
<font></font>
  render: function() {<font></font>
    var displayCount = this.state.currentCount--;<font></font>
    return (<font></font>
      &lt;section&gt;<font></font>
        {displayCount}<font></font>
      &lt;/section&gt;<font></font>
    );<font></font>
  }<font></font>
<font></font>
});<font></font>
<font></font>
module.exports = Clock;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1170篇《React应用中的setInterval》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Davaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢@dotnetom，@ greg-herbowicz</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果返回“ this.state未定义”-绑定计时器函数：</font></font></p>

<pre><code>constructor(props){<font></font>
    super(props);<font></font>
    this.state = {currentCount: 10}<font></font>
    this.timer = this.timer.bind(this)<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Davaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现您的代码有4个问题：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的计时器方法中，您始终将当前计数设置为10</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您尝试在render方法中更新状态</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您没有使用</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法来实际更改状态</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您没有在状态中存储intervalId</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们尝试解决该问题：</font></font></p>

<pre><code>componentDidMount: function() {<font></font>
   var intervalId = setInterval(this.timer, 1000);<font></font>
   // store intervalId in the state so it can be accessed later:<font></font>
   this.setState({intervalId: intervalId});<font></font>
},<font></font>
<font></font>
componentWillUnmount: function() {<font></font>
   // use intervalId from the state to clear the interval<font></font>
   clearInterval(this.state.intervalId);<font></font>
},<font></font>
<font></font>
timer: function() {<font></font>
   // setState method is used to update the state<font></font>
   this.setState({ currentCount: this.state.currentCount -1 });<font></font>
},<font></font>
<font></font>
render: function() {<font></font>
    // You do not need to decrease the value here<font></font>
    return (<font></font>
      &lt;section&gt;<font></font>
       {this.state.currentCount}<font></font>
      &lt;/section&gt;<font></font>
    );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将导致计时器从10减少到-N。</font><font style="vertical-align: inherit;">如果您希望计时器减少到0，则可以使用经过稍微修改的版本：</font></font></p>

<pre><code>timer: function() {<font></font>
   var newCount = this.state.currentCount - 1;<font></font>
   if(newCount &gt;= 0) { <font></font>
       this.setState({ currentCount: newCount });<font></font>
   } else {<font></font>
       clearInterval(this.state.intervalId);<font></font>
   }<font></font>
},<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
