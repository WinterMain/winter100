---
layout: question
title:  使用Mongoose在Koa中编写来自流查询的流响应
date:   2020-04-03T03:05:27.000Z
description: 我正在尝试从Mongo数据库向Koa应用程序的用户（使用Mongoose）发送大型结果集。我最初有这样的东西：var res = yield Mo...
img: 
author: 小小
category: question
answer: 1
tags: node.js KoaJS
topic: KoaJS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试从Mongo数据库向Koa应用程序的用户（使用Mongoose）发送大型结果集。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最初有这样的东西：</font></font></p>

<pre><code>var res = yield Model.find().limit(500).exec();<font></font>
this.body = {data: res};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，发送的结果集的大小导致应用程序超时，因此，我想流式处理来自数据库的响应。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Mongoose，您可以通过执行以下操作将查询结果转换为流：</font></font></p>

<pre><code>var stream = Model.find().limit(300).stream();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，我不确定如何在保留所需格式的同时将此流写入响应中。</font><font style="vertical-align: inherit;">我希望这样的事情发生：</font></font></p>

<pre><code>this.body.write("{data: "});<font></font>
this.body.write(stream);<font></font>
this.body.write("}");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我知道Koa中没有body.write，而且我确定我也没有正确使用流。</font><font style="vertical-align: inherit;">有人可以指出我正确的方向吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><a href="https://www.npmjs.com/package/koa-write" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">koa-write</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能会有所帮助。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但您可能不需要。</font><font style="vertical-align: inherit;">Koa允许您执行以下操作：</font></font></p>

<pre><code>this.body = stream;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的情况下，您可以创建转换流，因为猫鼬流并不是您想要输出的。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
