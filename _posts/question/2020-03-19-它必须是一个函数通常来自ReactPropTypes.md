---
layout: question
title:  它必须是一个函数，通常来自React.PropTypes
date:   2020-03-19T03:45:17.000Z
description: 我想将字符串从Main传递到Header。成功，但警告。我是React的初学者，所以我不知道这it must be a function意味着什么。有...
img: 
author: HarryStafan
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想将字符串从Main传递到Header。</font><font style="vertical-align: inherit;">成功，但警告。</font><font style="vertical-align: inherit;">我是React的初学者，所以我不知道这</font></font><code>it must be a function</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意味着</font><font style="vertical-align: inherit;">什么</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人知道如何解决此警告吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告是：</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/22944/images/thumbnails/1584589390582.png" data-src="https://www.samyoc.com//uploads/users/22944/images/1584589390582.png"><img src="https://i.stack.imgur.com/4baOJ.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的代码如下：</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Main.js</font></font></em></p>

<pre><code>import React from 'react';<font></font>
<font></font>
import Header from './Header';<font></font>
import AppList from './AppList/AppList';<font></font>
import Footer from './Footer';<font></font>
<font></font>
const propTypes = {<font></font>
  mainInfo: React.PropTypes.shape({<font></font>
    title: React.PropTypes.string.isRequired,<font></font>
    apps: React.PropTypes.array.isRequired,<font></font>
  }),<font></font>
};<font></font>
<font></font>
class Main extends React.Component {<font></font>
  static methodsAreOk() {<font></font>
    return true;<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        &lt;Header title={this.props.mainInfo.title} /&gt;<font></font>
        &lt;AppList apps={this.props.mainInfo.apps} /&gt;<font></font>
        &lt;Footer /&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
Main.propTypes = propTypes;<font></font>
<font></font>
export default Main;<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Header.js</font></font></em></p>

<pre><code>import React from 'react';<font></font>
<font></font>
const propTypes = {<font></font>
  title: React.PropTypes.string.isRequred,<font></font>
};<font></font>
<font></font>
class Header extends React.Component {<font></font>
  static methodsAreOk() {<font></font>
    return true;<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;div className="header"&gt;<font></font>
        &lt;h1&gt;{this.props.title}&lt;/h1&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
Header.propTypes = propTypes;<font></font>
<font></font>
export default Header;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2321篇《它必须是一个函数，通常来自React.PropTypes》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
