---
layout: question
title:  在还包含getInitialProps的HOC中使用getInitialProps
date:   2020-03-23T07:51:35.000Z
description: 我用withAuth HOC包装了一个页面。在同一页面中，我还尝试调用getInitialProps。如果我登录，则getInitialProps函数不会...
img: 
author: 老丝蛋蛋
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用withAuth HOC包装了一个页面。</font><font style="vertical-align: inherit;">在同一页面中，我还尝试调用getInitialProps。</font><font style="vertical-align: inherit;">如果我登录，则getInitialProps函数不会运行（尽管它表明我的withAuth HOC正在运行）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，我可以使getInitialProps用于“联系页面”工作，还可以使用withAuth HOC（它也具有getInitialProps函数）吗？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">联系</font></font></strong></p>

<pre><code>import Layout from "../components/Layout";<font></font>
import { withAuth } from "../services/withAuth";<font></font>
<font></font>
class Contact extends React.Component {<font></font>
  static async getInitialProps(ctx) {<font></font>
    console.log("@contact authenticated ", ctx);<font></font>
    return {};<font></font>
  }<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;Layout&gt;<font></font>
        &lt;p&gt;hey there&lt;/p&gt;<font></font>
        &lt;a href="mailto:abc@gmail.com"&gt;abc@gmail.com&lt;/a&gt;<font></font>
      &lt;/Layout&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
export default withAuth(Contact);<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">withAuth HOC</font></font></strong></p>

<pre><code>import { ME } from "../graphql/queries";<font></font>
import redirect from "../lib/redirect";<font></font>
<font></font>
export const withAuth = C =&gt; {<font></font>
  class AuthComponent extends React.Component {<font></font>
    static async getInitialProps(ctx) {<font></font>
      const response = await ctx.apolloClient.query({ query: ME });<font></font>
      console.log("@withAuth ", response);<font></font>
      if (!response || !response.data || !response.data.me) {<font></font>
        redirect(ctx, "/");<font></font>
        return {<font></font>
          me: null<font></font>
        };<font></font>
      }<font></font>
<font></font>
      return {<font></font>
        me: response.data.me<font></font>
      };<font></font>
    }<font></font>
<font></font>
    render() {<font></font>
      return &lt;C {...this.props} /&gt;;<font></font>
    }<font></font>
  }<font></font>
<font></font>
  return AuthComponent;<font></font>
};<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2950篇《在还包含getInitialProps的HOC中使用getInitialProps》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐古一</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p>Try calling <code>C.getInitialProps()</code> inside the <strong>getInitialProps</strong> of your HOC:</p>

<pre><code>export const withAuth = C =&gt; {<font></font>
  class AuthComponent extends React.Component {<font></font>
    static async getInitialProps(ctx) {<font></font>
      const response = await ctx.apolloClient.query({ query: ME });<font></font>
<font></font>
      console.log("@withAuth ", response);<font></font>
<font></font>
      if (!response || !response.data || !response.data.me) {<font></font>
        redirect(ctx, "/");<font></font>
        return {<font></font>
          me: null<font></font>
        };<font></font>
      }<font></font>
<font></font>
      // Get component’s props<font></font>
      let componentProps = {}<font></font>
      if (C.getInitialProps) {<font></font>
        componentProps = await C.getInitialProps(ctx);<font></font>
      }<font></font>
<font></font>
      return {<font></font>
        me: response.data.me,<font></font>
        ...componentProps<font></font>
      };<font></font>
    }<font></font>
<font></font>
    render() {<font></font>
      return &lt;C {...this.props} /&gt;;<font></font>
    }<font></font>
  }<font></font>
<font></font>
  return AuthComponent;<font></font>
};<font></font>
</code></pre>

<p>I hope this helps.</p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
