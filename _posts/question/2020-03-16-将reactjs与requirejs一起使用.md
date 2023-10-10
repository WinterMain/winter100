---
layout: question
title:  将reactjs与requirejs一起使用
date:   2020-03-16T07:23:24.000Z
description: 最近，我开始reactjs与backbonejs路由器一起使用来构建应用程序。我通常将use requirejs用于依赖项和代码管理。但是，当我尝试包...
img: 
author: 猪猪Stafan小卤蛋
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最近，我开始</font></font><code>reactjs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><code>backbonejs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路由器</font><font style="vertical-align: inherit;">一起使用</font><font style="vertical-align: inherit;">来构建应用程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通常将use </font></font><code>requirejs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于依赖项和代码管理。</font><font style="vertical-align: inherit;">但是，当我尝试包含包含</font></font><code>jsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法的</font><font style="vertical-align: inherit;">文件时会出现问题</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是我目前所拥有的</font></font><code>router.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>define(["backbone", "react"], function(Backbone, React) {<font></font>
<font></font>
  var IndexComponent = React.createClass({<font></font>
    render : function() {<font></font>
      return (<font></font>
        &lt;div&gt;<font></font>
        Some Stuff goes here<font></font>
        &lt;/div&gt;<font></font>
        );<font></font>
    }<font></font>
  });<font></font>
<font></font>
<font></font>
<font></font>
  return Backbone.Router.extend({<font></font>
    routes : {<font></font>
      "": "index"<font></font>
    },<font></font>
    index : function() {<font></font>
      React.renderComponent(&lt;IndexComponent /&gt;, document.getElementById('index'));<font></font>
    }<font></font>
  });<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何将IndexComponent放在其自己的文件中并在此文件中调用它？</font><font style="vertical-align: inherit;">我尝试了通常的方法（与骨干和反应相同），但是由于</font></font><code>jsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法</font><font style="vertical-align: inherit;">错误</font><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1795篇《将reactjs与requirejs一起使用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
