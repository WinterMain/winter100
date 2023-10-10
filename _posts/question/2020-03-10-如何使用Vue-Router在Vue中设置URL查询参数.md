---
layout: question
title:  如何使用Vue-Router在Vue中设置URL查询参数
date:   2020-03-10T02:53:39.000Z
description: 我在更改输入字段时尝试使用Vue-router设置查询参数，我不想导航到其他页面，而只想在同一页面上修改url查询参数，我这样做是：this.$rou...
img: 
author: 理查德Itachi
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">在更改输入字段</font><font style="vertical-align: inherit;">时尝试使用</font></font><a href="https://github.com/vuejs/vue-router" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue-router</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置查询参数</font><font style="vertical-align: inherit;">，我不想导航到其他页面，而只想在同一页面上修改url查询参数，我这样做是：</font></font></p>

<pre><code>this.$router.replace({ query: { q1: "q1" } })
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这也会刷新页面并将y位置设置为0，即滚动到页面顶部。</font><font style="vertical-align: inherit;">这是设置URL查询参数的正确方法，还是有更好的方法呢？</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的路由器代码：</font></font></p>

<pre><code>export default new Router({<font></font>
  mode: 'history',<font></font>
  scrollBehavior: (to, from, savedPosition)  =&gt; {<font></font>
    if (to.hash) {<font></font>
      return {selector: to.hash}<font></font>
    } else {<font></font>
      return {x: 0, y: 0}<font></font>
    }<font></font>
  },<font></font>
  routes: [<font></font>
    ....... <font></font>
    { path: '/user/:id', component: UserView },<font></font>
  ]<font></font>
})<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Itachi</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了一次设置/删除多个查询参数，我将以下方法作为全局混合的一部分（</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指向vue组件）作为结束：</font></font></p>

<pre><code>    setQuery(query){<font></font>
        let obj = Object.assign({}, this.$route.query);<font></font>
<font></font>
        Object.keys(query).forEach(key =&gt; {<font></font>
            let value = query[key];<font></font>
            if(value){<font></font>
                obj[key] = value<font></font>
            } else {<font></font>
                delete obj[key]<font></font>
            }<font></font>
        })<font></font>
        this.$router.replace({<font></font>
            ...this.$router.currentRoute,<font></font>
            query: obj<font></font>
        })<font></font>
    },<font></font>
<font></font>
    removeQuery(queryNameArray){<font></font>
        let obj = {}<font></font>
        queryNameArray.forEach(key =&gt; {<font></font>
            obj[key] = null<font></font>
        })<font></font>
        this.setQuery(obj)<font></font>
    },<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
