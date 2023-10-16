---
layout: question
title:  如何从另一个vuex模块访问getter？
date:   2020-03-11T03:51:25.000Z
description: 在vuex getter中，我知道可以从另一个vuex模块访问状态，如下所示：pages  (state, getters, rootState) =...
img: 
author: Near神乐路易
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在vuex getter中，我知道可以从另一个vuex模块访问状态，如下所示：</font></font></p>

<pre><code>pages: (state, getters, rootState) =&gt; {<font></font>
    console.log(rootState);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何从另一个vuex模块而不是状态访问getter？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还有另一个vuex模块</font><font style="vertical-align: inherit;">，需要访问它的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">过滤器</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我已经尝试过了：</font></font></p>

<pre><code>rootState.filters.activeFilters
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>activeFilters</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的吸气剂</font><font style="vertical-align: inherit;">在哪里，</font><font style="vertical-align: inherit;">但这行不通。</font><font style="vertical-align: inherit;">使用</font></font><code>rootState.filters.getters.activeFilters</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也不起作用。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第628篇《如何从另一个vuex模块访问getter？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此示例用于将getter从一个模块访问到另一个模块的动作中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面是</font></font><code>user.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有吸气剂的模块</font></font></p>

<pre><code>isUserAuthenticated: state =&gt; {<font></font>
  return !(state.token == null);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要在</font></font><code>post.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块操作中</font><font style="vertical-align: inherit;">访问它</font></font></p>

<pre><code>validateAction(vuexContext, actionDetails) {<font></font>
  return new Promise((resolve, reject) =&gt; {<font></font>
<font></font>
    if (vuexContext.rootGetters["user/isUserAuthenticated"]) {<font></font>
        console.log("User is authenticated");<font></font>
    } else {<font></font>
        console.log("User is not authenticated");<font></font>
    }<font></font>
  });<font></font>
...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这会有所帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near神乐路易</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不得不仔细阅读文档，但我发现了它：</font></font></p>

<p><a href="https://vuex.vuejs.org/en/api.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://vuex.vuejs.org/en/api.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（Ctrl + F在该页面上搜索RootGetters）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的代码变成：</font></font></p>

<pre><code>pages: (state, getters, rootState, rootGetters) =&gt; {}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，所有rootGetters都是全局的，您不再像rootState那样使用它，而是在该状态之前为模块名称加上状态前缀。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需从另一个模块调用getter，如下所示：</font></font></p>

<pre><code>rootGetters.activeFilters
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这将对将来遇到这种情况的人有所帮助。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
