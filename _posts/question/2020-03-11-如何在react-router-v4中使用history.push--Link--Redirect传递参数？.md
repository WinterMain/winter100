---
layout: question
title:  如何在react-router v4中使用history.push / Link / Redirect传递参数？
date:   2020-03-11T03:41:55.000Z
description: 我们如何this.props.history.push('/page')在React-Router v4中传递参数？.then(response =>...
img: 
author: 村村凯宝儿
category: question
answer: 2
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们如何</font></font><code>this.props.history.push('/page')</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React-Router v4中</font><font style="vertical-align: inherit;">传递参数</font><font style="vertical-align: inherit;">？</font></font></p>

<pre><code>.then(response =&gt; {<font></font>
       var r = this;<font></font>
        if (response.status &gt;= 200 &amp;&amp; response.status &lt; 300) {<font></font>
             r.props.history.push('/template');<font></font>
          });<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第609篇《如何在react-router v4中使用history.push / Link / Redirect传递参数？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门斯丁</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不需要与路由器一起使用。</font><font style="vertical-align: inherit;">这对我有用：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的父页面中， </font></font></p>

<pre><code>&lt;BrowserRouter&gt;<font></font>
   &lt;Switch&gt;<font></font>
        &lt;Route path="/routeA" render={(props)=&gt; (<font></font>
          &lt;ComponentA {...props} propDummy={50} /&gt;<font></font>
        )} /&gt;<font></font>
<font></font>
        &lt;Route path="/routeB" render={(props)=&gt; (<font></font>
          &lt;ComponentB {...props} propWhatever={100} /&gt;<font></font>
          )} /&gt; <font></font>
      &lt;/Switch&gt;<font></font>
&lt;/BrowserRouter&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后可以在ComponentA或ComponentB中访问 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此道具历史</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象，包括this.props.history.push方法。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙GO</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用， </font></font></p>

<p><code>this.props.history.push("/template", { ...response })</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
要么
</font></font><code>this.props.history.push("/template", { response: response })</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后您可以</font></font><code>/template</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过以下代码</font><font style="vertical-align: inherit;">从</font><font style="vertical-align: inherit;">组件</font><font style="vertical-align: inherit;">访问已解析的数据</font><font style="vertical-align: inherit;">，</font></font></p>

<p><code>const state = this.props.location.state</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读更多有关React </font></font><a href="https://javamastermind.com/2020/01/16/react-navigation-manage-session-history/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Session History Management的信息</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
