---
layout: question
title:  React-Router V4-无法获取\* url \*
date:   2020-03-19T02:08:23.000Z
description: 我开始使用react-router v4。<Router>我的app.js中有一个简单的导航链接（请参见下面的代码）。如果我导航到localhost/vo...
img: 
author: 西门番长
category: question
answer: 4
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我开始使用react-router v4。</font></font><code>&lt;Router&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的app.js中</font><font style="vertical-align: inherit;">有一个简单的</font><font style="vertical-align: inherit;">导航链接（请参见下面的代码）。</font><font style="vertical-align: inherit;">如果我导航到</font></font><code>localhost/vocabulary</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，路由器会将我重定向到正确的页面。</font><font style="vertical-align: inherit;">但是，当我在之后按重新加载（F5）（</font></font><code>localhost/vocabulary</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）时，所有内容消失并且浏览器报告</font></font><code>Cannot GET /vocabulary</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">那怎么可能？</font><font style="vertical-align: inherit;">有人可以给我任何解决方法的提示（正确重新加载页面）吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">App.js：</font></font></p>

<pre><code>import React from 'react'<font></font>
import ReactDOM from 'react-dom'<font></font>
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'<font></font>
import { Switch, Redirect } from 'react-router'<font></font>
import Login from './pages/Login'<font></font>
import Vocabulary from './pages/Vocabulary'<font></font>
<font></font>
const appContainer = document.getElementById('app')<font></font>
<font></font>
ReactDOM.render(<font></font>
  &lt;Router&gt;<font></font>
    &lt;div&gt;<font></font>
        &lt;ul&gt;<font></font>
          &lt;li&gt;&lt;Link to="/"&gt;Home&lt;/Link&gt;&lt;/li&gt;<font></font>
          &lt;li&gt;&lt;Link to="/vocabulary"&gt;Vocabulary&lt;/Link&gt;&lt;/li&gt;<font></font>
        &lt;/ul&gt;<font></font>
        &lt;Switch&gt;<font></font>
          &lt;Route exact path="/" component={Login} /&gt;<font></font>
          &lt;Route exact path="/vocabulary" component={Vocabulary} /&gt;<font></font>
        &lt;/Switch&gt;<font></font>
    &lt;/div&gt;<font></font>
  &lt;/Router&gt;,<font></font>
appContainer)<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2243篇《React-Router V4-无法获取\* url \*》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝达蒙</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过添加...我也成功了... </font></font><code>historyApiFallback: true</code></p>

<pre><code>devServer: {<font></font>
    contentBase: path.join(__dirname, "public"),<font></font>
    watchContentBase: true,<font></font>
    publicPath: "/dist/",<font></font>
    historyApiFallback: true<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁JimDavaid</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它对我有用</font></font><code>devServer { historyApiFallback: true }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">只需要添加</font><font style="vertical-align: inherit;">就可以，不需要使用</font></font><code>publicPath: '/'</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法如下：</font></font></p>

<pre><code>  devServer: {<font></font>
    historyApiFallback: true<font></font>
  },<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙LEY</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是为了补充泰勒对仍在为此挣扎的人的答案：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其添加</font></font><code>devServer.historyApiFallback: true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到我的webpack配置中（不设置</font></font><code>publicPath</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），修复了在刷新/返回/转发时看到的404 / Cannot-GET错误，但仅适用于单个级别的嵌套路由。</font><font style="vertical-align: inherit;">换句话说，“ /”和“ / topics”开始正常工作，但是超出此范围的任何内容（例如“ / topics / whatever”）仍然在refresh / etc上抛出404。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">刚刚在这里遇到了一个可以接受的答案：</font></font><a href="https://stackoverflow.com/questions/29718481/unexpected-token-error-in-react-router-component"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意外的令牌&lt;反应路由器组件中的错误</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它为我提供了最后丢失的部分。</font></font><code>/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的包脚本src中</font><font style="vertical-align: inherit;">添加引导</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已完全解决了该问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚伽罗L</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，为我解决的问题是编辑</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，</font></font><code>scripts: {</code></p>

<pre><code>"build": "webpack -d &amp;&amp; copy src\\index.html dist\\index.html /y &amp;&amp; webpack-dev-server --content-base src --inline --port 3000"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的webpack </font></font><code>build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码</font><font style="vertical-align: inherit;">末尾，我</font><font style="vertical-align: inherit;">添加了</font></font><code>--history-api-fallback</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这似乎也是解决该</font></font><code>Cannot GET /url</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误</font><font style="vertical-align: inherit;">的最简单方法</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：下一次在添加后进行构建时，</font></font><code>--history-api-fallback</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您会注意到输出中的一行看起来像这样（无论您的索引文件是什么）：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">404将回退到/index.html</font></font></p>
</blockquote></div>
        </div></div>
    {% endraw %}
  </div>
<div>
