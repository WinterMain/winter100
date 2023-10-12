---
layout: question
title:  JavaScript 数组Array移除指定的元素？
date:   2018-11-06T10:12:22.000Z
description: 移除数组中指定的元素的方法...
img: 
author: 谷若汐
category: question
answer: 1
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>移除数组中指定的元素的方法</p>
</div>
    {% endraw %}
  </div>
  <p class="winter_mark">第95篇《JavaScript 数组Array移除指定的元素？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">谷若汐</span>
            <span class="discuss-time">2018.11.06</span>
          </div>
          <div class="discuss-comment"><p>封装一个方法，轻松搞定：</p>

<pre>
<code>
function remove(array, item) {
  //找到元素的索引
  var index = array.indexOf(item);
  if (index &gt; -1) {
    // 使用splice函数移除
    array.splice(index, 1);
  }
}
</code></pre>

<p>splice函数的第二个参数指删除的数目。splice直接修改原数组，并把删除的所有元素以另一个新数组的方式返回。</p>
</div>
        </div></div>
    {% endraw %}
  </div>
<div>
