---
layout: question
title:  在获取数据时如何在React Redux应用程序中显示加载指示器？\[关闭\]
date:   2020-03-12T07:07:04.000Z
description:                                                                          ...
img: 
author: TomAL
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已关闭</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这个问题需要更加</font></font><a href="/help/closed-questions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">集中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它当前不接受答案。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                                <hr class="my12 outline-none baw0 bb bc-powder-2">
                <div class="grid fw-nowrap fc-black-600">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLightbulb" width="18" height="18" viewBox="0 0 18 18"><path d="M9.5.5a.5.5 0 0 0-1 0v.25a.5.5 0 0 0 1 0V.5zm5.6 2.1a.5.5 0 0 0-.7-.7l-.25.25a.5.5 0 0 0 .7.7l.25-.25zM1 7.5c0-.28.22-.5.5-.5H2a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5zm14.5 0c0-.28.22-.5.5-.5h.5a.5.5 0 0 1 0 1H16a.5.5 0 0 1-.5-.5zM2.9 1.9c.2-.2.5-.2.7 0l.25.25a.5.5 0 1 1-.7.7L2.9 2.6a.5.5 0 0 1 0-.7z" fill-opacity=".4"></path><path opacity=".4" d="M7 16h4v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1z" fill="#3F3F3F"></path><path d="M15 8a6 6 0 0 1-3.5 5.46V14a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.54A6 6 0 1 1 15 8zm-4.15-3.85a.5.5 0 0 0-.7.7l2 2a.5.5 0 0 0 .7-.7l-2-2z" fill="#FFC166"></path></svg>
                        </div>
                    <div class="grid--cell lh-md">
                        <p class="mb0">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想改善这个问题吗？</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新问题，使其仅通过</font></font><a href="/posts/35456935/edit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑此帖子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来关注一个问题</font><font style="vertical-align: inherit;">。
                        </font></font></p>
                        <p class="mb0 mt6"><font style="vertical-align: inherit;"></font><span title="2017-08-14 14：14：30Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></p>
                                                                                            </div>
                </div>
        </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是React / Redux的新手。</font><font style="vertical-align: inherit;">我在Redux应用程序中使用fetch api中间件来处理API。</font><font style="vertical-align: inherit;">它是（</font></font><a href="https://github.com/agraboso/redux-api-middleware" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">redux-api-middleware</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">我认为这是处理异步api动作的好方法。</font><font style="vertical-align: inherit;">但是我发现有些情况我自己无法解决。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如首页（</font></font><a href="https://github.com/agraboso/redux-api-middleware#lifecycle" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lifecycle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）所述，获取API的生命周期始于调度CALL_API操作，然后终止于调度FSA操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我的第一种情况是在获取API时显示/隐藏预加载器。</font><font style="vertical-align: inherit;">中间件将在开始时调度FSA动作，在结束时调度FSA动作。</font><font style="vertical-align: inherit;">这两个动作均由精简器接收，精简器仅应执行一些正常的数据处理。</font><font style="vertical-align: inherit;">没有UI操作，没有更多操作。</font><font style="vertical-align: inherit;">也许我应该将处理状态保存为状态，然后在商店更新时呈现它们。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是该怎么做呢？</font><font style="vertical-align: inherit;">一个React组件流遍及整个页面吗？</font><font style="vertical-align: inherit;">通过其他操作更新商店会发生什么？</font><font style="vertical-align: inherit;">我的意思是，他们更像是事件而不是状态！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更糟糕的是，当我必须在Redux / React应用程序中使用本机确认对话框或警报对话框时，该怎么办？</font><font style="vertical-align: inherit;">应该将它们放在哪里，采取什么行动或减少压力？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的祝愿！</font><font style="vertical-align: inherit;">希望得到答复。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenA</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在保存以下网址：</font></font></p>

<pre><code>isFetching: {<font></font>
    /api/posts/1: true,<font></font>
    api/posts/3: false,<font></font>
    api/search?q=322: true,<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我有一个记忆的选择器（通过重新选择）。</font></font></p>

<pre><code>const getIsFetching = createSelector(<font></font>
    state =&gt; state.isFetching,<font></font>
    items =&gt; items =&gt; Object.keys(items).filter(item =&gt; items[item] === true).length &gt; 0 ? true : false<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了使POST时的网址唯一，我将一些变量作为查询传递。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在要显示指标的地方，我只需使用getFetchCount变量 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是唯一一个认为加载指标不属于Redux商店的人吗？</font><font style="vertical-align: inherit;">我的意思是，我不认为这本身就是应用程序状态的一部分。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我使用Angular2，我要做的是我有一个“加载”服务，该服务通过RxJS BehaviourSubjects公开了不同的加载指示符。我猜想机制是相同的，只是我不将信息存储在Redux中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">LoadingService的用户只需订阅他们想收听的事件。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当需要更改时，我的Redux操作创建者都会调用LoadingService。</font><font style="vertical-align: inherit;">UX组件订阅公开的可观察对象...</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很好的答案Dan Abramov！</font><font style="vertical-align: inherit;">只是想补充一点，就是我在一个应用程序中所做的工作或多或少完全相同（将isFetching作为布尔值保存），最终不得不将其设置为整数（最终以未完成请求的数量读取）以支持多个同时要求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与布尔值：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请求1开始-&gt;旋转器打开-&gt;请求2开始-&gt;请求1结束-&gt;关闭旋转器-&gt;请求2结束</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用整数：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请求1开始-&gt;旋转器打开-&gt;请求2开始-&gt;请求1结束-&gt;请求2结束-&gt;旋转器关闭</font></font></p>

<pre><code>case REQUEST_POSTS:<font></font>
  return Object.assign({}, state, {<font></font>
    isFetching: state.isFetching + 1,<font></font>
    didInvalidate: false<font></font>
  })<font></font>
case RECEIVE_POSTS:<font></font>
  return Object.assign({}, state, {<font></font>
    isFetching: state.isFetching - 1,<font></font>
    didInvalidate: false,<font></font>
    items: action.posts,<font></font>
    lastUpdated: action.receivedAt<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想加些东西。</font><font style="vertical-align: inherit;">真实示例使用</font></font><code>isFetching</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">商店中</font><font style="vertical-align: inherit;">的字段</font><font style="vertical-align: inherit;">来表示何时</font><font style="vertical-align: inherit;">提取项目</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">集合</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">任何集合都归纳为化</font></font><code>pagination</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简器，可将其连接到组件以跟踪状态并显示集合是否正在加载。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">碰巧我想获取不适合分页模式的特定实体的详细信息。</font><font style="vertical-align: inherit;">我想有一个状态来表示是否正在从服务器中获取详细信息，但是我也不想为此而使用化简器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了解决这个问题，我添加了另一个通用的reducer </font></font><code>fetching</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它的工作方式与分页减速器类似，它的职责只是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">观察</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一组动作并成对产生新状态</font></font><code>[entity, isFetching]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这就使</font></font><code>connect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">reducer可以使用任何组件，并知道应用程序当前是否不仅在为集合而且为特定实体获取数据。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro梅</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>connect()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Redux或低级</font></font><code>store.subscribe()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">将更改侦听器添加到您的商店</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您应该在商店中有加载指示器，商店更改处理程序可以使用该指示器检查并更新组件状态。</font><font style="vertical-align: inherit;">然后，如果需要，组件将根据状态呈现预加载器。</font></font></p>

<p><code>alert</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>confirm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不应该是一个问题。</font><font style="vertical-align: inherit;">他们处于阻止状态，警报甚至不接受用户的任何输入。</font><font style="vertical-align: inherit;">使用</font></font><code>confirm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果用户的选择会影响组件的呈现，则可以根据用户单击的内容来设置状态。</font><font style="vertical-align: inherit;">如果没有，您可以将选择存储为组件成员变量，以备后用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimProL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p>I mean they are more like events than state!</p>
</blockquote>

<p>I would not say so. I think loading indicators are a great case of UI that is easily described as a function of state: in this case, of a boolean variable. While <a href="https://stackoverflow.com/a/35457449/458193">this answer</a> is correct, I would like to provide some code to go along with it.</p>

<p>In the <a href="https://github.com/reactjs/redux/tree/master/examples/async" rel="noreferrer"><code>async</code> example in Redux repo</a>, reducer <a href="https://github.com/reactjs/redux/blob/fa96297e8980349678878027a37fa2612df438b5/examples/async/reducers/index.js#L26-L37" rel="noreferrer">updates a field called <code>isFetching</code></a>:</p>

<pre><code>case REQUEST_POSTS:<font></font>
  return Object.assign({}, state, {<font></font>
    isFetching: true,<font></font>
    didInvalidate: false<font></font>
  })<font></font>
case RECEIVE_POSTS:<font></font>
  return Object.assign({}, state, {<font></font>
    isFetching: false,<font></font>
    didInvalidate: false,<font></font>
    items: action.posts,<font></font>
    lastUpdated: action.receivedAt<font></font>
</code></pre>

<p>The component uses <code>connect()</code> from React Redux to subscribe to the store’s state and <a href="https://github.com/reactjs/redux/blob/fa96297e8980349678878027a37fa2612df438b5/examples/async/containers/App.js#L93" rel="noreferrer">returns <code>isFetching</code> as part of the <code>mapStateToProps()</code> return value</a> so it is available in the connected component’s props:</p>

<pre><code>function mapStateToProps(state) {<font></font>
  const { selectedReddit, postsByReddit } = state<font></font>
  const {<font></font>
    isFetching,<font></font>
    lastUpdated,<font></font>
    items: posts<font></font>
  } = postsByReddit[selectedReddit] || {<font></font>
    isFetching: true,<font></font>
    items: []<font></font>
  }<font></font>
<font></font>
  return {<font></font>
    selectedReddit,<font></font>
    posts,<font></font>
    isFetching,<font></font>
    lastUpdated<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p>Finally, the component <a href="https://github.com/reactjs/redux/blob/fa96297e8980349678878027a37fa2612df438b5/examples/async/containers/App.js#L61" rel="noreferrer">uses <code>isFetching</code> prop in the <code>render()</code> function</a> to render a “Loading...” label (which could conceivably be a spinner instead):</p>

<pre><code>{isEmpty<font></font>
  ? (isFetching ? &lt;h2&gt;Loading...&lt;/h2&gt; : &lt;h2&gt;Empty.&lt;/h2&gt;)<font></font>
  : &lt;div style={{ opacity: isFetching ? 0.5 : 1 }}&gt;<font></font>
      &lt;Posts posts={posts} /&gt;<font></font>
    &lt;/div&gt;<font></font>
}<font></font>
</code></pre>

<blockquote>
  <p>Even a worse case, what should I do when I have to use the native confirm dialog or alert dialog in redux/react apps? Where should they be put, actions or reducers?</p>
</blockquote>

<p>Any side effects (and showing a dialog is most certainly a side effect) do not belong in reducers. Think of reducers as passive “builders of state”. They don’t really “do” things.</p>

<p>If you wish to show an alert, either do this from a component before dispatching an action, or do this from an action creator. By the time an action is dispatched, it is too late to perform side effects in response to it.</p>

<p>For every rule, there is an exception. Sometimes your side effect logic is so complicated you actually <em>want</em> to couple them either to specific action types or to specific reducers. In this case check out advanced projects like <a href="https://github.com/yelouafi/redux-saga" rel="noreferrer">Redux Saga</a> and <a href="https://github.com/raisemarketplace/redux-loop" rel="noreferrer">Redux Loop</a>. Only do this when you are comfortable with vanilla Redux and have a real problem of scattered side effects you’d like to make more manageable.</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
