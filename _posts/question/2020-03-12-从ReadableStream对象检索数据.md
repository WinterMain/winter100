---
layout: question
title:  从ReadableStream对象检索数据？
date:   2020-03-12T04:45:39.000Z
description: 我如何从ReadableStream对象中获取信息？我正在使用Fetch API，但从文档中看不出来。 正文以a形式返回ReadableStrea...
img: 
author: 村村伽罗Mandy
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何从</font></font><code>ReadableStream</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象中</font><font style="vertical-align: inherit;">获取信息</font><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Fetch API，但从文档中看不出来。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正文以a形式返回</font></font><code>ReadableStream</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我只想访问此流中的一个属性。</font><font style="vertical-align: inherit;">在浏览器开发工具的Response下，我似乎以JavaScript对象的形式将这些信息组织到了属性中。</font></font></p>

<pre><code>fetch('http://192.168.5.6:2000/api/car', obj)<font></font>
    .then((res) =&gt; {<font></font>
        if(res.status == 200) {<font></font>
            console.log("Success :" + res.statusText);   //works just fine<font></font>
        }<font></font>
        else if(res.status == 400) {<font></font>
            console.log(JSON.stringify(res.body.json());  //res.body is undefined.<font></font>
        }<font></font>
<font></font>
        return res.json();<font></font>
    })<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第956篇《从ReadableStream对象检索数据？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">某些人可能会发现一个</font></font><code>async</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有用</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">示例：</font></font></p>

<pre><code>var response = await fetch("https://httpbin.org/ip");<font></font>
var body = await response.json(); // .json() is asynchronous and therefore must be awaited<font></font>
</code></pre>

<p><code>json()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将响应的主体从</font></font><code>ReadableStream</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转换为json对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>await</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句必须被包裹在一个</font></font><code>async</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能，但是可以运行</font></font><code>await</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Chrome的控制台直接语句（如版本62）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光小卤蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不喜欢那时的连锁店。</font><font style="vertical-align: inherit;">然后，第二个将无法访问状态。</font><font style="vertical-align: inherit;">如前所述，“ response.json（）”返回一个承诺。</font><font style="vertical-align: inherit;">在类似于第二秒的行为中返回“ response.json（）”的当时结果。</font><font style="vertical-align: inherit;">它具有在响应范围内的额外好处。</font></font></p>

<pre><code>return fetch(url, params).then(response =&gt; {<font></font>
    return response.json().then(body =&gt; {<font></font>
        if (response.status === 200) {<font></font>
            return body<font></font>
        } else {<font></font>
            throw body<font></font>
        }<font></font>
    })<font></font>
})<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗小卤蛋米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">聚会晚了一点，但是在使用Sharepoint框架从Odata $ batch请求产生的ReadableStream中获取有用的东西时遇到了一些问题。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与OP有类似的问题，但是在我的案例中，解决方案是使用与.json（）不同的转换方法。</font><font style="vertical-align: inherit;">以我为例，.text（）就像一种魅力。</font><font style="vertical-align: inherit;">但是，必须进行一些修改才能从文本文件中获取一些有用的JSON。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidAPro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><code>res.json()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回承诺。</font><font style="vertical-align: inherit;">尝试...</font></font></p>

<pre><code>res.json().then(body =&gt; console.log(body));
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
