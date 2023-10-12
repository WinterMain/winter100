---
layout: question
title:  Next.js在GraphQL突变内部重定向
date:   2020-03-24T10:33:01.000Z
description: 在我的Next.js组件中，我向GraphQL服务器发出了一个变异请求，成功完成后，我需要重定向到另一个页面。我现在该如何做：import React...
img: 
author: 小卤蛋
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的Next.js组件中，我向GraphQL服务器发出了一个变异请求，成功完成后，我需要重定向到另一个页面。</font><font style="vertical-align: inherit;">我现在该如何做：</font></font></p>

<pre><code>import React, { Component } from 'react';<font></font>
import Router from 'next/router';<font></font>
import { Mutation } from 'react-apollo';<font></font>
import { gql } from 'apollo-boost';<font></font>
<font></font>
const signInMutation = gql`<font></font>
  mutation signIn($accessToken: String!) {<font></font>
    signIn(accessToken: $accessToken)<font></font>
  }<font></font>
`;<font></font>
<font></font>
export default class extends Component {<font></font>
  static async getInitialProps({ query: { accessToken } }) {<font></font>
    return { accessToken };<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    const { accessToken } = this.props;<font></font>
    return (<font></font>
      &lt;Mutation mutation={signInMutation} ignoreResults&gt;<font></font>
        {signIn =&gt; {<font></font>
          signIn({ variables: { accessToken } }).then(() =&gt; {<font></font>
            Router.push({<font></font>
              pathname: '/user'<font></font>
            });<font></font>
          });<font></font>
<font></font>
          return null;<font></font>
        }}<font></font>
      &lt;/Mutation&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它工作正常，但Next.js引发错误：</font></font><code>You should only use "next/router" inside the client side of your app.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">那么，解决错误的最佳方法是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3666篇《Next.js在GraphQL突变内部重定向》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
