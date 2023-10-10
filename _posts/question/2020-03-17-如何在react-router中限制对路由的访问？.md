---
layout: question
title:  如何在react-router中限制对路由的访问？
date:   2020-03-17T04:02:16.000Z
description: 有谁知道如何在react-router中限制对特定路由的访问？我想在允许访问特定路由之前检查用户是否已登录。我以为这很简单，但是文档尚不清楚该怎么做。...
img: 
author: 西门蛋蛋JinJin
category: question
answer: 3
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有谁知道如何在react-router中限制对特定路由的访问？</font><font style="vertical-align: inherit;">我想在允许访问特定路由之前检查用户是否已登录。</font><font style="vertical-align: inherit;">我以为这很简单，但是文档尚不清楚该怎么做。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我应该在定义</font></font><code>&lt;Route&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件的</font><font style="vertical-align: inherit;">位置设置的东西</font><font style="vertical-align: inherit;">，还是应该在组件处理程序中处理的东西？</font></font></p>

<pre><code>&lt;Route handler={App} path="/"&gt;<font></font>
  &lt;NotFoundRoute handler={NotFound} name="not-found"/&gt;<font></font>
  &lt;DefaultRoute handler={Login} name="login"/&gt;<font></font>
  &lt;Route handler={Todos} name="todos"/&gt; {/* I want this to be restricted */}<font></font>
&lt;/Route&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1864篇《如何在react-router中限制对路由的访问？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿良</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，已登录的用户将被授予令牌，并将该令牌用于与服务器的任何通信。</font><font style="vertical-align: inherit;">我们通常要做的是定义一个根页面，然后在该页面的顶部进行构建。</font><font style="vertical-align: inherit;">该根页面为您执行本地化，身份验证和其他配置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个例子</font></font></p>

<pre><code>Routes = (<font></font>
    &lt;Route path="/" handler={Root}&gt;<font></font>
        &lt;Route name="login" handler={Login} /&gt;<font></font>
        &lt;Route name="forget" handler={ForgetPassword} /&gt;<font></font>
        &lt;Route handler={Main} &gt;<font></font>
            &lt;Route name="overview" handler={Overview} /&gt;<font></font>
            &lt;Route name="profile" handler={Profile} /&gt;<font></font>
            &lt;DefaultRoute handler={Overview} /&gt;<font></font>
        &lt;/Route&gt;<font></font>
        &lt;DefaultRoute handler={Login} /&gt;<font></font>
        &lt;NotFoundRoute handler={NotFound} /&gt;<font></font>
    &lt;/Route&gt;<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的根页面上，检查令牌是否为null或使用服务器对令牌进行身份验证，以查看用户是否有效登录。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助 ：）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞Sam</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用HOC并且auth是一个变量，您可以更改值true或false表示（授权）</font></font></p>

<pre><code>&lt;Route path="/login" component={SignIn} /&gt;<font></font>
&lt;Route path="/posts" render = {() =&gt; (auth ?  (&lt;Post /&gt;) : (&lt;Redirect to="/login" /&gt;))}/&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A阿飞前端</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><code>react-router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 如果您鼓励路由器采用声明式方法，则应使路由器尽可能地笨拙，并避免将路由逻辑放入组件中。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是您的操作方法（假设您将</font></font><code>loggedIn</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具</font><font style="vertical-align: inherit;">传递给它</font><font style="vertical-align: inherit;">）：</font></font></p>

<pre><code>const DumbRouter = ({ loggedIn }) =&gt; (<font></font>
  &lt;Router history={history}&gt;<font></font>
    &lt;Switch&gt;<font></font>
      {[<font></font>
        !loggedIn &amp;&amp; LoggedOutRoutes,<font></font>
        loggedIn &amp;&amp; LoggedInRouter,<font></font>
        &lt;Route component={404Route} /&gt;<font></font>
      ]}<font></font>
    &lt;/Switch&gt;<font></font>
  &lt;/Router&gt;<font></font>
);<font></font>
<font></font>
const LoggedInRoutes = [<font></font>
  &lt;Route path="/" component={Profile} /&gt;<font></font>
];<font></font>
<font></font>
const LoggedOutRoutes = [<font></font>
  &lt;Route path="/" component={Login} /&gt;<font></font>
];<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
