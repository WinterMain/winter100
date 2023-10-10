---
layout: question
title:  Vue和Vuex Getter与通过道具传递状态
date:   2020-03-16T07:31:21.000Z
description: 我见过很多人建议通过道具将状态传递给组件，而不是直接在组件内部访问vue状态，​​以使其更可重用。但是，如果我始终如一地执行此操作，则意味着只有路由根...
img: 
author: 阿飞Pro
category: question
answer: 2
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我见过很多人建议通过道具将状态传递给组件，而不是直接在组件内部访问vue状态，​​以使其更可重用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果我始终如一地执行此操作，则意味着只有路由根组件才可以与商店通信，并且所有数据都需要通过嵌套层次结构传递才能获得最终组件。</font><font style="vertical-align: inherit;">这似乎很容易造成混乱：</font></font></p>

<pre><code>Dashboard<font></font>
   Profile<font></font>
   Billing<font></font>
      History<font></font>
      CreditCards<font></font>
         CreditCard<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何加载用户信用卡的数据？</font><font style="vertical-align: inherit;">在资讯主页中将其一直传递到树下吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1809篇《Vue和Vuex Getter与通过道具传递状态》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋猴子猪猪</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个组件，无论其层次结构位置如何，都可以与商店进行通信。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在每个组件内部，您都可以访问该对象，</font></font><code>this.$store</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此可以</font></font><code>actions</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font><font style="vertical-align: inherit;">调度</font><font style="vertical-align: inherit;">，提交数据</font></font><code>mutations</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">通过</font><font style="vertical-align: inherit;">读取数据</font></font><code>getters</code></p>

<p><a href="https://vuex.vuejs.org/en/state.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读文档以获取更多详细信息：</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过为根实例提供store选项，该商店将被注入到根的所有子组件中，并将以this。$ store的形式在其上可用。 </font></font></p>
</blockquote>

<pre><code>const Counter = {<font></font>
  template: `&lt;div&gt;{{ count }}&lt;/div&gt;`,<font></font>
  computed: {<font></font>
    count () {<font></font>
      return this.$store.state.count<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomTony</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这会造成混乱，您是正确的。</font><font style="vertical-align: inherit;">这是vuex解决的问题之一。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么，您如何决定是通过道具还是使用vuex？</font><font style="vertical-align: inherit;">当我说使用vuex时，我的意思是直接从需要它的组件中访问商店数据。</font><font style="vertical-align: inherit;">诀窍是要考虑每个数据与整个应用程序的关系。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在整个页面，多个DOM层次结构，不同页面等中重复使用的数据是使用vuex的理想情况。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，某些组件是如此紧密地耦合，以至于传递道具是显而易见的解决方案。</font><font style="vertical-align: inherit;">例如，您有一个</font></font><code>list-container</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件，其直接子级是该</font></font><code>list</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件，并且两个组件都需要相同的列表数据。</font><font style="vertical-align: inherit;">在这种情况下，我会将列表数据</font></font><code>list</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为道具</font><font style="vertical-align: inherit;">传递给</font><font style="vertical-align: inherit;">组件。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能对实例属性感兴趣 </font></font><code>$attrs</code></p>

<p><a href="https://vuejs.org/v2/api/#vm-attrs" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://vuejs.org/v2/api/#vm-attrs</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及它的兄弟选项</font></font><code>inheritAttrs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="https://vuejs.org/v2/api/#inheritAttrs" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://vuejs.org/v2/api/#inheritAttrs</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结合使用这两个选项，您可以使用更少的样板代码将道具向下传递到多个组件级别。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
