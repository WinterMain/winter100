---
layout: question
title:  ReactJS：子组件内部父级上的setState
date:   2020-03-13T09:04:51.000Z
description: 在子组件的父项上执行setState的推荐模式是什么？var Todos = React.createClass({  getInitialStat...
img: 
author: 前端Tom
category: question
answer: 4
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在子组件的父项上执行setState的推荐模式是什么？</font></font></p>

<pre><code>var Todos = React.createClass({<font></font>
  getInitialState: function() {<font></font>
    return {<font></font>
      todos: [<font></font>
        "I am done",<font></font>
        "I am not done"<font></font>
      ]<font></font>
    }<font></font>
  },<font></font>
<font></font>
  render: function() {<font></font>
    var todos = this.state.todos.map(function(todo) {<font></font>
      return &lt;div&gt;{todo}&lt;/div&gt;;<font></font>
    });<font></font>
<font></font>
    return &lt;div&gt;<font></font>
      &lt;h3&gt;Todo(s)&lt;/h3&gt;<font></font>
      {todos}<font></font>
      &lt;TodoForm /&gt;<font></font>
    &lt;/div&gt;;<font></font>
  }<font></font>
});<font></font>
<font></font>
var TodoForm = React.createClass({<font></font>
  getInitialState: function() {<font></font>
    return {<font></font>
      todoInput: ""<font></font>
    }<font></font>
  },<font></font>
<font></font>
  handleOnChange: function(e) {<font></font>
    e.preventDefault();<font></font>
    this.setState({todoInput: e.target.value});<font></font>
  },<font></font>
<font></font>
  handleClick: function(e) {<font></font>
    e.preventDefault();<font></font>
    //add the new todo item<font></font>
  },<font></font>
<font></font>
  render: function() {<font></font>
    return &lt;div&gt;<font></font>
      &lt;br /&gt;<font></font>
      &lt;input type="text" value={this.state.todoInput} onChange={this.handleOnChange} /&gt;<font></font>
      &lt;button onClick={this.handleClick}&gt;Add Todo&lt;/button&gt;<font></font>
    &lt;/div&gt;;<font></font>
  }<font></font>
});<font></font>
<font></font>
React.render(&lt;Todos /&gt;, document.body)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个待办事项数组，保持在父母的状态。</font><font style="vertical-align: inherit;">我想访问父项的状态，并从</font></font><code>TodoForm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>handleClick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件中</font><font style="vertical-align: inherit;">添加新的待办事项</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我的想法是在父对象上执行setState，这将呈现新添加的待办事项。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>parentSetState={(obj) =&gt; { this.setState(obj) }}
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙梅</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在父组件中创建addTodo函数，将其绑定到该上下文，将其传递给子组件，然后从那里调用它。</font></font></p>

<pre><code>// in Todos<font></font>
addTodo: function(newTodo) {<font></font>
    // add todo<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，在Todos.render中，您将 </font></font></p>

<pre><code>&lt;TodoForm addToDo={this.addTodo.bind(this)} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在TodoForm中用 </font></font></p>

<pre><code>this.props.addToDo(newTodo);
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的父级中，您可以创建一个类似的函数</font></font><code>addTodoItem</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">该函数</font><font style="vertical-align: inherit;">将执行所需的setState，然后将该函数作为prop传递给子组件。</font></font></p>

<pre><code>var Todos = React.createClass({<font></font>
<font></font>
  ...<font></font>
<font></font>
  addTodoItem: function(todoItem) {<font></font>
    this.setState(({ todos }) =&gt; ({ todos: { ...todos, todoItem } }));<font></font>
  },<font></font>
<font></font>
  render: function() {<font></font>
<font></font>
    ...<font></font>
<font></font>
    return &lt;div&gt;<font></font>
      &lt;h3&gt;Todo(s)&lt;/h3&gt;<font></font>
      {todos}<font></font>
      &lt;TodoForm addTodoItem={this.addTodoItem} /&gt;<font></font>
    &lt;/div&gt;<font></font>
  }<font></font>
});<font></font>
<font></font>
var TodoForm = React.createClass({<font></font>
  handleClick: function(e) {<font></font>
    e.preventDefault();<font></font>
    this.props.addTodoItem(this.state.todoInput);<font></font>
    this.setState({todoInput: ""});<font></font>
  },<font></font>
<font></font>
  ...<font></font>
<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>addTodoItem</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在TodoForm的handleClick中</font><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这将在父级上执行setState，从而呈现新添加的待办事项。</font><font style="vertical-align: inherit;">希望你能明白。</font></font></p>

<p><a href="http://jsfiddle.net/sewttkqn/1/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里摆弄。</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些基本上都是正确的，我只是想指出一些新的（官方的）官方反应文档，该文档基本上建议：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于React应用程序中发生的任何数据更改，应该只有一个“事实来源”。</font><font style="vertical-align: inherit;">通常，首先将状态添加到需要呈现的组件。</font><font style="vertical-align: inherit;">然后，如果还需要其他组件，则可以将其提升到最接近的共同祖先。</font><font style="vertical-align: inherit;">与其尝试在不同组件之间同步状态，不如依靠自上而下的数据流。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见</font></font><a href="https://reactjs.org/docs/lifting-state-up.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://reactjs.org/docs/lifting-state-up.html</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该页面还通过一个示例工作。  </font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
