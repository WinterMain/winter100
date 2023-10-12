---
layout: question
title:  无法在事件处理程序中访问React实例（this）
date:   2020-03-10T14:22:22.000Z
description: 我正在用ES6（使用BabelJS）编写一个简单的组件，并且功能this.setState无法正常工作。典型的错误包括类似  无法读取未定义的属...
img: 
author: 乐米亚
category: question
answer: 11
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在用ES6（使用BabelJS）编写一个简单的组件，并且功能</font></font><code>this.setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法正常工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">典型的错误包括类似</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法读取未定义的属性“ setState” </font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">this.setState不是一个函数</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你知道为什么吗？</font><font style="vertical-align: inherit;">这是代码：</font></font></p>

<pre><code>import React from 'react'<font></font>
<font></font>
class SomeClass extends React.Component {<font></font>
  constructor(props) {<font></font>
    super(props)<font></font>
    this.state = {inputContent: 'startValue'}<font></font>
  }<font></font>
<font></font>
  sendContent(e) {<font></font>
    console.log('sending input content '+React.findDOMNode(React.refs.someref).value)<font></font>
  }<font></font>
<font></font>
  changeContent(e) {<font></font>
    this.setState({inputContent: e.target.value})<font></font>
  } <font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        &lt;h4&gt;The input form is here:&lt;/h4&gt;<font></font>
        Title: <font></font>
        &lt;input type="text" ref="someref" value={this.inputContent} <font></font>
          onChange={this.changeContent} /&gt; <font></font>
        &lt;button onClick={this.sendContent}&gt;Submit&lt;/button&gt;<font></font>
      &lt;/div&gt;<font></font>
    )<font></font>
  }<font></font>
}<font></font>
<font></font>
export default SomeClass<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第517篇《无法在事件处理程序中访问React实例（this）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子古一</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">亚力山大·柯森伯格（Alexandre Kirszenberg）是对的，但是要注意的另一件重要事情是放置绑定的位置。</font><font style="vertical-align: inherit;">我已经被这种情况困扰了好几天（可能是因为我是一个初学者），但是与其他人不同，我知道bind（我已经申请过），所以我无法理解为什么我仍然会遇到这种情况错误。</font><font style="vertical-align: inherit;">事实证明我绑定的顺序错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个可能是我在“ this.state”中调用函数的事实，该函数不知道绑定，因为它恰好位于绑定线上方，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是我所拥有的（顺便说一下，这是我的第一篇文章，但是我认为这非常重要，因为在其他任何地方都找不到解决方案）：</font></font></p>

<pre><code>constructor(props){<font></font>
    super(props);<font></font>
<font></font>
       productArray=//some array<font></font>
<font></font>
    this.state={ <font></font>
        // Create an Array  which will hold components to be displayed<font></font>
        proListing:productArray.map(product=&gt;{return(&lt;ProRow dele={this.this.popRow()} prodName={product.name} prodPrice={product.price}/&gt;)})<font></font>
    }<font></font>
<font></font>
    this.popRow=this.popRow.bind(this);//This was the Issue, This line //should be kept above "this.state"<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿老丝</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您正在使用ES6，因此函数不会自动绑定到“此”上下文。</font><font style="vertical-align: inherit;">您必须手动将函数绑定到上下文。</font></font></p>

<pre><code>constructor(props) {<font></font>
  super(props);<font></font>
  this.changeContent = this.changeContent.bind(this);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry泡芙</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题发生，因为</font></font><code>this.changeContent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>onClick={this.sendContent}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有绑定到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件的实例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有另一种解决方案（除了使用bind（）的构造函数（））使用共享周围的代码相同词法范围ES6的箭头功能，并保持</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，所以你可以改变在渲染（你的代码）是：</font></font></p>

<pre><code>render() {<font></font>
    return (<font></font>
<font></font>
        &lt;input type="text"<font></font>
          onChange={ () =&gt; this.changeContent() } /&gt; <font></font>
<font></font>
        &lt;button onClick={ () =&gt; this.sendContent() }&gt;Submit&lt;/button&gt;<font></font>
<font></font>
    )<font></font>
  }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanTony</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题在react15.0之后发生，该事件处理程序没有自动绑定到组件。</font><font style="vertical-align: inherit;">因此，无论何时调用事件处理程序，都必须手动将其绑定到组件。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决问题有几种方法。</font><font style="vertical-align: inherit;">但是您需要知道哪种方法最好，为什么？</font><font style="vertical-align: inherit;">通常，我们建议在类构造函数中绑定函数或使用箭头函数。</font></font></p>

<pre><code>// method 1： use a arrow function<font></font>
    class ComponentA extends React.Component {<font></font>
      eventHandler = () =&gt; {<font></font>
        console.log(this)<font></font>
      }<font></font>
      render() {<font></font>
        return ( <font></font>
        &lt;ChildComponent onClick={this.eventHandler} /&gt; <font></font>
        );<font></font>
      }<font></font>
<font></font>
// method 2: Bind your functions in the class constructor.<font></font>
    class ComponentA extends React.Component {<font></font>
      constructor(props) {<font></font>
        super(props);<font></font>
        this.eventHandler = this.eventHandler.bind(this);<font></font>
      }<font></font>
      render() {<font></font>
        return ( <font></font>
        &lt;ChildComponent onClick={this.eventHandler} /&gt; <font></font>
        );<font></font>
      }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件每次渲染时，这两种方法将不会创建新函数。</font><font style="vertical-align: inherit;">因此我们的ChildComponent不会因为新功能道具的更改而重新渲染，否则可能会产生性能问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞古一A</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的函数需要绑定才能在事件处理程序中使用状态或道具</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ES5中，仅将事件处理函数绑定到构造函数中，而不直接绑定到render中。</font><font style="vertical-align: inherit;">如果您确实直接在render中绑定，那么每次您的组件渲染并重新渲染时，它都会创建一个新函数。</font><font style="vertical-align: inherit;">因此，您应该始终将其绑定到构造函数中</font></font></p>

<pre><code>this.sendContent = this.sendContent.bind(this)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ES6中，使用箭头功能</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用箭头功能时，无需绑定，也可以避免与范围相关的问题</font></font></p>

<pre><code>sendContent = (event) =&gt; {<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙路易</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要使绑定保持构造函数语法，则可以使用</font></font><a href="https://github.com/tc39/proposal-bind-operator" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">proposal-bind-operator</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并转换代码，如下所示：</font></font></p>

<pre><code>constructor() {<font></font>
  this.changeContent = ::this.changeContent;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替 ：</font></font></p>

<pre><code>constructor() {<font></font>
  this.changeContent = this.changeContent.bind(this);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单得多，不需要</font></font><code>bind(this)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>fatArrow</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Sam</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的建议是使用箭头函数作为属性  </font></font></p>

<pre><code>class SomeClass extends React.Component {<font></font>
  handleClick = () =&gt; {<font></font>
    console.log(this); // the React Component instance<font></font>
  }<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;button onClick={this.handleClick}&gt;&lt;/button&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且不要将箭头功能用作 </font></font></p>

<pre><code>class SomeClass extends React.Component {<font></font>
      handleClick(){<font></font>
        console.log(this); // the React Component instance<font></font>
      }<font></font>
      render() {<font></font>
        return (<font></font>
          &lt;button onClick={()=&gt;{this.handleClick}}&gt;&lt;/button&gt;<font></font>
        );<font></font>
      }<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为第二种方法实际上将在每个渲染调用中生成新函数，实际上这意味着新版本的props指针，而不是如果您以后在意性能，则可以使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React.PureComponent</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React.Component中，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   您可以覆盖</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">shouldComponentUpdate（nextProps，nextState）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在道具到达时进行浅层检查</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞米亚</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人能得到这个答案，这是一种绑定所有功能的方法，而无需手动绑定它们</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在constructor（）中：</font></font></p>

<pre><code>for (let member of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) {<font></font>
    this[member] = this[member].bind(this)<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或在global.jsx文件中创建此函数</font></font></p>

<pre><code>export function bindAllFunctions({ bindTo: dis }) {<font></font>
for (let member of Object.getOwnPropertyNames(Object.getPrototypeOf(dis))) {<font></font>
    dis[member] = dis[member].bind(dis)<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在您的Constructor（）中将其调用为：</font></font></p>

<pre><code>bindAllFunctions({ bindTo: this })
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin乐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们必须对</font></font><code>bind</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数进行操作，</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取类中函数的实例。</font><font style="vertical-align: inherit;">像这样</font></font></p>

<pre><code>&lt;button onClick={this.sendContent.bind(this)}&gt;Submit&lt;/button&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种方式</font></font><code>this.state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将是有效的对象。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋GO</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Morhaus是正确的，但是没有可以解决</font></font><code>bind</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">箭头函数</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><a href="https://github.com/jeffmo/es-class-fields-and-static-properties"><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类属性</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一起使用</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>class SomeClass extends React.Component {<font></font>
  changeContent = (e) =&gt; {<font></font>
    this.setState({inputContent: e.target.value})<font></font>
  } <font></font>
<font></font>
  render() {<font></font>
    return &lt;input type="text" onChange={this.changeContent} /&gt;;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为arrow函数是在构造函数的范围内声明的，并且因为arrow函数是</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在其声明范围内进行</font><font style="vertical-align: inherit;">维护的</font><font style="vertical-align: inherit;">，所以它们都可以工作。</font><font style="vertical-align: inherit;">缺点是这些将不是原型上的函数，它们将与每个组件一起重新创建。</font><font style="vertical-align: inherit;">但是，这不会带来太大的负面影响，因为会</font></font><code>bind</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导致相同的结果。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光小卤蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><code>this.changeContent</code><font style="vertical-align: inherit;"></font><code>this.changeContent.bind(this)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在作为</font></font><code>onChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prop </font><font style="vertical-align: inherit;">传递之前，</font><font style="vertical-align: inherit;">需要先通过绑定到组件实例</font><font style="vertical-align: inherit;">，否则</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数主体中的变量将不会引用组件实例，而是指向</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">参见</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Function :: bind</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当使用</font></font><code>React.createClass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是ES6类时，组件上定义的每个非生命周期方法都会自动绑定到组件实例。</font><font style="vertical-align: inherit;">请参阅自动</font></font><a href="https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绑定</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，绑定功能会创建一个新功能。</font><font style="vertical-align: inherit;">您可以将其直接绑定到render中，这意味着每次渲染该组件时都会创建一个新函数，或者将其绑定到构造函数中，后者只会触发一次。</font></font></p>

<pre class="lang-js prettyprint-override"><code>constructor() {<font></font>
  this.changeContent = this.changeContent.bind(this);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font></p>

<pre class="lang-js prettyprint-override"><code>render() {<font></font>
  return &lt;input onChange={this.changeContent.bind(this)} /&gt;;<font></font>
}<font></font>
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用是在组件实例上设置的，而不是在组件实例上设置的</font></font><code>React.refs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：您需要更改</font></font><code>React.refs.someref</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>this.refs.someref</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您还需要将</font></font><code>sendContent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">绑定</font><font style="vertical-align: inherit;">到组件实例，以便对其进行</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
