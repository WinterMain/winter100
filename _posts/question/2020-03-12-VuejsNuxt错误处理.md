---
layout: question
title:  Vue.js：Nuxt错误处理
date:   2020-03-12T07:21:49.000Z
description: 苦苦挣扎以设置vuex的错误处理。似乎有很多方法可以做到这一点，并且关于正确的错误处理的文档很少。尽管尚未找到令人满意的解决方案，但我一直在尝试四种替代方...
img: 
author: 猿Green
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">苦苦挣扎以设置vuex的错误处理。</font><font style="vertical-align: inherit;">似乎有很多方法可以做到这一点，并且关于正确的错误处理的文档很少。</font><font style="vertical-align: inherit;">尽管尚未找到令人满意的解决方案，但我一直在尝试四种替代方案。</font></font></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">备选方案1- </font></font></strong> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">捕获和处理组件上的错误</font></font></em></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></em> <strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">pages / login.vue中：</font></font></em></strong></p>

<pre><code>export default {<font></font>
    methods: {<font></font>
        onLogin() {<font></font>
            this.$store.dispatch('auth/login', {<font></font>
                email: this.email,<font></font>
                password: this.password,<font></font>
            }).then(() =&gt; {<font></font>
                this.$router.push('/home');<font></font>
            }).catch((error) {<font></font>
                // handle error in component<font></font>
            });<font></font>
        },<font></font>
    },<font></font>
}<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></em> <strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">store / auth.js中：</font></font></em></strong></p>

<pre><code>export const actions = {<font></font>
    login({ commit }, { email, password }) {<font></font>
        return this.$axios.post('/api/login', {<font></font>
            email,<font></font>
            password,<font></font>
        }).then((res) =&gt; {<font></font>
            doSomething(res);<font></font>
        });<font></font>
    },<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嗯</font></font></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误未处理并存储在vuex中。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在组件方法中引入了许多样板代码。</font></font></li>
</ul>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">备选方案2- </font></font></strong> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vuex中的捕获和处理错误</font></font></em></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></em> <strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">pages / login.vue中：</font></font></em></strong></p>

<pre><code>export default {<font></font>
    methods: {<font></font>
        onLogin() {<font></font>
            this.$store.dispatch('auth/login', {<font></font>
                email: this.email,<font></font>
                password: this.password,<font></font>
            }).then(() =&gt; {<font></font>
                this.$router.push('/home');<font></font>
            });<font></font>
        },<font></font>
    },<font></font>
}<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></em> <strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">store / auth.js中：</font></font></em></strong></p>

<pre><code>export const actions = {<font></font>
    login({ commit }, { email, password }) {<font></font>
        return this.$axios.post('/api/login', {<font></font>
            email,<font></font>
            password,<font></font>
        }).then((res) =&gt; {<font></font>
            doSomething(res);<font></font>
        }).catch((error) =&gt; {<font></font>
            // store error in application state<font></font>
            commit('SET_ERROR', error);<font></font>
        });<font></font>
    },<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vuex可从任何组件访问错误对象</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以在布局中使用反应性错误组件，当错误状态更改时会显示出来。</font></font></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不确定是否有办法跟踪错误的来源以及从哪个组件抛出错误。</font></font></li>
</ul>

<hr>

<p><strong>Alternative 3 -</strong> <em>Catching errors using axios interceptors</em></p>

<p><em>in</em> <strong><em>plugins/axios.js:</em></strong></p>

<pre><code>export default function({ $axios, store }) {<font></font>
    $axios.onError(error =&gt; {<font></font>
        store.dispatch('setError', error);<font></font>
    });<font></font>
}<font></font>
</code></pre>

<p><em>in</em> <strong><em>pages/login.vue:</em></strong></p>

<pre><code>export default {<font></font>
    methods: {<font></font>
        onLogin() {<font></font>
            this.$store.dispatch('auth/login', {<font></font>
                email: this.email,<font></font>
                password: this.password,<font></font>
            }).then(() =&gt; {<font></font>
                this.$router.push('/home');<font></font>
            });<font></font>
        },<font></font>
    },<font></font>
}<font></font>
</code></pre>

<p><em>in</em> <strong><em>store/auth.js:</em></strong></p>

<pre><code>export const actions = {<font></font>
    login({ commit }, { email, password }) {<font></font>
        return this.$axios.post('/api/login', {<font></font>
            email,<font></font>
            password,<font></font>
        }).then((res) =&gt; {<font></font>
            doSomething(res);<font></font>
        });<font></font>
    },<font></font>
}<font></font>
</code></pre>

<p><strong>PROS</strong></p>

<ul>
<li>Global error handling</li>
<li>No need to catch errors in either vuex or component</li>
<li>No boiler-plate code</li>
</ul>

<p><strong>CONS</strong></p>

<ul>
<li>All exceptions are unhandled, meaning non-axios errors are uncaught.</li>
</ul>

<hr>

<p><strong>Alternative 4 -</strong> <em>Custom error plugin</em></p>

<p>I've been experimenting in implementing a custom plugin that catches all exceptions, but I'm not succeeding in making it work.</p>

<p><em>in</em> <strong><em>plugins/catch.js:</em></strong></p>

<pre><code>export default (ctx, inject) =&gt; {<font></font>
    const catchPlugin = function (func) {<font></font>
        return async function (args) {<font></font>
            try {<font></font>
                await func(args)<font></font>
            } catch (e) {<font></font>
                return console.error(e)<font></font>
            }<font></font>
        }<font></font>
    };<font></font>
    ctx.$catch = catchPlugin;<font></font>
    inject('catch', catchPlugin);<font></font>
}<font></font>
</code></pre>

<p><em>in</em> <strong><em>pages/login.vue:</em></strong></p>

<pre><code>export default {<font></font>
    methods: {<font></font>
        onLogin: this.$catch(async function () {<font></font>
            await this.$store.dispatch('auth/login', { email: this.email, password: this.password });<font></font>
            this.$router.push('/home');<font></font>
        }),<font></font>
    },<font></font>
}<font></font>
</code></pre>

<p><strong>PROS</strong></p>

<ul>
<li>No boilerplate.</li>
<li>All errors caught in plugin.</li>
</ul>

<p><strong>CONS</strong></p>

<ul>
<li>I cannot make it work. :(</li>
</ul>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的印象是，缺少有关vue / nuxt中错误处理的文档。</font><font style="vertical-align: inherit;">有人可以选择第四个替代方法吗？</font><font style="vertical-align: inherit;">这样理想吗？</font><font style="vertical-align: inherit;">还有其他选择吗？</font><font style="vertical-align: inherit;">什么是常规？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢您的时间！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1049篇《Vue.js：Nuxt错误处理》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
