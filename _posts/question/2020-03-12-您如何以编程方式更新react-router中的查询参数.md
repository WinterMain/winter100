---
layout: question
title:  您如何以编程方式更新react-router中的查询参数？
date:   2020-03-12T07:47:21.000Z
description: 我似乎找不到不使用来使用react-router更新查询参数的方法<Link/>。hashHistory.push(url)似乎没有注册查询参数，并且似乎...
img: 
author: 小小飞云
category: question
answer: 2
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我似乎找不到不使用来使用react-router更新查询参数的方法</font></font><code>&lt;Link/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><code>hashHistory.push(url)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎没有注册查询参数，并且似乎也不能将查询对象或任何内容作为第二个参数传递。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何从更改URL </font></font><code>/shop/Clothes/dresses</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以</font></font><code>/shop/Clothes/dresses?color=blue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在反应路由器没有使用</font></font><code>&lt;Link&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且是一个</font></font><code>onChange</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">真正的函数来监听查询变化的唯一途径？</font><font style="vertical-align: inherit;">为什么没有自动检测到查询更改并对参数更改做出反应？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1082篇《您如何以编程方式更新react-router中的查询参数？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>It can also be written this way </p>

<pre><code>this.props.history.push(`${window.location.pathname}&amp;page=${pageNumber}`)
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AHarry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您需要一个模块来轻松解析查询字符串时，建议</font><font style="vertical-align: inherit;">使用</font></font><a href="https://www.npmjs.com/package/query-string" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查询字符串</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块。</font></font></p>

<blockquote>
  <p><a href="http://localhost:3000?token=xxx-xxx-xxx" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：// localhost：3000？token = xxx-xxx-xxx</font></font></a></p>
</blockquote>

<pre><code>componentWillMount() {<font></font>
    var query = queryString.parse(this.props.location.search);<font></font>
    if (query.token) {<font></font>
        window.localStorage.setItem("jwt", query.token);<font></font>
        store.dispatch(push("/"));<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，成功进行Google-Passport身份验证后，我将从Node.js服务器重定向回我的客户端，该身份验证使用令牌作为查询参数进行重定向。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用query-string模块对其进行解析，保存并使用</font></font><a href="https://github.com/reactjs/react-router-redux" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">react-router-redux的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> push更新URL中的查询参数</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
