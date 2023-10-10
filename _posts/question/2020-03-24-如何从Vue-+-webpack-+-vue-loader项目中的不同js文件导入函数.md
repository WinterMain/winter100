---
layout: question
title:  如何从Vue + webpack + vue-loader项目中的不同js文件导入函数
date:   2020-03-24T11:17:24.000Z
description: （请参阅结尾，了解为什么这不是“ 如何在另一个JavaScript文件中包含一个JavaScript文件？”的重复）。Javascipt + Vue ...
img: 
author: 小小Stafan宝儿
category: question
answer: 0
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（请参阅结尾，了解为什么这不是“ </font></font><a href="https://stackoverflow.com/questions/950087"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在另一个JavaScript文件中包含一个JavaScript文件？”</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的重复</font><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascipt + Vue + Webpack + Vue-loader Noob ...绊倒最简单的事情！ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有</font></font><code>App.vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个模板：</font></font></p>

<pre><code>&lt;template&gt;<font></font>
 &lt;div id="app"&gt;<font></font>
     &lt;login v-if="isTokenAvailable()"&gt;&lt;/login&gt;<font></font>
 &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><code>isTokenAvailable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对Vue inside以常规方式</font><font style="vertical-align: inherit;">声明该</font><font style="vertical-align: inherit;">方法</font></font><code>methods</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它使用了我在单独的</font></font><code>js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">编写的函数</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;script&gt;<font></font>
import * as mylib from './mylib';<font></font>
<font></font>
export default {<font></font>
  ....<font></font>
    methods:{<font></font>
        isTokenAvailable: () =&gt; {<font></font>
            return mylib.myfunc();<font></font>
        }<font></font>
    }<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><code>mylib</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 开始是这样的：</font></font></p>

<pre><code>import models from './model/models'<font></font>
import axois from 'axios'<font></font>
<font></font>
export default function() {<font></font>
    // functions and constants<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我运行项目时，我得到警告：</font></font></p>

<pre><code>export 'myfunc' (imported as 'mylib') was not found in './mylib'
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现我没有正确导入或声明javascript模块...但是似乎有很多方法可以实现，再加上Vue范围界定的复杂性，我不确定什么是“正确”的方法去做吧？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提前致谢</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么这不是一个骗子：</font></font><a href="https://stackoverflow.com/questions/950087"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何在另一个JavaScript文件中包含一个JavaScript文件？</font></font></a></strong></p>

<p>Doesn't seem to fix the problem, specifically in the context of vuejs.</p>

<p>I have tried this:</p>

<pre><code>&lt;script&gt;<font></font>
const mylib = require('./mylib');<font></font>
...<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p>With the function modified to: <code>exports.myfunc = function()</code></p>

<p><strong>should i have some other dependency for this to work?</strong> Because I get a different error: </p>

<pre><code>[Vue warn]: Error in render function:<font></font>
TypeError: mylib.myfunc is not a function<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
