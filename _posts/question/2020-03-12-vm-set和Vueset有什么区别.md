---
layout: question
title:  vm。$ set和Vue.set有什么区别？
date:   2020-03-12T04:48:38.000Z
description: 我已经仔细阅读并重新阅读了Vue docs “深度反应性”以及vm。$ set和Vue.set的API，但是我仍然很难确定何时使用它。对我而言，区分两者非...
img: 
author: 乐米亚
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经仔细阅读并重新阅读了Vue docs </font></font><a href="http://vuejs.org/guide/reactivity.html#Change-Detection-Caveats" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“深度反应性”</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及</font></font><a href="http://vuejs.org/api/#vm-set" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vm。$ set</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://vuejs.org/api/#Vue-set" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue.set</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的API，</font><font style="vertical-align: inherit;">但是我仍然很难确定何时使用它。</font><font style="vertical-align: inherit;">对我而言，区分两者非常重要，因为在我当前的Laravel项目中，我们正在动态地设置对象的许多属性。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档中的区别似乎在于vm。$ set是“用于Vue实例”而Vue.set是“用于纯数据对象”与Vue.set是全局语言之间的语言：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，有多种方法可以添加属性并在实例创建后使其具有响应性。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Vue实例，可以使用$ set（path，value）实例方法：</font></font></p>
</blockquote>

<pre><code>vm.$set('b', 2)<font></font>
// `vm.b` and `data.b` are now reactive<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于纯数据对象，可以使用全局Vue.set（object，key，value）方法：</font></font></p>
</blockquote>

<pre><code>Vue.set(data, 'c', 3)<font></font>
// `vm.c` and `data.c` are now reactive<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，我想知道是否可以将执行上述操作的第三个“选项”（一次添加多个属性）用作上述2个选项中的任一个的等效替代项（仅添加1个属性而不是多个） ？  </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时，您可能想在现有对象上分配许多属性，例如使用Object.assign（）或_.extend（）。</font><font style="vertical-align: inherit;">但是，添加到对象的新属性不会触发更改。</font><font style="vertical-align: inherit;">在这种情况下，请使用原始对象和mixin对象的属性创建一个新鲜的对象：</font></font></p>
</blockquote>

<pre><code>// instead of `Object.assign(this.someObject, { a: 1, b: 2 })`<font></font>
this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第966篇《vm。$ set和Vue.set有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是Vue.set引入的发行说明：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue不再使用$ set和$ delete方法扩展Object.prototype。</font><font style="vertical-align: inherit;">这已经导致在某些条件检查（例如Meteor中的minimongo）中依赖这些属性的库出现问题。</font><font style="vertical-align: inherit;">代替object。$ set（key，value）和object。$ delete（key），使用新的全局方法Vue.set（object，key，value）和Vue.delete（object，key）。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，</font></font><code>.$set</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以前在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">上</font><em><font style="vertical-align: inherit;">都</font></em><font style="vertical-align: inherit;">可用</font><font style="vertical-align: inherit;">-现在仅在视图模型本身上可用。</font></font><code>Vue.set</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，当您具有对反应性对象的引用但没有对它所属的视图模型的引用时，则在当前情况下使用。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
