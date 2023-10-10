---
layout: question
title:  localStorage值的最大大小是多少？
date:   2020-03-12T08:36:57.000Z
description: 由于localStorage（当前）仅支持将字符串作为值，并且为了做到这一点，需要先将对象进行字符串化（存储为JSON-string），然后才可以定义值的...
img: 
author: DavaidAPro
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于</font></font><code>localStorage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（当前）仅支持将字符串作为值，并且为了做到这一点，需要先将对象进行字符串化（存储为JSON-string），然后才可以定义值的长度。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有谁知道是否存在适用于所有浏览器的定义？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1152篇《localStorage值的最大大小是多少？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在执行以下操作：   </font></font></p>

<pre><code>getLocalStorageSizeLimit = function () {<font></font>
<font></font>
    var maxLength = Math.pow(2,24);<font></font>
    var preLength = 0;<font></font>
    var hugeString = "0";<font></font>
    var testString;<font></font>
    var keyName = "testingLengthKey";<font></font>
<font></font>
    //2^24 = 16777216 should be enough to all browsers<font></font>
    testString = (new Array(Math.pow(2, 24))).join("X");<font></font>
<font></font>
    while (maxLength !== preLength) {<font></font>
        try  {<font></font>
            localStorage.setItem(keyName, testString);<font></font>
<font></font>
            preLength = testString.length;<font></font>
            maxLength = Math.ceil(preLength + ((hugeString.length - preLength) / 2));<font></font>
<font></font>
            testString = hugeString.substr(0, maxLength);<font></font>
        } catch (e) {<font></font>
            hugeString = testString;<font></font>
<font></font>
            maxLength = Math.floor(testString.length - (testString.length - preLength) / 2);<font></font>
            testString = hugeString.substr(0, maxLength);<font></font>
        }<font></font>
    }<font></font>
<font></font>
    localStorage.removeItem(keyName);<font></font>
<font></font>
    maxLength = JSON.stringify(this.storageObject).length + maxLength + keyName.length - 2;<font></font>
<font></font>
    return maxLength;<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，一旦我开发了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（桌面浏览器）扩展程序并测试了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地存储的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际最大大小。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的结果：</font></font></strong></p>

<pre><code>Ubuntu 18.04.1 LTS (64-bit)<font></font>
Chrome 71.0.3578.98 (Official Build) (64-bit)<font></font>
Local Storage content size 10240 KB (10 MB)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了</font></font><code>10240 KB</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法</font><font style="vertical-align: inherit;">以外，还</font><font style="vertical-align: inherit;">返回了以下错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未捕获的DOMException：无法在“存储”上执行“ setItem”：设置“便笺”的值超出了配额。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天古一Mandy</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要假设5MB可用-本地存储容量会因浏览器而异，其中2.5MB，5MB和无限制是最常见的值。</font><font style="vertical-align: inherit;">来源：</font><a href="http://dev-test.nemikor.com/web-storage/support-test/"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：</font></font><a href="http://dev-test.nemikor.com/web-storage/support-test/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//dev-test.nemikor.com/web-storage/support-test/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神无Pro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用</font></font><a href="http://en.wikipedia.org/wiki/Web_Storage" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关Web存储</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><a href="http://en.wikipedia.org/wiki/Web_Storage" rel="noreferrer"><font style="vertical-align: inherit;">Wikipedia文章</font></a><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以简单地将网络存储视为Cookie的一种改进，它提供了更大的存储容量（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google Chrome中每个原始</font></font><a href="https://plus.google.com/u/0/+FrancoisBeaufort/posts/S5Q9HqDB8bh" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">站点</font><strong><font style="vertical-align: inherit;">10 MB（</font></strong><strong><a href="https://plus.google.com/u/0/+FrancoisBeaufort/posts/S5Q9HqDB8bh" rel="noreferrer"><font style="vertical-align: inherit;">https://plus.google.com/u/0/+FrancoisBeaufort/posts/S5Q9HqDB8bh</font></a></strong><strong><font style="vertical-align: inherit;">），Mozilla Firefox和Opera；在Internet Explorer中每个存储区10 MB</font></strong><font style="vertical-align: inherit;">）和更好的编程界面。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且引用了</font></font><a href="http://ejohn.org/blog/dom-storage/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">John Resig的文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> [2007年1月发布]：</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">储存空间</font></font></strong></p>
  
  <p>It is implied that, with DOM Storage,
  you have considerably more storage
  space than the typical user agent
  limitations imposed upon Cookies.
  However, the amount that is provided
  is not defined in the specification,
  nor is it meaningfully broadcast by
  the user agent.</p>
  
  <p>If you look at the Mozilla source code
  we can see that 5120KB is the default
  storage size for an entire domain.
  This gives you considerably more space
  to work with than a typical 2KB
  cookie.</p>
  
  <p><strong>However, the size of this storage area
  can be customized by the user</strong> (so a
  5MB storage area is not guaranteed,
  nor is it implied) and the user agent
  (Opera, for example, may only provide
  3MB - but only time will tell.)</p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，Opera没有5MB的限制。</font><font style="vertical-align: inherit;">随着应用程序需求的增加，它提供了增加限制的功能。</font><font style="vertical-align: inherit;">用户甚至可以为域选择“无限存储”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以轻松地</font><font style="vertical-align: inherit;">自己</font></font><a href="http://arty.name/localstorage.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试localStorage限制/配额</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Davaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">    移动浏览器：</font></font></h2>

<pre><code>Browser    | Chrome    | Android Browser    | Firefox     | iOS Safari<font></font>
Version    | 40        | 4.3                | 34          | 6-8<font></font>
Available  | 10MB      | 2MB                | 10MB        | 5MB<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">    桌面浏览器：</font></font></h2>

<pre><code>Browser    | Chrome   | Opera    | Firefox    | Safari      | IE<font></font>
Version    | 40       | 27       | 34         | 6-8         | 9-11<font></font>
Available  | 10MB     | 10MB     | 10MB       | 5MB         | 10MB<font></font>
</code></pre>

<p><a href="https://www.html5rocks.com/en/tutorials/offline/quota-research/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考链接</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
