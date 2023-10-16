---
layout: question
title:  如何使用NodeJS将UTC日期格式化为YYYY-MM-DD hh：mm：ss字符串？
date:   2020-03-23T01:29:18.000Z
description: 我想使用NodeJS将a格式化Date为以下字符串格式：var ts_hms = new Date(UTC);ts_hms.format("%Y-%...
img: 
author: 猪猪
category: question
answer: 2
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想使用NodeJS将a格式化</font></font><code>Date</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为以下字符串格式：</font></font></p>

<pre><code>var ts_hms = new Date(UTC);<font></font>
ts_hms.format("%Y-%m-%d %H:%M:%S");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我怎么做？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2587篇《如何使用NodeJS将UTC日期格式化为YYYY-MM-DD hh：mm：ss字符串？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新2017-03-29：添加了date-fns，有关Moment和Datejs的一些注意事项</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
更新2016-09-14：添加了SugarJS，它似乎具有一些出色的日期/时间功能。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，因为没有人提供实际答案，所以这是我的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">图书馆无疑是以标准方式处理日期和时间的最佳选择。</font><font style="vertical-align: inherit;">在日期/时间计算中有很多边缘情况，因此将开发移交给库很有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是与Node兼容的主要时间格式库的列表：</font></font></p>

<ul>
<li><a href="http://momentjs.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Moment.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> [ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢Mustafa</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ]“用于解析，处理和格式化日期的轻量级（4.3k）javascript日期库”-包括国际化，计算和相对日期格式- </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新2017-03-29</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：不太轻巧仍然是最全面的解决方案，尤其是在需要时区支持的情况下。</font></font></li>
<li><a href="https://date-fns.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">date-fns</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> [ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于Fractalf而于2017-03-29添加</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ]小型，快速，适用于标准JS日期对象。</font><font style="vertical-align: inherit;">如果您不需要时区支持，则可以替代Moment。</font></font></li>
<li><a href="https://sugarjs.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SugarJS-</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个通用的帮助程序库，为JavaScript内置对象类型添加了许多急需的功能。</font><font style="vertical-align: inherit;">包括一些出色的日期/时间功能。</font></font></li>
<li><a href="https://github.com/samsonjs/strftime" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">strftime-准确地说</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，很简单</font></font></li>
<li><a href="https://github.com/borgar/dateutil" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dateutil-</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我在MomentJS之前使用的工具</font></font></li>
<li><a href="https://github.com/dodo/node-formatdate" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点格式日期</font></font></a></li>
<li><a href="https://github.com/hgarcia/TimeTraveller" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TimeTraveller-</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> “ Time Traveler提供了一组实用的方法来处理日期。从加减到格式化</font><a href="https://github.com/hgarcia/TimeTraveller" rel="noreferrer"><font style="vertical-align: inherit;">。TimeTraveler</font></a><font style="vertical-align: inherit;">仅扩展它创建的日期对象，而不会污染全局名称空间。”</font></font></li>
<li><a href="http://tempus-js.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tempus</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> [感谢Dan D]-更新：这也可以与Node一起使用并与npm一起部署，请参阅文档</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也有非节点库：</font></font></p>

<ul>
<li><a href="http://www.datejs.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Datejs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> [感谢Peter Olson]-未打包在npm或GitHub中，因此不太容易与Node一起使用-不太推荐使用，因为自2007年以来就未更新！</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">易于阅读和可定制的方式，以所需的格式获取时间戳，而无需使用任何库：</font></font></p>

<pre><code>function timestamp(){<font></font>
  function pad(n) {return n&lt;10 ? "0"+n : n}<font></font>
  d=new Date()<font></font>
  dash="-"<font></font>
  colon=":"<font></font>
  return d.getFullYear()+dash+<font></font>
  pad(d.getMonth()+1)+dash+<font></font>
  pad(d.getDate())+" "+<font></font>
  pad(d.getHours())+colon+<font></font>
  pad(d.getMinutes())+colon+<font></font>
  pad(d.getSeconds())<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（如果您需要UTC格式的时间，则只需更改函数调用即可。例如，“ getMonth”变为“ getUTCMonth”）</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
