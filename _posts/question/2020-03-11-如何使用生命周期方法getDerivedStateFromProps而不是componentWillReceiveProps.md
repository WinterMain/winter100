---
layout: question
title:  如何使用生命周期方法getDerivedStateFromProps而不是componentWillReceiveProps
date:   2020-03-11T09:50:14.000Z
description: 看起来它将componentWillReceiveProps在即将发布的版本中完全淘汰，取而代之的是新的生命周期方法getDerivedStateFrom...
img: 
author: 伽罗卡卡西
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来它将</font></font><code>componentWillReceiveProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在即将发布的版本中完全淘汰，取而代之的是新的生命周期方法</font></font><code>getDerivedStateFromProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><a href="https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">static getDerivedStateFromProps（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经检查，它看起来像你现在无法作出直接比较</font></font><code>this.props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>nextProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，就像你可以在</font></font><code>componentWillReceiveProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有没有办法解决？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且，它现在返回一个对象。</font><font style="vertical-align: inherit;">我是否正确假设返回值本质上是</font></font><code>this.setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是我在网上找到的示例：</font></font><a href="https://github.com/reactjs/rfcs/blob/master/text/0006-static-lifecycle-methods.md#state-derived-from-propsstate" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态源自props / state</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前</font></font></strong></p>

<pre><code>class ExampleComponent extends React.Component {<font></font>
  state = {<font></font>
    derivedData: computeDerivedState(this.props)<font></font>
  };<font></font>
<font></font>
  componentWillReceiveProps(nextProps) {<font></font>
    if (this.props.someValue !== nextProps.someValue) {<font></font>
      this.setState({<font></font>
        derivedData: computeDerivedState(nextProps)<font></font>
      });<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后</font></font></strong></p>

<pre><code>class ExampleComponent extends React.Component {<font></font>
  // Initialize state in constructor,<font></font>
  // Or with a property initializer.<font></font>
  state = {};<font></font>
<font></font>
  static getDerivedStateFromProps(nextProps, prevState) {<font></font>
    if (prevState.someMirroredValue !== nextProps.someValue) {<font></font>
      return {<font></font>
        derivedData: computeDerivedState(nextProps),<font></font>
        someMirroredValue: nextProps.someValue<font></font>
      };<font></font>
    }<font></font>
<font></font>
    // Return null to indicate no change to state.<font></font>
    return null;<font></font>
  }<font></font>
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
            <span class="discuss-user">西门乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关删除的</font></font><code>componentWillReceiveProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：你应该能够与组合来处理它的用途</font></font><code>getDerivedStateFromProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>componentDidUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，看到</font></font><a href="https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#examples" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的阵营博客文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，例如迁移。</font><font style="vertical-align: inherit;">是的，由返回的对象</font></font><code>getDerivedStateFromProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似于传递给的对象更新状态</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">万一您确实需要道具的旧值，可以随时使用以下内容将其缓存在状态中：</font></font></p>

<pre><code>state = {<font></font>
  cachedSomeProp: null<font></font>
  // ... rest of initial state<font></font>
};<font></font>
<font></font>
static getDerivedStateFromProps(nextProps, prevState) {<font></font>
  // do things with nextProps.someProp and prevState.cachedSomeProp<font></font>
  return {<font></font>
    cachedSomeProp: nextProps.someProp,<font></font>
    // ... other derived state properties<font></font>
  };<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何不影响状态的东西都可以放入</font></font><code>componentDidUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，甚至还有一个</font></font><code>getSnapshotBeforeUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于底层的东西。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：要了解新的（和旧的）生命周期方法，</font></font><a href="https://github.com/Oblosys/react-lifecycle-visualizer#readme" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-lifecycle-visualizer</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">软件包可能会有所帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如我们</font></font><strong><a href="https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最近发布的博客作出反应</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在绝大多数情况下，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你并不需要</font></font><code>getDerivedStateFromProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在所有</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果只想计算一些派生数据，请执行以下任一操作：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就在里面做 </font></font><code>render</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，如果重新计算的成本很高，请使用类似的备忘录助手</font></font><code>memoize-one</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是最简单的“之后”示例：</font></font></p>

<pre><code>import memoize from "memoize-one";<font></font>
<font></font>
class ExampleComponent extends React.Component {<font></font>
  getDerivedData = memoize(computeDerivedState);<font></font>
<font></font>
  render() {<font></font>
    const derivedData = this.getDerivedData(this.props.someValue);<font></font>
    // ...<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看</font></font><strong><a href="https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">博客文章的此部分</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以了解更多信息。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
