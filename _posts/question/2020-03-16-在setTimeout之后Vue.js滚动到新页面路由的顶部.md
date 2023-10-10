---
layout: question
title:  在setTimeout之后Vue.js滚动到新页面路由的顶部
date:   2020-03-16T02:08:09.000Z
description: 当滚动到新路线顶部时，我的页面过渡效果不佳。我想等待100毫秒，然后它会自动滚动到顶部。以下代码根本不会滚动。有没有办法做到这一点？export de...
img: 
author: 番长路易
category: question
answer: 4
tags: Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当滚动到新路线顶部时，我的页面过渡效果不佳。</font><font style="vertical-align: inherit;">我想等待100毫秒，然后它会自动滚动到顶部。</font><font style="vertical-align: inherit;">以下代码根本不会滚动。</font><font style="vertical-align: inherit;">有没有办法做到这一点？</font></font></p>

<pre><code>export default new Router({<font></font>
    mode: 'history',<font></font>
    routes: [<font></font>
        {<font></font>
            path: '/',<font></font>
            name: 'Home',<font></font>
            component: Home<font></font>
        }<font></font>
    ],<font></font>
    scrollBehavior (to, from, savedPosition) {<font></font>
        setTimeout(() =&gt; {<font></font>
            return { x: 0, y: 0 }<font></font>
        }, 100);<font></font>
    }<font></font>
})<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1666篇《在setTimeout之后Vue.js滚动到新页面路由的顶部》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋梅蛋蛋</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当使用客户端路由时，我们可能希望在导航到新路由时滚动到顶部，或者像真实页面重新加载一样保留历史记录条目的滚动位置。</font><font style="vertical-align: inherit;">通过vue-router，您可以实现这些目标，甚至更好，还可以完全自定义路线导航上的滚动行为。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：仅当浏览器支持时，此功能才可用</font></font></strong> <code>history.pushState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>scrollBehavior (to, from, savedPosition) {<font></font>
  return { x: 0, y: 0 }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有保存的位置：</font></font></strong></p>

<pre><code>scrollBehavior (to, from, savedPosition) {<font></font>
  if (savedPosition) {<font></font>
    return savedPosition<font></font>
  } else {<font></font>
    return { x: 0, y: 0 }<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><a href="https://router.vuejs.org/guide/advanced/scroll-behavior.html#scroll-behavior" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解更多信息</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端猪猪GO</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他答案无法处理一些极端情况，例如：</font></font></p>

<ol>
<li><a href="https://router.vuejs.org/guide/advanced/scroll-behavior.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保存的位置</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -当用户单击后退或前进位置时，将发生保存的位置。</font><font style="vertical-align: inherit;">我们要保持用户正在查看的位置。</font></font></li>
<li><a href="https://router.vuejs.org/guide/advanced/scroll-behavior.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哈希链接</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -例如，</font></font><code>http://example.com/foo#bar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要导航到一个页面上的元素</font></font><code>id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>bar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，在所有其他情况下，我们都可以导航到页面顶部。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是处理以上所有内容的示例代码：</font></font></p>

<pre><code>const router = new VueRouter({<font></font>
  mode: "history",<font></font>
  base: process.env.BASE_URL,<font></font>
  routes,<font></font>
  scrollBehavior: (to, from, savedPosition) =&gt; {<font></font>
    if (savedPosition) {<font></font>
      return savedPosition;<font></font>
    } else if (to.hash) {<font></font>
      return {<font></font>
        selector: to.hash<font></font>
      };<font></font>
    } else {<font></font>
      return { x: 0, y: 0 };<font></font>
    }<font></font>
  }<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙Green阳光</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您希望在每条路径上都发生这种情况，可以</font><font style="vertical-align: inherit;">在路由器</font><font style="vertical-align: inherit;">中的before </font></font><a href="https://router.vuejs.org/en/advanced/navigation-guards.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">挂钩</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font><font style="vertical-align: inherit;">这样做</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>const router = new VueRouter({ ... })<font></font>
<font></font>
router.beforeEach(function (to, from, next) { <font></font>
    setTimeout(() =&gt; {<font></font>
        window.scrollTo(0, 0);<font></font>
    }, 100);<font></font>
    next();<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是旧版本的vue-router，请使用：</font></font></p>

<pre><code>router.beforeEach(function (transition) { <font></font>
    setTimeout(() =&gt; {<font></font>
        window.scrollTo(0, 0);<font></font>
    }, 100);<font></font>
    transition.next();<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长路易</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能不是最好的方法，但是要添加</font></font></p>

<p><code>document.body.scrollTop = document.documentElement.scrollTop = 0;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在路由的核心组件（在本例中为</font></font><code>Home</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font><code>mounted()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数中实现了我想要的。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
