---
layout: question
title:  VueJS：为什么“ this”未定义？
date:   2020-03-11T03:54:53.000Z
description: 我正在使用Vue.js创建一个组件。当我引用this中的任何所述的生命周期钩（created，mounted，updated等等）它的计算结果为und...
img: 
author: 卡卡西乐逆天
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用</font></font><a href="https://vuejs.org/v2/guide/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个组件</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我引用</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中的任何所述的</font></font><a href="https://vuejs.org/v2/api/#Options-Lifecycle-Hooks" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生命周期钩</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>created</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>mounted</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>updated</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等等）它的计算结果为</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>mounted: () =&gt; {<font></font>
  console.log(this); // logs "undefined"<font></font>
},<font></font>
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的计算属性内部也发生了同样的事情：</font></font></p>

<pre><code>computed: {<font></font>
  foo: () =&gt; { <font></font>
    return this.bar + 1; <font></font>
  } <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我收到以下错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未捕获的TypeError：无法读取未定义的属性“ bar”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这些情况下进行</font><font style="vertical-align: inherit;">评估</font><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
