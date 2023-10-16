---
layout: question
title:  如何使用React + ES6 + webpack导入和导出组件？
date:   2020-03-11T09:50:29.000Z
description: 我在玩React和ES6使用babel和webpack。我想在不同的文件中构建多个组件，将其导入单个文件并将其与webpack假设我有几个这样的组件：...
img: 
author: StafanNearPro
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在玩</font></font><code>React</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>ES6</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>babel</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我想在不同的文件中构建多个组件，将其导入单个文件并将其与</font></font><code>webpack</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我有几个这样的组件：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">my-navbar.jsx</font></font></p>

<pre><code>import React from 'react';<font></font>
import Navbar from 'react-bootstrap/lib/Navbar';<font></font>
<font></font>
export class MyNavbar extends React.Component {<font></font>
    render(){<font></font>
      return (<font></font>
        &lt;Navbar className="navbar-dark" fluid&gt;<font></font>
        ...<font></font>
        &lt;/Navbar&gt;<font></font>
      );<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">main-page.jsx</font></font></p>

<pre><code>import React from 'react';<font></font>
import ReactDOM from 'react-dom';<font></font>
<font></font>
import MyNavbar from './comp/my-navbar.jsx';<font></font>
<font></font>
export class MyPage extends React.Component{<font></font>
  render(){<font></font>
    return(<font></font>
        &lt;MyNavbar /&gt;<font></font>
        ...<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
ReactDOM.render(<font></font>
  &lt;MyPage /&gt;,<font></font>
  document.getElementById('container')<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用webpack并按照其教程进行操作，我有</font></font><code>main.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>import MyPage from './main-page.jsx';
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构建项目并运行它之后，在浏览器控制台中出现以下错误：</font></font></p>

<pre><code>Error: Invariant Violation: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. Check the render method of `MyPage`.
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我究竟做错了什么？</font><font style="vertical-align: inherit;">如何正确导入和导出组件？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第780篇《如何使用React + ES6 + webpack导入和导出组件？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
