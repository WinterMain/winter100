---
layout: question
title:  “ SyntaxError：JSON中位置0处的意外令牌<”
date:   2020-03-11T03:38:21.000Z
description: 在处理类似于Facebook的内容提要的React应用程序组件中，我遇到了一个错误：  Feed.js：94未定义“ parsererror”“ S...
img: 
author: Stafan小哥
category: question
answer: 17
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在处理类似于Facebook的内容提要的React应用程序组件中，我遇到了一个错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Feed.js：94未定义“ parsererror”“ SyntaxError：JSON中位置0处的意外令牌&lt; </font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了类似的错误，事实证明这是render函数中HTML的错字，但这里似乎并非如此。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更令人困惑的是，我将代码回滚到了较早的已知工作版本，但仍然遇到错误。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Feed.js：</font></font></p>

<pre><code>import React from 'react';<font></font>
<font></font>
var ThreadForm = React.createClass({<font></font>
  getInitialState: function () {<font></font>
    return {author: '', <font></font>
            text: '', <font></font>
            included: '',<font></font>
            victim: ''<font></font>
            }<font></font>
  },<font></font>
  handleAuthorChange: function (e) {<font></font>
    this.setState({author: e.target.value})<font></font>
  },<font></font>
  handleTextChange: function (e) {<font></font>
    this.setState({text: e.target.value})<font></font>
  },<font></font>
  handleIncludedChange: function (e) {<font></font>
    this.setState({included: e.target.value})<font></font>
  },<font></font>
  handleVictimChange: function (e) {<font></font>
    this.setState({victim: e.target.value})<font></font>
  },<font></font>
  handleSubmit: function (e) {<font></font>
    e.preventDefault()<font></font>
    var author = this.state.author.trim()<font></font>
    var text = this.state.text.trim()<font></font>
    var included = this.state.included.trim()<font></font>
    var victim = this.state.victim.trim()<font></font>
    if (!text || !author || !included || !victim) {<font></font>
      return<font></font>
    }<font></font>
    this.props.onThreadSubmit({author: author, <font></font>
                                text: text, <font></font>
                                included: included,<font></font>
                                victim: victim<font></font>
                              })<font></font>
    this.setState({author: '', <font></font>
                  text: '', <font></font>
                  included: '',<font></font>
                  victim: ''<font></font>
                  })<font></font>
  },<font></font>
  render: function () {<font></font>
    return (<font></font>
    &lt;form className="threadForm" onSubmit={this.handleSubmit}&gt;<font></font>
      &lt;input<font></font>
        type="text"<font></font>
        placeholder="Your name"<font></font>
        value={this.state.author}<font></font>
        onChange={this.handleAuthorChange} /&gt;<font></font>
      &lt;input<font></font>
        type="text"<font></font>
        placeholder="Say something..."<font></font>
        value={this.state.text}<font></font>
        onChange={this.handleTextChange} /&gt;<font></font>
      &lt;input<font></font>
        type="text"<font></font>
        placeholder="Name your victim"<font></font>
        value={this.state.victim}<font></font>
        onChange={this.handleVictimChange} /&gt;<font></font>
      &lt;input<font></font>
        type="text"<font></font>
        placeholder="Who can see?"<font></font>
        value={this.state.included}<font></font>
        onChange={this.handleIncludedChange} /&gt;<font></font>
      &lt;input type="submit" value="Post" /&gt;<font></font>
    &lt;/form&gt;<font></font>
    )<font></font>
  }<font></font>
})<font></font>
<font></font>
var ThreadsBox = React.createClass({<font></font>
  loadThreadsFromServer: function () {<font></font>
    $.ajax({<font></font>
      url: this.props.url,<font></font>
      dataType: 'json',<font></font>
      cache: false,<font></font>
      success: function (data) {<font></font>
        this.setState({data: data})<font></font>
      }.bind(this),<font></font>
      error: function (xhr, status, err) {<font></font>
        console.error(this.props.url, status, err.toString())<font></font>
      }.bind(this)<font></font>
    })<font></font>
  },<font></font>
  handleThreadSubmit: function (thread) {<font></font>
    var threads = this.state.data<font></font>
    var newThreads = threads.concat([thread])<font></font>
    this.setState({data: newThreads})<font></font>
    $.ajax({<font></font>
      url: this.props.url,<font></font>
      dataType: 'json',<font></font>
      type: 'POST',<font></font>
      data: thread,<font></font>
      success: function (data) {<font></font>
        this.setState({data: data})<font></font>
      }.bind(this),<font></font>
      error: function (xhr, status, err) {<font></font>
        this.setState({data: threads})<font></font>
        console.error(this.props.url, status, err.toString())<font></font>
      }.bind(this)<font></font>
    })<font></font>
  },<font></font>
  getInitialState: function () {<font></font>
    return {data: []}<font></font>
  },<font></font>
  componentDidMount: function () {<font></font>
    this.loadThreadsFromServer()<font></font>
    setInterval(this.loadThreadsFromServer, this.props.pollInterval)<font></font>
  },<font></font>
  render: function () {<font></font>
    return (<font></font>
    &lt;div className="threadsBox"&gt;<font></font>
      &lt;h1&gt;Feed&lt;/h1&gt;<font></font>
      &lt;div&gt;<font></font>
        &lt;ThreadForm onThreadSubmit={this.handleThreadSubmit} /&gt;<font></font>
      &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
    )<font></font>
  }<font></font>
})<font></font>
<font></font>
module.exports = ThreadsBox<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Chrome开发人员工具中，错误似乎是由以下功能引起的：</font></font></p>

<pre><code> loadThreadsFromServer: function loadThreadsFromServer() {<font></font>
    $.ajax({<font></font>
      url: this.props.url,<font></font>
      dataType: 'json',<font></font>
      cache: false,<font></font>
      success: function (data) {<font></font>
        this.setState({ data: data });<font></font>
      }.bind(this),<font></font>
      error: function (xhr, status, err) {<font></font>
        console.error(this.props.url, status, err.toString());<font></font>
      }.bind(this)<font></font>
    });<font></font>
  },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用</font></font><code>console.error(this.props.url, status, err.toString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下划线标出。</font></font></p>

<p>Since it looks like the error seems to have something to do with pulling JSON data from the server, I tried starting from a blank db, but the error persists. The error seems to be called in an infinite loop presumably as React continuously tries to connect to the server and eventually crashes the browser.</p>

<p>EDIT: </p>

<p>I've checked the server response with Chrome dev tools and Chrome REST client, and the data appears to be proper JSON.</p>

<p>EDIT 2:</p>

<p>It appears that though the intended API endpoint is indeed returning the correct JSON data and format, React is polling <code>http://localhost:3000/?_=1463499798727</code> instead of the expected <code>http://localhost:3001/api/threads</code>.</p>

<p>I am running a webpack hot-reload server on port 3000 with the express app running on port 3001 to return the backend data. What's frustrating here is that this was working correctly the last time I worked on it and can't find what I could have possibly changed to break it. </p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第605篇《“ SyntaxError：JSON中位置0处的意外令牌<”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐十三</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON中的意外令牌&lt;位于位置0 </font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决此错误的简单方法是在</font></font><code>styles.less</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">写入注释</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry逆天Eva</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言（后端），我正在使用res.send（token）;</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我更改为res.send（data）时，一切都固定了；</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果一切正常，并按预期进行发布，则可能需要检查一下，但是错误始终在您的前端弹出。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro逆天猿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那些正在使用</font></font><code>create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并尝试获取本地json文件的人。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与中的一样</font></font><code>create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于处理请求，并为每个请求提供服务</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">所以你越来越</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SyntaxError：JSON中位置0处的意外令牌&lt;。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要解决此问题，您需要弹出应用程序并修改</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">配置文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以从</font></font><a href="https://stackoverflow.com/questions/47368716/fetching-json-returns-error-uncaught-in-promise-syntaxerror-unexpected-token/55628120#55628120"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里开始</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Green</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能是由于您的JavaScript代码正在查看某些json响应而导致您收到了其他类似文本的信息。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪阿飞</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此错误的可能性是巨大的。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我发现该问题是由于添加</font></font><code>homepage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引起的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值得检查：</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改中：</font></font></p>

<pre><code>homepage: "www.example.com"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至</font></font></p>

<pre><code>hompage: ""   
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonySamGreen</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于某些人来说，这可能对您有所帮助：我在Wordpress REST API方面也有类似的经验。</font><font style="vertical-align: inherit;">我什至用邮差来检查我是否有正确的路由或端点。</font><font style="vertical-align: inherit;">后来我发现我不小心在脚本中放了一个“ echo”-钩子：</font></font></p>

<p><a href="https://www.screencast.com/t/AvM4tHy7lT3H" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调试并检查您的控制台</font></font></a></p>

<p><a href="https://www.screencast.com/t/phTJbOqFo" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误原因</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，基本上，这意味着我打印的值不是与导致AJAX错误的脚本混合的JSON-“ SyntaxError：JSON位置0处的意外令牌r”</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在python中，您可以在将结果发送到html模板之前使用json.Dump（str）。</font><font style="vertical-align: inherit;">使用此命令字符串转换为正确的json格式并发送到html模板。</font><font style="vertical-align: inherit;">将结果发送到JSON.parse（result）之后，这是正确的响应，您可以使用它。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Davaid</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，当我作为JSON返回的对象的属性之一引发异常时，就会发生这种情况。</font></font></p>

<pre><code>public Dictionary&lt;string, int&gt; Clients { get; set; }<font></font>
public int CRCount<font></font>
{<font></font>
    get<font></font>
    {<font></font>
        var count = 0;<font></font>
        //throws when Clients is null<font></font>
        foreach (var c in Clients) {<font></font>
            count += c.Value;<font></font>
        }<font></font>
        return count;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加一个空检查，为我修复了它：</font></font></p>

<pre><code>public Dictionary&lt;string, int&gt; Clients { get; set; }<font></font>
public int CRCount<font></font>
{<font></font>
    get<font></font>
    {<font></font>
        var count = 0;<font></font>
        if (Clients != null) {<font></font>
            foreach (var c in Clients) {<font></font>
                count += c.Value;<font></font>
            }<font></font>
        }<font></font>
        return count;<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Davaid</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是基本检查，请确保您在json文件中没有任何注释</font></font></p>

<pre><code>//comments here will not be parsed and throw error
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyPro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">花了很多时间后，我发现我的问题是在package.json文件上定义了“主页”，这导致我的应用无法在Firebase上运行（相同的“令牌”错误）。</font><font style="vertical-align: inherit;">我使用create-react-app创建了我的react应用，然后使用READ.me文件上的firebase指南部署到github页面，意识到我必须做额外的工作才能使路由器正常工作，然后切换到firebase。</font><font style="vertical-align: inherit;">github指南已在package.json上添加了主页密钥，并导致了部署问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOL蛋蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保响应为JSON格式，否则会引发此错误。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋伽罗猿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您将响应定义为</font></font><code>application/json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且正在获取HTML作为响应</font><font style="vertical-align: inherit;">时，会发生此错误</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">基本上，当您使用JSON响应为特定URL编写服务器端脚本但错误格式为HTML时，就会发生这种情况。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">满天星</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了此错误“ SyntaxError：JSON中的位置处出现意外的标记m”，其中标记“ m”可以是任何其他字符。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原来，当我使用RESTconsole进行数据库测试时，我错过了JSON对象中的双引号之一，例如{“ name：” math“}，正确的应该是{” name“：” math“}</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我花了很多精力来找出这个笨拙的错误。</font><font style="vertical-align: inherit;">恐怕其他人会遇到类似的麻烦。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamItachi阿飞</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以我为例，我正在运行此Webpack，结果证明是本地node_modules目录中某处的损坏。</font></font></p>

<pre><code>rm -rf node_modules<font></font>
npm install<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...足以使其再次正常工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋神乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这最终成为我的权限问题。</font><font style="vertical-align: inherit;">我试图通过Cancan访问未经授权的网址，因此该网址已切换为</font></font><code>users/sign_in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">重定向的网址会响应html，而不是json。</font><font style="vertical-align: inherit;">html响应中的第一个字符是</font></font><code>&lt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony达蒙Mandy</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您正在从服务器返回HTML（或XML），但是</font></font><code>dataType: json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">告诉jQuery解析为JSON。</font><font style="vertical-align: inherit;">在Chrome开发者工具中检查“网络”标签，以查看服务器响应的内容。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near神乐路易</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，该错误是由于我未将返回值分配给变量而导致的。</font><font style="vertical-align: inherit;">导致错误消息的原因如下：</font></font></p>

<pre><code>return new JavaScriptSerializer().Serialize("hello");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将其更改为：</font></font></p>

<pre><code>string H = "hello";<font></font>
return new JavaScriptSerializer().Serialize(H);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有变量，JSON无法正确格式化数据。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
