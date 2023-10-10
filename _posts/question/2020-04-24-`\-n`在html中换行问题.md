---
layout: question
title:  \`\ n\`在html中换行问题
date:   2020-04-24T10:48:33.000Z
description: \`\ n\`在html换行一般是不起作用的，有时候只能用<br>。但是有没有一些办法能让\n起作用呢、？...
img: 
author: Winter
category: question
answer: 1
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>`\ n`在html换行一般是不起作用的，有时候只能用&lt;br&gt;。但是有没有一些办法能让\n起作用呢、？</p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2020.04.24</span>
          </div>
          <div class="discuss-comment"><pre><code class="language-plaintext">换行\n：
white-space: pre-line; // 可以解决\n换行问题

对于换行符\n和制表符\t：
white-space: pre-wrap;</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
