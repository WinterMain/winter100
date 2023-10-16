---
layout: question
title:  当路径的一部分属于$ route.params时，如何在Vuetify按钮中定义Nuxt链接？
date:   2020-03-24T03:19:57.000Z
description: 在Nuxt和Vuetify应用程序中，我有一系列按钮： <v-btn                                         ...
img: 
author: 神乐小哥Near
category: question
answer: 2
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Nuxt和Vuetify应用程序中，我有一系列按钮：</font></font></p>

<pre><code> &lt;v-btn                                                                                                                                                            <font></font>
     dark                                                                                                                                                            <font></font>
     color="orange"                                                                                                                                                  <font></font>
     href="className/studentName"                                                                                                                                        <font></font>
     nuxt                                                                                                                                                            <font></font>
  &gt;                                                                                                                                                               <font></font>
    &lt;v-icon large left&gt;favorite&lt;/v-icon&gt;                                                                                                                            <font></font>
      studentName                                                                                                                                                        <font></font>
  &lt;/v-btn&gt; <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想重构该代码，因为我知道从路由中获取className：</font></font><code>$route.params.className</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且我从普通JavaScript数组中获取了StudentName。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我输入href = {{$$ route.params.className}} / studentName时出现错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请改用v-bind或冒号速记。</font><font style="vertical-align: inherit;">例如，使用代替。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我这样做时：</font></font></p>

<pre><code>:href="$route.params.className/studentName"  
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我得到这个错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性无效：属性“ href”的类型检查失败。</font><font style="vertical-align: inherit;">预期的字符串，对象，得到数字。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么如何正确定义我的</font></font><code>href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具而无需进行手写</font></font><code>className</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我的意思是我想使用</font></font><code>$route.params.className</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它来重构具有多个按钮的代码？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3303篇《当路径的一部分属于$ route.params时，如何在Vuetify按钮中定义Nuxt链接？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green逆天</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>v-bind:href=className+"/"+studentName</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以使其正常工作。</font><font style="vertical-align: inherit;">您可以在</font><a href="https://codepen.io/mohithg/pen/yxRabK" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https://codepen.io/mohithg/pen/yxRabK</font></a><font style="vertical-align: inherit;">找到工作代码</font></font><a href="https://codepen.io/mohithg/pen/yxRabK" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你应该用 </font></font><code>to="studentName" nuxt</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code> &lt;v-toolbar-items class="hidden-sm-and"&gt;<font></font>
    &lt;v-btn flat to="/home" nuxt&gt; Home &lt;/v-btn&gt;<font></font>
    &lt;v-btn flat to="/contact" nuxt&gt; Contact &lt;/v-btn&gt;<font></font>
    &lt;v-btn flat to="/login" nuxt&gt; Login &lt;/v-btn&gt;<font></font>
 &lt;/v-toolbar-items&gt;<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
