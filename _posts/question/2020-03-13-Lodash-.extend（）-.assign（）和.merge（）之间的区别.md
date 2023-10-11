---
layout: question
title:  Lodash-.extend（）/ .assign（）和.merge（）之间的区别
date:   2020-03-13T08:50:35.000Z
description: 在Lodash库中，有人可以更好地解释合并和扩展/分配。  这是一个简单的问题，但答案仍然使我回避。 ...
img: 
author: 理查德Itachi
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://www.lodash.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lodash</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库中，有人可以更好地解释</font></font><a href="http://lodash.com/docs#merge" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">合并</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://lodash.com/docs#assign" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展/分配</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个简单的问题，但答案仍然使我回避。 </font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1443篇《Lodash-.extend（）/ .assign（）和.merge（）之间的区别》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面是如何</font></font><code>extend</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>assign</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作品：对于源的每个属性，复制其价值，是到目的地。</font><font style="vertical-align: inherit;">如果属性值本身是对象，则不会对其属性进行递归遍历。</font><font style="vertical-align: inherit;">整个对象将从源中获取并设置到目标中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面是如何</font></font><code>merge</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作的：对于源的每个属性，检查如果该属性是对象本身。</font><font style="vertical-align: inherit;">如果是，则递归关闭并尝试将子对象属性从源映射到目标。</font><font style="vertical-align: inherit;">因此，实质上，我们将对象层次结构从源到目标进行合并。</font><font style="vertical-align: inherit;">对于</font></font><code>extend</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>assign</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它是从源到目标的简单一级属性副本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个简单的JSBin，它可以使这一点变得清晰：</font><a href="http://jsbin.com/uXaqIMa/2/edit?js,console"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> ://jsbin.com/uXaqIMa/2/edit?js,
 </font></font><a href="http://jsbin.com/uXaqIMa/2/edit?js,console"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">console</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是更详细的版本，在示例中还包括数组：</font><a href="http://jsbin.com/uXaqIMa/1/edit?js,console"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="http://jsbin.com/uXaqIMa/1/edit?js,console"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsbin.com/uXaqIMa/1/edit?js,console</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天LEY</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要注意的另一个区别是</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值的</font><font style="vertical-align: inherit;">处理</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>mergeInto = { a: 1}<font></font>
toMerge = {a : undefined, b:undefined}<font></font>
lodash.extend({}, mergeInto, toMerge) // =&gt; {a: undefined, b:undefined}<font></font>
lodash.merge({}, mergeInto, toMerge)  // =&gt; {a: 1, b:undefined}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此</font></font><code>merge</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会将</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值</font><font style="vertical-align: inherit;">合并</font><font style="vertical-align: inherit;">为定义的值。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙小卤蛋Tom</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你想有一个深拷贝没有覆盖同时保持相同的</font></font><code>obj</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考</font></font></p>

<p><code>obj = _.assign(obj, _.merge(obj, [source]))</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇飞云</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从语义的角度考虑它们的作用可能也会有所帮助：</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">     _。分配</font></font></h2>

   <pre class="lang-none prettyprint-override"><code>   will assign the values of the properties of its second parameter and so on,<font></font>
   as properties with the same name of the first parameter. (shallow copy &amp; override)<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">     _。合并</font></font></h2>

   <pre class="lang-none prettyprint-override"><code>   merge is like assign but does not assign objects but replicates them instead.<font></font>
  (deep copy)<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">     _.defaults</font></font></h2>

   <pre class="lang-none prettyprint-override"><code>   provides default values for missing values.<font></font>
   so will assign only values for keys that do not exist yet in the source.<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">     _.defaultsDeep</font></font></h2>

   <pre class="lang-none prettyprint-override"><code>   works like _defaults but like merge will not simply copy objects<font></font>
   and will use recursion instead.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我相信，从语义的角度学习这些方法将使您更好地“猜测”现有值和不存在值的所有不同方案的行为。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
