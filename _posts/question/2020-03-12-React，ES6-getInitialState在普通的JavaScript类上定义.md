---
layout: question
title:  React，ES6-getInitialState在普通的JavaScript类上定义
date:   2020-03-12T02:55:30.000Z
description: 我具有以下组件（radioOther.jsx）： 'use strict'; //module.exports = <-- omitted in ...
img: 
author: 西里神奇
category: question
answer: 3
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我具有以下组件（</font></font><code>radioOther.jsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>

<pre><code> 'use strict';<font></font>
<font></font>
 //module.exports = &lt;-- omitted in update<font></font>
<font></font>
   class RadioOther extends React.Component {<font></font>
<font></font>
     // omitted in update <font></font>
     // getInitialState() {<font></font>
     //    propTypes: {<font></font>
     //        name: React.PropTypes.string.isRequired<font></font>
     //    }<font></font>
     //    return {<font></font>
     //       otherChecked: false<font></font>
     //   }<font></font>
     // }<font></font>
<font></font>
     componentDidUpdate(prevProps, prevState) {<font></font>
         var otherRadBtn = this.refs.otherRadBtn.getDOMNode();<font></font>
<font></font>
         if (prevState.otherChecked !== otherRadBtn.checked) {<font></font>
             console.log('Other radio btn clicked.')<font></font>
             this.setState({<font></font>
                 otherChecked: otherRadBtn.checked,<font></font>
             });<font></font>
         }<font></font>
     }<font></font>
<font></font>
     onRadChange(e) {<font></font>
         var input = e.target;<font></font>
         this.setState({<font></font>
             otherChecked: input.checked<font></font>
         });<font></font>
     }<font></font>
<font></font>
     render() {<font></font>
         return (<font></font>
             &lt;div&gt;<font></font>
                 &lt;p className="form-group radio"&gt;<font></font>
                     &lt;label&gt;<font></font>
                         &lt;input type="radio"<font></font>
                                ref="otherRadBtn"<font></font>
                                onChange={this.onRadChange}<font></font>
                                name={this.props.name}<font></font>
                                value="other"/&gt;<font></font>
                         Other<font></font>
                     &lt;/label&gt;<font></font>
                     {this.state.otherChecked ?<font></font>
                         (&lt;label className="form-inline"&gt;<font></font>
                             Please Specify:<font></font>
                             &lt;input<font></font>
                                 placeholder="Please Specify"<font></font>
                                 type="text"<font></font>
                                 name="referrer_other"<font></font>
                                 /&gt;<font></font>
                         &lt;/label&gt;)<font></font>
                         :<font></font>
                         ('')<font></font>
                     }<font></font>
                 &lt;/p&gt;<font></font>
             &lt;/div&gt;<font></font>
         )<font></font>
     }<font></font>
 };<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在使用ECMAScript6之前，一切都很好，现在出现1个错误，1个警告，并且我有一个后续问题：</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未捕获的TypeError：无法读取null的属性“ otherChecked”</font></font></p>
  
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> getInitialState是在RadioOther（一个普通的JavaScript类）上定义的。</font><font style="vertical-align: inherit;">仅使用React.createClass创建的类支持此功能。</font><font style="vertical-align: inherit;">您是要定义状态属性吗？</font></font></p>
</blockquote>

<hr>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谁能看到错误在哪里，我知道这是由于DOM中的条件语句引起的，但显然我没有正确声明其初始值？</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我应该让</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">getInitialState</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">静态</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果getInitialState不正确，在什么地方声明我的原型？</font></font></p></li>
</ol>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong></p>

<pre><code>   RadioOther.propTypes = {<font></font>
       name: React.PropTypes.string,<font></font>
       other: React.PropTypes.bool,<font></font>
       options: React.PropTypes.array }<font></font>
<font></font>
   module.exports = RadioOther;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ssorallen，此代码：</font></font></p>

<pre><code>     constructor(props) {<font></font>
         this.state = {<font></font>
             otherChecked: false,<font></font>
         };<font></font>
     }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生</font></font><code>"Uncaught ReferenceError: this is not defined"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而下面纠正了</font></font></p>

<pre><code>     constructor(props) {<font></font>
     super(props);<font></font>
         this.state = {<font></font>
             otherChecked: false,<font></font>
         };<font></font>
     }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是现在，单击另一个按钮现在会产生错误：</font></font></p>

<p><code>Uncaught TypeError: Cannot read property 'props' of undefined</code></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿Green</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加到</font></font><a href="https://stackoverflow.com/users/368697/ross-allen"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">罗斯的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以</font><font style="vertical-align: inherit;">在onChange属性上</font><font style="vertical-align: inherit;">使用新的</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6箭头功能</font></font></a><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它在功能上等效</font></font><code>this.onRadChange = this.onRadChange.bind(this);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">于在构造</font><font style="vertical-align: inherit;">函数中定义</font><font style="vertical-align: inherit;">，但在我看来更为简洁。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的情况下，单选按钮将如下所示。</font></font></p>

<pre><code>&lt;input type="radio"<font></font>
       ref="otherRadBtn"<font></font>
       onChange={(e)=&gt; this.onRadChange(e)}<font></font>
       name={this.props.name}<font></font>
       value="other"/&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新资料</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种“更简洁”的方法比@Ross Allen的答案中提到的选项效率低，因为每次</font></font><code>render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">时都会生成一个新函数。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyEvaL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在使用</font></font><a href="https://babeljs.io/docs/plugins/transform-class-properties/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">babel-plugin-transform-class-properties</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://babeljs.io/docs/plugins/preset-stage-2" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">babel-preset-stage-2</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或stage-1或stage-0），则可以使用以下语法：</font></font></p>

<pre><code>class RadioOther extends React.Component {<font></font>
<font></font>
  static propTypes = {<font></font>
    name: React.PropTypes.string,<font></font>
    ...<font></font>
  };<font></font>
<font></font>
  state = {<font></font>
      otherChecked: false,<font></font>
  };<font></font>
<font></font>
  onRadChange = () =&gt; {<font></font>
    ...<font></font>
  };<font></font>
<font></font>
  ...<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村老丝</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><ul>
<li><code>getInitialState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ES6类中不使用。</font><font style="vertical-align: inherit;">而是</font></font><code>this.state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在构造函数中</font><font style="vertical-align: inherit;">分配</font><font style="vertical-align: inherit;">。</font></font></li>
<li><code>propTypes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 应该是静态类变量或分配给该类，而不应该分配给组件实例。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">成员方法</font><font style="vertical-align: inherit;">在ES6类</font><font style="vertical-align: inherit;">中不是</font></font><a href="https://reactjs.org/docs/react-without-es6.html#autobinding" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“自动绑定”的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">对于用作回调的方法，请使用</font></font><a href="https://babeljs.io/docs/plugins/transform-class-properties/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类属性初始化程序</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或在构造函数中分配绑定的实例。</font></font></li>
</ul>

<pre class="lang-js prettyprint-override"><code>export default class RadioOther extends React.Component {<font></font>
<font></font>
  static propTypes = {<font></font>
    name: React.PropTypes.string.isRequired,<font></font>
  };<font></font>
<font></font>
  constructor(props) {<font></font>
    super(props);<font></font>
    this.state = {<font></font>
      otherChecked: false,<font></font>
    };<font></font>
  }<font></font>
<font></font>
  // Class property initializer. `this` will be the instance when<font></font>
  // the function is called.<font></font>
  onRadChange = () =&gt; {<font></font>
    ...<font></font>
  };<font></font>
<font></font>
  ...<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React的文档中了解有关ES6类的更多信息：</font></font><a href="https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将函数转换为类</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
