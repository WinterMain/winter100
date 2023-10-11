---
layout: question
title:  如何检查JavaScript是否在某个数组索引处存在值？
date:   2020-03-12T08:40:02.000Z
description: 这将用于测试位置“索引”处的值是否存在或是否有更好的方法：if(arrayName\[index\]==""){     // do stuff}...
img: 
author: 小胖Jim
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将用于测试位置“索引”处的值是否存在或是否有更好的方法：</font></font></p>

<pre><code>if(arrayName[index]==""){<font></font>
     // do stuff<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1154篇《如何检查JavaScript是否在某个数组索引处存在值？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端飞云</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>To check if it has never been defined or if it was deleted:</p>

<pre><code>if(typeof arrayName[index]==="undefined"){<font></font>
     //the index is not in the array<font></font>
}<font></font>
</code></pre>

<p>also works with associative arrays and arrays where you deleted some index</p>

<p>To check if it was never been defined, was deleted OR is a null or logical empty value (NaN, empty string, false):</p>

<pre><code>if(typeof arrayName[index]==="undefined"||arrayName[index]){<font></font>
     //the index is not defined or the value an empty value<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Harry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>I ran into this issue using laravel datatables. I was storing a JSON value called <code>properties</code> in an activity log and wanted to show a button based on this value being empty or not.</p>

<p>Well, datatables was interpreting this as an array if it was empty, and an object if it was not, therefore, the following solution worked for me:</p>

<pre><code>render: function (data, type, full) {<font></font>
    if (full.properties.length !== 0) {<font></font>
        // do stuff<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p>An object does not have a length property.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇飞云</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>try this if array[index] is null</p>

<pre><code>if (array[index] != null) 
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyJinJin路易</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>I would like to point out something a few seem to have missed: namely it is possible to have an "empty" array position in the middle of your array. Consider the following:</p>

<pre><code>let arr = [0, 1, 2, 3, 4, 5]<font></font>
<font></font>
delete arr[3]<font></font>
<font></font>
console.log(arr)      // [0, 1, 2, empty, 4, 5]<font></font>
<font></font>
console.log(arr[3])   // undefined<font></font>
</code></pre>

<p>The natural way to check would then be to see whether the array member is undefined, I am unsure if other ways exists</p>

<pre><code>if (arr[index] === undefined) {<font></font>
  // member does not exist<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯老丝</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>if(arrayName.length &gt; index &amp;&amp; arrayName[index] !== null) {<font></font>
    //arrayName[index] has a value<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚GO</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>if(!arrayName[index]){<font></font>
     // do stuff<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易GO</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅使用</font></font><code>.length</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不安全，并且会在某些浏览器中导致错误。</font><font style="vertical-align: inherit;">这是一个更好的解决方案：</font></font></p>

<pre><code>if(array &amp;&amp; array.length){   <font></font>
   // not empty <font></font>
} else {<font></font>
   // empty<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，我们可以使用：</font></font></p>

<pre><code>Object.keys(__array__).length
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥GOItachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们不能只是这样做：</font></font></p>

<pre><code>if(arrayName.length &gt; 0){   <font></font>
    //or **if(arrayName.length)**<font></font>
    //this array is not empty <font></font>
}else{<font></font>
   //this array is empty<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
