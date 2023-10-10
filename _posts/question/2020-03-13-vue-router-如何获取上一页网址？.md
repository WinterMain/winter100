---
layout: question
title:  vue-router-如何获取上一页网址？
date:   2020-03-13T07:39:49.000Z
description: 我想在中获取上一页链接或URL vue-router。像这样 怎么做？const link = this.$router.getPrevLink();...
img: 
author: 米亚西门
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在中获取上一页链接或URL </font></font><code>vue-router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">像这样 </font><font style="vertical-align: inherit;">怎么做？</font></font></p>

<pre><code>const link = this.$router.getPrevLink(); // function is not exist?<font></font>
this.$router.push(link);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">近概念是</font></font><code>this.$router.go(-1)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>this.$router.go(-1);
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green小宇宙伽罗</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有vue-router的</font></font><a href="https://router.vuejs.org/guide/advanced/navigation-guards.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导航卫士</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都将前一条路线作为</font></font><code>from</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数</font><font style="vertical-align: inherit;">接收</font><font style="vertical-align: inherit;">..</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个保护函数都接收三个参数：</font></font></p>
  
  <ul>
  <li><p><code>to: Route</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：被导航到的目标Route对象。</font></font></p></li>
  <li><p><strong><code>from: Route</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：正在远离的当前路线。</font></font></strong></p></li>
  <li><p><code>next: Function</code>: this function must be called to resolve the hook. The
  action depends on the arguments provided to next</p></li>
  </ul>
</blockquote>

<p>As an example you could use <code>beforeRouteEnter</code>, an in-component navigation guard, to get the previous route and store it in your data ..</p>

<pre><code>...<font></font>
data() {<font></font>
 return {<font></font>
   ...<font></font>
   prevRoute: null<font></font>
 }<font></font>
},<font></font>
beforeRouteEnter(to, from, next) {<font></font>
  next(vm =&gt; {<font></font>
    vm.prevRoute = from<font></font>
  })<font></font>
},<font></font>
...<font></font>
</code></pre>

<p>Then you can use <code>this.prevRoute.path</code> to get the previous URL.</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
