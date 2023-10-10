---
layout: question
title:  组件内Navigation Guard回调不起作用：Nuxt JS和\`beforeRouteEnter\`
date:   2020-03-24T08:01:43.000Z
description: 我有一个搜索表单，并使用Nuxt JS构建了结果页面。如果表单返回错误，我试图将结果页面重定向pages/results/index.vue回搜索页面pa...
img: 
author: 泡芙
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个搜索表单，并使用Nuxt JS构建了结果页面。</font><font style="vertical-align: inherit;">如果表单返回错误，</font><font style="vertical-align: inherit;">我试图将结果页面重定向</font></font><code>pages/results/index.vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回搜索页面</font></font><code>pages/search/index.vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试</font><a href="https://router.vuejs.org/guide/advanced/navigation-guards.html#in-component-guards" rel="nofollow noreferrer"><font style="vertical-align: inherit;">根据Vue文档</font></a><font style="vertical-align: inherit;">使用组件</font></font><a href="https://router.vuejs.org/guide/advanced/navigation-guards.html#in-component-guards" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内防护</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据文档：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，您可以通过将回调传递给next来访问实例。</font><font style="vertical-align: inherit;">确认导航后，将调用该回调，并将组件实例作为参数传递给回调：</font></font></p>

<pre><code>beforeRouteEnter (to, from, next) {<font></font>
  next(vm =&gt; {<font></font>
    // access to component instance via `vm`<font></font>
  })<font></font>
}<font></font>
</code></pre>
</blockquote>

<pre class="lang-sh prettyprint-override"><code>// version info<font></font>
<font></font>
├─┬ nuxt@2.10.1<font></font>
│ ├─┬ @nuxt/builder@2.10.1<font></font>
│ │ └─┬ @nuxt/vue-app@2.10.1<font></font>
│ │   └── vue@2.6.10  deduped<font></font>
│ └─┬ @nuxt/core@2.10.1<font></font>
│   └─┬ @nuxt/vue-renderer@2.10.1<font></font>
│     └── vue@2.6.10  deduped<font></font>
└─┬ vue-glide-js@1.3.12<font></font>
  └── vue@2.6.10<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的主要问题是</font></font><code>next()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导航卫士</font><font style="vertical-align: inherit;">中的</font><font style="vertical-align: inherit;">函数</font><font style="vertical-align: inherit;">回调</font><font style="vertical-align: inherit;">似乎无法重新路由页面。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面）</font></font></p>

<pre class="lang-js prettyprint-override"><code>// page/search/index.vue<font></font>
<font></font>
&lt;template&gt;<font></font>
  ...<font></font>
  &lt;nuxt-link to="/results" @click.native="doSearch"&gt;<font></font>
    Show Results<font></font>
  &lt;/nuxt-link&gt;<font></font>
  ...<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
export default {<font></font>
  ...<font></font>
  methods: {<font></font>
    doSearch () {<font></font>
      ... // validates search fields and adds content to store<font></font>
    }<font></font>
  },<font></font>
  ...<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的方法工作正常，可以在其中</font></font><code>doSearch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">验证表单并将结果（以及所有错误）添加到商店中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是接下来...</font></font></p>

<p>(the <em>to</em> page)</p>

<pre class="lang-js prettyprint-override"><code>// pages/results/index.vue<font></font>
<font></font>
&lt;script&gt;<font></font>
export default {<font></font>
  ...<font></font>
  beforeRouteEnter (to, from, next) {<font></font>
    next((vm) =&gt; {<font></font>
      console.log(vm.validateRoute()) // works: '/search'<font></font>
      vm.validateRoute()              // does not work: does nothing<font></font>
    })<font></font>
  },<font></font>
  ...<font></font>
  computed: {<font></font>
    errors () {<font></font>
      return this.$store.state.errors<font></font>
    }<font></font>
  },<font></font>
  ...<font></font>
  async fetch ({ store, params }) {<font></font>
    await store.dispatch('searchresults/GET_RESULTS')<font></font>
  },<font></font>
  ...<font></font>
  methods: {<font></font>
    validateRoute () {<font></font>
      let route = true<font></font>
      if (this.errors.length &gt; 0) {<font></font>
        route = '/search'<font></font>
      }<font></font>
      console.log(this.erros.length)  // works: 7<font></font>
      console.log(route)              // works: '/search'<font></font>
      return route<font></font>
    }<font></font>
  },<font></font>
  ...<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p>The callback in <code>beforeRouteEnter</code> does not appear to be evaluated and does not cause the route to change. Note the logging shows the callback is firing and returning the proper value(s).</p>

<p>If I explicitly define the route, without using a callback function, it works:</p>

<pre class="lang-js prettyprint-override"><code>// pages/results/index.vue<font></font>
<font></font>
&lt;script&gt;<font></font>
export default {<font></font>
  ...<font></font>
  beforeRouteEnter (to, from, next) {<font></font>
    next('/search')                   // works: re-routes to '/search' every time<font></font>
  },<font></font>
  ...<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p>I tried several iterations of the <code>next(callback)</code> with limited success...</p>

<pre class="lang-js prettyprint-override"><code>next(() =&gt; { return false })          // does not work
</code></pre>

<pre class="lang-js prettyprint-override"><code>next(function () { return false })    // does not work
</code></pre>

<p>But only explicit declarations work...</p>

<pre class="lang-js prettyprint-override"><code>next({ path: false })                 // works: prevents route change
</code></pre>

<pre class="lang-js prettyprint-override"><code>next({ path: '/search' })             // works: changes route to '/search'
</code></pre>

<p>I'm at a total loss; is this a bug, or am I missing something?</p>

<p><strong>Addendum</strong></p>

<p>I previously tried using middleware as mentioned in the <a href="https://nuxtjs.org/api/pages-middleware/" rel="nofollow noreferrer">Nuxt documentation here</a>. However this resulted in an endless loop, as discussed in <a href="https://dev.to/husteadrobert/how-to-use-global-navigation-guards-with-nuxt-middleware-and-why-you-absolutely-should-not-7bl" rel="nofollow noreferrer">this blog post</a>.</p>

<pre class="lang-js prettyprint-override"><code>// middleware/validate.js<font></font>
<font></font>
export default function ({ store, redirect }) {<font></font>
  console.log('middleware: validate')           // 'middleware: validate'<font></font>
  if (store.state.errors.length &gt; 0) {<font></font>
    return redirect('/search')                  // ...endless loop<font></font>
  }<font></font>
  return true                                   // otherwise this works<font></font>
}<font></font>
<font></font>
// nuxt.config.js<font></font>
<font></font>
export default {<font></font>
  ...<font></font>
  router: {<font></font>
    middleware: "validate"<font></font>
  },<font></font>
  ...<font></font>
}<font></font>
</code></pre>

<p><strong>Fixed</strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如</font></font><a href="https://stackoverflow.com/users/10990737/ifaruki"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ifaruki</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指出的</font><a href="https://stackoverflow.com/users/10990737/ifaruki"><font style="vertical-align: inherit;">那样</font></a><font style="vertical-align: inherit;">，将中间件调用放在页面组件内部可解决无休止的循环问题：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下一步是将中间件添加到页面pages / results / index.vue中，如下所示：</font></font></p>

<pre><code>export default {<font></font>
   middleware: 'validate'<font></font>
} <font></font>
</code></pre>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><a href="https://nuxtjs.org/guide/routing#middleware" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在文档的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结尾发现了这一点，</font><font style="vertical-align: inherit;">它似乎是</font></font><a href="https://router.vuejs.org/guide/advanced/navigation-guards.html#in-component-guards" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue JS组件内</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">防护的Nuxt方法</font><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以将中间件添加到特定的布局或页面：</font></font></p>
  
  <p><code>pages/index.vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 要么 </font></font><code>layouts/default.vue</code></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：facepalm：</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
