---
layout: question
title:  this.setState不像我期望的那样合并状态
date:   2020-03-11T04:20:35.000Z
description: 我有以下状态：this.setState({ selected  { id  1, name  'Foobar' } });  然后我更新状态：...
img: 
author: Itachi伽罗
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有以下状态：</font></font></p>

<pre><code>this.setState({ selected: { id: 1, name: 'Foobar' } });  
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我更新状态：</font></font></p>

<pre><code>this.setState({ selected: { name: 'Barfoo' }});
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于setState是假设要合并的，所以我希望它是：</font></font></p>

<pre><code>{ selected: { id: 1, name: 'Barfoo' } }; 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是它吃掉了id，状态为：</font></font></p>

<pre><code>{ selected: { name: 'Barfoo' } }; 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是预期的行为吗？仅更新嵌套状态对象的一个​​属性的解决方案是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第655篇《this.setState不像我期望的那样合并状态》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenSamA</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用tmp var进行更改。</font></font></p>

<pre><code>changeTheme(v) {<font></font>
    let tmp = this.state.tableData<font></font>
    tmp.theme = v<font></font>
    this.setState({<font></font>
        tableData : tmp<font></font>
    })<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Eva</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您设置了初始状态吗？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将使用一些自己的代码作为示例：</font></font></p>

<pre><code>    getInitialState: function () {<font></font>
        return {<font></font>
            dragPosition: {<font></font>
                top  : 0,<font></font>
                left : 0<font></font>
            },<font></font>
            editValue : "",<font></font>
            dragging  : false,<font></font>
            editing   : false<font></font>
        };<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我正在开发的应用程序中，这就是设置和使用状态的方式。</font><font style="vertical-align: inherit;">我相信</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以随便编辑任何您想要的状态，我一直这样称呼它：</font></font></p>

<pre><code>    onChange: function (event) {<font></font>
        event.preventDefault();<font></font>
        event.stopPropagation();<font></font>
        this.setState({editValue: event.target.value});<font></font>
    },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请记住，您必须在</font></font><code>React.createClass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">函数中</font><font style="vertical-align: inherit;">设置状态</font></font><code>getInitialState</code> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">長ぐつをはいたネコ</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">截至目前， </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果下一个状态取决于上一个状态，我们建议使用updater函数形式，而不是：</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据文档</font></font><a href="https://reactjs.org/docs/react-component.html#setstate" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://reactjs.org/docs/react-component.html#setstate</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，使用：</font></font></p>

<pre><code>this.setState((prevState) =&gt; {<font></font>
    return {quantity: prevState.quantity + 1};<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用的是es6类，最终在顶部状态出现了几个复杂的对象，并试图使我的主要组件更加模块化，因此我创建了一个简单的类包装器，将状态保留在顶部组件上，但允许使用更多本地逻辑。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包装类将一个函数用作其构造函数，该函数在主要组件状态上设置属性。</font></font></p>

<pre><code>export default class StateWrapper {<font></font>
<font></font>
    constructor(setState, initialProps = []) {<font></font>
        this.setState = props =&gt; {<font></font>
            this.state = {...this.state, ...props}<font></font>
            setState(this.state)<font></font>
        }<font></font>
        this.props = initialProps<font></font>
    }<font></font>
<font></font>
    render() {<font></font>
        return(&lt;div&gt;render() not defined&lt;/div&gt;)<font></font>
    }<font></font>
<font></font>
    component = props =&gt; {<font></font>
        this.props = {...this.props, ...props}<font></font>
        return this.render()<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，对于顶部状态上的每个复杂属性，我创建一个StateWrapped类。</font><font style="vertical-align: inherit;">您可以在此处的构造函数中设置默认道具，这些道具将在类初始化时进行设置，您可以引用局部状态获取值并设置局部状态，引用局部函数，并将其沿链传递：</font></font></p>

<pre><code>class WrappedFoo extends StateWrapper {<font></font>
<font></font>
    constructor(...props) { <font></font>
        super(...props)<font></font>
        this.state = {foo: "bar"}<font></font>
    }<font></font>
<font></font>
    render = () =&gt; &lt;div onClick={this.props.onClick||this.onClick}&gt;{this.state.foo}&lt;/div&gt;<font></font>
<font></font>
    onClick = () =&gt; this.setState({foo: "baz"})<font></font>
<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，然后我的顶级组件只需要构造函数将每个类设置为其顶级状态属性，一个简单的呈现器，以及任何用于通信跨组件的函数。</font></font></p>

<pre><code>class TopComponent extends React.Component {<font></font>
<font></font>
    constructor(...props) {<font></font>
        super(...props)<font></font>
<font></font>
        this.foo = new WrappedFoo(<font></font>
            props =&gt; this.setState({<font></font>
                fooProps: props<font></font>
            }) <font></font>
        )<font></font>
<font></font>
        this.foo2 = new WrappedFoo(<font></font>
            props =&gt; this.setState({<font></font>
                foo2Props: props<font></font>
            }) <font></font>
        )<font></font>
<font></font>
        this.state = {<font></font>
            fooProps: this.foo.state,<font></font>
            foo2Props: this.foo.state,<font></font>
        }<font></font>
<font></font>
    }<font></font>
<font></font>
    render() {<font></font>
        return(<font></font>
            &lt;div&gt;<font></font>
                &lt;this.foo.component onClick={this.onClickFoo} /&gt;<font></font>
                &lt;this.foo2.component /&gt;<font></font>
            &lt;/div&gt;<font></font>
        )<font></font>
    }<font></font>
<font></font>
    onClickFoo = () =&gt; this.foo2.setState({foo: "foo changed foo2!"})<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎可以很好地实现我的目的，但请记住，尽管您不能更改分配给顶级组件上包装组件的属性的状态，因为每个包装组件都在跟踪自己的状态，但会更新顶级组件上的状态每次改变。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim老丝梅</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据@bgannonpl答案保留先前的状态：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lodash</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例：</font></font></p>

<pre><code>this.setState((previousState) =&gt; _.merge({}, previousState, { selected: { name: "Barfood"} }));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要检查其是否正常工作，可以使用第二个参数函数回调：</font></font></p>

<pre><code>this.setState((previousState) =&gt; _.merge({}, previousState, { selected: { name: "Barfood"} }), () =&gt; alert(this.state.selected));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><code>merge</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之所以</font><font style="vertical-align: inherit;">使用，</font><font style="vertical-align: inherit;">是因为</font></font><code>extend</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则丢弃其他属性。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React不变性</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例：</font></font></p>

<pre><code>import update from "react-addons-update";<font></font>
<font></font>
this.setState((previousState) =&gt; update(previousState, {<font></font>
    selected:<font></font>
    { <font></font>
        name: {$set: "Barfood"}<font></font>
    }<font></font>
});<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
