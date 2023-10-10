---
layout: question
title:  jQuery数据与Attr？
date:   2020-03-12T09:13:57.000Z
description: 使用之间$.data和$.attr使用时在用法上有什么区别data-someAttribute？我的理解是，$.data它存储在jQuery的内部$....
img: 
author: Eva斯丁
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用之间</font></font><code>$.data</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>$.attr</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用时</font><font style="vertical-align: inherit;">在用法上有什么区别</font></font><code>data-someAttribute</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的理解是，</font></font><code>$.data</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它存储在jQuery的内部</font></font><code>$.cache</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而不是DOM。</font><font style="vertical-align: inherit;">因此，如果要</font></font><code>$.cache</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于数据存储，则应使用</font></font><code>$.data</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果要添加HTML5数据属性，则应使用</font></font><code>$.attr("data-attribute", "myCoolValue")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小神奇</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>data-*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性嵌入自定义数据。</font><font style="vertical-align: inherit;">这些</font></font><code>data-*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性使我们能够在所有HTML元素上嵌入自定义数据属性。</font></font></p>

<p>jQuery <code>.data()</code> method allows you to get/set data of any type to DOM elements in a way that is safe from circular references and therefore from memory leaks.</p>

<p>jQuery <code>.attr()</code> method get/set attribute value for only the first element in the matched set.</p>

<p><strong>Example:</strong></p>

<pre><code>&lt;span id="test" title="foo" data-kind="primary"&gt;foo&lt;/span&gt;<font></font>
<font></font>
$("#test").attr("title");<font></font>
$("#test").attr("data-kind");<font></font>
$("#test").data("kind");<font></font>
$("#test").data("value", "bar");<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
