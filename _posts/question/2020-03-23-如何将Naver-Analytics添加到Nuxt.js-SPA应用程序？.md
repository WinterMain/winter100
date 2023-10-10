---
layout: question
title:  如何将Naver Analytics添加到Nuxt.js SPA应用程序？
date:   2020-03-23T14:12:22.000Z
description: 如何使用SSR在nuxt.js（Vue.js）中向网站添加跟踪代码？Naver Analytics跟踪代码示例：<script type="tex...
img: 
author: 蛋蛋
category: question
answer: 1
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用SSR在nuxt.js（Vue.js）中向网站添加跟踪代码？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Naver Analytics跟踪代码示例：</font></font></p>

<pre><code>&lt;script type="text/javascript" src="//wcs.naver.net/wcslog.js"&gt;&lt;/script&gt;<font></font>
&lt;script type="text/javascript"&gt;<font></font>
if(!wcs_add) var wcs_add = {};<font></font>
wcs_add["wa"] = "123456789abcd";<font></font>
wcs_do();<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试过了：nuxt.config.js</font></font></p>

<pre><code>script: [{ src: '//wcs.naver.net/wcslog.js' }]<font></font>
...<font></font>
{src: '~plugins/naver-analytics.js', ssr: false}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">plugins / naver-analytics.js</font></font></p>

<pre><code>export default ({ app }) =&gt; {<font></font>
  if(!wcs_add) var wcs_add = {};<font></font>
  wcs_add["wa"] = "123456789";<font></font>
  wcs_do();<font></font>
  wcs.event('create', '123456789', 'auto')<font></font>
  app.router.afterEach((to, from) =&gt; {<font></font>
    wcs.event('set', 'page', to.fullPath)<font></font>
    wcs.event('send', 'pageview')<font></font>
  })<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当然没有任何效果。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3140篇《如何将Naver Analytics添加到Nuxt.js SPA应用程序？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常将这些脚本添加到所有页面的公共位置（在根目录）。 </font></font></p>

<ul>
<li>If you are using the default template by nuxt, there should be a file  <code>app.template.html</code> (inside <code>.nuxt/views/</code>). Inside that you can update the above text just before <code>&lt;/body&gt;</code> tag.</li>
<li>If you have overriden it and created your own, it should be by the name of <code>app.html</code> (at the same level as <code>nuxt.config.js</code>)</li>
</ul>

<p>The structure of that file is something below. You can add the  tags in between <code>{{ APP }}</code> and <code>&lt;/body&gt;</code> tag</p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html {{ HTML_ATTRS }}&gt;<font></font>
  &lt;head {{ HEAD_ATTRS }}&gt;<font></font>
    {{ HEAD }}<font></font>
  &lt;/head&gt;<font></font>
  &lt;body {{ BODY_ATTRS }}&gt;<font></font>
    {{ APP }}<font></font>
  &lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p>Hope it helps. Revert for any doubts.</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
