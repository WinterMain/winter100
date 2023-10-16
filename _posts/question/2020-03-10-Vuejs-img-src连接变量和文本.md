---
layout: question
title:  Vue.js img src连接变量和文本
date:   2020-03-10T03:00:26.000Z
description: 我想将Vue.js变量与图片网址连接起来。我计算的是：imgPreUrl   function() {    if (androidBuild)...
img: 
author: 小小逆天
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想将Vue.js变量与图片网址连接起来。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我计算的是：</font></font></p>

<pre><code>imgPreUrl : function() {<font></font>
    if (androidBuild) return "android_asset/www/";<font></font>
    else return "";<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我为Android构建：</font></font></p>

<pre><code>&lt;img src="/android_asset/www/img/logo.png"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他</font></font></p>

<pre><code>&lt;img src="img/logo.png"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何将计算出的变量与URL连接起来？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试过这个：</font></font></p>

<pre><code>&lt;img src="{{imgPreUrl}}img/logo.png"&gt;
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第450篇《Vue.js img src连接变量和文本》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva凯</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">试一试 </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;img :src="require(`${imgPreUrl}img/logo.png`)"&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙阿飞斯丁</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在另一种情况下，我可以将模板文字ES6与反引号配合使用，因此对于您的反引号可以设置为：</font></font></p>

<pre><code>&lt;img v-bind:src="`${imgPreUrl()}img/logo.png`"&gt;
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
