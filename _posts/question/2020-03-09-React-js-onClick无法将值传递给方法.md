---
layout: question
title:  React js onClick无法将值传递给方法
date:   2020-03-09T14:45:46.000Z
description: 我想阅读onClick事件值属性。但是当我单击它时，在控制台上会看到类似以下的内容：SyntheticMouseEvent {dispatchConf...
img: 
author: 乐米亚
category: question
answer: 17
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想阅读onClick事件值属性。</font><font style="vertical-align: inherit;">但是当我单击它时，在控制台上会看到类似以下的内容：</font></font></p>

<pre><code>SyntheticMouseEvent {dispatchConfig: Object, dispatchMarker: ".1.1.0.2.0.0:1", nativeEvent: MouseEvent, type: "click", target
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的代码正常工作。</font><font style="vertical-align: inherit;">运行时，我可以</font></font><code>{column}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在onClick事件中</font><font style="vertical-align: inherit;">看到</font><font style="vertical-align: inherit;">但无法获取它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的代码：</font></font></p>

<pre><code>var HeaderRows = React.createClass({<font></font>
  handleSort:  function(value) {<font></font>
    console.log(value);<font></font>
  },<font></font>
  render: function () {<font></font>
    var that = this;<font></font>
    return(<font></font>
      &lt;tr&gt;<font></font>
        {this.props.defaultColumns.map(function (column) {<font></font>
          return (<font></font>
            &lt;th value={column} onClick={that.handleSort} &gt;{column}&lt;/th&gt;<font></font>
          );<font></font>
        })}<font></font>
        {this.props.externalColumns.map(function (column) {<font></font>
          // Multi dimension array - 0 is column name<font></font>
          var externalColumnName = column[0];<font></font>
          return ( &lt;th&gt;{externalColumnName}&lt;/th&gt;);<font></font>
        })}<font></font>
      &lt;/tr&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何</font></font><code>onClick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React js中将</font><font style="vertical-align: inherit;">值传递给</font><font style="vertical-align: inherit;">事件？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第317篇《React js onClick无法将值传递给方法》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>You just need to use Arrow function to pass value. </p>

<p><code>&lt;button onClick={() =&gt; this.props.onClickHandle("StackOverFlow")}&gt;</code></p>

<p>Make sure to use () = &gt;, Otherwise click method will be called without click event.</p>

<p><b>Note :</b> Crash checks default methods </p>

<p>Please find below running code in codesandbox for the same.</p>

<p><a href="https://codesandbox.io/s/react-onclick-pass-value-rjh3d" rel="nofollow noreferrer">React pass value with method</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Simple changed is required: </p>

<p>Use 
<code>&lt;th value={column} onClick={that.handleSort} &gt;{column}&lt;/th&gt;</code></p>

<p>instead of
<code>&lt;th value={column} onClick={that.handleSort} &gt;{column}&lt;/th&gt;</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无宝儿达蒙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong>There is a couple of ways to pass parameter in event handlers, some are following.</strong></p>

<p>You can use an arrow function to wrap around an event handler and pass parameters:</p>

<pre><code>&lt;button onClick={() =&gt; this.handleClick(id)} /&gt;
</code></pre>

<p>above example is equivalent to calling <code>.bind</code> or you can explicitly call bind.</p>

<pre><code>&lt;button onClick={this.handleClick.bind(this, id)} /&gt;
</code></pre>

<p>Apart from these two approaches, you can also pass arguments to a function which is defined as a curry function.</p>

<pre><code>handleClick = (id) =&gt; () =&gt; {<font></font>
    console.log("Hello, your ticket number is", id)<font></font>
};<font></font>
<font></font>
&lt;button onClick={this.handleClick(id)} /&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProJinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>There are 3 ways to handle this :- </p>

<ol>
<li><p>Bind the method in constructor as :- </p>

<pre><code>export class HeaderRows extends Component {<font></font>
   constructor() {<font></font>
       super();<font></font>
       this.handleSort = this.handleSort.bind(this);<font></font>
   }<font></font>
}<font></font>
</code></pre></li>
<li><p>Use the arrow function while creating it as :-</p>

<pre><code>handleSort = () =&gt; {<font></font>
    // some text here<font></font>
}<font></font>
</code></pre></li>
<li><p>Third way is this :-</p>

<pre><code>&lt;th value={column} onClick={() =&gt; that.handleSort} &gt;{column}&lt;/th&gt;
</code></pre></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam猿泡芙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>You can use your code like this:</p>

<pre><code>&lt;th value={column} onClick={(e) =&gt; that.handleSort(e, column)} &gt;{column}&lt;/th&gt;
</code></pre>

<p>Here e is for event object, if you want to use event methods like <code>preventDefault()</code> in your handle function or want to get target value or name like <code>e.target.name</code>.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>class TableHeader extends Component {<font></font>
  handleClick = (parameter,event) =&gt; {<font></font>
console.log(parameter)<font></font>
console.log(event)<font></font>
<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;button type="button" <font></font>
onClick={this.handleClick.bind(this,"dataOne")}&gt;Send&lt;/button&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天LEY逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Using arrow function :</p>

<p>You must install stage-2:</p>

<p>npm install babel-preset-stage-2 :    </p>

<pre><code>class App extends React.Component {<font></font>
    constructor(props) {<font></font>
        super(props);<font></font>
        this.state = {<font></font>
            value=0<font></font>
        }<font></font>
    }<font></font>
<font></font>
    changeValue = (data) =&gt; (e) =&gt; {<font></font>
        alert(data);  //10<font></font>
        this.setState({ [value]: data })<font></font>
    }<font></font>
<font></font>
    render() {<font></font>
        const data = 10;<font></font>
        return (<font></font>
            &lt;div&gt;<font></font>
                &lt;input type="button" onClick={this.changeValue(data)} /&gt;<font></font>
            &lt;/div&gt;<font></font>
        );<font></font>
    }<font></font>
}<font></font>
export default App; <font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>1. You just have to use an arrow function in the Onclick event like this: <font></font>
<font></font>
&lt;th value={column} onClick={() =&gt; that.handleSort(theValue)} &gt;{column}&lt;/th&gt;<font></font>
<font></font>
2.Then bind this in the constructor method:<font></font>
    this.handleSort = this.handleSort.bind(this);<font></font>
<font></font>
3.And finally get the value in the function:<font></font>
  handleSort(theValue){<font></font>
     console.log(theValue);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi小卤蛋凯</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I guess you will have to bind the method to the React’s class instance. It’s safer to use a constructor to bind all methods in React. In your case when you pass the parameter to the method, the first parameter is used to bind the ‘this’ context of the method, thus you cannot access the value inside the method.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小村村</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Below is the example which passes value on onClick event.</p>

<p>I used es6 syntax. remember in class component arrow function does not bind automatically, so explicitly binding in constructor. </p>

<pre><code>class HeaderRows extends React.Component {<font></font>
<font></font>
    constructor(props) {<font></font>
        super(props);<font></font>
        this.handleSort = this.handleSort.bind(this);<font></font>
    }<font></font>
<font></font>
    handleSort(value) {<font></font>
        console.log(value);<font></font>
    }<font></font>
<font></font>
    render() {<font></font>
        return(<font></font>
            &lt;tr&gt;<font></font>
                {this.props.defaultColumns.map( (column, index) =&gt;<font></font>
                    &lt;th value={ column } <font></font>
                        key={ index } <font></font>
                        onClick={ () =&gt; this.handleSort(event.target.value) }&gt;<font></font>
                        { column }<font></font>
                    &lt;/th&gt;<font></font>
                )}<font></font>
<font></font>
                {this.props.externalColumns.map((column, index)  =&gt;<font></font>
                    &lt;th value ={ column[0] }<font></font>
                        key={ index }&gt;<font></font>
                        {column[0]}<font></font>
                    &lt;/th&gt;<font></font>
                )}<font></font>
            &lt;/tr&gt;<font></font>
         );<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Sam</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>You can simply do it if you are using <code>ES6</code>.</p>

<pre><code>export default class Container extends Component {<font></font>
  state = {<font></font>
    data: [<font></font>
        // ...<font></font>
    ]<font></font>
  }<font></font>
<font></font>
  handleItemChange = (e, data) =&gt; {<font></font>
      // here the data is available <font></font>
      // ....<font></font>
  }<font></font>
  render () {<font></font>
     return (<font></font>
        &lt;div&gt;<font></font>
        {<font></font>
           this.state.data.map((item, index) =&gt; (<font></font>
              &lt;div key={index}&gt;<font></font>
                  &lt;Input onChange={(event) =&gt; this.handItemChange(event, <font></font>
                         item)} value={item.value}/&gt;<font></font>
              &lt;/div&gt;<font></font>
           ))<font></font>
        }<font></font>
        &lt;/div&gt;<font></font>
     );<font></font>
   }<font></font>
 }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">文韬武略辛弃疾</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Simply create a function like this </p>

<pre><code>  function methodName(params) {<font></font>
    //the thing  you wanna do<font></font>
  }<font></font>
</code></pre>

<p>and call it in the place you need</p>

<p>&lt;
    Icon
    onClick = {
        () =&gt; {
            methodName(theParamsYouwantToPass);
        }
    }/
        &gt;</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Itachi小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I realize this is pretty late to the party, but I think a much simpler solution could satisfy many use cases:</p>

<pre><code>    handleEdit(event) {<font></font>
        let value = event.target.value;<font></font>
    }<font></font>
<font></font>
    ...<font></font>
<font></font>
    &lt;button<font></font>
        value={post.id}<font></font>
        onClick={this.handleEdit} &gt;Edit&lt;/button&gt;<font></font>
</code></pre>

<p>I presume you could also use a <code>data-</code> attribute.</p>

<p>Simple, semantic.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[[/ h到@ E.Sundin，</font><font style="vertical-align: inherit;">以在评论中</font></font><a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接此内容</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ]</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最佳答案（匿名函数或绑定）将起作用，但它并不是最有效的方法，因为它会为该</font></font><code>map()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数</font><font style="vertical-align: inherit;">生成的每个实例创建事件处理程序的副本</font><font style="vertical-align: inherit;">。</font></font></p>

<p>This is an explanation of the optimal way to do it from the <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md" rel="noreferrer">ESLint-plugin-react</a>:</p>

<blockquote>
  <p>Lists of Items</p>
  
  <p>A common use case of bind in render is when rendering a list, to have
  a separate callback per list item:</p>
</blockquote>

<pre><code>const List = props =&gt; (<font></font>
      &lt;ul&gt;<font></font>
        {props.items.map(item =&gt;<font></font>
          &lt;li key={item.id} onClick={() =&gt; console.log(item.id)}&gt;<font></font>
            ...<font></font>
          &lt;/li&gt;<font></font>
        )}<font></font>
      &lt;/ul&gt;<font></font>
    );<font></font>
</code></pre>

<blockquote>
  <p>Rather than doing it this way, pull the repeated section into its own
  component:</p>
</blockquote>

<pre><code>const List = props =&gt; (<font></font>
      &lt;ul&gt;<font></font>
        {props.items.map(item =&gt;<font></font>
          &lt;ListItem <font></font>
            key={item.id} <font></font>
            item={item} <font></font>
            onItemClick={props.onItemClick} // assume this is passed down to List<font></font>
           /&gt;<font></font>
        )}<font></font>
      &lt;/ul&gt;<font></font>
    );<font></font>
<font></font>
<font></font>
const ListItem = props =&gt; {<font></font>
  const _onClick = () =&gt; {<font></font>
    console.log(props.item.id);<font></font>
  }<font></font>
    return (<font></font>
      &lt;li onClick={_onClick}&gt;<font></font>
        ...<font></font>
      &lt;/li&gt;<font></font>
    );<font></font>
<font></font>
});<font></font>
</code></pre>

<blockquote>
  <p>This will speed up rendering, as it avoids the need to create new
  functions (through bind calls) on every render.</p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里有不错的答案，我同意@Austin Greco（第二个选项，具有单独的组件），</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我喜欢另一种方式，</font></font><a href="https://www.sitepoint.com/currying-in-functional-javascript/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">currying</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
您可以做的是创建一个接受参数（您的参数）的函数并返回另一个接受另一个参数的函数（在这种情况下为click事件）。</font><font style="vertical-align: inherit;">那么您就可以随心所欲地使用它。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES5：</font></font></strong>  </p>

<pre><code>handleChange(param) { // param is the argument you passed to the function<font></font>
    return function (e) { // e is the event object that returned<font></font>
<font></font>
    };<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6：</font></font></strong>  </p>

<pre><code>handleChange = param =&gt; e =&gt; {<font></font>
    // param is the argument you passed to the function<font></font>
    // e is the event object that returned<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将以这种方式使用它：</font></font></p>

<pre><code>&lt;input <font></font>
    type="text" <font></font>
    onChange={this.handleChange(someParam)} <font></font>
/&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是此类用法的完整示例：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="true">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const someArr = ["A", "B", "C", "D"];<font></font>
<font></font>
class App extends React.Component {<font></font>
  state = {<font></font>
    valueA: "",<font></font>
    valueB: "some initial value",<font></font>
    valueC: "",<font></font>
    valueD: "blah blah"<font></font>
  };<font></font>
<font></font>
  handleChange = param =&gt; e =&gt; {<font></font>
    const nextValue = e.target.value;<font></font>
    this.setState({ ["value" + param]: nextValue });<font></font>
  };<font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        {someArr.map(obj =&gt; {<font></font>
          return (<font></font>
            &lt;div&gt;<font></font>
              &lt;label&gt;<font></font>
                {`input ${obj}   `}<font></font>
              &lt;/label&gt;<font></font>
              &lt;input<font></font>
                type="text"<font></font>
                value={this.state["value" + obj]}<font></font>
                onChange={this.handleChange(obj)}<font></font>
              /&gt;<font></font>
              &lt;br /&gt;<font></font>
              &lt;br /&gt;<font></font>
            &lt;/div&gt;<font></font>
          );<font></font>
        })}<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
const rootElement = document.getElementById("root");<font></font>
ReactDOM.render(&lt;App /&gt;, rootElement);</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"&gt;&lt;/script&gt;<font></font>
&lt;div id="root"&gt;&lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，这种方法不能解决在每个渲染器上创建新实例的问题。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
与其他内联处理程序相比，我更喜欢这种方法，因为我认为这种方法更加简洁易读。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
如下面的注释中所建议，您可以缓存/记住函数的结果。</font></font></p>

<p>Here is a naive implementation: </p>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="true">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let memo = {};<font></font>
<font></font>
const someArr = ["A", "B", "C", "D"];<font></font>
<font></font>
class App extends React.Component {<font></font>
  state = {<font></font>
    valueA: "",<font></font>
    valueB: "some initial value",<font></font>
    valueC: "",<font></font>
    valueD: "blah blah"<font></font>
  };<font></font>
<font></font>
  handleChange = param =&gt; {<font></font>
    const handler = e =&gt; {<font></font>
      const nextValue = e.target.value;<font></font>
      this.setState({ ["value" + param]: nextValue });<font></font>
    }<font></font>
    if (!memo[param]) {<font></font>
      memo[param] = e =&gt; handler(e)<font></font>
    }<font></font>
    return memo[param]<font></font>
  };<font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        {someArr.map(obj =&gt; {<font></font>
          return (<font></font>
            &lt;div key={obj}&gt;<font></font>
              &lt;label&gt;<font></font>
                {`input ${obj}   `}<font></font>
              &lt;/label&gt;<font></font>
              &lt;input<font></font>
                type="text"<font></font>
                value={this.state["value" + obj]}<font></font>
                onChange={this.handleChange(obj)}<font></font>
              /&gt;<font></font>
              &lt;br /&gt;<font></font>
              &lt;br /&gt;<font></font>
            &lt;/div&gt;<font></font>
          );<font></font>
        })}<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
const rootElement = document.getElementById("root");<font></font>
ReactDOM.render(&lt;App /&gt;, rootElement);</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"&gt;&lt;/script&gt;<font></font>
&lt;div id="root" /&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神无Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如今，有了ES6，我觉得我们可以使用更新的答案。 </font></font></p>

<pre><code>return (<font></font>
  &lt;th value={column} onClick={()=&gt;this.handleSort(column)} &gt;{column}&lt;/th&gt;<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，（对于任何不知道的对象）由于</font></font><code>onClick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">期望传递给它的功能而</font></font><code>bind</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">起作用，因为它创建了功能的副本。</font><font style="vertical-align: inherit;">相反，我们可以传递一个箭头函数表达式，该表达式仅调用所需的函数并保留</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您永远不需要</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React中</font><font style="vertical-align: inherit;">绑定该</font><font style="vertical-align: inherit;">方法，但是如果由于某种原因您迷失</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了一种组件方法：</font></font></p>

<pre><code>constructor(props) {<font></font>
  super(props);<font></font>
  this.myMethod = this.myMethod.bind(this);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三前端Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的方法</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用箭头功能：</font></font></p>

<pre><code>return (<font></font>
  &lt;th value={column} onClick={() =&gt; this.handleSort(column)}&gt;{column}&lt;/th&gt;<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将创建一个新的函数，</font></font><code>handleSort</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以正确的参数进行</font><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更好的方法</font></font></h2>

<p><a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md#protips" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其提取到子组件中。</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
在render调用中使用箭头函数的问题是，每次都会创建一个新函数，最终导致不必要的重新渲染。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果创建子组件，则可以传递处理程序并将props用作参数，然后仅当props更改时才重新渲染（因为现在处理程序引用不再更改）：</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">子组件</font></font></em></p>

<pre><code>class TableHeader extends Component {<font></font>
  handleClick = () =&gt; {<font></font>
    this.props.onHeaderClick(this.props.value);<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;th onClick={this.handleClick}&gt;<font></font>
        {this.props.column}<font></font>
      &lt;/th&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主要成分</font></font></em></p>

<pre><code>{this.props.defaultColumns.map((column) =&gt; (<font></font>
  &lt;TableHeader<font></font>
    value={column}<font></font>
    onHeaderClick={this.handleSort}<font></font>
  /&gt;<font></font>
))}<font></font>
</code></pre>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旧的简便方法（ES5）</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind" rel="noreferrer"><code>.bind</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过所需要的参数：</font></font></p>

<pre><code>return (<font></font>
  &lt;th value={column} onClick={that.handleSort.bind(that, column)}&gt;{column}&lt;/th&gt;<font></font>
);<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
