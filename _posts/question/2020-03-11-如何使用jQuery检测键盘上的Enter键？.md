---
layout: question
title:  如何使用jQuery检测键盘上的Enter键？
date:   2020-03-11T04:13:00.000Z
description: 我想检测用户是否按下了EnterjQuery。这怎么可能？需要插件吗？编辑：看来我需要使用该keypress()方法。我想知道是否有人知道该命...
img: 
author: 阿飞Pro
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想检测用户是否按下了</font></font><kbd>Enter</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这怎么可能？</font><font style="vertical-align: inherit;">需要插件吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：看来我需要使用该</font></font><a href="http://docs.jquery.com/Events/keypress" rel="noreferrer"><code>keypress()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道是否有人知道该命令是否存在浏览器问题-就像我应该知道的浏览器兼容性问题一样？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YLD</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为最简单的方法是使用</font></font><a href="http://vanilla-js.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">香草</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> javacript：</font></font></p>

<pre><code>document.onkeyup = function(event) {<font></font>
   if (event.key === 13){<font></font>
     alert("enter was pressed");<font></font>
   }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖神奇</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于keypress事件未包含在任何正式规范中，因此使用它时遇到的实际行为可能会因浏览器，浏览器版本和平台而异。</font></font></p>

<pre><code>   $(document).keydown(function (event) {<font></font>
        if (event.keyCode === 13) {<font></font>
            // Cancel the default action, if needed<font></font>
            event.preventDefault();<font></font>
            //call function, trigger events and everything tou want to dd . ex : Trigger the button element with a click<font></font>
            $("#btn").click();<font></font>
        }<font></font>
    })<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望它会有用！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端MandyJinJin</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个</font></font><a href="http://docs.jquery.com/Events/keypress" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">keypress（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件方法。</font><font style="vertical-align: inherit;">Enter键的ascii编号为13，与所使用的浏览器无关。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY猿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>event.key</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和现代JS！</font></font></h1>

<pre><code>$(document).keypress(function(event) {<font></font>
    if (event.key === "Enter") {<font></font>
        // Do something<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或不带jQuery：</font></font></p>

<pre><code>document.addEventListener("keypress", function onEvent(event) {<font></font>
    if (event.key === "Enter") {<font></font>
        // Do something better<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla文件</font></font></a></p>

<p><a href="http://caniuse.com/#feat=keyboardevent-key" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持的浏览器</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
