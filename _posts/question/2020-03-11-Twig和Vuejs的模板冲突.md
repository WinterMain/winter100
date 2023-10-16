---
layout: question
title:  Twig和Vue.js的模板冲突
date:   2020-03-11T03:08:33.000Z
description: 我正在使用Slim 2做一个程序，该程序使用Twig作为模板引擎。所以它使用{{ foo }}php文件中的语法。另一方面，我正在使用vue.js，它也使...
img: 
author: Tony村村
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Slim 2做一个程序，该程序使用Twig作为模板引擎。</font><font style="vertical-align: inherit;">所以它使用</font></font><code>{{ foo }}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">php文件中</font><font style="vertical-align: inherit;">的语法</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">另一方面，我正在使用vue.js，它也使用</font></font><code>{{ bar }}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将进行双向绑定，以下是我的html代码。</font></font></p>

<pre><code>&lt;div class="container"&gt;<font></font>
    Label Value: &lt;label&gt;{{ foo }}&lt;/label&gt;&lt;br&gt;<font></font>
    Field Value: &lt;input v-model="foo"&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的Vue js代码。</font></font></p>

<pre><code>new Vue({<font></font>
<font></font>
    el: '.container',<font></font>
    data: {<font></font>
        foo: 'Hello world.'<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，Hello world应该在Label Value中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出是下面的图像。</font></font></p>

<p><img src="https://www.samyoc.com//uploads/users/7693/images/thumbnails/1583895986623.png" data-src="https://www.samyoc.com//uploads/users/7693/images/1583895986623.png" alt="在此处输入图片说明"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不起作用，可能系统认为这是一个树枝变量。</font><font style="vertical-align: inherit;">所以我通过在视图中传递变量来检查。</font></font></p>

<pre><code>$app-&gt;get('/', function() use ($app) {<font></font>
    $app-&gt;render('login.php', [<font></font>
        'foo' =&gt; 'FROM PHP FILE'<font></font>
    ]);<font></font>
})-&gt;name('login');<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我检查了Label Value：显示了我从PHP文件传递的变量，而不是显示在VUE代码上。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有点难以解释，但您明白了。</font><font style="vertical-align: inherit;">想知道如何绕过树枝的模板并也使用</font></font><code>{{  }}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">from vue。</font></font></p>

<p><img src="https://www.samyoc.com//uploads/users/7693/images/thumbnails/1583895986625.png" data-src="https://www.samyoc.com//uploads/users/7693/images/1583895986625.png" alt="在此处输入图片说明"></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第582篇《Twig和Vue.js的模板冲突》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
