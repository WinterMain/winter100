---
layout: question
title:  如何使用JavaScript重新加载页面
date:   2020-03-10T06:18:52.000Z
description: 如何使用JavaScript重新加载页面？我需要一种适用于所有浏览器的方法。...
img: 
author: 乐Eva
category: question
answer: 12
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用JavaScript重新加载页面？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要一种适用于所有浏览器的方法。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第502篇《如何使用JavaScript重新加载页面》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilJinJin</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>Use history (<a href="https://developer.mozilla.org/en-US/docs/Web/API/History" rel="nofollow noreferrer">more here</a>)</p>

<pre><code>history.go()
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斌</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>You can simply use </p>

<pre><code>window.location=document.URL
</code></pre>

<p>where document.URL gets the current page URL and window.location reloads it.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilTony</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>Use this button to refresh the page</p>

<p><a href="https://fiddle.jshell.net/pd3nbwjo/" rel="nofollow noreferrer">DEMO</a></p>

<pre><code>&lt;input type="button" value="Reload Page" onClick="document.location.reload(true)"&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Tom</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>Using a button or just put it inside an "a" (anchor) tag:</p>

<pre><code>&lt;input type="button" value="RELOAD" onclick="location.reload();" /&gt;
</code></pre>

<p>Try these for other needs:</p>

<pre><code>Location Objects has three methods --<font></font>
<font></font>
assign() Used to load a new document<font></font>
reload() Used to reloads the current document.<font></font>
replace() Used to replace the current document with a new one<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子逆天</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>Automatic reload page after 20 seconds.</p>

<pre><code>&lt;script&gt;<font></font>
    window.onload = function() {<font></font>
        setTimeout(function () {<font></font>
            location.reload()<font></font>
        }, 20000);<font></font>
     };<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村阿飞</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>location.href = location.href;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易卡卡西</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>To make it easy and simple, use <code>location.reload()</code>.
You can also use <code>location.reload(true)</code> if you want to grab something from the server.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO蛋蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>If you put </p>

<pre><code>window.location.reload(true);
</code></pre>

<p>at the beginning of your page with no other condition qualifying why that code runs, the page will load and then continue to reload itself until you close your browser.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>This works for me:</p>

<pre><code>function refresh() {    <font></font>
    setTimeout(function () {<font></font>
        location.reload()<font></font>
    }, 100);<font></font>
}<font></font>
</code></pre>

<p><a href="http://jsfiddle.net/umerqureshi/znruyzop/" rel="nofollow noreferrer">http://jsfiddle.net/umerqureshi/znruyzop/</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim理查德泡芙</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><strong>To reload a page using JavaScript, use:</strong></p>

<pre><code>window.location.reload();
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚猴子</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><em>You can perform this task using <code>window.location.reload();</code>. As there are many ways to do this but I think it is the appropriate way to reload the same document with JavaScript. Here is the explanation</em></p>

<p>JavaScript <code>window.location</code> object can be used </p>

<ul>
<li>to get current page address (URL)</li>
<li>to redirect the browser to another page</li>
<li>to reload the same page</li>
</ul>

<p><code>window</code>: in JavaScript represents an open window in a browser.</p>

<p><code>location</code>: in JavaScript holds information about current URL.</p>

<p>The <code>location</code> object is like a fragment of the <code>window</code> object and is called up through the <code>window.location</code> property.</p>

<p><code>location</code> object has three methods:</p>

<ol>
<li><code>assign()</code>: used to load a new document</li>
<li><code>reload()</code>: used to reload current document</li>
<li><code>replace()</code>: used to replace current document with a new one</li>
</ol>

<p>So here we need to use <code>reload()</code>, because it can help us in reloading  the same document.</p>

<p>So use it like <code>window.location.reload();</code>.</p>

<p><a href="http://jsfiddle.net/agrawalnikhil/4FhHA/" rel="noreferrer">Online demo on jsfiddle</a></p>

<p><em>To ask your browser to retrieve the page directly from the server not from the cache, you can pass a <code>true</code> parameter to <code>location.reload()</code>. This method is compatible with all major browsers, including IE, Chrome, Firefox, Safari, Opera.</em></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Stafan</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>I was looking for some information regarding reloads on pages retrieved with POST requests, such as after submitting a <code>method="post"</code> form.</p>

<p>To reload the page <strong><em>keeping the POST data,</em></strong> use:</p>

<p><code>window.location.reload();</code></p>

<p>To reload the page <strong><em>discarding the POST data (perform a GET request),</em></strong> use:</p>

<p><code>window.location.href = window.location.href;</code></p>

<p>Hopefully this can help others looking for the same information.</p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
