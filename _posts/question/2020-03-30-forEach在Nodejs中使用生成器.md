---
layout: question
title:  forEach在Node.js中使用生成器
date:   2020-03-30T09:19:15.000Z
description: 我正在使用Koa.js框架和Mongoose.js模块。通常从MongoDB获得结果，我这样编写代码：var res = yield db.col...
img: 
author: 西门
category: question
answer: 2
tags: node.js KoaJS
topic: KoaJS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用</font></font><a href="http://koajs.com"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Koa.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">框架和</font></font><a href="http://mongoosejs.com/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mongoose.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常从MongoDB获得结果，我这样编写代码：</font></font></p>

<pre><code>var res = yield db.collection.findOne({id: 'my-id-here'}).exec();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我需要对名为“ items”的数组的每个元素执行此行。</font></font></p>

<pre><code>items.forEach(function(item) {<font></font>
  var res = yield db.collection.findOne({id: item.id}).exec();<font></font>
  console.log(res)  // undefined<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，此代码不会运行，因为函数中包含yield。</font><font style="vertical-align: inherit;">如果我这样写：</font></font></p>

<pre><code>items.forEach(function *(item) {<font></font>
  var res = yield db.collection.findOne({id: item.id}).exec();<font></font>
  console.log(res)  // undefined<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也没有得到res变量的结果。</font><font style="vertical-align: inherit;">我试图使用“ </font></font><a href="https://www.npmjs.org/package/generator-foreach"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">generator-foreach</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”模块，但这种方式不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这是我对Node.js的语言素养缺乏了解。</font><font style="vertical-align: inherit;">但是你们能帮我找到一种方法吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3842篇《forEach在Node.js中使用生成器》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin十三宝儿</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">公认的答案是错误的，不需要使用库，数组已经是可迭代的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个古老的问题，但是由于它尚无正确答案，并且出现在Google搜索的第一页上，关键词为“ iterators and forEach”，因此我将回答这个问题：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于数组已经符合可迭代的API，因此无需遍历数组。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在生成器内部，只需使用“ yield *数组”（请注意*），yield *表达式用于委派给另一个生成器或可迭代对象</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>let arr = [2, 3, 4];<font></font>
<font></font>
    function* g2() { <font></font>
      yield 1;<font></font>
      yield* arr;<font></font>
      yield 5;<font></font>
    }<font></font>
<font></font>
    var iterator = g2();<font></font>
<font></font>
    console.log(iterator.next()); // { value: 1, done: false }<font></font>
    console.log(iterator.next()); // { value: 2, done: false }<font></font>
    console.log(iterator.next()); // { value: 3, done: false }<font></font>
    console.log(iterator.next()); // { value: 4, done: false }<font></font>
    console.log(iterator.next()); // { value: 5, done: false }<font></font>
    console.log(iterator.next()); // { value: undefined, done: true }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关示例和详细信息，请访问：</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> :
 </font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield" rel="noreferrer"><font style="vertical-align: inherit;">//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield</font></a><font style="vertical-align: inherit;"> *</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>yield</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组，所以只需将异步承诺映射到另一个映射中</font></font></p>

<pre><code>var fetchedItems = yield items.map((item) =&gt; {<font></font>
   return db.collection.findOne({id: item.id});<font></font>
});<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
