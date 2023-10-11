---
layout: question
title:  Bluebird的util.toFastProperties函数如何使对象的属性“快速”？
date:   2020-03-24T07:22:18.000Z
description: 在Bluebird的util.js文件中，它具有以下功能：function toFastProperties(obj) {    /\*jshint ...
img: 
author: 猴子村村
category: question
answer: 0
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Bluebird的</font></font><a href="https://github.com/petkaantonov/bluebird/blob/7454401269cfa47e5b001354388c062509103de7/src/util.js#L180"><code>util.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它具有以下功能：</font></font></p>

<pre><code>function toFastProperties(obj) {<font></font>
    /*jshint -W027*/<font></font>
    function f() {}<font></font>
    f.prototype = obj;<font></font>
    ASSERT("%HasFastProperties", true, obj);<font></font>
    return f;<font></font>
    eval(obj);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于某种原因，在return函数之后有一条语句，我不确定为什么会在其中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样，这似乎是故意的，因为作者已对此发出了JSHint警告：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“返回”后无法达到“评估”。</font><font style="vertical-align: inherit;">（W027）</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此功能的作用是什么？</font><font style="vertical-align: inherit;">难道</font></font><code>util.toFastProperties</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">真的让一个对象的属性“快”？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经在Bluebird的GitHub存储库中搜索了源代码中的任何注释或问题列表中的解释，但找不到任何注释。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3435篇《Bluebird的util.toFastProperties函数如何使对象的属性“快速”？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
