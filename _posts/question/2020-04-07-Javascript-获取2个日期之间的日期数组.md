---
layout: question
title:  Javascript-获取2个日期之间的日期数组
date:   2020-04-07T03:36:54.000Z
description: var range = getDates(new Date(), new Date().addDays(7));我希望“范围”是一个日期对象数组，两...
img: 
author: Stafan
category: question
answer: 2
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><pre><code>var range = getDates(new Date(), new Date().addDays(7));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望“范围”是一个日期对象数组，两个日期之间的每一天。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">诀窍在于它也应该处理月份和年份的边界。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4088篇《Javascript-获取2个日期之间的日期数组》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光凯</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看了上面所有的东西。</font><font style="vertical-align: inherit;">最终写了自己。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不需要为此</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本机的for循环就足够了</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且最有意义，因为存在for循环来对范围内的值进行计数。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一线：</font></font></strong></p>

<pre><code>var getDaysArray = function(s,e) {for(var a=[],d=s;d&lt;=e;d.setDate(d.getDate()+1)){ a.push(new Date(d));}return a;};
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">长版</font></font></strong></p>

<pre><code>var getDaysArray = function(start, end) {<font></font>
    for(var arr=[],dt=start; dt&lt;=end; dt.setDate(dt.getDate()+1)){<font></font>
        arr.push(new Date(dt));<font></font>
    }<font></font>
    return arr;<font></font>
};<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">列出以下日期：</font></font></strong></p>

<pre><code>var daylist = getDaysArray(new Date("2018-05-01"),new Date("2018-07-01"));<font></font>
daylist.map((v)=&gt;v.toISOString().slice(0,10)).join("")<font></font>
/*<font></font>
Output: <font></font>
    "2018-05-01<font></font>
    2018-05-02<font></font>
    2018-05-03<font></font>
    ...<font></font>
    2018-06-30<font></font>
    2018-07-01"<font></font>
*/<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从过去的日期到现在的天数：</font></font></strong></p>

<pre><code>var daylist = getDaysArray(new Date("2018-05-01"),new Date());<font></font>
daylist.map((v)=&gt;v.toISOString().slice(0,10)).join("")<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><pre><code>Date.prototype.addDays = function(days) {<font></font>
    var date = new Date(this.valueOf());<font></font>
    date.setDate(date.getDate() + days);<font></font>
    return date;<font></font>
}<font></font>
<font></font>
function getDates(startDate, stopDate) {<font></font>
    var dateArray = new Array();<font></font>
    var currentDate = startDate;<font></font>
    while (currentDate &lt;= stopDate) {<font></font>
        dateArray.push(new Date (currentDate));<font></font>
        currentDate = currentDate.addDays(1);<font></font>
    }<font></font>
    return dateArray;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个功能</font></font><a href="http://jsfiddle.net/jfhartsock/cM3ZU/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示</font></font></a> <a href="http://jsfiddle.net/jfhartsock/cM3ZU/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/jfhartsock/cM3ZU/</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
