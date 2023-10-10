---
layout: question
title:  如何使用JavaScript检查URL中的＃哈希？
date:   2020-03-11T02:41:36.000Z
description: 我有一些jQuery / JavaScript代码，仅当#URL中有哈希（）锚链接时才要运行。如何使用JavaScript检查此字符？我需要一个简单的包罗...
img: 
author: 神无神乐
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一些jQuery / JavaScript代码，仅当</font></font><code>#</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">URL中</font><font style="vertical-align: inherit;">有哈希（</font><font style="vertical-align: inherit;">）锚链接</font><font style="vertical-align: inherit;">时才要运行</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如何使用JavaScript检查此字符？</font><font style="vertical-align: inherit;">我需要一个简单的包罗万象的测试，该测试可以检测如下URL：</font></font></p>

<ul>
<li><code>example.com/page.html#anchor</code></li>
<li><code>example.com/page.html#anotheranchor</code></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上是这样的：</font></font></p>

<pre><code>if (thereIsAHashInTheUrl) {        <font></font>
    do this;<font></font>
} else {<font></font>
    do this;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人能指出我正确的方向，那将不胜感激。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第554篇《如何使用JavaScript检查URL中的＃哈希？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Mandy</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>This is a simple way to test this for the current page URL:</p>

<pre><code>  function checkHash(){<font></font>
      return (location.hash ? true : false);<font></font>
  }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam蛋蛋Itachi</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>sometimes you get the full query string such as "#anchorlink?firstname=mark"</p>

<p>this is my script to get the hash value:</p>

<pre><code>var hashId = window.location.hash;<font></font>
hashId = hashId.match(/#[^?&amp;\/]*/g);<font></font>
<font></font>
returns -&gt; #anchorlink<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO村村</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>var requestedHash = ((window.location.hash.substring(1).split("#",1))+"?").split("?",1);
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天蛋蛋达蒙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>function getHash() {<font></font>
  if (window.location.hash) {<font></font>
    var hash = window.location.hash.substring(1);<font></font>
<font></font>
    if (hash.length === 0) { <font></font>
      return false;<font></font>
    } else { <font></font>
      return hash; <font></font>
    }<font></font>
  } else { <font></font>
    return false; <font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY蛋蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>window.location.hash 
</code></pre>

<p>will return the hash identifier</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙阿飞斯丁</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入以下内容：</font></font></p>

<pre><code>&lt;script type="text/javascript"&gt;<font></font>
    if (location.href.indexOf("#") != -1) {<font></font>
        // Your code in here accessing the string like this<font></font>
        // location.href.substr(location.href.indexOf("#"))<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Mandy</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>  if(window.location.hash) {<font></font>
      var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character<font></font>
      alert (hash);<font></font>
      // hash found<font></font>
  } else {<font></font>
      // No hash found<font></font>
  }<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
