---
layout: question
title:  父级的componentDidMount是否在子级的所有componentDidMount之后调用？
date:   2020-03-17T04:03:07.000Z
description: 我的父母渲染中有以下代码<div>           {    this.state.OSMData.map(function(item, in...
img: 
author: 猿JinJin
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的父母渲染中有以下代码</font></font></p>

<pre><code>&lt;div&gt;           <font></font>
{<font></font>
    this.state.OSMData.map(function(item, index) {<font></font>
        return &lt;Chart key={index} feature={item} ref="charts" /&gt;<font></font>
    })<font></font>
}<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及下面我孩子图表中的代码</font></font></p>

<pre><code>&lt;div className="all-charts"&gt;<font></font>
    &lt;ChartistGraph data={chartData} type="Line" options={options} /&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为只有在加载所有子项之后，才调用父项的componentDidMount。</font><font style="vertical-align: inherit;">但是在这里，父级的componentDidMount在子级的componentDidMount之前被调用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是工作方式吗？</font><font style="vertical-align: inherit;">还是我做错了什么。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果这是工作方式，我如何检测从父级加载所有子级组件的时间？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1866篇《父级的componentDidMount是否在子级的所有componentDidMount之后调用？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
