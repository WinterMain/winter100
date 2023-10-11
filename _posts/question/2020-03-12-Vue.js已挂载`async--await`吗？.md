---
layout: question
title:  Vue.js已挂载\`async / await\`吗？
date:   2020-03-12T09:39:03.000Z
description: 我想在中做这样的事情mounted() {}：await fetchData1();await fetchData2UsingData1();do...
img: 
author: TonyStafan
category: question
answer: 2
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在中做这样的事情</font></font><code>mounted() {}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>await fetchData1();<font></font>
await fetchData2UsingData1();<font></font>
doSomethingUsingData1And2();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我想知道这是否有效：</font></font></p>

<pre><code>async mounted() {<font></font>
    await fetchData1();<font></font>
    await fetchData2UsingData1();<font></font>
    doSomethingUsingData1And2();<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的环境中，它不会引起任何错误，并且似乎运行良好。</font><font style="vertical-align: inherit;">但是在这个问题上，</font></font><code>async/await</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在生命周期中没有实现钩子。</font></font></p>

<p><a href="https://github.com/vuejs/vue/issues/7209" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/vuejs/vue/issues/7209</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找不到更多信息，但实际上可用吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1230篇《Vue.js已挂载\`async / await\`吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱飞云泡芙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需使用$ nextTick调用异步函数即可。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之所以可以使用它，是因为在</font><font style="vertical-align: inherit;">挂载组件</font><strong><font style="vertical-align: inherit;">之后</font></strong></font><code>mounted</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">了</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">挂钩</font><font style="vertical-align: inherit;">，换句话说，它将不会等待承诺在渲染之前解决。</font><font style="vertical-align: inherit;">唯一的事情是，在诺言解决之前，您将拥有一个“空”组件。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要的是在数据准备就绪之前不呈现组件，那么您将需要在数据中使用一个标志，与标志一起使用，</font></font><code>v-if</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以在一切准备就绪后呈现组件：</font></font></p>

<pre><code>// in your template<font></font>
&lt;div v-if="dataReady"&gt;<font></font>
    // your html code<font></font>
&lt;/div&gt;<font></font>
<font></font>
<font></font>
// inside your script <font></font>
data () {<font></font>
    return {<font></font>
        dataReady: false,<font></font>
        // other data<font></font>
    }<font></font>
},<font></font>
<font></font>
async mounted() {<font></font>
    await fetchData1();<font></font>
    await fetchData2UsingData1();<font></font>
    doSomethingUsingData1And2();<font></font>
    this.dataReady = true;<font></font>
},<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
