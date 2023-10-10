---
layout: question
title:  使用JavaScript将新属性（元素）添加到JSON对象
date:   2020-03-16T03:42:05.000Z
description: 如何使用JavaScript将新属性（元素）添加到JSON对象？...
img: 
author: 宝儿伽罗
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用JavaScript将新属性（元素）添加到JSON对象？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1699篇《使用JavaScript将新属性（元素）添加到JSON对象》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProA</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p>You can also add new json objects into your json, using the <a href="http://api.jquery.com/jQuery.extend/" rel="nofollow noreferrer">extend</a> function,</p>

<pre><code>var newJson = $.extend({}, {my:"json"}, {other:"json"});<font></font>
// result -&gt; {my: "json", other: "json"}<font></font>
</code></pre>

<p>A very good option for the extend function is the recursive merge. Just add the true value as the first parameter (read the documentation for more options). Example,</p>

<pre><code>var newJson = $.extend(true, {}, {<font></font>
    my:"json",<font></font>
    nestedJson: {a1:1, a2:2}<font></font>
}, {<font></font>
    other:"json",<font></font>
    nestedJson: {b1:1, b2:2}<font></font>
});<font></font>
// result -&gt; {my: "json", other: "json", nestedJson: {a1:1, a2:2, b1:1, b2:2}}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Davaid</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><pre><code>var jsonObj = {<font></font>
    members: <font></font>
           {<font></font>
            host: "hostName",<font></font>
            viewers: <font></font>
            {<font></font>
                user1: "value1",<font></font>
                user2: "value2",<font></font>
                user3: "value3"<font></font>
            }<font></font>
        }<font></font>
}<font></font>
<font></font>
var i;<font></font>
<font></font>
for(i=4; i&lt;=8; i++){<font></font>
    var newUser = "user" + i;<font></font>
    var newValue = "value" + i;<font></font>
    jsonObj.members.viewers[newUser] = newValue ;<font></font>
<font></font>
}<font></font>
<font></font>
console.log(jsonObj);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光猿</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON代表JavaScript Object Notation。</font><font style="vertical-align: inherit;">JSON对象实际上是一个字符串，尚未转换为它表示的对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要将属性添加到JS中的现有对象，可以执行以下操作。</font></font></p>

<pre><code>object["property"] = value;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么  </font></font></p>

<pre><code>object.property = value;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您提供一些额外的信息，例如您在上下文中确实需要做的事情，那么您可能会得到一个更量身定制的答案。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
