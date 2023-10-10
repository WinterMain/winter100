---
layout: question
title:  Firestore.settings（）要求其第一个参数为对象类型，但这是一个自定义对象
date:   2020-04-07T03:50:41.000Z
description: 我无法调用firebase.firestore（）。settings（）函数，因为出现一些“要求其第一个参数为对象类型”错误：firebase.fir...
img: 
author: 古一Jim
category: question
answer: 0
tags: 火力 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我无法调用firebase.firestore（）。settings（）函数，因为出现一些“要求其第一个参数为对象类型”错误：</font></font></p>

<pre><code>firebase.firestore().settings({ timestampsInSnapshots: true })
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不理解此错误，但是作为一种变通办法，我试图这样创建一个对象：</font></font></p>

<pre><code>const firestoreSettings = Object.create({ timestampsInSnapshots: true })<font></font>
firebase.firestore().settings(firestoreSettings)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此错误来自何处以及如何解决？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
