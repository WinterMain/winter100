---
layout: question
title:  使用es6类时，React中的“ super（）”和“ super（props）”有什么区别？
date:   2020-03-09T15:16:20.000Z
description: 当是重要的传球props到super()了，为什么？class MyComponent extends React.Component {  con...
img: 
author: 小胖A
category: question
answer: 9
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当是重要的传球</font></font><code>props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>super()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了，为什么？</font></font></p>

<pre><code>class MyComponent extends React.Component {<font></font>
  constructor(props) {<font></font>
    super(); // or super(props) ?<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第349篇《使用es6类时，React中的“ super（）”和“ super（props）”有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">启人</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里我们不会在构造函数中得到它，所以它将返回未定义，但是我们将能够在构造函数之外获取它</font></font></p>

<pre><code>class MyComponent extends React.Component {<font></font>
  constructor() {<font></font>
    console.log(this); // Reference Error i.e return undefined<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return &lt;div&gt;Hello {this.props.name}&lt;/div&gt;;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我们使用super（），那么我们也可以在构造函数中获取“ this”变量</font></font></p>

<pre><code>class MyComponent extends React.Component {<font></font>
  constructor() {<font></font>
    super();<font></font>
    console.log(this); // this logged to console<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return &lt;div&gt;Hello {this.props.name}&lt;/div&gt;;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，当我们使用super（）时；</font><font style="vertical-align: inherit;">我们将能够获取它，但是this.props将在构造函数中未定义。</font><font style="vertical-align: inherit;">但是除构造函数外，this.props不会返回undefined。</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我们使用super（props），那么我们也可以在构造函数中使用this.props值</font></font></strong></p>

<p><strong><a href="https://discuss.reactjs.org/t/should-we-include-the-props-parameter-to-class-constructors-when-declaring-components-using-es6-classes/2781/2" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">索菲·阿尔珀特的答案</font></font></a></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要在构造函数中使用this.props，则需要将props传递给super。</font><font style="vertical-align: inherit;">否则没关系，因为React在调用构造函数后立即从外部在实例上设置.props。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font><strong><em><font style="vertical-align: inherit;">React</font></em></strong><font style="vertical-align: inherit;">版本16.6.3，我们使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">super（props）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">初始化状态元素</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">名称：this.props.name</font></font></em></strong></p>

<pre class="lang-js prettyprint-override"><code>constructor(props){<font></font>
    super(props);        <font></font>
}<font></font>
state = {<font></font>
  name:this.props.name <font></font>
    //otherwise not defined<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry前端Itachi</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我制作的小提琴：</font></font><a href="https://jsfiddle.net/beshanoe/zpxbLw4j/1/." rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsfiddle.net</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它显示默认情况下，道具未分配在构造函数中。</font><font style="vertical-align: inherit;">据我了解，它们是在方法中使用的</font></font><code>React.createElement</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，</font></font><code>super(props)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅当超类的构造函数手动分配</font></font><code>props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给</font><font style="vertical-align: inherit;">时才应调用</font></font><code>this.props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果您只是扩展</font></font><code>React.Component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通话，</font></font><code>super(props)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则对道具不会有任何作用。</font><font style="vertical-align: inherit;">也许它将在React的下一版本中进行更改。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Stafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>super()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 用于调用父构造函数。 </font></font></p>

<p><code>super(props)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将传递</font></font><code>props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给父构造函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从您的示例中，</font></font><code>super(props)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将调用</font></font><code>React.Component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传入</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">构造函数</font></font><code>props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为参数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息</font></font><code>super</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Eva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dan Abramov撰写了有关此主题的文章：</font></font></p>

<p><a href="https://overreacted.io/why-do-we-write-super-props/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么我们要编写超级道具？</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其要点是养成</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它避免这种情况</font><font style="vertical-align: inherit;">的习惯，这很有帮助</font><font style="vertical-align: inherit;">，说实话，我认为这种情况不太可能发生：</font></font></p>

<pre><code>// Inside React<font></font>
class Component {<font></font>
  constructor(props) {<font></font>
    this.props = props;<font></font>
    // ...<font></font>
  }<font></font>
}<font></font>
<font></font>
// Inside your code<font></font>
class Button extends React.Component {<font></font>
  constructor(props) {<font></font>
    super(); // 😬 We forgot to pass props<font></font>
    console.log(props);      // ✅ {}<font></font>
    console.log(this.props); // 😬 undefined <font></font>
  }<font></font>
  // ...<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长LA</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="https://github.com/facebook/react/blob/52752446760dee0bc7232b4146f5a309ac57f065/src/isomorphic/modern/class/ReactComponent.js#L23"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">源代码</font></font></a></p>

<pre><code>function ReactComponent(props, context) {<font></font>
  this.props = props;<font></font>
  this.context = context;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您</font></font><code>props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次有道具时都</font><font style="vertical-align: inherit;">必须通过，</font><font style="vertical-align: inherit;">并且不要</font></font><code>this.props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动</font><font style="vertical-align: inherit;">将其放入</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门泡芙Jim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>When implementing the <code>constructor()</code> function inside a React component, <code>super()</code> is a requirement. Keep in mind that your <code>MyComponent</code> component is extending or borrowing functionality from the <code>React.Component</code> base class.</p>

<p>This base class has a <code>constructor()</code> function of its own that has some code inside of it, to setup our React component for us.</p>

<p>When we define a <code>constructor()</code> function inside our <code>MyComponent</code> class, we are essentially, overriding or replacing the <code>constructor()</code> function that is inside the <code>React.Component</code> class, but we still need to ensure that all the setup code inside of this <code>constructor()</code> function still gets called.</p>

<p>So to ensure that the <code>React.Component</code>’s <code>constructor()</code> function gets called, we call <code>super(props)</code>. <code>super(props)</code> is a reference to the parents <code>constructor()</code> function, that’s all it is.</p>

<p>We have to add <code>super(props)</code> every single time we define a <code>constructor()</code> function inside a class-based component.</p>

<p>If we don’t we will see an error saying that we have to call <code>super(props)</code>.</p>

<p>The entire reason for defining this <code>constructor()</code> funciton is to initialize our state object.</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，为了初始化我们的状态对象，在超级调用下面，我要编写：</font></font></p>

<pre><code>class App extends React.Component {<font></font>
  constructor(props) {<font></font>
      super(props);<font></font>
<font></font>
      this.state = {};<font></font>
   }<font></font>
<font></font>
  // React says we have to define render()<font></font>
  render() {<font></font>
    return &lt;div&gt;Hello world&lt;/div&gt;;<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我们定义了</font></font><code>constructor()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法，通过创建JavaScript对象，将属性或键/值对分配给它，将结果分配给来初始化状态对象</font></font><code>this.state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当然，现在这只是这里的一个示例，因此我并没有真正为状态对象分配键/值对，它只是一个空对象。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOItachi老丝</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此示例中，您正在扩展</font></font><code>React.Component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类，并且根据ES2015规范，子类构造函数无法使用，</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直到</font></font><code>super()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被调用</font><font style="vertical-align: inherit;">为止</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">同样，如果ES2015类构造函数</font></font><code>super()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是子类，则</font><font style="vertical-align: inherit;">必须调用</font><font style="vertical-align: inherit;">它们。</font></font></p>

<pre><code>class MyComponent extends React.Component {<font></font>
  constructor() {<font></font>
    console.log(this); // Reference Error<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return &lt;div&gt;Hello {this.props.name}&lt;/div&gt;;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相比之下：</font></font></p>

<pre><code>class MyComponent extends React.Component {<font></font>
  constructor() {<font></font>
    super();<font></font>
    console.log(this); // this logged to console<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return &lt;div&gt;Hello {this.props.name}&lt;/div&gt;;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font><a href="https://stackoverflow.com/a/31079103"><font style="vertical-align: inherit;">这个出色的堆栈溢出答案的</font></a><font style="vertical-align: inherit;">更多细节</font></font><a href="https://stackoverflow.com/a/31079103"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能会看到通过扩展</font></font><code>React.Component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未调用</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">类而</font><font style="vertical-align: inherit;">创建的组件示例，</font></font><code>super()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是您会注意到这些</font><font style="vertical-align: inherit;">示例</font><font style="vertical-align: inherit;">没有</font></font><code>constructor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此为什么没有必要。</font></font></p>

<pre><code>class MyOtherComponent extends React.Component {<font></font>
  render() {<font></font>
    return &lt;div&gt;Hi {this.props.name}&lt;/div&gt;;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从与我交谈过的一些开发人员那里我看到的一个混乱点是，没有任何组件，</font></font><code>constructor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此无法</font></font><code>super()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在任何地方</font><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">的组件</font><font style="vertical-align: inherit;">，仍然</font></font><code>this.props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在该</font></font><code>render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法中</font><font style="vertical-align: inherit;">可用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">请记住，此规则以及为此创建</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绑定的需求</font></font><code>constructor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅适用于</font></font><code>constructor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传递</font></font><code>props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给时</font></font><code>super</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，道具将分配给</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">看一下以下情况：</font></font></p>

<pre><code>constructor(props) {<font></font>
    super();<font></font>
    console.log(this.props) //undefined<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，无论何时做：</font></font></p>

<pre><code>constructor(props) {<font></font>
    super(props);<font></font>
    console.log(this.props) //props will get logged.<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
