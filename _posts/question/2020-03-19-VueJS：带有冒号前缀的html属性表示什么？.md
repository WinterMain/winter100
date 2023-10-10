---
layout: question
title:  VueJS：带有冒号前缀的html属性表示什么？
date:   2020-03-19T03:48:42.000Z
description: 例：<vue-select   class="vue-select1"   name="select1"   options="options1...
img: 
author: 猴子JinJin
category: question
answer: 3
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>&lt;vue-select <font></font>
  class="vue-select1" <font></font>
  name="select1"<font></font>
  :options="options1" <font></font>
  :model.sync="result1"<font></font>
&gt;&lt;/vue-select&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前面</font></font><code>:options</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>:model.sync</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font><font style="vertical-align: inherit;">的冒号是什么意思</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">我在互联网上进行了搜索，但找不到任何答案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处显示示例：</font><a href="https://github.com/Haixing-Hu/vue-select" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://github.com/Haixing-Hu/vue-select" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/Haixing-Hu/vue-select</font></font></a></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near神奇</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在中使用冒号时要小心，</font></font><code>HTML</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为</font><font style="vertical-align: inherit;">在中</font><font style="vertical-align: inherit;">选择属性，</font></font><code>CSS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>JQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与冒号具有不同的含义。</font><font style="vertical-align: inherit;">在</font></font><code>CSS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和中</font></font><code>JQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，冒号表示a </font></font><code>pseudo-selector</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，与不同于</font></font><code>v-bind</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">;</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德小胖Harry</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要添加</font></font><a href="https://stackoverflow.com/a/44955735/4115031"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢的回答</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些是</font></font><a href="https://vuejs.org/v2/guide/class-and-style.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">动态属性</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">基本上，这意味着Vue.js将允许您将这些属性的值设置为变量，并且当这些变量的值更新时，这些属性的值也会更新。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西乐逆天</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Vue模板中，以</font></font><code>:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">html属性为前缀的</font><font style="vertical-align: inherit;">冒号</font><font style="vertical-align: inherit;">是的</font></font><a href="https://vuejs.org/v2/guide/syntax.html#v-bind-Shorthand" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简写</font></font><code>v-bind</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="https://vuejs.org/v2/api/#v-bind" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是的完整文档</font></font><code>v-bind</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
