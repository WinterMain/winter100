---
layout: question
title:  如何在带有Typescript的React中使用refs
date:   2020-03-12T07:07:51.000Z
description: 我在React中使用Typescript。我在理解如何使用refs方面遇到麻烦，以便相对于refs引用的react节点获得静态类型和智能感知。我的代码如下...
img: 
author: MandyL
category: question
answer: 7
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在React中使用Typescript。</font><font style="vertical-align: inherit;">我在理解如何使用refs方面遇到麻烦，以便相对于refs引用的react节点获得静态类型和智能感知。</font><font style="vertical-align: inherit;">我的代码如下。</font></font></p>

<pre><code>import * as React from 'react';<font></font>
<font></font>
interface AppState {<font></font>
    count: number;<font></font>
}<font></font>
<font></font>
interface AppProps {<font></font>
    steps: number;<font></font>
}<font></font>
<font></font>
interface AppRefs {<font></font>
    stepInput: HTMLInputElement;<font></font>
}<font></font>
<font></font>
export default class TestApp extends React.Component&lt;AppProps, AppState&gt; {<font></font>
<font></font>
constructor(props: AppProps) {<font></font>
    super(props);<font></font>
    this.state = {<font></font>
        count: 0<font></font>
    };<font></font>
}<font></font>
<font></font>
incrementCounter() {<font></font>
    this.setState({count: this.state.count + 1});<font></font>
}<font></font>
<font></font>
render() {<font></font>
    return (<font></font>
        &lt;div&gt;<font></font>
            &lt;h1&gt;Hello World&lt;/h1&gt;<font></font>
            &lt;input type="text" ref="stepInput" /&gt;<font></font>
            &lt;button onClick={() =&gt; this.incrementCounter()}&gt;Increment&lt;/button&gt;<font></font>
            Count : {this.state.count}<font></font>
        &lt;/div&gt;<font></font>
    );<font></font>
}}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1036篇《如何在带有Typescript的React中使用refs》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinLEY</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>class SelfFocusingInput extends React.Component&lt;{ value: string, onChange: (value: string) =&gt; any }, {}&gt;{<font></font>
    ctrls: {<font></font>
        input?: HTMLInputElement;<font></font>
    } = {};<font></font>
    render() {<font></font>
        return (<font></font>
            &lt;input<font></font>
                ref={(input) =&gt; this.ctrls.input = input}<font></font>
                value={this.props.value}<font></font>
                onChange={(e) =&gt; { this.props.onChange(this.ctrls.input.value) } }<font></font>
                /&gt;<font></font>
        );<font></font>
    }<font></font>
    componentDidMount() {<font></font>
        this.ctrls.input.focus();<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">把它们放在一个物体上</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三小哥</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于 TypeScript用户，不需要构造函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...</font></font></p>

<pre><code>private divRef: HTMLDivElement | null = null<font></font>
<font></font>
getDivRef = (ref: HTMLDivElement | null): void =&gt; {<font></font>
    this.divRef = ref<font></font>
}<font></font>
<font></font>
render() {<font></font>
    return &lt;div ref={this.getDivRef} /&gt;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是添加了一种不同的方法-您可以简单地投射引用，例如：</font></font></p>

<pre><code>let myInputElement: Element = this.refs["myInput"] as Element
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我总是这样做，在这种情况下要获取参考</font></font></p>

<p><code>let input: HTMLInputElement =   ReactDOM.findDOMNode&lt;HTMLInputElement&gt;(this.refs.input);</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺少完整的示例，这是我的小测试脚本，用于在使用React和TypeScript时获取用户输入。</font><font style="vertical-align: inherit;">部分基于其他评论以及此链接</font></font><a href="https://medium.com/@basarat/strongly-typed-refs-for-react-typescript-9a07419f807#.cdrghertm" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://medium.com/@basarat/strongly-typed-refs-for-react-typescript-9a07419f807#.cdrghertm</font></font></a></p>

<pre><code>/// &lt;reference path="typings/react/react-global.d.ts" /&gt;<font></font>
<font></font>
// Init our code using jquery on document ready<font></font>
$(function () {<font></font>
    ReactDOM.render(&lt;ServerTime /&gt;, document.getElementById("reactTest"));<font></font>
});<font></font>
<font></font>
interface IServerTimeProps {<font></font>
}<font></font>
<font></font>
interface IServerTimeState {<font></font>
    time: string;<font></font>
}<font></font>
<font></font>
interface IServerTimeInputs {<font></font>
    userFormat?: HTMLInputElement;<font></font>
}<font></font>
<font></font>
class ServerTime extends React.Component&lt;IServerTimeProps, IServerTimeState&gt; {<font></font>
    inputs: IServerTimeInputs = {};<font></font>
<font></font>
    constructor() {<font></font>
        super();<font></font>
        this.state = { time: "unknown" }<font></font>
    }<font></font>
<font></font>
    render() {<font></font>
        return (<font></font>
            &lt;div&gt;<font></font>
                &lt;div&gt;Server time: { this.state.time }&lt;/div&gt;<font></font>
                &lt;input type="text" ref={ a =&gt; this.inputs.userFormat = a } defaultValue="s" &gt;&lt;/input&gt;<font></font>
                &lt;button onClick={ this._buttonClick.bind(this) }&gt;GetTime&lt;/button&gt;<font></font>
            &lt;/div&gt;<font></font>
        );<font></font>
    }<font></font>
<font></font>
    // Update state with value from server<font></font>
    _buttonClick(): void {<font></font>
    alert(`Format:${this.inputs.userFormat.value}`);<font></font>
<font></font>
        // This part requires a listening web server to work, but alert shows the user input<font></font>
    jQuery.ajax({<font></font>
        method: "POST",<font></font>
        data: { format: this.inputs.userFormat.value },<font></font>
        url: "/Home/ServerTime",<font></font>
        success: (result) =&gt; {<font></font>
            this.setState({ time : result });<font></font>
        }<font></font>
    });<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">}</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ASamGreen</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种方法（</font></font><a href="https://github.com/TypeScriptBuilder/tsb/blob/824c89ae5dee588a45902e5089a273749396b174/src/app/renameVariable.tsx#L96-L97"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在做</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）是手动设置：</font></font></p>

<pre><code>refs: {<font></font>
    [string: string]: any;<font></font>
    stepInput:any;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么您甚至可以将其包装在一个更好的getter函数中（例如</font></font><a href="https://github.com/TypeScriptBuilder/tsb/blob/824c89ae5dee588a45902e5089a273749396b174/src/app/findAndReplace.tsx#L93-L97"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">here</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>

<pre><code>stepInput = (): HTMLInputElement =&gt; ReactDOM.findDOMNode(this.refs.stepInput);
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：这已不再是使用Typescript引用的正确方法。</font><font style="vertical-align: inherit;">查看Jeff Bowen的答案，并对其进行投票以提高其可见度。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到了问题的答案。</font><font style="vertical-align: inherit;">在类中使用下面的引用。</font></font></p>

<pre><code>refs: {<font></font>
    [key: string]: (Element);<font></font>
    stepInput: (HTMLInputElement);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢@basarat指出正确的方向。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
