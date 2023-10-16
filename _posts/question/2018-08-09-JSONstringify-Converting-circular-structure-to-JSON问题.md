---
layout: question
title:  JSON.stringify  "Converting circular structure to JSON"问题
date:   2018-08-09T11:32:11.000Z
description: JSON.stringify()  将一个对象转换为json形式的字符串.如果用它去JSON.stringify(window)也会报错对象中有循环引用. 解决...
img: 
author: 杨天栾
category: question
answer: 1
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>JSON.stringify() &nbsp;将一个对象转换为json形式的字符串.</p>

<p>如果用它去JSON.stringify(window)也会报错</p>

<p><img class="thumb-img" src="https://www.samyoc.com/uploads/users/9/images/1533814249247.png" style="max-width:100%" /></p>

<p>对象中有循环引用. 解决方案如下:</p>

<p>参考链接:http://stackoverflow.com/questions/11616630/json-stringify-avoid-typeerror-converting-circular-structure-to-json</p>

<pre>
<code>
// Demo: Circular reference
var o = {};
o.o = o;

// Note: cache should not be re-used by repeated calls to JSON.stringify.
var cache = [];
JSON.stringify(o, function(key, value) {
    if (typeof value === &#39;object&#39; &amp;&amp; value !== null) {
        if (cache.indexOf(value) !== -1) {
            // Circular reference found, discard key
            return;
        }
        // Store value in our collection
        cache.push(value);
    }
    return value;
});
cache = null; // Enable garbage collection
</code></pre>
</div>
    {% endraw %}
  </div>
  <p class="winter_mark">第76篇《JSON.stringify  "Converting circular structure to JSON"问题》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">杨天栾</span>
            <span class="discuss-time">2018.08.09</span>
          </div>
          <div class="discuss-comment">对象中有循环引用</div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
