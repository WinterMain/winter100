---
layout: question
title:  从React / Next.js中的getInitalProps重定向
date:   2020-03-24T06:31:07.000Z
description: 我正在使用React和Next.js，并尝试使用无法使用该页面的数据从页面重定向用户Router.push('/another-page')。为此，我...
img: 
author: 十三西门
category: question
answer: 2
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用React和Next.js，并尝试使用无法使用该页面的数据从页面重定向用户</font></font><code>Router.push('/another-page')</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为此，我正在检查状态代码</font></font><code>getInitalProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并应用条件</font><font style="vertical-align: inherit;">代码</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">看起来像这样：</font></font></p>

<pre><code>  const statusCode = action.currentArticle ? 200 : 404<font></font>
<font></font>
  if (isServer) res.statusCode = statusCode<font></font>
<font></font>
  if (statusCode === 404) {<font></font>
    Router.push('/')<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态代码已正确设置，并将其置于条件代码之内，这时我会遇到以下错误： </font></font><code>No router instance found. You should only use "next/router" inside the client side of your app.
</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，无论我尝试重定向的组件的生命周期事件在哪里，我都会遇到相同的错误，并且几乎没有关于此错误的在线信息。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重定向的模式</font></font><code>getInitalProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以在以下next.js Wiki中找到：</font></font><a href="https://github.com/zeit/next.js/wiki/Redirecting-in-%60getInitialProps%60" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HERE</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对此错误发生原因或解决方法的任何想法都值得赞赏；）  </font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3376篇《从React / Next.js中的getInitalProps重定向》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Davaid</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">next / router在服务器上不可用，这是一条错误消息，提示找不到路由器，next / router只能在客户端使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了在服务器中的getInitialProps中重定向用户，可以使用：</font></font></p>

<pre><code>getInitialProps({server,res}){<font></font>
 if(server)<font></font>
  res.redirect('/');<font></font>
 else<font></font>
  Router.push('/');<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋前端</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Next.js（以及任何通用反应渲染），您的代码将在两个不同的环境中执行。</font><font style="vertical-align: inherit;">首先在节点（在服务器上）中，然后在浏览器中。</font><font style="vertical-align: inherit;">Next做一些工作来提供在这两种环境中都可以运行的统一功能，但是它们却大不相同。</font><font style="vertical-align: inherit;">下一步不能也不会阻止您。</font><font style="vertical-align: inherit;">好像您刚刚在浏览器中加载了页面，但是这里有一些实际情况的详细信息……</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在客户端/浏览器上：</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在地址栏中输入url（localhost：3000或其他），然后按Enter。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GET请求发送到服务器（节点）。</font></font></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在服务器/节点上：</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GET请求进入。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node给您一个请求和一个响应对象。

</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许您有一些Express路由/中间件。</font></font></li>
</ul></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某个时候</font></font><code>render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，使用请求和响应对象调用</font><font style="vertical-align: inherit;">Next的</font><font style="vertical-align: inherit;">函数。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下一步运行</font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并传递请求/响应。</font></font></li>
<li><font style="vertical-align: inherit;"></font><code>renderToString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">React </font><font style="vertical-align: inherit;">，它将调用以下React生命周期方法：

</font></font><ul>
<li><code>constructor()</code></li>
<li><code>componentWillMount()</code></li>
<li><code>render()</code></li>
</ul></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React创建了一个发送给客户端的HTML字符串。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">^这是节点。</font><font style="vertical-align: inherit;">您无法访问</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您</font><font style="vertical-align: inherit;">没有访问权限</font><font style="vertical-align: inherit;">，</font></font><code>fetch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也不能使用下一路由器。</font><font style="vertical-align: inherit;">这些是浏览器的东西。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回客户端：</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载HTML并开始渲染。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML中指向js / css文件的链接已下载/运行。

</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这包括Next编译的js代码。</font></font></li>
</ul></li>
<li><font style="vertical-align: inherit;"></font><code>render()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">React </font><font style="vertical-align: inherit;">，它将下载的HTML（DOM）与React虚拟DOM相关联。</font><font style="vertical-align: inherit;">以下React生命周期方法将运行：

</font></font><ul>
<li><code>constructor()</code></li>
<li><code>componentWillMount()</code></li>
<li><code>render()</code></li>
<li><code>componentDidMount()</code></li>
</ul></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具/状态更改时，所有其他生命周期方法（更新）将运行。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">^这是浏览器。</font><font style="vertical-align: inherit;">您有</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您有</font></font><code>fetch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以使用下一台路由器。</font><font style="vertical-align: inherit;">现在您没有Node请求/响应，但这似乎减少了人们的负担。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font></font><a href="https://reactjs.org/docs/react-component.html#the-component-lifecycle" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件生命周期</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
