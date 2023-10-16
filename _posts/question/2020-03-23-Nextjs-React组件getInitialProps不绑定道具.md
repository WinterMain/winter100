---
layout: question
title:  Next.js React组件getInitialProps不绑定道具
date:   2020-03-23T14:09:37.000Z
description: 在Next.js中，您可以在React组件中使用绑定到第一次加载时服务器端渲染的生命周期方法。  我尝试使用ZEIT教程中介绍的此功能（或者在其Git...
img: 
author: 泡芙小胖
category: question
answer: 2
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Next.js中，您可以在React组件中使用绑定到第一次加载时服务器端渲染的生命周期方法。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试使用</font></font><a href="https://zeit.co/blog/next#data-fetching-is-up-to-the-developer" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ZEIT教程中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">介绍的此功能</font><font style="vertical-align: inherit;">（或者</font></font><a href="https://github.com/zeit/next.js#component-lifecycle" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在其Github上使用</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），但是this.props似乎未从该功能返回JSON。</font><font style="vertical-align: inherit;">当我单击该组件时，控制台将打印一个空对象。</font></font></p>

<pre><code>import React from 'react'<font></font>
import 'isomorphic-fetch'<font></font>
export default class extends React.Component {<font></font>
    static async getInitialProps () {<font></font>
        const res = await fetch('https://en.wikipedia.org/w/api.php?action=query&amp;titles=Main%20Page&amp;prop=revisions&amp;rvprop=content&amp;format=json')<font></font>
        const data = await res.json()<font></font>
        return { data }<font></font>
    }<font></font>
    print() {<font></font>
        console.log(this.props);<font></font>
    }<font></font>
    render() {<font></font>
        return &lt;div onClick={this.print.bind(this)}&gt;print props&lt;/div&gt;<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3134篇《Next.js React组件getInitialProps不绑定道具》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云斯丁GO</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试了您的代码，它似乎正常运行，控制台显示</font></font><code>this.props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><a href="https://i.stack.imgur.com/ygMsJ.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/ygMsJ.png" alt="结果对象"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于存在_app.js（即</font></font><a href="https://nextjs.org/docs#custom-%3Capp%3E" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NextJS自定义应用程序</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）中的问题，我在添加Redux时引起</font><font style="vertical-align: inherit;">了此问题</font><font style="vertical-align: inherit;">（不是Redux问题）。</font><font style="vertical-align: inherit;">当我开始在页面中使用getInitialProps时，尽管静态调用中有数据，但渲染时我的道具为空。</font><font style="vertical-align: inherit;">原因是_app.js中pageProps的错误传播。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，在我的情况下，此修复程序正在自定义_app.js getInitialProps中更改：</font></font></p>

<pre><code>return {<font></font>
  ...pageProps,<font></font>
  initialReduxState: reduxStore.getState()<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至： </font></font></p>

<pre><code>return {<font></font>
  pageProps: {...pageProps},<font></font>
  initialReduxState: reduxStore.getState()<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">..因此，如NextJS doc链接中所示的render方法可以将它们连接起来。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
