---
layout: question
title:  从外部调用Webpacked代码（HTML脚本标记）
date:   2020-03-23T01:42:18.000Z
description: 假设我有这样的类（用TypeScript编写），并将其与webpack捆绑在一起bundle.js。export class EntryPoint {    st...
img: 
author: Gil
category: question
answer: 1
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我有这样的类（用TypeScript编写），并将其与webpack捆绑在一起</font></font><code>bundle.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>export class EntryPoint {<font></font>
    static run() {<font></font>
        ...<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的index.html中，我将包含该捆绑包，但随后我也想调用该静态方法。</font></font></p>

<pre><code>&lt;script src="build/bundle.js"&gt;&lt;/script&gt;<font></font>
&lt;script&gt;<font></font>
    window.onload = function() {<font></font>
        EntryPoint.run();<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，</font></font><code>EntryPoint</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">未定义。</font><font style="vertical-align: inherit;">那我该如何从另一个脚本中调用捆绑的javascript？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">补充</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><a href="http://pastebin.com/ty3BKhUn" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack配置文件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2607篇《从外部调用Webpacked代码（HTML脚本标记）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的情况下，我可以通过在创建脚本时将函数写入窗口来从另一个脚本从捆绑的JavaScript中调用函数。 </font></font></p>

<pre><code>// In the bundled script:<font></font>
function foo() {<font></font>
    var modal = document.createElement('div');<font></font>
}<font></font>
// Bind to the window<font></font>
window.foo = foo;<font></font>
// Then, in the other script where I want to reference the bundled function I just call it as a normal function<font></font>
&lt;button onClick="window.foo()"&gt;Click Me&lt;/button&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我无法使用Babel，因此对我有用。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
