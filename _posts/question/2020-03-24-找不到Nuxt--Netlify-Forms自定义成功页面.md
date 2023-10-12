---
layout: question
title:  找不到Nuxt + Netlify Forms自定义成功页面
date:   2020-03-24T09:38:03.000Z
description: I have a simple Form in my Nuxt Project - hosting on Netlify and use the Netl...
img: 
author: 神无
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>I have a simple Form in my Nuxt Project - hosting on Netlify and use the Netlify Forms feature - docs here <a href="https://www.netlify.com/docs/form-handling/" rel="nofollow noreferrer">https://www.netlify.com/docs/form-handling/</a></p>

<pre><code>  &lt;form<font></font>
    action="/confirm" name="request" method="post" data-netlify="true" netlify-honeypot="bot-field"<font></font>
  &gt;<font></font>
    &lt;p class="hidden"&gt;<font></font>
      &lt;label&gt;Don’t fill this out if you're human: &lt;input name="bot-field" &gt;&lt;/label&gt;<font></font>
    &lt;/p&gt;<font></font>
    &lt;v-text-field<font></font>
      label="Name"<font></font>
      name="name"<font></font>
    /&gt;<font></font>
    ...<font></font>
    &lt;v-btn<font></font>
      :disabled="!valid"<font></font>
      type="submit"<font></font>
    &gt;send<font></font>
    &lt;/v-btn&gt;<font></font>
  &lt;/form&gt;<font></font>
</code></pre>

<p>If I browse to <a href="https://mddomain.com/confirm" rel="nofollow noreferrer">https://mddomain.com/confirm</a> it works fine.</p>

<p>If I submit the form on the first time I come to the /confirm page but Netlify doesn't safe the data. If i try it again I got this Error Mesage:</p>

<blockquote>
  <p>Page Not Found
  Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
  
  <p>Back to our site </p>
</blockquote>

<p>What's wrong with my code?</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3584篇《找不到Nuxt + Netlify Forms自定义成功页面》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
