---
layout: question
title:  如何使用makeStyles设置组件样式并在Material UI中仍然具有生命周期方法？
date:   2020-03-17T04:01:46.000Z
description: 每当我尝试使用makeStyles()具有生命周期方法的组件时，都会出现以下错误：  无效的挂接调用。挂钩只能在功能组件的主体内部调用。可能由于以下...
img: 
author: 理查德泡芙
category: question
answer: 2
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当我尝试使用</font></font><code>makeStyles()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有生命周期方法的组件</font><font style="vertical-align: inherit;">时，都会出现以下错误</font><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无效的挂接调用。</font><font style="vertical-align: inherit;">挂钩只能在功能组件的主体内部调用。</font><font style="vertical-align: inherit;">可能由于以下原因之一而发生：</font></font></p>
  
  <ol>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能使用了不匹配的React和渲染器版本（例如React DOM）</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能正在违反钩子规则</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能在同一应用程序中拥有多个React副本</font></font></li>
  </ol>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是产生此错误的代码的一个小示例。</font><font style="vertical-align: inherit;">其他示例也将类分配给子项。</font><font style="vertical-align: inherit;">我在MUI的文档中找不到任何显示其他使用方式</font></font><code>makeStyles</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并能够使用生命周期方法的内容。</font></font></p>

<pre><code>    import React, { Component } from 'react';<font></font>
    import { Redirect } from 'react-router-dom';<font></font>
<font></font>
    import { Container, makeStyles } from '@material-ui/core';<font></font>
<font></font>
    import LogoButtonCard from '../molecules/Cards/LogoButtonCard';<font></font>
<font></font>
    const useStyles = makeStyles(theme =&gt; ({<font></font>
      root: {<font></font>
        display: 'flex',<font></font>
        alignItems: 'center',<font></font>
        justifyContent: 'center',<font></font>
      },<font></font>
    }));<font></font>
<font></font>
    const classes = useStyles();<font></font>
<font></font>
    class Welcome extends Component {<font></font>
      render() {<font></font>
        if (this.props.auth.isAuthenticated()) {<font></font>
          return &lt;Redirect to="/" /&gt;;<font></font>
        }<font></font>
        return (<font></font>
          &lt;Container maxWidth={false} className={classes.root}&gt;<font></font>
            &lt;LogoButtonCard<font></font>
              buttonText="Enter"<font></font>
              headerText="Welcome to PlatformX"<font></font>
              buttonAction={this.props.auth.login}<font></font>
            /&gt;<font></font>
          &lt;/Container&gt;<font></font>
        );<font></font>
      }<font></font>
    }<font></font>
<font></font>
    export default Welcome;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1863篇《如何使用makeStyles设置组件样式并在Material UI中仍然具有生命周期方法？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry猴子A</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了将类转换为函数外，一个简单的步骤是为包含使用“类”的组件的jsx创建一个函数（在您的情况下为）</font></font><code>&lt;container&gt;&lt;/container&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后在类render（）的返回内部调用此函数。作为标签。</font><font style="vertical-align: inherit;">这样，您就可以从类中移出函数。</font><font style="vertical-align: inherit;">它对我来说非常有效。</font><font style="vertical-align: inherit;">就我而言，这是</font></font><code>&lt;table&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将其移至函数TableStmt外部并在render内部将该函数称为</font></font><code>&lt;TableStmt/&gt;</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西神奇</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><code>useStyles</code> is a React hook which are meant to be used in functional components and can not be used in class components.</p>

<p><a href="https://reactjs.org/docs/hooks-overview.html" rel="nofollow noreferrer">From React:</a></p>

<blockquote>
  <p>Hooks let you use state and other React features without writing a
  class.</p>
</blockquote>

<p>Also you should call <code>useStyles</code> hook <a href="https://material-ui.com/styles/basics/" rel="nofollow noreferrer">inside your function</a> like;</p>

<pre><code>function Welcome() {<font></font>
  const classes = useStyles();<font></font>
...<font></font>
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要使用钩子，这是将您的简短类组件更改为功能组件；</font></font></p>

<pre><code>import React from "react";<font></font>
import { Container, makeStyles } from "@material-ui/core";<font></font>
<font></font>
const useStyles = makeStyles({<font></font>
  root: {<font></font>
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",<font></font>
    border: 0,<font></font>
    borderRadius: 3,<font></font>
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",<font></font>
    color: "white",<font></font>
    height: 48,<font></font>
    padding: "0 30px"<font></font>
  }<font></font>
});<font></font>
<font></font>
function Welcome() {<font></font>
  const classes = useStyles();<font></font>
  return (<font></font>
    &lt;Container className={classes.root}&gt;<font></font>
      &lt;h1&gt;Welcome&lt;/h1&gt;<font></font>
    &lt;/Container&gt;<font></font>
  );<font></font>
}<font></font>
<font></font>
export default Welcome;<font></font>
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">🏓在↓CodeSandBox↓上</font></font></p>

<p><a href="https://codesandbox.io/s/eager-swartz-558tk?fontsize=14&amp;hidenavigation=1&amp;theme=dark" rel="nofollow noreferrer"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="编辑React钩子"></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
