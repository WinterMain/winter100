---
layout: question
title:  返回对象的ECMAScript 6箭头函数
date:   2020-03-11T15:35:13.000Z
description: When returning an object from an arrow function, it seems that it is necessar...
img: 
author: 阳光达蒙达蒙
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>When returning an object from an arrow function, it seems that it is necessary to use an extra set of <code>{}</code> and a <code>return</code> keyword because of an ambiguity in the grammar.</p>

<p>That means I can’t write <code>p =&gt; {foo: "bar"}</code>, but have to write <code>p =&gt; { return {foo: "bar"}; }</code>.</p>

<p>If the arrow function returns anything other than an object, the <code>{}</code> and <code>return</code> are unnecessary, e.g.: <code>p =&gt; "foo"</code>.</p>

<p><code>p =&gt; {foo: "bar"}</code> returns <code>undefined</code>.</p>

<p>A modified <code>p =&gt; {"foo": "bar"}</code> throws <em>“<code>SyntaxError</code>: unexpected token: '<code>:</code>'”</em>.</p>

<p>Is there something obvious I am missing?</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第861篇《返回对象的ECMAScript 6箭头函数》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green樱</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以随时查看更多定制解决方案：</font></font></p>

<pre><code>x =&gt; ({}[x.name] = x);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅老丝</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题：</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您这样做时：</font></font></p>

<pre><code>p =&gt; {foo: "bar"}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript解释器认为您正在打开一个多语句代码块，在该块中，您必须明确提及return语句。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解：</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">箭头函数表达式</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单个语句</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以使用以下语法：</font></font></p>

<pre><code>p =&gt; ({foo: "bar", attr2: "some value", "attr3": "syntax choices"})
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果要具有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多个语句，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则可以使用以下语法：</font></font></p>

<pre><code>p =&gt; {return {foo: "bar", attr2: "some value", "attr3": "syntax choices"}}
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上面的示例中，第一组花括号打开了一个多语句代码块，第二组花括号用于动态对象。</font><font style="vertical-align: inherit;">在箭头功能的多语句代码块中，您必须显式使用return语句</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多详细信息，请查看</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla Docs中的JS Arrow函数表达式</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐理查德</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确的方法</font></font></h1>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正常返回对象</font></font></li>
</ol>

<pre class="lang-js prettyprint-override"><code><font></font>
const getUser = user =&gt; {return { name: user.name, age: user.age };};<font></font>
<font></font>
const user = { name: "xgqfrms", age: 21 };<font></font>
<font></font>
console.log(getUser(user));<font></font>
//  {name: "xgqfrms", age: 21}<font></font>
<font></font>
</code></pre>

<ol start="2">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（js表达式）</font></font></li>
</ol>

<pre class="lang-js prettyprint-override"><code><font></font>
const getUser = user =&gt; ({ name: user.name, age: user.age });<font></font>
<font></font>
const user = { name: "xgqfrms", age: 21 };<font></font>
<font></font>
console.log(getUser(user));<font></font>
//  {name: "xgqfrms", age: 21}<font></font>
<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明</font></font></h2>

<p><img src="https://user-images.githubusercontent.com/7291672/63484861-ba0bf480-c4d3-11e9-950e-e22613ef25f6.png" alt="图片"></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里可以找到相同的答案！</font></font></p>
</blockquote>

<p><a href="https://github.com/lydiahallie/javascript-questions/issues/220" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/lydiahallie/javascript-questions/issues/220</font></font></a></p>

<p><a href="https://mariusschulz.com/blog/returning-object-literals-from-arrow-functions-in-javascript" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://mariusschulz.com/blog/returning-object-literals-from-arrow-functions-in-javascript</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Eva</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能想知道，为什么语法有效（但不能按预期工作）：</font></font></p>

<pre><code>var func = p =&gt; { foo: "bar" }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是因为</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/label" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript的标签语法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果将上面的代码转换为ES5，它应该看起来像：</font></font></p>

<pre><code>var func = function (p) {<font></font>
  foo:<font></font>
  "bar"; //obviously no return here!<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
