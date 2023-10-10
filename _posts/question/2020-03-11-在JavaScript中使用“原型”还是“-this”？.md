---
layout: question
title:  在JavaScript中使用“原型”还是“ this”？
date:   2020-03-11T02:34:26.000Z
description: 之间有什么区别var A = function () {    this.x = function () {        //do someth...
img: 
author: 西里飞云
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之间有什么区别</font></font></p>

<pre><code>var A = function () {<font></font>
    this.x = function () {<font></font>
        //do something<font></font>
    };<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font></p>

<pre><code>var A = function () { };<font></font>
A.prototype.x = function () {<font></font>
    //do something<font></font>
};<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第550篇《在JavaScript中使用“原型”还是“ this”？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC40565407</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如在其他答案中所讨论的那样，这实际上是性能方面的考虑，因为原型中的函数与所有实例共享-而不是为每个实例创建的函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我整理了一个jsperf来展示这一点。</font><font style="vertical-align: inherit;">实例化类的时间有很大的不同，尽管实际上只有在创建多个实例时才有意义。</font></font></p>

<p><a href="http://jsperf.com/functions-in-constructor-vs-prototype" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsperf.com/functions-in-constructor-vs-prototype</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇宝儿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑一下静态类型的语言，事物</font></font><code>prototype</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是静态的，事物</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是与实例相关的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan西门</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我相信@Matthew Crumley是正确的。</font><font style="vertical-align: inherit;">它们在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能上</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（如果不是在结构上）是等效的。</font><font style="vertical-align: inherit;">如果您使用Firebug查看使用创建的对象，则</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以看到它们是相同的。</font><font style="vertical-align: inherit;">但是，我的偏好如下。</font><font style="vertical-align: inherit;">我猜想这似乎更像是我在C＃/ Java中所习惯的。</font><font style="vertical-align: inherit;">即，定义类，定义字段，构造函数和方法。</font></font></p>

<pre><code>var A = function() {};<font></font>
A.prototype = {<font></font>
    _instance_var: 0,<font></font>
<font></font>
    initialize: function(v) { this._instance_var = v; },<font></font>
<font></font>
    x: function() {  alert(this._instance_var); }<font></font>
};<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并不是要暗示变量的范围是私有的，我只是想说明如何在javascript中定义类。</font><font style="vertical-align: inherit;">变量名称已更改以反映这一点。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Jim</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原型是该类的模板；</font><font style="vertical-align: inherit;">这适用于它的所有未来实例。</font><font style="vertical-align: inherit;">而这是对象的特定实例。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪小卤蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这已经死了，但我想展示一个实际的速度差异示例。</font></font></p>

<p><a href="https://i.stack.imgur.com/mpGDr.png" rel="noreferrer"><img src="https://i.stack.imgur.com/mpGDr.png" alt="直接作用于对象"></a></p>

<p><a href="https://i.stack.imgur.com/rEyMR.png" rel="noreferrer"><img src="https://i.stack.imgur.com/rEyMR.png" alt="原型功能"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，我们使用</font></font><code>print</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome中</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">创建2,000,000个新对象</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我们将每个对象存储在一个数组中。</font><font style="vertical-align: inherit;">放置</font></font><code>print</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原型大约需要1/2倍的时间。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门JinJin</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一个示例仅更改该对象的接口。</font><font style="vertical-align: inherit;">第二个示例更改该类所有对象的接口。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿小小</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在大多数情况下，它们本质上是相同的，但是第二个版本可以节省内存，因为该函数只有一个实例，而不是每个对象都有单独的函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用第一种形式的原因是访问“私人成员”。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>var A = function () {<font></font>
    var private_var = ...;<font></font>
<font></font>
    this.x = function () {<font></font>
        return private_var;<font></font>
    };<font></font>
<font></font>
    this.setX = function (new_x) {<font></font>
        private_var = new_x;<font></font>
    };<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于javascript的范围规则，private_var可用于分配给this.x的函数，但不适用于该对象。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
