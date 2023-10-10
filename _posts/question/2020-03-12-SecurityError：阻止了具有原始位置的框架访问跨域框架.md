---
layout: question
title:  SecurityError：阻止了具有原始位置的框架访问跨域框架
date:   2020-03-12T08:11:03.000Z
description: 我正在<iframe>HTML页面中加载，并尝试使用Javascript访问其中的元素，但是当我尝试执行代码时，出现以下错误：SecurityErro...
img: 
author: Jim古一
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在</font></font><code>&lt;iframe&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML页面中</font><font style="vertical-align: inherit;">加载</font><font style="vertical-align: inherit;">，并尝试使用Javascript访问其中的元素，但是当我尝试执行代码时，出现以下错误：</font></font></p>

<pre class="lang-none prettyprint-override"><code>SecurityError: Blocked a frame with origin "http://www.&lt;domain&gt;.com" from accessing a cross-origin frame.
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您能否帮助我找到解决方案，以便我可以访问框架中的元素？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用此代码进行测试，但徒劳无功：</font></font></p>

<pre><code>$(document).ready(function() {<font></font>
    var iframeWindow = document.getElementById("my-iframe-id").contentWindow;<font></font>
<font></font>
    iframeWindow.addEventListener("load", function() {<font></font>
        var doc = iframe.contentDocument || iframe.contentWindow.document;<font></font>
        var target = doc.getElementById("my-target-id");<font></font>
<font></font>
        target.innerHTML = "Found it!";<font></font>
    });<font></font>
});<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry逆天Eva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开开始菜单</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">键入Windows + R或打开“运行</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行以下命令。</font></font></li>
</ul>

<p><code>chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilGilPro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">补充Marco Bonelli的回答：当前，在框架/ iframe之间进行交互的最佳方式是使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/Window.postMessage" rel="noreferrer"><code>window.postMessage</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="http://caniuse.com/#feat=x-doc-messaging" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有浏览器均支持</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
