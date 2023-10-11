---
layout: question
title:  jQuery .each（）向后
date:   2020-03-14T10:02:41.000Z
description: 我正在使用JQuery选择页面上的某些元素，然后在DOM中移动它们。我遇到的问题是我需要按照JQuery自然希望选择它们的相反顺序来选择所有元素。例如：...
img: 
author: 老丝小胖蛋蛋
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用JQuery选择页面上的某些元素，然后在DOM中移动它们。</font><font style="vertical-align: inherit;">我遇到的问题是我需要按照JQuery自然希望选择它们的相反顺序来选择所有元素。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>&lt;ul&gt;<font></font>
   &lt;li&gt;Item 1&lt;/li&gt;<font></font>
   &lt;li&gt;Item 2&lt;/li&gt;<font></font>
   &lt;li&gt;Item 3&lt;/li&gt;<font></font>
   &lt;li&gt;Item 4&lt;/li&gt;<font></font>
   &lt;li&gt;Item 5&lt;/li&gt;<font></font>
&lt;/ul&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想选择所有li项目并在它们上使用.each（）命令，但我要从项目5开始，然后从项目4开始，等等。这可能吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1588篇《jQuery .each（）向后》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p>I think u need </p>

<pre><code>.parentsUntill()
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙A</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p>I found <code>Array.prototype.reverse</code> unsuccessful with objects, so I made a new jQuery function to use as an alternative: <code>jQuery.eachBack()</code>. It iterates through as the normal <code>jQuery.each()</code> would, and stores each key into an array. It then reverses that array and performs the callback on the original array/object in the order of the reversed keys.</p>

<pre><code>jQuery.eachBack=function (obj, callback) {<font></font>
    var revKeys=[]; $.each(obj,function(rind,rval){revKeys.push(rind);}); <font></font>
    revKeys.reverse();<font></font>
    $.each(revKeys,function (kind,i){<font></font>
        if(callback.call(obj[i], i, obj[i]) === false) {    return false;}<font></font>
    });<font></font>
    return obj;<font></font>
}   <font></font>
jQuery.fn.eachBack=function (callback,args) {<font></font>
    return jQuery.eachBack(this, callback, args);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">文韬武略辛弃疾</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p>You cannot iterate backwards with the jQuery each function, but you can still leverage jQuery syntax.</p>

<p>Try the following:</p>

<pre><code>//get an array of the matching DOM elements   <font></font>
var liItems = $("ul#myUL li").get();<font></font>
<font></font>
//iterate through this array in reverse order    <font></font>
for(var i = liItems.length - 1; i &gt;= 0; --i)<font></font>
{<font></font>
  //do Something<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p>Needed to do a reverse on $.each so i used Vinay idea:</p>

<pre><code>//jQuery.each(collection, callback) =&gt;<font></font>
$.each($(collection).get().reverse(), callback func() {});<font></font>
</code></pre>

<p>worked nicely, thanks</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易斯丁神奇</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p>You can do</p>

<pre><code>jQuery.fn.reverse = function() {<font></font>
    return this.pushStack(this.get().reverse(), arguments);<font></font>
}; <font></font>
</code></pre>

<p>followed by</p>

<pre><code>$(selector).reverse().each(...) 
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Tony</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><pre><code>$($("li").get().reverse()).each(function() { /* ... */ });
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
