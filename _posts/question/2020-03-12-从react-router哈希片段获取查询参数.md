---
layout: question
title:  从react-router哈希片段获取查询参数
date:   2020-03-12T06:37:36.000Z
description: 我在客户端上为我的应用程序使用react和react-router。我似乎无法弄清楚如何从如下网址获取以下查询参数：http //xmen.datab...
img: 
author: 猿路易
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在客户端上为我的应用程序使用react和react-router。</font><font style="vertical-align: inherit;">我似乎无法弄清楚如何从如下网址获取以下查询参数：</font></font></p>

<pre><code>http://xmen.database/search#/?status=APPROVED&amp;page=1&amp;limit=20
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的路线如下所示（我知道该路线完全错误）：</font></font></p>

<pre><code>var routes = (<font></font>
&lt;Route&gt;<font></font>
    &lt;DefaultRoute handler={SearchDisplay}/&gt;<font></font>
    &lt;Route name="search" path="?status=:status&amp;page=:page&amp;limit=:limit" handler={SearchDisplay}/&gt;<font></font>
    &lt;Route name="xmen" path="candidate/:accountId" handler={XmenDisplay}/&gt;<font></font>
&lt;/Route&gt;<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的路线工作正常，但我不确定如何格式化路径以获取所需的参数。</font><font style="vertical-align: inherit;">感谢任何帮助！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1000篇《从react-router哈希片段获取查询参数》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AHarry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://www.npmjs.com/package/query-string" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查询字符串</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块</font><font style="vertical-align: inherit;">创建优化的生产版本时，可能会出现以下错误</font><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法缩小此文件中的代码：./node_modules/query-string/index.js:8</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了克服这个问题，请使用另一个名为</font></font><a href="https://www.npmjs.com/package/stringquery" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">stringquery的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块，该模块</font><font style="vertical-align: inherit;">在运行构建时可以很好地完成相同的过程。</font></font></p>

<pre><code>import querySearch from "stringquery";<font></font>
<font></font>
var query = querySearch(this.props.location.search);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖蛋蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新2017.12.25</font></font></strong></p>

<p><code>"react-router-dom": "^4.2.2"</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网址喜欢 </font></font></p>

<p><code>BrowserHistory</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">： </font></font><code>http://localhost:3000/demo-7/detail/2?sort=name</code></p>

<p><code>HashHistory</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">： </font></font><code>http://localhost:3000/demo-7/#/detail/2?sort=name</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有</font></font><a href="https://github.com/sindresorhus/query-string" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查询字符串</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依赖性：</font></font></p>

<pre><code>this.id = props.match.params.id;<font></font>
this.searchObj = queryString.parse(props.location.search);<font></font>
this.from = props.location.state.from;<font></font>
<font></font>
console.log(this.id, this.searchObj, this.from);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果：</font></font></p>

<p><code>2 {sort: "name"} home</code></p>

<hr>

<p><code>"react-router": "^2.4.1"</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网址喜欢 </font></font><code>http://localhost:8080/react-router01/1?name=novaline&amp;age=26</code></p>

<p><code>const queryParams = this.props.location.query;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">queryParams是一个包含查询参数的对象： </font></font><code>{name: novaline, age: 26}</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子飞云</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">OLD（v4之前的版本）：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编写es6并使用react 0.14.6 / react-router 2.0.0-rc5。</font><font style="vertical-align: inherit;">我使用以下命令在组件中查询查询参数：</font></font></p>

<pre><code>this.props.location.query
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它在url中创建所有可用查询参数的哈希。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新（React Router v4 +）： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Router 4中的this.props.location.query已被删除（当前使用v4.1.1），有关此问题的更多信息：</font><a href="https://github.com/ReactTraining/react-router/issues/4410" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/ReactTraining/react-router/issues/4410" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/ReactTraining/react-router/issues/4410</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来他们希望您使用自己的方法来解析查询参数，当前正在使用此库来填补空白：</font><a href="https://github.com/sindresorhus/query-string" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/sindresorhus/query-string" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/sindresorhus/query-string</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry乐Harry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用stringquery包：</font></font></p>
</blockquote>

<pre><code>import qs from "stringquery";<font></font>
<font></font>
const obj = qs("?status=APPROVED&amp;page=1limit=20");  <font></font>
// &gt; { limit: "10", page:"1", status:"APPROVED" }<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用查询字符串包：</font></font></p>
</blockquote>

<pre><code>import qs from "query-string";<font></font>
const obj = qs.parse(this.props.location.search);<font></font>
console.log(obj.param); // { limit: "10", page:"1", status:"APPROVED" } <font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无包装： </font></font></p>
</blockquote>

<pre><code>const convertToObject = (url) =&gt; {<font></font>
  const arr = url.slice(1).split(/&amp;|=/); // remove the "?", "&amp;" and "="<font></font>
  let params = {};<font></font>
<font></font>
  for(let i = 0; i &lt; arr.length; i += 2){<font></font>
    const key = arr[i], value = arr[i + 1];<font></font>
    params[key] = value ; // build the object = { limit: "10", page:"1", status:"APPROVED" }<font></font>
  }<font></font>
  return params;<font></font>
};<font></font>
<font></font>
<font></font>
const uri = this.props.location.search; // "?status=APPROVED&amp;page=1&amp;limit=20"<font></font>
<font></font>
const obj = convertToObject(uri);<font></font>
<font></font>
console.log(obj); // { limit: "10", page:"1", status:"APPROVED" }<font></font>
<font></font>
<font></font>
// obj.status<font></font>
// obj.page<font></font>
// obj.limit<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望有帮助:)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编码愉快！</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
