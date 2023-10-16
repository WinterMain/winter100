---
layout: question
title:  如何从JQuery中的each（）函数中断/退出？\[重复\]
date:   2020-03-11T12:45:32.000Z
description:                                                                          ...
img: 
author: 樱凯
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/1784780/how-to-break-out-of-jquery-each-loop" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何从jQuery每个循环中脱颖而出</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （6个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2013-08-20 11：38：14Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">6年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一些代码：</font></font></p>

<pre><code>$(xml).find("strengths").each(function() {<font></font>
   //Code<font></font>
   //How can i escape from this block based on a condition.<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何根据条件从“每个”代码块中退出？</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我们有这样的事情怎么办：</font></font></p>

<pre><code>$(xml).find("strengths").each(function() {<font></font>
   $(this).each(function() {<font></font>
       //I want to break out from both each loops at the same time.<font></font>
   });<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有可能从内部的“每个”功能中同时脱离这两个“每个”功能？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＃19.03.2013</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想继续而不是爆发</font></font></strong></p>

<pre><code>return true;
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第820篇《如何从JQuery中的each（）函数中断/退出？\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一古一</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>if (condition){ // where condition evaluates to true <font></font>
    return false<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到</font><font style="vertical-align: inherit;">3天前问的</font></font><a href="https://stackoverflow.com/questions/1784780/how-to-break-out-of-jquerys-each-loop"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长千羽</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用 </font></font><code>return false;</code></p>

<pre><code>+----------------------------------------+<font></font>
| JavaScript              | PHP          |<font></font>
+-------------------------+--------------+<font></font>
|                         |              |<font></font>
| return false;           | break;       |<font></font>
|                         |              |<font></font>
| return true; or return; | continue;    |<font></font>
+-------------------------+--------------+<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿神无</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从匿名函数返回false：</font></font></p>

<pre><code>$(xml).find("strengths").each(function() {<font></font>
  // Code<font></font>
  // To escape from this block based on a condition:<font></font>
  if (something) return false;<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="http://api.jquery.com/each/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每种方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的文档中</font><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从每个函数中返回“ false”将完全停止所有元素的循环（这就像在常规循环中使用“ break”一样）。</font><font style="vertical-align: inherit;">从循环内返回“ true”会跳到下一个迭代（这就像对正常循环使用“ continue”一样）。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="https://api.jquery.com/each/#each-function" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以简单</font></font><code>return false;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">地中断：</font></font></p>

<pre><code>$(xml).find("strengths").each(function() {<font></font>
<font></font>
    if (iWantToBreak)<font></font>
        return false;<font></font>
});<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
