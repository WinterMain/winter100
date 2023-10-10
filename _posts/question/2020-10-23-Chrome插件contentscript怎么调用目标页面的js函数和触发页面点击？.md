---
layout: question
title:  Chrome插件contentscript怎么调用目标页面的js函数和触发页面点击？
date:   2020-10-23T08:09:29.000Z
description: 如题，在开发Chrome插件的时候，怎么让contentscript去调用根页面的js函数，触发页面的点击事件等方法呢？...
img: 
author: Winter
category: question
answer: 1
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>如题，在开发Chrome插件的时候，怎么让contentscript去调用根页面的js函数，触发页面的点击事件等方法呢？</p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2020.10.23</span>
          </div>
          <div class="discuss-comment"><p>其实是不能调用目标页面的js函数的，也不能访问变量，这点在官方文档里面已经说明了。</p><figure class="image"><img src="https://www.samyoc.com/uploads/users/1/images/1603440655641.png"></figure><p>详情点击<a href="https://developer.chrome.com/extensions/content_scripts#execution-environment">https://developer.chrome.com/extensions/content_scripts#execution-environment</a></p><p>那么怎么去触发目标页面比如按钮的点击事件呢，其实还是有办法的。思路就是用js模拟鼠标点击事件。下面附上源码可参考。</p><pre><code class="language-javascript">function invokeEle(ele) {
  const event = document.createEvent("MouseEvents");
  const rect = ele.getBoundingClientRect();

  const randomX = parseInt(Math.random() * rect.width);
  const randomY = parseInt(Math.random() * rect.height);
  const randomMenu = parseInt(Math.random() * 200);
  const screenX = rect.left + randomX;
  const screenY = rect.top + randomMenu + randomY;
  const clientX = rect.left + randomX;
  const clientY = rect.top + randomY;

  event.initMouseEvent(
    "click",
    true,
    true,
    window,
    1,
    screenX,
    screenY,
    clientX,
    clientY,
    false,
    false,
    false,
    0,
    null
  );
  ele.dispatchEvent(event);
}</code></pre><p>比如你要触发以下这个按钮</p><pre><code class="language-xml">&lt;button id="btn"&gt;Hello&lt;/button&gt;</code></pre><pre><code class="language-javascript">const btn = document.getElementById("btn");
invokeEle(btn);</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
