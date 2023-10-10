---
layout: question
title:  如何在react-router 2.0.0-rc5中获取当前路由
date:   2020-03-13T07:31:06.000Z
description: 我有一个如下的路由器：<Router history={hashHistory}>    <Route path="/" component={Ap...
img: 
author: 伽罗飞云
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个如下的路由器：</font></font></p>

<pre><code>&lt;Router history={hashHistory}&gt;<font></font>
    &lt;Route path="/" component={App}&gt;<font></font>
        &lt;IndexRoute component={Index}/&gt;<font></font>
        &lt;Route path="login" component={Login}/&gt;<font></font>
    &lt;/Route&gt;<font></font>
&lt;/Router&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我要实现的目标：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将用户重定向到（</font></font><code>/login</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果未登录）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果用户</font></font><code>/login</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已登录时</font><font style="vertical-align: inherit;">尝试访问</font><font style="vertical-align: inherit;">，请将其重定向到root</font></font><code>/</code></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以现在我想以检查用户的状态</font></font><code>App</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>componentDidMount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后做一些事情，如：</font></font></p>

<pre><code>if (!user.isLoggedIn) {<font></font>
    this.context.router.push('login')<font></font>
} else if(currentRoute == 'login') {<font></font>
    this.context.router.push('/')<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里的问题是我找不到获取当前路由的API。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现</font><font style="vertical-align: inherit;">建议使用Router.ActiveState mixin和路由处理程序来解决</font></font><a href="https://github.com/rackt/react-router/issues/119"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此已关闭的问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是现在似乎已弃用了这两个解决方案。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1384篇《如何在react-router 2.0.0-rc5中获取当前路由》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小小十三</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以同样的方式为我工作：</font></font></p>

<pre><code>...<font></font>
&lt;MyComponent {...this.props}&gt;<font></font>
  &lt;Route path="path1" name="pname1" component="FirstPath"&gt;<font></font>
  ...<font></font>
&lt;/MyComponent&gt;<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我可以在MyComponent函数中访问“ this.props.location.pathname”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我忘了那是我...）））以下链接介绍了更多有关制作导航栏的信息：</font></font><a href="https://stackoverflow.com/questions/42010053/react-router-this-props-location"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react router this.props.location</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOMandy</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于2017年有相同问题的所有用户，我可以通过以下方式解决：</font></font></p>

<pre><code>NavBar.contextTypes = {<font></font>
    router: React.PropTypes.object,<font></font>
    location: React.PropTypes.object<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并像这样使用它：</font></font></p>

<pre><code>componentDidMount () {<font></font>
    console.log(this.context.location.pathname);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Sam</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>App.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加以下代码并尝试</font></font></p>

<pre><code>window.location.pathname
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Sam</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从3.0.0版开始，您可以通过调用以下命令获取当前路由：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">this.context.router.location.pathname</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例代码如下：</font></font></p>

<pre><code>var NavLink = React.createClass({<font></font>
    contextTypes: {<font></font>
        router: React.PropTypes.object<font></font>
    },<font></font>
<font></font>
    render() {   <font></font>
        return (<font></font>
            &lt;Link {...this.props}&gt;&lt;/Link&gt;<font></font>
        );<font></font>
    }<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱GO</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读更多文档后，我找到了解决方案：</font></font></p>

<p><a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/location.md" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/location.md</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只需要访问</font></font><code>location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件实例</font><font style="vertical-align: inherit;">的注入属性</font><font style="vertical-align: inherit;">，例如：</font></font></p>

<pre><code>var currentLocation = this.props.location.pathname
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里阳光</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用历史记录，则路由器会将所有内容从历史记录中放入该位置，例如：</font></font></p>

<pre><code>this.props.location.pathname;<font></font>
this.props.location.query;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">得到它？</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
