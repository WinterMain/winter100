---
layout: question
title:  使用Express从NodeJS Server下载文件
date:   2020-03-19T01:36:47.000Z
description: 如何将服务器中的文件下载到访问nodeJS服务器中页面的计算机上？我正在使用ExpressJS，并且一直在尝试这样做：app.get('/down...
img: 
author: 十三西里GO
category: question
answer: 0
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何将服务器中的文件下载到访问nodeJS服务器中页面的计算机上？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用ExpressJS，并且一直在尝试这样做：</font></font></p>

<pre><code>app.get('/download', function(req, res){<font></font>
<font></font>
  var file = fs.readFileSync(__dirname + '/upload-folder/dramaticpenguin.MOV', 'binary');<font></font>
<font></font>
  res.setHeader('Content-Length', file.length);<font></font>
  res.write(file, 'binary');<font></font>
  res.end();<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我无法获取文件名和文件类型（或扩展名）。</font><font style="vertical-align: inherit;">有人可以帮我吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
