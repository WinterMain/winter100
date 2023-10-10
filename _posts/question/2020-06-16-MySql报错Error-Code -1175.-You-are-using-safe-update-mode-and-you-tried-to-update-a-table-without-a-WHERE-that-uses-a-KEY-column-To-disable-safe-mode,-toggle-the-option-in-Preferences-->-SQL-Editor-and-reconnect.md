---
layout: question
title:  MySql报错Error Code  1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.
date:   2020-06-16T02:18:09.000Z
description: MySql执行Update语句报错了10 10 35	update tb_feature set title='JavaScript' where titl...
img: 
author: Winter
category: question
answer: 1
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>MySql执行Update语句报错了</p><pre><code class="language-plaintext">10:10:35	update tb_feature set title='JavaScript' where title like "%javascript%"	
Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column To disable safe mode, toggle the option in Preferences -&gt; SQL Editor and reconnect.	0.066 sec</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2020.06.16</span>
          </div>
          <div class="discuss-comment"><p>这个问题有两个处理方式：</p><ol><li>先执行下面语句后再去执行你的sql</li></ol><pre><code class="language-plaintext">SET SQL_SAFE_UPDATES = 0;</code></pre><p>2. 打开Workbench的菜单[Edit]-&gt;[Preferences...]切换到[SQL Editor]页面把[Forbid UPDATE and DELETE statements without a WHERE clause (safe updates)]之前的对勾去掉点击[OK]按钮最后一步记得要重启一下Workbench，否则你仍然会得到这个错误提示</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
