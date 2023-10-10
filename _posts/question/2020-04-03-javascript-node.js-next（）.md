---
layout: question
title:  javascript node.js next（）
date:   2020-04-03T02:44:12.000Z
description: 我next在node.js中看到了很多用处。它是什么，它来自哪里？它有什么作用？我可以在客户端使用它吗？抱歉，在这里使用了它，例如：http  ...
img: 
author: 阿飞
category: question
answer: 1
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><code>next</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在node.js中</font><font style="vertical-align: inherit;">看到了很多用处</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是什么，它来自哪里？</font><font style="vertical-align: inherit;">它有什么作用？</font><font style="vertical-align: inherit;">我可以在客户端使用它吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">抱歉，在这里使用了它，例如：</font><a href="http://dailyjs.com/2010/12/06/node-tutorial-5/"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="http://dailyjs.com/2010/12/06/node-tutorial-5/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//dailyjs.com/2010/12/06/node-tutorial-5/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">寻找loadUser函数。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是在需要串行执行操作的情况下传递回调时使用的命名约定，例如，扫描目录-&gt;读取文件数据-&gt;处理数据。</font><font style="vertical-align: inherit;">这优先于深度嵌套回调。</font><font style="vertical-align: inherit;">蒂姆·卡斯威尔（Tim Caswell）的</font></font><a href="http://howtonode.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HowToNode</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">博客</font><font style="vertical-align: inherit;">上的以下文章的前三部分</font><a href="http://howtonode.org/" rel="noreferrer"><font style="vertical-align: inherit;">对此</font></a><font style="vertical-align: inherit;">进行了很好的概述：</font></font></p>

<p><a href="http://web.archive.org/web/20161022152112/http://howtonode.org/control-flow" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://howtonode.org/control-flow</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另请参阅该</font><font style="vertical-align: inherit;">发布的第二部分的</font><font style="vertical-align: inherit;">“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顺序操作”</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分：</font></font></p>

<p><a href="http://web.archive.org/web/20170206014827/https://howtonode.org/control-flow-part-ii" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://howtonode.org/control-flow-part-ii</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
