---
layout: question
title:  如何在Vue JS中使用v-for和orderBy过滤器反转数组的顺序？
date:   2020-03-11T09:24:06.000Z
description: 我正在使用Vue JS进行视图模型绑定。在我的data对象中，我有一系列按升序排列（从最旧到最新）的项目，出于基于代码的原因，我想保持这种方式。var...
img: 
author: 逆天理查德
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Vue JS进行视图模型绑定。</font><font style="vertical-align: inherit;">在我的</font></font><code>data</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象中，我有一系列按升序排列（从最旧到最新）的项目，出于基于代码的原因，我想保持这种方式。</font></font></p>

<pre><code>var v = new Vue({<font></font>
    el: '#app',<font></font>
    data: {<font></font>
        items: [<font></font>
            {id: 51,  message: 'first'},<font></font>
            {id: 265, message: 'second'},<font></font>
            {id: 32,  message: 'third'}<font></font>
        ],<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当我在模板中显示数组时，我想颠倒顺序，以使其降序排列（从最新到最旧）。</font><font style="vertical-align: inherit;">我尝试了以下方法：</font></font></p>

<pre><code>&lt;ol&gt;<font></font>
    &lt;li v-for="item in items | orderBy -1" track-by="id"&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不起作用，因为</font></font><code>orderBy</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">过滤器似乎要求将字段名称作为其第一个参数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么方法可以</font></font><code>v-for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>orderBy</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">过滤器</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">语法</font><font style="vertical-align: inherit;">在模板中完成此操作</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">还是我必须创建一个自定义</font></font><code>reverse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">过滤器？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第759篇《如何在Vue JS中使用v-for和orderBy过滤器反转数组的顺序？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞蛋蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue2更新</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想展示一些可以处理数据而不使用过滤器的方法，因为</font><font style="vertical-align: inherit;">Vue2 </font><font style="vertical-align: inherit;">中</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不推荐</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用过滤器</font><font style="vertical-align: inherit;">：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内部计算属性</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用计算属性代替过滤器，这会更好，因为您可以在组件中的所有位置使用该数据，而不仅仅是在模板中使用：
 </font></font><a href="https://jsfiddle.net/n9woazy4/2/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsFiddle</font></font></a></p>

<pre><code>computed: {<font></font>
    reverseItems() {<font></font>
        return this.items.slice().reverse();<font></font>
  }     <font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Vuex getter属性内</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Vuex，并且您将数据存储在</font></font><code>store.state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">object中。</font><font style="vertical-align: inherit;">对状态中存储的数据进行转换的最好方法是在</font></font><code>getters</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象中进行转换（</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，对项目列表进行过滤并对其进行计数，颠倒顺序等</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<pre><code>getters: {<font></font>
    reverseItems: state =&gt; {<font></font>
        return state.items.slice().reverse();<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并从组件计算属性的getter获取状态：</font></font></p>

<pre><code>computed: {<font></font>
    showDialogCancelMatch() {<font></font>
        return this.$store.state.reverseItems;<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端前端猴子</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单明了的解决方案：</font></font></p>

<pre><code>&lt;li v-for="item in items.slice().reverse()"&gt;<font></font>
//do something with item ...<font></font>
&lt;/li&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan小小斯丁</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只改变显示的顺序，而不是颠倒要创建的元素的顺序。</font></font></p>

<pre><code>&lt;ol class="reverseorder"&gt;<font></font>
    &lt;li v-for="item in items" track-by="id"&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有我的CSS</font></font></p>

<pre><code>&lt;style&gt;<font></font>
.reverseorder {<font></font>
  display: flex;<font></font>
  flex-direction: column-reverse;<font></font>
}<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需克隆阵列并将其反转。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三小哥</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于我的用例（显然，它与OP不同），我想</font><font style="vertical-align: inherit;">在v-for“循环”中</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以相反的顺序排列</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组的索引</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的解决方案是创建一个Vue应用程序方法</font></font><code>reverseRange(length)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该</font><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">返回一个从长度1到0的整数数组。然后，我在</font></font><code>v-for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指令中</font><font style="vertical-align: inherit;">使用了它，</font><font style="vertical-align: inherit;">并在</font></font><code>myArray[index]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次需要时</font><font style="vertical-align: inherit;">简单地引用Array元素</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，索引是相反的顺序，然后我就可以使用它们来访问数组的元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对像我这样对自己的要求有细微差别的人有所帮助。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
