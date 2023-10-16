---
layout: question
title:  从Chrome中的CSS自定义样式按钮中删除蓝色边框
date:   2020-03-16T06:10:28.000Z
description: 我正在制作网页，并且需要自定义样式的<button>标签。因此，对于CSS，我说：border  none。现在，它可以完美地用于野生动物园，但是在Chr...
img: 
author: 伽罗小哥
category: question
answer: 0
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在制作网页，并且需要自定义样式的</font></font><code>&lt;button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签。</font><font style="vertical-align: inherit;">因此，对于CSS，我说：</font></font><code>border: none</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">现在，它可以完美地用于野生动物园，但是在Chrome浏览器中，当我单击其中一个按钮时，它周围会出现一个讨厌的蓝色边框。</font><font style="vertical-align: inherit;">我以为</font></font><code>button:active { outline: none }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>button:focus { outline:none }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会起作用，但两者都不起作用。</font><font style="vertical-align: inherit;">有任何想法吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是被单击之前的样子（以及我希望它在被单击之后仍然看起来）：</font></font></p>

<p><img src="https://www.samyoc.com//uploads/users/17937/images/thumbnails/1584338901476.png" data-src="https://www.samyoc.com//uploads/users/17937/images/1584338901476.png" alt=""></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是我正在谈论的边界：</font></font></p>

<p><img src="https://www.samyoc.com//uploads/users/17937/images/thumbnails/1584338901479.png" data-src="https://www.samyoc.com//uploads/users/17937/images/1584338901479.png" alt="在此处输入图片说明"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的CSS：</font></font></p>

<pre><code>button.launch {<font></font>
    background-color: #F9A300;<font></font>
    border: none;<font></font>
    height: 40px;<font></font>
    padding: 5px 15px;<font></font>
    color: #ffffff;<font></font>
    font-size: 16px;<font></font>
    font-weight: 300;<font></font>
    margin-top: 10px;<font></font>
    margin-right: 10px;<font></font>
}<font></font>
<font></font>
button.launch:hover {<font></font>
    cursor: pointer;<font></font>
    background-color: #FABD44;<font></font>
}<font></font>
<font></font>
button.change {<font></font>
    background-color: #F88F00;<font></font>
    border: none;<font></font>
    height: 40px;<font></font>
    padding: 5px 15px;<font></font>
    color: #ffffff;<font></font>
    font-size: 16px;<font></font>
    font-weight: 300;<font></font>
    margin-top: 10px;<font></font>
    margin-right: 10px;<font></font>
}<font></font>
<font></font>
button.change:hover {<font></font>
    cursor: pointer;<font></font>
    background-color: #F89900;<font></font>
}<font></font>
<font></font>
button:active {<font></font>
    outline: none;<font></font>
    border: none;<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1741篇《从Chrome中的CSS自定义样式按钮中删除蓝色边框》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
