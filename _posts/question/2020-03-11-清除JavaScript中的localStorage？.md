---
layout: question
title:  清除JavaScript中的localStorage？
date:   2020-03-11T03:57:36.000Z
description: 有没有办法重置/清除JavaScript中的浏览器的localStorage？...
img: 
author: 达蒙理查德
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法重置/清除JavaScript中的浏览器的localStorage？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第634篇《清除JavaScript中的localStorage？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里伽罗</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>To clear sessionStorage</p>

<pre><code>sessionStorage.clear();
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德路易</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>window.localStorage.clear(); //try this to clear all local storage
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个允许您删除所有localStorage项的函数，但有例外。</font><font style="vertical-align: inherit;">您需要</font><font style="vertical-align: inherit;">此功能的</font></font><a href="https://jquery.com" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以</font></font><a href="https://gist.github.com/christianjuth/8161d1161668e021a580" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载要点</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以这样称呼它</font></font></p>

<pre><code>let clearStorageExcept = function(exceptions) {<font></font>
  let keys = [];<font></font>
  exceptions = [].concat(exceptions); // prevent undefined<font></font>
<font></font>
  // get storage keys<font></font>
  $.each(localStorage, (key) =&gt; {<font></font>
    keys.push(key);<font></font>
  });<font></font>
<font></font>
  // loop through keys<font></font>
  for (let i = 0; i &lt; keys.length; i++) {<font></font>
    let key = keys[i];<font></font>
    let deleteItem = true;<font></font>
<font></font>
    // check if key excluded<font></font>
    for (let j = 0; j &lt; exceptions.length; j++) {<font></font>
      let exception = exceptions[j];<font></font>
      if (key == exception) {<font></font>
        deleteItem = false;<font></font>
      }<font></font>
    }<font></font>
<font></font>
    // delete key<font></font>
    if (deleteItem) {<font></font>
      localStorage.removeItem(key);<font></font>
    }<font></font>
  }<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Harry</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要从用户的本地存储中删除特定的项目或变量，可以使用 </font></font></p>

<pre><code>localStorage.removeItem("name of localStorage variable you want to remove");
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry小宇宙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此命令清除localStorage：</font></font></p>

<pre><code>localStorage.clear();
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
