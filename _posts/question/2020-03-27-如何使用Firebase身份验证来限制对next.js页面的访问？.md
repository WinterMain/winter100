---
layout: question
title:  如何使用Firebase身份验证来限制对next.js页面的访问？
date:   2020-03-27T12:16:31.000Z
description: 我正在使用firebase的next.js应用程序上工作。我需要使用firebase身份验证程序包来限制对页面的访问。with-firebase-auth...
img: 
author: Mandy
category: question
answer: 1
tags: 火力 React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用firebase的next.js应用程序上工作。</font><font style="vertical-align: inherit;">我需要使用firebase身份验证程序包来限制对页面的访问。</font><font style="vertical-align: inherit;">with-firebase-authentication示例不显示对多个页面的身份验证。</font></font></p>

<pre><code>import React from 'react';<font></font>
import Router from 'next/router';<font></font>
<font></font>
import { firebase } from '../../firebase';<font></font>
import * as routes from '../../constants/routes';<font></font>
<font></font>
const withAuthorization = (needsAuthorization) =&gt; (Component) =&gt; {<font></font>
  class WithAuthorization extends React.Component {<font></font>
    componentDidMount() {<font></font>
      firebase.auth.onAuthStateChanged(authUser =&gt; {<font></font>
        if (!authUser &amp;&amp; needsAuthorization) {<font></font>
          Router.push(routes.SIGN_IN)<font></font>
        }<font></font>
      });<font></font>
    }<font></font>
<font></font>
    render() {<font></font>
      return (<font></font>
        &lt;Component { ...this.props } /&gt;<font></font>
      );<font></font>
    }<font></font>
  }<font></font>
<font></font>
  return WithAuthorization;<font></font>
}<font></font>
<font></font>
export default withAuthorization;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3811篇《如何使用Firebase身份验证来限制对next.js页面的访问？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.27</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嗨经过一番研究</font></font><a href="https://github.com/iaincollins/nextjs-starter/issues/12" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎有这样做的方法有两种。</font><font style="vertical-align: inherit;">您可以使用“ </font></font><a href="https://github.com/zeit/next.js#custom-app" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自定义”</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来</font><font style="vertical-align: inherit;">替换页面的初始化过程，</font><font style="vertical-align: inherit;">以在其中包括身份验证-在这种情况下，您可以将身份验证状态作为prop传输到下一页-或针对每次加载的页面要求一个新的身份验证状态。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
