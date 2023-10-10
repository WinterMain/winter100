---
layout: question
title:  React-router：如何手动调用链接？
date:   2020-03-12T02:59:00.000Z
description: 我是ReactJS和React-Router的新手。我有一个组件，通过props <Link/>从react-router接收一个对象。每当用户单击该组件...
img: 
author: Gil启人
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是ReactJS和React-Router的新手。</font><font style="vertical-align: inherit;">我有一个组件，通过props </font></font><code>&lt;Link/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-router</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接收一个</font><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">每当用户单击该组件内部的“下一步”按钮时，我都想</font></font><code>&lt;Link/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动</font><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我正在使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">refs</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">访问</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持实例，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并手动单击</font></font><code>&lt;Link/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成</font><font style="vertical-align: inherit;">的'a'标记</font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法手动调用链接（例如</font></font><code>this.props.next.go</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我目前的代码：</font></font></p>

<pre><code>//in MasterPage.js<font></font>
var sampleLink = &lt;Link to="/sample"&gt;Go To Sample&lt;/Link&gt;<font></font>
&lt;Document next={sampleLink} /&gt;<font></font>
<font></font>
//in Document.js<font></font>
...<font></font>
var Document = React.createClass({<font></font>
   _onClickNext: function() {<font></font>
      var next = this.refs.next.getDOMNode();<font></font>
      next.querySelectorAll('a').item(0).click(); //this sounds like hack to me<font></font>
   },<font></font>
   render: function() {<font></font>
      return (<font></font>
         ...<font></font>
         &lt;div ref="next"&gt;{this.props.next} &lt;img src="rightArrow.png" onClick={this._onClickNext}/&gt;&lt;/div&gt;<font></font>
         ...<font></font>
      );<font></font>
   }<font></font>
});<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我想要的代码：</font></font></p>

<pre><code>//in MasterPage.js<font></font>
var sampleLink = &lt;Link to="/sample"&gt;Go To Sample&lt;/Link&gt;<font></font>
&lt;Document next={sampleLink} /&gt;<font></font>
<font></font>
//in Document.js<font></font>
...<font></font>
var Document = React.createClass({<font></font>
   render: function() {<font></font>
      return (<font></font>
         ...<font></font>
         &lt;div onClick={this.props.next.go}&gt;{this.props.next.label} &lt;img src="rightArrow.png" /&gt; &lt;/div&gt;<font></font>
         ...<font></font>
      );<font></font>
   }<font></font>
});<font></font>
...<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙猪猪乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">5.x版中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以使用以下</font></font><a href="https://reacttraining.com/react-router/core/api/Hooks/usehistory" rel="noreferrer"><code>useHistory</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">钩子</font></font><code>react-router-dom</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>// Sample extracted from https://reacttraining.com/react-router/core/api/Hooks/usehistory<font></font>
import { useHistory } from "react-router-dom";<font></font>
<font></font>
function HomeButton() {<font></font>
  let history = useHistory();<font></font>
<font></font>
  function handleClick() {<font></font>
    history.push("/home");<font></font>
  }<font></font>
<font></font>
  return (<font></font>
    &lt;button type="button" onClick={handleClick}&gt;<font></font>
      Go home<font></font>
    &lt;/button&gt;<font></font>
  );<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞Pro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应路由器4</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过v4中的上下文轻松调用push方法：</font></font></p>

<p><code>this.context.router.push(this.props.exitPath);</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上下文在哪里：</font></font></p>

<pre><code>static contextTypes = {<font></font>
    router: React.PropTypes.object,<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><a href="https://github.com/rackt/react-router/blob/bf89168acb30b6dc9b0244360bcbac5081cf6b38/examples/transitions/app.js#L50" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/rackt/react-router/blob/bf89168acb30b6dc9b0244360bcbac5081cf6b38/examples/transitions/app.js#L50</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者您甚至可以尝试执行onClick这个（更暴力的解决方案）：</font></font></p>

<pre><code>window.location.assign("/sample");
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
