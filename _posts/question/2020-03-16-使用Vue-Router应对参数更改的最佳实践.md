---
layout: question
title:  使用Vue Router应对参数更改的最佳实践
date:   2020-03-16T07:27:15.000Z
description: 当将Vue Router与类似的路由一起使用时，/foo/ val您必须添加观察者以对参数更改做出反应。这会导致在URL中具有参数的所有视图中出现令人讨厌...
img: 
author: 西里A
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当将Vue Router与类似的路由一起使用时，</font></font><code>/foo/:val</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您必须添加观察者以</font></font><a href="https://router.vuejs.org/en/essentials/dynamic-matching.html#reacting-to-params-changes" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对参数更改做出反应</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这会导致在URL中具有参数的所有视图中出现令人讨厌的重复代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能类似于以下示例：</font></font></p>

<pre><code>export default {<font></font>
    // [...]<font></font>
    created() {<font></font>
        doSomething.call(this);<font></font>
    },<font></font>
    watch: {<font></font>
        '$route' () {<font></font>
            doSomething.call(this);<font></font>
        }<font></font>
    },<font></font>
}<font></font>
<font></font>
function doSomething() {<font></font>
    // e.g. request API, assign view properties, ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有其他方法可以克服吗？</font><font style="vertical-align: inherit;">处理程序</font></font><code>created</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>$route</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改</font><font style="vertical-align: inherit;">的处理程序</font><font style="vertical-align: inherit;">可以合并吗？</font><font style="vertical-align: inherit;">是否可以禁用组件的重用，以便根本不需要观察者？</font><font style="vertical-align: inherit;">我正在使用Vue 2，但这对于Vue 1也可能很有趣。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里A</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于</font></font><a href="https://github.com/vuejs/vue-router/issues/474#issuecomment-254252898" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GitHub问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我刚刚找到了一个可能的答案</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用</font><font style="vertical-align: inherit;">也用于</font><font style="vertical-align: inherit;">让Vue跟踪视图中的更改</font><font style="vertical-align: inherit;">的</font></font><a href="https://vuejs.org/guide/list.html#key" rel="noreferrer"><code>key</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font></font></a><font style="vertical-align: inherit;"></font><code>v-for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">为此，您必须将属性添加到</font></font><code>router-view</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素：</font></font></p>

<pre><code>&lt;router-view :key="$route.fullPath"&gt;&lt;/router-view&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其添加到视图后，您无需再观看</font></font><code>$route</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了。</font><font style="vertical-align: inherit;">相反，Vue.js将创建该组件的全新实例，并调用</font></font><code>created</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回调。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这是一个全有或全无的解决方案。</font><font style="vertical-align: inherit;">在我当前正在开发的小型应用程序上，它似乎运行良好。</font><font style="vertical-align: inherit;">但这可能会影响其他应用程序的性能。</font><font style="vertical-align: inherit;">如果您确实只想仅对某些路由禁用视图的重用，则可以查看</font><a href="https://github.com/vuejs/vue-router/issues/474#issuecomment-258139659" rel="noreferrer"><font style="vertical-align: inherit;">根据route</font></a><font style="vertical-align: inherit;">设置</font></font><code>key</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的值</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是我真的不喜欢这种方法。</font></font><a href="https://github.com/vuejs/vue-router/issues/474#issuecomment-258139659" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
