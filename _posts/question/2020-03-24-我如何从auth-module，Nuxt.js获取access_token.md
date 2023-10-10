---
layout: question
title:  我如何从auth-module，Nuxt.js获取access_token
date:   2020-03-24T02:15:26.000Z
description: 我尝试使用auth-module使用Nuxt.js下面的链接来构建Facebook登录。https //github.com/nuxt-communi...
img: 
author: LGil
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试使用auth-module使用Nuxt.js下面的链接来构建Facebook登录。</font></font></p>

<p><a href="https://github.com/nuxt-community/auth-module" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/nuxt-community/auth-module</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我无法获得“ access_token”。</font><font style="vertical-align: inherit;">代码如下。</font></font></p>

<pre><code>// pages/login.vue<font></font>
export default {<font></font>
   methods: {<font></font>
       this.$auth.loginWith('facebook')<font></font>
   }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回调URI就是这样。</font></font></p>

<pre><code>https://localhost:3000/facebook/oauth_callback/?#access_token=***&amp;data_access_expiration_time=1561715202&amp;expires_in=4398&amp;reauthorize_required_in=7776000&amp;state=MC4xOTU3MDM2ODIxMzIzOTA5OA
</code></pre>

<pre><code>// pages/facebook/oauth_callback/index.vue<font></font>
&lt;template&gt;<font></font>
  &lt;section&gt;<font></font>
    &lt;p&gt;{{ this.$auth.$state }}&lt;/p&gt;<font></font>
    &lt;p&gt;{{ this.$route.query }}&lt;/p<font></font>
  &lt;/section&gt;<font></font>
&lt;/template&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">this。$ auth。$ state不包含“ access_token”。</font><font style="vertical-align: inherit;">如何获得“ access_token”？</font><font style="vertical-align: inherit;">我也不明白为什么URI在“获取参数”字段中包含“＃”。</font><font style="vertical-align: inherit;">因此，我无法从“ this。$ route.query”获取access_token。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
