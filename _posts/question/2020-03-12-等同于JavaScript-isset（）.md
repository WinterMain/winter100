---
layout: question
title:  等同于JavaScript isset（）
date:   2020-03-12T07:32:34.000Z
description: 在PHP中可以做到if(isset($array\['foo'\])) { ... }。在JavaScript中，您通常会使用if(array.foo) { ...
img: 
author: Green猿古一
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在PHP中可以做到</font></font><code>if(isset($array['foo'])) { ... }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在JavaScript中，您通常会使用</font></font><code>if(array.foo) { ... }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相同的方法，但这并不完全相同。</font><font style="vertical-align: inherit;">如果</font></font><code>array.foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实存在，但条件是</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或可能还有其他值）</font><font style="vertical-align: inherit;">，则条件也将评估为false </font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>isset</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript </font><font style="vertical-align: inherit;">中PHP的完美替代品是</font><font style="vertical-align: inherit;">什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从更广泛的意义上讲，有关JavaScript处理不存在的变量，没有值的变量等的通用完整指南会很方便。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1065篇《等同于JavaScript isset（）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长GO</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>I use a function that can check variables and objects. very convenient to work with jQuery</p>

<pre><code>    function _isset (variable) {<font></font>
        if(typeof(variable) == "undefined" || variable == null)<font></font>
            return false;<font></font>
        else<font></font>
            if(typeof(variable) == "object" &amp;&amp; !variable.length) <font></font>
                return false;<font></font>
            else<font></font>
                return true;<font></font>
    };<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子飞云</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个简单的解决方案有效，但不适用于深层对象检查。</font></font></p>

<pre><code>function isset(str) {<font></font>
    return window[str] !== undefined;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞猿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>If you are using <a href="http://underscorejs.org/" rel="noreferrer">underscorejs</a> I always use</p>

<pre><code>if (!_.isUndefined(data) &amp;&amp; !_.isNull(data)) {<font></font>
     //your stuff<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
