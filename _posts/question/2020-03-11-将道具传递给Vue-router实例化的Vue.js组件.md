---
layout: question
title:  将道具传递给Vue-router实例化的Vue.js组件
date:   2020-03-11T04:23:27.000Z
description: 假设我有一个Vue.js组件，如下所示：var Bar = Vue.extend({    props  \['my-props'\],    tem...
img: 
author: 梅乐
category: question
answer: 2
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我有一个Vue.js组件，如下所示：</font></font></p>

<pre><code>var Bar = Vue.extend({<font></font>
    props: ['my-props'],<font></font>
    template: '&lt;p&gt;This is bar!&lt;/p&gt;'<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在vue-router中的某些路由匹配时使用它：</font></font></p>

<pre><code>router.map({<font></font>
    '/bar': {<font></font>
        component: Bar<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，为了将“ myProps”传递给组件，我将执行以下操作：</font></font></p>

<pre><code>Vue.component('my-bar', Bar);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在html中：</font></font></p>

<pre><code>&lt;my-bar my-props="hello!"&gt;&lt;/my-bar&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，当路由匹配时，路由器会自动在router-view元素中绘制组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是，在这种情况下，如何将道具传递给组件？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第663篇《将道具传递给Vue-router实例化的Vue.js组件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro西门</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用：</font></font></p>

<pre class="lang-js prettyprint-override"><code>this.$route.MY_PROP
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获得路线道具</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Itachi</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;router-view :some-value-to-pass="localValue"&gt;&lt;/router-view&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在组件中添加prop：</font></font></p>

<pre><code>props: {<font></font>
      someValueToPass: String<font></font>
    },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vue-router将与组件中的prop匹配</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
