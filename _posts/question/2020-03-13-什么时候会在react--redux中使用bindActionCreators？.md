---
layout: question
title:  什么时候会在react / redux中使用bindActionCreators？
date:   2020-03-12T16:22:35.000Z
description: 用于bindActionCreators的Redux文档指出：  唯一的用例bindActionCreators是，当您要将一些操作创建者传递给一个...
img: 
author: 宝儿前端
category: question
answer: 5
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于</font></font><a href="https://redux.js.org/api/bindactioncreators/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bindActionCreators的</font></font></a><font style="vertical-align: inherit;"><em><font style="vertical-align: inherit;">Redux</font></em><font style="vertical-align: inherit;">文档</font><font style="vertical-align: inherit;">指出：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">唯一的用例</font></font><code>bindActionCreators</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是，当您要将一些操作创建者传递给一个不了解Redux的组件，并且您不想将调度或Redux存储传递给该组件时。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在哪里</font></font><code>bindActionCreators</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用/需要</font><font style="vertical-align: inherit;">一个示例</font><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪种组件不知道</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两种选择的优点/缺点是什么？</font></font></p>

<pre><code>//actionCreator<font></font>
import * as actionCreators from './actionCreators'<font></font>
<font></font>
function mapStateToProps(state) {<font></font>
  return {<font></font>
    posts: state.posts,<font></font>
    comments: state.comments<font></font>
  }<font></font>
}<font></font>
<font></font>
function mapDispatchToProps(dispatch) {<font></font>
  return bindActionCreators(actionCreators, dispatch)<font></font>
}<font></font>
</code></pre>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font></h1>

<pre><code>function mapStateToProps(state) {<font></font>
  return {<font></font>
    posts: state.posts,<font></font>
    comments: state.comments<font></font>
  }<font></font>
}<font></font>
<font></font>
function mapDispatchToProps(dispatch) {<font></font>
  return {<font></font>
    someCallback: (postId, index) =&gt; {<font></font>
      dispatch({<font></font>
        type: 'REMOVE_COMMENT',<font></font>
        postId,<font></font>
        index<font></font>
      })<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1341篇《什么时候会在react / redux中使用bindActionCreators？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西达蒙西里</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的一种可能用法</font></font><code>bindActionCreators()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是将多个动作“映射”在一起作为一个道具。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">常规调度如下所示：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将几个常见的用户操作映射到道具。 </font></font></p>

<pre><code>const mapStateToProps = (state: IAppState) =&gt; {<font></font>
  return {<font></font>
    // map state here<font></font>
  }<font></font>
}<font></font>
const mapDispatchToProps = (dispatch: Dispatch) =&gt; {<font></font>
  return {<font></font>
    userLogin: () =&gt; {<font></font>
      dispatch(login());<font></font>
    },<font></font>
    userEditEmail: () =&gt; {<font></font>
      dispatch(editEmail());<font></font>
    },<font></font>
  };<font></font>
};<font></font>
export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在较大的项目中，单独映射每个调度可能会感到笨拙。</font><font style="vertical-align: inherit;">如果我们有一堆彼此相关的动作，我们可以</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将这些动作组合在一起</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如，一个用户操作文件执行了各种不同的用户相关操作。</font><font style="vertical-align: inherit;">除了可以将每个操作作为单独的调度调用外，我们可以使用</font></font><code>bindActionCreators()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><code>dispatch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用bindActionCreators（）的多个调度</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导入所有相关动作。</font><font style="vertical-align: inherit;">它们可能全部都在redux存储中的同一文件中</font></font></p>

<pre><code>import * as allUserActions from "./store/actions/user";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，不使用调度，而是使用bindActionCreators（）</font></font></p>

<pre><code>    const mapDispatchToProps = (dispatch: Dispatch) =&gt; {<font></font>
      return {<font></font>
           ...bindActionCreators(allUserActions, dispatch);<font></font>
        },<font></font>
      };<font></font>
    };<font></font>
    export default connect(mapStateToProps, mapDispatchToProps, <font></font>
    (stateProps, dispatchProps, ownProps) =&gt; {<font></font>
      return {<font></font>
        ...stateProps,<font></font>
        userAction: dispatchProps<font></font>
        ownProps,<font></font>
      }<font></font>
    })(MyComponent);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我可以使用道具</font></font><code>userAction</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来调用组件中的所有动作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE： 
 </font></font><code>userAction.login()</code>
<code>userAction.editEmail()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
或 
 </font></font><code>this.props.userAction.login()</code> <code>this.props.userAction.editEmail()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：您不必将bindActionCreators（）映射到单个道具。</font><font style="vertical-align: inherit;">（</font></font><code>=&gt; {return {}}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">映射到的其他   </font></font><code>userAction</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">您还可以</font></font><code>bindActionCreators()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将单个文件的所有操作映射为单独的道具。</font><font style="vertical-align: inherit;">但是我发现这样做可能会造成混淆。</font><font style="vertical-align: inherit;">我更喜欢为每个动作或“动作组”指定一个明确的名称。</font><font style="vertical-align: inherit;">我还想命名该名称，</font></font><code>ownProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以更加描述这些“儿童道具”的含义或来源。</font><font style="vertical-align: inherit;">当使用Redux + React时，会在提供所有道具的地方有些混乱，因此描述性越强越好。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙阿飞斯丁</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">99％的时间，它与React-Redux </font></font><code>connect()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数一起用作</font></font><code>mapDispatchToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数的</font><font style="vertical-align: inherit;">一部分</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">可以在</font></font><code>mapDispatch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您提供</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">函数中</font><font style="vertical-align: inherit;">显式地使用它</font><font style="vertical-align: inherit;">，如果使用对象速记语法并将充满动作创建者的对象传递给，则可以自动使用它</font></font><code>connect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个想法是，通过预先绑定动作创建者，您传递给的组件在</font></font><code>connect()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">技术上“不知道”它已连接-它只知道它需要运行</font></font><code>this.props.someCallback()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">另一方面，如果您未绑定动作创建者并调用</font></font><code>this.props.dispatch(someActionCreator())</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则该组件“知道”它已连接，因为它已经</font></font><code>props.dispatch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存在。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在博客文章</font></font><a href="http://blog.isquaredsoftware.com/2016/10/idiomatic-redux-why-use-action-creators/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Idiomatic Redux中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">写了一些关于此主题的想法</font><a href="http://blog.isquaredsoftware.com/2016/10/idiomatic-redux-why-use-action-creators/" rel="noreferrer"><font style="vertical-align: inherit;">：为什么使用动作创建者？</font></a><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry小宇宙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将尝试回答原始问题...</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">智能和哑巴组件</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在第一个问题中，您基本上会问</font></font><code>bindActionCreators</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先需要</font><font style="vertical-align: inherit;">为什么</font><font style="vertical-align: inherit;">，以及什么样的组件不应该意识到Redux。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之，这里的想法是将组件分为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">智能</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（容器</font><font style="vertical-align: inherit;">）组件</font><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（呈现）组件。 
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哑组件</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在需要了解的基础上工作。</font><font style="vertical-align: inherit;">他们的灵魂工作是将给定的数据呈现为HTML，仅此而已。</font><font style="vertical-align: inherit;">他们不应该知道应用程序的内部工作原理。</font><font style="vertical-align: inherit;">可以将它们视为应用程序的皮肤最深层。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">智能组件</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一种胶水，它为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">愚蠢的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件</font><font style="vertical-align: inherit;">准备数据，</font><font style="vertical-align: inherit;">并且最好不进行HTML渲染。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种体系结构促进了UI层与下面的数据层之间的松散耦合。</font><font style="vertical-align: inherit;">从而可以轻松地用其他东西（即，UI的新设计）替换两层中的任何一层，而不会破坏另一层。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回答您的问题：愚蠢的组件不应该知道Redux（或有关该数据层的任何不必要的实现细节），因为我们将来可能希望将其替换为其他东西。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在</font></font><a href="http://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux手册中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到有关此概念的更多信息，</font><font style="vertical-align: inherit;">并在</font><font style="vertical-align: inherit;">Dan Abramov的</font><font style="vertical-align: inherit;">文章</font></font><a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Presentational and Container Components</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中更深入地了解</font><font style="vertical-align: inherit;">。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪个例子更好</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二个问题是有关给定示例的优点/缺点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在第</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个示例中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，动作创建者在单独的</font></font><code>actionCreators</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件/模块</font><font style="vertical-align: inherit;">中定义</font><font style="vertical-align: inherit;">，这意味着它们可以在其他地方重用。</font><font style="vertical-align: inherit;">这几乎是定义动作的标准方法。</font><font style="vertical-align: inherit;">我真的没有看到任何缺点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二个例子中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义了动作的创作者的内联，这具有多个缺点：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">动作创建者无法重复使用（显然）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事情比较冗长，意味着可读性降低</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">操作类型是硬编码的-最好将它们</font></font><code>consts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分别</font><font style="vertical-align: inherit;">定义</font><font style="vertical-align: inherit;">，以便可以在化简器中引用它们-这样可以减少键入错误的机会</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内联定义动作创建者违反了推荐/预期的使用方式-如果计划共享代码，这会使社区对代码的可读性降低</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二个示例</font><font style="vertical-align: inherit;">比第一个</font><font style="vertical-align: inherit;">示例具有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个优势</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -编写起来更快！</font><font style="vertical-align: inherit;">因此，如果您没有更好的代码计划，那可能很好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望我能澄清一些事情...</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村AL</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个很好的用例</font></font><code>bindActionCreators</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font><font style="vertical-align: inherit;">使用</font><a href="https://github.com/afitiskin/redux-saga-routines" rel="nofollow noreferrer"><font style="vertical-align: inherit;">redux-saga-routines</font></a><font style="vertical-align: inherit;">与</font></font><a href="https://github.com/redux-saga/redux-saga" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">redux-saga</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">集成</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如：</font></font><a href="https://github.com/afitiskin/redux-saga-routines" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<pre class="lang-jsx prettyprint-override"><code>// routines.js<font></font>
import { createRoutine } from "redux-saga-routines";<font></font>
export const fetchPosts = createRoutine("FETCH_POSTS");<font></font>
</code></pre>

<pre class="lang-jsx prettyprint-override"><code>// Posts.js<font></font>
import React from "react";<font></font>
import { bindActionCreators } from "redux";<font></font>
import { connect } from "react-redux";<font></font>
import { fetchPosts } from "routines";<font></font>
<font></font>
class Posts extends React.Component {<font></font>
  componentDidMount() {<font></font>
    const { fetchPosts } = this.props;<font></font>
    fetchPosts();<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    const { posts } = this.props;<font></font>
    return (<font></font>
      &lt;ul&gt;<font></font>
        {posts.map((post, i) =&gt; (<font></font>
          &lt;li key={i}&gt;{post}&lt;/li&gt;<font></font>
        ))}<font></font>
      &lt;/ul&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
const mapStateToProps = ({ posts }) =&gt; ({ posts });<font></font>
const mapDispatchToProps = dispatch =&gt; ({<font></font>
  ...bindActionCreators({ fetchPosts }, dispatch)<font></font>
});<font></font>
<font></font>
export default connect(<font></font>
  mapStateToProps,<font></font>
  mapDispatchToProps<font></font>
)(Posts);<font></font>
</code></pre>

<pre class="lang-jsx prettyprint-override"><code>// reducers.js<font></font>
import { fetchPosts } from "routines";<font></font>
<font></font>
const initialState = [];<font></font>
<font></font>
export const posts = (state = initialState, { type, payload }) =&gt; {<font></font>
  switch (type) {<font></font>
    case fetchPosts.SUCCESS:<font></font>
      return payload.data;<font></font>
    default:<font></font>
      return state;<font></font>
  }<font></font>
};<font></font>
</code></pre>

<pre class="lang-jsx prettyprint-override"><code>// api.js<font></font>
import axios from "axios";<font></font>
<font></font>
export const JSON_OPTS = { headers: { Accept: "application/json" } };<font></font>
export const GET = (url, opts) =&gt;<font></font>
  axios.get(url, opts).then(({ data, headers }) =&gt; ({ data, headers }));<font></font>
</code></pre>

<pre class="lang-jsx prettyprint-override"><code>// sagas.js<font></font>
import { GET, JSON_OPTS } from "api";<font></font>
import { fetchPosts } from "routines";<font></font>
import { call, put, takeLatest } from "redux-saga/effects";<font></font>
<font></font>
export function* fetchPostsSaga() {<font></font>
  try {<font></font>
    yield put(fetchPosts.request());<font></font>
    const { data } = yield call(GET, "/api/posts", JSON_OPTS);<font></font>
    yield put(fetchPosts.success(data));<font></font>
  } catch (error) {<font></font>
    if (error.response) {<font></font>
      const { status, data } = error.response;<font></font>
      yield put(fetchPosts.failure({ status, data }));<font></font>
    } else {<font></font>
      yield put(fetchPosts.failure(error.message));<font></font>
    }<font></font>
  } finally {<font></font>
    yield put(fetchPosts.fulfill());<font></font>
  }<font></font>
}<font></font>
<font></font>
export function* fetchPostsRequestSaga() {<font></font>
  yield takeLatest(fetchPosts.TRIGGER, fetchPostsSaga);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，可以使用</font></font><a href="https://reactjs.org/docs/hooks-intro.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Hooks</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（从React 16.8开始）</font><font style="vertical-align: inherit;">实现此模式</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Tony</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为最流行的答案实际上并不能解决这个问题。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面的所有示例基本上都执行相同的操作，并且遵循“无预绑定”概念。</font></font></p>

<pre><code>// option 1<font></font>
const mapDispatchToProps = (dispatch) =&gt; ({<font></font>
  action: () =&gt; dispatch(action())<font></font>
})<font></font>
<font></font>
<font></font>
// option 2<font></font>
const mapDispatchToProps = (dispatch) =&gt; ({<font></font>
  action: bindActionCreators(action, dispatch)<font></font>
})<font></font>
<font></font>
<font></font>
// option 3<font></font>
const mapDispatchToProps = {<font></font>
  action: action<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Option </font></font><code>#3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是option的简写</font></font><code>#1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，所以真正的问题是为什么要使用option </font></font><code>#1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vs option </font></font><code>#2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我已经看到他们两个都在react-redux代码库中使用，并且我发现它相当混乱。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为混淆来自以下事实：</font><font style="vertical-align: inherit;">文档</font><font style="vertical-align: inherit;">中的所有</font></font><a href="https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-the-mapdispatchtoprops-function-with-bindactioncreators" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都</font></font><code>react-redux</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用，</font></font><code>bindActionCreators</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而</font></font><a href="https://redux.js.org/api/bindactioncreators/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bindActionCreators</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的文档   </font><font style="vertical-align: inherit;">  （如问题本身所引用）说不要将其与react-redux一起使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我猜答案是代码库中的一致性，但是我个人更喜欢</font><font style="vertical-align: inherit;">在需要时</font><font style="vertical-align: inherit;">在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分派中</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显式地包装动作</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
