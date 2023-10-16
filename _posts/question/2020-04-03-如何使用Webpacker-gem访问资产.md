---
layout: question
title:  如何使用Webpacker gem访问资产
date:   2020-04-03T03:47:17.000Z
description: 您能否解释一下如何从vue.js组件中的webpacker gem访问资产？例如-如何用背景图像创建div。我试过使用/ app / assets / i...
img: 
author: GO老丝LEY
category: question
answer: 2
tags: ruby-on-rails Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您能否解释一下如何从vue.js组件中的webpacker gem访问资产？</font><font style="vertical-align: inherit;">例如-如何用背景图像创建div。</font><font style="vertical-align: inherit;">我试过使用/ app / assets / images和/ app / javascripts / assets文件夹，但是图像仅在模板部分可用，而在样式部分不可用:(</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言</font></font></p>

<pre><code>&lt;template&gt;<font></font>
    &lt;div id="home"&gt;<font></font>
        &lt;div id="intro"&gt;<font></font>
            &lt;img src="assets/cover-image-medium.png" alt=""&gt;<font></font>
        &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作正常，但是</font></font></p>

<pre><code>&lt;style scoped&gt;<font></font>
    #intro {<font></font>
        height: 200px;<font></font>
        background: url("assets/cover-image-medium.png");<font></font>
    }<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不起作用:(</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">怎么了？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3984篇《如何使用Webpacker gem访问资产》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以试试   </font></font></p>

<pre><code>background: url("/assets/cover-image-medium.png");  
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替   </font></font></p>

<pre><code>background: url("assets/cover-image-medium.png");
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您已安装</font></font><code>sass-rails</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">gem，请尝试以下操作：</font></font></p>

<pre><code>&lt;style scoped&gt;<font></font>
#intro {<font></font>
    height: 200px;<font></font>
    background: image-url("cover-image-medium.png");<font></font>
}<font></font>
&lt;/style&gt;<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
