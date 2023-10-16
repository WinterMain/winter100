---
layout: question
title:  在react组件之外访问redux存储的最佳方法是什么？
date:   2020-03-11T02:59:45.000Z
description: \`connect当我尝试在react组件中访问商店时，它的工作效果很好。但是我应该如何通过其他一些代码来访问它。例如：假设我想使用授权令牌创建可以在我的应...
img: 
author: 宝儿理查德
category: question
answer: 3
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><code>@connect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我尝试在react组件中访问商店时，它的工作效果很好。</font><font style="vertical-align: inherit;">但是我应该如何通过其他一些代码来访问它。</font><font style="vertical-align: inherit;">例如：假设我想使用授权令牌创建可以在我的应用程序中全局使用的axios实例，那么实现这一目标的最佳方法是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的 </font></font><code>api.js</code> </p>

<pre><code>// tooling modules<font></font>
import axios from 'axios'<font></font>
<font></font>
// configuration<font></font>
const api = axios.create()<font></font>
api.defaults.baseURL = 'http://localhost:5001/api/v1'<font></font>
api.defaults.headers.common['Authorization'] = 'AUTH_TOKEN' // need the token here<font></font>
api.defaults.headers.post['Content-Type'] = 'application/json'<font></font>
<font></font>
export default api<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我想从我的商店访问一个数据点，这是如果我尝试使用以下方法在react组件中获取数据点的情况： </font></font><code>@connect</code></p>

<pre><code>// connect to store<font></font>
@connect((store) =&gt; {<font></font>
  return {<font></font>
    auth: store.auth<font></font>
  }<font></font>
})<font></font>
export default class App extends Component {<font></font>
  componentWillMount() {<font></font>
    // this is how I would get it in my react component<font></font>
    console.log(this.props.auth.tokens.authorization_token) <font></font>
  }<font></font>
  render() {...}<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有任何见解或工作流程模式吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第573篇《在react组件之外访问redux存储的最佳方法是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪路易</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用钩子做。</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了类似的问题，但是我在使用带有钩子的react-redux。</font><font style="vertical-align: inherit;">我不想用很多专门用于从商店检索信息/向商店发送信息的代码来充实我的界面代码（即，对组件进行反应）。</font><font style="vertical-align: inherit;">相反，我希望使用具有通用名称的函数来检索和更新数据。</font><font style="vertical-align: inherit;">我的路径是将应用程序的</font></font></p>

<pre><code>const store = createSore(<font></font>
   allReducers,<font></font>
   window.__REDUX_DEVTOOLS_EXTENSION__ &amp;&amp; window.__REDUX_DEVTOOLS_EXTENSION__()<font></font>
 );<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">放入名为的模块</font></font><code>store.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>export</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在store.js中添加常规的react-redux导入，然后添加。</font><font style="vertical-align: inherit;">文件。</font><font style="vertical-align: inherit;">然后，我</font></font><code>index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在应用程序级别导入，然后使用通常</font></font><code>import {store} from "./store.js"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的子组件</font><font style="vertical-align: inherit;">导入index.js。</font><font style="vertical-align: inherit;">然后，子组件使用</font></font><code>useSelector()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>useDispatch()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">钩子</font><font style="vertical-align: inherit;">访问商店</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了使用非组件前端代码访问商店，我使用了类似的导入（即</font></font><code>import {store} from "../../store.js"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），然后使用</font></font><code>store.getState()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>store.dispatch({*action goes here*})</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理了商店的检索和更新（或向商店发送操作）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云前端西门</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好像</font></font><code>Middleware</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是要走的路。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
请参阅</font></font><a href="http://redux.js.org/docs/advanced/Middleware.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">官方文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及</font></font><a href="https://github.com/reactjs/react-redux/issues/361" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其发行版</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上的</font><a href="https://github.com/reactjs/react-redux/issues/361" rel="noreferrer"><font style="vertical-align: inherit;">此问题</font></a></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim理查德泡芙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>store</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><code>createStore</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数</font><font style="vertical-align: inherit;">返回的对象</font><font style="vertical-align: inherit;">（应用初始化中的代码中应该已经使用了该</font><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">比起您可以使用此对象来获取</font></font><code>store.getState()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法的</font><font style="vertical-align: inherit;">当前状态</font><font style="vertical-align: inherit;">或</font></font><code>store.subscribe(listener)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">订阅商店更新。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您甚至可以将该对象保存到</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，以在需要时从应用程序的任何部分访问它（</font></font><code>window.store = store</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以在</font></font><a href="http://redux.js.org/docs/api/Store.html#getState" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到更多信息</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
