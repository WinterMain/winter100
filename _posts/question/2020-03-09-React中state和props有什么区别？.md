---
layout: question
title:  React中state和props有什么区别？
date:   2020-03-09T15:15:33.000Z
description: 我正在观看有关React的Pluralsight课程，并且讲师指出，不应更改道具。我现在正在阅读有关道具与状态的文章（uberVU / react-gui...
img: 
author: Harry十三
category: question
answer: 20
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在观看有关React的Pluralsight课程，并且讲师指出，不应更改道具。</font><font style="vertical-align: inherit;">我现在正在阅读</font><font style="vertical-align: inherit;">有关道具与状态</font></font><a href="https://github.com/uberVU/react-guide/blob/master/props-vs-state.md"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的文章（uberVU / react-guide）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它说</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具和状态更改都会触发渲染更新。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文章稍后会说：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具（属性的缩写）是组件的配置，如果可以的话，可以选择它的选项。</font><font style="vertical-align: inherit;">它们是从上方接收的，并且是不变的。</font></font></p>
</blockquote>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以道具可以改变，但它们应该是不变的？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么时候应该使用道具，什么时候应该使用状态？ </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有React组件需要的数据，是否应该通过prop或在React组件中通过setup进行设置</font></font><code>getInitialState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></li>
</ul></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim前端Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态位于组件从父级传递到子级的组件内。</font><font style="vertical-align: inherit;">道具通常是不可变的。</font></font></p>

<pre><code>class Parent extends React.Component {<font></font>
    constructor() {<font></font>
        super();<font></font>
        this.state = {<font></font>
            name : "John",<font></font>
        }<font></font>
    }<font></font>
    render() {<font></font>
        return (<font></font>
            &lt;Child name={this.state.name}&gt;<font></font>
        )<font></font>
    }<font></font>
}<font></font>
<font></font>
class Child extends React.Component {<font></font>
    constructor() {<font></font>
        super();<font></font>
    }<font></font>
<font></font>
    render() {<font></font>
        return(<font></font>
            {this.props.name} <font></font>
        )<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上面的代码中，我们有一个父类（父类），其父类的状态作为名称传递给子组件（子类）作为道具，子组件使用{this.props.name}进行渲染。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示“只读”数据，该数据是不可变的，是指来自父级组件的属性。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示可变数据，最终会影响页面上呈现的内容以及由组件本身在内部进行管理的内容，并且通常由于用户输入而导致超时变化。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村Mandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态是真理的起源，您的数据生活在这里。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
您可以说国家通过道具表现出来。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为组件提供道具可以使您的UI与数据保持同步。</font><font style="vertical-align: inherit;">组件实际上只是一个返回标记的函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给定</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相同的道具</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（用于显示的数据），它将始终产生</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相同的标记</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，道具就像将数据从源头传送到功能组件的管道一样。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的解释是：STATE是组件的局部状态，例如color =“ blue”或animation = true等。</font><font style="vertical-align: inherit;">使用this.setState更改组件的状态。</font><font style="vertical-align: inherit;">PROPS是组件之间相互通信（将数据从父级发送到子级）并使组件可重用的方式。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanTony</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态是您的数据，是可变的，您可以使用它做任何您需要的事情，道具是只读数据，通常当您传递道具时，您已经使用了数据，并且需要子组件来呈现它，或者您的道具是一个道具。你调用它执行任务的功能</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyStafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我目前关于状态与道具之间的解释的观点</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态就像组件内部的局部变量。</font><font style="vertical-align: inherit;">您可以使用set state来操纵state的值。</font><font style="vertical-align: inherit;">然后，您可以例如将state的值传递给子组件。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具是完全位于您的redux存储内的值，它实际上来自于reducer产生的状态。</font><font style="vertical-align: inherit;">您的组件应连接到redux以从props获取值。</font><font style="vertical-align: inherit;">您还可以将props值传递给子组件</font></font></p></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro神无樱</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在回答有关道具是不可变的最初问题时，就</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">子组件而言</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，据说道具是不可变的，</font><font style="vertical-align: inherit;">但在父</font><em><font style="vertical-align: inherit;">组件中</font></em><font style="vertical-align: inherit;">却是可变的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">W先生</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应中“状态”和“道具”之间存在一些差异。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React根据状态控制和呈现DOM。</font><font style="vertical-align: inherit;">组件状态有两种类型：props是在组件之间转移的状态，而state是组件的内部状态。</font><font style="vertical-align: inherit;">道具用于从父组件到子组件的数据传输。</font><font style="vertical-align: inherit;">组件内部也有自己的状态：状态只能在组件内部进行修改。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，某些组件的状态可能是子组件的道具，道具将传递给子组件，这在父组件的渲染方法中声明</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><ul>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   ---你不能改变它的价值。</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ---您可以在代码中更改其值，但是在进行渲染时它将处于活动状态。</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React中，状态存储数据以及道具。</font><font style="vertical-align: inherit;">与后者的区别在于，可以通过不同的更改来修改存储的数据。</font><font style="vertical-align: inherit;">这些不过是用平面JavaScript编写的对象，因此它们可以包含数据或代码，代表您要建模的信息。</font><font style="vertical-align: inherit;">如果您需要更多的细节，建议你看这些出版物
  </font></font><a href="https://blog.devsun.eu/react/2019/01/12/empleo-del-state-en-react/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中使用做出反应的国家</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和
  </font></font><a href="https://blog.devsun.eu/react/2019/01/05/empleo-de-props-en-react/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具的用途作出反应</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，一个组件（父组件）的状态是子组件的道具。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态位于组件从父级传递到子级的组件内。</font></font></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具通常是不可变的。</font></font></p>

<pre><code>class Parent extends React.Component {<font></font>
    constructor() {<font></font>
        super();<font></font>
        this.state = {<font></font>
            name : "John",<font></font>
        }<font></font>
    }<font></font>
    render() {<font></font>
        return (<font></font>
            &lt;Child name={this.state.name}&gt;<font></font>
        )<font></font>
    }<font></font>
}<font></font>
<font></font>
class Child extends React.Component {<font></font>
    constructor() {<font></font>
        super();<font></font>
    }<font></font>
<font></font>
    render() {<font></font>
        return(<font></font>
            {this.props.name} <font></font>
        )<font></font>
    }<font></font>
}<font></font>
</code></pre></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上面的代码中，我们有一个父类（父类），其父类的状态作为名称传递给子组件（子类）作为道具，子组件使用{this.props.name}进行渲染。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您有一些用户正在应用程序中输入的数据。  </font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入数据的组件应具有此数据的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它需要在数据输入期间进行操作和更改</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在应用程序的其他任何地方，数据都应作为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传递</font><font style="vertical-align: inherit;">给所有其他组件</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以是的，道具正在发生变化，但是它们在“源”处发生了变化，然后将仅从那里流下来。</font><font style="vertical-align: inherit;">因此，道具</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在组件接收它们的上下文中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是不可变</font><strong><font style="vertical-align: inherit;">的</font></strong><font style="vertical-align: inherit;">。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，参考数据屏幕，用户在其中编辑供应商列表将在状态下进行管理，然后执行一个操作，使更新的数据保存在ReferenceDataState中，该数据可能位于AppState的下一级，然后此供应商列表将作为道具传递到需要使用它的所有组件。  </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具值无法更改[不可变]</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态值可以使用setState方法[mutable]进行更改</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥梅</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">州：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态是可变的。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态与各个组件相关联，其他组件无法使用。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态在组件安装时初始化。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态用于呈现组件内的动态更改。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具是一成不变的。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在组件之间传递道具。 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具通常用于组件之间的通信。您可以直接从父级传递到子级。</font><font style="vertical-align: inherit;">为了从孩子传给父母，您需要使用提升状态的概念。</font></font></li>
</ol>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>class Parent extends React.Component{<font></font>
  render()<font></font>
  {<font></font>
     return(<font></font>
        &lt;div&gt;<font></font>
            &lt;Child name = {"ron"}/&gt;<font></font>
        &lt;/div&gt;<font></font>
      );<font></font>
  }<font></font>
}<font></font>
<font></font>
class Child extends React.Component{<font></font>
{<font></font>
    render(){<font></font>
      return(<font></font>
         &lt;div&gt;<font></font>
              {this.props.name}<font></font>
        &lt;/div&gt;<font></font>
      );<font></font>
     }<font></font>
}</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Props simply are shorthand for properties. Props are how components talk to each other. If you’re at all familiar with React then you should know that props flow downwards from the parent component.</p>

<p>There is also the case that you can have default props so that props are set even if a parent component doesn’t pass props down.</p>

<p>This is why people refer to React as having uni-directional data flow. This takes a bit of getting your head around and I’ll probably blog on this later, but for now just remember: data flows from parent to child. Props are immutable (fancy word for it not changing)</p>

<p>So we’re happy. Components receive data from the parent. All sorted, right?</p>

<p>Well, not quite. What happens when a component receives data from someone other than the parent? What if the user inputs data directly to the component?</p>

<p>Well, this is why we have state.</p>

<p>STATE</p>

<p>Props shouldn’t change, so state steps up. Normally components don’t have state and so are referred to as stateless. A component using state is known as stateful. Feel free to drop that little tidbit at parties and watch people edge away from you.</p>

<p>So state is used so that a component can keep track of information in between any renders that it does. When you setState it updates the state object and then re-renders the component. This is super cool because that means React takes care of the hard work and is blazingly fast.</p>

<p>As a little example of state, here is a snippet from a search bar (worth checking out this course if you want to learn more about React)</p>

<pre><code>Class SearchBar extends Component {<font></font>
 constructor(props) {<font></font>
  super(props);<font></font>
this.state = { term: '' };<font></font>
 }<font></font>
render() {<font></font>
  return (<font></font>
   &lt;div className="search-bar"&gt;<font></font>
   &lt;input <font></font>
   value={this.state.term}<font></font>
   onChange={event =&gt; this.onInputChange(event.target.value)} /&gt;<font></font>
   &lt;/div&gt;<font></font>
   );<font></font>
 }<font></font>
onInputChange(term) {<font></font>
  this.setState({term});<font></font>
  this.props.onSearchTermChange(term);<font></font>
 }<font></font>
}<font></font>
</code></pre>

<p>SUMMARY</p>

<p>Props and State do similar things but are used in different ways. The majority of your components will probably be stateless.</p>

<p>Props are used to pass data from parent to child or by the component itself. They are immutable and thus will not be changed.</p>

<p>State is used for mutable data, or data that will change. This is particularly useful for user input. Think search bars for example. The user will type in data and this will update what they see.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态是响应处理组件所拥有信息的方式。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您有一个需要从服务器获取一些数据的组件。</font><font style="vertical-align: inherit;">您通常希望通知用户请求是否正在处理，请求是否失败等。这是一条信息，与该特定组件有关。</font><font style="vertical-align: inherit;">这是国家进入游戏的地方。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，定义状态的最佳方法如下：</font></font></p>

<pre><code>class MyComponent extends React.Component {<font></font>
  constructor() {<font></font>
    super();<font></font>
    this.state = { key1: value1, key2: value2 }    <font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是在最新版本的react native中，您可以执行以下操作：</font></font></p>

<pre><code>class MyComponent extends React.Component {<font></font>
  state = { key1: value1, key2: value2 }    <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这两个示例以完全相同的方式执行，只是语法上的改进。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么，有什么不同于我们在OO编程中仅使用对象属性的区别？</font><font style="vertical-align: inherit;">通常，您所处状态中的信息并不是静态的，它会随着时间而变化，您的视图将需要更新以反映此变化。</font><font style="vertical-align: inherit;">State以简单的方式提供此功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态是无法改变的！</font><font style="vertical-align: inherit;">我对此没有施加足够的压力。</font><font style="vertical-align: inherit;">这是什么意思？</font><font style="vertical-align: inherit;">这意味着您永远不要做这样的事情。</font></font></p>

<pre><code> state.key2 = newValue;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确的做法是：</font></font></p>

<pre><code>this.setState({ key2: newValue });
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用this.setState，您的组件将在更新周期中运行，并且如果状态的任何部分发生更改，则将再次调用Component渲染方法以反映此更改。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查react docs以获取更多扩展说明：</font><a href="https://facebook.github.io/react/docs/state-and-lifecycle.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://facebook.github.io/react/docs/state-and-lifecycle.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//facebook.github.io/react/docs/state-and-lifecycle.html</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中发生反应被用来控制数据到一个组件，一般道具由父设置并传递到子组件和它们固定整个组件。</font><font style="vertical-align: inherit;">对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将要更改的数据，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们必须使用状态。</font><font style="vertical-align: inherit;">而且道具是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不可变的，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而状态是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可变的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果要更改道具，可以从父组件执行，然后将其传递给子组件。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，区别在于</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态</font></font></em></strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似于OOP中的属性</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font><strong><em><font style="vertical-align: inherit;">状态</font></em></strong><em><font style="vertical-align: inherit;">是</font></em><font style="vertical-align: inherit;">类（组件）的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">局部</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内容，用于更好地描述状态。</font></font><strong><em><a href="https://kolosek.com/react-props-basic" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具</font></font></a></em></strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像参数一样</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -它们是</font><font style="vertical-align: inherit;">从组件的调用者（父对象）</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传递</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给组件的：就像您使用某些参数调用函数一样。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具和状态之间的主要区别在于，状态是内部的，并且由组件本身控制，而道具是外部的，并且由呈现组件的任何东西控制。</font></font></p>

<pre class="lang-jsx prettyprint-override"><code>function A(props) {<font></font>
  return &lt;h1&gt;{props.message}&lt;/h1&gt;<font></font>
}<font></font>
<font></font>
render(&lt;A message=”hello” /&gt;,document.getElementById(“root”));<font></font>
</code></pre>

<hr>

<pre class="lang-jsx prettyprint-override"><code><font></font>
class A extends React.Component{  <font></font>
  constructor(props) {  <font></font>
    super(props)  <font></font>
    this.state={data:"Sample Data"}  <font></font>
  }  <font></font>
  render() {<font></font>
    return(&lt;h2&gt;Class State data: {this.state.data}&lt;/h2&gt;)  <font></font>
  } <font></font>
}<font></font>
<font></font>
render(&lt;A /&gt;, document.getElementById("root"));<font></font>
</code></pre>

<p><a href="https://i.stack.imgur.com/wqvF2.png" rel="noreferrer"><img src="https://i.stack.imgur.com/wqvF2.png" alt="状态VS道具"></a></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态可以更改（可变）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而道具不能（不变）</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><strong>props</strong> (short for “properties”) and <strong>state</strong> are both plain JavaScript
  objects. While both hold information that influences the output of
  render, they are different in one important way: props get passed to
  the component (similar to function parameters) whereas <strong>state</strong> is
  managed within the component (similar to variables declared within a
  function).</p>
</blockquote>

<p>So simply <strong>state</strong> is limited to your current component but <strong>props</strong> can be pass to any component you wish... You can pass the <strong>state</strong> of the current component as <strong>prop</strong> to other components...</p>

<p>Also in React, we have <strong>stateless components</strong> which only have props and not internal state...</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下示例显示了它们在您的应用中的工作方式：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">父级</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（全状态组件）：</font></font></p>

<pre><code>class SuperClock extends React.Component {<font></font>
<font></font>
  constructor(props) {<font></font>
    super(props);<font></font>
    this.state = {name: "Alireza", date: new Date().toLocaleTimeString()};<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        &lt;Clock name={this.state.name} date={this.state.date} /&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">子级</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（无状态组件）：</font></font></p>

<pre><code>const Clock = ({name}, {date}) =&gt; (<font></font>
    &lt;div&gt;<font></font>
      &lt;h1&gt;{`Hi ${name}`}.&lt;/h1&gt;<font></font>
      &lt;h2&gt;{`It is ${date}`}.&lt;/h2&gt;<font></font>
    &lt;/div&gt;<font></font>
);<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
