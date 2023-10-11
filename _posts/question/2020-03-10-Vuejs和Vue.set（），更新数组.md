---
layout: question
title:  Vuejs和Vue.set（），更新数组
date:   2020-03-10T06:09:57.000Z
description: 我是Vuejs的新手。做了些什么，但我不知道这是简单/正确的方法。我想要的是我想要数组中的一些日期，并在事件中更新它们。首先，我尝试了Vue.se...
img: 
author: 村村老丝
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是Vuejs的新手。</font><font style="vertical-align: inherit;">做了些什么，但我不知道这是简单/正确的方法。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要的是</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要数组中的一些日期，并在事件中更新它们。</font><font style="vertical-align: inherit;">首先，我尝试了Vue.set，但没有成功。</font><font style="vertical-align: inherit;">现在，在更改我的数组项之后：</font></font></p>

<pre><code>this.items[index] = val;<font></font>
this.items.push();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我没有将push（）推送到任何数组，它会更新。。但是有时最后一项会被隐藏，以某种方式...我认为此解决方案有点怪异，如何使其稳定？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的代码在这里：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>new Vue({<font></font>
  el: '#app',<font></font>
  data: {<font></font>
  	f: 'DD-MM-YYYY',<font></font>
    items: [<font></font>
      "10-03-2017",<font></font>
      "12-03-2017"<font></font>
    ]<font></font>
  },<font></font>
  methods: {<font></font>
    <font></font>
    cha: function(index, item, what, count) {<font></font>
    	console.log(item + " index &gt; " + index);<font></font>
      val = moment(this.items[index], this.f).add(count, what).format(this.f);<font></font>
  		this.items[index] = val;<font></font>
      this.items.push();<font></font>
      console.log("arr length:  " + this.items.length);<font></font>
    }<font></font>
  }<font></font>
})</code></pre>
<pre class="snippet-code-css lang-css prettyprint-override"><code>ul {<font></font>
  list-style-type: none;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.11/vue.min.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js"&gt;&lt;/script&gt;<font></font>
&lt;div id="app"&gt;<font></font>
  &lt;ul&gt;<font></font>
    &lt;li v-for="(index, item) in items"&gt;<font></font>
    &lt;br&gt;&lt;br&gt;<font></font>
      &lt;button v-on:click="cha(index, item, 'day', -1)"&gt;<font></font>
      - day&lt;/button&gt;<font></font>
      {{ item }}<font></font>
      &lt;button v-on:click="cha(index, item, 'day', 1)"&gt;<font></font>
      + day&lt;/button&gt;<font></font>
    &lt;br&gt;&lt;br&gt;<font></font>
    &lt;/li&gt;<font></font>
  &lt;/ul&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第493篇《Vuejs和Vue.set（），更新数组》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯LEY</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑2</font></font></h1>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font><font style="vertical-align: inherit;">需要反应性的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象更改</font></font><code>Vue.set(object, prop, value)</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于数组突变，您可以在</font><a href="https://vuejs.org/v2/guide/list.html#Array-Change-Detection" rel="noreferrer"><font style="vertical-align: inherit;">此处</font></a><font style="vertical-align: inherit;">查看当前支持的列表</font></font><a href="https://vuejs.org/v2/guide/list.html#Array-Change-Detection" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></li>
</ul>

<hr>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑1</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于vuex，您将要做 </font></font><code>Vue.set(state.object, key, value)</code></p>

<hr>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原版的</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，仅针对其他提出此问题的人。</font><font style="vertical-align: inherit;">它出现在Vue 2. *中的某个点上，他们</font></font><code>this.items.$set(index, val)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取而代之</font></font><code>this.$set(this.items, index, val)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">拼接仍然可用，这是vue </font></font><a href="https://vuejs.org/v2/guide/list.html#Array-Change-Detection" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可用的阵列突变方法的</font><a href="https://vuejs.org/v2/guide/list.html#Array-Change-Detection" rel="noreferrer"><font style="vertical-align: inherit;">链接</font></a><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
