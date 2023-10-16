---
layout: question
title:  如何在React Router中将DefaultRoute设置为另一个路由
date:   2020-03-12T12:10:40.000Z
description: 我有以下内容：  <Route name="app" path="/" handler={App}>    <Route name="dashboa...
img: 
author: JinJin乐逆天
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有以下内容：</font></font></p>

<pre><code>  &lt;Route name="app" path="/" handler={App}&gt;<font></font>
    &lt;Route name="dashboards" path="dashboards" handler={Dashboard}&gt;<font></font>
      &lt;Route name="exploreDashboard" path="exploreDashboard" handler={ExploreDashboard} /&gt;<font></font>
      &lt;Route name="searchDashboard" path="searchDashboard" handler={SearchDashboard} /&gt;<font></font>
      &lt;DefaultRoute handler={DashboardExplain} /&gt;<font></font>
    &lt;/Route&gt;<font></font>
    &lt;DefaultRoute handler={SearchDashboard} /&gt;<font></font>
  &lt;/Route&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用DefaultRoute时，由于任何* Dashboard需要在Dashboard中呈现，因此SearchDashboard呈现不正确。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在“应用”路由中将DefaultRoute指向路由“ searchDashboard”。</font><font style="vertical-align: inherit;">这是我可以使用React Router进行的操作，还是应该为此使用常规Javascript（用于页面重定向）？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，如果用户转到主页，我想将其发送给搜索仪表板。</font><font style="vertical-align: inherit;">所以我想我正在寻找一个等效于React Router的功能</font></font><code>window.location.replace("mygreathostname.com/#/dashboards/searchDashboard");</code></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1295篇《如何在React Router中将DefaultRoute设置为另一个路由》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三小哥Jim</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于即将进入2017年的用户，这是具有以下特点的新解决方案</font></font><code>IndexRedirect</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;Route path="/" component={App}&gt;<font></font>
  &lt;IndexRedirect to="/welcome" /&gt;<font></font>
  &lt;Route path="welcome" component={Welcome} /&gt;<font></font>
  &lt;Route path="about" component={About} /&gt;<font></font>
&lt;/Route&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首选方法是使用</font></font><a href="https://github.com/ReactTraining/react-router/blob/master/docs/guides/IndexRoutes.md" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Router的</font><a href="https://github.com/ReactTraining/react-router/blob/master/docs/guides/IndexRoutes.md" rel="nofollow noreferrer"><font style="vertical-align: inherit;">IndexRoutes</font></a><font style="vertical-align: inherit;">组件</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以像这样使用它（取自上面链接的react router文档）：</font></font></p>

<pre><code>&lt;Route path="/" component={App}&gt;<font></font>
    &lt;IndexRedirect to="/welcome" /&gt;<font></font>
    &lt;Route path="welcome" component={Welcome} /&gt;<font></font>
    &lt;Route path="about" component={About} /&gt;<font></font>
&lt;/Route&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>import { Route, Redirect } from "react-router-dom";<font></font>
<font></font>
class App extends Component {<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;div&gt;<font></font>
        &lt;Route path='/'&gt;<font></font>
          &lt;Redirect to="/something" /&gt;<font></font>
        &lt;/Route&gt;<font></font>
//rest of code here<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样可以使您在本地主机上加载服务器时将您重定向到/ something </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙逆天Pro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了类似的问题；</font><font style="vertical-align: inherit;">如果没有路由处理程序匹配，我想要一个默认的路由处理程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的解决方案是使用通配符作为路径值。</font><font style="vertical-align: inherit;">即，还要确保它是您的路线定义中的最后一个条目。</font></font></p>

<pre><code>&lt;Route path="/" component={App} &gt;<font></font>
    &lt;IndexRoute component={HomePage} /&gt;<font></font>
    &lt;Route path="about" component={AboutPage} /&gt;<font></font>
    &lt;Route path="home" component={HomePage} /&gt;<font></font>
    &lt;Route path="*" component={HomePage} /&gt;<font></font>
&lt;/Route&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用的问题</font></font><code>&lt;Redirect from="/" to="searchDashboard" /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是，如果您使用其他URL，例如</font></font><code>/indexDashboard</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果用户点击刷新或获得发送给他们的URL，则</font></font><code>/searchDashboard</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何</font><font style="vertical-align: inherit;">该用户都会被重定向到</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不希望用户刷新网站或发送URL，请使用以下命令：</font></font></p>

<pre><code>&lt;Route exact path="/" render={() =&gt; (<font></font>
    &lt;Redirect to="/searchDashboard"/&gt;<font></font>
)}/&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>searchDashboard</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在登录后</font><font style="vertical-align: inherit;">使用此命令</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;Route exact path="/" render={() =&gt; (<font></font>
  loggedIn ? (<font></font>
    &lt;Redirect to="/searchDashboard"/&gt;<font></font>
  ) : (<font></font>
    &lt;Redirect to="/login"/&gt;<font></font>
  )<font></font>
)}/&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L卡卡西米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code> &lt;Route name="app" path="/" handler={App}&gt;<font></font>
    &lt;Route name="dashboards" path="dashboards" handler={Dashboard}&gt;<font></font>
      &lt;Route name="exploreDashboard" path="exploreDashboard" handler={ExploreDashboard} /&gt;<font></font>
      &lt;Route name="searchDashboard" path="searchDashboard" handler={SearchDashboard} /&gt;<font></font>
      &lt;DefaultRoute handler={DashboardExplain} /&gt;<font></font>
    &lt;/Route&gt;<font></font>
    &lt;Redirect from="/*" to="/" /&gt;<font></font>
  &lt;/Route&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">乔纳森的答案似乎对我没有用。</font><font style="vertical-align: inherit;">我正在使用React v0.14.0和React Router v1.0.0-rc3。</font><font style="vertical-align: inherit;">这样做：</font></font></p>

<p><code>&lt;IndexRoute component={Home}/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，在马修案中，我相信他会想要：</font></font></p>

<p><code>&lt;IndexRoute component={SearchDashboard}/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源：</font><a href="https://github.com/rackt/react-router/blob/master/docs/guides/advanced/ComponentLifecycle.md"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/rackt/react-router/blob/master/docs/guides/advanced/ComponentLifecycle.md"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/rackt/react-router/blob/master/docs/guides/advanced/ComponentLifecycle.md</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我错误地尝试使用以下方法创建默认路径：</font></font></p>

<pre><code>&lt;IndexRoute component={DefaultComponent} /&gt;<font></font>
&lt;Route path="/default-path" component={DefaultComponent} /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这会创建呈现相同组件的两条不同路径。</font><font style="vertical-align: inherit;">这不仅没有意义，而且会导致UI出现毛刺，即，当您</font></font><code>&lt;Link/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于</font><font style="vertical-align: inherit;">设计</font><font style="vertical-align: inherit;">元素时</font></font><code>this.history.isActive()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建默认路由（不是索引路由）的正确方法是使用</font></font><code>&lt;IndexRedirect/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;IndexRedirect to="/default-path" /&gt;<font></font>
&lt;Route path="/default-path" component={DefaultComponent} /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是基于react-router 1.0.0的。</font><font style="vertical-align: inherit;">参见</font></font><a href="https://github.com/rackt/react-router/blob/master/modules/IndexRedirect.js"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/rackt/react-router/blob/master/modules/IndexRedirect.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯神无</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用Redirect代替DefaultRoute</font></font></p>

<pre><code>&lt;Redirect from="/" to="searchDashboard" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新2019-08-09为避免刷新问题，请改用此，这要感谢Ogglas</font></font></p>

<pre><code>&lt;Redirect exact from="/" to="searchDashboard" /&gt;
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
