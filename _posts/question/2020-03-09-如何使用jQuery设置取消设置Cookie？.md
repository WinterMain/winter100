---
layout: question
title:  如何使用jQuery设置/取消设置Cookie？
date:   2020-03-09T14:12:39.000Z
description: 如何使用jQuery设置和取消设置Cookie，例如创建一个名为的Cookie test并将其值设置为1？...
img: 
author: 阿飞小卤蛋
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用jQuery设置和取消设置Cookie，例如创建一个名为的Cookie </font></font><code>test</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将其值设置为</font></font><code>1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Gil</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在</font><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie" rel="nofollow noreferrer"><font style="vertical-align: inherit;">此处</font></a><font style="vertical-align: inherit;">使用Mozilla网站上的库</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将可以设置和获取这样的Cookie </font></font></p>

<pre><code>docCookies.setItem(name, value);<font></font>
docCookies.getItem(name);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用此处提供的插件。</font></font></p>

<p><a href="https://plugins.jquery.com/cookie/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://plugins.jquery.com/cookie/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后写一个cookie做
</font></font><code>$.cookie("test", 1);</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">访问设置的cookie做
</font></font><code>$.cookie("test");</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilA</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我使用的全局模块-</font></font></p>

<pre><code>var Cookie = {   <font></font>
<font></font>
   Create: function (name, value, days) {<font></font>
<font></font>
       var expires = "";<font></font>
<font></font>
        if (days) {<font></font>
           var date = new Date();<font></font>
           date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));<font></font>
           expires = "; expires=" + date.toGMTString();<font></font>
       }<font></font>
<font></font>
       document.cookie = name + "=" + value + expires + "; path=/";<font></font>
   },<font></font>
<font></font>
   Read: function (name) {<font></font>
<font></font>
        var nameEQ = name + "=";<font></font>
        var ca = document.cookie.split(";");<font></font>
<font></font>
        for (var i = 0; i &lt; ca.length; i++) {<font></font>
            var c = ca[i];<font></font>
            while (c.charAt(0) == " ") c = c.substring(1, c.length);<font></font>
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);<font></font>
        }<font></font>
<font></font>
        return null;<font></font>
    },<font></font>
<font></font>
    Erase: function (name) {<font></font>
<font></font>
        Cookie.create(name, "", -1);<font></font>
    }<font></font>
<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保不要执行以下操作：</font></font></p>

<pre><code>var a = $.cookie("cart").split(",");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，如果cookie不存在，调试器将返回一些无用的消息，例如“ .cookie不是函数”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">始终先声明，然后在检查null后再进行拆分。</font><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre><code>var a = $.cookie("cart");<font></font>
if (a != null) {<font></font>
    var aa = a.split(",");<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
