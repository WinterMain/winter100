---
layout: question
title:  VueJS $手表$ refs
date:   2020-03-13T07:37:42.000Z
description: $watchVue 有可能$refs吗？我想针对嵌套在当前Vue实例内但ready回调内的子组件设置逻辑，该子组件$refs.childcompone...
img: 
author: 米亚Stafan
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>$watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue </font><font style="vertical-align: inherit;">有可能</font></font><code>$refs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想针对嵌套在当前Vue实例内但</font></font><code>ready</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回调</font><font style="vertical-align: inherit;">内的子组件设置逻辑，该子组件</font></font><code>$refs.childcomponent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最初是</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在处理过程中使用的。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内 </font></font><code>ready()</code></strong></p>

<pre><code>this.$watch('$refs', function() {<font></font>
    console.log("not firing");<font></font>
}, { deep: true });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果：错误：超出最大调用堆栈</font></font></p>

<p><strong><code>watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 实例的属性</font></font></strong></p>

<pre><code>watch: {<font></font>
  '$refs': {<font></font>
     handler: function() { console.log("hit"); },<font></font>
     deep: true<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果：什么都没有。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1401篇《VueJS $手表$ refs》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Near</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不，$ refs不是被动的，监视将无法工作。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
