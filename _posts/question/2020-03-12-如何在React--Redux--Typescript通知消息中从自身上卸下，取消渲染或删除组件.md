---
layout: question
title:  如何在React / Redux / Typescript通知消息中从自身上卸下，取消渲染或删除组件
date:   2020-03-12T07:48:10.000Z
description: 我知道这个问题已经被问过几次了，但是在大多数情况下，解决方法是在父级中解决这个问题，因为责任流只是在下降。但是，有时您需要通过一种方法杀死组件。我知道我无...
img: 
author: L路易
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这个问题已经被问过几次了，但是在大多数情况下，解决方法是在父级中解决这个问题，因为责任流只是在下降。</font><font style="vertical-align: inherit;">但是，有时您需要通过一种方法杀死组件。</font><font style="vertical-align: inherit;">我知道我无法修改其道具，如果我开始将布尔值添加为状态，那么对于一个简单的组件而言，它将会变得非常混乱。</font><font style="vertical-align: inherit;">我正在尝试实现以下目标：一个小的错误框组件，使用“ x”将其关闭。</font><font style="vertical-align: inherit;">通过其道具接收到错误将显示该错误，但是我想一种从其自己的代码中关闭该错误的方法。</font></font></p>

<pre><code>class ErrorBoxComponent extends React.Component {<font></font>
<font></font>
  dismiss() {<font></font>
    // What should I put here ?<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    if (!this.props.error) {<font></font>
      return null;<font></font>
    }<font></font>
<font></font>
    return (<font></font>
      &lt;div data-alert className="alert-box error-box"&gt;<font></font>
        {this.props.error}<font></font>
        &lt;a href="#" className="close" onClick={this.dismiss.bind(this)}&gt;&amp;times;&lt;/a&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
<font></font>
export default ErrorBoxComponent;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会在父组件中这样使用它：</font></font></p>

<pre><code>&lt;ErrorBox error={this.state.error}/&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在本节中   </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我应该放在这里什么？</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我已经尝试过：</font></font></p>

<p><code>ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);</code>
Which throws a nice error in the console :</p>

<blockquote>
  <p>Warning: unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. Instead, have the parent component update its state and rerender in order to remove this component.</p>
</blockquote>

<p>Should I copy the incoming props in the ErrorBox state, and manipulate it only internally ?</p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1085篇《如何在React / Redux / Typescript通知消息中从自身上卸下，取消渲染或删除组件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">6的不行</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我去过这个帖子大约十次了，我只想在这里留下两分钱。</font><font style="vertical-align: inherit;">您可以有条件地卸载它。</font></font></p>

<pre><code>if (renderMyComponent) {<font></font>
  &lt;MyComponent props={...} /&gt;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您要做的就是将其从DOM中删除以便卸载。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只要</font></font><code>renderMyComponent = true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，组件将呈现。</font><font style="vertical-align: inherit;">如果设置</font></font><code>renderMyComponent = false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将从DOM卸载。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
