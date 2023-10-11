---
layout: question
title:  什么是mapDispatchToProps？
date:   2020-03-10T01:24:40.000Z
description: 我正在阅读Redux库的文档，其中包含以下示例：  除了读取状态之外，容器组件还可以调度动作。以类似的方式，您可以定义一个名为的函数mapDispa...
img: 
author: 小宇宙老丝
category: question
answer: 4
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在阅读Redux库的文档，其中包含以下示例：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了读取状态之外，容器组件还可以调度动作。</font><font style="vertical-align: inherit;">以类似的方式，您可以定义一个名为的函数</font></font><code>mapDispatchToProps()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">该函数</font><font style="vertical-align: inherit;">接收该</font></font><code>dispatch()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法并返回要注入到演示组件中的回调道具。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这实际上是没有意义的。</font><font style="vertical-align: inherit;">为什么</font></font><code>mapDispatchToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经</font><font style="vertical-align: inherit;">需要</font><font style="vertical-align: inherit;">时需要</font></font><code>mapStateToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们还提供了以下方便的代码示例：</font></font></p>

<pre><code>const mapDispatchToProps = (dispatch) =&gt; {<font></font>
  return {<font></font>
    onTodoClick: (id) =&gt; {<font></font>
      dispatch(toggleTodo(id))<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人可以用外行的术语解释一下此功能是什么以及为什么有用吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第399篇《什么是mapDispatchToProps？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Sam斯丁</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><code>mapStateToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接收</font></font><code>state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和，</font></font><code>props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并允许您从状态中提取道具以传递给组件。</font></font></p>

<p><code>mapDispatchToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接收</font></font><code>dispatch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，用于绑定操作创建者以进行分派，因此当您执行结果函数时，将分派操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现这仅使您不必</font></font><code>dispatch(actionCreator())</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在组件中执行操作，从而使其更易于阅读。</font></font></p>

<p><a href="https://github.com/reactjs/react-redux/blob/master/docs/api.md#arguments" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/reactjs/react-redux/blob/master/docs/api.md#arguments</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村西里</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上是简写。</font><font style="vertical-align: inherit;">因此，不必写：</font></font></p>

<pre><code>this.props.dispatch(toggleTodo(id));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将使用示例代码中所示的mapDispatchToProps，然后在其他地方编写：</font></font></p>

<pre><code>this.props.onTodoClick(id);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或更可能是这种情况，您可以将其用作事件处理程序：</font></font></p>

<pre><code>&lt;MyComponent onClick={this.props.onTodoClick} /&gt;
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">丹·阿布拉莫夫（Dan Abramov）在此提供了一个有用的视频：</font><a href="https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Stafan</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><code>mapStateToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>mapDispatchToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>connect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自</font></font><code>react-redux</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库提供了一种方便的方式来访问您</font><font style="vertical-align: inherit;">的商店</font></font><code>state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>dispatch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">商店功能。</font><font style="vertical-align: inherit;">因此，基本上connect是一个更高阶的组件，如果您认为合适的话，也可以将其视为包装器。</font><font style="vertical-align: inherit;">因此，每次</font></font><code>state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改</font></font><code>mapStateToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时，新</font><font style="vertical-align: inherit;">组件都会调用您的组件，</font></font><code>state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随后在</font></font><code>props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新组件时，组件将运行render函数以在浏览器中呈现组件。</font></font><code>mapDispatchToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还将键值存储在</font></font><code>props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件的上，通常它们采用函数形式。</font><font style="vertical-align: inherit;">通过这种方式，您可以触发</font></font><code>state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自组件</font></font><code>onClick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>onChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件的</font><font style="vertical-align: inherit;">更改</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从文档：</font></font></p>

<pre><code>const TodoListComponent = ({ todos, onTodoClick }) =&gt; (<font></font>
  &lt;ul&gt;<font></font>
    {todos.map(todo =&gt;<font></font>
      &lt;Todo<font></font>
        key={todo.id}<font></font>
        {...todo}<font></font>
        onClick={() =&gt; onTodoClick(todo.id)}<font></font>
      /&gt;<font></font>
    )}<font></font>
  &lt;/ul&gt;<font></font>
)<font></font>
<font></font>
const mapStateToProps = (state) =&gt; {<font></font>
  return {<font></font>
    todos: getVisibleTodos(state.todos, state.visibilityFilter)<font></font>
  }<font></font>
}<font></font>
<font></font>
const mapDispatchToProps = (dispatch) =&gt; {<font></font>
  return {<font></font>
    onTodoClick: (id) =&gt; {<font></font>
      dispatch(toggleTodo(id))<font></font>
    }<font></font>
  }<font></font>
}<font></font>
<font></font>
function toggleTodo(index) {<font></font>
  return { type: TOGGLE_TODO, index }<font></font>
}<font></font>
<font></font>
const TodoList = connect(<font></font>
  mapStateToProps,<font></font>
  mapDispatchToProps<font></font>
)(TodoList) <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还要确保您熟悉</font></font><a href="https://facebook.github.io/react/docs/reusable-components.html#stateless-functions" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React无状态函数</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.8hdi3n2wx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">高阶组件</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子凯</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><code>mapStateToProps()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个实用程序，可以帮助您的组件获取更新的状态（由其他一些组件更新），</font></font><br>
<code>mapDispatchToProps()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个实用程序，可以帮助您的组件触发操作事件（调度操作，这可能会导致应用程序状态发生变化）</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
