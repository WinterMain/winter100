---
layout: question
title:  如何在vuejs中绑定html <title>内容？
date:   2020-03-11T03:50:32.000Z
description: 我正在尝试在vuejs上进行演示。现在，我想要html标题绑定vm字段。以下是我尝试的方法：index.html<\!DOCTYPE html>...
img: 
author: 神奇伽罗Itachi
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在vuejs上进行演示。</font><font style="vertical-align: inherit;">现在，我想要html标题绑定vm字段。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是我尝试的方法：</font></font></p>

<p><code>index.html</code></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html id="html"&gt;<font></font>
&lt;head&gt;<font></font>
    &lt;title&gt;{{ hello }}&lt;/title&gt;<font></font>
    &lt;script src="lib/requirejs/require.min.js" data-main="app"&gt;&lt;/script&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
{{ hello }}<font></font>
&lt;input v-model="hello" title="hello" /&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><code>app.js</code></p>

<pre><code>define([<font></font>
    'jquery', 'vue'<font></font>
], function ($, Vue) {<font></font>
    var vm = new Vue({<font></font>
        el: 'html',<font></font>
        data: {<font></font>
            hello: 'Hello world'<font></font>
        }<font></font>
    });<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是标题似乎没有界限，如何使其发挥作用？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第624篇《如何在vuejs中绑定html <title>内容？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
