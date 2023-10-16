---
layout: question
title:  Vue.js-条件之间的转换（v-if和v-else）
date:   2020-03-18T11:12:38.000Z
description: transition在vuejs条件v-if和之间可以使用一种方法v-else吗？举个例子：<transition name="fade">  ...
img: 
author: GreenGil
category: question
answer: 0
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>transition</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在vuejs条件</font></font><code>v-if</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">之间</font><font style="vertical-align: inherit;">可以使用一种方法</font></font><code>v-else</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">举个例子：</font></font></p>

<pre><code>&lt;transition name="fade"&gt;<font></font>
    &lt;p v-if="show"&gt;hello&lt;/p&gt;<font></font>
    &lt;p v-else&gt;Goodbye&lt;/p&gt;<font></font>
&lt;/transition&gt;<font></font>
</code></pre>

<hr>

<pre><code>new Vue({<font></font>
   el: '#demo',<font></font>
   data: {<font></font>
       show: true<font></font>
   }<font></font>
})<font></font>
</code></pre>

<hr>

<pre><code>.fade-enter-active,<font></font>
.fade-leave-active {<font></font>
    transition: opacity .5s<font></font>
 }<font></font>
<font></font>
.fade-enter,<font></font>
.fade-leave-active {<font></font>
    opacity: 0<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我似乎无法</font></font><code>transition</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下</font><font style="vertical-align: inherit;">使用a </font></font><code>show</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">在这种情况下，当您切换时</font><font style="vertical-align: inherit;">，</font></font><code>&lt;p&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font></font><code>transition</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之间会</font><font style="vertical-align: inherit;">使用a </font><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="https://jsfiddle.net/fbponh78" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://jsfiddle.net/fbponh78</font></font></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2173篇《Vue.js-条件之间的转换（v-if和v-else）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
