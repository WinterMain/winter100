---
layout: question
title:  CommonJs模块系统中“ module.exports”和“ exports”之间的区别
date:   2020-03-19T04:40:01.000Z
description: 在此页面（http //docs.nodejitsu.com/articles/getting-started/what-is-require）上，声明“...
img: 
author: 老丝Tony
category: question
answer: 3
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此页面（</font></font><a href="http://docs.nodejitsu.com/articles/getting-started/what-is-require" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://docs.nodejitsu.com/articles/getting-started/what-is-require</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）上，声明“如果要将导出对象设置为函数或新对象，则必须使用module.exports对象。”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是为什么。</font></font></p>

<pre><code>// right<font></font>
module.exports = function () {<font></font>
  console.log("hello world")<font></font>
}<font></font>
// wrong<font></font>
exports = function () {<font></font>
  console.log("hello world")<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我console.logged结果（</font></font><code>result=require(example.js)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）和第</font></font><code>[Function]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个是</font></font><code>{}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您能否解释其背后的原因？</font><font style="vertical-align: inherit;">我在这里阅读了</font></font><a href="https://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-nodejs"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这篇</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文章：</font><a href="https://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-nodejs"><font style="vertical-align: inherit;">Node.js中的module.exports与export</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它很有帮助，但没有解释以这种方式设计它的原因。</font><font style="vertical-align: inherit;">如果直接返回出口参考书会不会有问题？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2372篇《CommonJs模块系统中“ module.exports”和“ exports”之间的区别》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚ItachiL</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">myTest.js</font></font></strong></p>

<pre><code>module.exports.get = function () {};<font></font>
<font></font>
exports.put = function () {};<font></font>
<font></font>
console.log(module.exports)<font></font>
// output: { get: [Function], put: [Function] }<font></font>
</code></pre>

<p><code>exports</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>module.exports</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是相同的，并且是对同一对象的引用。</font><font style="vertical-align: inherit;">您可以根据需要通过两种方式添加属性。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙卡卡西神乐</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><code>module</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是具有</font></font><code>exports</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">的普通JavaScript对象</font><font style="vertical-align: inherit;">。</font></font><code>exports</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个普通的JavaScript变量，碰巧设置为</font></font><code>module.exports</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在文件末尾，node.js基本上将“返回” </font></font><code>module.exports</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>require</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数。</font><font style="vertical-align: inherit;">在Node中查看JS文件的一种简化方法是：</font></font></p>

<pre><code>var module = { exports: {} };<font></font>
var exports = module.exports;<font></font>
<font></font>
// your code<font></font>
<font></font>
return module.exports;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在上设置</font></font><code>exports</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如</font></font><code>exports.a = 9;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该</font><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">也会设置</font></font><code>module.exports.a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为对象是作为JavaScript中的引用传递的，这意味着如果将多个变量设置为同一对象，则它们</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同一对象；</font><font style="vertical-align: inherit;">因此，</font></font><code>exports</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>module.exports</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是相同的对象。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
但是，如果你设置</font></font><code>exports</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新的东西，这将不再被设定为</font></font><code>module.exports</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，所以</font></font><code>exports</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>module.exports</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不再是同一个对象。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid樱</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">刘若英的约之间的关系答案</font></font><code>exports</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>module.exports</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是相当清楚的，它是所有关于JavaScript的引用。</font><font style="vertical-align: inherit;">只需添加：  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们在许多节点模块中看到了这一点：  </font></font></p>

<p><code>var app = exports = module.exports = {};</code>  </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将确保即使我们更改了module.exports，我们仍然可以通过使这两个变量指向同一对象来使用export。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
