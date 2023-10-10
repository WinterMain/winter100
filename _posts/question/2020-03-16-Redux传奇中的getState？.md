---
layout: question
title:  Redux传奇中的getState？
date:   2020-03-16T07:17:53.000Z
description: 我有一家商店，上面有物品清单。当我的应用程序首次加载时，我需要对项目进行反序列化，就像基于项目创建一些内存中对象一样。这些项目存储在我的redux存储中，...
img: 
author: 小卤蛋Tom
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一家商店，上面有物品清单。</font><font style="vertical-align: inherit;">当我的应用程序首次加载时，我需要对项目进行反序列化，就像基于项目创建一些内存中对象一样。</font><font style="vertical-align: inherit;">这些项目存储在我的redux存储中，并由处理</font></font><code>itemsReducer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用</font></font><a href="https://redux-saga.js.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">redux-saga</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理反序列化，这是副作用。</font><font style="vertical-align: inherit;">在首页加载时，我调度了一个操作：</font></font></p>

<pre><code>dispatch( deserializeItems() );
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的传奇故事设置简单：</font></font></p>

<pre><code>function* deserialize( action ) {<font></font>
    // How to getState here??<font></font>
    yield put({ type: 'DESERISLIZE_COMPLETE' });<font></font>
}<font></font>
<font></font>
function* mySaga() {<font></font>
    yield* takeEvery( 'DESERIALIZE', deserialize );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的反序列化传奇中，我要处理创建商品的内存版本的副作用，我需要从商店中读取现有数据。</font><font style="vertical-align: inherit;">我不确定在这里怎么做，或者这是否是我甚至应该尝试使用redux-saga的模式。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1786篇《Redux传奇中的getState？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚卡卡西</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在Saga无法处理代码流的情况下，如果我们在回调函数中使用Select效果将无济于事。</font><font style="vertical-align: inherit;">在这种情况下，只是通过</font></font><code>dispatch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>getState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根的传奇：</font></font></p>

<pre><code>store.runSaga(rootSaga, store.dispatch, store.getState)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将参数传递给子sagas</font></font></p>

<p><code>
export default function* root(dispatch, getState) {
  yield all([
    fork(loginFlow, dispatch, getState),
  ])
}
</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在观看方法</font></font></p>

<p><code>
export default function* watchSomething(dispatch, getState)
...
</code></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
