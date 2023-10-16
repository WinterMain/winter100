---
layout: question
title:  在react-router-dom中withRouter有什么用？
date:   2020-03-13T12:15:14.000Z
description: 我有时看到人们在withRouter导出组件时将它们包装起来：import { withRouter } from 'react-router-do...
img: 
author: 理查德十三Davaid
category: question
answer: 4
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我</font></font><a href="https://github.com/lore/www.lorejs.org/blob/41f9b34a67cb676984daf0cda4126a6bf4e14fcd/src/pages/cli/lore-generate-component/options/router.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时看到</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">人们在</font></font><code>withRouter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导出</font><font style="vertical-align: inherit;">组件</font><font style="vertical-align: inherit;">时将它们</font><font style="vertical-align: inherit;">包装</font><font style="vertical-align: inherit;">起来：</font></font></p>

<pre class="lang-js prettyprint-override"><code>import { withRouter } from 'react-router-dom';<font></font>
<font></font>
class Foo extends React.Component {<font></font>
  // ...<font></font>
}<font></font>
<font></font>
export default withRouter(Foo);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是做什么用的，什么时候应该使用？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1534篇《在react-router-dom中withRouter有什么用？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">withRouter是一个高阶组件，它将传递最接近的路线以访问某些属性，如位置和道具的匹配，只有赋予组件位于组件中的属性，才能访问该属性 </font></font></p>

<pre><code>&lt;Route to="/app" component={helo} history ={history} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且匹配和位置繁荣，以便能够更改位置并使用this.props.history.push，应该为每个组件属性提供该属性。必须提供，但是使用WithRouter时，可以访问位置并进行匹配，而无需添加属性历史记录可以访问方向，而无需为每个路径添加属性历史记录。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云西里神乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>withRouter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个更高阶的组件，</font><font style="vertical-align: inherit;">它会在渲染时</font><font style="vertical-align: inherit;">将最接近路径的</font></font><code>match</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，current </font></font><code>location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>history</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">props传递给包装的组件。</font><font style="vertical-align: inherit;">只需将组件连接到路由器即可。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并非所有组件（尤其是共享组件）都可以访问此类路由器的道具。</font><font style="vertical-align: inherit;">在其包装的组件内部，您将能够访问</font></font><code>location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prop并获取更多信息，</font></font><code>location.pathname</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或使用将用户重定向到其他url </font></font><code>this.props.history.push</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是他们github页面上的完整示例： </font></font></p>

<pre><code>import React from "react";<font></font>
import PropTypes from "prop-types";<font></font>
import { withRouter } from "react-router";<font></font>
<font></font>
// A simple component that shows the pathname of the current location<font></font>
class ShowTheLocation extends React.Component {<font></font>
  static propTypes = {<font></font>
    match: PropTypes.object.isRequired,<font></font>
    location: PropTypes.object.isRequired,<font></font>
    history: PropTypes.object.isRequired<font></font>
  };<font></font>
<font></font>
  render() {<font></font>
    const { match, location, history } = this.props;<font></font>
<font></font>
    return &lt;div&gt;You are now at {location.pathname}&lt;/div&gt;;<font></font>
  }<font></font>
}<font></font>
<font></font>
// Create a new component that is "connected" (to borrow redux<font></font>
// terminology) to the router.<font></font>
const ShowTheLocationWithRouter = withRouter(ShowTheLocation);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://github.com/ReactTraining/react-router/blob/e634f0bad7796d128a4c4e2c4678487dd7256be2/packages/react-router/docs/api/withRouter.md" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以找到更多信息</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>withRouter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">高阶组件使您可以访问</font></font><code>history</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象的属性和最接近</font></font><code>&lt;Route&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的匹配项。</font></font><code>withRouter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将通更新</font></font><code>match</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>history</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具给被包装的成分时，它呈现。</font></font></p>

<pre class="lang-js prettyprint-override"><code>import React from "react";<font></font>
import PropTypes from "prop-types";<font></font>
import { withRouter } from "react-router";<font></font>
<font></font>
// A simple component that shows the pathname of the current location<font></font>
class ShowTheLocation extends React.Component {<font></font>
  static propTypes = {<font></font>
    match: PropTypes.object.isRequired,<font></font>
    location: PropTypes.object.isRequired,<font></font>
    history: PropTypes.object.isRequired<font></font>
  };<font></font>
<font></font>
  render() {<font></font>
    const { match, location, history } = this.props;<font></font>
<font></font>
    return &lt;div&gt;You are now at {location.pathname}&lt;/div&gt;;<font></font>
  }<font></font>
}<font></font>
<font></font>
// Create a new component that is "connected" (to borrow redux<font></font>
// terminology) to the router.<font></font>
const ShowTheLocationWithRouter = withRouter(ShowTheLocation);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德十三Davaid</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您在应用程序中包含主页组件时，通常将其包装在这样的</font></font><code>&lt;Route&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件中：</font></font></p>

<pre><code>&lt;Route path="/movies" component={MoviesIndex} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，</font></font><code>MoviesIndex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件就可以访问，</font></font><code>this.props.history</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此可以使用重定向用户</font></font><code>this.props.history.push</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">某些组件（通常是标头组件）出现在每个页面上，因此没有包装在中</font></font><code>&lt;Route&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>render() {<font></font>
  return (&lt;Header /&gt;);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着标题不能重定向用户。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要解决此问题，可以在</font></font><a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md" rel="noreferrer"><code>withRouter</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导出时</font><font style="vertical-align: inherit;">将标头组件包装在一个</font><font style="vertical-align: inherit;">函数中：</font></font></p>

<pre><code>export default withRouter(Header)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这使</font></font><code>Header</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件可以访问</font></font><code>this.props.history</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这意味着标题现在可以重定向用户。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
