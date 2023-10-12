---
layout: question
title:  如何在React Router 4中实现经过身份验证的路由？
date:   2020-03-12T06:39:46.000Z
description: 我试图实现经过身份验证的路由，但是发现React Router 4现在阻止了它的工作： <Route exact path="/" component...
img: 
author: 伽罗L
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图实现经过身份验证的路由，但是发现React Router 4现在阻止了它的工作： </font></font></p>

<pre><code>&lt;Route exact path="/" component={Index} /&gt;<font></font>
&lt;Route path="/auth" component={UnauthenticatedWrapper}&gt;<font></font>
    &lt;Route path="/auth/login" component={LoginBotBot} /&gt;<font></font>
&lt;/Route&gt;<font></font>
&lt;Route path="/domains" component={AuthenticatedWrapper}&gt;<font></font>
    &lt;Route exact path="/domains" component={DomainsIndex} /&gt;<font></font>
&lt;/Route&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误是： </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告：您不应使用</font></font><code>&lt;Route component&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;Route children&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在同一路线上；</font></font><code>&lt;Route children&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将被忽略</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，实现此目标的正确方法是什么？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它出现在</font></font><code>react-router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（v4）文档中，提示类似</font></font></p>

<pre><code>&lt;Router&gt;<font></font>
    &lt;div&gt;<font></font>
    &lt;AuthButton/&gt;<font></font>
    &lt;ul&gt;<font></font>
        &lt;li&gt;&lt;Link to="/public"&gt;Public Page&lt;/Link&gt;&lt;/li&gt;<font></font>
        &lt;li&gt;&lt;Link to="/protected"&gt;Protected Page&lt;/Link&gt;&lt;/li&gt;<font></font>
    &lt;/ul&gt;<font></font>
    &lt;Route path="/public" component={Public}/&gt;<font></font>
    &lt;Route path="/login" component={Login}/&gt;<font></font>
    &lt;PrivateRoute path="/protected" component={Protected}/&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/Router&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是在将一堆路线组合在一起时是否有可能实现这一目标？ </font></font></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，经过一番研究，我想到了这个： </font></font></p>

<pre><code>import React, {PropTypes} from "react"<font></font>
import {Route} from "react-router-dom"<font></font>
<font></font>
export default class AuthenticatedRoute extends React.Component {<font></font>
  render() {<font></font>
    if (!this.props.isLoggedIn) {<font></font>
      this.props.redirectToLogin()<font></font>
      return null<font></font>
    }<font></font>
    return &lt;Route {...this.props} /&gt;<font></font>
  }<font></font>
}<font></font>
<font></font>
AuthenticatedRoute.propTypes = {<font></font>
  isLoggedIn: PropTypes.bool.isRequired,<font></font>
  component: PropTypes.element,<font></font>
  redirectToLogin: PropTypes.func.isRequired<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发出错误的动作是正确的</font></font><code>render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感觉。</font><font style="vertical-align: inherit;">似乎确实不正确，</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还是</font><font style="vertical-align: inherit;">带有</font><font style="vertical-align: inherit;">其他挂钩？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1001篇《如何在React Router 4中实现经过身份验证的路由？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan神乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>const Root = ({ session }) =&gt; {<font></font>
  const isLoggedIn = session &amp;&amp; session.getCurrentUser<font></font>
  return (<font></font>
    &lt;Router&gt;<font></font>
      {!isLoggedIn ? (<font></font>
        &lt;Switch&gt;<font></font>
          &lt;Route path="/signin" component={&lt;Signin /&gt;} /&gt;<font></font>
          &lt;Redirect to="/signin" /&gt;<font></font>
        &lt;/Switch&gt;<font></font>
      ) : (<font></font>
        &lt;Switch&gt;<font></font>
          &lt;Route path="/" exact component={Home} /&gt;<font></font>
          &lt;Route path="/about" component={About} /&gt;<font></font>
          &lt;Route path="/something-else" component={SomethingElse} /&gt;<font></font>
          &lt;Redirect to="/" /&gt;<font></font>
        &lt;/Switch&gt;<font></font>
      )}<font></font>
    &lt;/Router&gt;<font></font>
  )<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是简单的干净保护路线</font></font></p>

<pre><code>const ProtectedRoute <font></font>
  = ({ isAllowed, ...props }) =&gt; <font></font>
     isAllowed <font></font>
     ? &lt;Route {...props}/&gt; <font></font>
     : &lt;Redirect to="/authentificate"/&gt;;<font></font>
const _App = ({ lastTab, isTokenVerified })=&gt; <font></font>
    &lt;Switch&gt;<font></font>
      &lt;Route exact path="/authentificate" component={Login}/&gt;<font></font>
      &lt;ProtectedRoute <font></font>
         isAllowed={isTokenVerified} <font></font>
         exact <font></font>
         path="/secrets" <font></font>
         component={Secrets}/&gt;<font></font>
      &lt;ProtectedRoute <font></font>
         isAllowed={isTokenVerified} <font></font>
         exact <font></font>
         path="/polices" <font></font>
         component={Polices}/&gt;<font></font>
      &lt;ProtectedRoute <font></font>
         isAllowed={isTokenVerified} <font></font>
         exact <font></font>
         path="/grants" component={Grants}/&gt;<font></font>
      &lt;Redirect from="/" to={lastTab}/&gt;<font></font>
    &lt;/Switch&gt;<font></font>
</code></pre>

<p><code>isTokenVerified</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是一种检查授权令牌的方法调用，它基本上返回布尔值。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我以前的答案是不可扩展的。</font><font style="vertical-align: inherit;">我认为这是个好方法-</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的路线</font></font></p>

<pre><code>&lt;Switch&gt;<font></font>
  &lt;Route<font></font>
    exact path="/"<font></font>
    component={matchStateToProps(InitialAppState, {<font></font>
      routeOpen: true // no auth is needed to access this route<font></font>
    })} /&gt;<font></font>
  &lt;Route<font></font>
    exact path="/profile"<font></font>
    component={matchStateToProps(Profile, {<font></font>
      routeOpen: false // can set it false or just omit this key<font></font>
    })} /&gt;<font></font>
  &lt;Route<font></font>
    exact path="/login"<font></font>
    component={matchStateToProps(Login, {<font></font>
      routeOpen: true<font></font>
    })} /&gt;<font></font>
  &lt;Route<font></font>
    exact path="/forgot-password"<font></font>
    component={matchStateToProps(ForgotPassword, {<font></font>
      routeOpen: true<font></font>
    })} /&gt;<font></font>
  &lt;Route<font></font>
    exact path="/dashboard"<font></font>
    component={matchStateToProps(DashBoard)} /&gt;<font></font>
&lt;/Switch&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想法是在</font></font><code>component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">props中</font><font style="vertical-align: inherit;">使用包装器，</font><font style="vertical-align: inherit;">如果不需要身份验证或已经通过身份验证，它将返回原始组件，否则将返回默认组件，例如Login。</font></font></p>

<pre><code>const matchStateToProps = function(Component, defaultProps) {<font></font>
  return (props) =&gt; {<font></font>
    let authRequired = true;<font></font>
<font></font>
    if (defaultProps &amp;&amp; defaultProps.routeOpen) {<font></font>
      authRequired = false;<font></font>
    }<font></font>
<font></font>
    if (authRequired) {<font></font>
      // check if loginState key exists in localStorage (Your auth logic goes here)<font></font>
      if (window.localStorage.getItem(STORAGE_KEYS.LOGIN_STATE)) {<font></font>
        return &lt;Component { ...defaultProps } /&gt;; // authenticated, good to go<font></font>
      } else {<font></font>
        return &lt;InitialAppState { ...defaultProps } /&gt;; // not authenticated<font></font>
      }<font></font>
    }<font></font>
    return &lt;Component { ...defaultProps } /&gt;; // no auth is required<font></font>
  };<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Stafan小哥</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道已经有一段时间了，但是我一直在</font><font style="vertical-align: inherit;">为私人和公共路线开发</font></font><a href="https://www.npmjs.com/package/react-router-with-props" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm软件包</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建立私人路线的方法如下：</font></font></p>

<pre><code>&lt;PrivateRoute&nbsp;exact&nbsp;path="/private"&nbsp;authed={true}&nbsp;redirectTo="/login"&nbsp;component={Title}&nbsp;text="This&nbsp;is&nbsp;a&nbsp;private&nbsp;route"/&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以设置只有未经身份验证的用户才能访问的公用路由</font></font></p>

<pre><code>&lt;PublicRoute&nbsp;exact&nbsp;path="/public"&nbsp;authed={false}&nbsp;redirectTo="/admin"&nbsp;component={Title}&nbsp;text="This&nbsp;route&nbsp;is&nbsp;for&nbsp;unauthed&nbsp;users"/&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对您有所帮助！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tnx泰勒·麦金尼斯（Tnx Tyler McGinnis）提供解决方案。</font><font style="vertical-align: inherit;">我是根据Tyler McGinnis的想法提出的。</font></font></p>

<pre><code>const DecisionRoute = ({ trueComponent, falseComponent, decisionFunc, ...rest }) =&gt; {<font></font>
  return (<font></font>
    &lt;Route<font></font>
      {...rest}<font></font>
<font></font>
      render={<font></font>
        decisionFunc()<font></font>
          ? trueComponent<font></font>
          : falseComponent<font></font>
      }<font></font>
    /&gt;<font></font>
  )<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以这样实现</font></font></p>

<pre><code>&lt;DecisionRoute path="/signin" exact={true}<font></font>
            trueComponent={redirectStart}<font></font>
            falseComponent={SignInPage}<font></font>
            decisionFunc={isAuth}<font></font>
          /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DecisionFunc只是一个返回true或false的函数</font></font></p>

<pre><code>const redirectStart = props =&gt; &lt;Redirect to="/orders" /&gt;
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
