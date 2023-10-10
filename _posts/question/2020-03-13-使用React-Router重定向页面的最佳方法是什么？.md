---
layout: question
title:  使用React Router重定向页面的最佳方法是什么？
date:   2020-03-13T07:35:32.000Z
description: 我是React Router的新手，并了解到重定向页面的方法有很多：使用 browserHistory.push("/path")import ...
img: 
author: 凯梅小胖
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是React Router的新手，并了解到重定向页面的方法有很多：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用 </font></font><code>browserHistory.push("/path")</code></p>

<pre><code>import { browserHistory } from 'react-router';<font></font>
//do something...<font></font>
browserHistory.push("/path");<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用 </font></font><code>this.context.router.push("/path")</code></p>

<pre><code>class Foo extends React.Component {<font></font>
    constructor(props, context) {<font></font>
        super(props, context);<font></font>
        //do something...<font></font>
    }<font></font>
    redirect() {<font></font>
        this.context.router.push("/path")<font></font>
    }<font></font>
}<font></font>
<font></font>
Foo.contextTypes = {<font></font>
    router: React.PropTypes.object<font></font>
}<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React Router v4中，有</font></font><code>this.context.history.push("/path")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>this.props.history.push("/path")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">详细信息：</font></font><a href="https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在React Router v4中推送到历史记录？</font></font></a></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对所有这些选项感到困惑，是否有最佳的方法来重定向页面？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1394篇《使用React Router重定向页面的最佳方法是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在有了react-router </font></font><code>v15.1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以后，我们可以进行</font></font><code>useHistory</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">钩子了，这是超级简单明了的方式。</font><font style="vertical-align: inherit;">这是源博客中的一个简单示例。</font></font></p>

<pre><code>import { useHistory } from "react-router-dom";<font></font>
<font></font>
function BackButton({ children }) {<font></font>
  let history = useHistory()<font></font>
  return (<font></font>
    &lt;button type="button" onClick={() =&gt; history.goBack()}&gt;<font></font>
      {children}<font></font>
    &lt;/button&gt;<font></font>
  )<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在任何功能组件和自定义挂钩中使用它。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，这不适用于与其他任何钩子相同的类组件。</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处了解更多信息</font></font><a href="https://reacttraining.com/blog/react-router-v5-1/#usehistory" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://reacttraining.com/blog/react-router-v5-1/#usehistory</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
