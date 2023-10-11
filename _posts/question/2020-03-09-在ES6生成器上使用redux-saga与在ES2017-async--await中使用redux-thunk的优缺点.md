---
layout: question
title:  在ES6生成器上使用redux-saga与在ES2017 async / await中使用redux-thunk的优缺点
date:   2020-03-09T15:24:15.000Z
description: 现在有很多关于redux镇上最新的孩子redux-saga / redux-saga的讨论。它使用生成器功能来侦听/调度动作。在开始思考之前，我想知道...
img: 
author: JinJin神奇宝儿
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在有很多关于redux镇上最新的孩子</font></font><a href="https://github.com/redux-saga/redux-saga" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">redux-saga / redux-saga的讨论</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它使用生成器功能来侦听/调度动作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在开始思考之前，我想知道使用优缺点的方法，</font></font><code>redux-saga</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是下面我在</font></font><code>redux-thunk</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">异步/等待中</font><font style="vertical-align: inherit;">使用的方法</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件可能看起来像这样，像往常一样调度动作。</font></font></p>

<pre><code>import { login } from 'redux/auth';<font></font>
<font></font>
class LoginForm extends Component {<font></font>
<font></font>
  onClick(e) {<font></font>
    e.preventDefault();<font></font>
    const { user, pass } = this.refs;<font></font>
    this.props.dispatch(login(user.value, pass.value));<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return (&lt;div&gt;<font></font>
        &lt;input type="text" ref="user" /&gt;<font></font>
        &lt;input type="password" ref="pass" /&gt;<font></font>
        &lt;button onClick={::this.onClick}&gt;Sign In&lt;/button&gt;<font></font>
    &lt;/div&gt;);<font></font>
  } <font></font>
}<font></font>
<font></font>
export default connect((state) =&gt; ({}))(LoginForm);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我的动作如下所示：</font></font></p>

<pre><code>// auth.js<font></font>
<font></font>
import request from 'axios';<font></font>
import { loadUserData } from './user';<font></font>
<font></font>
// define constants<font></font>
// define initial state<font></font>
// export default reducer<font></font>
<font></font>
export const login = (user, pass) =&gt; async (dispatch) =&gt; {<font></font>
    try {<font></font>
        dispatch({ type: LOGIN_REQUEST });<font></font>
        let { data } = await request.post('/login', { user, pass });<font></font>
        await dispatch(loadUserData(data.uid));<font></font>
        dispatch({ type: LOGIN_SUCCESS, data });<font></font>
    } catch(error) {<font></font>
        dispatch({ type: LOGIN_ERROR, error });<font></font>
    }<font></font>
}<font></font>
<font></font>
// more actions...<font></font>
</code></pre>

<hr>

<pre><code>// user.js<font></font>
<font></font>
import request from 'axios';<font></font>
<font></font>
// define constants<font></font>
// define initial state<font></font>
// export default reducer<font></font>
<font></font>
export const loadUserData = (uid) =&gt; async (dispatch) =&gt; {<font></font>
    try {<font></font>
        dispatch({ type: USERDATA_REQUEST });<font></font>
        let { data } = await request.get(`/users/${uid}`);<font></font>
        dispatch({ type: USERDATA_SUCCESS, data });<font></font>
    } catch(error) {<font></font>
        dispatch({ type: USERDATA_ERROR, error });<font></font>
    }<font></font>
}<font></font>
<font></font>
// more actions...<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第355篇《在ES6生成器上使用redux-saga与在ES2017 async / await中使用redux-thunk的优缺点》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种更简单的方法是使用</font></font><a href="https://www.npmjs.com/package/redux-auto" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">redux-auto</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从文件</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">redux-auto只是通过允许您创建一个返回诺言的“动作”函数来解决此异步问题。</font><font style="vertical-align: inherit;">伴随您的“默认”功能动作逻辑。</font></font></p>
</blockquote>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需其他Redux异步中间件。</font><font style="vertical-align: inherit;">例如thunk，promise-middleware，saga</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">轻松地让您将承诺传递给redux </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并为您进行管理</font></font></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使您可以将外部服务呼叫与它们将转换的位置共存</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命名文件“ init.js”将在应用启动时调用一次。</font><font style="vertical-align: inherit;">这对于在启动时从服务器加载数据很有用</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个想法是将每个</font></font><a href="https://github.com/codemeasandwich/redux-auto#action-files" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">动作都放在一个特定的文件中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">将服务器调用与reducer函数一起定位在文件中，以“挂起”，“完成”和“拒绝”。</font><font style="vertical-align: inherit;">这使得兑现承诺非常容易。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它还会自动将</font></font><a href="https://github.com/codemeasandwich/redux-auto#handling-async-actions-in-your-ui" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">助手对象（称为“异步”）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附加</font><font style="vertical-align: inherit;">到状态原型，从而使您可以在UI中跟踪请求的转换。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里阿飞</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快速说明。</font><font style="vertical-align: inherit;">生成器是可取消的，异步/等待-不是。</font><font style="vertical-align: inherit;">因此，对于这个问题的一个例子，它实际上没有意义。</font><font style="vertical-align: inherit;">但是对于更复杂的流程，有时没有比使用生成器更好的解决方案了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，另一个想法可能是使用带有redux-thunk的发电机，但是对我来说，这似乎是在尝试发明具有方形车轮的自行车。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，发电机更容易测试。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenSamA</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是一些个人经验：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在编码风格和可读性方面，过去使用redux-saga的最重要优势之一是避免在redux-thunk中发生回调地狱-不再需要使用那么大量的嵌套然后再捕获。</font><font style="vertical-align: inherit;">但是现在随着async / await thunk的流行，人们也可以在使用redux-thunk时以同步方式编写异步代码，这可能被认为是re​​dux-think的一种改进。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用redux-saga时，尤其是在Typescript中，可能需要编写更多样板代码。</font><font style="vertical-align: inherit;">例如，如果要实现获取异步功能，则可以通过一个FETCH动作直接在action.js中的一个thunk单元中执行数据和错误处理。</font><font style="vertical-align: inherit;">但是在redux-saga中，可能需要定义FETCH_START，FETCH_SUCCESS和FETCH_FAILURE动作及其所有相关的类型检查，因为redux-saga的功能之一就是使用这种丰富的“令牌”机制来创建效果和指令redux存储，方便测试。</font><font style="vertical-align: inherit;">当然，无需使用这些操作就可以编写传奇，但这会使它类似于重击。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在文件结构方面，redux-saga在许多情况下似乎更为明确。</font><font style="vertical-align: inherit;">可以在每个sagas.ts中轻松找到与异步相关的代码，但是在redux-thunk中，需要在操作中查看它。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">易于测试可能是redux-saga中的另一个加权功能。</font><font style="vertical-align: inherit;">这确实很方便。</font><font style="vertical-align: inherit;">但是需要澄清的一件事是redux-saga“调用”测试不会在测试中执行实际的API调用，因此需要为在API调用之后可以使用它的步骤指定示例结果。</font><font style="vertical-align: inherit;">因此，在编写redux-saga之前，最好先详细计划一个saga及其相应的sagas.spec.ts。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Redux-saga还提供了许多高级功能，例如并行运行任务，并发助手（例如takeLatest / takeEvery，fork / spawn），它们的功能远比thunk强大。</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总之，个人而言，我想说：在许多正常情况下和中小型应用程序中，请使用异步/等待风格的redux-thunk。</font><font style="vertical-align: inherit;">这将为您节省许多样板代码/操作/ typedef，并且您无需切换许多不同的sagas.ts并维护特定的sagas树。</font><font style="vertical-align: inherit;">但是，如果您开发的大型应用程序具有复杂的异步逻辑，并且需要并发/并行模式等功能，或者对测试和维护的需求很高（尤其是在测试驱动的开发中），那么redux-sagas可能会挽救您的生命。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，redux-saga并不比redux本身更困难和复杂，并且它没有所谓的陡峭学习曲线，因为它具有有限的核心概念和API。</font><font style="vertical-align: inherit;">花一点时间学习redux-saga可能会在将来的一天让自己受益。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据我的经验，Sagas回顾了几个不同的大型React / Redux项目，为开发人员提供了一种结构化的代码编写方式，该方法更容易测试，更难出错。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，开始时有点麻烦，但是大多数开发人员在一天内就对它有了足够的了解。</font><font style="vertical-align: inherit;">我总是告诉人们不要担心</font></font><code>yield</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开始时会</font><font style="vertical-align: inherit;">做些什么</font><font style="vertical-align: inherit;">，一旦您编写了一些测试，它将来找您。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经看到了几个项目，其中将重音视为来自MVC patten的控制器，并且很快就变得混乱不堪。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的建议是在需要A触发与单个事件有关的B类型内容的地方使用Sagas。</font><font style="vertical-align: inherit;">对于可能涉及许多操作的任何事情，我发现编写客户中间件并使用FSA操作的meta属性来触发它更为简单。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了库作者的相当详尽的答案之外，我还将添加在生产系统中使用传奇的经验。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">专业版（使用传奇）：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可测试性。</font><font style="vertical-align: inherit;">测试call的返回值很简单，因为call（）返回一个纯对象。</font><font style="vertical-align: inherit;">测试thunk通常需要您在测试中包括一个模拟存储。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">redux-saga附带了许多有用的关于任务的帮助器功能。</font><font style="vertical-align: inherit;">在我看来，saga的概念是为您的应用程序创建某种后台工作程序/线程，这是React Redux架构中缺少的部分（actionCreators和reducers必须是纯函数。）这引出了下一步。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sagas提供独立的场所来处理所有副作用。</font><font style="vertical-align: inherit;">根据我的经验，修改和管理通常比重击操作更容易。</font></font></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成器语法。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有很多概念需要学习。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">API稳定性。</font><font style="vertical-align: inherit;">似乎redux-saga仍在添加功能（例如Channels？），并且社区还不那么庞大。</font><font style="vertical-align: inherit;">如果库有朝一日进行非向后兼容更新，则存在问题。</font></font></p></li>
</ul></div>
        </div></div>
    {% endraw %}
  </div>
<div>
