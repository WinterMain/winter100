---
layout: question
title:  使用React Router以编程方式导航
date:   2020-03-09T14:29:58.000Z
description: 随着react-router我可以使用Link元素创建的原生处理反应路由器链接。我在内部看到它的呼唤this.context.transitionTo...
img: 
author: 蛋蛋猿
category: question
answer: 7
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随着</font></font><code>react-router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以使用</font></font><code>Link</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素创建的原生处理反应路由器链接。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在内部看到它的呼唤</font></font><code>this.context.transitionTo(...)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想从下拉列表中进行导航，而不是从链接中进行导航。</font><font style="vertical-align: inherit;">如何在代码中执行此操作？</font><font style="vertical-align: inherit;">什么</font></font><code>this.context</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">啊</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看到了</font></font><code>Navigation</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">mixin，但是没有mixin可以做到吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第307篇《使用React Router以编程方式导航》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near神乐路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-router-dom：5.1.2</font></font></strong> </p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该站点有3个页面，所有页面均在浏览器中动态呈现。 </font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管页面永远不会刷新，但是请注意当您浏览站点时，React Router如何使URL保持最新。</font><font style="vertical-align: inherit;">这样可以保留浏览器的历史记录，确保后退按钮和书签之类的内容正常运行</font></font></p></li>
<li><p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开关</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来通过其所有的子元素，并呈现第一个其路径当前URL匹配。</font><font style="vertical-align: inherit;">任何时候都可以使用多条路线，但是一次只希望其中一条呈现</font></font></em></p></li>
</ul>

<pre><code>import React from "react";<font></font>
import {<font></font>
  BrowserRouter as Router,<font></font>
  Switch,<font></font>
  Route,<font></font>
  Link<font></font>
} from "react-router-dom";<font></font>
<font></font>
<font></font>
<font></font>
export default function BasicExample() {<font></font>
  return (<font></font>
    &lt;Router&gt;<font></font>
      &lt;div&gt;<font></font>
        &lt;ul&gt;<font></font>
          &lt;li&gt;<font></font>
            &lt;Link to="/"&gt;Home&lt;/Link&gt;<font></font>
          &lt;/li&gt;<font></font>
          &lt;li&gt;<font></font>
            &lt;Link to="/about"&gt;About&lt;/Link&gt;<font></font>
          &lt;/li&gt;<font></font>
          &lt;li&gt;<font></font>
            &lt;Link to="/dashboard"&gt;Dashboard&lt;/Link&gt;<font></font>
          &lt;/li&gt;<font></font>
        &lt;/ul&gt;<font></font>
<font></font>
        &lt;hr /&gt;<font></font>
<font></font>
        &lt;Switch&gt;<font></font>
          &lt;Route exact path="/"&gt;<font></font>
            &lt;Home /&gt;<font></font>
          &lt;/Route&gt;<font></font>
          &lt;Route path="/about"&gt;<font></font>
            &lt;About /&gt;<font></font>
          &lt;/Route&gt;<font></font>
          &lt;Route path="/dashboard"&gt;<font></font>
            &lt;Dashboard /&gt;<font></font>
          &lt;/Route&gt;<font></font>
        &lt;/Switch&gt;<font></font>
      &lt;/div&gt;<font></font>
    &lt;/Router&gt;<font></font>
  );<font></font>
}<font></font>
<font></font>
// You can think of these components as "pages"<font></font>
// in your app.<font></font>
<font></font>
function Home() {<font></font>
  return (<font></font>
    &lt;div&gt;<font></font>
      &lt;h2&gt;Home&lt;/h2&gt;<font></font>
    &lt;/div&gt;<font></font>
  );<font></font>
}<font></font>
<font></font>
function About() {<font></font>
  return (<font></font>
    &lt;div&gt;<font></font>
      &lt;h2&gt;About&lt;/h2&gt;<font></font>
    &lt;/div&gt;<font></font>
  );<font></font>
}<font></font>
<font></font>
function Dashboard() {<font></font>
  return (<font></font>
    &lt;div&gt;<font></font>
      &lt;h2&gt;Dashboard&lt;/h2&gt;<font></font>
    &lt;/div&gt;<font></font>
  );<font></font>
}```<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryGil</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用，不需要特殊的进口：</font></font></p>

<pre><code>&lt;input <font></font>
  type="button" <font></font>
  name="back" <font></font>
  id="back" <font></font>
  class="btn btn-primary" <font></font>
  value="Back" <font></font>
  onClick={() =&gt; { this.props.history.goBack() }} <font></font>
/&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅小哥</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以</font></font><a href="https://reacttraining.com/react-router/web/api/Hooks/usehistory" rel="nofollow noreferrer"><code>useHistory</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在无状态组件中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">挂钩。</font><font style="vertical-align: inherit;">文档中的示例。</font></font></p>

<pre><code>import { useHistory } from "react-router"<font></font>
<font></font>
function HomeButton() {<font></font>
  const history = useHistory()<font></font>
<font></font>
  return (<font></font>
    &lt;button type="button" onClick={() =&gt; history.push("/home")}&gt;<font></font>
      Go home<font></font>
    &lt;/button&gt;<font></font>
  )<font></font>
}<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：添加了挂钩</font></font><a href="https://github.com/ReactTraining/react-router/releases/tag/v5.1.0" rel="nofollow noreferrer"><code>react-router@5.1.0</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并要求</font></font><code>react@&gt;=16.8</code></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Green</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React-Router V4</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是版本4，则可以使用我的库（Shameless插件），您只需在其中分配一个动作，一切就可以正常工作！</font></font></p>

<pre><code>dispatch(navigateTo("/aboutUs"));
</code></pre>

<p><a href="https://www.npmjs.com/package/trippler" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">特里普勒</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据先前的</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
何塞·安东尼奥·波斯托戈和本·惠勒</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
的</font><font style="vertical-align: inherit;">答案</font><font style="vertical-align: inherit;">的新颖性？</font><font style="vertical-align: inherit;">用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Typescript</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编写，</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
并使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> decorator</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">静态</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性/字段  </font></font></p>

<pre class="lang-js prettyprint-override"><code>import * as React from "react";<font></font>
import Component = React.Component;<font></font>
import { withRouter } from "react-router";<font></font>
<font></font>
export interface INavigatorProps {<font></font>
    router?: ReactRouter.History.History;<font></font>
}<font></font>
<font></font>
/**<font></font>
 * Note: goes great with mobx <font></font>
 * @inject("something") @withRouter @observer<font></font>
 */<font></font>
@withRouter<font></font>
export class Navigator extends Component&lt;INavigatorProps, {}&gt;{<font></font>
    navigate: (to: string) =&gt; void;<font></font>
    constructor(props: INavigatorProps) {<font></font>
        super(props);<font></font>
        let self = this;<font></font>
        this.navigate = (to) =&gt; self.props.router.push(to);<font></font>
    }<font></font>
    render() {<font></font>
        return (<font></font>
            &lt;ul&gt;<font></font>
                &lt;li onClick={() =&gt; this.navigate("/home")}&gt;<font></font>
                    Home<font></font>
                &lt;/li&gt;<font></font>
                &lt;li onClick={() =&gt; this.navigate("/about")}&gt;<font></font>
                    About<font></font>
                &lt;/li&gt;<font></font>
            &lt;/ul&gt;<font></font>
        )<font></font>
    }<font></font>
}<font></font>
<font></font>
/**<font></font>
 * Non decorated <font></font>
 */<font></font>
export class Navigator2 extends Component&lt;INavigatorProps, {}&gt; {<font></font>
<font></font>
    static contextTypes = {<font></font>
        router: React.PropTypes.object.isRequired,<font></font>
    };<font></font>
<font></font>
    navigate: (to: string) =&gt; void;<font></font>
    constructor(props: INavigatorProps, context: any) {<font></font>
        super(props, context);<font></font>
        let s = this;<font></font>
        this.navigate = (to) =&gt;<font></font>
            s.context.router.push(to);<font></font>
    }<font></font>
    render() {<font></font>
        return (<font></font>
            &lt;ul&gt;<font></font>
                &lt;li onClick={() =&gt; this.navigate("/home")}&gt;<font></font>
                    Home<font></font>
                &lt;/li&gt;<font></font>
                &lt;li onClick={() =&gt; this.navigate("/about")}&gt;<font></font>
                    About<font></font>
                &lt;/li&gt;<font></font>
            &lt;/ul&gt;<font></font>
        )<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论今天安装了什么npm。</font><font style="vertical-align: inherit;">“反应路由器”：“ ^ 3.0.0”和</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
“ @ types /反应路由器”：“ ^ 2.0.41”</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门老丝Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React Router v4中。</font><font style="vertical-align: inherit;">我遵循两种方式以编程方式进行路由。</font></font></p>

<pre><code>1. this.props.history.push("/something/something")<font></font>
2. this.props.history.replace("/something/something")<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替换历史记录堆栈上的当前条目</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要获得道具的历史记录，您可能需要用 </font></font></p>

<blockquote>
  <p><a href="https://reacttraining.com/react-router/core/api/withRouter" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与路由器</font></font></a> </p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此答案仅涵盖1.0之前的ReactRouter版本</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后，我将以1.0.0-rc1用例更新此答案！</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以不使用mixins。</font></font></p>

<pre class="lang-js prettyprint-override"><code>let Authentication = React.createClass({<font></font>
  contextTypes: {<font></font>
    router: React.PropTypes.func<font></font>
  },<font></font>
  handleClick(e) {<font></font>
    e.preventDefault();<font></font>
    this.context.router.transitionTo('/');<font></font>
  },<font></font>
  render(){<font></font>
    return (&lt;div onClick={this.handleClick}&gt;Click me!&lt;/div&gt;);<font></font>
  }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有上下文的陷阱是，除非您</font></font><code>contextTypes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在类上</font><font style="vertical-align: inherit;">定义，否则无法访问</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至于什么是上下文，它是一个像道具一样的对象，它从父级传递到子级，但是隐式地传递下来，而不必每次都重新声明道具。</font><font style="vertical-align: inherit;">参见</font></font><a href="https://www.tildedave.com/2014/11/15/introduction-to-contexts-in-react-js.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.tildedave.com/2014/11/15/introduction-to-contexts-in-react-js.html</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
