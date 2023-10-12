---
layout: question
title:  Nuxt + Vuex-如何将Vuex模块分解为单独的文件？
date:   2020-03-20T05:11:44.000Z
description: 在Nuxt文件（在这里），它说：“你可以在模块文件有可能分解为单独的文件：state.js，actions.js，mutations.js和getters...
img: 
author: Davaid前端Harry
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Nuxt文件（</font></font><a href="https://nuxtjs.org/guide/vuex-store/#module-files" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），它说：“你可以在模块文件有可能分解为单独的文件：</font></font><code>state.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>actions.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>mutations.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>getters.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我似乎无法找到如何做到这一点的任何例子-大量的打破Vuex店在根级进入的</font></font><code>state.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>actions.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>mutations.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>getters.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，和为单独的模块文件，而是打破了模块本身倒没什么。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以目前我有：</font></font></p>

<pre><code>     ├── assets<font></font>
     ├── components<font></font>
     └── store<font></font>
           ├── moduleOne.js<font></font>
           ├── moduleTwo.js<font></font>
           └── etc...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想拥有的是：</font></font></p>

<pre><code>     ├── assets<font></font>
     ├── components<font></font>
     └── store<font></font>
           └── moduleOne<font></font>
                 └── state.js<font></font>
                 └── getters.js<font></font>
                 └── mutations.js<font></font>
                 └── actions.js<font></font>
           └── moduleTwo<font></font>
                └── etc...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要尝试这一点，</font></font><code>/store/moduleOne/state.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有：</font></font></p>

<pre><code>export const state = () =&gt; {<font></font>
    return {<font></font>
        test: 'test'<font></font>
    }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>/store/moduleOne/getters.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有：</font></font></p>

<pre><code>export const getters = {<font></font>
    getTest (state) {<font></font>
        return state.test;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的组件中，我正在使用 </font></font><code>$store.getters['moduleOne/getters/getTest']</code></p>

<p>However using the debugger and Vue devtools, it seems like state isn't accessible in the getters file - it seems to be looking for a state in the local file, so <code>state.test</code> is undefined.</p>

<p>Attempting to import <code>state</code> from my <code>state.js</code> file into my <code>getters.js</code> file doesn't seem to work either.</p>

<p>Does anyone have an example of how they've managed to break the store down like this in Nuxt?</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2464篇《Nuxt + Vuex-如何将Vuex模块分解为单独的文件？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
