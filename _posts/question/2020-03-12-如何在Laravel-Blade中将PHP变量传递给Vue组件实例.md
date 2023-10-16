---
layout: question
title:  如何在Laravel Blade中将PHP变量传递给Vue组件实例？
date:   2020-03-12T08:33:43.000Z
description: 如何将PHP变量的值传递给Laravel刀片文件中的Vue组件？在我的示例中，我有一个内联模板client-details，我从这里获得了此视图，La...
img: 
author: 小宇宙乐理查德
category: question
answer: 0
tags: PHP
topic: PHP
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何将PHP变量的值传递给Laravel刀片文件中的Vue组件？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的示例中，我有一个内联模板client-details，我从这里获得了此视图，</font></font><code>Laravel</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此现在我想</font></font><code>id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将URL附带的</font><font style="vertical-align: inherit;">传递</font></font><code>/client/1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给我的</font></font><code>Vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的组件由加载</font></font><code>Laravel</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，看起来像：</font></font></p>

<pre><code>&lt;client-details inline-template&gt;<font></font>
    &lt;div id="client-details" class=""&gt;<font></font>
          My HTML stuff<font></font>
    &lt;/div&gt;<font></font>
&lt;/client-details&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并由：</font></font></p>

<pre><code>Vue.component('client-details', {<font></font>
    data(){<font></font>
        return {<font></font>
            clientId: null<font></font>
        }<font></font>
    },<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经尝试过 </font></font></p>

<pre><code>:clientId="{{ $client-&gt;id }"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但它不起作用。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1145篇《如何在Laravel Blade中将PHP变量传递给Vue组件实例？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
