---
layout: question
title:  从fs.readFile获取数据
date:   2020-03-19T03:12:43.000Z
description: var content;fs.readFile('./Index.html', function read(err, data) {    if (e...
img: 
author: 米亚樱
category: question
answer: 1
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><pre><code>var content;<font></font>
fs.readFile('./Index.html', function read(err, data) {<font></font>
    if (err) {<font></font>
        throw err;<font></font>
    }<font></font>
    content = data;<font></font>
});<font></font>
console.log(content);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">日志</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，为什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2288篇《从fs.readFile获取数据》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小前端</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><pre><code>function readContent(callback) {<font></font>
    fs.readFile("./Index.html", function (err, content) {<font></font>
        if (err) return callback(err)<font></font>
        callback(null, content)<font></font>
    })<font></font>
}<font></font>
<font></font>
readContent(function (err, content) {<font></font>
    console.log(content)<font></font>
})<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
