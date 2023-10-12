---
layout: question
title:  Next.js-了解getInitialProps
date:   2020-03-23T03:55:18.000Z
description: 我有一个使用next.js以及Apollo / Graphql的应用程序，我试图充分了解getInitialProps生命周期挂钩的工作原理。getI...
img: 
author: JinJin
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个使用next.js以及Apollo / Graphql的应用程序，我试图充分了解</font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生命周期挂钩的工作原理。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的理解中</font><font style="vertical-align: inherit;">，生命周期</font><font style="vertical-align: inherit;">用于设置一些初始道具，这些道具将在应用程序首次加载时呈现服务器端，可用于从数据库中预取数据，以帮助SEO或延长页面加载时间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是这样的：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次我有一个</font></font><code>query</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件可以在应用程序中</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">组件中获取一些数据时，是否必须使用</font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保数据将在服务器端呈现的功能？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的理解也是，它</font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅适用于页面索引组件（以及中的</font></font><code>_app.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），这意味着在组件树中处于较低位置的任何组件都无法访问此生命周期，并且需要从向上获取一些初始支持在页面级别，然后将它们传递到组件树。</font><font style="vertical-align: inherit;">（如果有人可以确认这个假设，那将是很棒的）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的代码：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">_app.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在</font></font><code>/pages</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹中）</font></font></p>

<pre><code>import App, { Container } from 'next/app';<font></font>
import { ApolloProvider } from 'react-apollo';<font></font>
<font></font>
class AppComponent extends App {<font></font>
  static async getInitialProps({ Component, ctx }) {<font></font>
    let pageProps = {};<font></font>
    if (Component.getInitialProps) {<font></font>
      pageProps = await Component.getInitialProps(ctx)<font></font>
    }<font></font>
    // this exposes the query to the user<font></font>
    pageProps.query = ctx.query;<font></font>
    return { pageProps };<font></font>
  }<font></font>
  render() {<font></font>
    const { Component, apollo, pageProps } = this.props;<font></font>
<font></font>
    return (<font></font>
      &lt;Container&gt;<font></font>
        &lt;ApolloProvider client={apollo}&gt; <font></font>
          &lt;Component client={client} {...pageProps} /&gt;               <font></font>
        &lt;/ApolloProvider&gt;<font></font>
      &lt;/Container&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
export default AppComponent;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Index.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在</font></font><code>/pages/users</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹中）</font></font></p>

<pre><code>import React, { PureComponent } from 'react';<font></font>
import { Query } from 'react-apollo';<font></font>
import gql from 'graphql-tag';<font></font>
<font></font>
const USERS_QUERY = gql`<font></font>
  query USERS_QUERY {<font></font>
    users {<font></font>
      id<font></font>
      firstName<font></font>
    } <font></font>
  }<font></font>
`;<font></font>
<font></font>
class Index extends PureComponent {<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;Query query={USERS_QUERY}&gt;<font></font>
        {({data}) =&gt; {<font></font>
          return data.map(user =&gt; &lt;div&gt;{user.firstName}&lt;/div&gt;);<font></font>
        }}<font></font>
      &lt;/Query&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
export default Index;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2769篇《Next.js-了解getInitialProps》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
