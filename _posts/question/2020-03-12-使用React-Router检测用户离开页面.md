---
layout: question
title:  使用React-Router检测用户离开页面
date:   2020-03-12T09:34:27.000Z
description: 我希望我的ReactJS应用在离开特定页面时通知用户。特别是一条弹出消息，提醒他/她进行以下操作：  “更改已保存，但尚未发布。现在执行吗？”...
img: 
author: 飞云LEY
category: question
answer: 2
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望我的ReactJS应用在离开特定页面时通知用户。</font><font style="vertical-align: inherit;">特别是一条弹出消息，提醒他/她进行以下操作：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“更改已保存，但尚未发布。现在执行吗？”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我应该在</font></font><code>react-router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全局范围内</font><font style="vertical-align: inherit;">触发此操作</font><font style="vertical-align: inherit;">，还是可以在react页面/组件内完成此操作？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还没有发现任何关于后者的信息，我宁愿避免使用第一个。</font><font style="vertical-align: inherit;">除非当然是它的规范，否则这使我想知道如何执行这样的事情而不必向用户可以访问的所有其他可能的页面添加代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">欢迎有任何见解，谢谢！</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1222篇《使用React-Router检测用户离开页面》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用history.listen</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如下面的例子：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的组件中</font></font></p>

<pre><code>componentWillMount() {<font></font>
    this.props.history.listen(() =&gt; {<font></font>
      // Detecting, user has changed URL<font></font>
      console.info(this.props.history.location.pathname);<font></font>
    });<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅路易</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用此提示。</font></font></p>

<pre><code>import React, { Component } from "react";<font></font>
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";<font></font>
<font></font>
function PreventingTransitionsExample() {<font></font>
  return (<font></font>
    &lt;Router&gt;<font></font>
      &lt;div&gt;<font></font>
        &lt;ul&gt;<font></font>
          &lt;li&gt;<font></font>
            &lt;Link to="/"&gt;Form&lt;/Link&gt;<font></font>
          &lt;/li&gt;<font></font>
          &lt;li&gt;<font></font>
            &lt;Link to="/one"&gt;One&lt;/Link&gt;<font></font>
          &lt;/li&gt;<font></font>
          &lt;li&gt;<font></font>
            &lt;Link to="/two"&gt;Two&lt;/Link&gt;<font></font>
          &lt;/li&gt;<font></font>
        &lt;/ul&gt;<font></font>
        &lt;Route path="/" exact component={Form} /&gt;<font></font>
        &lt;Route path="/one" render={() =&gt; &lt;h3&gt;One&lt;/h3&gt;} /&gt;<font></font>
        &lt;Route path="/two" render={() =&gt; &lt;h3&gt;Two&lt;/h3&gt;} /&gt;<font></font>
      &lt;/div&gt;<font></font>
    &lt;/Router&gt;<font></font>
  );<font></font>
}<font></font>
<font></font>
class Form extends Component {<font></font>
  state = { isBlocking: false };<font></font>
<font></font>
  render() {<font></font>
    let { isBlocking } = this.state;<font></font>
<font></font>
    return (<font></font>
      &lt;form<font></font>
        onSubmit={event =&gt; {<font></font>
          event.preventDefault();<font></font>
          event.target.reset();<font></font>
          this.setState({<font></font>
            isBlocking: false<font></font>
          });<font></font>
        }}<font></font>
      &gt;<font></font>
        &lt;Prompt<font></font>
          when={isBlocking}<font></font>
          message={location =&gt;<font></font>
            `Are you sure you want to go to ${location.pathname}`<font></font>
          }<font></font>
        /&gt;<font></font>
<font></font>
        &lt;p&gt;<font></font>
          Blocking?{" "}<font></font>
          {isBlocking ? "Yes, click a link or the back button" : "Nope"}<font></font>
        &lt;/p&gt;<font></font>
<font></font>
        &lt;p&gt;<font></font>
          &lt;input<font></font>
            size="50"<font></font>
            placeholder="type something to block transitions"<font></font>
            onChange={event =&gt; {<font></font>
              this.setState({<font></font>
                isBlocking: event.target.value.length &gt; 0<font></font>
              });<font></font>
            }}<font></font>
          /&gt;<font></font>
        &lt;/p&gt;<font></font>
<font></font>
        &lt;p&gt;<font></font>
          &lt;button&gt;Submit to stop blocking&lt;/button&gt;<font></font>
        &lt;/p&gt;<font></font>
      &lt;/form&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
export default PreventingTransitionsExample;<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
