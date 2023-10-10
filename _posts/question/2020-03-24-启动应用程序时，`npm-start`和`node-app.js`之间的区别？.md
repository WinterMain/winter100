---
layout: question
title:  启动应用程序时，\`npm start\`和\`node app.js\`之间的区别？
date:   2020-03-24T01:44:55.000Z
description: 我已经使用command安装了一个应用程序express new 'filename'。我刚刚了解到可以使用以下方法启动应用程序：npm start...
img: 
author: 番长猴子
category: question
answer: 1
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经使用command安装了一个应用程序</font></font><code>express new 'filename'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我刚刚了解到可以使用以下方法启动应用程序：</font></font></p>

<pre><code>npm start
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，我已经使用：</font></font></p>

<pre><code>node app.js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启动我的服务器。</font><font style="vertical-align: inherit;">有人知道两者之间有什么区别吗？</font><font style="vertical-align: inherit;">谢谢。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://docs.npmjs.com/cli/start" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手册页</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> npm开始：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果提供了包，则运行包的“开始”脚本。</font><font style="vertical-align: inherit;">如果未指定任何版本，则它将启动“活动”版本。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">诚然，这种描述完全无济于事，仅此而已。</font><font style="vertical-align: inherit;">至少它比socket.io更有据可查。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，真正发生的是npm在</font></font><a href="http://wiki.joyent.com/display/node/npm+Integration" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">查找</font><font style="vertical-align: inherit;">，并且如果您有类似</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“脚本”：{“开始”：“ coffee server.coffee”}</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后它将做到这一点。</font><font style="vertical-align: inherit;">如果npm找不到您的启动脚本，则默认为：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点server.js</font></font></p>
</blockquote>

<p>&nbsp;</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
