---
layout: question
title:  您如何在Node.js中记录JSON对象的内容？
date:   2020-03-24T07:13:15.000Z
description: 是否可以在Node.js中打印对象内容，例如方法和属性？目前，我正在尝试打印会话对象并获取以下内容：console.log("Session " ...
img: 
author: 小小Stafan宝儿
category: question
answer: 5
tags: json Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以在Node.js中打印对象内容，例如方法和属性？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，我正在尝试打印会话对象并获取以下内容：</font></font></p>

<pre><code>console.log("Session:" + session);<font></font>
&gt; Session:[object Object]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能以类似于PHP中的print_r（array）的方式，或以Java中的.toString来使用。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3425篇《您如何在Node.js中记录JSON对象的内容？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">console.dir（）是最直接的方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><pre><code>console.log(obj);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行：节点app.js&gt; output.txt</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Pro</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">试试这个：</font></font></p>

<pre><code>console.log("Session: %j", session);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果对象可以转换为JSON，那将起作用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><pre><code>function prettyJSON(obj) {<font></font>
    console.log(JSON.stringify(obj, null, 2));<font></font>
}<font></font>
<font></font>
// obj -&gt; value to convert to a JSON string<font></font>
// null -&gt; (do nothing)<font></font>
// 2 -&gt; 2 spaces per indent level<font></font>
</code></pre>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN上的JSON.stringify</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将适用于任何对象：</font></font></p>

<pre><code>    var util = require("util");<font></font>
    console.log(util.inspect(myObject, {showHidden: false, depth: null}));<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
