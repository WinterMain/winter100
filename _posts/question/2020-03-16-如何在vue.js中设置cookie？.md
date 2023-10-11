---
layout: question
title:  如何在vue.js中设置cookie？
date:   2020-03-16T07:33:50.000Z
description: 在vuejs中设置Cookie的最佳做法是什么？我使用SSR，所以我想我不能使用localStorage。最好的方法是什么？...
img: 
author: 西里逆天
category: question
answer: 2
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在vuejs中设置Cookie的最佳做法是什么？</font><font style="vertical-align: inherit;">我使用SSR，所以我想我不能使用localStorage。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的方法是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1812篇《如何在vue.js中设置cookie？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙米亚樱</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好使用</font></font><code>mounted</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font></font></p>

<pre><code>mounted: function() { <font></font>
    document.cookie = "username=John Doe";<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云卡卡西</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://www.npmjs.com/package/vue-cookie" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vue-cookie</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://www.npmjs.com/package/vue-cookies" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vue-cookies</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> npm软件包。</font><font style="vertical-align: inherit;">您可以在创建的方法中设置Cookie。</font></font></p>

<pre><code>created() {<font></font>
   this.$cookie.set("keyName", keyValue, "expiring time")<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
