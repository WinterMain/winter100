---
layout: question
title:  选择JavaScript数组中的最后一个元素\[重复\]
date:   2020-03-12T07:41:14.000Z
description:                                                                          ...
img: 
author: Harry乐Harry
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/3216013/get-the-last-item-in-an-array" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取数组中的最后一项</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （48个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2016-12-09 21：04：24Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在制作一个可实时更新用户的位置和路径并将其显示在Google Map上的应用程序。</font><font style="vertical-align: inherit;">我具有允许使用一个对象（同时每秒更新一次）同时跟踪多个用户的功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，当用户按下Android应用程序中的按钮时，坐标将发送到数据库，并且每次位置更改时，都会在地图上更新标记（并形成折线）。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于我有多个用户，因此我发送一个唯一且随机生成的字母数字字符串，以便为每个用户显示一个单独的路径。</font><font style="vertical-align: inherit;">当JS从数据库中提取此数据时，它将检查用户是否存在，如果不存在，它将创建一个新的键，其值为列表。</font><font style="vertical-align: inherit;">它看起来像这样：</font></font></p>

<pre><code>loc = {f096012e-2497-485d-8adb-7ec0b9352c52: [new google.maps.LatLng(39, -86),<font></font>
                                              new google.maps.LatLng(38, -87),<font></font>
                                              new google.maps.LatLng(37, -88)],<font></font>
       44ed0662-1a9e-4c0e-9920-106258dcc3e7: [new google.maps.LatLng(40, -83),<font></font>
                                              new google.maps.LatLng(41, -82),<font></font>
                                              new google.maps.LatLng(42, -81)]}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在做的是存储一个坐标列表作为键的值，即用户的ID。</font><font style="vertical-align: inherit;">每次更改位置时，我的程序都会通过添加到列表中来不断更新此列表（这可以正常工作）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要做的是每次位置更改时都更新标记的位置。</font><font style="vertical-align: inherit;">我想通过选择数组中的最后一个项目来做到这一点，因为那将是最后一个已知的位置。</font><font style="vertical-align: inherit;">现在，每次更改位置时，都会向地图添加一个新标记（示例中的每个点都会在该位置显示一个标记），以便继续添加标记。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当位置更新时，我都会使用“ for（x in loc）”语句，以从列表中获取最后一个位置，并使用该语句来更新标记。</font><font style="vertical-align: inherit;">如何从哈希中的数组中选择最后一个元素？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1073篇《选择JavaScript数组中的最后一个元素\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云神奇</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果这对您的应用程序至关重要，请使用JavaScript对象。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不应该使用原始基元来管理应用程序的关键部分。</font><font style="vertical-align: inherit;">由于这似乎是应用程序的核心，因此应改为使用对象。</font><font style="vertical-align: inherit;">我在下面编写了一些代码来帮助您入门。</font><font style="vertical-align: inherit;">该方法</font></font><code>lastLocation</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将返回最后一个位置。</font></font></p>

<hr>

<pre><code>function User(id) {<font></font>
    this.id = id;<font></font>
<font></font>
    this.locations = [];<font></font>
<font></font>
    this.getId = function() {<font></font>
        return this.id;<font></font>
    };<font></font>
<font></font>
    this.addLocation = function(latitude, longitude) {<font></font>
        this.locations[this.locations.length] = new google.maps.LatLng(latitude, longitude);<font></font>
    };<font></font>
<font></font>
    this.lastLocation = function() {<font></font>
        return this.locations[this.locations.length - 1];<font></font>
    };<font></font>
<font></font>
    this.removeLastLocation = function() {<font></font>
        return this.locations.pop();<font></font>
    };<font></font>
<font></font>
}<font></font>
<font></font>
function Users() {<font></font>
    this.users = {};<font></font>
<font></font>
    this.generateId = function() {<font></font>
        return Math.random();<font></font>
    };<font></font>
<font></font>
    this.createUser = function() {<font></font>
        var id = this.generateId();<font></font>
        this.users[id] = new User(id);<font></font>
        return this.users[id];<font></font>
    };<font></font>
<font></font>
    this.getUser = function(id) {<font></font>
        return this.users[id];<font></font>
    };<font></font>
<font></font>
    this.removeUser = function(id) {<font></font>
        var user = this.getUser(id);<font></font>
        delete this.users[id];<font></font>
<font></font>
        return user;<font></font>
    };<font></font>
<font></font>
}<font></font>
<font></font>
<font></font>
var users = new Users();<font></font>
<font></font>
var user = users.createUser();<font></font>
<font></font>
user.addLocation(0, 0);<font></font>
user.addLocation(0, 1);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这工作：</font></font></p>

<pre><code>array.reverse()[0]
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan猿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>var arr = [1, 2, 3];<font></font>
arr.slice(-1).pop(); // return 3 and arr = [1, 2, 3]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果数组为空，则将返回undefined，并且不会更改数组的值。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam神乐番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>slice()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法：</font></font></p>

<pre><code>my_array.slice(-1)[0]
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗GreenNear</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以</font></font><code>.pop</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭最后一个元素。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，这将更改array的值</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是对您来说可能没问题。</font></font></p>

<pre><code>var a = [1,2,3];<font></font>
a.pop(); // 3<font></font>
a // [1,2]<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>var last = array.slice(-1)[0];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现-1处的slice对于获取最后一个元素（尤其是长度未知的数组）很有用，并且其性能比计算小于1的长度要好得多。</font></font></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla Docs on Slice</font></font></a></p>

<p><a href="http://jsperf.com/get-last-item-from-array/13"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择最后一个数组元素的各种方法的性能</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将ES6解构数组与散布运算符一起使用</font></font></p>

<p><code>var last = [...yourArray].pop();</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，yourArray不会改变。</font></font></strong></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
