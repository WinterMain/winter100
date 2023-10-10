---
layout: question
title:  JavaScript是否保证对象属性顺序？
date:   2020-03-11T12:45:02.000Z
description: 如果我创建这样的对象：var obj = {};obj.prop1 = "Foo";obj.prop2 = "Bar";生成的对象会总是这样...
img: 
author: 伊芙妮
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我创建这样的对象：</font></font></p>

<pre><code>var obj = {};<font></font>
obj.prop1 = "Foo";<font></font>
obj.prop2 = "Bar";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成的对象会</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样吗？</font></font></p>

<pre><code>{ prop1 : "Foo", prop2 : "Bar" }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也就是说，属性的顺序是否与我添加它们的顺序相同？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第819篇《JavaScript是否保证对象属性顺序？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿DavaidL</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从ES2015开始，某些迭代属性的方法将保证属性顺序。</font></font><a href="https://stackoverflow.com/a/30919039/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是没有其他人</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">不幸的是，不能保证有顺序的方法通常是最常用的：</font></font></p>

<ul>
<li><code>Object.keys</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>Object.values</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>Object.entries</code></li>
<li><code>for..in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 循环</font></font></li>
<li><code>JSON.stringify</code></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，</font></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于</font></font><a href="https://github.com/tc39/proposals/blob/master/finished-proposals.md" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第4阶段的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提议：</font></font><a href="http://tc39.es/proposal-for-in-order/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按枚举顺序</font></font></a><font style="vertical-align: inherit;"><strong><font style="vertical-align: inherit;">，不久（可能在ES2020中），</font></strong><strong><font style="vertical-align: inherit;">规范</font></strong><strong><em><font style="vertical-align: inherit;">将</font></em></strong><strong><font style="vertical-align: inherit;">保证</font></strong><font style="vertical-align: inherit;">以与其他方法相同的确定性方式来迭代</font><strong><font style="vertical-align: inherit;">这些以前不可信任的方法的属性</font></strong><a href="http://tc39.es/proposal-for-in-order/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">顺序</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像具有保证迭代顺序的方法（如</font></font><code>Reflect.ownKeys</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>Object.getOwnPropertyNames</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）一样，先前未指定的方法也将按以下顺序进行迭代：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数字数组键，按升序排列</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有其他非符号键，按插入顺序</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">符号键，按插入顺序</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这几乎是每个实现都已经做的，但是新提议将使它成为正式的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管当前规范以迭代顺序“ </font></font><a href="https://tc39.github.io/ecma262/#sec-enumerate-object-properties" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">几乎完全未指定</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但实际引擎趋向于更加一致：”</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMA-262中缺乏特异性并不能反映现实。</font><font style="vertical-align: inherit;">在过去的讨论中，实现者观察到for-for的行为存在一些限制，任何想要在网络上运行代码的人都必须遵循。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为每个实现都已经可以预测地遍历属性，所以可以将其放入规范中而不会破坏向后兼容性。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前有几种奇怪的情况，实现尚</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">达成共识，在这种情况下，结果顺序将继续不确定。</font><font style="vertical-align: inherit;">为了</font></font><a href="https://github.com/tc39/proposal-for-in-order#a-conservative-underapproximation-of-interop-semantics" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保证</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">财产顺序</font><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被迭代的对象或其原​​型链中的任何内容都不是代理，类型化数组，模块名称空间对象或宿主外来对象。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在迭代过程中，对象及其原型链中的任何内容都没有原型更改。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在迭代过程中，对象及其原型链中的任何内容均未删除任何属性。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象的原型链中没有任何内容在迭代过程中添加。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在迭代过程中，对象或其原​​型链中的任何属性都没有可枚举性更改。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有任何不可枚举的属性会掩盖不可枚举的属性。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋L</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">刚刚发现这很难。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用React with Redux，每次更改存储时都会刷新我想遍历的状态容器的键以生成子代（根据Redux的不变性概念）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，为了使用</font></font><code>Object.keys(valueFromStore)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">I </font></font><code>Object.keys(valueFromStore).sort()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我至少现在对这些键具有字母顺序。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗前端</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="http://www.ietf.org/rfc/rfc4627.txt" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON标准</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象是</font><font style="vertical-align: inherit;">零个或多个名称/值对</font><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无序</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">集合，其中名称是字符串，值是字符串，数字，布尔值，null，对象或数组。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（强调我的）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，不，您不能保证订单。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near神奇</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ES2015中，它可以，但不是您可能认为的</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直到ES2015才保证对象中键的顺序。</font><font style="vertical-align: inherit;">它是实现定义的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，在ES2015中</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定。</font><font style="vertical-align: inherit;">像JavaScript中的许多事情一样，这样做是出于兼容性目的，并且通常反映了大多数JS引擎中的现有非官方标准（您知道-谁是例外）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该顺序在规范中的抽​​象操作</font></font><a href="https://www.ecma-international.org/ecma-262/9.0/index.html#sec-ordinaryownpropertykeys" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">OrdinaryOwnPropertyKeys</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下定义，该操作</font><font style="vertical-align: inherit;">支持对对象自己的键进行迭代的所有方法。</font><font style="vertical-align: inherit;">释义，顺序如下：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">整数索引</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">键（这样的东西</font></font><code>"1123"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>"55"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等），在上升的数字顺序。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有不是整数索引的字符串键（按创建顺序（最早的优先顺序））。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有符号键，按创建顺序（最早的顺序）。</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说这个命令不可靠是很愚蠢的-它是可靠的，可能不是您想要的，现代浏览器正确地实现了这个命令。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些例外情况包括枚举继承的键的方法，例如</font></font><code>for .. in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环。</font><font style="vertical-align: inherit;">将</font></font><code>for .. in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据规范循环不保证秩序。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY老丝</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在现代浏览器中，您可以使用</font></font><code>Map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数据结构代替对象。</font></font></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发人员mozilla&gt;地图</font></font></a> </p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Map对象可以按插入顺序迭代其元素。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天理查德</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是（用于非整数键）。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大多数浏览器将对象属性迭代为：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以升序排列的整数键（以及像“ 1”这样的字符串解析为整数）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符串键，按插入顺序排列（ES2015保证这样做，并且所有浏览器都遵守）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">符号名称，按插入顺序排列（ES2015保证此名称，并且所有浏览器都遵守）</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些较旧的浏览器将类别＃1和＃2组合在一起，以插入顺序迭代所有键。</font><font style="vertical-align: inherit;">如果您的键可能解析为整数，则最好不要依赖任何特定的迭代顺序。</font></font></p>

<p><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保留</font><strong><font style="vertical-align: inherit;">当前语言规范（自ES2015起）的</font></strong><font style="vertical-align: inherit;">插入顺序，但键解析为整数（例如“ 7”或“ 99”）的情况除外，在这种情况下浏览器的行为会有所不同。</font><font style="vertical-align: inherit;">例如，当键解析为数字时，Chrome / V8不遵守插入顺序。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旧语言规范（ES2015之前）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：迭代顺序在技术上未定义，但所有主流浏览器均符合ES2015行为。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，ES2015行为是语言规范受现有行为驱动的一个很好的例子，而不是相反。</font><font style="vertical-align: inherit;">要更深入地了解这种向后兼容的心态，请参阅</font></font><a href="http://code.google.com/p/v8/issues/detail?id=164" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://code.google.com/p/v8/issues/detail?id=164</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是一个Chrome错误，其中详细介绍了Chrome迭代顺序行为背后的设计决策。</font><font style="vertical-align: inherit;">在该错误报告中，每（有一些自以为是）评论：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标准始终遵循实现，这就是XHR的来历，而Google则通过实现Gears然后采用等效的HTML5功能来做同样的事情。</font><font style="vertical-align: inherit;">正确的解决方法是让ECMA将事实上的标准行为正式纳入规范的下一个修订版。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan卡卡西</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在撰写本文时，大多数浏览器确实以插入时返回的顺序返回属性，但是明确地不能保证其行为，因此不应该依赖它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript规范</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">常说的：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未指定枚举属性...的机制和顺序。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，在ES2015及更高版本中，非整数密钥将按插入顺序返回。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva理查德阳光</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>The iteration order for objects follows <a href="https://stackoverflow.com/a/38218582/292500">a certain set of rules</a> since ES2015, but <strong>it does not (always) follow the insertion order</strong>. Simply put, the iteration order is a combination of the insertion order for strings keys, and ascending order for number-like keys:</p>

<pre><code>// key order: 1, foo, bar<font></font>
const obj = { "foo": "foo", "1": "1", "bar": "bar" }<font></font>
</code></pre>

<p>Using an array or a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" rel="noreferrer"><code>Map</code> object</a> can be a better way to achieve this. <code>Map</code> shares some similarities with <code>Object</code> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Objects_and_maps_compared" rel="noreferrer">guarantees the keys to be iterated in order of insertion</a>, without exception:</p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Map中的键是有序的，而添加到对象中的键则没有顺序。</font><font style="vertical-align: inherit;">因此，在对其进行迭代时，Map对象将按插入顺序返回键。</font><font style="vertical-align: inherit;">（请注意，在ECMAScript 2015规范中，对象确实保留了字符串和符号键的创建顺序，因此仅使用字符串键遍历对象即会按插入顺序产生键）</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，在ES2015之前根本无法保证对象中的属性顺序。</font></font><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript第三版（pdf）中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象的定义</font><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4.3.3对象</font></font></h3>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象是对象类型的成员。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是属性的无序集合，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个</font><strong><font style="vertical-align: inherit;">属性</font></strong><font style="vertical-align: inherit;">都包含原始值，对象或函数。</font><font style="vertical-align: inherit;">存储在对象属性中的函数称为方法。</font></font></p>
</blockquote></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
