---
layout: question
title:  Vuex-何时使用getter和何时使用state
date:   2020-04-07T03:14:30.000Z
description: 我很难弄清楚何时使用吸气剂或状态以获得最佳性能。我将列出一些方案，欢迎您对它们进行评论：场景1-吸气剂与动作和吸气剂的状态在操作或获取程序中，...
img: 
author: Tom路易
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我很难弄清楚何时使用吸气剂或状态以获得最佳性能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将列出一些方案，欢迎您对它们进行评论：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">场景1-吸气剂与动作和吸气剂的状态</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在操作或获取程序中，如果多次使用产品列表来查找结果，那么您将使用getters.products或state.products吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，如果您需要在同一函数中使用产品10次，您会调用getters.products还是state.products 10次，还是先将产品分配给变量，然后再使用10次？</font><font style="vertical-align: inherit;">在其他方面是否有性能提升？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方案2-Getter返回函数</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Vuex文档中，它指出在getter中返回函数不会缓存该函数的结果。</font><font style="vertical-align: inherit;">因此，用吸气剂对1000种产品进行分类是不好的，对吧？</font><font style="vertical-align: inherit;">喜欢：</font></font></p>

<pre><code>const getters = {<font></font>
  sortedProducts: state =&gt; {<font></font>
    return state.products.sort(a, b =&gt; {<font></font>
      ...<font></font>
    })<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，无论何时更新产品（可能会或可能不会更改排序），那么它将再次进行整个计算，还是？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好有一个状态可以通过动作和突变手动更新吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，让getter返回与大量数据有关的函数是否有意义？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vuex </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吸气剂</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是Vue的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">计算对象</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，Vuex </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是Vue </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数据的</font></font></em><font style="vertical-align: inherit;"><em><font style="vertical-align: inherit;">计算</font></em><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">场景1</font></font></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在操作或获取程序中，如果多次使用产品列表来查找结果，那么您将使用getters.products或state.products吗？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在这里不太了解您的情况；</font><font style="vertical-align: inherit;">一个代码示例将更好地说明您的意思。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您具有</font></font><code>products</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态，该状态是产品对象的数组。</font><font style="vertical-align: inherit;">如果您需要</font><font style="vertical-align: inherit;">在多个位置</font><font style="vertical-align: inherit;">访问已</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">排序</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（例如）</font></font><code>products</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则进行一次</font></font><code>sortedProducts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">getter优于</font></font><code>products</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次进行</font><font style="vertical-align: inherit;">排序，</font><font style="vertical-align: inherit;">因为Vue会缓存结果并且仅在</font></font><code>products</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组更改</font><font style="vertical-align: inherit;">时才重新计算其值</font><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，如果您需要在同一函数中使用产品10次，您会调用getters.products还是state.products 10次，还是先将产品分配给变量，然后再使用10次？</font><font style="vertical-align: inherit;">在其他方面是否有性能提升？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您担心性能，则无需在函数开头将其分配给变量。</font><font style="vertical-align: inherit;">访问商店状态或获取方法的性能成本可以忽略不计。</font><font style="vertical-align: inherit;">代码可读性在这里更重要。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方案2</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>sortedProducts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">getter函数不返回的函数，这样Vuex将缓存的结果。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好有一个状态可以通过动作和突变手动更新吗？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在谈论自己的</font></font><code>sortedProducts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吸气剂，则不会。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，让getter返回与大量数据有关的函数是否有意义？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您唯一需要getter返回函数的情况是您希望getter能够接受参数，在这种情况下，getter更像是Vue组件</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法，</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是Vue组件</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">计算</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有一个返回一个函数并处理大量数据的getter，则Vuex无法帮助您缓存该函数调用的结果。</font><font style="vertical-align: inherit;">您必须找出一种方法来最小化它的调用次数，或者合并</font></font><a href="https://en.wikipedia.org/wiki/Memoization" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">备忘录</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
