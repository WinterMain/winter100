---
layout: question
title:  NextJS Redux，Thunk和getInitialProps-如何实现
date:   2020-03-23T02:54:58.000Z
description: 我想nextjs在新项目中使用redux和thunk。我想知道如何正确实现所有程序包。在我之前的项目页面中，HOC组件如下：import {con...
img: 
author: 村村
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想</font></font><code>nextjs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在新项目中使用</font></font><code>redux</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>thunk</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我想知道如何正确实现所有程序包。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我之前的项目页面中，</font></font><code>HOC</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件如下：</font></font></p>

<pre><code>import {connect} from 'react-redux';<font></font>
import Page from './about';<font></font>
import {fetchUsers} from '../../actions/user';<font></font>
<font></font>
const mapStateToProps = (state) =&gt; {<font></font>
    const {users} = state;<font></font>
    return users;<font></font>
};<font></font>
<font></font>
const mapDispatchToProps = (dispatch) =&gt; {<font></font>
    return {<font></font>
        fetchUsers: () =&gt; dispatch(fetchUsers())<font></font>
    };<font></font>
};<font></font>
<font></font>
export default connect(mapStateToProps, mapDispatchToProps)(Page);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及获取我在其中实现的用户的方法 </font></font><code>componentDidMount</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何实现相同的逻辑</font></font><code>nexjs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我该怎么办 </font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已实现商店（基于_app.js中的next-redux-wrapper）</font></font></li>
<li><font style="vertical-align: inherit;"></font><code>HOC</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>mapStateToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和
 </font><font style="vertical-align: inherit;">创建的</font><font style="vertical-align: inherit;">组件（如下所示）</font></font><code>mapDispatchToProps</code></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，我正在考虑在某种程度上使用某种</font></font><code>this.props.fetchUsers</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-文档说该方法应该用于在渲染站点之前获取数据。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请帮助我正确</font></font><code>redux</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实施</font></font><code>nextjs</code></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2700篇《NextJS Redux，Thunk和getInitialProps-如何实现》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙神奇</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以按照以下</font></font><a href="https://github.com/zeit/next.js/tree/canary/examples/with-redux-wrapper" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例进行操作</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
，正确的方法是将存储传递到</font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上下文和</font></font><code>App</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件，以便将其传递到</font></font><code>Provider</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能访问到组件的情况下，这是无法访问的，所以你不能打电话</font></font><code>this.props.fetchUsers</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是，因为你是路过商店的情况下，你可以做</font></font><code>store.dispatch(fetchUsers())</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和删除调度</font></font><code>mapDispatchToProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，我在中调度动作</font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后将状态映射到中的道具</font></font><code>connect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
