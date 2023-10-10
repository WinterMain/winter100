---
layout: question
title:  在React Redux中处理提取错误的最佳方法是什么？
date:   2020-03-12T07:43:36.000Z
description: 我有一个用于客户的减速器，另一个用于AppToolbar的减速器，还有一些其他的减速器...现在说我创建了一个删除客户端的提取操作，如果失败，我在Cl...
img: 
author: 
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个用于客户的减速器，另一个用于AppToolbar的减速器，还有一些其他的减速器...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在说我创建了一个删除客户端的提取操作，如果失败，我在Clients reducer中有代码，该代码应该做一些事情，但是我也想在AppToolbar中显示一些全局错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是客户端和AppToolbar减速器不共享状态的同一部分，并且我无法在减速器中创建新的动作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么我应该如何显示全局错误？</font><font style="vertical-align: inherit;">谢谢</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新1：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我忘了提到我使用</font></font><a href="https://github.com/este/este" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">este</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> devstack</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新2：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
我将Eric的答案标记为正确，但是我不得不说，我在este中使用的解决方案更像是Eric和Dan的答案的结合……您只需要找到最适合自己代码的方法即可。 。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1078篇《在React Redux中处理提取错误的最佳方法是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用axios HTTP客户端。</font><font style="vertical-align: inherit;">它已经实现了拦截器功能。</font><font style="vertical-align: inherit;">您可以先拦截请求或响应，然后再进行捕获或捕获。</font></font></p>

<p><a href="https://github.com/mzabriskie/axios#interceptors" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/mzabriskie/axios#interceptors</font></font></a></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>// Add a request interceptor<font></font>
axios.interceptors.request.use(function (config) {<font></font>
    // Do something before request is sent<font></font>
    return config;<font></font>
  }, function (error) {<font></font>
    // Do something with request error<font></font>
    return Promise.reject(error);<font></font>
  });<font></font>
<font></font>
// Add a response interceptor<font></font>
axios.interceptors.response.use(function (response) {<font></font>
    // Do something with response data<font></font>
    return response;<font></font>
  }, function (error) {<font></font>
    // Do something with response error<font></font>
    return Promise.reject(error);<font></font>
  });</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProJinJin</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><a href="https://stackoverflow.com/a/34403521/458193">Erik’s answer</a> is correct but I would like to add that you don’t have to fire separate actions for adding errors. An alternative approach is to have a reducer that handles <strong>any action with an <code>error</code> field</strong>. This is a matter of personal choice and convention.</p>

<p>For example, from <a href="https://github.com/reactjs/redux/blob/master/examples/real-world/src/reducers/index.js#L16-L27" rel="noreferrer">Redux <code>real-world</code> example</a> that has error handling:</p>

<pre><code>// Updates error message to notify about the failed fetches.<font></font>
function errorMessage(state = null, action) {<font></font>
  const { type, error } = action<font></font>
<font></font>
  if (type === ActionTypes.RESET_ERROR_MESSAGE) {<font></font>
    return null<font></font>
  } else if (error) {<font></font>
    return error<font></font>
  }<font></font>
<font></font>
  return state<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐小小猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我目前针对一些特定错误（用户输入验证）采用的方法是让我的子减速器引发异常，将其捕获到我的根减速器中，并将其附加到操作对象。</font><font style="vertical-align: inherit;">然后，我有一个redux-saga，它检查动作对象是否有错误，并在这种情况下用错误数据更新状态树。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以：</font></font></p>

<pre><code>function rootReducer(state, action) {<font></font>
  try {<font></font>
    // sub-reducer(s)<font></font>
    state = someOtherReducer(state,action);<font></font>
  } catch (e) {<font></font>
    action.error = e;<font></font>
  }<font></font>
  return state;<font></font>
}<font></font>
<font></font>
// and then in the saga, registered to take every action:<font></font>
function *errorHandler(action) {<font></font>
  if (action.error) {<font></font>
     yield put(errorActionCreator(error));<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后按照Erik的描述将错误添加到状态树中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我很少使用它，但是它使我不必重复合法化归约化器的逻辑（因此它可以保护自己免受无效状态的侵害）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我要做的是按效果将所有错误处理集中在效果中</font></font></p>

<pre><code>/**<font></font>
 * central error handling<font></font>
 */<font></font>
@Effect({dispatch: false})<font></font>
httpErrors$: Observable&lt;any&gt; = this.actions$<font></font>
    .ofType(<font></font>
        EHitCountsActions.HitCountsError<font></font>
    ).map(payload =&gt; payload)<font></font>
    .switchMap(error =&gt; {<font></font>
        return of(confirm(`There was an error accessing the server: ${error}`));<font></font>
    });<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
