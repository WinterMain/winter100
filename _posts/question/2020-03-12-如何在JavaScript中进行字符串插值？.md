---
layout: question
title:  如何在JavaScript中进行字符串插值？
date:   2020-03-12T09:16:35.000Z
description: 考虑以下代码：var age = 3;console.log("I'm " + age + " years old\!");除了字符串连接之外...
img: 
author: 梅Near米亚
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑以下代码：</font></font></p>

<pre><code>var age = 3;<font></font>
<font></font>
console.log("I'm " + age + " years old!");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了字符串连接之外，还有其他方法可以将变量的值插入到字符串中吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋神乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找不到我想要的东西，然后找到了-</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Node.js，则有一个内置的</font></font><code>util</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">软件包，其格式函数如下所示：</font></font></p>

<pre><code>util.format("Hello my name is %s", "Brent");<font></font>
&gt; Hello my name is Brent<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">巧合的是</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，Node.js </font><font style="vertical-align: inherit;">现在也将其内置于</font><font style="vertical-align: inherit;">风味中-</font></font></p>

<pre><code>console.log("This really bad error happened: %s", "ReferenceError");<font></font>
&gt; This really bad error happened: ReferenceError<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个解决方案，要求您为对象提供值。</font><font style="vertical-align: inherit;">如果不提供对象作为参数，则默认使用全局变量。</font><font style="vertical-align: inherit;">但是最好还是坚持使用参数，因为它要干净得多。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>String.prototype.interpolate = function(props) {<font></font>
    return this.replace(/\{(\w+)\}/g, function(match, expr) {<font></font>
        return (props || window)[expr];<font></font>
    });<font></font>
};<font></font>
<font></font>
// Test:<font></font>
<font></font>
// Using the parameter (advised approach)<font></font>
document.getElementById("resultA").innerText = "Eruption 1: {eruption1}".interpolate({ eruption1: 112 });<font></font>
<font></font>
// Using the global scope<font></font>
var eruption2 = 116;<font></font>
document.getElementById("resultB").innerText = "Eruption 2: {eruption2}".interpolate();</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div id="resultA"&gt;&lt;/div&gt;&lt;div id="resultB"&gt;&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要在</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出中</font><font style="vertical-align: inherit;">进行插值</font><font style="vertical-align: inherit;">，则只需</font></font></p>

<pre><code>console.log("Eruption 1: %s", eruption1);<font></font>
                         ^^<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，</font></font><code>%s</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就是所谓的“格式说明符”。</font></font><code>console.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有内置的这种插值支持。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
