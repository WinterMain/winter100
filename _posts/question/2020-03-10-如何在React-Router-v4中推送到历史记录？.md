---
layout: question
title:  如何在React Router v4中推送到历史记录？
date:   2020-03-10T01:27:03.000Z
description: 在当前版本的React Router（v3）中，我可以接受服务器响应并用于browserHistory.push转到相应的响应页面。但是，这在v4中不可用...
img: 
author: 阿飞Pro
category: question
answer: 5
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在当前版本的React Router（v3）中，我可以接受服务器响应并用于</font></font><code>browserHistory.push</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到相应的响应页面。</font><font style="vertical-align: inherit;">但是，这在v4中不可用，我不确定哪种适当的处理方式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此示例中，使用Redux，</font><font style="vertical-align: inherit;">当用户提交表单时</font><font style="vertical-align: inherit;">，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">components / app-product-form.js</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用</font></font><code>this.props.addProduct(props)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">服务器返回成功后，该用户将被带到“购物车”页面。</font></font></p>

<pre><code>// actions/index.js<font></font>
export function addProduct(props) {<font></font>
  return dispatch =&gt;<font></font>
    axios.post(`${ROOT_URL}/cart`, props, config)<font></font>
      .then(response =&gt; {<font></font>
        dispatch({ type: types.AUTH_USER });<font></font>
        localStorage.setItem('token', response.data.token);<font></font>
        browserHistory.push('/cart'); // no longer in React Router V4<font></font>
      });<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何从React Router v4的功能重定向到购物车页面？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第401篇《如何在React Router v4中推送到历史记录？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Sam斯丁</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，React路由器V4允许使用以下历史记录道具：</font></font></p>

<pre><code>this.props.history.push("/dummy",value)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，只要位置prop可用（</font></font><code>state:{value}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是组件状态），</font><font style="vertical-align: inherit;">就可以访问该值 
 </font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyNear乐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我能够通过使用来完成此操作</font></font><code>bind()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我想要单击一个按钮</font></font><code>index.jsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，将一些数据发布到服务器，评估响应，然后重定向到</font></font><code>success.jsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这就是我的解决方法...</font></font></p>

<p><code>index.jsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>import React, { Component } from "react"<font></font>
import { postData } from "../../scripts/request"<font></font>
<font></font>
class Main extends Component {<font></font>
    constructor(props) {<font></font>
        super(props)<font></font>
        this.handleClick = this.handleClick.bind(this)<font></font>
        this.postData = postData.bind(this)<font></font>
    }<font></font>
<font></font>
    handleClick() {<font></font>
        const data = {<font></font>
            "first_name": "Test",<font></font>
            "last_name": "Guy",<font></font>
            "email": "test@test.com"<font></font>
        }<font></font>
<font></font>
        this.postData("person", data)<font></font>
    }<font></font>
<font></font>
    render() {<font></font>
        return (<font></font>
            &lt;div className="Main"&gt;<font></font>
                &lt;button onClick={this.handleClick}&gt;Test Post&lt;/button&gt;<font></font>
            &lt;/div&gt;<font></font>
        )<font></font>
    }<font></font>
}<font></font>
<font></font>
export default Main<font></font>
</code></pre>

<p><code>request.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>import { post } from "./fetch"<font></font>
<font></font>
export const postData = function(url, data) {<font></font>
    // post is a fetch() in another script...<font></font>
    post(url, data)<font></font>
        .then((result) =&gt; {<font></font>
            if (result.status === "ok") {<font></font>
                this.props.history.push("/success")<font></font>
            }<font></font>
        })<font></font>
}<font></font>
</code></pre>

<p><code>success.jsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>import React from "react"<font></font>
<font></font>
const Success = () =&gt; {<font></font>
    return (<font></font>
        &lt;div className="Success"&gt;<font></font>
            Hey cool, got it.<font></font>
        &lt;/div&gt;<font></font>
    )<font></font>
}<font></font>
<font></font>
export default Success<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，通过绑定</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>postData</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">in </font></font><code>index.jsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我可以访问</font></font><code>this.props.history</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">in </font></font><code>request.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...然后可以在不同的组件中重用此函数，只需确保记得记得包含</font></font><code>this.postData = postData.bind(this)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在中</font></font><code>constructor()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry前端神无</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><code>this.context.history.push</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 不管用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我设法使推像这样工作：</font></font></p>

<pre><code>static contextTypes = {<font></font>
    router: PropTypes.object<font></font>
}<font></font>
<font></font>
handleSubmit(e) {<font></font>
    e.preventDefault();<font></font>
<font></font>
    if (this.props.auth.success) {<font></font>
        this.context.router.history.push("/some/Path")<font></font>
    }<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil西里斯丁</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="https://reacttraining.com/react-router/core/guides/redux-integration/deep-integration" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Router v4文档-Redux深度集成会话</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要深度集成以： </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“能够通过调度动作进行导航”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，他们建议此方法作为“深度集成”的替代方法：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“与其调度动作来导航，不如传递所提供的历史对象以将组件路由到您的动作并在那里进行导航。”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您可以使用withRouter高阶组件包装组件：</font></font></p>

<p><code>export default withRouter(connect(null, { actionCreatorName })(ReactComponent));</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将历史API传递给道具。</font><font style="vertical-align: inherit;">因此，您可以调用动作创建者，将历史作为参数进行传递。</font><font style="vertical-align: inherit;">例如，在您的ReactComponent内部：</font></font></p>

<pre><code>onClick={() =&gt; {<font></font>
  this.props.actionCreatorName(<font></font>
    this.props.history,<font></font>
    otherParams<font></font>
  );<font></font>
}}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，在您的actions / index.js内部：</font></font></p>

<pre><code>export function actionCreatorName(history, param) {<font></font>
  return dispatch =&gt; {<font></font>
    dispatch({<font></font>
      type: SOME_ACTION,<font></font>
      payload: param.data<font></font>
    });<font></font>
    history.push("/path");<font></font>
  };<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易EvaSam</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，通过react-router v5，您可以使用useHistory生命周期挂钩，如下所示：</font></font></p>

<pre><code>import { useHistory } from "react-router-dom";<font></font>
<font></font>
function HomeButton() {<font></font>
  let history = useHistory();<font></font>
<font></font>
  function handleClick() {<font></font>
    history.push("/home");<font></font>
  }<font></font>
<font></font>
  return (<font></font>
    &lt;button type="button" onClick={handleClick}&gt;<font></font>
      Go home<font></font>
    &lt;/button&gt;<font></font>
  );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息，</font><a href="https://reacttraining.com/react-router/web/api/Hooks/usehistory" rel="noreferrer"><font style="vertical-align: inherit;">请</font></a><font style="vertical-align: inherit;">访问：</font><a href="https://reacttraining.com/react-router/web/api/Hooks/usehistory" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://reacttraining.com/react-router/web/api/Hooks/usehistory" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//reacttraining.com/react-router/web/api/Hooks/usehistory</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
