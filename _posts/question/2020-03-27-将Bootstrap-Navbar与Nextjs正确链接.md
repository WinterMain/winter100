---
layout: question
title:  将Bootstrap Navbar与Nextjs正确链接
date:   2020-03-27T12:13:34.000Z
description: 嘿，我要花几个小时才能用Nextjs设置基本的Bootstrap Navbar。 而且我还认为除了显示错误消息外，我还有其他问题。 另外，请让我知...
img: 
author: 猴子Gil
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嘿，我要花几个小时才能用Nextjs设置基本的Bootstrap Navbar。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且我还认为除了显示错误消息外，我还有其他问题。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，请让我知道如何使整体效果更好！</font><font style="vertical-align: inherit;">我应该使用_app.js而不是Layout吗？</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pages / index.js</font></font></p>
</blockquote>

<pre class="lang-html prettyprint-override"><code>import Layout from "../components/Layout";<font></font>
<font></font>
class Page extends React.Component {<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;Layout&gt;<font></font>
        &lt;div className="container"&gt;<font></font>
          &lt;div className="starter text-center"&gt;<font></font>
            &lt;h1&gt;Bootstrap starter template&lt;/h1&gt;<font></font>
            &lt;p className="lead"&gt;<font></font>
              Use this document as a way to quickly start any new project.<font></font>
              &lt;br /&gt; All you get is this text and a mostly barebones HTML<font></font>
              document.<font></font>
            &lt;/p&gt;<font></font>
          &lt;/div&gt;<font></font>
        &lt;/div&gt;<font></font>
      &lt;/Layout&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
export default Page;<font></font>
<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于页面看起来几乎一样</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件/Header.js</font></font></p>
</blockquote>

<pre class="lang-js prettyprint-override"><code>import Link from "next/link";<font></font>
<font></font>
class Header extends React.Component {<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;header&gt;<font></font>
        &lt;nav className="navbar navbar-expand-md navbar-dark bg-dark"&gt;<font></font>
          &lt;a className="navbar-brand" href="/"&gt;<font></font>
            Home<font></font>
          &lt;/a&gt;<font></font>
          &lt;button<font></font>
            className="navbar-toggler"<font></font>
            type="button"<font></font>
            data-toggle="collapse"<font></font>
            data-target="#navbarsExampleDefault"<font></font>
            aria-controls="navbarsExampleDefault"<font></font>
            aria-expanded="false"<font></font>
            aria-label="Toggle navigation"<font></font>
          &gt;<font></font>
            &lt;span className="navbar-toggler-icon" /&gt;<font></font>
          &lt;/button&gt;<font></font>
<font></font>
          &lt;div className="collapse navbar-collapse" id="navbarsExampleDefault"&gt;<font></font>
            &lt;ul className="navbar-nav mr-auto"&gt;<font></font>
              &lt;li className="nav-item active"&gt;<font></font>
                &lt;div&gt;<font></font>
                  &lt;Link href="/about"&gt;<font></font>
                    {" "}<font></font>
                    &lt;a className="nav-link"&gt;About&lt;/a&gt;{" "}<font></font>
                  &lt;/Link&gt;<font></font>
                &lt;/div&gt;<font></font>
              &lt;/li&gt;<font></font>
            &lt;/ul&gt;<font></font>
          &lt;/div&gt;<font></font>
        &lt;/nav&gt;<font></font>
      &lt;/header&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
export default Header;<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件/Layout.js</font></font></p>
</blockquote>

<pre class="lang-js prettyprint-override"><code>import Head from 'next/head'<font></font>
import Header from './Header'<font></font>
import Footer from './Footer'<font></font>
<font></font>
import bootstrapStyle from 'bootstrap/dist/css/bootstrap.css'<font></font>
import fontawesomeStyle from 'font-awesome/css/font-awesome.css'<font></font>
import stylesheet from 'styles/index.scss'<font></font>
<font></font>
const Layout = ({ children, title }) =&gt; (<font></font>
  &lt;div&gt;<font></font>
    &lt;Head&gt;<font></font>
      &lt;title&gt;{ title }&lt;/title&gt;<font></font>
      &lt;meta charSet='utf-8' /&gt;<font></font>
      &lt;meta name='viewport' content='initial-scale=1.0, width=device-width' /&gt;<font></font>
      &lt;style dangerouslySetInnerHTML={{ __html: bootstrapStyle }} /&gt;<font></font>
      &lt;style dangerouslySetInnerHTML={{ __html: fontawesomeStyle }} /&gt;<font></font>
      &lt;style dangerouslySetInnerHTML={{ __html: stylesheet }} /&gt;<font></font>
    &lt;/Head&gt;<font></font>
    &lt;Header /&gt;<font></font>
<font></font>
    { children }<font></font>
<font></font>
    &lt;Footer /&gt;<font></font>
  &lt;/div&gt;<font></font>
)<font></font>
<font></font>
export default Layout<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React.Children.only只希望接收一个React元素的子元素。</font></font></p>
</blockquote></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.27</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在将React Bootstrap（</font></font><a href="https://react-bootstrap.github.io/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://react-bootstrap.github.io/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）与nextjs一起使用，它节省了大量工作。</font><font style="vertical-align: inherit;">我将导航栏放在_app.js中，以避免重复代码。</font><font style="vertical-align: inherit;">如果您使用的是nextjs路由器（就像我一样），则需要像这样包装每个Nav.Link项目：</font></font></p>

<pre><code>        &lt;Link href="/index" passHref&gt;<font></font>
          &lt;Nav.Link&gt;Home&lt;/Nav.Link&gt;<font></font>
        &lt;/Link&gt;<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
