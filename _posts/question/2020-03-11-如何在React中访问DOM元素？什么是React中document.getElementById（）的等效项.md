---
layout: question
title:  如何在React中访问DOM元素？什么是React中document.getElementById（）的等效项
date:   2020-03-11T03:43:10.000Z
description: 如何在react.js中选择某些栏？这是我的代码：var Progressbar = React.createClass({    getIni...
img: 
author: 乐米亚
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在react.js中选择某些栏？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的代码：</font></font></p>

<pre><code>var Progressbar = React.createClass({<font></font>
    getInitialState: function () {<font></font>
        return { completed: this.props.completed };<font></font>
    },<font></font>
    addPrecent: function (value) {<font></font>
        this.props.completed += value;<font></font>
        this.setState({ completed: this.props.completed });<font></font>
    },<font></font>
<font></font>
    render: function () {<font></font>
<font></font>
        var completed = this.props.completed;<font></font>
        if (completed &lt; 0) { completed = 0 };<font></font>
<font></font>
<font></font>
        return (...);<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想使用这个React组件：</font></font></p>

<pre><code>var App = React.createClass({<font></font>
    getInitialState: function () {<font></font>
<font></font>
        return { baction: 'Progress1' };<font></font>
    },<font></font>
    handleChange: function (e) {<font></font>
        var value = e.target.value;<font></font>
        console.log(value);<font></font>
        this.setState({ baction: value });<font></font>
    },<font></font>
    handleClick10: function (e) {<font></font>
        console.log('You clicked: ', this.state.baction);<font></font>
        document.getElementById(this.state.baction).addPrecent(10);<font></font>
    },<font></font>
    render: function () {<font></font>
        return (<font></font>
            &lt;div class="center"&gt;Progress Bars Demo<font></font>
            &lt;Progressbar completed={25} id="Progress1" /&gt;<font></font>
                &lt;h2 class="center"&gt;&lt;/h2&gt;<font></font>
                &lt;Progressbar completed={50} id="Progress2" /&gt;<font></font>
                &lt;h2 class="center"&gt;&lt;/h2&gt;<font></font>
                &lt;Progressbar completed={75} id="Progress3" /&gt;<font></font>
                &lt;h2 class="center"&gt;&lt;/h2&gt;<font></font>
                &lt;span&gt;<font></font>
                    &lt;select name='selectbar' id='selectbar' value={this.state.baction} onChange={this.handleChange}&gt;<font></font>
                        &lt;option value="Progress1"&gt;#Progress1&lt;/option&gt;<font></font>
                        &lt;option value="Progress2"&gt;#Progress2&lt;/option&gt;<font></font>
                        &lt;option value="Progress3"&gt;#Progress3&lt;/option&gt;<font></font>
                    &lt;/select&gt;<font></font>
                    &lt;input type="button" onClick={this.handleClick10} value="+10" /&gt;<font></font>
                    &lt;button&gt;+25&lt;/button&gt;<font></font>
                    &lt;button&gt;-10&lt;/button&gt;<font></font>
                    &lt;button&gt;-25&lt;/button&gt;<font></font>
                &lt;/span&gt;<font></font>
            &lt;/div&gt;<font></font>
        )<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想执行handleClick10函数并为我选择的进度栏执行操作。</font><font style="vertical-align: inherit;">但是我得到的结果是：</font></font></p>

<pre><code> You clicked:  Progress1<font></font>
 TypeError: document.getElementById(...) is null<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在react.js中选择特定元素？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第611篇《如何在React中访问DOM元素？什么是React中document.getElementById（）的等效项》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony西门古一</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于React使用JSX代码创建HTML，因此我们无法使用documment.querySelector或getElementById之类的调节方法来引用dom。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相反，我们可以使用React ref系统访问和操作Dom，如下例所示：</font></font></p>

<pre><code>constructor(props){<font></font>
<font></font>
    super(props);<font></font>
    this.imageRef = React.createRef(); // create react ref<font></font>
}<font></font>
<font></font>
componentDidMount(){<font></font>
<font></font>
    **console.log(this.imageRef)** // acessing the attributes of img tag when dom loads<font></font>
}<font></font>
<font></font>
<font></font>
render = (props) =&gt; {<font></font>
<font></font>
const {urls,description} = this.props.image;<font></font>
    return (<font></font>
<font></font>
            &lt;img<font></font>
             **ref = {this.imageRef} // assign the ref of img tag here**<font></font>
             src = {urls.regular} <font></font>
             alt = {description}<font></font>
             /&gt;<font></font>
<font></font>
        );<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">}</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋十三</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以更换 </font></font></p>

<pre><code>document.getElementById(this.state.baction).addPrecent(10);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font></font></p>

<pre><code>this.refs[this.state.baction].addPrecent(10);<font></font>
<font></font>
<font></font>
  &lt;Progressbar completed={25} ref="Progress1" id="Progress1"/&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱阳光Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于获取元素</font></font><code>react</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，你需要使用</font></font><code>ref</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和函数内可以使用</font></font><code>ReactDOM.findDOMNode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我想做的更多的是在事件内部调用ref</font></font></p>

<pre><code>&lt;input type="text" ref={ref =&gt; this.myTextInput = ref} /&gt;
</code></pre>

<p><a href="https://facebook.github.io/react/docs/refs-and-the-dom.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个很好的链接，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以帮助您找出答案。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西里</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过指定 </font></font><code>ref</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React 16.3+中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，用于</font></font><code>React.createRef()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建引用：</font></font></p>

<pre><code>class MyComponent extends React.Component {<font></font>
  constructor(props) {<font></font>
    super(props);<font></font>
    this.myRef = React.createRef();<font></font>
  }<font></font>
  render() {<font></font>
    return &lt;div ref={this.myRef} /&gt;;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了访问元素，请使用：</font></font></p>

<pre><code>const node = this.myRef.current;
</code></pre>

<p><a href="https://reactjs.org/docs/refs-and-the-dom.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用React.createRef（）的DOC</font></font></a></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，facebook建议不要这样做，因为字符串引用存在一些问题，被认为是旧问题，并且很可能在将来的发行版中被删除。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从文档：</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旧版API：字符串引用</font></font></strong> </p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您以前使用过React，那么您可能会熟悉一个较旧的API，其中ref属性是一个字符串，例如“ textInput”，并且可以通过this.refs.textInput访问DOM节点。</font><font style="vertical-align: inherit;">我们建议不要这样做，因为字符串引用存在一些问题，被认为是旧问题，并且很可能在将来的发行版中删除。</font><font style="vertical-align: inherit;">如果您当前正在使用this.refs.textInput访问引用，则建议改用回调模式。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React 16.2和更早版本，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">推荐的方法</font><font style="vertical-align: inherit;">是使用回调模式：</font></font></p>

<pre><code>&lt;Progressbar completed={25} id="Progress1" ref={(input) =&gt; {this.Progress[0] = input }}/&gt;<font></font>
<font></font>
&lt;h2 class="center"&gt;&lt;/h2&gt;<font></font>
<font></font>
&lt;Progressbar completed={50} id="Progress2" ref={(input) =&gt; {this.Progress[1] = input }}/&gt;<font></font>
<font></font>
  &lt;h2 class="center"&gt;&lt;/h2&gt;<font></font>
<font></font>
&lt;Progressbar completed={75} id="Progress3" ref={(input) =&gt; {this.Progress[2] = input }}/&gt;<font></font>
</code></pre>

<p><a href="https://reactjs.org/docs/refs-and-the-dom.html#callback-refs" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOC使用回调</font></font></a></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至旧版本的react定义的引用都使用如下字符串</font></font></p>

<pre><code>&lt;Progressbar completed={25} id="Progress1" ref="Progress1"/&gt;<font></font>
<font></font>
    &lt;h2 class="center"&gt;&lt;/h2&gt;<font></font>
<font></font>
    &lt;Progressbar completed={50} id="Progress2" ref="Progress2"/&gt;<font></font>
<font></font>
      &lt;h2 class="center"&gt;&lt;/h2&gt;<font></font>
<font></font>
    &lt;Progressbar completed={75} id="Progress3" ref="Progress3"/&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了得到元素就做</font></font></p>

<pre><code>var object = this.refs.Progress1;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">记住要</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在箭头功能块内</font><font style="vertical-align: inherit;">使用，</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>print = () =&gt; {<font></font>
  var object = this.refs.Progress1;  <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等等...</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
