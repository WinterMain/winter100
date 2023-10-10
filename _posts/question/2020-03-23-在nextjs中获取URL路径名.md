---
layout: question
title:  在nextjs中获取URL路径名
date:   2020-03-23T03:56:54.000Z
description: 我有一个登录页面和布局组件。布局组件有标题。我不想在登录中显示标题。为此，我想获取url路径名。基于路径名显示标题。import \* as const...
img: 
author: 神乐
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个登录页面和布局组件。布局组件有标题。我不想在登录中显示标题。为此，我想获取url路径名。基于路径名显示标题。</font></font></p>

<pre><code>import * as constlocalStorage from '../helpers/localstorage';<font></font>
import Router from 'next/router';<font></font>
<font></font>
export default class MyApp extends App {<font></font>
    componentDidMount(){<font></font>
        if(constlocalStorage.getLocalStorage()){<font></font>
            Router.push({pathname:'/app'});<font></font>
        } else{<font></font>
            Router.push({pathname:'/signin'});<font></font>
        }<font></font>
<font></font>
    }<font></font>
<font></font>
    render() {<font></font>
        const { Component, pageProps } = this.props<font></font>
        return (<font></font>
//I want here pathname for checking weather to show header or not<font></font>
                &lt;Layout&gt;<font></font>
                    &lt;Component {...pageProps} /&gt;<font></font>
                &lt;/Layout&gt;<font></font>
        )<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请帮忙</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>window.location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>componentDidMount()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者</font></font><code>componentDidUpdate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是这样的：</font></font></p>

<pre><code>componentDidMount() {<font></font>
  this.currentUrl = window.location;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
