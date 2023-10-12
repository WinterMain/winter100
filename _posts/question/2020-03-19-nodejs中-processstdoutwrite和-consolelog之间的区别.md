---
layout: question
title:  node.js中“ process.stdout.write”和“ console.log”之间的区别？
date:   2020-03-19T01:25:08.000Z
description: node.js中的“ process.stdout.write”和“ console.log”之间有什么区别？编辑：使用console.log的变量显...
img: 
author: 小哥达蒙卡卡西
category: question
answer: 2
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node.js中的“ process.stdout.write”和“ console.log”之间有什么区别？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：使用console.log的变量显示了很多不可读的字符，而使用process.stdout.write的显示了一个对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是为什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2205篇《node.js中“ process.stdout.write”和“ console.log”之间的区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">镜风</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的区别是：
 </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">console.log（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法自动添加换行符。</font><font style="vertical-align: inherit;">这意味着如果我们遍历并打印结果，则每个结果都将以新行打印。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">process.stdout.write（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法不会追加换行符。</font><font style="vertical-align: inherit;">用于打印图案。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋古一Eva</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此情况下，另一个重要区别是</font></font><code>process.stdout.clearLine()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>process.stdout.cursorTo(0)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您只想在一行中显示下载或处理的百分比，这将很有用。</font><font style="vertical-align: inherit;">如果使用clearLine（），cursorTo（）</font></font><code>console.log()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能使用，因为它还会在文本后附加\ n。</font><font style="vertical-align: inherit;">只需尝试以下示例：</font></font></p>

<pre><code>var waitInterval = 500;<font></font>
var totalTime = 5000;<font></font>
var currentInterval = 0;<font></font>
<font></font>
function showPercentage(percentage){<font></font>
    process.stdout.clearLine();<font></font>
    process.stdout.cursorTo(0);<font></font>
    console.log(`Processing ${percentage}%...` ); //replace this line with process.stdout.write(`Processing ${percentage}%...`);<font></font>
}<font></font>
<font></font>
var interval = setInterval(function(){<font></font>
 currentInterval += waitInterval;<font></font>
 showPercentage((currentInterval/totalTime) * 100);<font></font>
}, waitInterval);<font></font>
<font></font>
setTimeout(function(){<font></font>
 clearInterval(interval); <font></font>
}, totalTime);<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
