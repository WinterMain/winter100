---
layout: question
title:  MySQL与Node.js
date:   2020-03-18T07:04:45.000Z
description: 我刚刚开始进入Node.js。我来自PHP背景，因此我习惯于使用MySQL满足所有数据库需求。如何在Node.js中使用MySQL？...
img: 
author: Eva梅村村
category: question
answer: 3
tags: mysql Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚开始进入Node.js。</font><font style="vertical-align: inherit;">我来自PHP背景，因此我习惯于使用MySQL满足所有数据库需求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在Node.js中使用MySQL？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1996篇《MySQL与Node.js》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天泡芙</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于这是旧线程，因此只需添加更新：</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要安装MySQL node.js驱动程序：</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果仅运行</font></font><code>npm install mysql</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则需要与运行服务器所在的目录相同。</font><font style="vertical-align: inherit;">我建议按照以下示例之一进行操作：</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于全局安装：</font></font></h3>

<pre><code>npm install -g mysql
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于本地安装：</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1-将其添加到您</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的依赖项中：</font></font></p>

<pre><code>"dependencies": {<font></font>
    "mysql": "~2.3.2",<font></font>
     ...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2运行 </font></font><code>npm install</code></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，要使连接发生，您还需要运行mysql服务器（与节点无关）</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要安装MySQL服务器：</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那里有很多教程可以解释这一点，这有点取决于操作系统。</font><font style="vertical-align: inherit;">只需转到Google并搜索</font></font><code>how to install mysql server [Ubuntu|MacOSX|Windows]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但有一句话：您必须转到</font></font><a href="http://www.mysql.com/downloads/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.mysql.com/downloads/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并进行安装。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小西门</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以尝试一种称为</font></font><a href="http://nodejsdb.org/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js DB的新功能</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该功能旨在为多个数据库引擎提供一个通用框架。</font><font style="vertical-align: inherit;">它是用C ++构建的，因此可以保证性能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具体来说，您可以使用其db-mysql驱动程序获得</font></font><a href="http://nodejsdb.org/db-mysql" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js MySQL支持</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西达蒙西里</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><a href="https://github.com/felixge/node-mysql" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node-mysql</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能是其中最好的模块之一，用于处理MySQL数据库，该数据库已得到积极维护并有据可查。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
