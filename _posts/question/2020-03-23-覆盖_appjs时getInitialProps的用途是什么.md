---
layout: question
title:  覆盖_app.js时，getInitialProps的用途是什么？
date:   2020-03-23T02:54:31.000Z
description: 这到底是做什么的？  pageProps =等待Component.getInitialProps（ctx）它看起来像“ pageProps”...
img: 
author: 米亚番长
category: question
answer: 0
tags: next.js React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这到底是做什么的？</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">pageProps =等待Component.getInitialProps（ctx）</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它看起来像“ pageProps”，这只是一个空对象</font></font></p>

<pre><code>import App, {Container} from 'next/app'<font></font>
import React from 'react'<font></font>
<font></font>
export default class MyApp extends App {<font></font>
  static async getInitialProps ({ Component, router, ctx }) {<font></font>
    let pageProps = {}<font></font>
<font></font>
    if (Component.getInitialProps) {<font></font>
      pageProps = await Component.getInitialProps(ctx)<font></font>
    }<font></font>
<font></font>
    return {pageProps}<font></font>
  }<font></font>
<font></font>
  render () {<font></font>
    const {Component, pageProps} = this.props<font></font>
    return &lt;Container&gt;<font></font>
      &lt;Component {...pageProps} /&gt;<font></font>
    &lt;/Container&gt;<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2699篇《覆盖_app.js时，getInitialProps的用途是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
