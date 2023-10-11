---
layout: question
title:  在vuejs的按钮中包含一个router-link标签
date:   2020-03-11T03:05:52.000Z
description: 我可以将router-link标签包装或封装在标签中button吗？当我按下按钮时，我希望它将我路由到所需的页面。 ...
img: 
author: LEY理查德
category: question
answer: 3
tags: 按钮 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以将</font></font><code>router-link</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">包装或封装在</font><font style="vertical-align: inherit;">标签中</font></font><code>button</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我按下按钮时，我希望它将我路由到所需的页面。 </font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第580篇《在vuejs的按钮中包含一个router-link标签》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Jim</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Vue CLI 2，而这个为我工作！</font></font></p>

<pre><code>&lt;router-link to="/about-creator"&gt;<font></font>
&lt;button&gt;About Creator&lt;/button&gt;<font></font>
&lt;/router-link&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">武藏</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，几天（VueJS&gt; = 2.x）您将要做：</font></font></p>

<pre><code>&lt;router-link tag="button" class="myClass" id="button" :to="place.to.go"&gt;Go!&lt;/router-link&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞羽宝儿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://router.vuejs.org/en/api/router-link.html" rel="noreferrer"><code>tag</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prop</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>&lt;router-link to="/foo" tag="button"&gt;foo&lt;/router-link&gt;
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
