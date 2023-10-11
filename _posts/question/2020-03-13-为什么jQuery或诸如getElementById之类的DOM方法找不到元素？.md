---
layout: question
title:  为什么jQuery或诸如getElementById之类的DOM方法找不到元素？
date:   2020-03-13T07:24:01.000Z
description: 什么是可能的原因document.getElementById，$("#id")或任何其他DOM方法/ jQuery选择没有找到的元素？问题示例包括：...
img: 
author: 村村A
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么是可能的原因</font></font><code>document.getElementById</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>$("#id")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或任何其他DOM方法/ jQuery选择没有找到的元素？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题示例包括：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery默默地未能绑定事件处理程序</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery的“吸气”方法（</font></font><code>.val()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>.html()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>.text()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）返回</font></font><code>undefined</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回标准DOM方法会</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导致以下几种错误：</font></font></li>
</ul>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未捕获的TypeError：无法设置为null的属性“ ...”未捕获的TypeError：无法读取为null的属性“ ...”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最常见的形式是：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未捕获的TypeError：无法将属性'onclick'设置为null</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未捕获的TypeError：无法读取null的属性'addEventListener'</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未捕获的TypeError：无法读取null的属性“样式”</font></font></p>
</blockquote></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1375篇《为什么jQuery或诸如getElementById之类的DOM方法找不到元素？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙神无</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是执行javascript代码时未创建dom元素“ speclist”。</font><font style="vertical-align: inherit;">因此，我将javascript代码放入一个函数中，并在body onload事件中调用了该函数。</font></font></p>

<pre><code>function do_this_first(){<font></font>
   //appending code<font></font>
}<font></font>
<font></font>
&lt;body onload="do_this_first()"&gt;<font></font>
&lt;/body&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY小卤蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于ID的选择器不起作用的原因</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定ID的元素/ DOM尚不存在。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该元素存在，但未在DOM中注册（对于从Ajax响应动态追加的HTML节点而言）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存在多个具有相同ID的元素，这会导致冲突。</font></font></li>
</ol>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案</font></font></strong></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试在元素声明后访问元素，或者使用类似 </font></font><code>$(document).ready();</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于来自Ajax响应的元素，请使用</font></font><code>.bind()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery方法。</font><font style="vertical-align: inherit;">较旧版本的jQuery具有</font></font><code>.live()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相同的功能。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用工具（例如，用于浏览器的webdeveloper插件）查找重复的ID并将其删除。</font></font></p></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如@FelixKling指出的那样，最可能的情况是您要查找的节点不存在（尚未）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，现代开发实践通常可以使用DocumentFragments或直接直接分离/重新附加当前元素来操纵文档树之外的文档元素。</font><font style="vertical-align: inherit;">这样的技术可以用作JavaScript模板的一部分，或避免在所涉及的元素发生重大更改时避免过多的重画/重排操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样，跨现代浏览器推出的新“ Shadow DOM”功能允许元素成为文档的一部分，但不能由document.getElementById及其所有同级方法（querySelector等）进行查询。</font><font style="vertical-align: inherit;">这样做是为了封装功能并特别隐藏它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样，尽管如此，很可能您正在寻找的元素还没有在文档中（尚未），您应该按照Felix的建议进行操作。</font><font style="vertical-align: inherit;">但是，您还应该意识到，这不再是元素可能无法找到（临时或永久）的唯一原因。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green老丝Itachi</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您尝试访问的元素位于内，</font></font><code>iframe</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而您尝试在上下文之外进行访问，</font></font><code>iframe</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也会导致其失败。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要在iframe中获取元素，可以</font></font><a href="https://stackoverflow.com/a/1088569/1435985"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到方法</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
