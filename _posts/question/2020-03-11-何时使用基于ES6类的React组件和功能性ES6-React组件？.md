---
layout: question
title:  何时使用基于ES6类的React组件和功能性ES6 React组件？
date:   2020-03-11T02:51:02.000Z
description: After spending some time learning React I understand the difference between t...
img: 
author: 古一Green
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>After spending some time learning React I understand the difference between the two main paradigms of creating components.</p>

<p>My question is when should I use which one and why? What are the benefits/tradeoffs of one over the other?</p>

<hr>

<p>ES6 classes:</p>

<pre><code>import React, { Component } from 'react';<font></font>
<font></font>
export class MyComponent extends Component {<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;div&gt;&lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
</code></pre>

<hr>

<p>Functional:</p>

<pre><code>const MyComponent = (props) =&gt; {<font></font>
    return (<font></font>
      &lt;div&gt;&lt;/div&gt;<font></font>
    );<font></font>
}<font></font>
</code></pre>

<p>I’m thinking functional whenever there is no state to be manipulated by that component, but is that it?</p>

<p>I’m guessing if I use any life cycle methods, it might be best to go with a class based component.</p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从React 16.8开始，术语无状态功能组件具有误导性，应避免使用它们，因为它们不再不再是无状态的（</font></font><a href="https://stackoverflow.com/questions/53885993/react-16-7-react-sfc-is-now-deprecated"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React.SFC不推荐使用</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://twitter.com/dan_abramov/status/1057625147216220162?lang=en" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dan Abramov on React.SFC</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），它们可以具有状态，可以具有钩子（充当钩子）生命周期方法），它们或多或少与类组件重叠</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于类的组件</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">州</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生命周期方法</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用</font><a href="https://reactjs.org/docs/react-api.html#reactpurecomponent" rel="nofollow noreferrer"><font style="vertical-align: inherit;">React.PureComponent进行</font></a><font style="vertical-align: inherit;">记忆</font></font><a href="https://reactjs.org/docs/react-api.html#reactpurecomponent" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能组件：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态（</font></font><a href="https://reactjs.org/docs/hooks-state.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">useState</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://reactjs.org/docs/hooks-reference.html#usereducer" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">useReducer</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">挂钩）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生命周期方法（通过</font></font><a href="https://reactjs.org/docs/hooks-effect.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">useEffect</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://reactjs.org/docs/hooks-reference.html#uselayouteffect" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">useLayoutEffect</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">挂钩）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font></font><a href="https://reactjs.org/docs/react-api.html#reactmemo" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">备忘录</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> HOC </font><font style="vertical-align: inherit;">进行</font><a href="https://reactjs.org/docs/react-api.html#reactmemo" rel="nofollow noreferrer"><font style="vertical-align: inherit;">备忘录</font></a></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么我更喜欢功能组件</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应提供useEffect挂钩，是结合了非常清晰和简洁的方式</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>componentDidUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及</font></font><code>componentWillUnmount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生命周期方法</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用钩子，您可以提取可以</font><font style="vertical-align: inherit;">在组件之间</font><font style="vertical-align: inherit;">轻松</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">共享</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><strong><font style="vertical-align: inherit;">测试的</font></strong><font style="vertical-align: inherit;">逻辑</font></font><strong><font style="vertical-align: inherit;"></font></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">减少范围界定上的混乱</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应</font></font><a href="https://reactjs.org/docs/hooks-intro.html#motivation" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">动机</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为何使用挂钩（即功能组件）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Jim</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽可能尝试使用无状态功能（功能组件）。</font><font style="vertical-align: inherit;">在某些情况下，您需要使用常规的React类：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件需要保持状态</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件重新渲染过多，您需要通过以下方式进行控制 </font></font><code>shouldComponentUpdate</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要一个</font></font><a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">容器组件</font></font></a></li>
</ul>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在有一个称为React的类</font></font><code>PureComponent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以扩展（而不是</font></font><code>Component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）来实现它自己的方法</font></font><code>shouldComponentUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该方法可以为您比较浅道具。</font></font><a href="https://facebook.github.io/react/docs/react-component.html#shouldcomponentupdate" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读更多</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
