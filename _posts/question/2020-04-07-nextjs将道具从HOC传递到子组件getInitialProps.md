---
layout: question
title:  next.js将道具从HOC传递到子组件getInitialProps
date:   2020-04-07T03:48:15.000Z
description: 我想在我的应用程序中为页面创建一个HOC，以提供一些信息，这些信息存储在本地存储中，以防页面未在服务器上呈现。我只能从中实际设置数据，componen...
img: 
author: 小卤蛋
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在我的应用程序中为页面创建一个HOC，以提供一些信息，这些信息存储在本地存储中，以防页面未在服务器上呈现。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只能从中实际设置数据，</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为我需要访问localStorage（显然在Node env中不可用）。</font></font></p>

<pre><code>import * as React from 'react'<font></font>
const withLogin = Page =&gt; class SecurePage extends React.Component {<font></font>
  static async getInitialProps (ctx) {<font></font>
<font></font>
    let language;<font></font>
    if (ctx.req) {<font></font>
        language = ctx.req.session.language;<font></font>
    } else {<font></font>
        language = localStorage.getItem('language');<font></font>
    }<font></font>
<font></font>
    let props = {}<font></font>
    if (Page.getInitialProps) {<font></font>
        const pageProps = await Page.getInitialProps(ctx);<font></font>
        props = { ...pageProps, language }<font></font>
    }<font></font>
<font></font>
    console.log("this is what the props look like in the wrapping component", props)<font></font>
<font></font>
    return props;<font></font>
<font></font>
    // return Page.getInitialProps &amp;&amp; { ...(await Page.getInitialProps(ctx)), language }<font></font>
  }<font></font>
<font></font>
  componentDidMount () {<font></font>
      const { language } = this.props;<font></font>
      if (language) {<font></font>
          /* if we were able to fetch the language, set it here */<font></font>
          localStorage.setItem('language', language);<font></font>
      }<font></font>
  }<font></font>
<font></font>
  render () {<font></font>
      console.log("pre-render page props ", this.props);<font></font>
    return &lt;Page {...this.props} /&gt; <font></font>
  }<font></font>
}<font></font>
<font></font>
export default withLogin<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我为它配备组件时，HOC getInitialProps函数将按预期运行，但它对呈现的组件的getInitialProps函数没有影响。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我没有办法通过HOC模式将prop传递给子组件的getInitialProps吗？</font></font></strong></p>

<pre><code>class EmployerJobList extends React.Component {<font></font>
    static async getInitialProps(props) {<font></font>
<font></font>
        if (props.req) {<font></font>
            /* SSR */<font></font>
            // language = req.session.language;<font></font>
        } else {<font></font>
            /* non-SSR */<font></font>
            // language = user.preferred_language;<font></font>
        }<font></font>
        console.log("got language", props.language); // =&gt; undefined<font></font>
        getUrl (`/api/localization?filename=create-job&amp;language=${props.language}`)<font></font>
        .then( jsonRes =&gt; {<font></font>
            console.log(jsonRes);<font></font>
        })<font></font>
        ...<font></font>
     export default withLogin(EmployerJobList)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果这不是可行的模式；</font><font style="vertical-align: inherit;">我有什么可靠的方法可以与localStorage共享/重用我想要的逻辑吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从理论上讲，我可以在每个Page组件中执行此操作：</font></font></p>

<pre><code>static async getInitialProps(props) {<font></font>
<font></font>
    let language;<font></font>
    if (props.req) {<font></font>
        /* SSR */<font></font>
        language = req.session.language;<font></font>
    } else {<font></font>
        /* non-SSR */<font></font>
        language = localStorage.getItem('language') // works<font></font>
    }<font></font>
    ...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这似乎是多余的。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4114篇《next.js将道具从HOC传递到子组件getInitialProps》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
