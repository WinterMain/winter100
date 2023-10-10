---
layout: question
title:  在Link react-router中传递道具
date:   2020-03-11T09:58:43.000Z
description: 我正在用react-router进行反应。我正在尝试在react-router的“链接”中传递属性var React  = require('reac...
img: 
author: 凯西里
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在用react-router进行反应。</font><font style="vertical-align: inherit;">我正在尝试在react-router的“链接”中传递属性</font></font></p>

<pre><code>var React  = require('react');<font></font>
var Router = require('react-router');<font></font>
var CreateIdeaView = require('./components/createIdeaView.jsx');<font></font>
<font></font>
var Link = Router.Link;<font></font>
var Route = Router.Route;<font></font>
var DefaultRoute = Router.DefaultRoute;<font></font>
var RouteHandler = Router.RouteHandler;<font></font>
var App = React.createClass({<font></font>
  render : function(){<font></font>
    return(<font></font>
      &lt;div&gt;<font></font>
        &lt;Link to="ideas" params={{ testvalue: "hello" }}&gt;Create Idea&lt;/Link&gt;<font></font>
        &lt;RouteHandler/&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
<font></font>
var routes = (<font></font>
  &lt;Route name="app" path="/" handler={App}&gt;<font></font>
    &lt;Route name="ideas" handler={CreateIdeaView} /&gt;<font></font>
    &lt;DefaultRoute handler={Home} /&gt;<font></font>
  &lt;/Route&gt;<font></font>
);<font></font>
<font></font>
Router.run(routes, function(Handler) {<font></font>
<font></font>
  React.render(&lt;Handler /&gt;, document.getElementById('main'))<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“链接”呈现页面，但不将属性传递给新视图。</font><font style="vertical-align: inherit;">下面是查看代码</font></font></p>

<pre><code>var React = require('react');<font></font>
var Router = require('react-router');<font></font>
<font></font>
var CreateIdeaView = React.createClass({<font></font>
  render : function(){<font></font>
    console.log('props form link',this.props,this)//props not recived<font></font>
  return(<font></font>
      &lt;div&gt;<font></font>
        &lt;h1&gt;Create Post: &lt;/h1&gt;<font></font>
        &lt;input type='text' ref='newIdeaTitle' placeholder='title'&gt;&lt;/input&gt;<font></font>
        &lt;input type='text' ref='newIdeaBody' placeholder='body'&gt;&lt;/input&gt;<font></font>
      &lt;/div&gt;<font></font>
    );<font></font>
  }<font></font>
});<font></font>
<font></font>
module.exports = CreateIdeaView;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用“链接”传递数据？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第791篇《在Link react-router中传递道具》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimAGil</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><a href="https://tylermcginnis.com/react-router-pass-props-to-link/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅此帖子以供参考</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的是：</font></font></p>

<pre><code>&lt;Link to={{<font></font>
     pathname: `your/location`,<font></font>
     state: {send anything from here}<font></font>
}}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在您要访问它：</font></font></p>

<pre><code>this.props.location.state
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Itachi小小</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要解决以上答案（</font></font><a href="https://stackoverflow.com/a/44860918/2011818"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/44860918/2011818</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），您还可以在Link对象内将对象“ In”内联发送。     </font></font></p>

<pre><code>&lt;Route path="/foo/:fooId" component={foo} / &gt;<font></font>
<font></font>
&lt;Link to={{pathname:/foo/newb, sampleParam: "Hello", sampleParam2: "World!" }}&gt; CLICK HERE &lt;/Link&gt;<font></font>
<font></font>
this.props.match.params.fooId //newb<font></font>
this.props.location.sampleParam //"Hello"<font></font>
this.props.location.sampleParam2 //"World!"<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里GO</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至于react-router-dom 4.xx（</font></font><a href="https://www.npmjs.com/package/react-router-dom" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/react-router-dom</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），您可以将params传递给组件以通过以下路径进行路由：</font></font></p>

<pre><code>&lt;Route path="/ideas/:value" component ={CreateIdeaView} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过链接（考虑将testValue属性传递给呈现链接的相应组件（例如，上面的App组件））</font></font></p>

<pre><code>&lt;Link to={`/ideas/${ this.props.testValue }`}&gt;Create Idea&lt;/Link&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将props传递给组件构造函数，则可以通过以下方式使用value参数</font></font></p>

<pre><code>props.match.params.value
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐蛋蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code> &lt;Link<font></font>
    to={{<font></font>
      pathname: "/product-detail",<font></font>
      productdetailProps: {<font></font>
       productdetail: "I M passed From Props"<font></font>
      }<font></font>
   }}&gt;<font></font>
    Click To Pass Props<font></font>
&lt;/Link&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路由重定向的另一端执行此操作</font></font></p>

<pre><code>componentDidMount() {<font></font>
            console.log("product props is", this.props.location.productdetailProps);<font></font>
          }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一种方法可以传递多个参数。</font><font style="vertical-align: inherit;">您可以将“ to”作为对象而不是字符串。</font></font></p>

<pre><code>// your route setup<font></font>
&lt;Route path="/category/:catId" component={Category} / &gt;<font></font>
<font></font>
// your link creation<font></font>
const newTo = { <font></font>
  pathname: "/category/595212758daa6810cbba4104", <font></font>
  param1: "Par1" <font></font>
};<font></font>
// link to the "location"<font></font>
// see (https://reacttraining.com/react-router/web/api/location)<font></font>
&lt;Link to={newTo}&gt; &lt;/Link&gt;<font></font>
<font></font>
// In your Category Component, you can access the data like this<font></font>
this.props.match.params.catId // this is 595212758daa6810cbba4104 <font></font>
this.props.location.param1 // this is Par1<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
