---
layout: question
title:  v-cloak在vue.js中不起作用？
date:   2020-03-11T15:21:20.000Z
description: div我的页面上有一个用于显示错误消息的页面。当我刷新页面时，它将显示一段时间，然后消失。我添加了，v-cloak但不起作用。这是代码，showErr...
img: 
author: GilGilPro
category: question
answer: 5
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的页面上</font><font style="vertical-align: inherit;">有一个</font><font style="vertical-align: inherit;">用于显示错误消息的页面。当我刷新页面时，它将显示一段时间，然后消失。</font><font style="vertical-align: inherit;">我添加了，</font></font><code>v-cloak</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是代码，</font></font><code>showErrorMsg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是错误的</font></font></p>

<pre><code>&lt;div v-cloak v-show="showErrorMsg" style="z-index:100" class="h5_tips tips_error"&gt;<font></font>
  &lt;a href="#" v-on:click="showErrorMsg = false" class="del"&gt;&lt;i&gt;&amp;#xe906;&lt;/i&gt;&lt;/a&gt;<font></font>
  &lt;p v-text="errorMsg"&gt;&lt;/p&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何解决？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第839篇《v-cloak在vue.js中不起作用？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里阿飞</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需将此代码包含到您的css文件中</font></font></p>

<pre><code>[v-cloak] { display:none; }
</code></pre>

<p><a href="http://vuejs.org/api/#v-cloak" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://vuejs.org/api/#v-cloak</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法示例：</font></font></p>

<pre><code>&lt;div class="xpto" v-cloak&gt;<font></font>
    Hello<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该指令将保留在元素上，直到关联的Vue实例完成编译为止。</font><font style="vertical-align: inherit;">结合[v-cloak] {display：none}这样的CSS规则，此指令可用于隐藏未编译的胡子绑定，直到Vue实例准备就绪为止。</font></font></p>
</blockquote>

<p><a href="http://vuejs.org/api/#v-cloak" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://vuejs.org/api/#v-cloak</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙村村Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，以上两个答案对我不起作用，因为问题是其他原因。</font><font style="vertical-align: inherit;">由于此问题在Google上排名第一，因此我想分享自己的解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在更具体的位置定义了显示CSS规则，则会破坏v-cloak功能。</font><font style="vertical-align: inherit;">然而！</font><font style="vertical-align: inherit;">不要绝望-简单地复制到你的CSS文件，这一点，它</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">努力！</font></font></p>

<pre><code>[v-cloak] .v-cloak--block {<font></font>
  display: block!important;<font></font>
}<font></font>
<font></font>
[v-cloak] .v-cloak--inline {<font></font>
  display: inline!important;<font></font>
}<font></font>
<font></font>
[v-cloak] .v-cloak--inlineBlock {<font></font>
  display: inline-block!important;<font></font>
}<font></font>
<font></font>
[v-cloak] .v-cloak--hidden {<font></font>
  display: none!important;<font></font>
}<font></font>
<font></font>
[v-cloak] .v-cloak--invisible {<font></font>
  visibility: hidden!important;<font></font>
}<font></font>
<font></font>
.v-cloak--block,<font></font>
.v-cloak--inline,<font></font>
.v-cloak--inlineBlock {<font></font>
  display: none!important;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green卡卡西</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，这是由于</font></font><code>display</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的财产</font><font style="vertical-align: inherit;">有冲突</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">为了解决这个问题，我</font></font><code>!important</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>[v-cloak]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">as </font><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">使用了</font><font style="vertical-align: inherit;">标志</font><font style="vertical-align: inherit;">：</font></font></p>



<pre><code>[v-cloak] {<font></font>
    display: none !important;<font></font>
}<font></font>
<font></font>
.my-class {<font></font>
    display: table-cell;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue.js-2.3.4</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我</font><font style="vertical-align: inherit;">在应用容器上</font><font style="vertical-align: inherit;">添加了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v-cloak</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，在父容器上</font><font style="vertical-align: inherit;">添加了</font><strong><font style="vertical-align: inherit;">v-cloak</font></strong><font style="vertical-align: inherit;">，我发现您没有重复将其保持为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DRY</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的代码</font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></strong></p>

<pre><code>&lt;div id="app" v-cloak&gt;<font></font>
 Anything inside gets the v-cloak<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS：</font></font></strong></p>

<pre><code>[v-cloak] {<font></font>
 display:none;<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Codepen示例：</font></font></strong></p>

<ul>
<li><a href="https://codepen.io/Frontend/pen/RjoKQm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://codepen.io/Frontend/pen/RjoKQm</font></font></a></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilGilPro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过重写CSS来解决此问题</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在CSS文件中添加一个类：</font></font></p>

<pre><code>[v-cloak] .v-cloak--hidden{<font></font>
  display: none;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后是html：</font></font></p>

<pre><code>&lt;div v-show="showErrorMsg" style="z-index:100" class="h5_tips tips_error v-cloak--hidden"&gt;<font></font>
  &lt;a href="#" v-on:click="showErrorMsg = false" class="del"&gt;&lt;i&gt;&amp;#xe906;&lt;/i&gt;&lt;/a&gt;<font></font>
  &lt;p v-text="errorMsg"&gt;&lt;/p&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
