---
layout: post
title:  beforeunload在IOS Safari中不起作用？
date:   2017-09-15T07:01:13.000Z
description: IOS中的Safari不支持beforeunload，所以想在浏览器关闭之前执行相关事件，就得用另外一种方式了。1.第一种方式使用unload代替，这个方法确实...
img: null
author: Winter
category: blog
answer: 1
tags: 前端的一些坑
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>IOS中的Safari不支持beforeunload，所以想在浏览器关闭之前执行相关事件，就得用另外一种方式了。</p>

<p>1.第一种方式使用unload代替，这个方法确实是可以运行的，但是在官方文档中Safari Web Content Guide，unload是不赞成使用，未来可能会弃用，官方是建议使用pagehide代替unload方法。</p>

<p>2.第二种方式使用pagehide</p>

<pre>
<code>var isOnIOS = navigator.userAgent.match(/iPad/i)|| navigator.userAgent.match(/iPhone/i);
var eventName = isOnIOS ? &quot;pagehide&quot; : &quot;beforeunload&quot;;

window.addEventListener(eventName, function (event) { 
    window.event.cancelBubble = true; // Don&#39;t know if this works on iOS but it might!
    ...
} );</code></pre>
</div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第13篇《beforeunload在IOS Safari中不起作用？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">hm</span>
            <span class="discuss-time">2018.08.21</span>
          </div>
          <div class="discuss-comment">你好，请问下ios safari 页面跳转，推荐使用什么方法？</div>
        </div>
        
        <div class="discuss-children">
          <div class="discuss-child">
            <div class="discuss-comment">Safari 推荐使用window.location = 'user_home.html';</div>
            <div class="discuss-meta">
              <span class="discuss-user">Winter</span>
              <span class="discuss-time">2018.11.27</span>
            </div>
          </div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
