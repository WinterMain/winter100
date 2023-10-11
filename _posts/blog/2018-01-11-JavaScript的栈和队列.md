---
layout: post
title:  JavaScript的栈和队列
date:   2018-01-11T03:10:13.000Z
description: 这次要介绍的东西是JavaScript中的栈和队列，我们都都知道JavaScript是一种弱类型的编程语言...
img: http://www.samyoc.com/uploads/users/1/images/1515640191115..gif
author: Winter
category: blog
answer: 0
tags: 前端
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>这次要介绍的东西是JavaScript中的栈和队列，我们都都知道JavaScript是一种弱类型的编程语言，从Array中更是体现出了这一点，我们可以在Array中插入一个字符串，也可以插入一个数字，甚至再继续插入一个对象。这次我们要说明的栈和队列就是要用到Array对象。</p>

<p>&nbsp;</p>

<p>1、栈方法LIFO（Last In First Out）， push和pop，关于push和pop的方法就不多说了，这是我们在JavaScript编程中常用到的方法，具体如以下代码所示</p>

<p>&nbsp;</p>

<p><strong>[javascript]</strong>&nbsp;<a href="http://blog.csdn.net/leyyang/article/details/50995648#" onclick="dp.sh.Toolbar.Command('ViewSource',this);return false;" title="view plain">view plain</a>&nbsp;<a href="http://blog.csdn.net/leyyang/article/details/50995648#" onclick="dp.sh.Toolbar.Command('CopyToClipboard',this);return false;" title="copy">copy</a></p>

<ol>
	<li>var&nbsp;str&nbsp;=&nbsp;[&quot;Jim&quot;,&quot;Sam&quot;,&quot;Riley&quot;];&nbsp;&nbsp;</li>
	<li>str.push(&quot;Miki&quot;);&nbsp;//结果&nbsp;str:&nbsp;Jim,Sam,Riley,Miki&nbsp;&nbsp;</li>
	<li>str.pop()//结果&nbsp;str:&nbsp;Jim,Sam,Riley&nbsp;&nbsp;</li>
</ol>

<p><br />
2、队列方法FIFO（First In First Out），实现队列需要用到以下两个方法</p>

<p>&nbsp;</p>

<p>&nbsp; shift：移除数组第一项并返回该项，同时数组长度减1</p>

<p>&nbsp; unshift：在数组前端插入任意长度字符串或者数组,并返回新字符串长度</p>

<p>&nbsp;</p>

<p>（1）从右向左队列：shift + push</p>

<p><img alt="" src="http://img.blog.csdn.net/20160328101927692?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" /></p>

<p>&nbsp;</p>

<p><strong>[javascript]</strong>&nbsp;<a href="http://blog.csdn.net/leyyang/article/details/50995648#" onclick="dp.sh.Toolbar.Command('ViewSource',this);return false;" title="view plain">view plain</a>&nbsp;<a href="http://blog.csdn.net/leyyang/article/details/50995648#" onclick="dp.sh.Toolbar.Command('CopyToClipboard',this);return false;" title="copy">copy</a></p>

<ol>
	<li>var&nbsp;str&nbsp;=&nbsp;[&quot;Jim&quot;,&quot;Sam&quot;,&quot;Riley&quot;];&nbsp;&nbsp;</li>
	<li>str.push(&quot;Miki&quot;);&nbsp;//str:&nbsp;Jim,Sam,Riley,Miki&nbsp;&nbsp;</li>
	<li>str.shift();//str:&nbsp;Sam,Riley,Miki&nbsp;&nbsp;</li>
</ol>

<p><br />
（2）从左向右队列：unshift + pop</p>

<p>&nbsp;</p>

<p><img alt="" src="http://img.blog.csdn.net/20160328102342656?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center" /></p>

<p>&nbsp;</p>

<p><strong>[javascript]</strong>&nbsp;<a href="http://blog.csdn.net/leyyang/article/details/50995648#" onclick="dp.sh.Toolbar.Command('ViewSource',this);return false;" title="view plain">view plain</a>&nbsp;<a href="http://blog.csdn.net/leyyang/article/details/50995648#" onclick="dp.sh.Toolbar.Command('CopyToClipboard',this);return false;" title="copy">copy</a></p>

<ol>
	<li>var&nbsp;str&nbsp;=&nbsp;[&quot;Jim&quot;,&quot;Sam&quot;,&quot;Riley&quot;];&nbsp;&nbsp;</li>
	<li>str.unshift(&quot;Miki&quot;);&nbsp;//str:&nbsp;Jim,Sam,Riley,Miki&nbsp;&nbsp;</li>
	<li>str.pop();//str:&nbsp;Miki,Jim,Sam&nbsp;&nbsp;</li>
</ol>
</div>
    {% endraw %}
  </div>
  <p class="winter_mark">第35篇《JavaScript的栈和队列》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
