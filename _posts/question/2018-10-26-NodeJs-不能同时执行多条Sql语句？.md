---
layout: question
title:  NodeJs 不能同时执行多条Sql语句？
date:   2018-10-26T03:11:53.000Z
description: 同时执行多条语句会报错：Error  ER_PARSE_ERROR  You have an error in your SQL syntax; check t...
img: 
author: Winter
category: question
answer: 1
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>同时执行多条语句会报错：Error: ER_PARSE_ERROR: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near &#39;select found_rows() as total&#39; at line 1</p>

<p><img class="thumb-img" src="https://www.samyoc.com/uploads/users/1/images/1540523456935.png" style="max-width:100%" /></p>
</div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第90篇《NodeJs 不能同时执行多条Sql语句？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2018.10.26</span>
          </div>
          <div class="discuss-comment"><p>由于Node mysql做了安全的限制,想要执行多条sql语句，需要打开对应开关配置</p>

<pre><code>
var mysql = require('mysql');
var pool  = mysql.createPool({port:"..", host, "...", ... , multipleStatements: true});
</code></pre>

<p>在配置中添加multipleStatements: true</p>
</div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
