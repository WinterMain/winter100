---
layout: question
title:  如何在React Redux中访问存储状态？
date:   2020-03-14T10:19:17.000Z
description: 我只是做一个简单的应用程序来学习与redux异步。我已经使所有工作正常进行，现在我只想在网页上显示实际状态。现在，我实际上如何在render方法中访问商店...
img: 
author: ItachiMandy
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是做一个简单的应用程序来学习与redux异步。</font><font style="vertical-align: inherit;">我已经使所有工作正常进行，现在我只想在网页上显示实际状态。</font><font style="vertical-align: inherit;">现在，我实际上如何在render方法中访问商店的状态？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的代码（所有内容都在一页中，因为我只是在学习）：</font></font></p>

<pre><code>const initialState = {<font></font>
        fetching: false,<font></font>
        fetched: false,<font></font>
        items: [],<font></font>
        error: null<font></font>
    }<font></font>
<font></font>
const reducer = (state=initialState, action) =&gt; {<font></font>
    switch (action.type) {<font></font>
        case "REQUEST_PENDING": {<font></font>
            return {...state, fetching: true};<font></font>
        }<font></font>
        case "REQUEST_FULFILLED": {<font></font>
            return {<font></font>
                ...state,<font></font>
                fetching: false,<font></font>
                fetched: true,<font></font>
                items: action.payload<font></font>
            }<font></font>
        }<font></font>
        case "REQUEST_REJECTED": {<font></font>
            return {...state, fetching: false, error: action.payload}   <font></font>
        }<font></font>
        default: <font></font>
            return state;<font></font>
    }<font></font>
};<font></font>
<font></font>
const middleware = applyMiddleware(promise(), thunk, logger());<font></font>
const store = createStore(reducer, middleware);<font></font>
<font></font>
store.dispatch({<font></font>
    type: "REQUEST",<font></font>
    payload: fetch('http://localhost:8000/list').then((res)=&gt;res.json())<font></font>
});<font></font>
<font></font>
store.dispatch({<font></font>
    type: "REQUEST",<font></font>
    payload: fetch('http://localhost:8000/list').then((res)=&gt;res.json())<font></font>
});<font></font>
<font></font>
render(<font></font>
    &lt;Provider store={store}&gt;<font></font>
        &lt;div&gt;<font></font>
            { this.props.items.map((item) =&gt; &lt;p&gt; {item.title} &lt;/p&gt; )}<font></font>
        &lt;/div&gt;<font></font>
    &lt;/Provider&gt;,<font></font>
    document.getElementById('app')<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，在状态的render方法中，我想列出</font></font><code>item.title</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">商店中的</font><font style="vertical-align: inherit;">所有内容</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green前端</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要使用</font></font><a href="http://redux.js.org/docs/api/Store.html#getState" rel="noreferrer"><code>Store.getState()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取商店的当前状态。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font></font><code>getState()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">观看</font></font><a href="https://egghead.io/lessons/javascript-redux-store-methods-getstate-dispatch-and-subscribe?course=getting-started-with-redux" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">短片的</font><font style="vertical-align: inherit;">更多信息</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋猴子猪猪</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>connect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从中</font><font style="vertical-align: inherit;">导入</font></font><code>react-redux</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使用它来将组件与状态连接</font></font><code>connect(mapStates,mapDispatch)(component)</code></p>

<pre><code>import React from "react";<font></font>
import { connect } from "react-redux";<font></font>
<font></font>
<font></font>
const MyComponent = (props) =&gt; {<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        &lt;h1&gt;{props.title}&lt;/h1&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
</code></pre>



<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，您需要将状态映射到道具以使用 </font></font><code>this.props</code> </p>

<pre><code>const mapStateToProps = state =&gt; {<font></font>
  return {<font></font>
    title: state.title<font></font>
  };<font></font>
};<font></font>
export default connect(mapStateToProps)(MyComponent);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只能通过以下方式访问您映射的州  </font></font><code>props</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看看这个答案：</font><a href="https://stackoverflow.com/a/36214059/4040563"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://stackoverflow.com/a/36214059/4040563"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//stackoverflow.com/a/36214059/4040563</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进一步阅读：</font><a href="https://medium.com/@atomarranger/redux-mapstatetoprops-and-mapdispatchtoprops-shorthand-67d6cd78f132" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://medium.com/@atomarranger/redux-mapstatetoprops-and-mapdispatchtoprops-shorthand-67d6cd78f132" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//medium.com/@atomarranger/redux-mapstatetoprops-and-mapdispatchtoprops-shorthand-67d6cd78f132</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
