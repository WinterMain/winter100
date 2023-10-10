---
layout: question
title:  如何使用react-router重定向到另一个路由？
date:   2020-03-13T09:02:35.000Z
description: 我正在尝试使用react-router（版本^ 1.0.3）来重定向到另一个视图，这让我很累。import React from 'react';i...
img: 
author: 阿飞GilGreen
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用react-router（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本^ 1.0.3</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）来重定向到另一个视图，这让我很累。</font></font></p>

<pre><code>import React from 'react';<font></font>
import {Router, Route, Link, RouteHandler} from 'react-router';<font></font>
<font></font>
<font></font>
class HomeSection extends React.Component {<font></font>
<font></font>
  static contextTypes = {<font></font>
    router: PropTypes.func.isRequired<font></font>
  };<font></font>
<font></font>
  constructor(props, context) {<font></font>
    super(props, context);<font></font>
  }<font></font>
<font></font>
  handleClick = () =&gt; {<font></font>
    console.log('HERE!', this.contextTypes);<font></font>
    // this.context.location.transitionTo('login');<font></font>
  };<font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;Grid&gt;<font></font>
        &lt;Row className="text-center"&gt;          <font></font>
          &lt;Col md={12} xs={12}&gt;<font></font>
            &lt;div className="input-group"&gt;<font></font>
              &lt;span className="input-group-btn"&gt;<font></font>
                &lt;button onClick={this.handleClick} type="button"&gt;<font></font>
                &lt;/button&gt;<font></font>
              &lt;/span&gt;<font></font>
            &lt;/div&gt;<font></font>
          &lt;/Col&gt;<font></font>
        &lt;/Row&gt;<font></font>
      &lt;/Grid&gt;<font></font>
    );<font></font>
  }<font></font>
};<font></font>
<font></font>
HomeSection.contextTypes = {<font></font>
  location() {<font></font>
    React.PropTypes.func.isRequired<font></font>
  }<font></font>
}<font></font>
<font></font>
export default HomeSection;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我所需要的只是将使用发送到'/ login'就是这样。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我能做什么 ？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制台错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未捕获的ReferenceError：未定义PropTypes</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用我的路线归档</font></font></p>

<pre><code>// LIBRARY<font></font>
/*eslint-disable no-unused-vars*/<font></font>
import React from 'react';<font></font>
/*eslint-enable no-unused-vars*/<font></font>
import {Route, IndexRoute} from 'react-router';<font></font>
<font></font>
// COMPONENT<font></font>
import Application from './components/App/App';<font></font>
import Contact from './components/ContactSection/Contact';<font></font>
import HomeSection from './components/HomeSection/HomeSection';<font></font>
import NotFoundSection from './components/NotFoundSection/NotFoundSection';<font></font>
import TodoSection from './components/TodoSection/TodoSection';<font></font>
import LoginForm from './components/LoginForm/LoginForm';<font></font>
import SignupForm from './components/SignupForm/SignupForm';<font></font>
<font></font>
export default (<font></font>
    &lt;Route component={Application} path='/'&gt;<font></font>
      &lt;IndexRoute component={HomeSection} /&gt;<font></font>
      &lt;Route component={HomeSection} path='home' /&gt;<font></font>
      &lt;Route component={TodoSection} path='todo' /&gt;<font></font>
      &lt;Route component={Contact} path='contact' /&gt;<font></font>
      &lt;Route component={LoginForm} path='login' /&gt;<font></font>
      &lt;Route component={SignupForm} path='signup' /&gt;<font></font>
      &lt;Route component={NotFoundSection} path='*' /&gt;<font></font>
    &lt;/Route&gt;<font></font>
);<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
