---
layout: question
title:  使用Node.JS，如何将JSON文件读入（服务器）内存？
date:   2020-03-12T02:37:35.000Z
description: 背景我正在对Node.js进行一些试验，想从文本文件或.js文件（更好的??）中读取JSON对象到内存中，以便我可以从代码中快速访问该对象。我意识到那...
img: 
author: Tony凯
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在对Node.js进行一些试验，想从文本文件或.js文件（更好的??）中读取JSON对象到内存中，以便我可以从代码中快速访问该对象。</font><font style="vertical-align: inherit;">我意识到那里有像Mongo，Alfred等的东西，但是那不是我现在所需要的。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">题</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用JavaScript / Node从文本或js文件中读取JSON对象并将其读入服务器内存中？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第896篇《使用Node.JS，如何将JSON文件读入（服务器）内存？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>So many answers, and no one ever made a benchmark to compare sync vs async vs require. I described the difference in use cases of reading json in memory via require, readFileSync and readFile <a href="https://stackoverflow.com/questions/35389060/read-json-file-content-with-require-vs-fs-readfile">here</a>.</p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
