---
layout: question
title:  react-router返回页面如何配置历史记录？
date:   2020-03-12T04:46:40.000Z
description: 谁能告诉我如何返回上一页而不是特定路线？使用此代码时：var BackButton = React.createClass({ mixins ...
img: 
author: 十三神无
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谁能告诉我如何返回上一页而不是特定路线？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此代码时：</font></font></p>

<pre><code>var BackButton = React.createClass({<font></font>
<font></font>
 mixins: [Router.Navigation],<font></font>
  render: function() {<font></font>
    return (<font></font>
        &lt;button<font></font>
            className="button icon-left"<font></font>
            onClick={this.navigateBack}&gt;<font></font>
            Back<font></font>
        &lt;/button&gt;<font></font>
    );<font></font>
  },<font></font>
<font></font>
  navigateBack: function(){<font></font>
    this.goBack();<font></font>
  }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><strong><font style="vertical-align: inherit;">收到</font></strong><font style="vertical-align: inherit;">此错误，</font><strong><font style="vertical-align: inherit;">因为没有路由器历史记录</font></strong><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以goBack（）被忽略了</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的路线：</font></font></p>

<pre><code>// Routing Components<font></font>
Route = Router.Route;<font></font>
RouteHandler = Router.RouteHandler;<font></font>
DefaultRoute = Router.DefaultRoute;<font></font>
<font></font>
var routes = (<font></font>
 &lt;Route name="app" path="/" handler={OurSchoolsApp}&gt;<font></font>
     &lt;DefaultRoute name="home" handler={HomePage} /&gt;<font></font>
     &lt;Route name="add-school" handler={AddSchoolPage}  /&gt;<font></font>
     &lt;Route name="calendar" handler={CalendarPage}  /&gt;<font></font>
     &lt;Route name="calendar-detail" path="calendar-detail/:id" handler={CalendarDetailPage} /&gt;<font></font>
     &lt;Route name="info-detail" path="info-detail/:id" handler={InfoDetailPage} /&gt;<font></font>
     &lt;Route name="info" handler={InfoPage} /&gt;<font></font>
     &lt;Route name="news" handler={NewsListPage} /&gt;<font></font>
     &lt;Route name="news-detail" path="news-detail/:id" handler={NewsDetailPage} /&gt;<font></font>
     &lt;Route name="contacts" handler={ContactPage} /&gt;<font></font>
     &lt;Route name="contact-detail" handler={ContactDetailPage} /&gt;<font></font>
     &lt;Route name="settings" handler={SettingsPage} /&gt;<font></font>
 &lt;/Route&gt;<font></font>
 );<font></font>
<font></font>
 Router.run(routes, function(Handler){<font></font>
   var mountNode = document.getElementById('app');<font></font>
   React.render(&lt;Handler /&gt; , mountNode);<font></font>
 });<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第959篇《react-router返回页面如何配置历史记录？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro神无猴子</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这段代码将为您解决问题。    </font></font></p>

<pre><code>this.context.router.history.goBack()
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞路易</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样简单地使用</font></font></p>

<pre><code>&lt;span onClick={() =&gt; this.props.history.goBack()}&gt;Back&lt;/span&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro凯</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我有用的唯一解决方案是最简单的。</font><font style="vertical-align: inherit;">无需其他进口。</font></font></p>

<pre><code>&lt;a href="#" onClick={() =&gt; this.props.history.goBack()}&gt;Back&lt;/a&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">伊姆·特克斯（Tks，Iam）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用React挂钩</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进口：</font></font></p>

<pre><code>import { useHistory } from "react-router-dom";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在无状态组件中： </font></font></p>

<pre><code>  let history = useHistory();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">活动中</font></font></p>

<pre><code>history.goBack()
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ALPro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在react-router v4.x中，您可以使用</font></font><code>history.goBack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等效于</font></font><code>history.go(-1)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">App.js</font></font></strong></p>

<pre><code>import React from "react";<font></font>
import { render } from "react-dom";<font></font>
import { BrowserRouter as Router, Route, Link } from "react-router-dom";<font></font>
import Home from "./Home";<font></font>
import About from "./About";<font></font>
import Contact from "./Contact";<font></font>
import Back from "./Back";<font></font>
<font></font>
const styles = {<font></font>
  fontFamily: "sans-serif",<font></font>
  textAlign: "left"<font></font>
};<font></font>
<font></font>
const App = () =&gt; (<font></font>
  &lt;div style={styles}&gt;<font></font>
    &lt;Router&gt;<font></font>
      &lt;div&gt;<font></font>
        &lt;ul&gt;<font></font>
          &lt;li&gt;&lt;Link to="/"&gt;Home&lt;/Link&gt;&lt;/li&gt;<font></font>
          &lt;li&gt;&lt;Link to="/about"&gt;About&lt;/Link&gt;&lt;/li&gt;<font></font>
          &lt;li&gt;&lt;Link to="/contact"&gt;Contact&lt;/Link&gt;&lt;/li&gt;<font></font>
        &lt;/ul&gt;<font></font>
<font></font>
        &lt;hr /&gt;<font></font>
<font></font>
        &lt;Route exact path="/" component={Home} /&gt;<font></font>
        &lt;Route path="/about" component={About} /&gt;<font></font>
        &lt;Route path="/contact" component={Contact} /&gt;<font></font>
<font></font>
        &lt;Back /&gt;{/* &lt;----- This is component that will render Back button */}<font></font>
      &lt;/div&gt;<font></font>
    &lt;/Router&gt;<font></font>
  &lt;/div&gt;<font></font>
);<font></font>
<font></font>
render(&lt;App /&gt;, document.getElementById("root"));<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Back.js</font></font></strong></p>

<pre><code>import React from "react";<font></font>
import { withRouter } from "react-router-dom";<font></font>
<font></font>
const Back = ({ history }) =&gt; (<font></font>
  &lt;button onClick={history.goBack}&gt;Back to previous page&lt;/button&gt;<font></font>
);<font></font>
<font></font>
export default withRouter(Back);<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示：</font></font></strong>
<font style="vertical-align: inherit;"><a href="https://codesandbox.io/s/ywmvp95wpj" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https </font></a><strong><font style="vertical-align: inherit;">：</font></strong></font><a href="https://codesandbox.io/s/ywmvp95wpj" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//codesandbox.io/s/ywmvp95wpj</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请记住，使用</font></font><code>history</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户可以离开，因为</font></font><code>history.goBack()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以在打开您的应用程序之前加载访问者访问过的页面。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为避免上述情况，我创建了一个简单的库</font></font><a href="https://github.com/hinok/react-router-last-location" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-router-last-location</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，用于监视用户的最后位置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法非常简单。</font><font style="vertical-align: inherit;">首先，你需要安装</font></font><code>react-router-dom</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>react-router-last-location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>npm install react-router-dom react-router-last-location --save
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后使用</font></font><code>LastLocationProvider</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">App.js</font></font></strong></p>

<pre><code>import React from "react";<font></font>
import { render } from "react-dom";<font></font>
import { BrowserRouter as Router, Route, Link } from "react-router-dom";<font></font>
import { LastLocationProvider } from "react-router-last-location";<font></font>
//              ↑<font></font>
//              |<font></font>
//              |<font></font>
//<font></font>
//       Import provider<font></font>
//<font></font>
import Home from "./Home";<font></font>
import About from "./About";<font></font>
import Contact from "./Contact";<font></font>
import Back from "./Back";<font></font>
<font></font>
const styles = {<font></font>
  fontFamily: "sans-serif",<font></font>
  textAlign: "left"<font></font>
};<font></font>
<font></font>
const App = () =&gt; (<font></font>
  &lt;div style={styles}&gt;<font></font>
    &lt;h5&gt;Click on About to see your last location&lt;/h5&gt;<font></font>
    &lt;Router&gt;<font></font>
      &lt;LastLocationProvider&gt;{/* &lt;---- Put provider inside &lt;Router&gt; */}<font></font>
        &lt;div&gt;<font></font>
          &lt;ul&gt;<font></font>
            &lt;li&gt;&lt;Link to="/"&gt;Home&lt;/Link&gt;&lt;/li&gt;<font></font>
            &lt;li&gt;&lt;Link to="/about"&gt;About&lt;/Link&gt;&lt;/li&gt;<font></font>
            &lt;li&gt;&lt;Link to="/contact"&gt;Contact&lt;/Link&gt;&lt;/li&gt;<font></font>
          &lt;/ul&gt;<font></font>
<font></font>
          &lt;hr /&gt;<font></font>
<font></font>
          &lt;Route exact path="/" component={Home} /&gt;<font></font>
          &lt;Route path="/about" component={About} /&gt;<font></font>
          &lt;Route path="/contact" component={Contact} /&gt;<font></font>
<font></font>
          &lt;Back /&gt;<font></font>
        &lt;/div&gt;<font></font>
      &lt;/LastLocationProvider&gt;<font></font>
    &lt;/Router&gt;<font></font>
  &lt;/div&gt;<font></font>
);<font></font>
<font></font>
render(&lt;App /&gt;, document.getElementById("root"));<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Back.js</font></font></strong></p>

<pre><code>import React from "react";<font></font>
import { Link } from "react-router-dom";<font></font>
import { withLastLocation } from "react-router-last-location";<font></font>
//              ↑<font></font>
//              |<font></font>
//              |<font></font>
//<font></font>
//    `withLastLocation` higher order component<font></font>
//    will pass `lastLocation` to your component               <font></font>
//<font></font>
//                   |<font></font>
//                   |<font></font>
//                   ↓<font></font>
const Back = ({ lastLocation }) =&gt; (<font></font>
  lastLocation &amp;&amp; &lt;Link to={lastLocation || '/'}&gt;Back to previous page&lt;/Link&gt;<font></font>
);<font></font>
<font></font>
<font></font>
//          Remember to wrap<font></font>
//   your component before exporting<font></font>
//<font></font>
//                   |<font></font>
//                   |<font></font>
//                   ↓<font></font>
export default withLastLocation(Back);<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示：</font></font></strong> <font style="vertical-align: inherit;"><a href="https://codesandbox.io/s/727nqm99jj" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https </font></a><strong><font style="vertical-align: inherit;">: </font></strong></font><a href="https://codesandbox.io/s/727nqm99jj" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//codesandbox.io/s/727nqm99jj</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy猿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这适用于浏览器和哈希历史记录。</font></font></p>

<pre><code>this.props.history.goBack();
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里GO</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>this.context.router.goBack()
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需导航混入！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim米亚西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用React v16和ReactRouter v4.2.0更新（2017年10月）：</font></font></h3>

<pre><code>class BackButton extends Component {<font></font>
  static contextTypes = {<font></font>
    router: () =&gt; true, // replace with PropTypes.object if you use them<font></font>
  }<font></font>
<font></font>
  render() {<font></font>
    return (<font></font>
      &lt;button<font></font>
        className="button icon-left"<font></font>
        onClick={this.context.router.history.goBack}&gt;<font></font>
          Back<font></font>
      &lt;/button&gt;<font></font>
    )<font></font>
  }<font></font>
}<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用React v15和ReactRouter v3.0.0更新（2016年8月）：</font></font></h3>

<pre><code>var browserHistory = ReactRouter.browserHistory;<font></font>
<font></font>
var BackButton = React.createClass({<font></font>
  render: function() {<font></font>
    return (<font></font>
      &lt;button<font></font>
        className="button icon-left"<font></font>
        onClick={browserHistory.goBack}&gt;<font></font>
        Back<font></font>
      &lt;/button&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用嵌入式iframe创建了一个带有一些更复杂示例的小提琴：</font><a href="https://jsfiddle.net/kwg1da3a/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://jsfiddle.net/kwg1da3a/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/kwg1da3a/</font></font></a></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React v14和ReacRouter v1.0.0（2015年9月10日）</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以这样做：</font></font></p>

<pre><code>var React = require("react");<font></font>
var Router = require("react-router");<font></font>
<font></font>
var SomePage = React.createClass({<font></font>
  ...<font></font>
<font></font>
  contextTypes: {<font></font>
    router: React.PropTypes.func<font></font>
  },<font></font>
  ...<font></font>
<font></font>
  handleClose: function () {<font></font>
    if (Router.History.length &gt; 1) {<font></font>
      // this will take you back if there is history<font></font>
      Router.History.back();<font></font>
    } else {<font></font>
      // this will take you to the parent route if there is no history,<font></font>
      // but unfortunately also add it as a new route<font></font>
      var currentRoutes = this.context.router.getCurrentRoutes();<font></font>
      var routeName = currentRoutes[currentRoutes.length - 2].name;<font></font>
      this.context.router.transitionTo(routeName);<font></font>
    }<font></font>
  },<font></font>
  ...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要小心，以确保有必要的历史记录才能返回。</font><font style="vertical-align: inherit;">如果您直接点击该页面，然后再点击该页面，它将带您回到浏览器历史记录中，然后再查看您的应用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此解决方案将同时考虑这两种情况。</font><font style="vertical-align: inherit;">但是，它将无法使用后退按钮处理可在页面内导航（并添加到浏览器历史记录）的iframe。</font><font style="vertical-align: inherit;">坦白说，我认为这是react-router中的错误。</font><font style="vertical-align: inherit;">在此处创建的问题：</font><a href="https://github.com/rackt/react-router/issues/1874" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://github.com/rackt/react-router/issues/1874" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/rackt/react-router/issues/1874</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
