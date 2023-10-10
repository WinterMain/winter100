---
layout: question
title:  react-router在子组件中获取this.props.location
date:   2020-03-18T10:36:51.000Z
description: 据我所知，<Route path="/" component={App} />会给出App与路由相关的道具，例如location和params。如果我的A...
img: 
author: 伽罗猿
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知，</font></font><code>&lt;Route path="/" component={App} /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会给出</font></font><code>App</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与路由相关的道具，例如</font></font><code>location</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>params</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果我的</font></font><code>App</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件有许多嵌套的子组件，那么我如何在不使用以下子项的情况下让子组件访问这些道具：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从App传递道具</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用窗口对象</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为嵌套的子组件创建路线 </font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我以为</font></font><code>this.context.router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会有一些与路线有关的信息，但</font></font><code>this.context.router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎只有一些功能可以操纵路线。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
