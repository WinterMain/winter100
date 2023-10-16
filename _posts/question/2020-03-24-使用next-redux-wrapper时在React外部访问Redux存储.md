---
layout: question
title:  使用next-redux-wrapper时在React外部访问Redux存储
date:   2020-03-24T02:08:30.000Z
description: 我有一个NextJS React应用程序，它使用next-react-wrapper（基本上是HOC）_app.tsx像这样：_app.tsx.....
img: 
author: 西里神奇
category: question
answer: 2
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个NextJS React应用程序，它使用next-react-wrapper（基本上是HOC）</font></font><code>_app.tsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">_app.tsx</font></font></strong></p>

<pre><code>...<font></font>
import withRedux from 'next-redux-wrapper';<font></font>
<font></font>
class Page extends App&lt;Props&gt; {<font></font>
  ...<font></font>
}<font></font>
<font></font>
export default withRedux(reduxStore)(Page);<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">商店</font></font></strong></p>

<pre><code>import { applyMiddleware, createStore } from 'redux';<font></font>
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';<font></font>
<font></font>
import rootReducer from './reducer';<font></font>
<font></font>
export default (<font></font>
  initialState: any = undefined,<font></font>
) =&gt; createStore(<font></font>
  rootReducer,<font></font>
  initialState,<font></font>
  composeWithDevTools(applyMiddleware()),<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在努力研究如何在React外部访问商店，例如在一个简单的辅助函数中。</font><font style="vertical-align: inherit;">我的</font></font><code>store.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件导出了</font></font><code>makeStore</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">next-redux-wrapper HOC所需</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">功能（包括初始状态）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以访问React组件中的商店，并每次将其作为参数传递给我的辅助函数，但这似乎很麻烦。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以从非React helper功能模块直接访问商店？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3213篇《使用next-redux-wrapper时在React外部访问Redux存储》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在任何需要的地方导入商店模块，并直接访问商店功能，例如</font></font><code>store.getState()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，您需要订阅存储，以便在状态发生任何变化时得到通知。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以创建高阶函数以将任何其他函数包装在store中。</font><font style="vertical-align: inherit;">这是将store作为</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数</font><font style="vertical-align: inherit;">传递</font><font style="vertical-align: inherit;">给任何其他函数的</font><font style="vertical-align: inherit;">简单示例</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>function withReduxFunction(store) {<font></font>
    return function (connectedFunction) {<font></font>
        return function (...args) {<font></font>
            connectedFunction.call(store, ...args);<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和用法。</font><font style="vertical-align: inherit;">例如，我们要为此功能提供存储</font></font></p>

<pre><code>function doSomthingWothStore(arg1, arg2) {<font></font>
    console.log(this);   // This will be store<font></font>
    console.log("arg1: " + arg1 + " arg2 " + arg2);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做</font></font></p>

<pre><code>const funcWithStore = withReduxFunction(store)(doSomthingWothStore);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在您可以致电</font></font><code>funcWithStore</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等于商店。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用高阶函数使其适合您（例如，将存储作为第一个参数传递，依此类推）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以查看一下</font></font><code>useDispatch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>useSelector</code> <a href="https://react-redux.js.org/next/api/hooks" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从react-redux上钩</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它们还应具有任何功能。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
