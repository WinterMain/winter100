---
layout: question
title:  使用React Router V4 / V5的嵌套路由
date:   2020-03-10T02:50:12.000Z
description: 我目前正在使用React Router v4来嵌套路由。最接近的示例是React-Router v4文档中的route配置  。我想将我的应用分...
img: 
author: JinJin小小
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我目前正在使用React Router v4来嵌套路由。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最接近的示例是</font></font><a href="https://react-router.now.sh/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React-Router v4文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的route配置 
 </font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想将我的应用分为2个不同的部分。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前端和管理区域。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在想这样的事情：</font></font></p>

<pre><code>&lt;Match pattern="/" component={Frontpage}&gt;<font></font>
  &lt;Match pattern="/home" component={HomePage} /&gt;<font></font>
  &lt;Match pattern="/about" component={AboutPage} /&gt;<font></font>
&lt;/Match&gt;<font></font>
&lt;Match pattern="/admin" component={Backend}&gt;<font></font>
  &lt;Match pattern="/home" component={Dashboard} /&gt;<font></font>
  &lt;Match pattern="/users" component={UserPage} /&gt;<font></font>
&lt;/Match&gt;<font></font>
&lt;Miss component={NotFoundPage} /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前端的布局和样式与管理区域不同。</font><font style="vertical-align: inherit;">因此，在首页中，回家的路线大约应该是子路线。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ home</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该呈现在Frontpage组件中，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ admin / home</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该呈现在Backend组件中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试了一些变体，但始终以不打/ home或/ admin / home结尾。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑-19.04.2017</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为这篇文章现在有很多观点，所以我用最终解决方案对其进行了更新。</font><font style="vertical-align: inherit;">希望对您有所帮助。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑-08.05.2017</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除了旧的解决方案</font></font></p>

<p><strong>Final solution:</strong></p>

<p>This is the final solution I am using right now. This example also has a global error component like a traditional 404 page.</p>

<pre><code>import React, { Component } from 'react';<font></font>
import { Switch, Route, Redirect, Link } from 'react-router-dom';<font></font>
<font></font>
const Home = () =&gt; &lt;div&gt;&lt;h1&gt;Home&lt;/h1&gt;&lt;/div&gt;;<font></font>
const User = () =&gt; &lt;div&gt;&lt;h1&gt;User&lt;/h1&gt;&lt;/div&gt;;<font></font>
const Error = () =&gt; &lt;div&gt;&lt;h1&gt;Error&lt;/h1&gt;&lt;/div&gt;<font></font>
<font></font>
const Frontend = props =&gt; {<font></font>
  console.log('Frontend');<font></font>
  return (<font></font>
    &lt;div&gt;<font></font>
      &lt;h2&gt;Frontend&lt;/h2&gt;<font></font>
      &lt;p&gt;&lt;Link to="/"&gt;Root&lt;/Link&gt;&lt;/p&gt;<font></font>
      &lt;p&gt;&lt;Link to="/user"&gt;User&lt;/Link&gt;&lt;/p&gt;<font></font>
      &lt;p&gt;&lt;Link to="/admin"&gt;Backend&lt;/Link&gt;&lt;/p&gt;<font></font>
      &lt;p&gt;&lt;Link to="/the-route-is-swiggity-swoute"&gt;Swiggity swooty&lt;/Link&gt;&lt;/p&gt;<font></font>
      &lt;Switch&gt;<font></font>
        &lt;Route exact path='/' component={Home}/&gt;<font></font>
        &lt;Route path='/user' component={User}/&gt;<font></font>
        &lt;Redirect to={{<font></font>
          state: { error: true }<font></font>
        }} /&gt;<font></font>
      &lt;/Switch&gt;<font></font>
      &lt;footer&gt;Bottom&lt;/footer&gt;<font></font>
    &lt;/div&gt;<font></font>
  );<font></font>
}<font></font>
<font></font>
const Backend = props =&gt; {<font></font>
  console.log('Backend');<font></font>
  return (<font></font>
    &lt;div&gt;<font></font>
      &lt;h2&gt;Backend&lt;/h2&gt;<font></font>
      &lt;p&gt;&lt;Link to="/admin"&gt;Root&lt;/Link&gt;&lt;/p&gt;<font></font>
      &lt;p&gt;&lt;Link to="/admin/user"&gt;User&lt;/Link&gt;&lt;/p&gt;<font></font>
      &lt;p&gt;&lt;Link to="/"&gt;Frontend&lt;/Link&gt;&lt;/p&gt;<font></font>
      &lt;p&gt;&lt;Link to="/admin/the-route-is-swiggity-swoute"&gt;Swiggity swooty&lt;/Link&gt;&lt;/p&gt;<font></font>
      &lt;Switch&gt;<font></font>
        &lt;Route exact path='/admin' component={Home}/&gt;<font></font>
        &lt;Route path='/admin/user' component={User}/&gt;<font></font>
        &lt;Redirect to={{<font></font>
          state: { error: true }<font></font>
        }} /&gt;<font></font>
      &lt;/Switch&gt;<font></font>
      &lt;footer&gt;Bottom&lt;/footer&gt;<font></font>
    &lt;/div&gt;<font></font>
  );<font></font>
}<font></font>
<font></font>
class GlobalErrorSwitch extends Component {<font></font>
  previousLocation = this.props.location<font></font>
<font></font>
  componentWillUpdate(nextProps) {<font></font>
    const { location } = this.props;<font></font>
<font></font>
    if (nextProps.history.action !== 'POP'<font></font>
      &amp;&amp; (!location.state || !location.state.error)) {<font></font>
        this.previousLocation = this.props.location<font></font>
    };<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    const { location } = this.props;<font></font>
    const isError = !!(<font></font>
      location.state &amp;&amp;<font></font>
      location.state.error &amp;&amp;<font></font>
      this.previousLocation !== location // not initial render<font></font>
    )<font></font>
<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        {          <font></font>
          isError<font></font>
          ? &lt;Route component={Error} /&gt;<font></font>
          : &lt;Switch location={isError ? this.previousLocation : location}&gt;<font></font>
              &lt;Route path="/admin" component={Backend} /&gt;<font></font>
              &lt;Route path="/" component={Frontend} /&gt;<font></font>
            &lt;/Switch&gt;}<font></font>
      &lt;/div&gt;<font></font>
    )<font></font>
  }<font></font>
}<font></font>
<font></font>
class App extends Component {<font></font>
  render() {<font></font>
    return &lt;Route component={GlobalErrorSwitch} /&gt;<font></font>
  }<font></font>
}<font></font>
<font></font>
export default App;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第447篇《使用React Router V4 / V5的嵌套路由》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiGreen</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>interface IDefaultLayoutProps {<font></font>
    children: React.ReactNode<font></font>
}<font></font>
<font></font>
const DefaultLayout: React.SFC&lt;IDefaultLayoutProps&gt; = ({children}) =&gt; {<font></font>
    return (<font></font>
        &lt;div className="DefaultLayout"&gt;<font></font>
            {children}<font></font>
        &lt;/div&gt;<font></font>
    );<font></font>
}<font></font>
<font></font>
<font></font>
const LayoutRoute: React.SFC&lt;IDefaultLayoutRouteProps &amp; RouteProps&gt; = ({component: Component, layout: Layout, ...rest}) =&gt; {<font></font>
const handleRender = (matchProps: RouteComponentProps&lt;{}, StaticContext&gt;) =&gt; (<font></font>
        &lt;Layout&gt;<font></font>
            &lt;Component {...matchProps} /&gt;<font></font>
        &lt;/Layout&gt;<font></font>
    );<font></font>
<font></font>
    return (<font></font>
        &lt;Route {...rest} render={handleRender}/&gt;<font></font>
    );<font></font>
}<font></font>
<font></font>
const ScreenRouter = () =&gt; (<font></font>
    &lt;BrowserRouter&gt;<font></font>
        &lt;div&gt;<font></font>
            &lt;Link to="/"&gt;Home&lt;/Link&gt;<font></font>
            &lt;Link to="/counter"&gt;Counter&lt;/Link&gt;<font></font>
            &lt;Switch&gt;<font></font>
                &lt;LayoutRoute path="/" exact={true} layout={DefaultLayout} component={HomeScreen} /&gt;<font></font>
                &lt;LayoutRoute path="/counter" layout={DashboardLayout} component={CounterScreen} /&gt;<font></font>
            &lt;/Switch&gt;<font></font>
        &lt;/div&gt;<font></font>
    &lt;/BrowserRouter&gt;<font></font>
);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐蛋蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人想摆脱子路由路径中包装路径的前缀，那么我在TSX中创建了一个示例：</font><a href="https://stackoverflow.com/a/47891060/5517306"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://stackoverflow.com/a/47891060/5517306"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//stackoverflow.com/a/47891060/5517306</font></font></a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi梅</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font></font><code>Switch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在根路由之前</font><font style="vertical-align: inherit;">进行包装</font><font style="vertical-align: inherit;">并定义嵌套路由，</font><font style="vertical-align: inherit;">我成功地定义了嵌套路由</font><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-js prettyprint-override"><code>&lt;BrowserRouter&gt;<font></font>
  &lt;Switch&gt;<font></font>
    &lt;Route path="/staffs/:id/edit" component={StaffEdit} /&gt;<font></font>
    &lt;Route path="/staffs/:id" component={StaffShow} /&gt;<font></font>
    &lt;Route path="/staffs" component={StaffIndex} /&gt;<font></font>
  &lt;/Switch&gt;<font></font>
&lt;/BrowserRouter&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三A</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的确，为了嵌套路由，您需要将它们放置在Route的子组件中。 </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果您更喜欢使用内联语法</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是通过组件来分解</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Route，则可以为要嵌套在其下面的Route </font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">prop </font><font style="vertical-align: inherit;">提供功能组件</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;BrowserRouter&gt;<font></font>
<font></font>
  &lt;Route path="/" component={Frontpage} exact /&gt;<font></font>
  &lt;Route path="/home" component={HomePage} /&gt;<font></font>
  &lt;Route path="/about" component={AboutPage} /&gt;<font></font>
<font></font>
  &lt;Route<font></font>
    path="/admin"<font></font>
    render={({ match: { url } }) =&gt; (<font></font>
      &lt;&gt;<font></font>
        &lt;Route path={`${url}/`} component={Backend} exact /&gt;<font></font>
        &lt;Route path={`${url}/home`} component={Dashboard} /&gt;<font></font>
        &lt;Route path={`${url}/users`} component={UserPage} /&gt;<font></font>
      &lt;/&gt;<font></font>
    )}<font></font>
  /&gt;<font></font>
<font></font>
&lt;/BrowserRouter&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您对为什么</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该使用道具而不是</font></font><code>component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具</font><font style="vertical-align: inherit;">感兴趣</font><font style="vertical-align: inherit;">，那是因为它阻止了在每个渲染器上重新安装内联功能组件。</font></font><a href="https://reacttraining.com/react-router/web/api/Route/render-func" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多详细信息，</font><a href="https://reacttraining.com/react-router/web/api/Route/render-func" rel="noreferrer"><font style="vertical-align: inherit;">请参见文档</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><sub><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，该示例将嵌套的Routes包装在</font></font><a href="https://reactjs.org/docs/fragments.html#short-syntax" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Fragment中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在React 16之前，您可以改用容器</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></sub></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
