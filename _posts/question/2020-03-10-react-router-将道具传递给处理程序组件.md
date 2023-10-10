---
layout: question
title:  react-router-将道具传递给处理程序组件
date:   2020-03-10T02:40:29.000Z
description: 我使用React Router的 React.js应用程序具有以下结构：var Dashboard = require('./Dashboard');...
img: 
author: 猴子乐
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font></font><a href="https://github.com/ReactTraining/react-router" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Router的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> React.js应用程序具有以下结构</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var Dashboard = require('./Dashboard');<font></font>
var Comments = require('./Comments');<font></font>
<font></font>
var Index = React.createClass({<font></font>
  render: function () {<font></font>
    return (<font></font>
        &lt;div&gt;<font></font>
            &lt;header&gt;Some header&lt;/header&gt;<font></font>
            &lt;RouteHandler /&gt;<font></font>
        &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
<font></font>
var routes = (<font></font>
  &lt;Route path="/" handler={Index}&gt;<font></font>
    &lt;Route path="comments" handler={Comments}/&gt;<font></font>
    &lt;DefaultRoute handler={Dashboard}/&gt;<font></font>
  &lt;/Route&gt;<font></font>
);<font></font>
<font></font>
ReactRouter.run(routes, function (Handler) {<font></font>
  React.render(&lt;Handler/&gt;, document.body);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想将一些属性传递给</font></font><code>Comments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（通常我会这样做</font></font><code>&lt;Comments myprop="value" /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用React Router做到这一点最简单，正确的方法是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第439篇《react-router-将道具传递给处理程序组件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">录泰红木家具</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>Use the solution like above and this works in v3.2.5.</p>

<pre class="lang-js prettyprint-override"><code>&lt;Route<font></font>
  path="/foo"<font></font>
  component={() =&gt; (<font></font>
    &lt;Content<font></font>
      lang="foo"<font></font>
      meta={{<font></font>
        description: lang_foo.description<font></font>
      }}<font></font>
    /&gt;<font></font>
  )}<font></font>
/&gt;<font></font>
</code></pre>

<p>or</p>

<pre class="lang-js prettyprint-override"><code>&lt;Route path="/foo"&gt;<font></font>
  &lt;Content<font></font>
    lang="foo"<font></font>
    meta={{<font></font>
      description: lang_foo.description<font></font>
    }}<font></font>
  /&gt;<font></font>
&lt;/Route&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋樱</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于反应路由器2.x。</font></font></p>

<pre><code>const WrappedComponent = (Container, propsToPass, { children }) =&gt; &lt;Container {...propsToPass}&gt;{children}&lt;/Container&gt;;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在你的路线上...</font></font></p>

<pre><code>&lt;Route path="/" component={WrappedComponent.bind(null, LayoutContainer, { someProp })}&gt;<font></font>
&lt;/Route&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保第三个参数是类似的对象</font></font><code>{ checked: false }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小逆天</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我想出的最干净的解决方案（React Router v4）：</font></font></p>

<pre><code>&lt;Route<font></font>
  path="/"<font></font>
  component={props =&gt; &lt;MyComponent {...props} foo="lol" /&gt;}<font></font>
/&gt;<font></font>
</code></pre>

<p><code>MyComponent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍然有</font></font><code>props.match</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>props.location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且有</font></font><code>props.foo === "lol"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">你的名字</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在1.0和2.0中，您可以使用</font></font><code>createElement</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prop of </font></font><code>Router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定如何精确地创建目标元素。</font></font><a href="https://github.com/rackt/react-router/blob/master/docs/API.md#createelementcomponent-props"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件来源</font></font></a></p>

<pre><code>function createWithDefaultProps(Component, props) {<font></font>
    return &lt;Component {...props} myprop="value" /&gt;;<font></font>
}<font></font>
<font></font>
// and then    <font></font>
&lt;Router createElement={createWithDefaultProps}&gt;<font></font>
    ...<font></font>
&lt;/Router&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅飞云</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过将道具传递到</font></font><code>&lt;RouteHandler&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v0.13.x中或在v1.0中的Route组件本身</font><font style="vertical-align: inherit;">来传递道具</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>// v0.13.x<font></font>
&lt;RouteHandler/&gt;<font></font>
&lt;RouteHandler someExtraProp={something}/&gt;<font></font>
<font></font>
// v1.0<font></font>
{this.props.children}<font></font>
{React.cloneElement(this.props.children, {someExtraProp: something })}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（摘自</font></font><a href="https://github.com/rackt/react-router/releases/tag/v1.0.0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/rackt/react-router/releases/tag/v1.0.0</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的升级指南</font><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有子处理程序都将收到相同的道具集-视情况而定是否有用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长阳光</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ES6，您可以使组件包装器内联：</font></font></p>

<p><code>&lt;Route path="/" component={() =&gt; &lt;App myProp={someValue}/&gt;} &gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要让孩子通过：</font></font></p>

<p><code>&lt;Route path="/" component={(props) =&gt; &lt;App myProp={someValue}&gt;{props.children}&lt;/App&gt;} &gt;</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO西门</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><a href="https://stackoverflow.com/a/39027174/5452969"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rajesh提供</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><a href="https://stackoverflow.com/a/39027174/5452969"><font style="vertical-align: inherit;">解决方案</font></a><font style="vertical-align: inherit;">，没有</font></font><a href="https://stackoverflow.com/questions/27864720/react-router-pass-props-to-handler-component#comment67441820_39027174"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">yuji</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的不便之处</font><font style="vertical-align: inherit;">，并已针对React Router 4进行了更新。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码如下：</font></font></p>

<pre><code>&lt;Route path="comments" render={(props) =&gt; &lt;Comments myProp="value" {...props}/&gt;}/&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，我使用</font></font><code>render</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><code>component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">原因是为了避免</font></font><a href="https://reacttraining.com/react-router/web/api/Route/component" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不必要的重新安装</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我也将传递</font></font><code>props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给该方法，并且在Comment组件上使用与对象散布运算符相同的道具（ES7提案）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙猿</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复制</font></font><a href="https://stackoverflow.com/users/183544/ciantic"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ciantic</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在接受的回复中</font><font style="vertical-align: inherit;">的评论</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;Route path="comments" component={() =&gt; (&lt;Comments myProp="value" /&gt;)}/&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这是最优雅的解决方案。</font><font style="vertical-align: inherit;">有用。</font><font style="vertical-align: inherit;">帮助过我。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想编写包装器，我想您可以这样做：</font></font></p>

<pre><code>class Index extends React.Component { <font></font>
<font></font>
  constructor(props) {<font></font>
    super(props);<font></font>
  }<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;h1&gt;<font></font>
        Index - {this.props.route.foo}<font></font>
      &lt;/h1&gt;<font></font>
    );<font></font>
  }<font></font>
}<font></font>
<font></font>
var routes = (<font></font>
  &lt;Route path="/" foo="bar" component={Index}/&gt;<font></font>
);<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
