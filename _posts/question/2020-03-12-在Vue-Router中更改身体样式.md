---
layout: question
title:  在Vue Router中更改身体样式
date:   2020-03-12T12:28:17.000Z
description: 我正在使用两页的Vue路由器：let routes = \[    {        path  '/',        component  r...
img: 
author: A米亚
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用</font><font style="vertical-align: inherit;">两页的</font></font><a href="https://github.com/vuejs/vue-router" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue路由器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>let routes = [<font></font>
    {<font></font>
        path: '/',<font></font>
        component: require('./components/HomeView.vue')<font></font>
    },<font></font>
    {<font></font>
        path: '/intro',<font></font>
        component: require('./components/IntroView.vue')<font></font>
    }<font></font>
]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了我的每个组件都有不同的身体样式之外，这都可以正常工作：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HomeView.vue：</font></font></strong></p>

<pre><code>&lt;template&gt;<font></font>
    &lt;p&gt;This is the home page!&lt;/p&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
    export default {<font></font>
<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
<font></font>
&lt;style&gt;<font></font>
    body {<font></font>
        background: red;<font></font>
    }<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IntroView.vue：</font></font></strong></p>

<pre><code>&lt;template&gt;<font></font>
    &lt;div&gt;<font></font>
        &lt;h1&gt;Introduction&lt;/h1&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
    export default {<font></font>
<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
<font></font>
&lt;style&gt;<font></font>
    body {<font></font>
        background: pink;<font></font>
    }<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的目标是使这两个页面具有不同的背景样式（最终在它们之间进行过渡）。</font><font style="vertical-align: inherit;">但是，当我转到</font></font><code>home</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路线（带有</font></font><code>red</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景），然后单击</font></font><code>intro</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路线时，背景颜色保持不变</font></font><code>red</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我希望将其更改为</font></font><code>pink</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑： 
 </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">index.html：</font></font></strong></p>

<pre><code>  &lt;body&gt;<font></font>
    &lt;div id="app"&gt;<font></font>
        &lt;router-link to="/" exact&gt;Home&lt;/router-link&gt;<font></font>
        &lt;router-link to="/intro"&gt;Introduction&lt;/router-link&gt;<font></font>
        &lt;router-view&gt;&lt;/router-view&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;script src="/dist/build.js"&gt;&lt;/script&gt;<font></font>
  &lt;/body&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Eva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在style元素中使用scoped属性。</font><font style="vertical-align: inherit;">然后，样式将仅限于该vue文件。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HomeView.vue：</font></font></strong></p>

<pre><code>&lt;template&gt;<font></font>
    &lt;p&gt;This is the home page!&lt;/p&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
    export default {<font></font>
<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
<font></font>
&lt;style scoped&gt;<font></font>
    body {<font></font>
        background: red;<font></font>
    }<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IntroView.vue：</font></font></strong></p>

<pre><code>&lt;template&gt;<font></font>
    &lt;div&gt;<font></font>
        &lt;h1&gt;Introduction&lt;/h1&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
    export default {<font></font>
<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
<font></font>
&lt;style scoped&gt;<font></font>
    body {<font></font>
        background: pink;<font></font>
    }<font></font>
&lt;/style&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Itachi小小</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您可以使用此</font></font></p>

<ul>
<li><a href="https://www.npmjs.com/package/vue-body-class" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue-body-class NPM</font></font></a> </li>
<li><a href="https://github.com/nikolaynesov/vue-body-class" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vue-body-class GitHub</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它允许使用vue-router控制您的页面正文类。</font><font style="vertical-align: inherit;">遇到类似问题时写了这个。</font><font style="vertical-align: inherit;">它也指</font></font><a href="https://stackoverflow.com/questions/42906996/add-a-class-to-body-when-component-is-clicked/47097681#47097681"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击组件时向主体添加类？</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin老丝</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以使用</font></font><code>afterEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">钩子</font><font style="vertical-align: inherit;">直接在路由器文件中执行此操作</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>mainRouter.afterEach((to) =&gt; {<font></font>
    if (["dialogs", "snippets"].includes(to.name)) {<font></font>
        document.body.style.backgroundColor = "#F7F7F7";<font></font>
        // or document.body.classList.add(className);<font></font>
    } else {<font></font>
        document.body.style.backgroundColor = "#FFFFFF";<font></font>
        // or document.body.classList.remove(className);<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><a href="https://router.vuejs.org/guide/advanced/navigation-guards.html#global-after-hooks" rel="nofollow noreferrer"><code>afterEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 挂钩文件</font></font></a></p>

<p><code>to</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个路线对象，其中包含路线名称（如果已命名），路径等   </font></font><a href="https://router.vuejs.org/api/#route-object-properties" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。所有道具的文档</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
