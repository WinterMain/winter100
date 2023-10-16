---
layout: question
title:  如何将道具传递给{this.props.children}
date:   2020-03-09T14:32:40.000Z
description: 我正在尝试找到定义可以以一般方式使用的某些组件的正确方法：<Parent>  <Child value="1">  <Child value="2...
img: 
author: 凯梅小胖
category: question
answer: 16
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试找到定义可以以一般方式使用的某些组件的正确方法：</font></font></p>

<pre><code>&lt;Parent&gt;<font></font>
  &lt;Child value="1"&gt;<font></font>
  &lt;Child value="2"&gt;<font></font>
&lt;/Parent&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，您可以想象</font></font><code>&lt;select&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>&lt;option&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为该逻辑的示例，</font><font style="vertical-align: inherit;">在父组件和子组件之间存在一种渲染</font><font style="vertical-align: inherit;">逻辑。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于这个问题，这是一个虚拟的实现：</font></font></p>

<pre><code>var Parent = React.createClass({<font></font>
  doSomething: function(value) {<font></font>
  },<font></font>
  render: function() {<font></font>
    return (&lt;div&gt;{this.props.children}&lt;/div&gt;);<font></font>
  }<font></font>
});<font></font>
<font></font>
var Child = React.createClass({<font></font>
  onClick: function() {<font></font>
    this.props.doSomething(this.props.value); // doSomething is undefined<font></font>
  },<font></font>
  render: function() {<font></font>
    return (&lt;div onClick={this.onClick}&gt;&lt;/div&gt;);<font></font>
  }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是，每当您用于</font></font><code>{this.props.children}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义包装器组件时，如何将某些属性传递给其所有子组件？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第310篇《如何将道具传递给{this.props.children}》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony村村</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原因React.children不为我工作。</font><font style="vertical-align: inherit;">这对我有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只想给孩子增加一堂课。</font><font style="vertical-align: inherit;">类似于更换道具</font></font></p>

<pre><code> var newChildren = this.props.children.map((child) =&gt; {<font></font>
 const className = "MenuTooltip-item " + child.props.className;<font></font>
    return React.cloneElement(child, { className });<font></font>
 });<font></font>
<font></font>
 return &lt;div&gt;{newChildren}&lt;/div&gt;;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里的窍门是</font></font><a href="https://reactjs.org/docs/react-api.html#cloneelement" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React.cloneElement</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以通过类似的方式传递任何道具</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><a href="https://reactjs.org/docs/render-props.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渲染道具</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是解决此问题的最准确方法。</font><font style="vertical-align: inherit;">与其将子组件作为子道具传递给父组件，不如让父组件手动渲染子组件。</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Render</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是内置的props在react中，它带有功能参数。</font><font style="vertical-align: inherit;">在此函数中，您可以使用自定义参数让父组件呈现任何所需内容。</font><font style="vertical-align: inherit;">基本上，它与儿童道具具有相同的功能，但是更可定制。</font></font></p>

<pre><code>class Child extends React.Component {<font></font>
  render() {<font></font>
    return &lt;div className="Child"&gt;<font></font>
      Child<font></font>
      &lt;p onClick={this.props.doSomething}&gt;Click me&lt;/p&gt;<font></font>
           {this.props.a}<font></font>
    &lt;/div&gt;;<font></font>
  }<font></font>
}<font></font>
<font></font>
class Parent extends React.Component {<font></font>
  doSomething(){<font></font>
   alert("Parent talks"); <font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return &lt;div className="Parent"&gt;<font></font>
      Parent<font></font>
      {this.props.render({<font></font>
        anythingToPassChildren:1, <font></font>
        doSomething: this.doSomething})}<font></font>
    &lt;/div&gt;;<font></font>
  }<font></font>
}<font></font>
<font></font>
class Application extends React.Component {<font></font>
  render() {<font></font>
    return &lt;div&gt;<font></font>
      &lt;Parent render={<font></font>
          props =&gt; &lt;Child {...props} /&gt;<font></font>
        }/&gt;<font></font>
    &lt;/div&gt;;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><a href="https://codepen.io/anon/pen/LqadXX?editors=0010" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Codepen示例</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是您所需要的吗？  </font></font></p>

<pre><code>var Parent = React.createClass({<font></font>
  doSomething: function(value) {<font></font>
  }<font></font>
  render: function() {<font></font>
    return  &lt;div&gt;<font></font>
              &lt;Child doSome={this.doSomething} /&gt;<font></font>
            &lt;/div&gt;<font></font>
  }<font></font>
})<font></font>
<font></font>
var Child = React.createClass({<font></font>
  onClick:function() {<font></font>
    this.props.doSome(value); // doSomething is undefined<font></font>
  },  <font></font>
  render: function() {<font></font>
    return  &lt;div onClick={this.onClick}&gt;&lt;/div&gt;<font></font>
  }<font></font>
})<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最精巧的方法是：</font></font></p>

<pre><code>    {React.cloneElement(this.props.children, this.props)}
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于任何具有单个子元素的人，都应该这样做。</font></font></p>

<pre><code>{React.isValidElement(this.props.children)<font></font>
                  ? React.cloneElement(this.props.children, {<font></font>
                      ...prop_you_want_to_pass<font></font>
                    })<font></font>
                  : null}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法1-克隆孩子</font></font></h3>

<pre><code>const Parent = (props) =&gt; {<font></font>
   const attributeToAddOrReplace= "Some Value"<font></font>
   const childrenWithAdjustedProps = React.Children.map(props.children, child =&gt;<font></font>
      React.cloneElement(child, { attributeToAddOrReplace})<font></font>
   );<font></font>
<font></font>
   return &lt;div&gt;{childrenWithAdjustedProps }&lt;/div&gt;<font></font>
}<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法2-使用可组合上下文</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上下文允许您将prop传递给深子组件，而无需将其作为prop显式传递给中间的组件。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上下文具有缺点： </font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数据不是以常规方式流动-通过道具。 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用上下文会在消费者和提供者之间建立契约。</font><font style="vertical-align: inherit;">理解和复制重用组件所需的需求可能会更加困难。</font></font></li>
</ol>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用可组合的上下文</font></font></strong></p>

<pre><code>export const Context = createContext&lt;any&gt;(null);<font></font>
<font></font>
export const ComposableContext = ({ children, ...otherProps }:{children:ReactNode, [x:string]:any}) =&gt; {<font></font>
    const context = useContext(Context)<font></font>
    return(<font></font>
      &lt;Context.Provider {...context} value={{...context, ...otherProps}}&gt;{children}&lt;/Context.Provider&gt;<font></font>
    );<font></font>
}<font></font>
<font></font>
function App() {<font></font>
  return (<font></font>
      &lt;Provider1&gt;<font></font>
            &lt;Provider2&gt; <font></font>
                &lt;Displayer /&gt;<font></font>
            &lt;/Provider2&gt;<font></font>
      &lt;/Provider1&gt;<font></font>
  );<font></font>
}<font></font>
<font></font>
const Provider1 =({children}:{children:ReactNode}) =&gt; (<font></font>
    &lt;ComposableContext greeting="Hello"&gt;{children}&lt;/ComposableContext&gt;<font></font>
)<font></font>
<font></font>
const Provider2 =({children}:{children:ReactNode}) =&gt; (<font></font>
    &lt;ComposableContext name="world"&gt;{children}&lt;/ComposableContext&gt;<font></font>
)<font></font>
<font></font>
const Displayer = () =&gt; {<font></font>
  const context = useContext(Context);<font></font>
  return &lt;div&gt;{context.greeting}, {context.name}&lt;/div&gt;;<font></font>
};<font></font>
<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为渲染道具是处理这种情况的合适方法</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过重构父代码看起来像这样，您可以让父对象提供子组件中使用的必要道具：</font></font></p>

<pre><code>const Parent = ({children}) =&gt; {<font></font>
  const doSomething(value) =&gt; {}<font></font>
<font></font>
  return children({ doSomething })<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，在子组件中，您可以通过以下方式访问父组件提供的功能：</font></font></p>

<pre><code>class Child extends React {<font></font>
<font></font>
  onClick() =&gt; { this.props.doSomething }<font></font>
<font></font>
  render() { <font></font>
    return (&lt;div onClick={this.onClick}&gt;&lt;/div&gt;);<font></font>
  }<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，财务结构将如下所示：</font></font></p>

<pre><code>&lt;Parent&gt;<font></font>
  {(doSomething) =&gt;<font></font>
   (&lt;Fragment&gt;<font></font>
     &lt;Child value="1" doSomething={doSomething}&gt;<font></font>
     &lt;Child value="2" doSomething={doSomething}&gt;<font></font>
    &lt;Fragment /&gt;<font></font>
   )}<font></font>
&lt;/Parent&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据文档 </font></font><code>cloneElement()</code></p>

<pre><code>React.cloneElement(<font></font>
  element,<font></font>
  [props],<font></font>
  [...children]<font></font>
)<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">克隆并使用element作为起点返回一个新的React元素。</font><font style="vertical-align: inherit;">生成的元素将具有原始元素的道具，而新的道具将被浅层合并。</font><font style="vertical-align: inherit;">新的孩子将替换现有的孩子。</font><font style="vertical-align: inherit;">原始元素的key和ref将被保留。</font></font></p>
  
  <p><code>React.cloneElement()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 几乎等同于：</font></font></p>

<pre><code>&lt;element.type {...element.props} {...props}&gt;{children}&lt;/element.type&gt;
</code></pre>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，它也保留引用。</font><font style="vertical-align: inherit;">这意味着，如果您得到一个带有裁判的孩子，就不会意外地从祖先那里偷走它。</font><font style="vertical-align: inherit;">您将获得与新元素相同的引用。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，cloneElement是用来为子项提供自定义道具的东西。</font><font style="vertical-align: inherit;">但是，组件中可以有多个子代，您需要对其进行循环。</font><font style="vertical-align: inherit;">其他答案建议您使用来映射它们</font></font><code>React.Children.map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，</font></font><code>React.Children.map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><code>React.cloneElement</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改元素的键不同，附加键和附加键</font></font><code>.$</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为前缀。</font><font style="vertical-align: inherit;">检查此问题以获取更多详细信息：</font></font><a href="https://stackoverflow.com/questions/47028558/react-cloneelement-inside-react-children-map-is-causing-element-keys-to-change/47030407#47030407"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React.Children.map中的React.cloneElement导致元素键更改</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您希望避免这种情况，则应改用</font></font><code>forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似</font></font></p>

<pre><code>render() {<font></font>
    const newElements = [];<font></font>
    React.Children.forEach(this.props.children, <font></font>
              child =&gt; newElements.push(<font></font>
                 React.cloneElement(<font></font>
                   child, <font></font>
                   {...this.props, ...customProps}<font></font>
                )<font></font>
              )<font></font>
    )<font></font>
    return (<font></font>
        &lt;div&gt;{newElements}&lt;/div&gt;<font></font>
    )<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有多个孩子想要</font></font><a href="https://kolosek.com/react-props-basic" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传递道具</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以使用React.Children.map这样实现：</font></font></p>

<pre><code>render() {<font></font>
    let updatedChildren = React.Children.map(this.props.children,<font></font>
        (child) =&gt; {<font></font>
            return React.cloneElement(child, { newProp: newProp });<font></font>
        });<font></font>
<font></font>
    return (<font></font>
        &lt;div&gt;<font></font>
            { updatedChildren }<font></font>
        &lt;/div&gt;<font></font>
    );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的组件只有一个孩子，则无需进行映射，您可以直接克隆cloneElement：</font></font></p>

<pre><code>render() {<font></font>
    return (<font></font>
        &lt;div&gt;<font></font>
            {<font></font>
                React.cloneElement(this.props.children, {<font></font>
                    newProp: newProp<font></font>
                })<font></font>
            }<font></font>
        &lt;/div&gt;<font></font>
    );<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋L</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许您也可以找到有用的功能，尽管许多人都认为这是一种反模式，但是如果您知道自己在做什么并且设计得很好的解决方案，它仍然可以使用。</font></font></p>

<p><a href="https://medium.com/merrickchristensen/function-as-child-components-5f3920a9ace9" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用作子组件</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不再需要</font></font><code>{this.props.children}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">现在，您可以使用</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">in </font><font style="vertical-align: inherit;">包装您的子组件</font><font style="vertical-align: inherit;">，</font></font><code>Route</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并像往常一样传递道具：</font></font></p>

<pre><code>&lt;BrowserRouter&gt;<font></font>
  &lt;div&gt;<font></font>
    &lt;ul&gt;<font></font>
      &lt;li&gt;&lt;Link to="/"&gt;Home&lt;/Link&gt;&lt;/li&gt;<font></font>
      &lt;li&gt;&lt;Link to="/posts"&gt;Posts&lt;/Link&gt;&lt;/li&gt;<font></font>
      &lt;li&gt;&lt;Link to="/about"&gt;About&lt;/Link&gt;&lt;/li&gt;<font></font>
    &lt;/ul&gt;<font></font>
<font></font>
    &lt;hr/&gt;<font></font>
<font></font>
    &lt;Route path="/" exact component={Home} /&gt;<font></font>
    &lt;Route path="/posts" render={() =&gt; (<font></font>
      &lt;Posts<font></font>
        value1={1}<font></font>
        value2={2}<font></font>
        data={this.state.data}<font></font>
      /&gt;<font></font>
    )} /&gt;<font></font>
    &lt;Route path="/about" component={About} /&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/BrowserRouter&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无达蒙JinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有一个答案解决拥有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> React组件的</font><font style="vertical-align: inherit;">子代的问题</font><font style="vertical-align: inherit;">，例如文本字符串。</font><font style="vertical-align: inherit;">解决方法可能是这样的：</font></font></p>

<pre><code>// Render method of Parent component<font></font>
render(){<font></font>
    let props = {<font></font>
        setAlert : () =&gt; {alert("It works")}<font></font>
    };<font></font>
    let childrenWithProps = React.Children.map( this.props.children, function(child) {<font></font>
        if (React.isValidElement(child)){<font></font>
            return React.cloneElement(child, props);<font></font>
        }<font></font>
          return child;<font></font>
      });<font></font>
    return &lt;div&gt;{childrenWithProps}&lt;/div&gt;<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Jim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑一个或多个孩子的更清洁方式</font></font></p>

<pre><code>&lt;div&gt;<font></font>
   { React.Children.map(this.props.children, child =&gt; React.cloneElement(child, {...this.props}))}<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村AL</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许您进行财产转移的最佳方法</font></font><code>children</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像一个函数</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>export const GrantParent = () =&gt; {<font></font>
  return (<font></font>
    &lt;Parent&gt;<font></font>
      {props =&gt; (<font></font>
        &lt;ChildComponent {...props}&gt;<font></font>
          Bla-bla-bla<font></font>
        &lt;/ChildComponent&gt;<font></font>
      )}<font></font>
    &lt;/Parent&gt;<font></font>
  )<font></font>
}<font></font>
<font></font>
export const Parent = ({ children }) =&gt; {<font></font>
    const somePropsHere = { //...any }<font></font>
    &lt;&gt;<font></font>
        {children(somePropsHere)}<font></font>
    &lt;/&gt;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村伽罗Mandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这个</font></font></p>

<pre><code>&lt;div&gt;{React.cloneElement(this.props.children, {...this.props})}&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它使用react-15.1为我工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西路易前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于更简洁的方法，请尝试：</font></font></p>

<pre><code>&lt;div&gt;<font></font>
    {React.cloneElement(this.props.children, { loggedIn: this.state.loggedIn })}<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：可以与多个单独的子项（子项本身必须是组件）一起使用。</font><font style="vertical-align: inherit;">在16.8.6中测试</font></font></p>

<pre><code>&lt;div&gt;<font></font>
    {React.cloneElement(props.children[0], { loggedIn: true, testingTwo: true })}<font></font>
    {React.cloneElement(props.children[1], { loggedIn: true, testProp: false })}<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
