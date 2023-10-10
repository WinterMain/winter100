---
layout: post
title:  怎样使用React Router
date:   2017-09-21T16:02:15.000Z
description: React Router  Agenda基本用法模块分割Router 4.0...
img: http://img2.imgtn.bdimg.com/it/u=337664698,646557394&fm=27&gp=0.jpg
author: Winter
category: blog
answer: 0
tags: 前端
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><h1><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strong></h1>

<h1>&nbsp;</h1>

<h1><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;React Router</strong></h1>

<p><br />
*###end###*<br />
&nbsp;</p>

<p>Agenda</p>

<p>&nbsp;</p>

<ul>
	<li>基本用法</li>
	<li>模块分割</li>
	<li>Router 4.0</li>
</ul>

<h2><br />
*###end###*<br />
基本用法</h2>

<p>&nbsp;</p>

<p>http://localhost:8080/#/repos，加载Repos组件；</p>

<p>http://localhost:8080/#/about，加载About组件</p>

<p>&nbsp;</p>

<p>Router组件是一个容器，路由通过Route组件定义</p>

<h2><br />
*###end###*<br />
路由嵌套</h2>

<p>&nbsp;</p>

<h3>此时访问/about时，会先加载App组件，然后在它的内部再加载about组件。</h3>

<p>应用场景：当你的页面有公共的导航和底部信息时则可以用路由嵌套的特性</p>

<h2><br />
*###end###*<br />
路由嵌套-父组件的定义</h2>

<p><br />
*###end###*<br />
&nbsp;</p>
</div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第19篇《怎样使用React Router》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
