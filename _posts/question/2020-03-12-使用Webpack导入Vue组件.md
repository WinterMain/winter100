---
layout: question
title:  使用Webpack导入Vue组件
date:   2020-03-12T03:08:19.000Z
description: 我使用Webpack进行了hello world Vue应用程序设置，并使初始App组件正常工作并安装到了机身上。尽管在该App组件中，我无法弄清楚如何使...
img: 
author: 十三蛋蛋
category: question
answer: 0
tags: webpack Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用Webpack进行了hello world Vue应用程序设置，并使初始App组件正常工作并安装到了机身上。</font><font style="vertical-align: inherit;">尽管在该App组件中，我无法弄清楚如何使用自己制作的更多组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">main.js</font></font></p>

<pre><code>import Vue from 'vue'<font></font>
import App from './app.vue'<font></font>
<font></font>
new Vue({ <font></font>
    el: 'body',<font></font>
    components: { App }<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序</font></font></p>

<pre><code>&lt;template&gt;<font></font>
    &lt;div class="message"&gt;{{ message }}&lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
    export default {<font></font>
        data () {<font></font>
            return {<font></font>
                message: 'Hello World'<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试过了</font></font></p>

<pre><code>import TopBar from './top-bar.vue'
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在main.js和app.vue的脚本部分中尝试使用</font></font></p>

<pre><code>&lt;top-bar&gt;&lt;/top-bar&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有运气。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想我缺少如何正确注册组件的信息，例如在Vue文档中： </font></font></p>

<pre><code>Vue.component('top-bar', TopBar);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我认为将Webpack与vue-loader一起使用时，我需要做一些不同的事情。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
