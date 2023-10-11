---
layout: question
title:  MySql 修改数据出错 using safe update mode
date:   2020-03-16T02:22:25.000Z
description: You are using safe update mode and you tried to update a table without a WHERE t...
img: 
author: Winter
category: question
answer: 1
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column To disable safe mode, toggle the option in Preferences -&gt; SQL Editor and reconnect. 0.026 sec</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1680篇《MySql 修改数据出错 using safe update mode》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><h3>连接到数据库后，查看当前mysql的安全模式的状态</h3><p>mysql&gt; show variables like 'sql_safe_updates';
+------------------+-------+
| Variable_name &nbsp; &nbsp;| Value |
+------------------+-------+
| sql_safe_updates | ON &nbsp; &nbsp;|
+------------------+-------+
1 row in set (0.00 sec)
</p><p>上面查询命令实例表示当前mysql处于安全模式打开的状态。<br>set sql_safe_updates=1; //安全模式打开状态<br>set sql_safe_updates=0; //安全模式关闭状态</p><p>如果设置了sql_safe_updates=1，那么update语句必须满足如下条件之一才能执行成功<br>1)使用where子句,并且where子句中列必须为prefix索引列<br>2)使用limit<br>3)同时使用where子句和limit(此时where子句中列可以不是索引列)</p><p>delete语句必须满足如下条件之一才能执行成功<br>1)使用where子句,并且where子句中列必须为prefix索引列<br>2)同时使用where子句和limit(此时where子句中列可以不是索引列)</p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
