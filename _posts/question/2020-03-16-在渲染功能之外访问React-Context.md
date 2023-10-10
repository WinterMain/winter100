---
layout: question
title:  在渲染功能之外访问React Context
date:   2020-03-16T01:57:02.000Z
description: 我正在使用新的React Context API而不是Redux开发一个新应用，并且在使用之前，例如Redux，当我需要获取用户列表时，我只是调用comp...
img: 
author: 梅达蒙
category: question
answer: 3
tags: React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用新的React Context API而不是Redux开发一个新应用，并且在使用之前，例如</font></font><code>Redux</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，当我需要获取用户列表时，我只是调用</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的操作，但是现在使用React Context，我的操作可以在内部进行。我的使用者位于我的渲染函数中，这意味着每次调用我的渲染函数时，它将调用我的操作以获取用户列表，但这不好，因为我将执行许多不必要的请求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么，我怎么只能一次调用动作，例如in </font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是render？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是为了举例说明，请看以下代码：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我将所有内容包装</font></font><code>Providers</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在一个组件中，如下所示：</font></font></p>

<pre><code>import React from 'react';<font></font>
<font></font>
import UserProvider from './UserProvider';<font></font>
import PostProvider from './PostProvider';<font></font>
<font></font>
export default class Provider extends React.Component {<font></font>
  render(){<font></font>
    return(<font></font>
      &lt;UserProvider&gt;<font></font>
        &lt;PostProvider&gt;<font></font>
          {this.props.children}<font></font>
        &lt;/PostProvider&gt;<font></font>
      &lt;/UserProvider&gt;<font></font>
    )<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我将这个Provider组件包装了所有应用程序，如下所示：</font></font></p>

<pre><code>import React from 'react';<font></font>
import Provider from './providers/Provider';<font></font>
import { Router } from './Router';<font></font>
<font></font>
export default class App extends React.Component {<font></font>
  render() {<font></font>
    const Component = Router();<font></font>
    return(<font></font>
      &lt;Provider&gt;<font></font>
        &lt;Component /&gt;<font></font>
      &lt;/Provider&gt;<font></font>
    )<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，以我的用户视图为例，它将是这样的：</font></font></p>

<pre><code>import React from 'react';<font></font>
import UserContext from '../contexts/UserContext';<font></font>
<font></font>
export default class Users extends React.Component {<font></font>
  render(){<font></font>
    return(<font></font>
      &lt;UserContext.Consumer&gt;<font></font>
        {({getUsers, users}) =&gt; {<font></font>
          getUsers();<font></font>
          return(<font></font>
            &lt;h1&gt;Users&lt;/h1&gt;<font></font>
            &lt;ul&gt;<font></font>
              {users.map(user) =&gt; (<font></font>
                &lt;li&gt;{user.name}&lt;/li&gt;<font></font>
              )}<font></font>
            &lt;/ul&gt;<font></font>
          )<font></font>
        }}<font></font>
      &lt;/UserContext.Consumer&gt;<font></font>
    )<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要的是：</font></font></p>

<pre><code>import React from 'react';<font></font>
import UserContext from '../contexts/UserContext';<font></font>
<font></font>
export default class Users extends React.Component {<font></font>
  componentDidMount(){<font></font>
    this.props.getUsers();<font></font>
  }<font></font>
<font></font>
  render(){<font></font>
    return(<font></font>
      &lt;UserContext.Consumer&gt;<font></font>
        {({users}) =&gt; {<font></font>
          getUsers();<font></font>
          return(<font></font>
            &lt;h1&gt;Users&lt;/h1&gt;<font></font>
            &lt;ul&gt;<font></font>
              {users.map(user) =&gt; (<font></font>
                &lt;li&gt;{user.name}&lt;/li&gt;<font></font>
              )}<font></font>
            &lt;/ul&gt;<font></font>
          )<font></font>
        }}<font></font>
      &lt;/UserContext.Consumer&gt;<font></font>
    )<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当然上面的示例不起作用，因为</font></font><code>getUsers</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不存在于我的用户视图中的道具。</font><font style="vertical-align: inherit;">如果有可能的话，正确的做法是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1647篇《在渲染功能之外访问React Context》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋宝儿</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须在较高级的父级组件中传递上下文，以在子级中获得作为道具的访问权限。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝乐</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，添加</font></font><code>.bind(this)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到事件中</font><font style="vertical-align: inherit;">就足够</font><font style="vertical-align: inherit;">了。</font><font style="vertical-align: inherit;">这就是我的组件的外观。</font></font></p>

<pre><code>// Stores File<font></font>
class RootStore {<font></font>
   //...States, etc<font></font>
}<font></font>
const myRootContext = React.createContext(new RootStore())<font></font>
export default myRootContext;<font></font>
<font></font>
<font></font>
// In Component<font></font>
class MyComp extends Component {<font></font>
  static contextType = myRootContext;<font></font>
<font></font>
  doSomething() {<font></font>
   console.log()<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return &lt;button onClick={this.doSomething.bind(this)}&gt;&lt;/button&gt;<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅达蒙</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，我找到了一种有限制的方法。</font><font style="vertical-align: inherit;">通过该</font></font><code>with-context</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库，我设法将我的所有消费者数据插入到我的组件道具中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，要在同一个组件中插入多个使用方很复杂，您必须使用此库创建混合使用方，这会使代码不够美观且效率低下。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该库的链接：</font><a href="https://github.com/SunHuawei/with-context" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/SunHuawei/with-context" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/SunHuawei/with-context</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：实际上，您不需要使用提供的多上下文api，</font></font><code>with-context</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，您可以使用简单的api并为每个上下文创建一个 decorator，如果您想在组件中使用多个消费者，则只需在类上声明所需的装饰数！</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
