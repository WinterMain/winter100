---
layout: question
title:  您可以在不调用setState的情况下强制React组件重新呈现吗？
date:   2020-03-09T14:36:29.000Z
description: 我有一个外部（组件），可观察的对象，我想听其变化。当对象被更新时，它发出更改事件，然后我想在检测到任何更改时重新呈现该组件。对于顶层，React.re...
img: 
author: 番长斯丁逆天
category: question
answer: 17
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个外部（组件），可观察的对象，我想听其变化。</font><font style="vertical-align: inherit;">当对象被更新时，它发出更改事件，然后我想在检测到任何更改时重新呈现该组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于顶层，</font></font><code>React.render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是可能的，但是在组件内不起作用（这是有道理的，因为该</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法仅返回一个对象）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个代码示例：</font></font></p>

<pre class="lang-js prettyprint-override"><code>export default class MyComponent extends React.Component {<font></font>
<font></font>
  handleButtonClick() {<font></font>
    this.render();<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        {Math.random()}<font></font>
        &lt;button onClick={this.handleButtonClick.bind(this)}&gt;<font></font>
          Click me<font></font>
        &lt;/button&gt;<font></font>
      &lt;/div&gt;<font></font>
    )<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在内部单击该按钮会调用</font></font><code>this.render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但这实际上并不是导致渲染发生的原因（您可以看到它在起作用，因为由创建的文本</font></font><code>{Math.random()}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会更改）。</font><font style="vertical-align: inherit;">但是，如果我只是打电话</font></font><code>this.setState()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>this.render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它就可以正常工作。</font></font></p>

<p><strong>So I guess my question is:</strong> do React components <em>need</em> to have state in order to rerender? Is there a way to force the component to update on demand without changing the state?</p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用forceUpdate（）进行更多详细信息检查（</font></font><a href="https://reactjs.org/docs/react-component.html#forceupdate" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">forceUpdate（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony老丝</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">forceUpdate（），但是每次我听到有人谈论它时，都应该跟进它，但绝对不要使用它。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Itachi小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6-我提供了一个示例，这对我有帮助：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在“ short if语句”中，您可以传递空函数，如下所示：</font></font></p>

<pre><code>isReady ? ()=&gt;{} : onClick
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这似乎是最短的方法。</font></font></p>

<pre><code>()=&gt;{}
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了完成您描述的内容，请尝试this.forceUpdate（）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyMandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种方法是调用</font></font><code>setState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保留状态：</font></font></p>

<p><code>this.setState(prevState=&gt;({...prevState}));</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三JimHarry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>forceUpdate();</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 该方法可以使用，但建议使用 </font></font><code>setState();</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿神奇梅</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现最好避免使用forceUpdate（）。</font><font style="vertical-align: inherit;">强制重新渲染的一种方法是添加render（）对临时外部变量的依赖性，并在需要时更改该变量的值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个代码示例：</font></font></p>

<pre><code>class Example extends Component{<font></font>
   constructor(props){<font></font>
      this.state = {temp:0};<font></font>
<font></font>
      this.forceChange = this.forceChange.bind(this);<font></font>
   }<font></font>
<font></font>
   forceChange(){<font></font>
      this.setState(prevState =&gt; ({<font></font>
          temp: prevState.temp++<font></font>
      })); <font></font>
   }<font></font>
<font></font>
   render(){<font></font>
      return(<font></font>
         &lt;div&gt;{this.state.temp &amp;&amp;<font></font>
             &lt;div&gt;<font></font>
                  ... add code here ...<font></font>
             &lt;/div&gt;}<font></font>
         &lt;/div&gt;<font></font>
      )<font></font>
   }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要强制重新渲染时，请调用this.forceChange（）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐泡芙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以如下使用this.forceUpdate（）。</font></font></p>

<pre><code>       class MyComponent extends React.Component {<font></font>
<font></font>
<font></font>
<font></font>
      handleButtonClick = ()=&gt;{<font></font>
          this.forceUpdate();<font></font>
     }<font></font>
<font></font>
<font></font>
 render() {<font></font>
<font></font>
   return (<font></font>
     &lt;div&gt;<font></font>
      {Math.random()}<font></font>
        &lt;button  onClick={this.handleButtonClick}&gt;<font></font>
        Click me<font></font>
        &lt;/button&gt;<font></font>
     &lt;/div&gt;<font></font>
    )<font></font>
  }<font></font>
}<font></font>
<font></font>
 ReactDOM.render(&lt;MyComponent /&gt; , mountNode);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使使用setState重新呈现组件，DOM中的元素“ Math.random”部分也只会更新。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里所有的答案都是对问题理解的正确补充。.我们知道通过使用forceUpdate（）无需使用setState（{}）就可以重新渲染组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的代码与setState一起运行，如下所示。</font></font></p>

<pre><code> class MyComponent extends React.Component {<font></font>
<font></font>
<font></font>
<font></font>
             handleButtonClick = ()=&gt;{<font></font>
                this.setState({ });<font></font>
              }<font></font>
<font></font>
<font></font>
        render() {<font></font>
         return (<font></font>
  &lt;div&gt;<font></font>
    {Math.random()}<font></font>
    &lt;button  onClick={this.handleButtonClick}&gt;<font></font>
      Click me<font></font>
    &lt;/button&gt;<font></font>
  &lt;/div&gt;<font></font>
)<font></font>
  }<font></font>
 }<font></font>
<font></font>
ReactDOM.render(&lt;MyComponent /&gt; , mountNode);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是另一个回复，以备份已接受的答案：-)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React不鼓励使用，</font></font><code>forceUpdate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它们通常在函数式编程中使用非常“这是唯一的方法”。</font><font style="vertical-align: inherit;">在许多情况下这很好，但是许多React开发人员都带有面向对象的背景，通过这种方法，完全可以监听可观察对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果这样做了，您可能知道您必须在可观察到的“火灾”发生时重新渲染，因此，您应该使用</font></font><code>forceUpdate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它，而实际上这</font></font><code>shouldComponentUpdate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是这里不涉及的优点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MobX之类的工具需要面向对象的方法，实际上是在表面下进行此操作（实际上是MobX </font></font><code>render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直接</font><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有几种方法可以重新渲染组件：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的解决方案是使用forceUpdate（）方法：</font></font></p>

<pre><code>this.forceUpdate()
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种解决方案是在state（nonUsedKey）中创建未使用的密钥，并通过更新此nonUsedKey来调用setState函数：</font></font></p>

<pre><code>this.setState({ nonUsedKey: Date.now() } );
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或重写所有当前状态：</font></font></p>

<pre><code>this.setState(this.state);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改道具也可以重新渲染组件。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了完整起见，您还可以在功能组件中实现此目的：</font></font></p>

<pre><code>const [, updateState] = useState();<font></font>
const forceUpdate = useCallback(() =&gt; updateState({}), []);<font></font>
// ...<font></font>
forceUpdate();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，作为可重用的钩子：</font></font></p>

<pre><code>const useForceUpdate = () =&gt; {<font></font>
  const [, updateState] = useState();<font></font>
  return useCallback(() =&gt; updateState({}), []);<font></font>
}<font></font>
// const forceUpdate = useForceUpdate();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见：</font><a href="https://stackoverflow.com/a/53215514/2692307"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://stackoverflow.com/a/53215514/2692307"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//stackoverflow.com/a/53215514/2692307</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，使用强制更新机制仍然是不正确的做法，因为它会违反反应心态，因此，如果可能的话，仍应避免使用它。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim小哥GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过以下两种方法进行操作：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.使用</font></font><code>forceUpdate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用该</font></font><code>forceUpdate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">时可能会发生一些故障</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">一个示例是它忽略该</font></font><code>shouldComponentUpdate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法，并且无论是否</font></font><code>shouldComponentUpdate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回false </font><font style="vertical-align: inherit;">都将重新渲染视图</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，应尽可能避免使用forceUpdate（）。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.将this.state传递给</font></font><code>setState()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下代码行克服了上一个示例的问题：</font></font></p>

<pre><code>this.setState(this.state);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，所有要做的就是用触发重新渲染的当前状态覆盖当前状态。</font><font style="vertical-align: inherit;">这仍然不一定是最好的处理方法，但是它确实克服了使用forceUpdate（）方法可能遇到的一些故障。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我想我的问题是：React组件是否需要具有状态才能重新渲染？</font><font style="vertical-align: inherit;">有没有一种方法可以在不更改状态的情况下强制组件按需更新？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他答案试图说明您如何做到，但重点是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不应该这样做</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">即使是更改密钥的骇人听闻的解决方案也没有抓住重点。</font><font style="vertical-align: inherit;">React的功能是放弃手动管理何时应该渲染某些东西的控制权，而只是考虑如何在输入上映射东西。</font><font style="vertical-align: inherit;">然后提供输入流。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要手动强制重新渲染，则几乎可以肯定您没有做正确的事情。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的组件中，您可以调用</font></font><code>this.forceUpdate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">强制重新渲染。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档：</font><a href="https://facebook.github.io/react/docs/react-component.html#forceupdate" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://facebook.github.io/react/docs/react-component.html#forceupdate" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//facebook.github.io/react/docs/component-api.html</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva梅</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"></font><code>forceUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过执行以下操作</font><font style="vertical-align: inherit;">避免</font><font style="vertical-align: inherit;">了</font></font></h2>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误方式</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：请勿将索引用作键</font></font></p>
</blockquote>

<pre><code>this.state.rows.map((item, index) =&gt;<font></font>
   &lt;MyComponent cell={item} key={index} /&gt;<font></font>
)<font></font>
</code></pre>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确的方法</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：使用数据ID作为密钥，可以是一些GUID等</font></font></p>
</blockquote>

<pre><code>this.state.rows.map((item) =&gt;<font></font>
   &lt;MyComponent item={item} key={item.id} /&gt;<font></font>
)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，通过进行此类代码改进，您的组件将是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">唯一的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并自然呈现</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您希望两个不受组件关系约束的React组件（父子组件）进行通信时，建议使用</font></font><a href="https://facebook.github.io/flux/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Flux</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或类似的架构。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您要做的是监听</font></font><strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可观察的组件</font></font></strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存储（包含模型及其接口）的更改，并保存导致渲染更改的数据，如</font></font><code>state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中所示</font></font><code>MyComponent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当商店推送新数据时，您将更改组件的状态，这将自动触发渲染。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，您应尽量避免使用</font></font><code>forceUpdate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">从文档中：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，您应该避免使用forceUpdate（），而只能从render（）中的this.props和this.state中读取。</font><font style="vertical-align: inherit;">这使您的应用程序更简单，更高效</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，这</font></font><code>forceUpdate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是唯一正确的解决方案，因为</font><font style="vertical-align: inherit;">如果在其中</font><font style="vertical-align: inherit;">或仅返回时</font><font style="vertical-align: inherit;">实施了附加逻辑，则</font></font><code>setState()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">触发重新渲染</font><font style="vertical-align: inherit;">。</font></font><code>shouldComponentUpdate()</code><font style="vertical-align: inherit;"></font><code>false</code><font style="vertical-align: inherit;"></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">强制性升级（）</font></font></h3>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用</font></font><code>forceUpdate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将导致</font></font><code>render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在组件上被跳过</font></font><code>shouldComponentUpdate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><em><a href="https://facebook.github.io/react/docs/component-api.html#forceupdate" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多...</font></font></a></em></p>
</blockquote>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setState（）</font></font></h3>

<blockquote>
  <p><code>setState()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非在中实现了条件渲染逻辑，否则它将始终触发重新渲染</font></font><code>shouldComponentUpdate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><em><a href="https://facebook.github.io/react/docs/component-api.html#setstate" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多...</font></font></a></em></p>
</blockquote>

<p></p><hr>
<code>forceUpdate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 可以从组件内部调用 </font></font><code>this.forceUpdate()</code><p></p>

<p></p><hr><p></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">挂钩：</font></font><a href="https://stackoverflow.com/questions/53215285/how-can-i-force-component-to-re-render-with-hooks-in-react/58606536#58606536"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在React中强制使用挂钩重新渲染组件？</font></font></a></h3></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
