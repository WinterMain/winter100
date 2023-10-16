---
layout: question
title:  如何通过React_router传递状态？
date:   2020-03-30T09:44:14.000Z
description: 这是引起我麻烦的文件：var Routers = React.createClass({  getInitialState  function()...
img: 
author: Tony凯
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是引起我麻烦的文件：</font></font></p>

<pre><code>var Routers = React.createClass({<font></font>
<font></font>
  getInitialState: function(){<font></font>
    return{<font></font>
      userName: "",<font></font>
      relatives: []<font></font>
    }<font></font>
  },<font></font>
<font></font>
  userLoggedIn: function(userName, relatives){<font></font>
    this.setState({<font></font>
      userName: userName,<font></font>
      relatives: relatives,<font></font>
    })<font></font>
  },<font></font>
<font></font>
  render: function() {<font></font>
    return (<font></font>
      &lt;Router history={browserHistory}&gt;<font></font>
        &lt;Route path="/" userLoggedIn={this.userLoggedIn} component={LogIn}/&gt;<font></font>
        &lt;Route path="feed" relatives={this.state.relatives} userName={this.state.userName} component={Feed}/&gt;<font></font>
      &lt;/Router&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图将新的</font></font><code>this.state.relatives</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>this.state.userName</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过路线</font><font style="vertical-align: inherit;">传递</font><font style="vertical-align: inherit;">到我的“提要”组件中。</font><font style="vertical-align: inherit;">但我收到此错误消息：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告：[反应路由器]您不能更改；</font><font style="vertical-align: inherit;">它将被忽略</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道为什么会这样，但是不知道我应该如何将状态传递给我的“ feed”组件。</font><font style="vertical-align: inherit;">在过去的5个小时里，我一直在尝试解决此问题，我已变得非常绝望！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请帮忙！</font><font style="vertical-align: inherit;">谢谢</font></font></p>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解：</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面的答案是有帮助的，我要感谢athors，但是它们并不是最简单的方法。</font><font style="vertical-align: inherit;">在我看来，最好的方法是：更改路线时，只需将一条消息附加到它上，如下所示：</font></font></p>

<pre><code>browserHistory.push({pathname: '/pathname', state: {message: "hello, im a passed message!"}});
</code></pre>

<p>or if you do it through a link:</p>

<pre><code>&lt;Link <font></font>
    to={{ <font></font>
    pathname: '/pathname', <font></font>
    state: { message: 'hello, im a passed message!' } <font></font>
  }}/&gt;<font></font>
</code></pre>

<p>source: <a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/location.md" rel="noreferrer">https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/location.md</a></p>

<p>In the component you are trying to reach you can then access the variable like this for example: </p>

<pre><code>  componentDidMount: function() {<font></font>
    var recievedMessage = this.props.location.state.message<font></font>
  },<font></font>
</code></pre>

<p>I hope this helps! :)</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3851篇《如何通过React_router传递状态？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一旦安装了路由器组件，就无法更改React-router的状态。</font><font style="vertical-align: inherit;">您可以编写自己的HTML5路由组件，并侦听网址更改。</font></font></p>

<pre><code>class MyRouter extend React.component {<font></font>
   constructor(props,context){<font></font>
   super(props,context);<font></font>
   this._registerHashEvent = this._registerHashEvent.bind(this)<font></font>
<font></font>
 } <font></font>
<font></font>
 _registerHashEvent() {<font></font>
    window.addEventListener("hashchange", this._hashHandler.bind(this), false);<font></font>
  }<font></font>
  ...<font></font>
  ...<font></font>
<font></font>
render(){<font></font>
  return ( &lt;div&gt; &lt;RouteComponent /&gt; &lt;/div&gt;)<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
