---
layout: question
title:  React：<Route精确路径=“ /” />和<Route path =“ /” />之间的区别
date:   2020-03-12T02:16:43.000Z
description: 有人可以解释两者之间的区别 <Route exact path="/" component={Home} />和 <Route path="...
img: 
author: 小宇宙飞云
category: question
answer: 3
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人可以解释两者之间的区别</font></font></p>

<pre><code> &lt;Route exact path="/" component={Home} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font></p>

<pre><code> &lt;Route path="/" component={Home} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道“确切”的含义</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第864篇《React：<Route精确路径=“ /” />和<Route path =“ /” />之间的区别》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry逆天Eva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确切：布尔</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果为true，则仅在路径</font></font><code>location.pathname</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全</font><font style="vertical-align: inherit;">匹配时匹配</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>**path**    **location.pathname**   **exact**   **matches?**<font></font>
<font></font>
/one            /one/two              true         no<font></font>
/one            /one/two              false        yes<font></font>
</code></pre>

<p>Take a look here :<a href="https://reacttraining.com/react-router/core/api/Route/exact-bool" rel="nofollow noreferrer">https://reacttraining.com/react-router/core/api/Route/exact-bool</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞路易</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之，如果您为应用程序的路由定义了多个路由，则用这样的</font></font><code>Switch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件</font><font style="vertical-align: inherit;">封装</font><font style="vertical-align: inherit;">；</font></font></p>

<pre><code>&lt;Switch&gt;<font></font>
<font></font>
  &lt;Route exact path="/" component={Home} /&gt;<font></font>
  &lt;Route path="/detail" component={Detail} /&gt;<font></font>
<font></font>
  &lt;Route exact path="/functions" component={Functions} /&gt;<font></font>
  &lt;Route path="/functions/:functionName" component={FunctionDetails} /&gt;<font></font>
<font></font>
&lt;/Switch&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您必须将</font></font><code>exact</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字</font><font style="vertical-align: inherit;">放入</font><font style="vertical-align: inherit;">该路径，该路径的路径也包含在另一个路径的路径中。</font><font style="vertical-align: inherit;">例如</font></font><code>/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，所有路径中都包含</font><font style="vertical-align: inherit;">home路径</font><font style="vertical-align: inherit;">，因此它需要具有</font></font><code>exact</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字以将其与以开头的其他路径区分开</font></font><code>/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">原因也类似于</font></font><code>/functions</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路径。</font><font style="vertical-align: inherit;">如果要使用其他路径，例如</font></font><code>/functions-detail</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>/functions/open-door</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中包含的</font><font style="vertical-align: inherit;">路径</font></font><code>/functions</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则需要使用</font></font><code>exact</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>/functions</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路径。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子宝儿Harry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这个例子中，什么都没有。</font></font><code>exact</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您有多个具有相似名称的路径时，</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">参数即起作用：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，假设我们有一个</font></font><code>Users</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示用户列表的组件。</font><font style="vertical-align: inherit;">我们还有一个</font></font><code>CreateUser</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于创建用户</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">组件。</font><font style="vertical-align: inherit;">的网址</font></font><code>CreateUsers</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应嵌套在下</font></font><code>Users</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，我们的设置可能如下所示：</font></font></p>

<pre><code>&lt;Route path="/users" component={Users} /&gt;<font></font>
&lt;Route path="/users/create" component={CreateUser} /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，这里的问题是，当我们转到</font></font><code>http://app.com/users</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路由器时，将遍历所有定义的路由并返回找到的FIRST匹配项。</font><font style="vertical-align: inherit;">因此，在这种情况下，它将首先找到</font></font><code>Users</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路线，然后返回。</font><font style="vertical-align: inherit;">都好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果我们转到</font></font><code>http://app.com/users/create</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将再次遍历所有定义的路线并返回找到的FIRST匹配项。</font><font style="vertical-align: inherit;">React路由器会进行部分匹配，因此会</font></font><code>/users</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分匹配</font></font><code>/users/create</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此它将再次错误地返回</font></font><code>Users</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路由！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>exact</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PARAM禁用部分匹配的路由，并确保如果路径是精确匹配当前URL，它只是返回的路线。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以在这种情况下，我们应该添加</font></font><code>exact</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到我们的</font></font><code>Users</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路由，这样只会匹配</font></font><code>/users</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;Route exact path="/users" component={Users} /&gt;<font></font>
&lt;Route path="/users/create" component={CreateUser} /&gt;<font></font>
</code></pre>

<p><a href="https://reacttraining.com/react-router/web/api/Route/exact-bool" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该文档</font></font><code>exact</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">详细</font><font style="vertical-align: inherit;">解释</font><font style="vertical-align: inherit;">并给出了其他示例。</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
