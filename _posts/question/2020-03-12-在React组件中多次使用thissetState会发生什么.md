---
layout: question
title:  在React组件中多次使用this.setState会发生什么？
date:   2020-03-12T09:27:52.000Z
description: 我想检查一下当您多次使用this.setState时发生了什么（为了讨论而两次）。我认为该组件将被渲染两次，但显然它仅被渲染一次。我的另一个期望是，对se...
img: 
author: 卡卡西Mandy
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想检查一下当您多次使用this.setState时发生了什么（为了讨论而两次）。</font><font style="vertical-align: inherit;">我认为该组件将被渲染两次，但显然它仅被渲染一次。</font><font style="vertical-align: inherit;">我的另一个期望是，对setState的第二个调用可能会在第一个调用之上运行，但是您猜到了-运行良好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接到</font></font><a href="https://jsfiddle.net/xka4v3qx/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSfiddle</font></font></a></p>

<pre><code>var Hello = React.createClass({<font></font>
  render: function() {<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        &lt;div&gt;Hello {this.props.name}&lt;/div&gt;<font></font>
        &lt;CheckBox /&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
<font></font>
var CheckBox = React.createClass({<font></font>
  getInitialState: function() {<font></font>
    return {<font></font>
      alex: 0<font></font>
    };<font></font>
  },<font></font>
<font></font>
  handleChange: function(event) {<font></font>
    this.setState({<font></font>
      value: event.target.value<font></font>
    });<font></font>
    this.setState({<font></font>
      alex: 5<font></font>
    });<font></font>
  },<font></font>
<font></font>
  render: function() {<font></font>
    alert('render');<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        &lt;label htmlFor="alex"&gt;Alex&lt;/label&gt;<font></font>
        &lt;input type="checkbox" onChange={this.handleChange} name="alex" /&gt;<font></font>
        &lt;div&gt;{this.state.alex}&lt;/div&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
<font></font>
ReactDOM.render(<font></font>
  &lt;Hello name="World" /&gt;,<font></font>
  document.getElementById('container')<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如您将看到的，在每个渲染上都会弹出一个警告，提示“渲染”。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否对其正常运作有解释？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1210篇《在React组件中多次使用this.setState会发生什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ASamJim</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React批处理状态更新发生在事件处理程序和生命周期方法中。</font><font style="vertical-align: inherit;">因此，如果您在</font></font><code>&lt;div onClick /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理程序中</font><font style="vertical-align: inherit;">多次更新状态</font><font style="vertical-align: inherit;">，React将在重新渲染之前等待事件处理完成。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要明确的是，这仅适用于React控制的综合事件处理程序和生命周期方法。</font><font style="vertical-align: inherit;">例如，状态更新不在AJAX和</font></font><code>setTimeout</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件处理程序中进行</font><font style="vertical-align: inherit;">批处理</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
