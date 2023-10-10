---
layout: question
title:  将本地文件中的json数据加载到React JS中
date:   2020-03-18T07:45:49.000Z
description: 我有一个React组件，我想从文件中加载JSON数据。即使我将变量数据创建为全局变量，控制台日志当前也不起作用'use strict';var R...
img: 
author: Tom斯丁
category: question
answer: 3
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个React组件，我想从文件中加载JSON数据。</font><font style="vertical-align: inherit;">即使我将变量</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数据</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建</font><font style="vertical-align: inherit;">为全局</font><font style="vertical-align: inherit;">变量，控制台日志当前也不起作用</font></font></p>

<pre><code>'use strict';<font></font>
<font></font>
var React = require('react/addons');<font></font>
<font></font>
// load in JSON data from file<font></font>
var data;<font></font>
<font></font>
var oReq = new XMLHttpRequest();<font></font>
oReq.onload = reqListener;<font></font>
oReq.open("get", "data.json", true);<font></font>
oReq.send();<font></font>
<font></font>
function reqListener(e) {<font></font>
    data = JSON.parse(this.responseText);<font></font>
}<font></font>
console.log(data);<font></font>
<font></font>
var List = React.createClass({<font></font>
  getInitialState: function() {<font></font>
    return {data: this.props.data};    <font></font>
  },<font></font>
  render: function() {<font></font>
    var listItems = this.state.data.map(function(item) {<font></font>
        var eachItem = item.works.work;        <font></font>
<font></font>
        var photo = eachItem.map(function(url) {<font></font>
            return (<font></font>
                &lt;td&gt;{url.urls}&lt;/td&gt; <font></font>
            )<font></font>
        });<font></font>
    });<font></font>
    return &lt;ul&gt;{listItems}&lt;/ul&gt;<font></font>
  }<font></font>
});<font></font>
<font></font>
var redBubble = React.createClass({<font></font>
    render: function() {<font></font>
      return (<font></font>
        &lt;div&gt;<font></font>
          &lt;List data={data}/&gt;          <font></font>
        &lt;/div&gt;<font></font>
      );<font></font>
    }<font></font>
  });<font></font>
<font></font>
module.exports = redBubble;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理想情况下，我希望这样做，但它不起作用-它试图</font><font style="vertical-align: inherit;">在文件名的末尾</font><font style="vertical-align: inherit;">添加</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ .js”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>var data = require('./data.json');
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的方式，最好是“反应”方式的任何建议，将不胜感激！</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom老丝</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>My JSON file name: terrifcalculatordata.json<font></font>
<font></font>
[<font></font>
    {<font></font>
      "id": 1,<font></font>
      "name": "Vigo",<font></font>
      "picture": "./static/images/vigo.png",<font></font>
      "charges": "PKR 100 per excess km"<font></font>
    },<font></font>
    {<font></font>
      "id": 2,<font></font>
      "name": "Mercedes",<font></font>
      "picture": "./static/images/Marcedes.jpg",<font></font>
      "charges": "PKR 200 per excess km"<font></font>
    },<font></font>
    {<font></font>
        "id": 3,<font></font>
        "name": "Lexus",<font></font>
        "picture": "./static/images/Lexus.jpg",<font></font>
        "charges": "PKR 150 per excess km"<font></font>
      }<font></font>
]<font></font>
<font></font>
1st Import on top:<font></font>
<font></font>
import calculatorData from "../static/data/terrifcalculatordata.json";<font></font>
<font></font>
then after return:<font></font>
<font></font>
                  &lt;div&gt;<font></font>
                      {<font></font>
                        calculatorData.map((calculatedata, index) =&gt; {<font></font>
                          return(<font></font>
                          &lt;div key={index}&gt; <font></font>
                            &lt;img<font></font>
                            src={calculatedata.picture}<font></font>
                            class="d-block"<font></font>
                            height="170"<font></font>
                          /&gt;<font></font>
                          &lt;p&gt;<font></font>
                            {calculatedata.charges}<font></font>
                          &lt;/p&gt;<font></font>
                     &lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYHarryHarry</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用webpack配置将JSON文件添加为外部文件。</font><font style="vertical-align: inherit;">然后，您可以在任何react模块中加载该json。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看看</font></font><a href="https://stackoverflow.com/a/30602665/6886570"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个答案</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里达蒙</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您正在打开一个</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests#Asynchronous_request" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">异步连接</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是您已经编写了代码，就像它是同步的一样。</font><font style="vertical-align: inherit;">该</font></font><code>reqListener</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回调函数将不会与你的代码同步执行（即前</font></font><code>React.createClass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），但你的整个段已运行后，才和响应已经从远程位置接收。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非您使用零延迟量子纠缠连接，否则</font><font style="vertical-align: inherit;">在您运行所有语句之后</font><font style="vertical-align: inherit;">就</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很好了</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如，要记录接收到的数据，您将：</font></font></p>

<pre><code>function reqListener(e) {<font></font>
    data = JSON.parse(this.responseText);<font></font>
    console.log(data);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我没有</font></font><code>data</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React组件中</font><font style="vertical-align: inherit;">看到使用</font><font style="vertical-align: inherit;">，因此我只能从理论上提出建议：为什么不在</font><font style="vertical-align: inherit;">回调中</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的组件？</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
